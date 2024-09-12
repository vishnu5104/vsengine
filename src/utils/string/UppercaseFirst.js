/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Capitalizes the first letter of a string if there is one.
 * @example
 * UppercaseFirst('abc');
 * // returns 'Abc'
 * @example
 * UppercaseFirst('the happy family');
 * // returns 'The happy family'
 * @example
 * UppercaseFirst('');
 * // returns ''
 *
 * @function Vsengine.Utils.String.UppercaseFirst
 * @since 3.0.0
 *
 * @param {string} str - The string to capitalize.
 *
 * @return {string} A new string, same as the first, but with the first letter capitalized.
 */
var UppercaseFirst = function (str) {
    return str && str[0].toUpperCase() + str.slice(1);
};

module.exports = UppercaseFirst;
