/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Arcade Physics Tile Collide Event.
 *
 * This event is dispatched by an Arcade Physics World instance if a body collides with a Tile _and_
 * has its [onCollide]{@link Vsengine.Physics.Arcade.Body#onCollide} property set to `true`.
 *
 * It provides an alternative means to handling collide events rather than using the callback approach.
 *
 * Listen to it from a Scene using: `this.physics.world.on('tilecollide', listener)`.
 *
 * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
 *
 * @event Vsengine.Physics.Arcade.Events#TILE_COLLIDE
 * @type {string}
 * @since 3.16.1
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object involved in the collision. This is the parent of `body`.
 * @param {Vsengine.Tilemaps.Tile} tile - The tile the body collided with.
 * @param {Vsengine.Physics.Arcade.Body} body - The Arcade Physics Body of the Game Object involved in the collision.
 */
module.exports = "tilecollide";
