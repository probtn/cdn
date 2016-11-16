(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"enot_1.png", id:"enot_1"},
		{src:"enot_300x300_2.png", id:"enot_300x300_2"},
		{src:"enot_300x300_3.png", id:"enot_300x300_3"},
		{src:"enot_300x300_4.png", id:"enot_300x300_4"},
		{src:"enot_300x300_5.png", id:"enot_300x300_5"},
		{src:"enot_300x300_6.png", id:"enot_300x300_6"},
		{src:"enot_300x300_7.png", id:"enot_300x300_7"},
		{src:"enot_8.png", id:"enot_8"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.enot_1 = function() {
	this.initialize(img.enot_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_2 = function() {
	this.initialize(img.enot_300x300_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_3 = function() {
	this.initialize(img.enot_300x300_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_4 = function() {
	this.initialize(img.enot_300x300_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_5 = function() {
	this.initialize(img.enot_300x300_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_6 = function() {
	this.initialize(img.enot_300x300_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_300x300_7 = function() {
	this.initialize(img.enot_300x300_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.enot_8 = function() {
	this.initialize(img.enot_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enot_8();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enot_300x300_7();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enot_300x300_6();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enot_300x300_5();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.enot_300x300_4();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.enot_300x300_3();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.enot_300x300_2();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.enot_1();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


// stage content:
(lib.enot_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_364 = function() {
		this.stop ();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(364).call(this.frame_364).wait(1));

	// Слой 8
	this.instance = new lib.Символ8();
	this.instance.setTransform(150,150,0.027,0.027);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(352).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(4));

	// Слой 7
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(150,150,0.027,0.027);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(1)).wait(37).to({scaleX:0.03,scaleY:0.03},7,cjs.Ease.get(-1)).to({_off:true},1).wait(13));

	// Слой 6
	this.instance_2 = new lib.Символ6();
	this.instance_2.setTransform(150,150,0.06,0.06);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(250).to({_off:false},0).to({scaleX:1,scaleY:1},6,cjs.Ease.get(1)).wait(38).to({scaleX:0.03,scaleY:0.03,x:0,y:0},5,cjs.Ease.get(-1)).to({_off:true},1).wait(65));

	// Слой 5
	this.instance_3 = new lib.Символ5();
	this.instance_3.setTransform(150,150,0.06,0.06);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(36).to({scaleX:0.03,scaleY:0.03},6).to({_off:true},1).wait(115));

	// Слой 4
	this.instance_4 = new lib.Символ4();
	this.instance_4.setTransform(150,150,0.027,0.027);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151).to({_off:false},0).to({scaleX:1,scaleY:1},7,cjs.Ease.get(0.98)).wait(34).to({scaleX:0.03,scaleY:0.03},7,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// Слой 3
	this.instance_5 = new lib.Символ3();
	this.instance_5.setTransform(150,150,0.033,0.033);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(31).to({scaleX:0.03,scaleY:0.03},7,cjs.Ease.get(-1)).to({_off:true},1).wait(214));

	// Слой 2
	this.instance_6 = new lib.Символ2();
	this.instance_6.setTransform(150,150,0.053,0.053);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(39).to({scaleX:0.07,scaleY:0.07},7,cjs.Ease.get(-1)).to({_off:true},1).wait(261));

	// Слой 1
	this.instance_7 = new lib.Символ1();
	this.instance_7.setTransform(150,150,0.067,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(33).to({scaleX:0.03,scaleY:0.03},7,cjs.Ease.get(-1)).to({_off:true},1).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(290,290,20,20);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;