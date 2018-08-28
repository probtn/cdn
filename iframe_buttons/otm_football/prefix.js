var opt = {
top: '50%', 
left: '50%'
};

var css = '#gamemaker_image button { background: transparent !important; z-index: 100; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);


window.probtn_game_win = false;

function clickLink() {
	console.log("clickLink");
	window.open("https://viewst.com", '_blank');
	return false;
}

var checkExist = setInterval(function() {
   if (document.getElementById('canvas')!==null) {
	try {
      console.log("Exists!");
      clearInterval(checkExist);
	  
	  var canvas1 = document.getElementById('canvas');
	  var gm4html5_div_id = document.getElementById('gm4html5_div_id');
	  
	  console.log(canvas1);	 
	  
	  var x = document.getElementsByTagName("BODY")[0];
	  
	  x.addEventListener('click', function(event) { 
		console.log(event);
		//event.stopPropagation();
		console.log("canvas onclick1"); 
		
		for (var i=0; i<event.path.length; i++) {
			var currentPath = event.path[i];
			try {
			if (currentPath.id == "gamemaker_image") {
				console.log("gamemaker_image ciick");
				//window.open("https://viewst.com", '_blank');
			}
			} catch(ex) {
				console.log(ex);
			}
		}
		
		if (window.probtn_game_win===true) { 
			console.log("canvas onclick2"); window.open("https://tk-react-client.herokuapp.com/pbw/57e8122a2f4c0700033401c7", "_blank"); 
		};
	  }, false);
	  /*canvas.onclick = 'console.log("canvas onclick1"); if (window.probtn_game_win===true) { console.log("canvas onclick2"); window.open("https://tk-react-client.herokuapp.com/pbw/57e8122a2f4c0700033401c7", "_blank"); }';*/
	  } catch(ex) {
	    console.log(ex);
	  }
   }
}, 100); // check every 100ms

var checkExist2 = setInterval(function() {
   if (document.getElementById('gamemaker_image')!==null) {
	   /*document.getElementById('gamemaker_image').addEventListener('click', function(event) { 
	   console.log("document.getElementById('gamemaker_image')", document.getElementById('gamemaker_image'), event);
	   window.open("https://viewst.com", '_blank');
	   });*/
	   //clearInterval(checkExist2);
	   
	   var buttons = document.getElementsByTagName("button");
	   for (var i=0; i<buttons.length; i++) {
		   if (buttons[i].onclick !== clickLink) {
			   buttons[i].onclick = clickLink;
		   }
	   }

   }
}, 100); // check every 100ms



window.probtn_game_ready = false;