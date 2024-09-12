/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BitmapMask = require("../../display/mask/BitmapMask");
var GeometryMask = require("../../display/mask/GeometryMask");

/**
 * Provides methods used for getting and setting the mask of a Game Object.
 *
 * @namespace Vsengine.GameObjects.Components.Mask
 * @since 3.0.0
 */

var Mask = {
    /**
     * The Mask this Game Object is using during render.
     *
     * @name Vsengine.GameObjects.Components.Mask#mask
     * @type {Vsengine.Display.Masks.BitmapMask|Vsengine.Display.Masks.GeometryMask}
     * @since 3.0.0
     */
    mask: null,

    /**
     * Sets the mask that this Game Object will use to render with.
     *
     * The mask must have been previously created and can be either a GeometryMask or a BitmapMask.
     * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
     *
     * If a mask is already set on this Game Object it will be immediately replaced.
     *
     * Masks are positioned in global space and are not relative to the Game Object to which they
     * are applied. The reason for this is that multiple Game Objects can all share the same mask.
     *
     * Masks have no impact on physics or input detection. They are purely a rendering component
     * that allows you to limit what is visible during the render pass.
     *
     * @method Vsengine.GameObjects.Components.Mask#setMask
     * @since 3.6.2
     *
     * @param {Vsengine.Display.Masks.BitmapMask|Vsengine.Display.Masks.GeometryMask} mask - The mask this Game Object will use when rendering.
     *
     * @return {this} This Game Object instance.
     */
    setMask: function (mask) {
        this.mask = mask;

        return this;
    },

    /**
     * Clears the mask that this Game Object was using.
     *
     * @method Vsengine.GameObjects.Components.Mask#clearMask
     * @since 3.6.2
     *
     * @param {boolean} [destroyMask=false] - Destroy the mask before clearing it?
     *
     * @return {this} This Game Object instance.
     */
    clearMask: function (destroyMask) {
        if (destroyMask === undefined) {
            destroyMask = false;
        }

        if (destroyMask && this.mask) {
            this.mask.destroy();
        }

        this.mask = null;

        return this;
    },

    /**
     * Creates and returns a Bitmap Mask. This mask can be used by any Game Object,
     * including this one, or a Dynamic Texture.
     *
     * Note: Bitmap Masks only work on WebGL. Geometry Masks work on both WebGL and Canvas.
     *
     * To create the mask you need to pass in a reference to a renderable Game Object.
     * A renderable Game Object is one that uses a texture to render with, such as an
     * Image, Sprite, Render Texture or BitmapText.
     *
     * If you do not provide a renderable object, and this Game Object has a texture,
     * it will use itself as the object. This means you can call this method to create
     * a Bitmap Mask from any renderable texture-based Game Object.
     *
     * @method Vsengine.GameObjects.Components.Mask#createBitmapMask
     * @since 3.6.2
     *
     * @generic {Vsengine.GameObjects.GameObject} G
     * @generic {Vsengine.Textures.DynamicTexture} T
     * @genericUse {(G|T|null)} [maskObject]
     *
     * @param {(Vsengine.GameObjects.GameObject|Vsengine.Textures.DynamicTexture)} [maskObject] - The Game Object or Dynamic Texture that will be used as the mask. If `null` it will generate an Image Game Object using the rest of the arguments.
     * @param {number} [x] - If creating a Game Object, the horizontal position in the world.
     * @param {number} [y] - If creating a Game Object, the vertical position in the world.
     * @param {(string|Vsengine.Textures.Texture)} [texture] - If creating a Game Object, the key, or instance of the Texture it will use to render with, as stored in the Texture Manager.
     * @param {(string|number|Vsengine.Textures.Frame)} [frame] - If creating a Game Object, an optional frame from the Texture this Game Object is rendering with.
     *
     * @return {Vsengine.Display.Masks.BitmapMask} This Bitmap Mask that was created.
     */
    createBitmapMask: function (maskObject, x, y, texture, frame) {
        if (
            maskObject === undefined &&
            (this.texture || this.shader || this.geom)
        ) {
            // eslint-disable-next-line consistent-this
            maskObject = this;
        }

        return new BitmapMask(this.scene, maskObject, x, y, texture, frame);
    },

    /**
     * Creates and returns a Geometry Mask. This mask can be used by any Game Object,
     * including this one.
     *
     * To create the mask you need to pass in a reference to a Graphics Game Object.
     *
     * If you do not provide a graphics object, and this Game Object is an instance
     * of a Graphics object, then it will use itself to create the mask.
     *
     * This means you can call this method to create a Geometry Mask from any Graphics Game Object.
     *
     * @method Vsengine.GameObjects.Components.Mask#createGeometryMask
     * @since 3.6.2
     *
     * @generic {Vsengine.GameObjects.Graphics} G
     * @generic {Vsengine.GameObjects.Shape} S
     * @genericUse {(G|S)} [graphics]
     *
     * @param {Vsengine.GameObjects.Graphics|Vsengine.GameObjects.Shape} [graphics] - A Graphics Game Object, or any kind of Shape Game Object. The geometry within it will be used as the mask.
     *
     * @return {Vsengine.Display.Masks.GeometryMask} This Geometry Mask that was created.
     */
    createGeometryMask: function (graphics) {
        if (graphics === undefined && (this.type === "Graphics" || this.geom)) {
            // eslint-disable-next-line consistent-this
            graphics = this;
        }

        return new GeometryMask(this.scene, graphics);
    },
};

module.exports = Mask;
