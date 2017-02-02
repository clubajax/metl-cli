var
    projectDir = process.cwd(),
    defaultConfig = require(__dirname + '/default-config'),
    projectConfig;

try{
    projectConfig = require(projectDir + '/metl.config')
}catch(e){
    console.log('[ERROR] A `metl.config.js` file is required in the project root');
    process.exit(1);
}

function mix (def, proj) {
    Object.keys(def).forEach(function (key) {
        if(proj[key] !== undefined){
            if(typeof def[key] === 'object'){
                mix(def[key], proj[key]);
            }else{
                def[key] = proj[key];
            }
        }
    });
}

//console.log('MIX!!!!!!!!!!');
mix(defaultConfig, projectConfig);
module.exports = defaultConfig;