/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Random = require("../geom/rectangle/Random");

/**
 * Takes an array of Game Objects and positions them at random locations within the Rectangle.
 *
 * @function Vsengine.Actions.RandomRectangle
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Vsengine.Geom.Rectangle} rect - The Rectangle to position the Game Objects within.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var RandomRectangle = function (items, rect) {
    for (var i = 0; i < items.length; i++) {
        Random(rect, items[i]);
    }

    return items;
};

module.exports = RandomRectangle;
