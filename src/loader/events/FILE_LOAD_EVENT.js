/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The File Load Event.
 *
 * This event is dispatched by the Loader Plugin when a file finishes loading,
 * but _before_ it is processed and added to the internal Vsengine caches.
 *
 * Listen to it from a Scene using: `this.load.on('load', listener)`.
 *
 * @event Vsengine.Loader.Events#FILE_LOAD
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Loader.File} file - A reference to the File which just finished loading.
 */
module.exports = "load";