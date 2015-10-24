// precommit.js
 
var exec = require('child_process').exec;
// https://npmjs.org/package/execSync
// Executes shell commands synchronously
var sh = require('sync-exec').run;

console.log("test");

exec('echo ', function (err, stdout, stderr) {
 
exec('grunt', function (err, stdout, stderr) {
console.log(0);
console.log(err);
console.log(stdout);


  // only run if there are staged changes
  // i.e. what you would be committing if you ran "git commit" without "-a" option.
  //if (err) {
	  
		/*exec('cd bower', function (err, stdout, stderr) { 
			console.log(1);
			console.log(err);
			console.log(stdout);
			exec('git add .', function (err, stdout, stderr) { 
				console.log(2);
				console.log(err);
				console.log(stdout);
				console.log(stderr);
			
				exec('git commit -m "bower"', function (err, stdout, stderr) { 
				console.log(3);
				console.log(err);
				console.log(stdout);
			
					exec('git push', function (err, stdout, stderr) { 
						console.log(4);
						console.log(err);
						console.log(stdout);
					
						exec('cd ..', function (err, stdout, stderr) { 
							console.log(5);
							console.log(err);
							console.log(stdout);
							
							exec('git add .', function (err, stdout, stderr) { 
								console.log(6);
								console.log(err);
								console.log(stdout);
								
								var exitCode = 0;
								process.exit(exitCode);
								
						    });
						});
					});
				});
			});
		});*/
	  
	  exec('git add .', function (err, stdout, stderr) { 
		console.log(1);
		console.log(err);
		console.log(stdout);
		
		var exitCode = 0;
		process.exit(exitCode);
	  });
  //}
	/*
    // stash unstaged changes - only test what's being committed
    sh('git stash --keep-index --quiet');
 
    exec('grunt {{task}}', function (err, stdout, stderr) {
 
      console.log(stdout);
 
      // restore stashed changes
      sh('git stash pop --quiet');
 
      var exitCode = 0;
      if (err) {
        console.log(stderr);
        exitCode = -1;
      }
      process.exit(exitCode);
    });*/
 
});