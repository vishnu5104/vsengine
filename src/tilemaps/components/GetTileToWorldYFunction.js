/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("../const/ORIENTATION_CONST");
var NOOP = require("../../utils/NOOP");
var StaggeredTileToWorldY = require("./StaggeredTileToWorldY");
var TileToWorldY = require("./TileToWorldY");

/**
 * Gets the correct function to use to translate tiles, based on the map orientation.
 *
 * @function Vsengine.Tilemaps.Components.GetTileToWorldYFunction
 * @since 3.50.0
 *
 * @param {number} orientation - The Tilemap orientation constant.
 *
 * @return {function} The function to use to translate tiles for the given map type.
 */
var GetTileToWorldYFunction = function (orientation) {
    if (orientation === CONST.ORTHOGONAL) {
        return TileToWorldY;
    } else if (orientation === CONST.STAGGERED) {
        return StaggeredTileToWorldY;
    } else {
        return NOOP;
    }
};

module.exports = GetTileToWorldYFunction;