/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Length = require("../line/Length");

/**
 * Gets the length of the perimeter of the given triangle.
 * Calculated by adding together the length of each of the three sides.
 *
 * @function Vsengine.Geom.Triangle.Perimeter
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Triangle} triangle - The Triangle to get the length from.
 *
 * @return {number} The length of the Triangle.
 */
var Perimeter = function (triangle) {
    var line1 = triangle.getLineA();
    var line2 = triangle.getLineB();
    var line3 = triangle.getLineC();

    return Length(line1) + Length(line2) + Length(line3);
};

module.exports = Perimeter;
