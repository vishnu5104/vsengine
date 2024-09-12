/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Internally used method to set the colliding state of a tile. This does not recalculate
 * interesting faces.
 *
 * @function Vsengine.Tilemaps.Components.SetTileCollision
 * @since 3.0.0
 *
 * @param {Vsengine.Tilemaps.Tile} tile - The Tile to set the collision on.
 * @param {boolean} [collides=true] - Should the tile index collide or not?
 */
var SetTileCollision = function (tile, collides) {
    if (collides) {
        tile.setCollision(true, true, true, true, false);
    } else {
        tile.resetCollision(false);
    }
};

module.exports = SetTileCollision;
