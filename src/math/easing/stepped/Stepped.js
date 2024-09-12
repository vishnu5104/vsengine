/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Stepped easing.
 *
 * @function Vsengine.Math.Easing.Stepped
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 * @param {number} [steps=1] - The number of steps in the ease.
 *
 * @return {number} The tweened value.
 */
var Stepped = function (v, steps) {
    if (steps === undefined) {
        steps = 1;
    }

    if (v <= 0) {
        return 0;
    } else if (v >= 1) {
        return 1;
    } else {
        return (((steps * v) | 0) + 1) * (1 / steps);
    }
};

module.exports = Stepped;
