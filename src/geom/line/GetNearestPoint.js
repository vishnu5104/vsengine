/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       Florian Mertens
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("../point/Point");

/**
 * Get the nearest point on a line perpendicular to the given point.
 *
 * @function Vsengine.Geom.Line.GetNearestPoint
 * @since 3.16.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Line} line - The line to get the nearest point on.
 * @param {(Vsengine.Geom.Point|object)} point - The point to get the nearest point to.
 * @param {(Vsengine.Geom.Point|object)} [out] - An optional point, or point-like object, to store the coordinates of the nearest point on the line.
 *
 * @return {(Vsengine.Geom.Point|object)} The nearest point on the line.
 */
var GetNearestPoint = function (line, point, out) {
    if (out === undefined) {
        out = new Point();
    }

    var x1 = line.x1;
    var y1 = line.y1;

    var x2 = line.x2;
    var y2 = line.y2;

    var L2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

    if (L2 === 0) {
        return out;
    }

    var r = ((point.x - x1) * (x2 - x1) + (point.y - y1) * (y2 - y1)) / L2;

    out.x = x1 + r * (x2 - x1);
    out.y = y1 + r * (y2 - y1);

    return out;
};

module.exports = GetNearestPoint;
