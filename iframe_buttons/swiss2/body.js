(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"alps_.jpg", id:"alps_"},
		{src:"cl.png", id:"cl"},
		{src:"plane.png", id:"plane"}
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



(lib.alps_ = function() {
	this.initialize(img.alps_);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,188);


(lib.cl = function() {
	this.initialize(img.cl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,111);


(lib.plane = function() {
	this.initialize(img.plane);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,74);


(lib.swissinternationalairlinesagseeklogocomai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D01F26").s().p("ALNDWQhOgjAAhWIBtAAQACAaAPAQQATASAjABQAdgBARgQQAPgOAAgVQAAgJgEgHQgHgRgfgOQgSgIg4gRQhOgXgZgvQgOgaAAgkQAAgYAJgWQAJgWAQgPQAugvBaABQBKAAAtAeQAwAiABBAIhsAAQgEgzg6AAQgVAAgQAJQgTALAAAWQAAAYAXAOQAPAJAoAMIAqANQA2AUAaAWQAhAfACA1IAAAIQAAAmgTAeQgVAhgnATIgBAAQgnATg4AAQg7AAgrgTgAE8DWQhOgjAAhWIBuAAQABAaAPAQQATASAkABQAcgBARgQQAPgOAAgVQAAgIgDgIQgIgRgfgOQgSgHg4gSQhOgXgZgvQgOgcAAgiQAAgYAJgWQAJgWAQgPQAvgvBZABQBLAAAsAeQAwAiABBAIhsAAQgEgzg6AAQgVAAgQAJQgTALAAAWQAAAYAYAOQAPAJAoAMIApANQA3AUAZAWQAhAfACA1IAAAIQAAAmgTAeQgVAhgnATQgpATg2AAQg8AAgrgTgAuTDWQhOgjAAhWIBtAAQACAaAPAQQATASAjABQAdgBARgQQAPgOAAgVQAAgJgEgHQgHgRgfgOQgSgHg4gSQhOgXgZgvQgOgaAAgkQAAgYAJgWQAJgWAQgPQAugvBaABQBKAAAtAeQAwAiABBAIhsAAQgEgzg6AAQgWAAgPAJQgTALAAAWQAAAYAbAPQANAHAxARIAcAJQA8AXAZAXQAcAdACAzIABAIQAAAmgTAeQgUAhgnATQgoATg3AAQg6AAgsgTgABDDbIAAm4IByAAIAAG4gAjXDbIhYktIhXEtIh3AAIh6m4IBwAAIBKEmIBXkmIBvAAIBWEmIBKkmIBuAAIh3GzIgBAFg");
	this.shape.setTransform(200.1,35.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+DUIAAiVIiVAAIAAh9ICVAAIAAiVIB9AAIAACVICVAAIAAB9IiVAAIAACVg");
	this.shape_1.setTransform(58.1,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D01F26").s().p("AnOFeIIrq8IFyAAIiuK8g");
	this.shape_2.setTransform(46.3,35.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,299.6,70.2);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60005").s().p("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");
	this.shape.setTransform(93.2,-69.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.7,-92,173,45.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E60005").s().p("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");
	this.shape.setTransform(106.8,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.8,9.3,152,70.6);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.cl();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,389,111);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#97B6CA","#97B6CA","#4980A7","#4980A7"],[0.008,0.251,0.722,1],0,113.1,0,-113.2).s().p("EgvzARsMAAAgjXMBfnAAAMAAAAjXg");
	this.shape.setTransform(293.8,220.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance = new lib.alps_();
	this.instance.setTransform(-1,330);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,107.5,612.2,410.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.plane();
	this.instance.setTransform(15,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,3,261,74);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(-126.6,47.7,1.25,1.265,0,0,0,193.9,55.1);

	this.instance_1 = new lib.Символ10();
	this.instance_1.setTransform(779.9,35.3,1.25,1.265,0,0,0,194.5,54.8);

	this.instance_2 = new lib.Символ10();
	this.instance_2.setTransform(330.2,43.5,1.25,1.265,0,0,0,195,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369,-34,1392,152.5);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.swissinternationalairlinesagseeklogocomai("synched",0);
	this.instance.setTransform(142.6,71.3,0.848,0.846,0,0,0,149.7,35.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.7,41.3,254,59.4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.setTransform(110.1,45.8,1,1,0,0,0,363.1,239.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:346.8},260).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-86,612.2,410.6);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwkQkQm2m3gBptQABpsG2m4QG4m2JsgBQJtABG3G2QG4G4AAJsQAAJtm4G3Qm3G4ptAAQpsAAm4m4g");

	// Слой 3
	this.instance = new lib.Символ9();
	this.instance.setTransform(-677.5,3.1,1,1,0,0,0,194.5,55.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:-639.4,alpha:1},9).to({x:376.4},240).to({x:414.5,alpha:0},9).wait(1));

	// Слой 4
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(168.4,28.4,0.876,0.876,0,0,0,363,139.4);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(261));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


// stage content:
(lib.swiss_1_Canvaf_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 6
	this.instance = new lib.Символ7();
	this.instance.setTransform(-128.9,185,1,1,0,0,0,145.5,73.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191).to({_off:false},0).to({x:151.1},9,cjs.Ease.get(1)).wait(52).to({alpha:0},6).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(-146.9,123.2,1.57,1.568,0,0,0,109.5,24.4);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:153.1},10,cjs.Ease.get(1)).wait(48).to({x:453.1},6,cjs.Ease.get(-1)).to({_off:true},1).wait(194));

	// Слой 2
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(150.8,228.6,1,1,0,0,0,94.8,27.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({regX:94,scaleX:1.39,scaleY:1.38,x:148.6,y:230.4,alpha:1},9,cjs.Ease.get(1)).wait(168).to({alpha:0},6).to({_off:true},1).wait(1));

	// Слой 1
	this.instance_3 = new lib.Символ1();
	this.instance_3.setTransform(194.4,173.1,0.685,0.685,0,0,0,146,29.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(68).to({_off:false},0).to({regY:29.5,scaleX:1,scaleY:1,x:149.4,y:154.4,alpha:1},16,cjs.Ease.get(1)).to({x:150.4},5).to({y:151.4},18).to({y:153},10).to({y:154.4},9).to({x:152.4,y:151.4},17).to({x:150.4,y:154.4},13).to({x:152.4,y:160.4},12).to({x:150.4,y:154.4},13).to({regY:29.6,scaleX:0.98,scaleY:0.98,y:163.5,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},1).wait(64));

	// Слой 8
	this.instance_4 = new lib.Символ12();
	this.instance_4.setTransform(93.6,145.9,1,1,0,0,0,-57.4,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(188).to({regX:0,regY:11.3,scaleX:0.03,scaleY:0.03,x:150.7,y:160.9},9).to({_off:true},1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,129,542,365);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;