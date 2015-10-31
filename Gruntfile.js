module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	includes: {
		default: {
		  files: {
			'probtn_concat_full.js': ['src/probtn_concat_template.js'], // Source files
			'custom_include/maximonline_full.js': ['src/maximonline_template.js']
			//flatten: true,
			//cwd: '.',
			/*options: {
			  debug: true
			}*/
		  }
		}
	},
	uglify: {
		default: {
          files: {
			//what files we are uglifying
            'probtn.js': ['probtn_full.js'],
			'probtn_concat.js': ['probtn_concat_full.js'],
			'bower/probtn_concat.js': ['probtn_concat_full.js'],
			'bower/showinparent_concat.js': ['showinparent_concat.js'],
			'custom_include/maximonline.js': ['custom_include/maximonline_full.js']
			//'probtn_concat.js': ['probtn_concat_full.js']
          }
        },
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
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
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-githooks');
  grunt.loadNpmTasks('grunt-git');

  // Default task(s).
  grunt.registerTask('default', ['includes', 'uglify']);

};

