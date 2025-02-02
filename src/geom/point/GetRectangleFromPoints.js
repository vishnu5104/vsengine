/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Rectangle = require("../rectangle/Rectangle");

/**
 * Calculates the Axis Aligned Bounding Box (or aabb) from an array of points.
 *
 * @function Vsengine.Geom.Point.GetRectangleFromPoints
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [out,$return]
 *
 * @param {Vsengine.Types.Math.Vector2Like[]} points - An array of Vector2Like objects to get the AABB from.
 * @param {Vsengine.Geom.Rectangle} [out] - A Rectangle object to store the results in. If not given, a new Rectangle instance is created.
 *
 * @return {Vsengine.Geom.Rectangle} A Rectangle object holding the AABB values for the given points.
 */
var GetRectangleFromPoints = function (points, out) {
    if (out === undefined) {
        out = new Rectangle();
    }

    var xMax = Number.NEGATIVE_INFINITY;
    var xMin = Number.POSITIVE_INFINITY;
    var yMax = Number.NEGATIVE_INFINITY;
    var yMin = Number.POSITIVE_INFINITY;

    for (var i = 0; i < points.length; i++) {
        var point = points[i];

        if (point.x > xMax) {
            xMax = point.x;
        }

        if (point.x < xMin) {
            xMin = point.x;
        }

        if (point.y > yMax) {
            yMax = point.y;
        }

        if (point.y < yMin) {
            yMin = point.y;
        }
    }

    out.x = xMin;
    out.y = yMin;
    out.width = xMax - xMin;
    out.height = yMax - yMin;

    return out;
};

module.exports = GetRectangleFromPoints;
