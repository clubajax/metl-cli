module.exports = new Promise(function (resolve, reject) {

    var
        config = require('./read-config'),
        grunt = require('grunt');

    console.log('config', config);

    // hack to avoid loading a Gruntfile
    // You can skip this and just use a Gruntfile instead
    grunt.task.init = function () { };


    grunt.config('http-server', {
        'main': config.serve
    });


    grunt.loadNpmTasks('grunt-http-server');
    grunt.tasks(['http-server:main']);

});