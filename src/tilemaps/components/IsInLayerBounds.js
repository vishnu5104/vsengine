/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Checks if the given tile coordinates are within the bounds of the layer.
 *
 * @function Vsengine.Tilemaps.Components.IsInLayerBounds
 * @since 3.0.0
 *
 * @param {number} tileX - The x coordinate, in tiles, not pixels.
 * @param {number} tileY - The y coordinate, in tiles, not pixels.
 * @param {Vsengine.Tilemaps.LayerData} layer - The Tilemap Layer to act upon.
 *
 * @return {boolean} `true` if the tile coordinates are within the bounds of the layer, otherwise `false`.
 */
var IsInLayerBounds = function (tileX, tileY, layer) {
    return (
        tileX >= 0 && tileX < layer.width && tileY >= 0 && tileY < layer.height
    );
};

module.exports = IsInLayerBounds;
