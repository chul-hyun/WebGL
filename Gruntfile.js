module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    umd: {
      'default': {
        src: 'dist/webGL.js',
        dest: 'dist/webGL.js',
        template: 'unit.hbs',
        objectToExport: 'webGL',
        deps: {
          args : [],
          'default': [],
          amd: {
            items: [],
            prefix: '\"',
            separator: ',\n',
            suffix: '\"'
          },
          cjs: {
            items: [],
            prefix: 'require(\"',
            separator: ',\n',
            suffix: '\")'
          },
          global: {
            items: [],
          },
          pipeline: {
            items : [],
            prefix: '//= require ',
            separator: '\n',
          }
        }
      }
    },
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['init', 'watch']
      },
    },
    jsdoc : {
      dist : {
        src: ['dist/webGL.js', 'README.md'], 
        options: {
          destination: 'doc',
          configure: 'conf.json',
          template: 'node_modules/jaguarjs-jsdoc'
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**'],
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      }
    },
    concat: {
      dist: {
        files: {
          'dist/webGL.js': ['src/**'],
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('init', ['jshint', 'concat', 'jsdoc', 'umd']);
  grunt.registerTask('default', ['init', 'watch']);

};