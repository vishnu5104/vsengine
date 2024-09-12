/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");

/**
 * Convert the given angle from degrees, to the equivalent angle in radians.
 *
 * @function Vsengine.Math.DegToRad
 * @since 3.0.0
 *
 * @param {number} degrees - The angle (in degrees) to convert to radians.
 *
 * @return {number} The given angle converted to radians.
 */
var DegToRad = function (degrees) {
    return degrees * CONST.DEG_TO_RAD;
};

module.exports = DegToRad;
