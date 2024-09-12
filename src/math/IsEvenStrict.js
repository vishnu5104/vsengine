/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check if a given value is an even number using a strict type check.
 *
 * @function Vsengine.Math.IsEvenStrict
 * @since 3.0.0
 *
 * @param {number} value - The number to perform the check with.
 *
 * @return {boolean} Whether the number is even or not.
 */
var IsEvenStrict = function (value) {
    // Use strict equality === for "is number" test
    return value === parseFloat(value) ? !(value % 2) : void 0;
};

module.exports = IsEvenStrict;
