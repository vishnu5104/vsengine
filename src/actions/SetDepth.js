/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var PropertyValueSet = require("./PropertyValueSet");

/**
 * Takes an array of Game Objects, or any objects that have the public property `depth`
 * and then sets it to the given value.
 *
 * The optional `step` property is applied incrementally, multiplied by each item in the array.
 *
 * To use this with a Group: `SetDepth(group.getChildren(), value, step)`
 *
 * @function Vsengine.Actions.SetDepth
 * @since 3.0.0
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - The array of items to be updated by this action.
 * @param {number} value - The amount to set the property to.
 * @param {number} [step=0] - This is added to the `value` amount, multiplied by the iteration counter.
 * @param {number} [index=0] - An optional offset to start searching from within the items array.
 * @param {number} [direction=1] - The direction to iterate through the array. 1 is from beginning to end, -1 from end to beginning.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of objects that were passed to this Action.
 */
var SetDepth = function (items, value, step, index, direction) {
    return PropertyValueSet(items, "depth", value, step, index, direction);
};

module.exports = SetDepth;
