module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    umd: {
      'default': {
        src: 'dist/WebGL.js',
        dest: 'dist/WebGL.js',
        template: 'unit.hbs',
        objectToExport: 'WebGL',
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
        src: ['dist/WebGL.js', 'README.md'], 
        options: {
          destination: 'doc',
          configure: 'conf.json',
          template: 'node_modules/jaguarjs-jsdoc'
        }
      }
    },
    clean: {
      doc   : ['./doc/**'],
      dist  : ['./dist/**']
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
          'dist/WebGL.js': ['src/**'],
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('build', ['clean:dist', 'concat', 'umd']);
  grunt.registerTask('build-doc', ['clean:doc', 'jsdoc']);
  grunt.registerTask('init', ['lint', 'build', 'build-doc']);
  grunt.registerTask('default', ['init', 'watch']);

};