/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the mean average of the given values.
 *
 * @function Vsengine.Math.Average
 * @since 3.0.0
 *
 * @param {number[]} values - The values to average.
 *
 * @return {number} The average value.
 */
var Average = function (values) {
    var sum = 0;

    for (var i = 0; i < values.length; i++) {
        sum += +values[i];
    }

    return sum / values.length;
};

module.exports = Average;
