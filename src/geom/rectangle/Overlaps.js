/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if two Rectangles overlap. If a Rectangle is within another Rectangle, the two will be considered overlapping. Thus, the Rectangles are treated as "solid".
 *
 * @function Vsengine.Geom.Rectangle.Overlaps
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rectA - The first Rectangle to check.
 * @param {Vsengine.Geom.Rectangle} rectB - The second Rectangle to check.
 *
 * @return {boolean} `true` if the two Rectangles overlap, `false` otherwise.
 */
var Overlaps = function (rectA, rectB) {
    return (
        rectA.x < rectB.right &&
        rectA.right > rectB.x &&
        rectA.y < rectB.bottom &&
        rectA.bottom > rectB.y
    );
};

module.exports = Overlaps;
