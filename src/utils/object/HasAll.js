/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Verifies that an object contains all requested keys
 *
 * @function Vsengine.Utils.Objects.HasAll
 * @since 3.0.0
 *
 * @param {object} source - an object on which to check for key existence
 * @param {string[]} keys - an array of keys to ensure the source object contains
 *
 * @return {boolean} true if the source object contains all keys, false otherwise.
 */
var HasAll = function (source, keys) {
    for (var i = 0; i < keys.length; i++) {
        if (!source.hasOwnProperty(keys[i])) {
            return false;
        }
    }

    return true;
};

module.exports = HasAll;
