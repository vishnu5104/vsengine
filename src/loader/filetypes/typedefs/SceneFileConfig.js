/**
 * @typedef {object} Vsengine.Types.Loader.FileTypes.SceneFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within both the Loader and the Text Cache.
 * @property {string} [url] - The absolute or relative URL to load the file from.
 * @property {string} [extension='js'] - The default file extension to use if no url is provided.
 * @property {Vsengine.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 */