/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the fuzzy ceiling of the given value.
 *
 * @function Vsengine.Math.Fuzzy.Ceil
 * @since 3.0.0
 *
 * @param {number} value - The value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {number} The fuzzy ceiling of the value.
 */
var Ceil = function (value, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return Math.ceil(value - epsilon);
};

module.exports = Ceil;