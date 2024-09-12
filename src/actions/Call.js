/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Takes an array of objects and passes each of them to the given callback.
 *
 * @function Vsengine.Actions.Call
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - The array of items to be updated by this action.
 * @param {Vsengine.Types.Actions.CallCallback} callback - The callback to be invoked. It will be passed just one argument: the item from the array.
 * @param {*} context - The scope in which the callback will be invoked.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of objects that was passed to this Action.
 */
var Call = function (items, callback, context) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];

        callback.call(context, item);
    }

    return items;
};

module.exports = Call;
