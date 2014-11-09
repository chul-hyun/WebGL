module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    umd: {
      'default': {
        src: 'temp/main.js',
        dest: 'temp/main.js',
        template: 'umd.hbs',
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
    wrap: {
      'wrapFunction': {
        cwd: 'temp/',
        expand: true,
        src: ['**/*.js'],
        dest: 'temp/',
        options: {
          seperator: '\n',
          indent: '\t',
          wrapper: function(filepath) {
            var fileName = filepath.replace(/^.*[\\\/]/, '').replace(/\..*$/, '');
            console.log(fileName);
            return [
            'var '+ fileName +' = (function(){\n', 
              'return '+ fileName +';'+
              '\n})();'];
          }
        }
      }
    },
    uglify: {
      'build': {
        options: {
          sourceMap: true,
          sourceMapIncludeSources: true
        },
        files: {
          'temp/main.min.js': ['temp/main.js'],
        }
      }
    },
    concat: {
      dist: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          banner: '/*\n'+ 
          ' "<%= pkg.name %> - v<%= pkg.version %> - ' +
          ' <%= grunt.template.today("yyyy-mm-dd") %>" '+
          '\n*/\n',
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' + src ;
          }
        },
        files: {
          'temp/main.js': ['temp/method/*.js', 'temp/WebGL.js'],
        }
      }
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
    jshint: {
      files: ['Gruntfile.js', 'src/**'],
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      }
    },
    watch: {
      scripts: {
        files: ['<%= jshint.files %>'],
        tasks: ['init']
      },
    },
    copy: {
        temp:{
          cwd: 'src/',
          expand: true,
          src: ['**/*.js'],
          dest: 'temp/',
        },
        dist:{
          src: 'temp/main.js',
          dest: 'dist/WebGL.js'
        },
        min:{
          src: 'temp/main.min.js',
          dest: 'dist/WebGL.min.js'
        }
    },
    clean: {
      doc   : ['doc/'],
      dist  : ['dist/'],
      temp  : ['temp/']
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('build', ['clean', 'copy:temp', 'wrap', 'concat', 'umd', 'uglify', 'copy:dist', 'copy:min', 'clean:temp']);
  grunt.registerTask('build-doc', ['clean:doc', 'jsdoc']);
  grunt.registerTask('init', ['lint', 'build', 'build-doc']);
  grunt.registerTask('default', ['init', 'watch']);

};