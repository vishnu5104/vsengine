/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Internal function to process the separation of a physics body from a tile.
 *
 * @function Vsengine.Physics.Arcade.Tilemap.ProcessTileSeparationY
 * @since 3.0.0
 *
 * @param {Vsengine.Physics.Arcade.Body} body - The Body object to separate.
 * @param {number} y - The y separation amount.
 */
var ProcessTileSeparationY = function (body, y) {
    if (y < 0) {
        body.blocked.none = false;
        body.blocked.up = true;
    } else if (y > 0) {
        body.blocked.none = false;
        body.blocked.down = true;
    }

    body.position.y -= y;
    body.updateCenter();

    if (body.bounce.y === 0) {
        body.velocity.y = 0;
    } else {
        body.velocity.y = -body.velocity.y * body.bounce.y;
    }
};

module.exports = ProcessTileSeparationY;
