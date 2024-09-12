/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MATH_CONST = require("../../math/const");
var Angle = require("./Angle");

/**
 * The Y value of the normal of the given line.
 * The normal of a line is a vector that points perpendicular from it.
 *
 * @function Vsengine.Geom.Line.NormalY
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The line to calculate the normal of.
 *
 * @return {number} The Y value of the normal of the Line.
 */
var NormalY = function (line) {
    return Math.sin(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalY;
