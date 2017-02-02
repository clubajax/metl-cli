var config = {
    serve: {
        // the server root directory
        root: '.',

        // the server port
        port: 8080,

        // the host ip address
        // If specified to, for example, "127.0.0.1" the server will only be available on that ip.
        // Specify "0.0.0.0" to be available everywhere
        host: "127.0.0.1",

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
    },
    watch: {
        enabled: true,
        //less:['./style/*.less'],
        scripts:['./ui/**/*.html', './lib/**/*.js'],
        port: 35740 // 35730 default
    }
};

module.exports = config;