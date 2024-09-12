/**
 * @author       Richard Davey <rich@vsengine.io>
 * @author       @samme
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var FloatBetween = require("../FloatBetween");

/**
 * Returns a random angle in the range [-pi, pi].
 *
 * @function Vsengine.Math.Angle.Random
 * @since 3.23.0
 *
 * @return {number} The angle, in radians.
 */
var Random = function () {
    return FloatBetween(-Math.PI, Math.PI);
};

module.exports = Random;
