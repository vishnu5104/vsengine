/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Determines if the two objects (either Rectangles or Rectangle-like) have the same width and height values under strict equality.
 *
 * @function Vsengine.Geom.Rectangle.SameDimensions
 * @since 3.15.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - The first Rectangle object.
 * @param {Vsengine.Geom.Rectangle} toCompare - The second Rectangle object.
 *
 * @return {boolean} `true` if the objects have equivalent values for the `width` and `height` properties, otherwise `false`.
 */
var SameDimensions = function (rect, toCompare) {
    return rect.width === toCompare.width && rect.height === toCompare.height;
};

module.exports = SameDimensions;
