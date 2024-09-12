/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scale Manager Resize Event.
 *
 * This event is dispatched whenever the Scale Manager detects a resize event from the browser.
 * It sends three parameters to the callback, each of them being Size components. You can read
 * the `width`, `height`, `aspectRatio` and other properties of these components to help with
 * scaling your own game content.
 *
 * @event Vsengine.Scale.Events#RESIZE
 * @type {string}
 * @since 3.16.1
 *
 * @param {Vsengine.Structs.Size} gameSize - A reference to the Game Size component. This is the un-scaled size of your game canvas.
 * @param {Vsengine.Structs.Size} baseSize - A reference to the Base Size component. This is the game size.
 * @param {Vsengine.Structs.Size} displaySize - A reference to the Display Size component. This is the scaled canvas size, after applying zoom and scale mode.
 * @param {number} previousWidth - If the `gameSize` has changed, this value contains its previous width, otherwise it contains the current width.
 * @param {number} previousHeight - If the `gameSize` has changed, this value contains its previous height, otherwise it contains the current height.
 */
module.exports = "resize";
