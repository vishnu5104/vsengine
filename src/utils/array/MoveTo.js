/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Moves an element in an array to a new position within the same array.
 * The array is modified in-place.
 *
 * @function Vsengine.Utils.Array.MoveTo
 * @since 3.4.0
 *
 * @param {array} array - The array.
 * @param {*} item - The element to move.
 * @param {number} index - The new index that the element will be moved to.
 *
 * @return {*} The element that was moved.
 */
var MoveTo = function (array, item, index) {
    var currentIndex = array.indexOf(item);

    if (currentIndex === -1 || index < 0 || index >= array.length) {
        throw new Error("Supplied index out of bounds");
    }

    if (currentIndex !== index) {
        //  Remove
        array.splice(currentIndex, 1);

        //  Add in new location
        array.splice(index, 0, item);
    }

    return item;
};

module.exports = MoveTo;
