
module.exports = new Promise(function (resolve, reject) {
    var
        fs = require('fs'),
        grunt = require('grunt');

//console.log('grunt', grunt);
    grunt.initConfig({
        metl:{
            woo:1
        }
    });
// hack to avoid loading a Gruntfile
// You can skip this and just use a Gruntfile instead
//grunt.task.init = function() {};

    grunt.registerInitTask('test-async', 'testing', function(MONSTER) {
        console.log('TEST ASYNC');
        var done = this.async();
        // Your async code.
        console.log('pause');
        setTimeout(function() {
            // Let's simulate an error, sometimes.
            var success = Math.random() > 0.5;
            // All done!
            done(success);
            console.log('done');
            resolve();
        }, 1000);
    });

    function runGrunt(grunt){
        console.log('run grunt', grunt.config());
        fs.writeFileSync('test.txt', 'This is a test file', 'utf8');

        grunt.file.copy('test.txt', 'text2.txt');

        //grunt.task.run('test-async');
        grunt.tasks(['test-async:Dracula']);
    }

    console.log('grunt');
    runGrunt(grunt);
});