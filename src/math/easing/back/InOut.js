/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Back ease-in/out.
 *
 * @function Vsengine.Math.Easing.Back.InOut
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [overshoot=1.70158] - The overshoot amount.
 *
 * @return {number} The tweened value.
 */
var InOut = function (v, overshoot) {
    if (overshoot === undefined) {
        overshoot = 1.70158;
    }

    var s = overshoot * 1.525;

    if ((v *= 2) < 1) {
        return 0.5 * (v * v * ((s + 1) * v - s));
    } else {
        return 0.5 * ((v -= 2) * v * ((s + 1) * v + s) + 2);
    }
};

module.exports = InOut;
