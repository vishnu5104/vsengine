/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../utils/Class");
var Components = require("./components");
var Image = require("../../gameobjects/image/Image");

/**
 * @classdesc
 * An Arcade Physics Image is an Image with an Arcade Physics body and related components.
 * The body can be dynamic or static.
 *
 * The main difference between an Arcade Image and an Arcade Sprite is that you cannot animate an Arcade Image.
 *
 * @class Image
 * @extends Vsengine.GameObjects.Image
 * @memberof Vsengine.Physics.Arcade
 * @constructor
 * @since 3.0.0
 *
 * @extends Vsengine.Physics.Arcade.Components.Acceleration
 * @extends Vsengine.Physics.Arcade.Components.Angular
 * @extends Vsengine.Physics.Arcade.Components.Bounce
 * @extends Vsengine.Physics.Arcade.Components.Collision
 * @extends Vsengine.Physics.Arcade.Components.Debug
 * @extends Vsengine.Physics.Arcade.Components.Drag
 * @extends Vsengine.Physics.Arcade.Components.Enable
 * @extends Vsengine.Physics.Arcade.Components.Friction
 * @extends Vsengine.Physics.Arcade.Components.Gravity
 * @extends Vsengine.Physics.Arcade.Components.Immovable
 * @extends Vsengine.Physics.Arcade.Components.Mass
 * @extends Vsengine.Physics.Arcade.Components.Pushable
 * @extends Vsengine.Physics.Arcade.Components.Size
 * @extends Vsengine.Physics.Arcade.Components.Velocity
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
 * @extends Vsengine.GameObjects.Components.Texture
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
var ArcadeImage = new Class({
    Extends: Image,

    Mixins: [
        Components.Acceleration,
        Components.Angular,
        Components.Bounce,
        Components.Collision,
        Components.Debug,
        Components.Drag,
        Components.Enable,
        Components.Friction,
        Components.Gravity,
        Components.Immovable,
        Components.Mass,
        Components.Pushable,
        Components.Size,
        Components.Velocity,
    ],

    initialize: function ArcadeImage(scene, x, y, texture, frame) {
        Image.call(this, scene, x, y, texture, frame);

        /**
         * This Game Object's Physics Body.
         *
         * @name Vsengine.Physics.Arcade.Image#body
         * @type {?(Vsengine.Physics.Arcade.Body|Vsengine.Physics.Arcade.StaticBody)}
         * @default null
         * @since 3.0.0
         */
        this.body = null;
    },
});

module.exports = ArcadeImage;
