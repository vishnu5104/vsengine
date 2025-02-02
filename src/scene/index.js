/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var CONST = require("./const");
var Extend = require("../utils/object/Extend");

/**
 * @namespace Vsengine.Scenes
 */

var Scene = {
    Events: require("./events"),
    GetPhysicsPlugins: require("./GetPhysicsPlugins"),
    GetScenePlugins: require("./GetScenePlugins"),
    SceneManager: require("./SceneManager"),
    ScenePlugin: require("./ScenePlugin"),
    Settings: require("./Settings"),
    Systems: require("./Systems"),
};

//   Merge in the consts
Scene = Extend(false, Scene, CONST);

module.exports = Scene;
