/**
 * @typedef {object} Vsengine.Types.Loader.FileTypes.SpriteSheetFileConfig
 *
 * @property {string} key - The key of the file. Must be unique within both the Loader and the Texture Manager.
 * @property {string} [url] - The absolute or relative URL to load the file from.
 * @property {string} [extension='png'] - The default file extension to use if no url is provided.
 * @property {string} [normalMap] - The filename of an associated normal map. It uses the same path and url to load as the image.
 * @property {Vsengine.Types.Loader.FileTypes.ImageFrameConfig} [frameConfig] - The frame configuration object.
 * @property {Vsengine.Types.Loader.XHRSettingsObject} [xhrSettings] - Extra XHR Settings specifically for this file.
 */
