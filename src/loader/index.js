/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");
var Extend = require("../utils/object/Extend");

/**
 * @namespace Vsengine.Loader
 */

var Loader = {
    Events: require("./events"),

    FileTypes: require("./filetypes"),

    File: require("./File"),
    FileTypesManager: require("./FileTypesManager"),
    GetURL: require("./GetURL"),
    LoaderPlugin: require("./LoaderPlugin"),
    MergeXHRSettings: require("./MergeXHRSettings"),
    MultiFile: require("./MultiFile"),
    XHRLoader: require("./XHRLoader"),
    XHRSettings: require("./XHRSettings"),
};

//   Merge in the consts
Loader = Extend(false, Loader, CONST);

module.exports = Loader;
