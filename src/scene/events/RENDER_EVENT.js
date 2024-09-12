/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Render Event.
 *
 * This event is dispatched by a Scene during the main game loop step.
 *
 * The event flow for a single step of a Scene is as follows:
 *
 * 1. [PRE_UPDATE]{@linkcode Vsengine.Scenes.Events#event:PRE_UPDATE}
 * 2. [UPDATE]{@linkcode Vsengine.Scenes.Events#event:UPDATE}
 * 3. The `Scene.update` method is called, if it exists
 * 4. [POST_UPDATE]{@linkcode Vsengine.Scenes.Events#event:POST_UPDATE}
 * 5. [PRE_RENDER]{@linkcode Vsengine.Scenes.Events#event:PRE_RENDER}
 * 6. [RENDER]{@linkcode Vsengine.Scenes.Events#event:RENDER}
 *
 * Listen to it from a Scene using `this.events.on('render', listener)`.
 *
 * A Scene will only render if it is visible.
 *
 * By the time this event is dispatched, the Scene will have already been rendered.
 *
 * @event Vsengine.Scenes.Events#RENDER
 * @type {string}
 * @since 3.0.0
 *
 * @param {(Vsengine.Renderer.Canvas.CanvasRenderer|Vsengine.Renderer.WebGL.WebGLRenderer)} renderer - The renderer that rendered the Scene.
 */
module.exports = "render";
