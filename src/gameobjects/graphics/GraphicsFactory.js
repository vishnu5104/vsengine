/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Graphics = require("./Graphics");
var GameObjectFactory = require("../GameObjectFactory");

/**
 * Creates a new Graphics Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Graphics Game Object has been built into Vsengine.
 *
 * @method Vsengine.GameObjects.GameObjectFactory#graphics
 * @since 3.0.0
 *
 * @param {Vsengine.Types.GameObjects.Graphics.Options} [config] - The Graphics configuration.
 *
 * @return {Vsengine.GameObjects.Graphics} The Game Object that was created.
 */
GameObjectFactory.register("graphics", function (config) {
    return this.displayList.add(new Graphics(this.scene, config));
});

//  When registering a factory function 'this' refers to the GameObjectFactory context.
//
//  There are several properties available to use:
//
//  this.scene - a reference to the Scene that owns the GameObjectFactory
//  this.displayList - a reference to the Display List the Scene owns
//  this.updateList - a reference to the Update List the Scene owns
