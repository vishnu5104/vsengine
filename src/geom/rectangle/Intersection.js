/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Rectangle = require("./Rectangle");
var Intersects = require("../intersects/RectangleToRectangle");

/**
 * Takes two Rectangles and first checks to see if they intersect.
 * If they intersect it will return the area of intersection in the `out` Rectangle.
 * If they do not intersect, the `out` Rectangle will have a width and height of zero.
 *
 * @function Vsengine.Geom.Rectangle.Intersection
 * @since 3.11.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rectA - The first Rectangle to get the intersection from.
 * @param {Vsengine.Geom.Rectangle} rectB - The second Rectangle to get the intersection from.
 * @param {Vsengine.Geom.Rectangle} [out] - A Rectangle to store the intersection results in.
 *
 * @return {Vsengine.Geom.Rectangle} The intersection result. If the width and height are zero, no intersection occurred.
 */
var Intersection = function (rectA, rectB, out) {
    if (out === undefined) {
        out = new Rectangle();
    }

    if (Intersects(rectA, rectB)) {
        out.x = Math.max(rectA.x, rectB.x);
        out.y = Math.max(rectA.y, rectB.y);
        out.width = Math.min(rectA.right, rectB.right) - out.x;
        out.height = Math.min(rectA.bottom, rectB.bottom) - out.y;
    } else {
        out.setEmpty();
    }

    return out;
};

module.exports = Intersection;
