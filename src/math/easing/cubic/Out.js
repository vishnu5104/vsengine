/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Cubic ease-out.
 *
 * @function Vsengine.Math.Easing.Cubic.Out
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var Out = function (v) {
    return --v * v * v + 1;
};

module.exports = Out;