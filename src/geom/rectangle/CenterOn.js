/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Moves the top-left corner of a Rectangle so that its center is at the given coordinates.
 *
 * @function Vsengine.Geom.Rectangle.CenterOn
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Rectangle} O - [rect,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to be centered.
 * @param {number} x - The X coordinate of the Rectangle's center.
 * @param {number} y - The Y coordinate of the Rectangle's center.
 *
 * @return {Vsengine.Geom.Rectangle} The centered rectangle.
 */
var CenterOn = function (rect, x, y) {
    rect.x = x - rect.width / 2;
    rect.y = y - rect.height / 2;

    return rect;
};

module.exports = CenterOn;
