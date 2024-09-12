/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Returns the nearest power of 2 to the given `value`.
 *
 * @function Vsengine.Math.Pow2.GetNext
 * @since 3.0.0
 *
 * @param {number} value - The value.
 *
 * @return {number} The nearest power of 2 to `value`.
 */
var GetPowerOfTwo = function (value) {
    var index = Math.log(value) / 0.6931471805599453;

    return 1 << Math.ceil(index);
};

module.exports = GetPowerOfTwo;
