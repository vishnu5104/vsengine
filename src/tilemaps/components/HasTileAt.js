/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var IsInLayerBounds = require("./IsInLayerBounds");

/**
 * Checks if there is a tile at the given location (in tile coordinates) in the given layer. Returns
 * false if there is no tile or if the tile at that location has an index of -1.
 *
 * @function Vsengine.Tilemaps.Components.HasTileAt
 * @since 3.0.0
 *
 * @param {number} tileX - X position to get the tile from (given in tile units, not pixels).
 * @param {number} tileY - Y position to get the tile from (given in tile units, not pixels).
 * @param {Vsengine.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {?boolean} Returns a boolean, or null if the layer given was invalid.
 */
var HasTileAt = function (tileX, tileY, layer) {
    if (IsInLayerBounds(tileX, tileY, layer)) {
        var tile = layer.data[tileY][tileX];

        return tile !== null && tile.index > -1;
    } else {
        return false;
    }
};

module.exports = HasTileAt;
