/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require("./Contains");

/**
 * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
 *
 * @function Vsengine.Geom.Rectangle.ContainsPoint
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle object.
 * @param {Vsengine.Geom.Point} point - The point object to be checked. Can be a Vsengine Point object or any object with x and y values.
 *
 * @return {boolean} A value of true if the Rectangle object contains the specified point, otherwise false.
 */
var ContainsPoint = function (rect, point) {
    return Contains(rect, point.x, point.y);
};

module.exports = ContainsPoint;
