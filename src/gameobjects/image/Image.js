/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../utils/Class");
var Components = require("../components");
var GameObject = require("../GameObject");
var ImageRender = require("./ImageRender");

/**
 * @classdesc
 * An Image Game Object.
 *
 * An Image is a light-weight Game Object useful for the display of static images in your game,
 * such as logos, backgrounds, scenery or other non-animated elements. Images can have input
 * events and physics bodies, or be tweened, tinted or scrolled. The main difference between an
 * Image and a Sprite is that you cannot animate an Image as they do not have the Animation component.
 *
 * @class Image
 * @extends Vsengine.GameObjects.GameObject
 * @memberof Vsengine.GameObjects
 * @constructor
 * @since 3.0.0
 *
 * @extends Vsengine.GameObjects.Components.Alpha
 * @extends Vsengine.GameObjects.Components.BlendMode
 * @extends Vsengine.GameObjects.Components.Depth
 * @extends Vsengine.GameObjects.Components.Flip
 * @extends Vsengine.GameObjects.Components.GetBounds
 * @extends Vsengine.GameObjects.Components.Mask
 * @extends Vsengine.GameObjects.Components.Origin
 * @extends Vsengine.GameObjects.Components.Pipeline
 * @extends Vsengine.GameObjects.Components.PostPipeline
 * @extends Vsengine.GameObjects.Components.ScrollFactor
 * @extends Vsengine.GameObjects.Components.Size
 * @extends Vsengine.GameObjects.Components.TextureCrop
 * @extends Vsengine.GameObjects.Components.Tint
 * @extends Vsengine.GameObjects.Components.Transform
 * @extends Vsengine.GameObjects.Components.Visible
 *
 * @param {Vsengine.Scene} scene - The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {(string|Vsengine.Textures.Texture)} texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 */
var Image = new Class({
    Extends: GameObject,

    Mixins: [
        Components.Alpha,
        Components.BlendMode,
        Components.Depth,
        Components.Flip,
        Components.GetBounds,
        Components.Mask,
        Components.Origin,
        Components.Pipeline,
        Components.PostPipeline,
        Components.ScrollFactor,
        Components.Size,
        Components.TextureCrop,
        Components.Tint,
        Components.Transform,
        Components.Visible,
        ImageRender,
    ],

    initialize: function Image(scene, x, y, texture, frame) {
        GameObject.call(this, scene, "Image");

        /**
         * The internal crop data object, as used by `setCrop` and passed to the `Frame.setCropUVs` method.
         *
         * @name Vsengine.GameObjects.Image#_crop
         * @type {object}
         * @private
         * @since 3.11.0
         */
        this._crop = this.resetCropObject();

        this.setTexture(texture, frame);
        this.setPosition(x, y);
        this.setSizeToFrame();
        this.setOriginFromFrame();
        this.initPipeline();
        this.initPostPipeline(true);
    },
});

module.exports = Image;
