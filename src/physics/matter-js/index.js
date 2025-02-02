/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Physics.Matter
 */

module.exports = {
    BodyBounds: require("./BodyBounds"),
    Components: require("./components"),
    Events: require("./events"),
    Factory: require("./Factory"),
    MatterGameObject: require("./MatterGameObject"),
    Image: require("./MatterImage"),
    Matter: require("./CustomMain"),
    MatterPhysics: require("./MatterPhysics"),
    PolyDecomp: require("./poly-decomp"),
    Sprite: require("./MatterSprite"),
    TileBody: require("./MatterTileBody"),
    PhysicsEditorParser: require("./PhysicsEditorParser"),
    PhysicsJSONParser: require("./PhysicsJSONParser"),
    PointerConstraint: require("./PointerConstraint"),
    World: require("./World"),
};
