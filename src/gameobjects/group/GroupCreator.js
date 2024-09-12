/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var GameObjectCreator = require("../GameObjectCreator");
var Group = require("./Group");

/**
 * Creates a new Group Game Object and returns it.
 *
 * Note: This method will only be available if the Group Game Object has been built into Vsengine.
 *
 * @method Vsengine.GameObjects.GameObjectCreator#group
 * @since 3.0.0
 *
 * @param {Vsengine.Types.GameObjects.Group.GroupConfig|Vsengine.Types.GameObjects.Group.GroupCreateConfig} config - The configuration object this Game Object will use to create itself.
 *
 * @return {Vsengine.GameObjects.Group} The Game Object that was created.
 */
GameObjectCreator.register("group", function (config) {
    return new Group(this.scene, null, config);
});

//  When registering a factory function 'this' refers to the GameObjectCreator context.
