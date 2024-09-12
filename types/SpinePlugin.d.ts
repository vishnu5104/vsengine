/// <reference path="./spine.d.ts" />
/// <reference path="./SpineFile.d.ts" />
/// <reference path="./SpineGameObject.d.ts" />
/// <reference path="./SpineContainer.d.ts" />

declare namespace Vsengine.Loader {
    interface LoaderPlugin extends Vsengine.Events.EventEmitter {
        spine(
            key:
                | string
                | Vsengine.Loader.FileTypes.SpineFileConfig
                | Vsengine.Loader.FileTypes.SpineFileConfig[],
            jsonURL: string,
            atlasURL: string | string[],
            preMultipliedAlpha?: boolean,
            textureXhrSettings?: Vsengine.Types.Loader.XHRSettingsObject,
            atlasXhrSettings?: Vsengine.Types.Loader.XHRSettingsObject
        ): LoaderPlugin;
    }
}

declare namespace Vsengine.GameObjects {
    interface GameObjectFactory {
        spine(
            x: number,
            y: number,
            key?: string,
            animationName?: string,
            loop?: boolean
        ): SpineGameObject;
        spineContainer(
            x: number,
            y: number,
            children?: SpineGameObject | SpineGameObject[]
        ): SpineContainer;
    }

    interface GameObjectCreator {
        spine(
            config: SpineGameObjectConfig,
            addToScene?: boolean
        ): SpineGameObject;
        spineContainer(
            config: SpineContainerConfig,
            addToScene?: boolean
        ): SpineContainer;
    }
}

declare class SpinePlugin extends Vsengine.Plugins.ScenePlugin {
    constructor(
        scene: Vsengine.Scene,
        pluginManager: Vsengine.Plugins.PluginManager
    );

    readonly isWebGL: boolean;

    cache: Vsengine.Cache.BaseCache;
    spineTextures: Vsengine.Cache.BaseCache;
    json: Vsengine.Cache.BaseCache;
    textures: Vsengine.Textures.TextureManager;
    drawDebug: boolean;
    gl: WebGLRenderingContext;
    renderer:
        | Vsengine.Renderer.Canvas.CanvasRenderer
        | Vsengine.Renderer.WebGL.WebGLRenderer;
    sceneRenderer: spine.webgl.SceneRenderer;
    skeletonRenderer:
        | spine.canvas.SkeletonRenderer
        | spine.webgl.SkeletonRenderer;
    skeletonDebugRenderer: spine.webgl.SkeletonDebugRenderer;

    plugin: typeof spine;

    getAtlasCanvas(key: string): spine.TextureAtlas;
    getAtlasWebGL(key: string): spine.TextureAtlas;
    worldToLocal(
        x: number,
        y: number,
        skeleton: spine.Skeleton,
        bone?: spine.Bone
    ): spine.Vector2;
    getVector2(x: number, y: number): spine.Vector2;
    getVector3(x: number, y: number, z: number): spine.Vector2;
    setDebugBones(value?: boolean): SpinePlugin;
    setDebugRegionAttachments(value?: boolean): SpinePlugin;
    setDebugBoundingBoxes(value?: boolean): SpinePlugin;
    setDebugMeshHull(value?: boolean): SpinePlugin;
    setDebugMeshTriangles(value?: boolean): SpinePlugin;
    setDebugPaths(value?: boolean): SpinePlugin;
    setDebugSkeletonXY(value?: boolean): SpinePlugin;
    setDebugClipping(value?: boolean): SpinePlugin;
    setEffect(effect?: spine.VertexEffect): SpinePlugin;
    createSkeleton(key: string, skeletonJSON?: object): any | null;
    createAnimationState(skeleton: spine.Skeleton): any;
    getBounds(skeleton: spine.Skeleton): any;
    onResize(): void;
    add(
        x: number,
        y: number,
        key?: string,
        animationName?: string,
        loop?: boolean
    ): SpineGameObject;
    make(config: SpineGameObjectConfig, addToScene?: boolean): SpineGameObject;
}
