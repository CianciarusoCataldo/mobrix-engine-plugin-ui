/**
 * @file {@link https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=actions MoBrix-engine-plugin-ui actions} file
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createMoBrixEngineAction } from "mobrix-engine-tools";

/**
 * Switch dark mode to on/off
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const setDarkMode = createMoBrixEngineAction(
  "@@ui/SWITCH_DARK_MODE",
  (newDarkMode: boolean) => ({
    newDarkMode,
  })
);

/**
 * Open drawer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 * @copyright Cataldo Cianciaruso 2022
 */
export const openDrawer = createMoBrixEngineAction("@@ui/OPEN_DRAWER");

/**
 * Close drawer
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine-plugin-ui/#/?id=actions
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 * @copyright Cataldo Cianciaruso 2022
 */
export const closeDrawer = createMoBrixEngineAction("@@ui/CLOSE_DRAWER");
