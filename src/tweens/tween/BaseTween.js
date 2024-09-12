/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../../utils/Class");
var EventEmitter = require("eventemitter3");
var Events = require("../events");
var TWEEN_CONST = require("./const");

/**
 * @classdesc
 * As the name implies, this is the base Tween class that both the Tween and TweenChain
 * inherit from. It contains shared properties and methods common to both types of Tween.
 *
 * Typically you would never instantiate this class directly, although you could certainly
 * use it to create your own variation of Tweens from.
 *
 * @class BaseTween
 * @memberof Vsengine.Tweens
 * @extends Vsengine.Events.EventEmitter
 * @constructor
 * @since 3.60.0
 *
 * @param {(Vsengine.Tweens.TweenManager|Vsengine.Tweens.TweenChain)} parent - A reference to the Tween Manager, or Tween Chain, that owns this Tween.
 */
var BaseTween = new Class({
    Extends: EventEmitter,

    initialize: function BaseTween(parent) {
        EventEmitter.call(this);

        /**
         * A reference to the Tween Manager, or Tween Chain, that owns this Tween.
         *
         * @name Vsengine.Tweens.BaseTween#parent
         * @type {(Vsengine.Tweens.TweenManager|Vsengine.Tweens.TweenChain)}
         * @since 3.60.0
         */
        this.parent = parent;

        /**
         * The main data array. For a Tween, this contains all of the `TweenData` objects, each
         * containing a unique property and target that is being tweened.
         *
         * For a TweenChain, this contains an array of `Tween` instances, which are being played
         * through in sequence.
         *
         * @name Vsengine.Tweens.BaseTween#data
         * @type {(Vsengine.Tweens.TweenData[]|Vsengine.Tweens.Tween[])}
         * @since 3.60.0
         */
        this.data = [];

        /**
         * The cached size of the data array.
         *
         * @name Vsengine.Tweens.BaseTween#totalData
         * @type {number}
         * @since 3.60.0
         */
        this.totalData = 0;

        /**
         * The time in milliseconds before the 'onStart' event fires.
         *
         * For a Tween, this is the shortest `delay` value across all of the TweenDatas it owns.
         * For a TweenChain, it is whatever delay value was given in the configuration.
         *
         * @name Vsengine.Tweens.BaseTween#startDelay
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.startDelay = 0;

        /**
         * Has this Tween started playback yet?
         *
         * This boolean is toggled when the Tween leaves the 'start delayed' state and begins running.
         *
         * @name Vsengine.Tweens.BaseTween#hasStarted
         * @type {boolean}
         * @readonly
         * @since 3.60.0
         */
        this.hasStarted = false;

        /**
         * Scales the time applied to this Tween. A value of 1 runs in real-time. A value of 0.5 runs 50% slower, and so on.
         *
         * The value isn't used when calculating total duration of the tween, it's a run-time delta adjustment only.
         *
         * This value is multiplied by the `TweenManager.timeScale`.
         *
         * @name Vsengine.Tweens.BaseTween#timeScale
         * @type {number}
         * @default 1
         * @since 3.60.0
         */
        this.timeScale = 1;

        /**
         * The number of times this Tween will loop.
         *
         * Can be -1 for an infinite loop, zero for none, or a positive integer.
         *
         * Typically this is set in the configuration object, but can also be set directly
         * as long as this Tween is paused and hasn't started playback.
         *
         * When enabled it will play through ALL Tweens again.
         *
         * Use TweenData.repeat to loop a single element.
         *
         * @name Vsengine.Tweens.BaseTween#loop
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.loop = 0;

        /**
         * The time in milliseconds before the Tween loops.
         *
         * Only used if `loop` is > 0.
         *
         * @name Vsengine.Tweens.BaseTween#loopDelay
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.loopDelay = 0;

        /**
         * Internal counter recording how many loops are left to run.
         *
         * @name Vsengine.Tweens.BaseTween#loopCounter
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.loopCounter = 0;

        /**
         * The time in milliseconds before the 'onComplete' event fires.
         *
         * This never fires if `loop = -1` as it never completes because it has been
         * set to loop forever.
         *
         * @name Vsengine.Tweens.BaseTween#completeDelay
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.completeDelay = 0;

        /**
         * An internal countdown timer (used by loopDelay and completeDelay)
         *
         * @name Vsengine.Tweens.BaseTween#countdown
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.countdown = 0;

        /**
         * The current state of the Tween.
         *
         * @name Vsengine.Tweens.BaseTween#state
         * @type {Vsengine.Tweens.StateType}
         * @since 3.60.0
         */
        this.state = TWEEN_CONST.PENDING;

        /**
         * Is the Tween currently paused?
         *
         * A paused Tween needs to be started with the `play` method, or resumed with the `resume` method.
         *
         * This property can be toggled at runtime if required.
         *
         * @name Vsengine.Tweens.BaseTween#paused
         * @type {boolean}
         * @default false
         * @since 3.60.0
         */
        this.paused = false;

        /**
         * An object containing the different Tween callback functions.
         *
         * You can either set these in the Tween config, or by calling the `Tween.setCallback` method.
         *
         * The types available are:
         *
         * `onActive` - When the Tween is first created it moves to an 'active' state when added to the Tween Manager. 'Active' does not mean 'playing'.
         * `onStart` - When the Tween starts playing after a delayed or paused state. This will happen at the same time as `onActive` if the tween has no delay and isn't paused.
         * `onLoop` - When a Tween loops, if it has been set to do so. This happens _after_ the `loopDelay` expires, if set.
         * `onComplete` - When the Tween finishes playback fully. Never invoked if the Tween is set to repeat infinitely.
         * `onStop` - Invoked only if the `Tween.stop` method is called.
         * `onPause` - Invoked only if the `Tween.pause` method is called. Not invoked if the Tween Manager is paused.
         * `onResume` - Invoked only if the `Tween.resume` method is called. Not invoked if the Tween Manager is resumed.
         *
         * The following types are also available and are invoked on a `TweenData` level - that is per-object, per-property, being tweened.
         *
         * `onYoyo` - When a TweenData starts a yoyo. This happens _after_ the `hold` delay expires, if set.
         * `onRepeat` - When a TweenData repeats playback. This happens _after_ the `repeatDelay` expires, if set.
         * `onUpdate` - When a TweenData updates a property on a source target during playback.
         *
         * @name Vsengine.Tweens.BaseTween#callbacks
         * @type {Vsengine.Types.Tweens.TweenCallbacks}
         * @since 3.60.0
         */
        this.callbacks = {
            onActive: null,
            onComplete: null,
            onLoop: null,
            onPause: null,
            onRepeat: null,
            onResume: null,
            onStart: null,
            onStop: null,
            onUpdate: null,
            onYoyo: null,
        };

        /**
         * The scope (or context) in which all of the callbacks are invoked.
         *
         * This defaults to be this Tween, but you can override this property
         * to set it to whatever object you require.
         *
         * @name Vsengine.Tweens.BaseTween#callbackScope
         * @type {any}
         * @since 3.60.0
         */
        this.callbackScope;

        /**
         * Will this Tween persist after playback? A Tween that persists will _not_ be destroyed by the
         * Tween Manager, or when calling `Tween.stop`, and can be re-played as required. You can either
         * set this property when creating the tween in the tween config, or set it _prior_ to playback.
         *
         * However, it's up to you to ensure you destroy persistent tweens when you are finished with them,
         * or they will retain references you may no longer require and waste memory.
         *
         * By default, `Tweens` are set to _not_ persist, so they are automatically cleaned-up by
         * the Tween Manager.
         *
         * @name Vsengine.Tweens.BaseTween#persist
         * @type {boolean}
         * @since 3.60.0
         */
        this.persist = false;
    },

    /**
     * Sets the value of the time scale applied to this Tween. A value of 1 runs in real-time.
     * A value of 0.5 runs 50% slower, and so on.
     *
     * The value isn't used when calculating total duration of the tween, it's a run-time delta adjustment only.
     *
     * This value is multiplied by the `TweenManager.timeScale`.
     *
     * @method Vsengine.Tweens.BaseTween#setTimeScale
     * @since 3.60.0
     *
     * @param {number} value - The time scale value to set.
     *
     * @return {this} This Tween instance.
     */
    setTimeScale: function (value) {
        this.timeScale = value;

        return this;
    },

    /**
     * Gets the value of the time scale applied to this Tween. A value of 1 runs in real-time.
     * A value of 0.5 runs 50% slower, and so on.
     *
     * @method Vsengine.Tweens.BaseTween#getTimeScale
     * @since 3.60.0
     *
     * @return {number} The value of the time scale applied to this Tween.
     */
    getTimeScale: function () {
        return this.timeScale;
    },

    /**
     * Checks if this Tween is currently playing.
     *
     * If this Tween is paused, or not active, this method will return false.
     *
     * @method Vsengine.Tweens.BaseTween#isPlaying
     * @since 3.60.0
     *
     * @return {boolean} `true` if the Tween is playing, otherwise `false`.
     */
    isPlaying: function () {
        return !this.paused && this.isActive();
    },

    /**
     * Checks if the Tween is currently paused.
     *
     * This is the same as inspecting the `BaseTween.paused` property directly.
     *
     * @method Vsengine.Tweens.BaseTween#isPaused
     * @since 3.60.0
     *
     * @return {boolean} `true` if the Tween is paused, otherwise `false`.
     */
    isPaused: function () {
        return this.paused;
    },

    /**
     * Pauses the Tween immediately. Use `resume` to continue playback.
     *
     * You can also toggle the `Tween.paused` boolean property, but doing so will not trigger the PAUSE event.
     *
     * @method Vsengine.Tweens.BaseTween#pause
     * @fires Vsengine.Tweens.Events#TWEEN_PAUSE
     * @since 3.60.0
     *
     * @return {this} This Tween instance.
     */
    pause: function () {
        if (!this.paused) {
            this.paused = true;

            this.dispatchEvent(Events.TWEEN_PAUSE, "onPause");
        }

        return this;
    },

    /**
     * Resumes the playback of a previously paused Tween.
     *
     * You can also toggle the `Tween.paused` boolean property, but doing so will not trigger the RESUME event.
     *
     * @method Vsengine.Tweens.BaseTween#resume
     * @fires Vsengine.Tweens.Events#TWEEN_RESUME
     * @since 3.60.0
     *
     * @return {this} This Tween instance.
     */
    resume: function () {
        if (this.paused) {
            this.paused = false;

            this.dispatchEvent(Events.TWEEN_RESUME, "onResume");
        }

        return this;
    },

    /**
     * Internal method that makes this Tween active within the TweenManager
     * and emits the onActive event and callback.
     *
     * @method Vsengine.Tweens.BaseTween#makeActive
     * @fires Vsengine.Tweens.Events#TWEEN_ACTIVE
     * @since 3.60.0
     */
    makeActive: function () {
        this.parent.makeActive(this);

        this.dispatchEvent(Events.TWEEN_ACTIVE, "onActive");
    },

    /**
     * Internal method that handles this tween completing and emitting the onComplete event
     * and callback.
     *
     * @method Vsengine.Tweens.BaseTween#onCompleteHandler
     * @since 3.60.0
     */
    onCompleteHandler: function () {
        this.setPendingRemoveState();

        this.dispatchEvent(Events.TWEEN_COMPLETE, "onComplete");
    },

    /**
     * Flags the Tween as being complete, whatever stage of progress it is at.
     *
     * If an `onComplete` callback has been defined it will automatically invoke it, unless a `delay`
     * argument is provided, in which case the Tween will delay for that period of time before calling the callback.
     *
     * If you don't need a delay or don't have an `onComplete` callback then call `Tween.stop` instead.
     *
     * @method Vsengine.Tweens.BaseTween#complete
     * @fires Vsengine.Tweens.Events#TWEEN_COMPLETE
     * @since 3.2.0
     *
     * @param {number} [delay=0] - The time to wait before invoking the complete callback. If zero it will fire immediately.
     *
     * @return {this} This Tween instance.
     */
    complete: function (delay) {
        if (delay === undefined) {
            delay = 0;
        }

        if (delay) {
            this.setCompleteDelayState();

            this.countdown = delay;
        } else {
            this.onCompleteHandler();
        }

        return this;
    },

    /**
     * Flags the Tween as being complete only once the current loop has finished.
     *
     * This is a useful way to stop an infinitely looping tween once a complete cycle is over,
     * rather than abruptly.
     *
     * If you don't have a loop then call `Tween.stop` instead.
     *
     * @method Vsengine.Tweens.BaseTween#completeAfterLoop
     * @fires Vsengine.Tweens.Events#TWEEN_COMPLETE
     * @since 3.60.0
     *
     * @param {number} [loops=0] - The number of loops that should finish before this tween completes. Zero means complete just the current loop.
     *
     * @return {this} This Tween instance.
     */
    completeAfterLoop: function (loops) {
        if (loops === undefined) {
            loops = 0;
        }

        if (this.loopCounter > loops) {
            this.loopCounter = loops;
        }

        return this;
    },

    /**
     * Immediately removes this Tween from the TweenManager and all of its internal arrays,
     * no matter what stage it is at. Then sets the tween state to `REMOVED`.
     *
     * You should dispose of your reference to this tween after calling this method, to
     * free it from memory. If you no longer require it, call `Tween.destroy()` on it.
     *
     * @method Vsengine.Tweens.BaseTween#remove
     * @since 3.60.0
     *
     * @return {this} This Tween instance.
     */
    remove: function () {
        if (this.parent) {
            this.parent.remove(this);
        }

        return this;
    },

    /**
     * Stops the Tween immediately, whatever stage of progress it is at.
     *
     * If not a part of a Tween Chain it is also flagged for removal by the Tween Manager.
     *
     * If an `onStop` callback has been defined it will automatically invoke it.
     *
     * The Tween will be removed during the next game frame, but should be considered 'destroyed' from this point on.
     *
     * Typically, you cannot play a Tween that has been stopped. If you just wish to pause the tween, not destroy it,
     * then call the `pause` method instead and use `resume` to continue playback. If you wish to restart the Tween,
     * use the `restart` or `seek` methods.
     *
     * @method Vsengine.Tweens.BaseTween#stop
     * @fires Vsengine.Tweens.Events#TWEEN_STOP
     * @since 3.60.0
     *
     * @return {this} This Tween instance.
     */
    stop: function () {
        if (
            this.parent &&
            !this.isRemoved() &&
            !this.isPendingRemove() &&
            !this.isDestroyed()
        ) {
            this.dispatchEvent(Events.TWEEN_STOP, "onStop");

            this.setPendingRemoveState();
        }

        return this;
    },

    /**
     * Internal method that handles the processing of the loop delay countdown timer and
     * the dispatch of related events. Called automatically by `Tween.update`.
     *
     * @method Vsengine.Tweens.BaseTween#updateLoopCountdown
     * @since 3.60.0
     *
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    updateLoopCountdown: function (delta) {
        this.countdown -= delta;

        if (this.countdown <= 0) {
            this.setActiveState();

            this.dispatchEvent(Events.TWEEN_LOOP, "onLoop");
        }
    },

    /**
     * Internal method that handles the processing of the start delay countdown timer and
     * the dispatch of related events. Called automatically by `Tween.update`.
     *
     * @method Vsengine.Tweens.BaseTween#updateStartCountdown
     * @since 3.60.0
     *
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    updateStartCountdown: function (delta) {
        this.countdown -= delta;

        if (this.countdown <= 0) {
            this.hasStarted = true;

            this.setActiveState();

            this.dispatchEvent(Events.TWEEN_START, "onStart");

            //  Reset the delta so we always start progress from zero
            delta = 0;
        }

        return delta;
    },

    /**
     * Internal method that handles the processing of the complete delay countdown timer and
     * the dispatch of related events. Called automatically by `Tween.update`.
     *
     * @method Vsengine.Tweens.BaseTween#updateCompleteDelay
     * @since 3.60.0
     *
     * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
     */
    updateCompleteDelay: function (delta) {
        this.countdown -= delta;

        if (this.countdown <= 0) {
            this.onCompleteHandler();
        }
    },

    /**
     * Sets an event based callback to be invoked during playback.
     *
     * Calling this method will replace a previously set callback for the given type, if any exists.
     *
     * The types available are:
     *
     * `onActive` - When the Tween is first created it moves to an 'active' state when added to the Tween Manager. 'Active' does not mean 'playing'.
     * `onStart` - When the Tween starts playing after a delayed or paused state. This will happen at the same time as `onActive` if the tween has no delay and isn't paused.
     * `onLoop` - When a Tween loops, if it has been set to do so. This happens _after_ the `loopDelay` expires, if set.
     * `onComplete` - When the Tween finishes playback fully. Never invoked if the Tween is set to repeat infinitely.
     * `onStop` - Invoked only if the `Tween.stop` method is called.
     * `onPause` - Invoked only if the `Tween.pause` method is called. Not invoked if the Tween Manager is paused.
     * `onResume` - Invoked only if the `Tween.resume` method is called. Not invoked if the Tween Manager is resumed.
     *
     * The following types are also available and are invoked on a `TweenData` level - that is per-object, per-property, being tweened.
     *
     * `onYoyo` - When a TweenData starts a yoyo. This happens _after_ the `hold` delay expires, if set.
     * `onRepeat` - When a TweenData repeats playback. This happens _after_ the `repeatDelay` expires, if set.
     * `onUpdate` - When a TweenData updates a property on a source target during playback.
     *
     * @method Vsengine.Tweens.BaseTween#setCallback
     * @since 3.60.0
     *
     * @param {Vsengine.Types.Tweens.TweenCallbackTypes} type - The type of callback to set. One of: `onActive`, `onComplete`, `onLoop`, `onPause`, `onRepeat`, `onResume`, `onStart`, `onStop`, `onUpdate` or `onYoyo`.
     * @param {function} callback - Your callback that will be invoked.
     * @param {array} [params] - The parameters to pass to the callback. Pass an empty array if you don't want to define any, but do wish to set the scope.
     *
     * @return {this} This Tween instance.
     */
    setCallback: function (type, callback, params) {
        if (params === undefined) {
            params = [];
        }

        if (this.callbacks.hasOwnProperty(type)) {
            this.callbacks[type] = { func: callback, params: params };
        }

        return this;
    },

    /**
     * Sets this Tween state to PENDING.
     *
     * @method Vsengine.Tweens.BaseTween#setPendingState
     * @since 3.60.0
     */
    setPendingState: function () {
        this.state = TWEEN_CONST.PENDING;
    },

    /**
     * Sets this Tween state to ACTIVE.
     *
     * @method Vsengine.Tweens.BaseTween#setActiveState
     * @since 3.60.0
     */
    setActiveState: function () {
        this.state = TWEEN_CONST.ACTIVE;

        this.hasStarted = false;
    },

    /**
     * Sets this Tween state to LOOP_DELAY.
     *
     * @method Vsengine.Tweens.BaseTween#setLoopDelayState
     * @since 3.60.0
     */
    setLoopDelayState: function () {
        this.state = TWEEN_CONST.LOOP_DELAY;
    },

    /**
     * Sets this Tween state to COMPLETE_DELAY.
     *
     * @method Vsengine.Tweens.BaseTween#setCompleteDelayState
     * @since 3.60.0
     */
    setCompleteDelayState: function () {
        this.state = TWEEN_CONST.COMPLETE_DELAY;
    },

    /**
     * Sets this Tween state to START_DELAY.
     *
     * @method Vsengine.Tweens.BaseTween#setStartDelayState
     * @since 3.60.0
     */
    setStartDelayState: function () {
        this.state = TWEEN_CONST.START_DELAY;

        this.countdown = this.startDelay;

        this.hasStarted = false;
    },

    /**
     * Sets this Tween state to PENDING_REMOVE.
     *
     * @method Vsengine.Tweens.BaseTween#setPendingRemoveState
     * @since 3.60.0
     */
    setPendingRemoveState: function () {
        this.state = TWEEN_CONST.PENDING_REMOVE;
    },

    /**
     * Sets this Tween state to REMOVED.
     *
     * @method Vsengine.Tweens.BaseTween#setRemovedState
     * @since 3.60.0
     */
    setRemovedState: function () {
        this.state = TWEEN_CONST.REMOVED;
    },

    /**
     * Sets this Tween state to FINISHED.
     *
     * @method Vsengine.Tweens.BaseTween#setFinishedState
     * @since 3.60.0
     */
    setFinishedState: function () {
        this.state = TWEEN_CONST.FINISHED;
    },

    /**
     * Sets this Tween state to DESTROYED.
     *
     * @method Vsengine.Tweens.BaseTween#setDestroyedState
     * @since 3.60.0
     */
    setDestroyedState: function () {
        this.state = TWEEN_CONST.DESTROYED;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of PENDING, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isPending
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of PENDING, otherwise `false`.
     */
    isPending: function () {
        return this.state === TWEEN_CONST.PENDING;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of ACTIVE, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isActive
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of ACTIVE, otherwise `false`.
     */
    isActive: function () {
        return this.state === TWEEN_CONST.ACTIVE;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of LOOP_DELAY, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isLoopDelayed
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of LOOP_DELAY, otherwise `false`.
     */
    isLoopDelayed: function () {
        return this.state === TWEEN_CONST.LOOP_DELAY;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of COMPLETE_DELAY, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isCompleteDelayed
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of COMPLETE_DELAY, otherwise `false`.
     */
    isCompleteDelayed: function () {
        return this.state === TWEEN_CONST.COMPLETE_DELAY;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of START_DELAY, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isStartDelayed
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of START_DELAY, otherwise `false`.
     */
    isStartDelayed: function () {
        return this.state === TWEEN_CONST.START_DELAY;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of PENDING_REMOVE, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isPendingRemove
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of PENDING_REMOVE, otherwise `false`.
     */
    isPendingRemove: function () {
        return this.state === TWEEN_CONST.PENDING_REMOVE;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of REMOVED, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isRemoved
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of REMOVED, otherwise `false`.
     */
    isRemoved: function () {
        return this.state === TWEEN_CONST.REMOVED;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of FINISHED, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isFinished
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of FINISHED, otherwise `false`.
     */
    isFinished: function () {
        return this.state === TWEEN_CONST.FINISHED;
    },

    /**
     * Returns `true` if this Tween has a _current_ state of DESTROYED, otherwise `false`.
     *
     * @method Vsengine.Tweens.BaseTween#isDestroyed
     * @since 3.60.0
     *
     * @return {boolean} `true` if this Tween has a _current_ state of DESTROYED, otherwise `false`.
     */
    isDestroyed: function () {
        return this.state === TWEEN_CONST.DESTROYED;
    },

    /**
     * Handles the destroy process of this Tween, clearing out the
     * Tween Data and resetting the targets. A Tween that has been
     * destroyed cannot ever be played or used again.
     *
     * @method Vsengine.Tweens.BaseTween#destroy
     * @since 3.60.0
     */
    destroy: function () {
        if (this.data) {
            this.data.forEach(function (tweenData) {
                tweenData.destroy();
            });
        }

        this.removeAllListeners();

        this.callbacks = null;
        this.data = null;
        this.parent = null;

        this.setDestroyedState();
    },
});

BaseTween.TYPES = [
    "onActive",
    "onComplete",
    "onLoop",
    "onPause",
    "onRepeat",
    "onResume",
    "onStart",
    "onStop",
    "onUpdate",
    "onYoyo",
];

module.exports = BaseTween;
