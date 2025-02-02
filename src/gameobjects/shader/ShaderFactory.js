/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Shader = require("./Shader");
var GameObjectFactory = require("../GameObjectFactory");

/**
 * Creates a new Shader Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Shader Game Object and WebGL support have been built into Vsengine.
 *
 * @method Vsengine.GameObjects.GameObjectFactory#shader
 * @webglOnly
 * @since 3.17.0
 *
 * @param {(string|Vsengine.Display.BaseShader)} key - The key of the shader to use from the shader cache, or a BaseShader instance.
 * @param {number} [x=0] - The horizontal position of this Game Object in the world.
 * @param {number} [y=0] - The vertical position of this Game Object in the world.
 * @param {number} [width=128] - The width of the Game Object.
 * @param {number} [height=128] - The height of the Game Object.
 * @param {string[]} [textures] - Optional array of texture keys to bind to the iChannel0...3 uniforms. The textures must already exist in the Texture Manager.
 * @param {object} [textureData] - Optional additional texture data.
 *
 * @return {Vsengine.GameObjects.Shader} The Game Object that was created.
 */
if (typeof WEBGL_RENDERER) {
    GameObjectFactory.register(
        "shader",
        function (key, x, y, width, height, textures, textureData) {
            return this.displayList.add(
                new Shader(
                    this.scene,
                    key,
                    x,
                    y,
                    width,
                    height,
                    textures,
                    textureData
                )
            );
        }
    );
}
