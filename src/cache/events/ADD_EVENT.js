/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Cache Add Event.
 *
 * This event is dispatched by any Cache that extends the BaseCache each time a new object is added to it.
 *
 * @event Vsengine.Cache.Events#ADD
 * @type {string}
 * @since 3.0.0
 *
 * @param {Vsengine.Cache.BaseCache} cache - The cache to which the object was added.
 * @param {string} key - The key of the object added to the cache.
 * @param {*} object - A reference to the object that was added to the cache.
 */
module.exports = "add";
