/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sinusoidal ease-in.
 *
 * @function Vsengine.Math.Easing.Sine.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    if (v === 0) {
        return 0;
    } else if (v === 1) {
        return 1;
    } else {
        return 1 - Math.cos((v * Math.PI) / 2);
    }
};

module.exports = In;
