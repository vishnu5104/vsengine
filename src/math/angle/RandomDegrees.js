/**
 * @author       Richard Davey <rich@vsengine.io>
 * @author       @samme
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var FloatBetween = require("../FloatBetween");

/**
 * Returns a random angle in the range [-180, 180].
 *
 * @function Vsengine.Math.Angle.RandomDegrees
 * @since 3.23.0
 *
 * @return {number} The angle, in degrees.
 */
var RandomDegrees = function () {
    return FloatBetween(-180, 180);
};

module.exports = RandomDegrees;
