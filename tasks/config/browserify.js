/**
* Bundle JS dependencies 
* Usage docs:  https://github.com/jmreidy/grunt-browserify
*/

module.exports = function(grunt){
    grunt.config.set('browserify', {
        dev:{
          files: {
            'assets/js/bundle.js' : ['assets/js/main.js', 'assets/js/app.js']
          }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
}

