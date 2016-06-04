var grunt = require('grunt');


// hack to avoid loading a Gruntfile
// You can skip this and just use a Gruntfile instead
grunt.task.init = function() {};

// Init config
grunt.initConfig({
    jshint: {
        all: ['index.js']
    }
});

grunt.registerTask('serve', function() {
    var done = this.async();
    grunt.config('http-server', {
        'dev': {

            // the server root directory
            root: '.',

            // the server port
            // can also be written as a function, e.g.
            // port: function() { return 8282; }
            port: 8282,

            // the host ip address
            // If specified to, for example, "127.0.0.1" the server will
            // only be available on that ip.
            // Specify "0.0.0.0" to be available everywhere
            //host: "0.0.0.0",

            //cache: <sec>,
            showDir: true,
            autoIndex: true,

            // server default file extension
            ext: "html",

            // run in parallel with other tasks
            runInBackground: 0,

            // specify a logger function. By default the requests are
            // sent to stdout.
            //logFn: function(req, res, error) { },

            // Proxies all requests which can't be resolved locally to the given url
            // Note this this will disable 'showDir'
            //proxy: "http://someurl.com",

            // Tell grunt task to open the browser
            openBrowser: false

            // customize url to serve specific pages
            //customPages: {
            //    "/readme": "README.md",
            //    "/readme.html": "README.html"
            //
        }
    });

    //grunt.task.run('http-server:dev');
    grunt.tasks(['http-server:dev']);
    console.log('task');
});

grunt.loadNpmTasks('grunt-http-server');
grunt.tasks(['serve']);

console.log('start', grunt.config());