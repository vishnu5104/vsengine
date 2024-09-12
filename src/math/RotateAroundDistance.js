/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a `point` around `x` and `y` by the given `angle` and `distance`.
 *
 * In polar notation, this maps a point from (r, t) to (distance, t + angle), vs. the origin (x, y).
 *
 * @function Vsengine.Math.RotateAroundDistance
 * @since 3.0.0
 *
 * @generic {Vsengine.Types.Math.Vector2Like} T - [point,$return]
 *
 * @param {(Vsengine.Geom.Point|object)} point - The point to be rotated.
 * @param {number} x - The horizontal coordinate to rotate around.
 * @param {number} y - The vertical coordinate to rotate around.
 * @param {number} angle - The angle of rotation in radians.
 * @param {number} distance - The distance from (x, y) to place the point at.
 *
 * @return {Vsengine.Types.Math.Vector2Like} The given point.
 */
var RotateAroundDistance = function (point, x, y, angle, distance) {
    var t = angle + Math.atan2(point.y - y, point.x - x);

    point.x = x + distance * Math.cos(t);
    point.y = y + distance * Math.sin(t);

    return point;
};

module.exports = RotateAroundDistance;
