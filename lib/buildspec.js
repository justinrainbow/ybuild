/**
 * Yui3 Module Build Specification
 *
 * Default build options which will be merged with whatever is specified via the build.json format.
 */

exports.defaultSpec = {
    name : "component",
    type : "js",
    version : "@VERSION@",
    skip : {
        clean : false,
        register : false,
        lint : false,
        logger: false
    },
    sourceDir : "js",
    sourceFiles : ["component.js"],
    buildDir : "../build",
    assetsDir : "assets",
    tools : {},
    details : {
        use : null,
        supersedes : null,
        requires : ["base"],
        optional : null,
        after : null,
        after_map : {},
        lang : ["en-US"],
        skinnable : false
    }
};

//console.log(JSON.stringify(exports.defaultSpec, null, '\t'));