/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Converts the given color value into an Object containing r,g,b and a properties.
 *
 * @function Vsengine.Display.Color.ColorToRGBA
 * @since 3.0.0
 *
 * @param {number} color - A color value, optionally including the alpha value.
 *
 * @return {Vsengine.Types.Display.ColorObject} An object containing the parsed color values.
 */
var ColorToRGBA = function (color) {
    var output = {
        r: (color >> 16) & 0xff,
        g: (color >> 8) & 0xff,
        b: color & 0xff,
        a: 255,
    };

    if (color > 16777215) {
        output.a = color >>> 24;
    }

    return output;
};

module.exports = ColorToRGBA;
