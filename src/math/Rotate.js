/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Rotate a given point by a given angle around the origin (0, 0), in an anti-clockwise direction.
 *
 * @function Vsengine.Math.Rotate
 * @since 3.0.0
 *
 * @param {(Vsengine.Geom.Point|object)} point - The point to be rotated.
 * @param {number} angle - The angle to be rotated by in an anticlockwise direction.
 *
 * @return {Vsengine.Geom.Point} The given point, rotated by the given angle in an anticlockwise direction.
 */
var Rotate = function (point, angle) {
    var x = point.x;
    var y = point.y;

    point.x = x * Math.cos(angle) - y * Math.sin(angle);
    point.y = x * Math.sin(angle) + y * Math.cos(angle);

    return point;
};

module.exports = Rotate;
