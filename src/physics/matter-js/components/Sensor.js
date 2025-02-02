/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Enables a Matter-enabled Game Object to be a sensor. Should be used as a mixin and not directly.
 *
 * @namespace Vsengine.Physics.Matter.Components.Sensor
 * @since 3.0.0
 */
var Sensor = {
    /**
     * Set the body belonging to this Game Object to be a sensor.
     * Sensors trigger collision events, but don't react with colliding body physically.
     *
     * @method Vsengine.Physics.Matter.Components.Sensor#setSensor
     * @since 3.0.0
     *
     * @param {boolean} value - `true` to set the body as a sensor, or `false` to disable it.
     *
     * @return {this} This Game Object instance.
     */
    setSensor: function (value) {
        this.body.isSensor = value;

        return this;
    },

    /**
     * Is the body belonging to this Game Object a sensor or not?
     *
     * @method Vsengine.Physics.Matter.Components.Sensor#isSensor
     * @since 3.0.0
     *
     * @return {boolean} `true` if the body is a sensor, otherwise `false`.
     */
    isSensor: function () {
        return this.body.isSensor;
    },
};

module.exports = Sensor;
