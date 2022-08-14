/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} reducer file
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineReducerEffects } from "mobrix-engine-types";

import { setDarkMode } from "./actions";
import { UiPluginState } from "./types";

/**
 * {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} reducer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const uiReducer: MoBrixEngineReducerEffects<UiPluginState> = {
  [setDarkMode.type]: (state, action) => ({
    ...state,
    darkMode: action.payload.newDarkMode,
  }),
};

export default uiReducer;
