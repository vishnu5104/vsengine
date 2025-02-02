/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tests the value and returns `true` if it is a power of two.
 *
 * @function Vsengine.Math.Pow2.IsValue
 * @since 3.0.0
 *
 * @param {number} value - The value to check if it's a power of two.
 *
 * @return {boolean} Returns `true` if `value` is a power of two, otherwise `false`.
 */
var IsValuePowerOfTwo = function (value) {
    return value > 0 && (value & (value - 1)) === 0;
};

module.exports = IsValuePowerOfTwo;
