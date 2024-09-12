/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the fuzzy floor of the given value.
 *
 * @function Vsengine.Math.Fuzzy.Floor
 * @since 3.0.0
 *
 * @param {number} value - The value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {number} The floor of the value.
 */
var Floor = function (value, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return Math.floor(value + epsilon);
};

module.exports = Floor;
