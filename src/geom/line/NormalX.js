/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var MATH_CONST = require("../../math/const");
var Angle = require("./Angle");

/**
 * Returns the x component of the normal vector of the given line.
 *
 * @function Vsengine.Geom.Line.NormalX
 * @since 3.0.0
 *
 * @param {Vsengine.Geom.Line} line - The Line object to get the normal value from.
 *
 * @return {number} The x component of the normal vector of the line.
 */
var NormalX = function (line) {
    return Math.cos(Angle(line) - MATH_CONST.TAU);
};

module.exports = NormalX;
