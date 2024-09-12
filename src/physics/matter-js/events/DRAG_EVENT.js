/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Matter Physics Drag Event.
 *
 * This event is dispatched by a Matter Physics World instance when a Pointer Constraint
 * is actively dragging a body. It is emitted each time the pointer moves.
 *
 * Listen to it from a Scene using: `this.matter.world.on('drag', listener)`.
 *
 * @event Vsengine.Physics.Matter.Events#DRAG
 * @type {string}
 * @since 3.16.2
 *
 * @param {MatterJS.BodyType} body - The Body that is being dragged. This is a Matter Body, not a Vsengine Game Object.
 * @param {Vsengine.Physics.Matter.PointerConstraint} constraint - The Pointer Constraint that is dragging the body.
 */
module.exports = "drag";
