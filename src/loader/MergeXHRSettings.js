/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Extend = require("../utils/object/Extend");
var XHRSettings = require("./XHRSettings");

/**
 * Takes two XHRSettings Objects and creates a new XHRSettings object from them.
 *
 * The new object is seeded by the values given in the global settings, but any setting in
 * the local object overrides the global ones.
 *
 * @function Vsengine.Loader.MergeXHRSettings
 * @since 3.0.0
 *
 * @param {Vsengine.Types.Loader.XHRSettingsObject} global - The global XHRSettings object.
 * @param {Vsengine.Types.Loader.XHRSettingsObject} local - The local XHRSettings object.
 *
 * @return {Vsengine.Types.Loader.XHRSettingsObject} A newly formed XHRSettings object.
 */
var MergeXHRSettings = function (global, local) {
    var output = global === undefined ? XHRSettings() : Extend({}, global);

    if (local) {
        for (var setting in local) {
            if (local[setting] !== undefined) {
                output[setting] = local[setting];
            }
        }
    }

    return output;
};

module.exports = MergeXHRSettings;