/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../utils/Class");
var Components = require("./components");
var Sprite = require("../../gameobjects/sprite/Sprite");

/**
 * @classdesc
 * An Arcade Physics Sprite is a Sprite with an Arcade Physics body and related components.
 * The body can be dynamic or static.
 *
 * The main difference between an Arcade Sprite and an Arcade Image is that you cannot animate an Arcade Image.
 * If you do not require animation then you can safely use Arcade Images instead of Arcade Sprites.
 *
 * @class Sprite
 * @extends Vsengine.GameObjects.Sprite
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
var ArcadeSprite = new Class({
    Extends: Sprite,

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

    initialize: function ArcadeSprite(scene, x, y, texture, frame) {
        Sprite.call(this, scene, x, y, texture, frame);

        /**
         * This Game Object's Physics Body.
         *
         * @name Vsengine.Physics.Arcade.Sprite#body
         * @type {?(Vsengine.Physics.Arcade.Body|Vsengine.Physics.Arcade.StaticBody)}
         * @default null
         * @since 3.0.0
         */
        this.body = null;
    },
});

module.exports = ArcadeSprite;
