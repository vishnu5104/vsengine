/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the positive difference of two given numbers.
 *
 * @function Vsengine.Math.Difference
 * @since 3.0.0
 *
 * @param {number} a - The first number in the calculation.
 * @param {number} b - The second number in the calculation.
 *
 * @return {number} The positive difference of the two given numbers.
 */
var Difference = function (a, b) {
    return Math.abs(a - b);
};

module.exports = Difference;
