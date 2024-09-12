/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var AnimationState = require("../../animations/AnimationState");
var Class = require("../../utils/Class");
var Components = require("./components");
var GameObject = require("../../gameobjects/GameObject");
var GetFastValue = require("../../utils/object/GetFastValue");
var Pipeline = require("../../gameobjects/components/Pipeline");
var Sprite = require("../../gameobjects/sprite/Sprite");
var Vector2 = require("../../math/Vector2");

/**
 * @classdesc
 * A Matter Physics Sprite Game Object.
 *
 * A Sprite Game Object is used for the display of both static and animated images in your game.
 * Sprites can have input events and physics bodies. They can also be tweened, tinted, scrolled
 * and animated.
 *
 * The main difference between a Sprite and an Image Game Object is that you cannot animate Images.
 * As such, Sprites take a fraction longer to process and have a larger API footprint due to the Animation
 * Component. If you do not require animation then you can safely use Images to replace Sprites in all cases.
 *
 * @class Sprite
 * @extends Vsengine.GameObjects.Sprite
 * @memberof Vsengine.Physics.Matter
 * @constructor
 * @since 3.0.0
 *
 * @extends Vsengine.Physics.Matter.Components.Bounce
 * @extends Vsengine.Physics.Matter.Components.Collision
 * @extends Vsengine.Physics.Matter.Components.Force
 * @extends Vsengine.Physics.Matter.Components.Friction
 * @extends Vsengine.Physics.Matter.Components.Gravity
 * @extends Vsengine.Physics.Matter.Components.Mass
 * @extends Vsengine.Physics.Matter.Components.Sensor
 * @extends Vsengine.Physics.Matter.Components.SetBody
 * @extends Vsengine.Physics.Matter.Components.Sleep
 * @extends Vsengine.Physics.Matter.Components.Static
 * @extends Vsengine.Physics.Matter.Components.Transform
 * @extends Vsengine.Physics.Matter.Components.Velocity
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
 * @param {Vsengine.Physics.Matter.World} world - A reference to the Matter.World instance that this body belongs to.
 * @param {number} x - The horizontal position of this Game Object in the world.
 * @param {number} y - The vertical position of this Game Object in the world.
 * @param {(string|Vsengine.Textures.Texture)} texture - The key, or instance of the Texture this Game Object will use to render with, as stored in the Texture Manager.
 * @param {(string|number)} [frame] - An optional frame from the Texture this Game Object is rendering with.
 * @param {Vsengine.Types.Physics.Matter.MatterBodyConfig} [options] - An optional Body configuration object that is used to set initial Body properties on creation.
 */
var MatterSprite = new Class({
    Extends: Sprite,

    Mixins: [
        Components.Bounce,
        Components.Collision,
        Components.Force,
        Components.Friction,
        Components.Gravity,
        Components.Mass,
        Components.Sensor,
        Components.SetBody,
        Components.Sleep,
        Components.Static,
        Components.Transform,
        Components.Velocity,
        Pipeline,
    ],

    initialize: function MatterSprite(world, x, y, texture, frame, options) {
        GameObject.call(this, world.scene, "Sprite");

        /**
         * The internal crop data object, as used by `setCrop` and passed to the `Frame.setCropUVs` method.
         *
         * @name Vsengine.Physics.Matter.Sprite#_crop
         * @type {object}
         * @private
         * @since 3.24.0
         */
        this._crop = this.resetCropObject();

        this.anims = new AnimationState(this);

        this.setTexture(texture, frame);
        this.setSizeToFrame();
        this.setOrigin();

        /**
         * A reference to the Matter.World instance that this body belongs to.
         *
         * @name Vsengine.Physics.Matter.Sprite#world
         * @type {Vsengine.Physics.Matter.World}
         * @since 3.0.0
         */
        this.world = world;

        /**
         * An internal temp vector used for velocity and force calculations.
         *
         * @name Vsengine.Physics.Matter.Sprite#_tempVec2
         * @type {Vsengine.Math.Vector2}
         * @private
         * @since 3.0.0
         */
        this._tempVec2 = new Vector2(x, y);

        var shape = GetFastValue(options, "shape", null);

        if (shape) {
            this.setBody(shape, options);
        } else {
            this.setRectangle(this.width, this.height, options);
        }

        this.setPosition(x, y);

        this.initPipeline();
        this.initPostPipeline(true);
    },
});

module.exports = MatterSprite;
