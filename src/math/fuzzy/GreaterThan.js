/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check whether `a` is fuzzily greater than `b`.
 *
 * `a` is fuzzily greater than `b` if it is more than `b - epsilon`.
 *
 * @function Vsengine.Math.Fuzzy.GreaterThan
 * @since 3.0.0
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if `a` is fuzzily greater than than `b`, otherwise `false`.
 */
var GreaterThan = function (a, b, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return a > b - epsilon;
};

module.exports = GreaterThan;
