if(grunt.config('alloy.less') !== false) {
    if (!grunt.config('alloy.less.output')) {
        throw new Error('Cannot find the `config.alloy.less.output` property for name of the compiled CSS file' +
            '\nIf you do not wish to use alloy-tool\'s LESS system, please set: config.alloy.less:false');
    }
    if (!grunt.config('alloy.less.src')) {
        throw new Error('Cannot find the `config.alloy.less.src` property for name of the LESS file to compile');
    }

    if (!/\.less/.test(grunt.config('alloy.less.src'))) {
        grunt.config('alloy.less.src', grunt.config('alloy.less.src') + '.less');
    }

    var
        outputs = grunt.config('alloy.less.output'),
        srcs = grunt.config('alloy.less.src'),
        mainOutput,
        host = grunt.config('alloy.less.host') || 'http://localhost:' + grunt.config('alloy.serve.port'),
        lessConfig = {
            main: {
                options: {
                    sourceMap: true,
                    // path used to link to individual less files in the browser
                    sourceMapBasepath: '/',
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']})
                    ]
                },
                files: {}
            }
        };

    if(typeof srcs === 'string'){
        srcs = srcs.split(',');
    }

    srcs = Array.isArray(srcs) ? srcs : [srcs];
    outputs = Array.isArray(outputs) ? outputs : [outputs];

    outputs.forEach(function (out, i) {
        var input = srcs[i];
        if (!/\.less/.test(input)) {
            input += '.less';
        }
        if (!/\.css/.test(out)) {
            out += '.css';
        }
        if(!mainOutput){
            mainOutput = out;
        }
        lessConfig.main.files[out] = input;
    });

    lessConfig.main.options.sourceMapFilename = mainOutput + '.map';
    lessConfig.main.options.sourceMapURL = host + '/' + mainOutput + '.map';

    if (grunt.config('alloy.less.min')) {
        lessConfig.min = {
            options: {
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']}),
                    new (require('less-plugin-clean-css'))({keepBreaks: true})
                ]
            },
            files: {
                '<%= alloy.less.min %>': ['<%= alloy.less.src %>']
            }
        }
    }

    grunt.config('less', lessConfig);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('ls', 'less:main');
}