/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Add an `amount` to a `value`, limiting the maximum result to `max`.
 *
 * @function Vsengine.Math.MaxAdd
 * @since 3.0.0
 *
 * @param {number} value - The value to add to.
 * @param {number} amount - The amount to add.
 * @param {number} max - The maximum value to return.
 *
 * @return {number} The resulting value.
 */
var MaxAdd = function (value, amount, max) {
    return Math.min(value + amount, max);
};

module.exports = MaxAdd;
