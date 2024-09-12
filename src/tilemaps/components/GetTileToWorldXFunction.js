/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("../const/ORIENTATION_CONST");
var NOOP = require("../../utils/NOOP");
var TileToWorldX = require("./TileToWorldX");

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Vsengine.Tilemaps.Components.GetTileToWorldXFunction
 * @since 3.50.0
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetTileToWorldXFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return TileToWorldX;
    } else {
        return NOOP;
    }
};

module.exports = GetTileToWorldXFunction;
