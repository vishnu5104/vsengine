/**
 * @author       Richard Davey <rich@vsengine.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Physics.Arcade.Events
 */

module.exports = {
    COLLIDE: require("./COLLIDE_EVENT"),
    OVERLAP: require("./OVERLAP_EVENT"),
    PAUSE: require("./PAUSE_EVENT"),
    RESUME: require("./RESUME_EVENT"),
    TILE_COLLIDE: require("./TILE_COLLIDE_EVENT"),
    TILE_OVERLAP: require("./TILE_OVERLAP_EVENT"),
    WORLD_BOUNDS: require("./WORLD_BOUNDS_EVENT"),
    WORLD_STEP: require("./WORLD_STEP_EVENT"),
};