/**
* Bundle JS dependencies 
* Usage docs:  https://github.com/jmreidy/grunt-browserify
*/

module.exports = function(grunt){
    grunt.config.set('browserify', {
        dev:{
          alias: {
            'bootstrap': './node_modules/boostrap/dist/js/bootstrap.js'
          },
        src:['assets/js/main.js'],
        dest: 'assets/js/bundle.js'
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
}

