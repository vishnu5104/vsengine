/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * A comparison of two `Point` objects to see if they are equal.
 *
 * @function Vsengine.Geom.Point.Equals
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Point} point - The original `Point` to compare against.
 * @param {Vsengine.Geom.Point} toCompare - The second `Point` to compare.
 *
 * @return {boolean} Returns true if the both `Point` objects are equal.
 */
var Equals = function (point, toCompare) {
    return point.x === toCompare.x && point.y === toCompare.y;
};

module.exports = Equals;
