/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2024 Vsengine Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var FILE_CONST = {
    /**
     * The Loader is idle.
     *
     * @name Vsengine.Loader.LOADER_IDLE
     * @type {number}
     * @since 3.0.0
     */
    LOADER_IDLE: 0,

    /**
     * The Loader is actively loading.
     *
     * @name Vsengine.Loader.LOADER_LOADING
     * @type {number}
     * @since 3.0.0
     */
    LOADER_LOADING: 1,

    /**
     * The Loader is processing files is has loaded.
     *
     * @name Vsengine.Loader.LOADER_PROCESSING
     * @type {number}
     * @since 3.0.0
     */
    LOADER_PROCESSING: 2,

    /**
     * The Loader has completed loading and processing.
     *
     * @name Vsengine.Loader.LOADER_COMPLETE
     * @type {number}
     * @since 3.0.0
     */
    LOADER_COMPLETE: 3,

    /**
     * The Loader is shutting down.
     *
     * @name Vsengine.Loader.LOADER_SHUTDOWN
     * @type {number}
     * @since 3.0.0
     */
    LOADER_SHUTDOWN: 4,

    /**
     * The Loader has been destroyed.
     *
     * @name Vsengine.Loader.LOADER_DESTROYED
     * @type {number}
     * @since 3.0.0
     */
    LOADER_DESTROYED: 5,

    /**
     * File is in the load queue but not yet started.
     *
     * @name Vsengine.Loader.FILE_PENDING
     * @type {number}
     * @since 3.0.0
     */
    FILE_PENDING: 10,

    /**
     * File has been started to load by the loader (onLoad called)
     *
     * @name Vsengine.Loader.FILE_LOADING
     * @type {number}
     * @since 3.0.0
     */
    FILE_LOADING: 11,

    /**
     * File has loaded successfully, awaiting processing.
     *
     * @name Vsengine.Loader.FILE_LOADED
     * @type {number}
     * @since 3.0.0
     */
    FILE_LOADED: 12,

    /**
     * File failed to load.
     *
     * @name Vsengine.Loader.FILE_FAILED
     * @type {number}
     * @since 3.0.0
     */
    FILE_FAILED: 13,

    /**
     * File is being processed (onProcess callback)
     *
     * @name Vsengine.Loader.FILE_PROCESSING
     * @type {number}
     * @since 3.0.0
     */
    FILE_PROCESSING: 14,

    /**
     * The File has errored somehow during processing.
     *
     * @name Vsengine.Loader.FILE_ERRORED
     * @type {number}
     * @since 3.0.0
     */
    FILE_ERRORED: 16,

    /**
     * File has finished processing.
     *
     * @name Vsengine.Loader.FILE_COMPLETE
     * @type {number}
     * @since 3.0.0
     */
    FILE_COMPLETE: 17,

    /**
     * File has been destroyed.
     *
     * @name Vsengine.Loader.FILE_DESTROYED
     * @type {number}
     * @since 3.0.0
     */
    FILE_DESTROYED: 18,

    /**
     * File was populated from local data and doesn't need an HTTP request.
     *
     * @name Vsengine.Loader.FILE_POPULATED
     * @type {number}
     * @since 3.0.0
     */
    FILE_POPULATED: 19,

    /**
     * File is pending being destroyed.
     *
     * @name Vsengine.Loader.FILE_PENDING_DESTROY
     * @type {number}
     * @since 3.60.0
     */
    FILE_PENDING_DESTROY: 20,
};

module.exports = FILE_CONST;
