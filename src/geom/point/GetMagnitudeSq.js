/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the square of magnitude of given point.(Can be used for fast magnitude calculation of point)
 *
 * @function Vsengine.Geom.Point.GetMagnitudeSq
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Point} point - Returns square of the magnitude/length of given point.
 *
 * @return {number} Returns square of the magnitude of given point.
 */
var GetMagnitudeSq = function (point) {
    return point.x * point.x + point.y * point.y;
};

module.exports = GetMagnitudeSq;
