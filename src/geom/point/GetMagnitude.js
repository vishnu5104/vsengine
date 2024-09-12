/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculate the magnitude of the point, which equivalent to the length of the line from the origin to this point.
 *
 * @function Vsengine.Geom.Point.GetMagnitude
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Point} point - The point to calculate the magnitude for
 *
 * @return {number} The resulting magnitude
 */
var GetMagnitude = function (point) {
    return Math.sqrt(point.x * point.x + point.y * point.y);
};

module.exports = GetMagnitude;
