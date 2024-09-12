declare namespace Vsengine.Loader.FileTypes {
    interface SpineFileConfig {
        key: string;
        textureURL?: string;
        textureExtension?: string;
        textureXhrSettings?: Vsengine.Types.Loader.XHRSettingsObject;
        normalMap?: string;
        atlasURL?: string;
        atlasExtension?: string;
        atlasXhrSettings?: Vsengine.Types.Loader.XHRSettingsObject;
    }

    class SpineFile extends Vsengine.Loader.MultiFile {
        constructor(
            loader: Vsengine.Loader.LoaderPlugin,
            key: string | Vsengine.Loader.FileTypes.SpineFileConfig,
            jsonURL: string | string[],
            atlasURL: string,
            preMultipliedAlpha: boolean,
            jsonXhrSettings: Vsengine.Types.Loader.XHRSettingsObject,
            atlasXhrSettings: Vsengine.Types.Loader.XHRSettingsObject
        );

        addToCache();
    }
}
