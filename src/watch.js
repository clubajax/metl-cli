module.exports = new Promise(function (resolve, reject) {
    var
        grunt = require('grunt'),
        watch = require('./watch-standalone');

    grunt.tasks(['watch']);
});

//if(grunt.config('alloy.watch')) {
//    var
//        port = grunt.config('alloy.watch.port') || '35729',
//        watchConfig = {};
//
//    if(grunt.config('alloy.watch.less')) {
//        watchConfig.less = {
//            files: grunt.config('alloy.watch.less'),
//            tasks: ['ls'],
//            options: {
//                livereload: false //port
//            }
//        };
//
//        watchConfig.css = {
//            files: grunt.config('alloy.less.output'),
//            tasks: []
//        }
//
//        watchConfig.options = {
//            livereload: port
//        };
//    }
//    if(grunt.config('alloy.watch.scripts')) {
//        watchConfig.scripts = {
//            files: grunt.config('alloy.watch.scripts'),
//            options: {
//                livereload: port
//            }
//        };
//    }
//
//    grunt.config('watch', watchConfig);
//
//    grunt.config('concurrent', {
//        target: {
//            tasks: ['watch', 'serve'],
//            options: {
//                logConcurrentOutput: true
//            }
//        }
//    });
//    grunt.loadNpmTasks('grunt-contrib-watch');
//    grunt.loadNpmTasks('grunt-concurrent');
//    grunt.registerTask('dev', function () {
//        grunt.task.run('build');
//        grunt.task.run('less:main');
//        grunt.task.run('concurrent:target');
//    });
//    grunt.event.on('watch', function (action, filepath) {
//        console.log('changed.file', action, filepath);
//    });
//}