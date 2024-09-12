/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the area of the given Rectangle object.
 *
 * @function Vsengine.Geom.Rectangle.Area
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - The rectangle to calculate the area of.
 *
 * @return {number} The area of the Rectangle object.
 */
var Area = function (rect) {
    return rect.width * rect.height;
};

module.exports = Area;
