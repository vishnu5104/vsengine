/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the factorial of a given number for integer values greater than 0.
 *
 * @function Vsengine.Math.Factorial
 * @since 3.0.0
 *
 * @param {number} value - A positive integer to calculate the factorial of.
 *
 * @return {number} The factorial of the given number.
 */
var Factorial = function (value) {
    if (value === 0) {
        return 1;
    }

    var res = value;

    while (--value) {
        res *= value;
    }

    return res;
};

module.exports = Factorial;
