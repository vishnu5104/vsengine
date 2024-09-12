/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Adds a Canvas Element to a Texture.
 *
 * @function Vsengine.Textures.Parsers.Canvas
 * @memberof Vsengine.Textures.Parsers
 * @private
 * @since 3.0.0
 *
 * @param {Vsengine.Textures.Texture} texture - The Texture to add the Frames to.
 * @param {number} sourceIndex - The index of the TextureSource.
 *
 * @return {Vsengine.Textures.Texture} The Texture modified by this parser.
 */
var Canvas = function (texture, sourceIndex) {
    var source = texture.source[sourceIndex];

    texture.add("__BASE", sourceIndex, 0, 0, source.width, source.height);

    return texture;
};

module.exports = Canvas;
