/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Given 3 separate color values this will return an integer representation of it.
 *
 * @function Vsengine.Display.Color.GetColor
 * @since 3.0.0
 *
 * @param {number} red - The red color value. A number between 0 and 255.
 * @param {number} green - The green color value. A number between 0 and 255.
 * @param {number} blue - The blue color value. A number between 0 and 255.
 *
 * @return {number} The combined color value.
 */
var GetColor = function (red, green, blue) {
    return (red << 16) | (green << 8) | blue;
};

module.exports = GetColor;
