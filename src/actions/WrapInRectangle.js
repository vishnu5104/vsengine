/**
 * @author       Richard Davey <rich@phaser.io>
 * @author       samme <samme.npm@gmail.com>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Wrap = require("../math/Wrap");

/**
 * Iterates through the given array and makes sure that each objects x and y
 * properties are wrapped to keep them contained within the given Rectangles
 * area.
 *
 * @function Vsengine.Actions.WrapInRectangle
 * @since 3.0.0
 * @see Vsengine.Math.Wrap
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {Vsengine.Geom.Rectangle} rect - The rectangle which the objects will be wrapped to remain within.
 * @param {number} [padding=0] - An amount added to each side of the rectangle during the operation.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var WrapInRectangle = function (items, rect, padding) {
    if (padding === undefined) {
        padding = 0;
    }

    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        item.x = Wrap(item.x, rect.left - padding, rect.right + padding);
        item.y = Wrap(item.y, rect.top - padding, rect.bottom + padding);
    }

    return items;
};

module.exports = WrapInRectangle;
