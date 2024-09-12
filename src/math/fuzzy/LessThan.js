/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Check whether `a` is fuzzily less than `b`.
 *
 * `a` is fuzzily less than `b` if it is less than `b + epsilon`.
 *
 * @function Vsengine.Math.Fuzzy.LessThan
 * @since 3.0.0
 *
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @param {number} [epsilon=0.0001] - The epsilon.
 *
 * @return {boolean} `true` if `a` is fuzzily less than `b`, otherwise `false`.
 */
var LessThan = function (a, b, epsilon) {
    if (epsilon === undefined) {
        epsilon = 0.0001;
    }

    return a < b + epsilon;
};

module.exports = LessThan;
