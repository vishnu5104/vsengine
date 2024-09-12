/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GetPoint = require("./GetPoint");
var Perimeter = require("./Perimeter");

/**
 * Return an array of points from the perimeter of the rectangle, each spaced out based on the quantity or step required.
 *
 * @function Vsengine.Geom.Rectangle.GetPoints
 * @since 3.0.0
 *
 * @generic {Vsengine.Geom.Point[]} O - [out,$return]
 *
 * @param {Vsengine.Geom.Rectangle} rectangle - The Rectangle object to get the points from.
 * @param {number} step - Step between points. Used to calculate the number of points to return when quantity is falsey. Ignored if quantity is positive.
 * @param {number} quantity - The number of evenly spaced points from the rectangles perimeter to return. If falsey, step param will be used to calculate the number of points.
 * @param {(array|Vsengine.Geom.Point[])} [out] - An optional array to store the points in.
 *
 * @return {(array|Vsengine.Geom.Point[])} An array of Points from the perimeter of the rectangle.
 */
var GetPoints = function (rectangle, quantity, stepRate, out) {
    if (out === undefined) {
        out = [];
    }

    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity && stepRate > 0) {
        quantity = Perimeter(rectangle) / stepRate;
    }

    for (var i = 0; i < quantity; i++) {
        var position = i / quantity;

        out.push(GetPoint(rectangle, position));
    }

    return out;
};

module.exports = GetPoints;
