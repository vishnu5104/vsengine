/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Create an array of points for each corner of a Rectangle
 * If an array is specified, each point object will be added to the end of the array, otherwise a new array will be created.
 *
 * @function Vsengine.Geom.Rectangle.Decompose
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle object to be decomposed.
 * @param {array} [out] - If provided, each point will be added to this array.
 *
 * @return {array} Will return the array you specified or a new array containing the points of the Rectangle.
 */
var Decompose = function (rect, out) {
    if (out === undefined) {
        out = [];
    }

    out.push({ x: rect.x, y: rect.y });
    out.push({ x: rect.right, y: rect.y });
    out.push({ x: rect.right, y: rect.bottom });
    out.push({ x: rect.x, y: rect.bottom });

    return out;
};

module.exports = Decompose;
