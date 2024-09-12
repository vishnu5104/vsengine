/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Return the component parts of a color as an Object with the properties alpha, red, green, blue.
 *
 * Alpha will only be set if it exists in the given color (0xAARRGGBB)
 *
 * @function Vsengine.Display.Color.IntegerToRGB
 * @since 3.0.0
 *
 * @param {number} input - The color value to convert into a Color object.
 *
 * @return {Vsengine.Types.Display.ColorObject} An object with the red, green and blue values set in the r, g and b properties.
 */
var IntegerToRGB = function (color) {
    if (color > 16777215) {
        //  The color value has an alpha component
        return {
            a: color >>> 24,
            r: (color >> 16) & 0xff,
            g: (color >> 8) & 0xff,
            b: color & 0xff,
        };
    } else {
        return {
            a: 255,
            r: (color >> 16) & 0xff,
            g: (color >> 8) & 0xff,
            b: color & 0xff,
        };
    }
};

module.exports = IntegerToRGB;
