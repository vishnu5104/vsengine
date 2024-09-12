/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Nudges (translates) the top-left corner of a Rectangle by the coordinates of a point (translation vector).
 *
 * @function Vsengine.Geom.Rectangle.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to adjust.
 * @param {(Vsengine.Geom.Point|Vsengine.Math.Vector2)} point - The point whose coordinates should be used as an offset.
 *
 * @return {Vsengine.Geom.Rectangle} The adjusted Rectangle.
 */
var OffsetPoint = function (rect, point) {
    rect.x += point.x;
    rect.y += point.y;

    return rect;
};

module.exports = OffsetPoint;
