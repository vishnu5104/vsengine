/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("../point/Point");

/**
 * Get the midpoint of the given line.
 *
 * @function Vsengine.Geom.Line.GetMidPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Line} line - The line to get the midpoint of.
 * @param {(Vsengine.Geom.Point|object)} [out] - An optional point object to store the midpoint in.
 *
 * @return {(Vsengine.Geom.Point|object)} The midpoint of the Line.
 */
var GetMidPoint = function (line, out) {
    if (out === undefined) {
        out = new Point();
    }

    out.x = (line.x1 + line.x2) / 2;
    out.y = (line.y1 + line.y2) / 2;

    return out;
};

module.exports = GetMidPoint;
