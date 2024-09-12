/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require("../utils/Class");
var NOOP = require("../utils/NOOP");

/**
 * @classdesc
 * Abstracts away the use of RAF or setTimeOut for the core game update loop.
 *
 * This is invoked automatically by the Vsengine.Game instance.
 *
 * @class RequestAnimationFrame
 * @memberof Vsengine.DOM
 * @constructor
 * @since 3.0.0
 */
var RequestAnimationFrame = new Class({
    initialize: function RequestAnimationFrame() {
        /**
         * True if RequestAnimationFrame is running, otherwise false.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#isRunning
         * @type {boolean}
         * @default false
         * @since 3.0.0
         */
        this.isRunning = false;

        /**
         * The callback to be invoked each step.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#callback
         * @type {FrameRequestCallback}
         * @since 3.0.0
         */
        this.callback = NOOP;

        /**
         * True if the step is using setTimeout instead of RAF.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#isSetTimeOut
         * @type {boolean}
         * @default false
         * @since 3.0.0
         */
        this.isSetTimeOut = false;

        /**
         * The setTimeout or RAF callback ID used when canceling them.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#timeOutID
         * @type {?number}
         * @default null
         * @since 3.0.0
         */
        this.timeOutID = null;

        /**
         * The delay rate in ms for setTimeOut.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#delay
         * @type {number}
         * @default 0
         * @since 3.60.0
         */
        this.delay = 0;

        var _this = this;

        /**
         * The RAF step function.
         *
         * Invokes the callback and schedules another call to requestAnimationFrame.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#step
         * @type {FrameRequestCallback}
         * @since 3.0.0
         *
         * @param {number} time - The timestamp passed in from RequestAnimationFrame.
         */
        this.step = function step(time) {
            _this.callback(time);

            if (_this.isRunning) {
                _this.timeOutID = window.requestAnimationFrame(step);
            }
        };

        /**
         * The SetTimeout step function.
         *
         * Invokes the callback and schedules another call to setTimeout.
         *
         * @name Vsengine.DOM.RequestAnimationFrame#stepTimeout
         * @type {function}
         * @since 3.0.0
         */
        this.stepTimeout = function stepTimeout() {
            if (_this.isRunning) {
                //  Make the next request before the callback, so that timing is maintained
                _this.timeOutID = window.setTimeout(stepTimeout, _this.delay);
            }

            _this.callback(window.performance.now());
        };
    },

    /**
     * Starts the requestAnimationFrame or setTimeout process running.
     *
     * @method Vsengine.DOM.RequestAnimationFrame#start
     * @since 3.0.0
     *
     * @param {FrameRequestCallback} callback - The callback to invoke each step.
     * @param {boolean} forceSetTimeOut - Should it use SetTimeout, even if RAF is available?
     * @param {number} delay - The setTimeout delay rate in ms.
     */
    start: function (callback, forceSetTimeOut, delay) {
        if (this.isRunning) {
            return;
        }

        this.callback = callback;

        this.isSetTimeOut = forceSetTimeOut;

        this.delay = delay;

        this.isRunning = true;

        this.timeOutID = forceSetTimeOut
            ? window.setTimeout(this.stepTimeout, 0)
            : window.requestAnimationFrame(this.step);
    },

    /**
     * Stops the requestAnimationFrame or setTimeout from running.
     *
     * @method Vsengine.DOM.RequestAnimationFrame#stop
     * @since 3.0.0
     */
    stop: function () {
        this.isRunning = false;

        if (this.isSetTimeOut) {
            clearTimeout(this.timeOutID);
        } else {
            window.cancelAnimationFrame(this.timeOutID);
        }
    },

    /**
     * Stops the step from running and clears the callback reference.
     *
     * @method Vsengine.DOM.RequestAnimationFrame#destroy
     * @since 3.0.0
     */
    destroy: function () {
        this.stop();

        this.callback = NOOP;
    },
});

module.exports = RequestAnimationFrame;
