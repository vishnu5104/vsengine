/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Factorial = require("./Factorial");

/**
 * Calculates the Bernstein basis from the three factorial coefficients.
 *
 * @function Vsengine.Math.Bernstein
 * @since 3.0.0
 *
 * @param {number} n - The first value.
 * @param {number} i - The second value.
 *
 * @return {number} The Bernstein basis of Factorial(n) / Factorial(i) / Factorial(n - i)
 */
var Bernstein = function (n, i) {
    return Factorial(n) / Factorial(i) / Factorial(n - i);
};

module.exports = Bernstein;
