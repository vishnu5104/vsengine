var v = require("vivid-cli");

v.log(
    "{bgYellow}{black} __________.__                                 ________   "
);
v.log(
    "{bgYellow}{black} \\______   \\  |__ _____    ______ ___________  \\_____  \\  "
);
v.log(
    "{bgYellow}{black}  |     ___/  |  \\\\__  \\  /  ___// __ \\_  __ \\   _(__  <  "
);
v.log(
    "{bgYellow}{black}  |    |   |   Y  \\/ __ \\_\\___ \\\\  ___/|  | \\/  /       \\ "
);
v.log(
    "{bgYellow}{black}  |____|   |___|  (____  /____  >\\___  >__|    /______  / "
);
v.log(
    "{bgYellow}{black}                \\/     \\/     \\/     \\/               \\/  "
);
v.log(
    "{bgYellow}{black} Available commands:                                      "
);

v.log(
    "{white} npm run {green}build {cyan}   Build dev version of Vsengine with Webpack"
);
v.log(
    "{white} npm run {green}watch {cyan}      Build dev & put Webpack in watch mode"
);
v.log(
    "{white} npm run {green}dist {cyan}               Build dist versions of Vsengine"
);
v.log(
    "{white} npm run {green}lint {cyan}                  ESLint check Vsengine source"
);
v.log(
    "{white} npm run {green}lintfix {cyan}       ESLint check and fix Vsengine source"
);
v.log(
    "{white} npm run {green}sloc {cyan}       Get source code & comments line count"
);
v.log(
    "{white} npm run {green}bundleshaders {cyan}    Convert vert/frag shaders to js"
);
v.log(
    "{white} npm run {green}plugin.cam3d {cyan}               Build Camera3D Plugin"
);
v.log("");
v.log(" {white}{bold}Spine Plugin{/bold}");
v.log("");
v.log(
    "{white} npm run {green}plugin.spine.watch {cyan}       Spine Plugin Watch Mode"
);
v.log(
    "{white} npm run {green}plugin.spine.dev {cyan}        Build Debug Spine Plugin"
);
v.log(
    "{white} npm run {green}plugin.spine.runtimes {cyan}       Build Spine Runtimes"
);
v.log(
    "{white} npm run {green}plugin.spine.dist {cyan}             Build Spine Plugin"
);
v.log(
    "{white} npm run {green}plugin.spine.full.dist {cyan}         Build Full Plugin"
);
v.log("");
v.log(" {white}{bold}Facebook Instant Games{/bold}");
v.log("");
v.log(
    "{white} npm run {green}buildfb {cyan}         Build dev Vsengine FB with Webpack"
);
v.log(
    "{white} npm run {green}watchfb {cyan}       Build FB dev in Webpack watch mode"
);
v.log(
    "{white} npm run {green}distfb {cyan}          Build dist versions of Vsengine FB"
);
v.log(
    "{white} npm run {green}distfull {cyan}      Build dist versions of Vsengine + FB"
);
v.log("");
v.log(" {white}{bold}TypeScript{/bold}");
v.log("");
v.log(
    "{white} npm run {green}build-tsgen {cyan}     Build the TypeScript Defs parser"
);
v.log(
    "{white} npm run {green}tsgen {cyan}               Generate the TypeScript Defs"
);
v.log(
    "{white} npm run {green}test-ts {cyan}                 Test the TypeScript Defs"
);

v.log(
    "{bgYellow}{black} https://phaser.io                 https://labs.phaser.io "
);
