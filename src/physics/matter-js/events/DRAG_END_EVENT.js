/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Matter Physics Drag End Event.
 *
 * This event is dispatched by a Matter Physics World instance when a Pointer Constraint
 * stops dragging a body.
 *
 * Listen to it from a Scene using: `this.matter.world.on('dragend', listener)`.
 *
 * @event Vsengine.Physics.Matter.Events#DRAG_END
 * @type {string}
 * @since 3.16.2
 *
 * @param {MatterJS.BodyType} body - The Body that has stopped being dragged. This is a Matter Body, not a Vsengine Game Object.
 * @param {Vsengine.Physics.Matter.PointerConstraint} constraint - The Pointer Constraint that was dragging the body.
 */
module.exports = "dragend";
