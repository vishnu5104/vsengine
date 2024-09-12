/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

require("./polyfills/requestVideoFrame");

var CONST = require("./const");
var Extend = require("./utils/object/Extend");

/**
 * @namespace Vsengine
 */

var Vsengine = {
    Actions: require("./actions"),
    Animations: require("./animations"),
    BlendModes: require("./renderer/BlendModes"),
    Cache: require("./cache"),
    Cameras: require("./cameras"),
    Core: require("./core"),
    Class: require("./utils/Class"),
    Create: require("./create"),
    Curves: require("./curves"),
    Data: require("./data"),
    Display: require("./display"),
    DOM: require("./dom"),
    Events: require("./events"),
    FX: require("./fx"),
    Game: require("./core/Game"),
    GameObjects: require("./gameobjects"),
    Geom: require("./geom"),
    Input: require("./input"),
    Loader: require("./loader"),
    Math: require("./math"),
    Physics: {
        Arcade: require("./physics/arcade"),
    },
    Plugins: require("./plugins"),
    Renderer: require("./renderer"),
    Scale: require("./scale"),
    ScaleModes: require("./renderer/ScaleModes"),
    Scene: require("./scene/Scene"),
    Scenes: require("./scene"),
    Structs: require("./structs"),
    Textures: require("./textures"),
    Tilemaps: require("./tilemaps"),
    Time: require("./time"),
    Tweens: require("./tweens"),
    Utils: require("./utils"),
};

//  Merge in the optional plugins and WebGL only features

if (typeof FEATURE_SOUND) {
    Vsengine.Sound = require("./sound");
}

if (typeof PLUGIN_CAMERA3D) {
    Vsengine.Cameras.Sprite3D = require("../plugins/camera3d/src");
    Vsengine.GameObjects.Sprite3D = require("../plugins/camera3d/src/sprite3d/Sprite3D");
    Vsengine.GameObjects.Factories.Sprite3D = require("../plugins/camera3d/src/sprite3d/Sprite3DFactory");
    Vsengine.GameObjects.Creators.Sprite3D = require("../plugins/camera3d/src/sprite3d/Sprite3DCreator");
}

if (typeof PLUGIN_FBINSTANT) {
    Vsengine.FacebookInstantGamesPlugin = require("../plugins/fbinstant/src/FacebookInstantGamesPlugin");
}

//   Merge in the consts

Vsengine = Extend(false, Vsengine, CONST);

/**
 * The root types namespace.
 *
 * @namespace Vsengine.Types
 * @since 3.17.0
 */

//  Export it

module.exports = Vsengine;

global.Vsengine = Vsengine;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
