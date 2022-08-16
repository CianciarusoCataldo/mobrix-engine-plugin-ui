/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui MoBrix-engine-plugin-ui} init file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { UiPlugin } from "./types";
import initialState from "./initial-state";
import uiReducer from "./reducer";
import * as actions from "./actions";
import { isDrawerOpen, isInDarkMode } from "./selectors";
import { createMoBrixEnginePlugin } from "mobrix-engine-tools";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui MoBrix-engine-plugin-ui} create function. To use this plugin, include it into your
 * mobrix-engine config.
 *
 * @returns `ui` plugin
 *
 * @example <caption> Usage with MoBrix-engine config</caption>
 *
 * //into MoBrix-engine config file
 *
 * const uiPlugin = require("mobrix-engine-plugin-ui");
 *
 * const config = {
 *   appName: "custom-app",
 *   plugins: [uiPlugin],
 *   ui: {
 *     darkMode: true,
 *     onDarkModeChange: [(darkMode) => console.log("new dark mode " + darkMode)],
 *   },
 * };
 *
 * module.exports = { config };
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const uiPlugin: UiPlugin = createMoBrixEnginePlugin("mobrix-engine-ui", () => ({
  field: (config) => {
    const uiConfig = config.ui || {};
    return {
      name: "ui",
      content: {
        darkMode: uiConfig.darkMode || false,
        onDarkModeChange: uiConfig.onDarkModeChange || [],
        drawer: uiConfig.drawer || false,
      },
    };
  },
  reducer: (config) => {
    const basicState = { ...initialState, darkMode: config.ui.darkMode };
    return {
      initialState: config.ui.drawer
        ? { ...basicState, isDrawerOpen: false }
        : basicState,
      slice: "ui",
      effects: config.ui.drawer
        ? {
            ...uiReducer,
            [actions.openDrawer.type]: (state, action) => {
              return { ...state, isDrawerOpen: true };
            },
            [actions.closeDrawer.type]: (state, action) => {
              return { ...state, isDrawerOpen: false };
            },
          }
        : uiReducer,
    };
  },
  designerInteractions: [
    {
      plugin: "mobrix-designer-forms",
      effect: (field, config) => {
        field.getDarkMode = isInDarkMode;

        return field;
      },
    },
    {
      plugin: "mobrix-designer-drawer",
      effect: (field, config) => {
        field.getDarkMode = isInDarkMode;
        field.onClose =
          field.onClose || ((dispatch) => dispatch(actions.closeDrawer()));
        field.getDrawerVisibility = field.getDrawerVisibility || isDrawerOpen;
        return field;
      },
    },
  ],
  interactions: [
    {
      plugin: "mobrix-engine-url-checker",
      effect: (field, config) => {
        field.queryParameters["dark"] = ({ config: paramConfig, urlParam }) => {
          let queryValue: boolean | null = null;
          switch (urlParam.toLowerCase()) {
            case "true": {
              queryValue = true;
            }

            case "false":
              queryValue = false;

            default:
              queryValue = null;
          }

          let configInput = { ...paramConfig };

          configInput.ui.darkMode = queryValue !== null ? queryValue : false;

          return configInput;
        };

        field.before.push("dark");

        return field;
      },
    },
  ],
  middlewares: (config) => {
    const onDarkModeChangeCallbacks = config.ui.onDarkModeChange;

    return {
      middlewares: [
        (action, store) => {
          if (action.type === actions.setDarkMode.type) {
            onDarkModeChangeCallbacks.forEach((callback) => {
              callback(action.payload.newDarkMode);
            });
          }
        },
      ],
    };
  },
}));

export default uiPlugin;
