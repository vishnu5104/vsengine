/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Arcade Physics Tile Overlap Event.
 *
 * This event is dispatched by an Arcade Physics World instance if a body overlaps with a Tile _and_
 * has its [onOverlap]{@link Vsengine.Physics.Arcade.Body#onOverlap} property set to `true`.
 *
 * It provides an alternative means to handling overlap events rather than using the callback approach.
 *
 * Listen to it from a Scene using: `this.physics.world.on('tileoverlap', listener)`.
 *
 * Please note that 'collide' and 'overlap' are two different things in Arcade Physics.
 *
 * @event Vsengine.Physics.Arcade.Events#TILE_OVERLAP
 * @type {string}
 * @since 3.16.1
 *
 * @param {Vsengine.GameObjects.GameObject} gameObject - The Game Object involved in the overlap. This is the parent of `body`.
 * @param {Vsengine.Tilemaps.Tile} tile - The tile the body overlapped.
 * @param {Vsengine.Physics.Arcade.Body} body - The Arcade Physics Body of the Game Object involved in the overlap.
 */
module.exports = "tileoverlap";
