/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @namespace Vsengine.Input.Events
 */

module.exports = {
    BOOT: require("./BOOT_EVENT"),
    DESTROY: require("./DESTROY_EVENT"),
    DRAG_END: require("./DRAG_END_EVENT"),
    DRAG_ENTER: require("./DRAG_ENTER_EVENT"),
    DRAG: require("./DRAG_EVENT"),
    DRAG_LEAVE: require("./DRAG_LEAVE_EVENT"),
    DRAG_OVER: require("./DRAG_OVER_EVENT"),
    DRAG_START: require("./DRAG_START_EVENT"),
    DROP: require("./DROP_EVENT"),
    GAME_OUT: require("./GAME_OUT_EVENT"),
    GAME_OVER: require("./GAME_OVER_EVENT"),
    GAMEOBJECT_DOWN: require("./GAMEOBJECT_DOWN_EVENT"),
    GAMEOBJECT_DRAG_END: require("./GAMEOBJECT_DRAG_END_EVENT"),
    GAMEOBJECT_DRAG_ENTER: require("./GAMEOBJECT_DRAG_ENTER_EVENT"),
    GAMEOBJECT_DRAG: require("./GAMEOBJECT_DRAG_EVENT"),
    GAMEOBJECT_DRAG_LEAVE: require("./GAMEOBJECT_DRAG_LEAVE_EVENT"),
    GAMEOBJECT_DRAG_OVER: require("./GAMEOBJECT_DRAG_OVER_EVENT"),
    GAMEOBJECT_DRAG_START: require("./GAMEOBJECT_DRAG_START_EVENT"),
    GAMEOBJECT_DROP: require("./GAMEOBJECT_DROP_EVENT"),
    GAMEOBJECT_MOVE: require("./GAMEOBJECT_MOVE_EVENT"),
    GAMEOBJECT_OUT: require("./GAMEOBJECT_OUT_EVENT"),
    GAMEOBJECT_OVER: require("./GAMEOBJECT_OVER_EVENT"),
    GAMEOBJECT_POINTER_DOWN: require("./GAMEOBJECT_POINTER_DOWN_EVENT"),
    GAMEOBJECT_POINTER_MOVE: require("./GAMEOBJECT_POINTER_MOVE_EVENT"),
    GAMEOBJECT_POINTER_OUT: require("./GAMEOBJECT_POINTER_OUT_EVENT"),
    GAMEOBJECT_POINTER_OVER: require("./GAMEOBJECT_POINTER_OVER_EVENT"),
    GAMEOBJECT_POINTER_UP: require("./GAMEOBJECT_POINTER_UP_EVENT"),
    GAMEOBJECT_POINTER_WHEEL: require("./GAMEOBJECT_POINTER_WHEEL_EVENT"),
    GAMEOBJECT_UP: require("./GAMEOBJECT_UP_EVENT"),
    GAMEOBJECT_WHEEL: require("./GAMEOBJECT_WHEEL_EVENT"),
    MANAGER_BOOT: require("./MANAGER_BOOT_EVENT"),
    MANAGER_PROCESS: require("./MANAGER_PROCESS_EVENT"),
    MANAGER_UPDATE: require("./MANAGER_UPDATE_EVENT"),
    POINTER_DOWN: require("./POINTER_DOWN_EVENT"),
    POINTER_DOWN_OUTSIDE: require("./POINTER_DOWN_OUTSIDE_EVENT"),
    POINTER_MOVE: require("./POINTER_MOVE_EVENT"),
    POINTER_OUT: require("./POINTER_OUT_EVENT"),
    POINTER_OVER: require("./POINTER_OVER_EVENT"),
    POINTER_UP: require("./POINTER_UP_EVENT"),
    POINTER_UP_OUTSIDE: require("./POINTER_UP_OUTSIDE_EVENT"),
    POINTER_WHEEL: require("./POINTER_WHEEL_EVENT"),
    POINTERLOCK_CHANGE: require("./POINTERLOCK_CHANGE_EVENT"),
    PRE_UPDATE: require("./PRE_UPDATE_EVENT"),
    SHUTDOWN: require("./SHUTDOWN_EVENT"),
    START: require("./START_EVENT"),
    UPDATE: require("./UPDATE_EVENT"),
};