/**
 * @typedef {object} Vsengine.Types.Scenes.CreateSceneFromObjectConfig
 * @since 3.17.0
 *
 * @property {Vsengine.Types.Scenes.SceneInitCallback} [init] - The scene's init callback.
 * @property {Vsengine.Types.Scenes.ScenePreloadCallback} [preload] - The scene's preload callback.
 * @property {Vsengine.Types.Scenes.SceneCreateCallback} [create] - The scene's create callback.
 * @property {Vsengine.Types.Scenes.SceneUpdateCallback} [update] - The scene's update callback. See {@link Vsengine.Scene#update}.
 * @property {any} [extend] - Any additional properties, which will be copied to the Scene after it's created (except `data` or `sys`).
 * @property {any} [extend.data] - Any values, which will be merged into the Scene's Data Manager store.
 */
