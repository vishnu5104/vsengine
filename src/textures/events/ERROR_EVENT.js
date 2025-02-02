/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Texture Load Error Event.
 *
 * This event is dispatched by the Texture Manager when a texture it requested to load failed.
 * This only happens when base64 encoded textures fail. All other texture types are loaded via the Loader Plugin.
 *
 * Listen to this event from within a Scene using: `this.textures.on('onerror', listener)`.
 *
 * @event Vsengine.Textures.Events#ERROR
 * @type {string}
 * @since 3.0.0
 *
 * @param {string} key - The key of the Texture that failed to load into the Texture Manager.
 */
module.exports = "onerror";
