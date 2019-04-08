(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.girl = function() {
	this.initialize(img.girl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,262);


(lib.img5_1 = function() {
	this.initialize(img.img5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,202);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,34);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,194);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqBKBQkIkKAAl3QAAl3EIkJQEKkKF3AAQF3AAEKEKQEJEJAAF3QAAF3kJEKQkKEJl3ABQl3gBkKkJg");
	this.shape.setTransform(-4.85,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.instance = new lib.img5_1();
	this.instance.parent = this;
	this.instance.setTransform(-101,-101);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(-101,-101,202,202), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B72425").s().p("AueOeQl/mAAAoeQAAodF/mAQGAmAIeAAQIfAAF/GAQGAGAAAIdQAAIemAGAQl/GAofAAQoeAAmAmAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-131,-131,262.1,262), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.phone();
	this.instance.parent = this;
	this.instance.setTransform(-49,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-49,-97,98,194), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-53,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-53,-17,106,34), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.girl();
	this.instance.parent = this;
	this.instance.setTransform(-70,-129);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-70,-129,140,262), null);


(lib.Symbol_3_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzBpIAAg6Ig5AAIgpA6IgqAAIAuhBQgWgIgNgRQgMgQAAgaQAAgZALgRQAMgRAUgJQAUgJAbAAIBbAAIAADRgAgkg8QgNALAAAWQAAAUANAKQAMAMAYAAIAzAAIAAhWIgyAAQgXAAgOALg");
	this.shape.setTransform(45.075,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5BpIAAiUIh0CUIglAAIAAjRIAnAAIAACUIB0iUIAmAAIAADRg");
	this.shape_1.setTransform(23.825,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABJCAIAAguIi3AAIAAjRIAnAAIAACwIBtAAIAAiwIApAAIAACwIAgAAIAABPg");
	this.shape_2.setTransform(1.3,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBpIg+hYIgpAAIAABYIgoAAIAAjRIAoAAIAABYIApAAIA+hYIArAAIhLBlIBOBsg");
	this.shape_3.setTransform(-20.7,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMBpIgWgxIhsAAIgWAxIgpAAIBijRIAmAAIBjDRgAAoAaIgohbIgoBbIBQAAg");
	this.shape_4.setTransform(-43.25,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_2, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01793A").s().p("AxJD/QhqAAhLhLQhLhKAAhqQAAhpBLhLQBLhKBqAAMAiUAAAQBpAABLBKQBLBLAABpQAABqhLBKQhLBLhpAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-0.0297},0).wait(1).to({y:-0.1227},0).wait(1).to({y:-0.2855},0).wait(1).to({y:-0.5252},0).wait(1).to({y:-0.8496},0).wait(1).to({y:-1.2667},0).wait(1).to({y:-1.7845},0).wait(1).to({y:-2.4103},0).wait(1).to({y:-3.1491},0).wait(1).to({y:-4.0017},0).wait(1).to({y:-4.9627},0).wait(1).to({y:-6.0178},0).wait(1).to({y:-7.1424},0).wait(1).to({y:-8.3032},0).wait(1).to({y:-9.4617},0).wait(1).to({y:-10.5804},0).wait(1).to({y:-11.6287},0).wait(1).to({y:-12.5852},0).wait(1).to({y:-13.4382},0).wait(1).to({y:-14.1838},0).wait(1).to({y:-14.8238},0).wait(1).to({y:-15.3631},0).wait(1).to({y:-15.8084},0).wait(1).to({y:-16.1669},0).wait(1).to({y:-16.446},0).wait(1).to({y:-16.6528},0).wait(1).to({y:-16.7935},0).wait(1).to({y:-16.8742},0).wait(1).to({y:-16.9},0).wait(1).to({y:-16.8723},0).wait(1).to({y:-16.7856},0).wait(1).to({y:-16.6341},0).wait(1).to({y:-16.4115},0).wait(1).to({y:-16.1107},0).wait(1).to({y:-15.7246},0).wait(1).to({y:-15.2457},0).wait(1).to({y:-14.6674},0).wait(1).to({y:-13.9846},0).wait(1).to({y:-13.195},0).wait(1).to({y:-12.3016},0).wait(1).to({y:-11.3142},0).wait(1).to({y:-10.2515},0).wait(1).to({y:-9.1406},0).wait(1).to({y:-8.0148},0).wait(1).to({y:-6.9092},0).wait(1).to({y:-5.8552},0).wait(1).to({y:-4.8768},0).wait(1).to({y:-3.9897},0).wait(1).to({y:-3.2013},0).wait(1).to({y:-2.5132},0).wait(1).to({y:-1.9228},0).wait(1).to({y:-1.4249},0).wait(1).to({y:-1.0132},0).wait(1).to({y:-0.6813},0).wait(1).to({y:-0.4223},0).wait(1).to({y:-0.2303},0).wait(1).to({y:-0.0993},0).wait(1).to({y:-0.0241},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-113.9,98,210.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_3_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(-0.5,0.7,1,1,0,0,0,-0.5,0.7);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-135.3,-26.3,270.70000000000005,51.900000000000006), null);


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(158.55,26.4,1.1057,1.1057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(73.7,143.15,1.04,1.04,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol23();
	this.instance.parent = this;
	this.instance.setTransform(184,136.1,0.77,0.77,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(186.35,146.6,0.7197,0.7197,0,0,0,-5.7,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:-5.6,scaleX:1,scaleY:1,x:186.4,y:146.55},5,cjs.Ease.get(0.5)).to({regX:-5.7,scaleX:0.7197,scaleY:0.7197,x:186.35,y:146.6},10,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(155.8,142.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regY:0.1,scaleX:1.07,scaleY:1.07},5,cjs.Ease.get(0.5)).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).wait(18));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(151.3,263.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({scaleX:1.1,scaleY:1.1,x:151.25},5,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:0.95,scaleY:0.95,x:151.3,y:263.2},5).to({regX:0,regY:0,scaleX:1,scaleY:1,y:263.25},8,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.Butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_38 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(151.3,263.3,1,1,0,0,0,151.3,263.3);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(39));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.setTransform(158.6,26.4,1,1,0,0,0,158.6,26.4);
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 1
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(39));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlPV6QkggKiIknIli4sIMIuWIWrBHMgBXAqsg");
	mask.setTransform(74.975,125.85);

	// Layer_7_obj_
	this.Layer_7 = new lib.Scene_1_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.setTransform(73.6,145.1,1,1,0,0,0,73.6,145.1);
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 2
	this.Layer_7.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(39));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(183.9,136,1,1,0,0,0,183.9,136);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 3
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(39));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.setTransform(190.5,145.2,1,1,0,0,0,190.5,145.2);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 4
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(39));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(155.8,142.9,1,1,0,0,0,155.8,142.9);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 5
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133,152,167.2,146.39999999999998);
// library properties:
lib.properties = {
	id: 'EB2883A17CF12B428F809AF27EB75BF7',
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/girl.png", id:"girl"},
		{src:"images/img5_1.png", id:"img5_1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/phone.png", id:"phone"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EB2883A17CF12B428F809AF27EB75BF7'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;