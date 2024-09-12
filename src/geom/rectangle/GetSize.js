/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Point = require("../point/Point");

/**
 * Returns the size of the Rectangle, expressed as a Point object.
 * With the value of the `width` as the `x` property and the `height` as the `y` property.
 *
 * @function Vsengine.Geom.Rectangle.GetSize
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point} O - [out,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to get the size from.
 * @param {(Vsengine.Geom.Point|object)} [out] - The Point object to store the size in. If not given, a new Point instance is created.
 *
 * @return {(Vsengine.Geom.Point|object)} A Point object where `x` holds the width and `y` holds the height of the Rectangle.
 */
var GetSize = function (rect, out) {
    if (out === undefined) {
        out = new Point();
    }

    out.x = rect.width;
    out.y = rect.height;

    return out;
};

module.exports = GetSize;
