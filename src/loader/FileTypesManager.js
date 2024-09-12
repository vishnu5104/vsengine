/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var types = {};

/**
 * @namespace Vsengine.Loader.FileTypesManager
 */

var FileTypesManager = {
    /**
     * Static method called when a LoaderPlugin is created.
     *
     * Loops through the local types object and injects all of them as
     * properties into the LoaderPlugin instance.
     *
     * @method Vsengine.Loader.FileTypesManager.install
     * @since 3.0.0
     *
     * @param {Vsengine.Loader.LoaderPlugin} loader - The LoaderPlugin to install the types into.
     */
    install: function (loader) {
        for (var key in types) {
            loader[key] = types[key];
        }
    },

    /**
     * Static method called directly by the File Types.
     *
     * The key is a reference to the function used to load the files via the Loader, i.e. `image`.
     *
     * @method Vsengine.Loader.FileTypesManager.register
     * @since 3.0.0
     *
     * @param {string} key - The key that will be used as the method name in the LoaderPlugin.
     * @param {function} factoryFunction - The function that will be called when LoaderPlugin.key is invoked.
     */
    register: function (key, factoryFunction) {
        types[key] = factoryFunction;
    },

    /**
     * Removed all associated file types.
     *
     * @method Vsengine.Loader.FileTypesManager.destroy
     * @since 3.0.0
     */
    destroy: function () {
        types = {};
    },
};

module.exports = FileTypesManager;
