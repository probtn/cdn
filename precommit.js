// precommit.js
 
var exec = require('child_process').exec;
// https://npmjs.org/package/execSync
// Executes shell commands synchronously
var sh = require('sync-exec').run;

console.log("test");
console.log(__dirname);

exec('echo "hello world"', function (err, stdout, stderr) {
 
	exec('grunt', function (err, stdout, stderr) {
	console.log(0);
	console.log(err);
	console.log(stdout);

		  
		  exec('git add .', function (err, stdout, stderr) { 
			console.log(1);
			console.log(err);
			console.log(stdout);
			
			var exitCode = 0;
			process.exit(exitCode);
			
			/*exec('cd bower;grunt', function (err, stdout, stderr) { 
				console.log(2);
				console.log(err);
				console.log(stdout);
				
				var exitCode = 0;
				process.exit(exitCode);
			});*/
			
			
		  });
	 
	});

});