module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		//'jst:dev',
		'sass:dev',
        'browserify:dev',
		'copy:dev'
	]);
};
