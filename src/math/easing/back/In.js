/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Back ease-in.
 *
 * @function Vsengine.Math.Easing.Back.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [overshoot=1.70158] - The overshoot amount.
 *
 * @return {number} The tweened value.
 */
var In = function (v, overshoot) {
    if (overshoot === undefined) {
        overshoot = 1.70158;
    }

    return v * v * ((overshoot + 1) * v - overshoot);
};

module.exports = In;
