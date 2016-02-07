/**
* Compiles SASS files into CSS
* Usage docs: https://github.com/gruntjs/grunt-contrib-sass
*/

module.exports = function(grunt){
    grunt.config.set('sass', {
        dev: {
            files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: ['importer.scss', 'dependencies/angularjs-color-picker.scss'],
                dest: '.tmp/public/styles/',
                ext: '.css'
            }],
            options: {
                loadPath: ['node_modules/angularjs-color-picker','node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/fullcalendar/dist', 'node_modules/bootswatch']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
};