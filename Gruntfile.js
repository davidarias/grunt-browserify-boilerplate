module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        browserify: {
            dist:{
                src: './src/main.js',
                dest: './dist/app.js'
            },
            options:{
                browserifyOptions:{
                    debug: true,
                    paths: './src'  
                }
            }
        },
        
        watch: {
            files: 'src/**/*.js',
            tasks: ['browserify']
        },
        
        'http-server': {

            dev: {
                root: './',
                port: 8000,
                
                // run in parallel with other tasks
                runInBackground: true,
                openBrowser : true
            }

        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('build', ['browserify']);
    grunt.registerTask('default', ['build', 'http-server', 'watch']);

}; 
