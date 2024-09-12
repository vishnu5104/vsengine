/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CanvasPool = require("../display/canvas/CanvasPool");
var Class = require("../utils/Class");
var IsSizePowerOfTwo = require("../math/pow2/IsSizePowerOfTwo");
var ScaleModes = require("../renderer/ScaleModes");
var WebGLTextureWrapper = require("../renderer/webgl/wrappers/WebGLTextureWrapper");

/**
 * @classdesc
 * A Texture Source is the encapsulation of the actual source data for a Texture.
 *
 * This is typically an Image Element, loaded from the file system or network, a Canvas Element or a Video Element.
 *
 * A Texture can contain multiple Texture Sources, which only happens when a multi-atlas is loaded.
 *
 * @class TextureSource
 * @memberof Vsengine.Textures
 * @constructor
 * @since 3.0.0
 *
 * @param {Vsengine.Textures.Texture} texture - The Texture this TextureSource belongs to.
 * @param {(HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|Vsengine.GameObjects.RenderTexture|Vsengine.Renderer.WebGL.Wrappers.WebGLTextureWrapper|Vsengine.Types.Textures.CompressedTextureData|Vsengine.Textures.DynamicTexture)} source - The source image data.
 * @param {number} [width] - Optional width of the source image. If not given it's derived from the source itself.
 * @param {number} [height] - Optional height of the source image. If not given it's derived from the source itself.
 * @param {boolean} [flipY=false] - Sets the `UNPACK_FLIP_Y_WEBGL` flag the WebGL Texture uses during upload.
 */
