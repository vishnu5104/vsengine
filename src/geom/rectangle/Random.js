/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("../point/Point");

/**
 * Returns a random point within a Rectangle.
 *
 * @function Vsengine.Geom.Rectangle.Random
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to return a point from.
 * @param {Vsengine.Geom.Point} out - The object to update with the point's coordinates.
 *
 * @return {Vsengine.Geom.Point} The modified `out` object, or a new Point if none was provided.
 */
var Random = function (rect, out) {
    if (out === undefined) {
        out = new Point();
    }

    out.x = rect.x + Math.random() * rect.width;
    out.y = rect.y + Math.random() * rect.height;

    return out;
};

module.exports = Random;
