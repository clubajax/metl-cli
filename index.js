#!/usr/bin/env node

var
    helpTxt,
    promise,
    action,
    option,
    help,
    fs = require('fs');


process.argv.forEach(function (arg) {
    var actionOption;
    if(arg.indexOf('/') === -1){
        if(!action){
            actionOption = arg.split(/:|\s/);
            action = actionOption[0];
            option = actionOption[1];
        }
    }
});


switch(action){
    case 'init':
        promise = require('./src/init');
        break;
    case 'serve':
        console.log('serve...');
        promise = require('./src/serve');
        break;
    case 'grunt':
        promise = require('./src/grunt');
        break;
    case 'help':
    default:
        helpTxt = fs.readFileSync( __dirname+ '/src/help.txt').toString();
        console.log(helpTxt);
        process.exit(0);
        break;
}

promise.then(function () {
    console.log('promise exit');
    process.exit(0);
});


//var grunt = require('grunt');
//grunt.tasks(['default']);