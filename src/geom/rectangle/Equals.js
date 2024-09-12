/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y`, `width` and `height` properties of two rectangles.
 *
 * @function Vsengine.Geom.Rectangle.Equals
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - Rectangle A
 * @param {Vsengine.Geom.Rectangle} toCompare - Rectangle B
 *
 * @return {boolean} `true` if the rectangles' properties are an exact match, otherwise `false`.
 */
var Equals = function (rect, toCompare) {
    return (
        rect.x === toCompare.x &&
        rect.y === toCompare.y &&
        rect.width === toCompare.width &&
        rect.height === toCompare.height
    );
};

module.exports = Equals;
