/**
 * @callback Vsengine.Types.Scenes.SceneUpdateCallback
 * @since 3.0.0
 *
 * @this Vsengine.Scene
 * @param {number} time - The current time. Either a High Resolution Timer value if it comes from Request Animation Frame, or Date.now if using SetTimeout.
 * @param {number} delta - The delta time in ms since the last frame. This is a smoothed and capped value based on the FPS rate.
 */
