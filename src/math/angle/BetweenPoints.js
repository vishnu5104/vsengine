/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Find the angle of a segment from (point1.x, point1.y) -> (point2.x, point2.y).
 *
 * Calculates the angle of the vector from the first point to the second point.
 *
 * @function Vsengine.Math.Angle.BetweenPoints
 * @since 3.0.0
 *
 * @param {Vsengine.Types.Math.Vector2Like} point1 - The first point.
 * @param {Vsengine.Types.Math.Vector2Like} point2 - The second point.
 *
 * @return {number} The angle in radians.
 */
var BetweenPoints = function (point1, point2) {
    return Math.atan2(point2.y - point1.y, point2.x - point1.x);
};

module.exports = BetweenPoints;
