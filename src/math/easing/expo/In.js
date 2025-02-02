/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Exponential ease-in.
 *
 * @function Vsengine.Math.Easing.Expo.In
 * @since 3.0.0
 *
 * @param {number} v - The value to be tweened.
 *
 * @return {number} The tweened value.
 */
var In = function (v) {
    return Math.pow(2, 10 * (v - 1)) - 0.001;
};

module.exports = In;