var TextureSource = new Class({
    initialize: function TextureSource(texture, source, width, height, flipY) {
        if (flipY === undefined) {
            flipY = false;
        }

        var game = texture.manager.game;

        /**
         * A reference to the Canvas or WebGL Renderer.
         *
         * @name Vsengine.Textures.TextureSource#renderer
         * @type {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)}
         * @since 3.7.0
         */
        this.renderer = game.renderer;

        /**
         * The Texture this TextureSource instance belongs to.
         *
         * @name Vsengine.Textures.TextureSource#texture
         * @type {Vsengine.Textures.Texture}
         * @since 3.0.0
         */
        this.texture = texture;

        /**
         * The source of the image data.
         *
         * This is either an Image Element, a Canvas Element, a Video Element, a RenderTexture or a WebGLTextureWrapper.
         *
         * In Vsengine 3.60 and above it can also be a Compressed Texture data object.
         *
         * @name Vsengine.Textures.TextureSource#source
         * @type {(HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|Vsengine.GameObjects.RenderTexture|Vsengine.Renderer.WebGL.Wrappers.WebGLTextureWrapper|Vsengine.Types.Textures.CompressedTextureData|Vsengine.Textures.DynamicTexture)}
         * @since 3.12.0
         */
        this.source = source;

        /**
         * The image data.
         *
         * This is either an Image element, Canvas element, Video Element, or Uint8Array.
         *
         * @name Vsengine.Textures.TextureSource#image
         * @type {(HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|Uint8Array)}
         * @since 3.0.0
         */
        this.image = source.compressed ? null : source;

        /**
         * Holds the compressed textured algorithm, or `null` if it's not a compressed texture.
         *
         * Prior to Vsengine 3.60 this value always held `null`.
         *
         * @name Vsengine.Textures.TextureSource#compressionAlgorithm
         * @type {number}
         * @default null
         * @since 3.0.0
         */
        this.compressionAlgorithm = source.compressed ? source.format : null;

        /**
         * The resolution of the source image.
         *
         * @name Vsengine.Textures.TextureSource#resolution
         * @type {number}
         * @default 1
         * @since 3.0.0
         */
        this.resolution = 1;

        /**
         * The width of the source image. If not specified in the constructor it will check
         * the `naturalWidth` and then `width` properties of the source image.
         *
         * @name Vsengine.Textures.TextureSource#width
         * @type {number}
         * @since 3.0.0
         */
        this.width =
            width ||
            source.naturalWidth ||
            source.videoWidth ||
            source.width ||
            0;

        /**
         * The height of the source image. If not specified in the constructor it will check
         * the `naturalHeight` and then `height` properties of the source image.
         *
         * @name Vsengine.Textures.TextureSource#height
         * @type {number}
         * @since 3.0.0
         */
        this.height =
            height ||
            source.naturalHeight ||
            source.videoHeight ||
            source.height ||
            0;

        /**
         * The Scale Mode the image will use when rendering.
         * Either Linear or Nearest.
         *
         * @name Vsengine.Textures.TextureSource#scaleMode
         * @type {number}
         * @since 3.0.0
         */
        this.scaleMode = ScaleModes.DEFAULT;

        /**
         * Is the source image a Canvas Element?
         *
         * @name Vsengine.Textures.TextureSource#isCanvas
         * @type {boolean}
         * @since 3.0.0
         */
        this.isCanvas = source instanceof HTMLCanvasElement;

        /**
         * Is the source image a Video Element?
         *
         * @name Vsengine.Textures.TextureSource#isVideo
         * @type {boolean}
         * @since 3.20.0
         */
        this.isVideo =
            window.hasOwnProperty("HTMLVideoElement") &&
            source instanceof HTMLVideoElement;

        /**
         * Is the source image a Render Texture?
         *
         * @name Vsengine.Textures.TextureSource#isRenderTexture
         * @type {boolean}
         * @since 3.12.0
         */
        this.isRenderTexture =
            source.type === "RenderTexture" || source.type === "DynamicTexture";

        /**
         * Is the source image a WebGLTextureWrapper?
         *
         * @name Vsengine.Textures.TextureSource#isGLTexture
         * @type {boolean}
         * @since 3.19.0
         */
        this.isGLTexture = source instanceof WebGLTextureWrapper;

        /**
         * Are the source image dimensions a power of two?
         *
         * @name Vsengine.Textures.TextureSource#isPowerOf2
         * @type {boolean}
         * @since 3.0.0
         */
        this.isPowerOf2 = IsSizePowerOfTwo(this.width, this.height);

        /**
         * The wrapped WebGL Texture of the source image.
         * If this TextureSource is driven from a WebGLTexture already,
         * then this wrapper contains a reference to that WebGLTexture.
         *
         * @name Vsengine.Textures.TextureSource#glTexture
         * @type {?Vsengine.Renderer.WebGL.Wrappers.WebGLTextureWrapper}
         * @default null
         * @since 3.0.0
         */
        this.glTexture = null;

        /**
         * Sets the `UNPACK_FLIP_Y_WEBGL` flag the WebGL Texture uses during upload.
         *
         * @name Vsengine.Textures.TextureSource#flipY
         * @type {boolean}
         * @since 3.20.0
         */
        this.flipY = flipY;

        this.init(game);
    },

    /**
     * Creates a WebGL Texture, if required, and sets the Texture filter mode.
     *
     * @method Vsengine.Textures.TextureSource#init
     * @since 3.0.0
     *
     * @param {Vsengine.Game} game - A reference to the Vsengine Game instance.
     */
    init: function (game) {
        var renderer = this.renderer;

        if (renderer) {
            var source = this.source;

            if (renderer.gl) {
                var image = this.image;
                var flipY = this.flipY;
                var width = this.width;
                var height = this.height;
                var scaleMode = this.scaleMode;

                if (this.isCanvas) {
                    this.glTexture = renderer.createCanvasTexture(
                        image,
                        false,
                        flipY
                    );
                } else if (this.isVideo) {
                    this.glTexture = renderer.createVideoTexture(
                        image,
                        false,
                        flipY
                    );
                } else if (this.isRenderTexture) {
                    this.glTexture = renderer.createTextureFromSource(
                        null,
                        width,
                        height,
                        scaleMode
                    );
                } else if (this.isGLTexture) {
                    this.glTexture = source;
                } else if (this.compressionAlgorithm) {
                    this.glTexture = renderer.createTextureFromSource(
                        source,
                        undefined,
                        undefined,
                        scaleMode
                    );
                } else if (source instanceof Uint8Array) {
                    this.glTexture = renderer.createUint8ArrayTexture(
                        source,
                        width,
                        height,
                        scaleMode
                    );
                } else {
                    this.glTexture = renderer.createTextureFromSource(
                        image,
                        width,
                        height,
                        scaleMode
                    );
                }

                if (typeof WEBGL_DEBUG) {
                    this.glTexture.spectorMetadata = {
                        textureKey: this.texture.key,
                    };
                }
            } else if (this.isRenderTexture) {
                this.image = source.canvas;
            }
        }

        if (!game.config.antialias) {
            this.setFilter(1);
        }
    },

    /**
     * Sets the Filter Mode for this Texture.
     *
     * The mode can be either Linear, the default, or Nearest.
     *
     * For pixel-art you should use Nearest.
     *
     * @method Vsengine.Textures.TextureSource#setFilter
     * @since 3.0.0
     *
     * @param {Vsengine.Textures.FilterMode} filterMode - The Filter Mode.
     */
    setFilter: function (filterMode) {
        if (this.renderer && this.renderer.gl) {
            this.renderer.setTextureFilter(this.glTexture, filterMode);
        }

        this.scaleMode = filterMode;
    },

    /**
     * Sets the `UNPACK_FLIP_Y_WEBGL` flag for the WebGL Texture during texture upload.
     *
     * @method Vsengine.Textures.TextureSource#setFlipY
     * @since 3.20.0
     *
     * @param {boolean} [value=true] - Should the WebGL Texture be flipped on the Y axis on texture upload or not?
     */
    setFlipY: function (value) {
        if (value === undefined) {
            value = true;
        }

        if (value === this.flipY) {
            return this;
        }

        this.flipY = value;
        this.update();

        return this;
    },

    /**
     * If this TextureSource is backed by a Canvas and is running under WebGL,
     * it updates the WebGLTexture using the canvas data.
     *
     * @method Vsengine.Textures.TextureSource#update
     * @since 3.7.0
     */
    update: function () {
        var renderer = this.renderer;
        var image = this.image;
        var flipY = this.flipY;
        var gl = renderer.gl;

        if (gl && this.isCanvas) {
            renderer.updateCanvasTexture(image, this.glTexture, flipY);
        } else if (gl && this.isVideo) {
            renderer.updateVideoTexture(image, this.glTexture, flipY);
        }
    },

    /**
     * Destroys this Texture Source and nulls the references.
     *
     * @method Vsengine.Textures.TextureSource#destroy
     * @since 3.0.0
     */
    destroy: function () {
        if (this.glTexture) {
            this.renderer.deleteTexture(this.glTexture);
        }

        if (this.isCanvas) {
            CanvasPool.remove(this.image);
        }

        this.renderer = null;
        this.texture = null;
        this.source = null;
        this.image = null;
        this.glTexture = null;
    },
});

module.exports = TextureSource;
