/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Tests if one rectangle fully contains another.
 *
 * @function Vsengine.Geom.Rectangle.ContainsRect
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rectA - The first rectangle.
 * @param {Vsengine.Geom.Rectangle} rectB - The second rectangle.
 *
 * @return {boolean} True only if rectA fully contains rectB.
 */
var ContainsRect = function (rectA, rectB) {
    //  Volume check (if rectB volume > rectA then rectA cannot contain it)
    if (rectB.width * rectB.height > rectA.width * rectA.height) {
        return false;
    }

    return (
        rectB.x > rectA.x &&
        rectB.x < rectA.right &&
        rectB.right > rectA.x &&
        rectB.right < rectA.right &&
        rectB.y > rectA.y &&
        rectB.y < rectA.bottom &&
        rectB.bottom > rectA.y &&
        rectB.bottom < rectA.bottom
    );
};

module.exports = ContainsRect;
