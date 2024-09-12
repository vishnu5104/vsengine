/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Calculates the perimeter of a Rectangle.
 *
 * @function Vsengine.Geom.Rectangle.Perimeter
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to use.
 *
 * @return {number} The perimeter of the Rectangle, equal to `(width * 2) + (height * 2)`.
 */
var Perimeter = function (rect) {
    return 2 * (rect.width + rect.height);
};

module.exports = Perimeter;
