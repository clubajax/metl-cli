#!/usr/bin/env node

var
    promise,
    action,
    option,
    help;

help = `
Create
    There are shortcuts for creating components. Run the following command to create 'my-component':
        metl create:my-component
    This will create a my-component skeleton in a components/my-component folder.
`;


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

if(!action || action === 'help'){
    console.log(help);
    process.exit(0);
}

switch(action){
    case 'init':
        require('./src/init');
        break;
    case 'serve':
        require('./src/serve');
        break;
    case 'grunt':
        promise = require('./src/grunt');
        break;
}

promise.then(function () {
    console.log('promise exit');
    process.exit(0);
});


//var grunt = require('grunt');
//grunt.tasks(['default']);