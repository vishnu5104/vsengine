/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("./Point");

/**
 * Inverts a Point's coordinates.
 *
 * @function Vsengine.Geom.Point.Negative
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Point} point - The Point to invert.
 * @param {Vsengine.Geom.Point} [out] - The Point to return the inverted coordinates in.
 *
 * @return {Vsengine.Geom.Point} The modified `out` Point, or a new Point if none was provided.
 */
var Negative = function (point, out) {
    if (out === undefined) {
        out = new Point();
    }

    return out.setTo(-point.x, -point.y);
};

module.exports = Negative;
