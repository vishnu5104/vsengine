/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Game Boot Event.
 *
 * This event is dispatched when the Vsengine Game instance has finished booting, but before it is ready to start running.
 * The global systems use this event to know when to set themselves up, dispatching their own `ready` events as required.
 *
 * @event Vsengine.Core.Events#BOOT
 * @type {string}
 * @since 3.0.0
 */
module.exports = "boot";
