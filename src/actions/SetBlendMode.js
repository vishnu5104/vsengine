/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var PropertyValueSet = require("./PropertyValueSet");

/**
 * Takes an array of Game Objects, or any objects that have the public property `blendMode`
 * and then sets it to the given value.
 *
 * To use this with a Group: `SetBlendMode(group.getChildren(), value)`
 *
 * @function Vsengine.Actions.SetBlendMode
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - The array of items to be updated by this action.
 * @param {(Vsengine.BlendModes|string|number)} value - The Blend Mode to be set.
 * @param {number} [index=0] - An optional offset to start searching from within the items array.
 * @param {number} [direction=1] - The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of objects that were passed to this Action.
 */
var SetBlendMode = function (items, value, index, direction) {
    return PropertyValueSet(items, "blendMode", value, 0, index, direction);
};

module.exports = SetBlendMode;
