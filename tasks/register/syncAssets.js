module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'sass:dev',
        'browersify:dev',
		'sync:dev',
	]);
};
