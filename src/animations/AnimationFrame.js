/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../utils/Class");

/**
 * @classdesc
 * A single frame in an Animation sequence.
 *
 * An AnimationFrame consists of a reference to the Texture it uses for rendering, references to other
 * frames in the animation, and index data. It also has the ability to modify the animation timing.
 *
 * AnimationFrames are generated automatically by the Animation class.
 *
 * @class AnimationFrame
 * @memberof Vsengine.Animations
 * @constructor
 * @since 3.0.0
 *
 * @param {string} textureKey - The key of the Texture this AnimationFrame uses.
 * @param {(string|number)} textureFrame - The key of the Frame within the Texture that this AnimationFrame uses.
 * @param {number} index - The index of this AnimationFrame within the Animation sequence.
 * @param {Vsengine.Textures.Frame} frame - A reference to the Texture Frame this AnimationFrame uses for rendering.
 * @param {boolean} [isKeyFrame=false] - Is this Frame a Keyframe within the Animation?
 */
var AnimationFrame = new Class({
    initialize: function AnimationFrame(
        textureKey,
        textureFrame,
        index,
        frame,
        isKeyFrame
    ) {
        if (isKeyFrame === undefined) {
            isKeyFrame = false;
        }

        /**
         * The key of the Texture this AnimationFrame uses.
         *
         * @name Vsengine.Animations.AnimationFrame#textureKey
         * @type {string}
         * @since 3.0.0
         */
        this.textureKey = textureKey;

        /**
         * The key of the Frame within the Texture that this AnimationFrame uses.
         *
         * @name Vsengine.Animations.AnimationFrame#textureFrame
         * @type {(string|number)}
         * @since 3.0.0
         */
        this.textureFrame = textureFrame;

        /**
         * The index of this AnimationFrame within the Animation sequence.
         *
         * @name Vsengine.Animations.AnimationFrame#index
         * @type {number}
         * @since 3.0.0
         */
        this.index = index;

        /**
         * A reference to the Texture Frame this AnimationFrame uses for rendering.
         *
         * @name Vsengine.Animations.AnimationFrame#frame
         * @type {Vsengine.Textures.Frame}
         * @since 3.0.0
         */
        this.frame = frame;

        /**
         * Is this the first frame in an animation sequence?
         *
         * @name Vsengine.Animations.AnimationFrame#isFirst
         * @type {boolean}
         * @default false
         * @readonly
         * @since 3.0.0
         */
        this.isFirst = false;

        /**
         * Is this the last frame in an animation sequence?
         *
         * @name Vsengine.Animations.AnimationFrame#isLast
         * @type {boolean}
         * @default false
         * @readonly
         * @since 3.0.0
         */
        this.isLast = false;

        /**
         * A reference to the AnimationFrame that comes before this one in the animation, if any.
         *
         * @name Vsengine.Animations.AnimationFrame#prevFrame
         * @type {?Vsengine.Animations.AnimationFrame}
         * @default null
         * @readonly
         * @since 3.0.0
         */
        this.prevFrame = null;

        /**
         * A reference to the AnimationFrame that comes after this one in the animation, if any.
         *
         * @name Vsengine.Animations.AnimationFrame#nextFrame
         * @type {?Vsengine.Animations.AnimationFrame}
         * @default null
         * @readonly
         * @since 3.0.0
         */
        this.nextFrame = null;

        /**
         * The duration, in ms, of this frame of the animation.
         *
         * @name Vsengine.Animations.AnimationFrame#duration
         * @type {number}
         * @default 0
         * @since 3.0.0
         */
        this.duration = 0;

        /**
         * What % through the animation does this frame come?
         * This value is generated when the animation is created and cached here.
         *
         * @name Vsengine.Animations.AnimationFrame#progress
         * @type {number}
         * @default 0
         * @readonly
         * @since 3.0.0
         */
        this.progress = 0;

        /**
         * Is this Frame a KeyFrame within the Animation?
         *
         * @name Vsengine.Animations.AnimationFrame#isKeyFrame
         * @type {boolean}
         * @since 3.50.0
         */
        this.isKeyFrame = isKeyFrame;
    },

    /**
     * Generates a JavaScript object suitable for converting to JSON.
     *
     * @method Vsengine.Animations.AnimationFrame#toJSON
     * @since 3.0.0
     *
     * @return {Vsengine.Types.Animations.JSONAnimationFrame} The AnimationFrame data.
     */
    toJSON: function () {
        return {
            key: this.textureKey,
            frame: this.textureFrame,
            duration: this.duration,
            keyframe: this.isKeyFrame,
        };
    },

    /**
     * Destroys this object by removing references to external resources and callbacks.
     *
     * @method Vsengine.Animations.AnimationFrame#destroy
     * @since 3.0.0
     */
    destroy: function () {
        this.frame = undefined;
    },
});

module.exports = AnimationFrame;
