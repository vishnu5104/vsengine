/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Passes all provided Game Objects to the Input Manager to enable them for input with identical areas and callbacks.
 *
 * @see {@link Vsengine.GameObjects.GameObject#setInteractive}
 *
 * @function Vsengine.Actions.SetHitArea
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 * @param {(Vsengine.Types.Input.InputConfiguration|any)} [hitArea] - Either an input configuration object, or a geometric shape that defines the hit area for the Game Object. If not given it will try to create a Rectangle based on the texture frame.
 * @param {Vsengine.Types.Input.HitAreaCallback} [callback] - The callback that determines if the pointer is within the Hit Area shape or not. If you provide a shape you must also provide a callback.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var SetHitArea = function (items, hitArea, hitAreaCallback) {
    for (var i = 0; i < items.length; i++) {
        items[i].setInteractive(hitArea, hitAreaCallback);
    }

    return items;
};

module.exports = SetHitArea;
