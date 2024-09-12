/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Layer = require("./Layer");
var GameObjectFactory = require("../GameObjectFactory");

/**
 * Creates a new Layer Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Layer Game Object has been built into Vsengine.
 *
 * @method Vsengine.GameObjects.GameObjectFactory#layer
 * @since 3.50.0
 *
 * @param {Vsengine.GameObjects.GameObject|Vsengine.GameObjects.GameObject[]} [children] - An optional array of Game Objects to add to this Layer.
 *
 * @return {Vsengine.GameObjects.Layer} The Game Object that was created.
 */
GameObjectFactory.register("layer", function (children) {
    return this.displayList.add(new Layer(this.scene, children));
});
