/**
 * @typedef {object} Vsengine.Types.Cameras.Controls.SmoothedKeyControlConfig
 * @since 3.0.0
 *
 * @property {Vsengine.Cameras.Scene2D.Camera} [camera] - The Camera that this Control will update.
 * @property {Vsengine.Input.Keyboard.Key} [left] - The Key to be pressed that will move the Camera left.
 * @property {Vsengine.Input.Keyboard.Key} [right] - The Key to be pressed that will move the Camera right.
 * @property {Vsengine.Input.Keyboard.Key} [up] - The Key to be pressed that will move the Camera up.
 * @property {Vsengine.Input.Keyboard.Key} [down] - The Key to be pressed that will move the Camera down.
 * @property {Vsengine.Input.Keyboard.Key} [zoomIn] - The Key to be pressed that will zoom the Camera in.
 * @property {Vsengine.Input.Keyboard.Key} [zoomOut] - The Key to be pressed that will zoom the Camera out.
 * @property {number} [zoomSpeed=0.01] - The speed at which the camera will zoom if the `zoomIn` or `zoomOut` keys are pressed.
 * @property {(number|{x:number,y:number})} [acceleration=0] - The horizontal and vertical acceleration the camera will move.
 * @property {(number|{x:number,y:number})} [drag=0] - The horizontal and vertical drag applied to the camera when it is moving.
 * @property {(number|{x:number,y:number})} [maxSpeed=0] - The maximum horizontal and vertical speed the camera will move.
 * @property {number} [minZoom=0.001] - The smallest zoom value the camera will reach when zoomed out.
 * @property {number} [maxZoom=1000] - The largest zoom value the camera will reach when zoomed in.
 */
