/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @typedef {object} Vsengine.Physics.Matter.Events.BeforeAddEvent
 *
 * @property {any[]} object - An array of the object(s) to be added. May be a single body, constraint, composite or a mixture of these.
 * @property {any} source - The source object of the event.
 * @property {string} name - The name of the event.
 */

/**
 * The Matter Physics Before Add Event.
 *
 * This event is dispatched by a Matter Physics World instance at the start of the process when a new Body
 * or Constraint is being added to the world.
 *
 * Listen to it from a Scene using: `this.matter.world.on('beforeadd', listener)`.
 *
 * @event Vsengine.Physics.Matter.Events#BEFORE_ADD
 * @type {string}
 * @since 3.22.0
 *
 * @param {Vsengine.Physics.Matter.Events.BeforeAddEvent} event - The Add Event object.
 */
module.exports = "beforeadd";
