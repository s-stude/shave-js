module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {

        config: {

            pkg: grunt.file.readJSON('package.json'),

            vars: {
                srcdir: 'src',
                dist: 'dist'
            }
        }
    });
};