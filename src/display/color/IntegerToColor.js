/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Color = require("./Color");
var IntegerToRGB = require("./IntegerToRGB");

/**
 * Converts the given color value into an instance of a Color object.
 *
 * @function Vsengine.Display.Color.IntegerToColor
 * @since 3.0.0
 *
 * @param {number} input - The color value to convert into a Color object.
 *
 * @return {Vsengine.Display.Color} A Color object.
 */
var IntegerToColor = function (input) {
    var rgb = IntegerToRGB(input);

    return new Color(rgb.r, rgb.g, rgb.b, rgb.a);
};

module.exports = IntegerToColor;
