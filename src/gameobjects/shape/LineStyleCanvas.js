/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Sets the strokeStyle and lineWidth on the target context based on the given Shape.
 *
 * @method Vsengine.GameObjects.Shape#LineStyleCanvas
 * @since 3.13.0
 * @private
 *
 * @param {CanvasRenderingContext2D} ctx - The context to set the stroke style on.
 * @param {Vsengine.GameObjects.Shape} src - The Game Object to set the stroke style from.
 * @param {number} [altColor] - An alternative color to render with.
 * @param {number} [altAlpha] - An alternative alpha to render with.
 */
var LineStyleCanvas = function (ctx, src, altColor, altAlpha) {
    var strokeColor = altColor ? altColor : src.strokeColor;
    var strokeAlpha = altAlpha ? altAlpha : src.strokeAlpha;

    var red = (strokeColor & 0xff0000) >>> 16;
    var green = (strokeColor & 0xff00) >>> 8;
    var blue = strokeColor & 0xff;

    ctx.strokeStyle =
        "rgba(" + red + "," + green + "," + blue + "," + strokeAlpha + ")";
    ctx.lineWidth = src.lineWidth;
};

module.exports = LineStyleCanvas;
