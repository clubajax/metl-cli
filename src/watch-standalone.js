var
    config = require('./read-config'),
    grunt = require('grunt'),
    watchConfig = {};

console.log('watch...');
// hack to avoid loading a Gruntfile
// You can skip this and just use a Gruntfile instead
grunt.task.init = function () { };

if(!config.watch || !config.watch.enabled){
    console.log('watch not enabled', config.watch);
    return;
}

if(config.watch.scripts) {
    watchConfig.scripts = {
        files: config.watch.scripts,
        options: {
            livereload: config.watch.port
        }
    };
}

console.log('2');

grunt.config('watch', watchConfig);
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.event.on('watch', function (action, filepath) {
    console.log('changed.file', action, filepath);
});
console.log('watching...');

