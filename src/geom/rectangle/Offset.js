/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Nudges (translates) the top left corner of a Rectangle by a given offset.
 *
 * @function Vsengine.Geom.Rectangle.Offset
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to adjust.
 * @param {number} x - The distance to move the Rectangle horizontally.
 * @param {number} y - The distance to move the Rectangle vertically.
 *
 * @return {Vsengine.Geom.Rectangle} The adjusted Rectangle.
 */
var Offset = function (rect, x, y) {
    rect.x += x;
    rect.y += y;

    return rect;
};

module.exports = Offset;
