/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Quadratic ease-in/out.
 *
 * @function Vsengine.Math.Easing.Quadratic.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v) {
    if ((v *= 2) < 1) {
        return 0.5 * v * v;
    } else {
        return -0.5 * (--v * (v - 2) - 1);
    }
};

module.exports = InOut;