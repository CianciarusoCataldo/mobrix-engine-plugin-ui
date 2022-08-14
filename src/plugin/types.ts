/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} types definitions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine-engine/docs
 *
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  MoBrixEngineCustomState,
  MoBrixEnginePlugin,
} from "mobrix-engine-types";

/**
 *{@link https://github.com/CianciarusoCataldo/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} state
 *
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPluginState = MoBrixEngineCustomState<{
  /** dark mode status */
  darkMode: boolean;

  isDrawerOpen?: boolean;
}>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} settings
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPluginSettings = MoBrixEngineCustomState<{
  /** Initial dark mode status */
  darkMode?: boolean;

  /** Callbacks called everytime the dark mode status is changed */
  onDarkModeChange?: ((newDarkMode: boolean) => void)[];

  drawer?: boolean;
}>;

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui mobrix-engine-plugin-ui} interface
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export type UiPlugin = MoBrixEnginePlugin<UiPluginSettings>;
