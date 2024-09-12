/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  This singleton is instantiated as soon as Vsengine loads,
//  before a Vsengine.Game instance has even been created.
//  Which means all instances of Vsengine Games can share it,
//  without having to re-poll the device all over again

/**
 * @namespace Vsengine.Device
 * @since 3.0.0
 */

/**
 * @typedef {object} Vsengine.DeviceConf
 *
 * @property {Vsengine.Device.OS} os - The OS Device functions.
 * @property {Vsengine.Device.Browser} browser - The Browser Device functions.
 * @property {Vsengine.Device.Features} features - The Features Device functions.
 * @property {Vsengine.Device.Input} input - The Input Device functions.
 * @property {Vsengine.Device.Audio} audio - The Audio Device functions.
 * @property {Vsengine.Device.Video} video - The Video Device functions.
 * @property {Vsengine.Device.Fullscreen} fullscreen - The Fullscreen Device functions.
 * @property {Vsengine.Device.CanvasFeatures} canvasFeatures - The Canvas Device functions.
 */

module.exports = {
    os: require("./OS"),
    browser: require("./Browser"),
    features: require("./Features"),
    input: require("./Input"),
    audio: require("./Audio"),
    video: require("./Video"),
    fullscreen: require("./Fullscreen"),
    canvasFeatures: require("./CanvasFeatures"),
};
