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


console.log('action:', action, global.running);
console.log('process.argv', process.argv);
global.running = true;

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
    case 'watch':
        promise = require('./src/watch');
        break;
    case 'help':
    default:
        console.log('DEFAULT', action);
        helpTxt = fs.readFileSync( __dirname+ '/src/help.txt').toString();
        console.log(helpTxt);
        process.exit(0);
        break;
}

console.log('promise', promise);
promise.then(function () {
    console.log('promise exit');
    process.exit(0);
}, function (e) {
    console.log('[error]', e);
});


//var grunt = require('grunt');
//grunt.tasks(['default']);