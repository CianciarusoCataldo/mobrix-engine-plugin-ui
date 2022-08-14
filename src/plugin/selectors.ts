/**
 * @file {@link https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=selectors mobrix-engine-plugin-ui selectors} file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineGlobalState } from "mobrix-engine-types";
import { createMoBrixEngineSelector } from "mobrix-engine-tools";

import { UiPluginState } from "./types";

/**
 * Return the {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} state (if not enabled, a default state is returned)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=selectors
 * @see https://github.com/CianciarusoCataldo/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getUIView = createMoBrixEngineSelector(
  (state: Partial<MoBrixEngineGlobalState>): UiPluginState =>
    state.ui || {
      darkMode: false,
      isDrawerOpen: false,
    },
  (uiState) => uiState
);

/**
 * Returns true if dark mode is enabled, false otherwise
 *
 * @see https://cianciarusocataldo.github.io//mobrix-engine/docs
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=selectors
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isInDarkMode = createMoBrixEngineSelector(
  getUIView,
  ({ darkMode }) => darkMode
);

/**
 * Returns true if drawer is opened, false otherwise (if `drawer` is enabled into ui settings)
 *
 * @see https://cianciarusocataldo.github.io//mobrix-engine/docs
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=selectors
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const isDrawerOpen = createMoBrixEngineSelector(
  getUIView,
  (ui) => ui.isDrawerOpen || false
);
