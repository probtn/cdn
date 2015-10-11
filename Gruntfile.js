module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	includes: {
		default: {
		  files: {
			'probtn_concat_full.js': ['src/probtn_concat_template.js'], // Source files
			//dest: '/probtn_concat.js', // Destination directory
			//flatten: true,
			//'probtn_concat_template.js': ['probtn_concat.js'],
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
			'probtn_concat.js': ['probtn_concat_full.js']
			//'probtn_concat.js': ['probtn_concat_full.js']
          }
        },
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
      }
    },
	githooks: {
		all: {
		  'pre-commit': 'default'
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

  // Default task(s).
  //grunt.registerTask('default', ['includes']);
  grunt.registerTask('default', ['includes', 'uglify']);
  
};

