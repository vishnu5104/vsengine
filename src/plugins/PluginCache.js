/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

//  Contains the plugins that Vsengine uses globally and locally.
//  These are the source objects, not instantiated.
var corePlugins = {};

//  Contains the plugins that the dev has loaded into their game
//  These are the source objects, not instantiated.
var customPlugins = {};

var PluginCache = {};

/**
 * @namespace Vsengine.Plugins.PluginCache
 */

/**
 * Static method called directly by the Core internal Plugins.
 * Key is a reference used to get the plugin from the plugins object (i.e. InputPlugin)
 * Plugin is the object to instantiate to create the plugin
 * Mapping is what the plugin is injected into the Scene.Systems as (i.e. input)
 *
 * @method Vsengine.Plugins.PluginCache.register
 * @since 3.8.0
 *
 * @param {string} key - A reference used to get this plugin from the plugin cache.
 * @param {function} plugin - The plugin to be stored. Should be the core object, not instantiated.
 * @param {string} mapping - If this plugin is to be injected into the Scene Systems, this is the property key map used.
 * @param {boolean} [custom=false] - Core Scene plugin or a Custom Scene plugin?
 */
PluginCache.register = function (key, plugin, mapping, custom) {
    if (custom === undefined) {
        custom = false;
    }

    corePlugins[key] = { plugin: plugin, mapping: mapping, custom: custom };
};

/**
 * Stores a custom plugin in the global plugin cache.
 * The key must be unique, within the scope of the cache.
 *
 * @method Vsengine.Plugins.PluginCache.registerCustom
 * @since 3.8.0
 *
 * @param {string} key - A reference used to get this plugin from the plugin cache.
 * @param {function} plugin - The plugin to be stored. Should be the core object, not instantiated.
 * @param {string} mapping - If this plugin is to be injected into the Scene Systems, this is the property key map used.
 * @param {?any} data - A value to be passed to the plugin's `init` method.
 */
PluginCache.registerCustom = function (key, plugin, mapping, data) {
    customPlugins[key] = { plugin: plugin, mapping: mapping, data: data };
};

/**
 * Checks if the given key is already being used in the core plugin cache.
 *
 * @method Vsengine.Plugins.PluginCache.hasCore
 * @since 3.8.0
 *
 * @param {string} key - The key to check for.
 *
 * @return {boolean} `true` if the key is already in use in the core cache, otherwise `false`.
 */
PluginCache.hasCore = function (key) {
    return corePlugins.hasOwnProperty(key);
};

/**
 * Checks if the given key is already being used in the custom plugin cache.
 *
 * @method Vsengine.Plugins.PluginCache.hasCustom
 * @since 3.8.0
 *
 * @param {string} key - The key to check for.
 *
 * @return {boolean} `true` if the key is already in use in the custom cache, otherwise `false`.
 */
PluginCache.hasCustom = function (key) {
    return customPlugins.hasOwnProperty(key);
};

/**
 * Returns the core plugin object from the cache based on the given key.
 *
 * @method Vsengine.Plugins.PluginCache.getCore
 * @since 3.8.0
 *
 * @param {string} key - The key of the core plugin to get.
 *
 * @return {Vsengine.Types.Plugins.CorePluginContainer} The core plugin object.
 */
PluginCache.getCore = function (key) {
    return corePlugins[key];
};

/**
 * Returns the custom plugin object from the cache based on the given key.
 *
 * @method Vsengine.Plugins.PluginCache.getCustom
 * @since 3.8.0
 *
 * @param {string} key - The key of the custom plugin to get.
 *
 * @return {Vsengine.Types.Plugins.CustomPluginContainer} The custom plugin object.
 */
PluginCache.getCustom = function (key) {
    return customPlugins[key];
};

/**
 * Returns an object from the custom cache based on the given key that can be instantiated.
 *
 * @method Vsengine.Plugins.PluginCache.getCustomClass
 * @since 3.8.0
 *
 * @param {string} key - The key of the custom plugin to get.
 *
 * @return {function} The custom plugin object.
 */
PluginCache.getCustomClass = function (key) {
    return customPlugins.hasOwnProperty(key) ? customPlugins[key].plugin : null;
};

/**
 * Removes a core plugin based on the given key.
 *
 * @method Vsengine.Plugins.PluginCache.remove
 * @since 3.8.0
 *
 * @param {string} key - The key of the core plugin to remove.
 */
PluginCache.remove = function (key) {
    if (corePlugins.hasOwnProperty(key)) {
        delete corePlugins[key];
    }
};

/**
 * Removes a custom plugin based on the given key.
 *
 * @method Vsengine.Plugins.PluginCache.removeCustom
 * @since 3.8.0
 *
 * @param {string} key - The key of the custom plugin to remove.
 */
PluginCache.removeCustom = function (key) {
    if (customPlugins.hasOwnProperty(key)) {
        delete customPlugins[key];
    }
};

/**
 * Removes all Core Plugins.
 *
 * This includes all of the internal system plugins that Vsengine needs, like the Input Plugin and Loader Plugin.
 * So be sure you only call this if you do not wish to run Vsengine again.
 *
 * @method Vsengine.Plugins.PluginCache.destroyCorePlugins
 * @since 3.12.0
 */
PluginCache.destroyCorePlugins = function () {
    for (var key in corePlugins) {
        if (corePlugins.hasOwnProperty(key)) {
            delete corePlugins[key];
        }
    }
};

/**
 * Removes all Custom Plugins.
 *
 * @method Vsengine.Plugins.PluginCache.destroyCustomPlugins
 * @since 3.12.0
 */
PluginCache.destroyCustomPlugins = function () {
    for (var key in customPlugins) {
        if (customPlugins.hasOwnProperty(key)) {
            delete customPlugins[key];
        }
    }
};

module.exports = PluginCache;
