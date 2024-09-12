/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sets the fillStyle on the target context based on the given Shape.
 *
 * @method Vsengine.GameObjects.Shape#FillStyleCanvas
 * @since 3.13.0
 * @private
 *
 * @param {CanvasRenderingContext2D} ctx - The context to set the fill style on.
 * @param {Vsengine.GameObjects.Shape} src - The Game Object to set the fill style from.
 * @param {number} [altColor] - An alternative color to render with.
 * @param {number} [altAlpha] - An alternative alpha to render with.
 */
var FillStyleCanvas = function (ctx, src, altColor, altAlpha) {
    var fillColor = altColor ? altColor : src.fillColor;
    var fillAlpha = altAlpha ? altAlpha : src.fillAlpha;

    var red = (fillColor & 0xff0000) >>> 16;
    var green = (fillColor & 0xff00) >>> 8;
    var blue = fillColor & 0xff;

    ctx.fillStyle =
        "rgba(" + red + "," + green + "," + blue + "," + fillAlpha + ")";
};

module.exports = FillStyleCanvas;
