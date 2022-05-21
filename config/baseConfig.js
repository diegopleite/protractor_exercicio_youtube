exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",

    specs: [
        //"../specs/spec.js",
        "../specs/spec.others.js"        
    ],
    baseUrl : 'https://blog.taller.net.br/',
    capabilities:{
        browserName:"chrome"
    }
}