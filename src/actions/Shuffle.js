/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var ArrayShuffle = require("../utils/array/Shuffle");

/**
 * Shuffles the array in place. The shuffled array is both modified and returned.
 *
 * @function Vsengine.Actions.Shuffle
 * @since 3.0.0
 * @see Vsengine.Utils.Array.Shuffle
 *
 * @generic {Vsengine.GameObjects.GameObject[]} G - [items,$return]
 *
 * @param {(array|Vsengine.GameObjects.GameObject[])} items - An array of Game Objects. The contents of this array are updated by this Action.
 *
 * @return {(array|Vsengine.GameObjects.GameObject[])} The array of Game Objects that was passed to this Action.
 */
var Shuffle = function (items) {
    return ArrayShuffle(items);
};

module.exports = Shuffle;
