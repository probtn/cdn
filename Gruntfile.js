module.exports = function(grunt) {

  //var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	includes: {
		default: {
		  files: {
			'probtn_concat_full.js': ['src/probtn_concat_template.js'], // Source files
			'custom_include/location/probtn_location_concat_full.js': ['src/probtn_location_concat_template.js'], // Source files
			'custom_include/maximonline_full.js': ['src/maximonline_template.js'],
			'custom_include/probtn_kp_full.js': ['src/kp_probtn_template.js'],
			'offline/probtn_concat_offline.js': ['src/probtn_concat_offline_template.js'], // Source files
			//flatten: true,
			//cwd: '.',
			/*options: {
			  debug: true
			}*/
		  }
		}
	},
	imagemin: {
		path1: {
		  options: {
		  	optimizationLevel: 7,
		  },
		  files: [{
			expand: true,          // Enable dynamic expansion
			cwd: 'images/',           // Src matches are relative to this path
			src: ['*.{png,jpg}'],       // Actual patterns to match
			dest: 'images'
		  }]
		},
		path2: {
		  options: {
		  	optimizationLevel: 7,
		  },
		  files: [{
			expand: true,          // Enable dynamic expansion
			cwd: 'iframe_buttons/',           // Src matches are relative to this path
			src: ['**/*.{png,jpg}'],       // Actual patterns to match
			dest: 'iframe_buttons'
		  }]
		}
  },
	uglify: {
		default: {
          files: {
			//what files we are uglifying
            'probtn.js': ['probtn_full.js'],
			//['probtn_full.js'],
			'probtn_concat.js': ['probtn_concat_full.js'],
			'custom_include/location/probtn_location_concat.js': ['custom_include/location/probtn_location_concat_full.js'],
			//TODO: restore bower
			//'bower/probtn_concat.js': ['probtn_concat_full.js'],
			//'bower/showinparent_concat.js': ['showinparent_concat.js'],
			'custom_include/maximonline.js': ['custom_include/maximonline_full.js'],
			'custom_include/maximonline.ru.js': ['custom_include/maximonline_full.js'],
			'custom_include/probtn_kp.js': ['custom_include/probtn_kp_full.js'],
			'libs/jquery.pep.min.js': ['libs/jquery.pep.js'],
			'libs/postscribe/postscribe.js': ['libs/postscribe/postscribe_full.js'],
			'libs/postscribe/htmlParser.js': ['libs/postscribe/htmlParser_full.js']
			//'probtn_concat.js': ['probtn_concat_full.js']
          }
        },
      options: {
        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
      }
    },
	githooks: {
		all: {
		  'pre-commit': 'default',
		  'post-commit': {
			'taskNames': 'default',
			'template': 'postcommit.js'
		  }
		},
		options: {
		  //run this template before commit - to add unglyfied probtn.js to commit
		  template: 'precommit.js'
		},
	},
	jshint: {
      files: ['probtn_full.js'],
	  //reporterOutput: 'report_probtn_full.txt',
      options: {
		reporter: require('jshint-html-reporter'),
        reporterOutput: 'jshint-report.html',
        globals: {
          jQuery: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  //grunt.registerTask('default', ['includes', 'uglify', 'newer:imagemin', 'jshint']);
  grunt.registerTask('default', ['includes', 'uglify', 'jshint']);
  //grunt.registerTask('jshint', ['jshint']);
  //grunt.registerTask('imagemin', ['newer:imagemin']);

};
