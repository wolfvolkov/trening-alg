module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    wiredep: {

      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'index.html',
          'scss/main.scss'
        ]
      }
    },
    watch: {
      files: ['bower_components/**'],
      tasks: ['default']
    }
  });

  // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['wiredep']);
  grunt.registerTask('changes', ['watch']);

};