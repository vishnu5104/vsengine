/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A NOOP (No Operation) callback function.
 *
 * Used internally by Vsengine when it's more expensive to determine if a callback exists
 * than it is to just invoke an empty function.
 *
 * @function Vsengine.Utils.NOOP
 * @since 3.0.0
 */
var NOOP = function () {
    //  NOOP
};

module.exports = NOOP;
