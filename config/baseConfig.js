exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: [
        "../specs/baseSpec.js"        
    ],
    capabilities:{
        browserName:"chrome"
    }
}