module.exports = new Promise(function (resolve, reject) {

    var
        config = require('./read-config'),
        useWatch = config.watch && config.watch.enabled,
        grunt = require('grunt');

    // hack to avoid loading a Gruntfile
    // You can skip this and just use a Gruntfile instead
    grunt.task.init = function () { };


    grunt.config('http-server', {
        'main': config.serve
    });

    grunt.loadNpmTasks('grunt-http-server');

    if(useWatch){
        grunt.config('concurrent', {
            target: {
                tasks: ['watch', 'http-server:main'],
                options: {
                    logConcurrentOutput: true
                }
            }
        });

        grunt.loadNpmTasks('grunt-concurrent');
        grunt.tasks(['concurrent']);

    }
    else{
        grunt.tasks(['http-server:main']);
    }



});