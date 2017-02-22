(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 300,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"logo.png", id:"logo"},
		{src:"main.png", id:"main"},
		{src:"pik.png", id:"pik"}
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



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,46);


(lib.main = function() {
	this.initialize(img.main);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,298);


(lib.pik = function() {
	this.initialize(img.pik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,245);


(lib.лклфai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C7B3E").s().p("AkSKcIAAqcIAAqXQBbgcBaAAQBeAABiAhQBZAgBUA4IoiI6IImI8QhSA4heAfQhjAhhfAAQhcAAhYgYg");
	this.shape.setTransform(76.3,69.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C7B3E").s().p("AgpEEQgwh8AAiHQAAiHAwh8QAth5BWhfIAAO1QhWhggth3g");
	this.shape_1.setTransform(9.1,69.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C7B3E").s().p("AkAhCIE6lIQBhBwAxBxQA1B+AACFQAABfgOA/QgOBBgoBSg");
	this.shape_2.setTransform(107.5,60.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C7B3E").s().p("Ag6G6QAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAtxIABgBIB2AAIAANzg");
	this.shape_3.setTransform(175.4,69.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C7B3E").s().p("ABiG6Ilpm6IFrm5ICgAAIltG4IFyG7g");
	this.shape_4.setTransform(209.6,69.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C7B3E").s().p("ADWG6IiMjVIk8AAIAADVIh4AAIAAtzICDAAIJSNzgAjyBoIDqAAIjqlVg");
	this.shape_5.setTransform(410.6,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1C7B3E").s().p("Ag6G6QAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAtxIABgBIB2AAIAANzg");
	this.shape_6.setTransform(312,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C7B3E").s().p("ABiG6Ilqm6IFsm5ICgAAIluG4IFzG7g");
	this.shape_7.setTransform(346.1,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C7B3E").s().p("ACeG6IlLm7ICXAAQA9AAAsguQAsguAAhAQAAhDgpgtQgrgtg8gBIirAAIAAL1Ih6AAIAAtzIEgAAQBtABBRBUQBQBUABBzQAABbg2BIQg0BLhSAdID6FMg");
	this.shape_8.setTransform(268.9,69.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,446.9,138.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("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");
	this.shape.setTransform(456.2,20.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.5,-31.7,829.6,103.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],29,-161.9,-29,162).s().p("AplZTMAJEgylIKHAAMgJEAylg");
	this.shape.setTransform(32.5,208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],29,-161.9,-29,162).s().p("AmdZTMAJCgylID5AAMgJCAylg");
	this.shape_1.setTransform(102.5,208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,46,173,323.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("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AAAoQAAAhgFAVQgFAWgPAKQgFAEgIADQgHACgLAAgAJZhGIAAibIBfAAIAAAXIhDAAIAACEgADMhGIgIgQIgHgTQgHgTgLgHQgLgHgPAAIgEAAIAABEIgbAAIAAhEIgGAAQgQAAgLAHQgKAHgHATIgIATQgDAJgDAHIgcAAQAFgJAEgMIAIgWQAIgTAKgKQALgKASgCIg9hHIAfAAIA0BEIAGAAIAAhEIAbAAIAABEIAFAAIAzhEIAgAAIg9BHQASACALAKQALAKAGATIAJAXQAEALAFAJgAijhGIgIgNIgHgSQgIgTgMgJQgMgJgTAAIgFAAIAABEIgcAAIAAibIAcAAIAABEIAHAAIA5hEIAjAAIhEBGQATACANAMQAMANAIAUIAHATQAEAKAGAJgAmUhGIAAhBIgUAAQgJAAgHADQgFACgFAEQgGAFgDAHQgEAHgDAJIgGAPIgDAHIgDAGIgfAAIAGgIIAEgJIAGgRIAHgQQAFgIAGgGIAIgGIAKgDIAAgBQgKgBgKgEQgJgFgGgIQgGgIAAgMQAAgMAGgJQAFgIAKgFQAJgGANgCQAOgCAQAAIAbAAIAWADIAACZgAm+jNQgJACgHAGQgGAGgBAKQABAKAGAGQAHAGAJADQAKACAIAAIAPAAIAJAAIAAg0IgKgBIgNgBQgJAAgKADg");
	this.shape.setTransform(96,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,10.9,183.4,57.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.718,1],0,0,0,0,0,153.1).s().p("AwuQuQm8m7AApzQAApyG8m8QG8m8JyAAQJzAAG7G8QG9G8AAJyQAAJzm9G7Qm7G9pzAAQpyAAm8m9g");
	this.shape.setTransform(151.5,151.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,303);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.main();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,298,298);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.pik();
	this.instance.setTransform(-30,39,0.872,0.872);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,39,211,213.6);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgkEAESIAAokMBIJAAAIAAIkg");
	this.shape.setTransform(231,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,462,55);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-125.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-23,251,46);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logo();
	this.instance.setTransform(-125.5,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.5,-23,251,46);


(lib.Символ15ч = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(231,27.5,1,1,0,0,0,231,27.5);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8,462,55);


(lib.Символ14ч = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(203.3,23.4,0.474,0.407,0,0,0,463.6,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,0.8,393.1,42.2);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.лклфai("synched",0);
	this.instance.setTransform(49.5,15.3,0.221,0.221,0,0,0,223.5,69.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.9,30.7);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ14ч();
	this.instance.setTransform(148.9,278.4,0.749,1,0,0,0,196.3,23.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65).to({_off:false},0).to({alpha:1},8).wait(194).to({alpha:0},7).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ15ч();
	this.instance_1.setTransform(118.1,328.6,1,1,0,0,0,231,27.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({y:286.6},8,cjs.Ease.get(1)).wait(202).to({alpha:0},7).wait(1));

	// Слой 9
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(150.1,229,1,1,0,0,0,49.5,15.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(225).to({_off:false},0).to({y:222,alpha:1},6,cjs.Ease.get(1)).wait(36).to({alpha:0},7).wait(1));

	// Слой 8
	this.instance_3 = new lib.Символ6();
	this.instance_3.setTransform(152,140.7,0.115,0.115,0,0,0,96,35.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({regY:36,scaleX:1,scaleY:1,x:151.9},8,cjs.Ease.get(0.85)).wait(18).to({y:80.7},8,cjs.Ease.get(1)).wait(74).to({alpha:0},7).wait(1));

	// Слой 7
	this.instance_4 = new lib.Анимация1("synched",0);
	this.instance_4.setTransform(151.5,203);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Анимация2("synched",0);
	this.instance_5.setTransform(151.5,153);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(185).to({_off:false},0).to({_off:true,y:153,alpha:1},8,cjs.Ease.get(1)).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(185).to({_off:false},8,cjs.Ease.get(1)).wait(74).to({startPosition:0},0).to({alpha:0},7).wait(1));

	// Слой 5
	this.instance_6 = new lib.Символ4();
	this.instance_6.setTransform(150.2,150.2,0.045,0.045,0,0,0,151.7,151.7);
	this.instance_6.alpha = 0.75;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(151).to({_off:false},0).to({regX:151.6,regY:151.6,scaleX:0.98,scaleY:0.98,x:150.1,y:150.1,alpha:1},8,cjs.Ease.get(1)).wait(108).to({alpha:0},7).wait(1));

	// Слой 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_116 = new cjs.Graphics().p("ABxlsIUWg7IgKZtIz+DNg");
	var mask_graphics_134 = new cjs.Graphics().p("ABxlsIUWg7IgKZtIz+DNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(116).to({graphics:mask_graphics_116,x:141.6,y:142.8}).wait(18).to({graphics:mask_graphics_134,x:141.6,y:142.8}).wait(1).to({graphics:null,x:0,y:0}).wait(140));

	// Слой 11
	this.instance_7 = new lib.Символ8();
	this.instance_7.setTransform(125.1,99.5,0.408,0.67,0,12.3,0,32.6,207.8);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(116).to({_off:false},0).to({regX:32.7,skewX:3.5,skewY:-8.7,x:315.2,y:99.6},18).to({_off:true},1).wait(140));

	// Слой 3
	this.instance_8 = new lib.Символ2();
	this.instance_8.setTransform(158.5,149.6,0.107,0.107,0,0,0,79.5,144.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1,scaleY:1,y:149.5},9,cjs.Ease.get(1)).wait(39).to({regX:79.6,regY:144.6,scaleX:0.69,scaleY:0.69,x:228.6,y:173.6},11,cjs.Ease.get(1)).wait(82).to({x:217.6,alpha:0},6,cjs.Ease.get(-1)).to({_off:true},1).wait(127));

	// Слой 4
	this.instance_9 = new lib.Символ3();
	this.instance_9.setTransform(159.1,149.1,0.597,0.597,0,0,0,149.1,149.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({regX:149,regY:149,scaleX:1,scaleY:1,x:149,y:149,alpha:1},11,cjs.Ease.get(1)).wait(80).to({alpha:0},8,cjs.Ease.get(-1)).to({_off:true},1).wait(127));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(296.8,288.3,22.5,22.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;