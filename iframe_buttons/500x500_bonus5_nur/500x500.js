(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"500x500_atlas_", frames: [[302,0,208,227],[0,0,300,250],[302,229,189,177]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._51 = function() {
	this.spriteSheet = ss["500x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["500x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.people = function() {
	this.spriteSheet = ss["500x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,13.4).s().p("AhaBaQglglAAg1QAAg0AlgmQAmglA0AAQA1AAAlAlQAlAmAAA0QAAA1glAlQglAlg1AAQg0AAgmglg");
	this.shape.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,25.5,25.5), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AgpA4QgTgUAAgkQAAgRAGgOQAGgOAJgKQAKgKAOgFQAOgFAPAAQAJAAAHACIAOACIAJAEIAGAEIgKAaQgHgEgJgDQgIgCgMAAQgHAAgHACQgHADgFAGQgGAFgDAJQgEAJAAAMQAAAKADAIQACAJAFAHQAFAFAIAFQAHADALAAIANgBIAKgCIAIgCIAGgDIAJAaQgHAEgNADQgMAEgRAAQgjAAgSgUg");
	this.shape.setTransform(6.1,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,12.2,15.2), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AgtBJIgOgEIAFgaQAKADALAAQAGAAAHgCQAFgDAGgKQgJgNgIgPIgOgbIgOgaIgLgXIAlAAIAIARIAIAUIAKAUIAIASIAMglIANgmIAjAAIgMAeIgKAbIgKAXIgJAWQgGANgHAJQgGAJgHAFQgHAFgIACQgHACgHAAIgPgBg");
	this.shape.setTransform(6.6,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,13.1,14.9), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AAbBJIAAg+Ig2AAIAAA+IggAAIAAiRIAgAAIAAA4IA2AAIAAg4IAhAAIAACRg");
	this.shape.setTransform(6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,12.1,14.6), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AgbBHQgOgFgKgKQgJgJgGgOQgFgOgBgTQAAgSAHgOQAFgOAKgJQAKgKANgFQANgFAOAAQAPAAANAFQAOAFAJAKQAKAJAFAOQAHAOgBASQAAATgFAOQgFAOgKAJQgKAKgOAFQgNAFgPAAQgOAAgNgFgAgQgrQgGAEgFAGQgFAGgDAJQgDAJABAJQgBALADAIQADAJAFAGQAFAHAGADQAIADAIAAQAJAAAIgDQAGgDAFgHQAFgGADgJQACgIAAgLQAAgKgCgIQgDgJgFgHQgFgFgGgEQgIgDgJAAQgIAAgIADg");
	this.shape.setTransform(7.3,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,14.5,15.2), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AggBIQgLgBgLgCIAAiOIBfAAIAAAcIhAAAIAAAYIALAAQAPAAAMADQAOACAIAGQAJAGAEAIQAFAIAAANQAAAZgRAMQgSALggAAIgUgBgAgXAtIAGAAIAHAAIAMgBQAFAAAFgCQAFgDACgEQADgDAAgGQAAgHgCgDQgDgEgFgDQgEgCgHgBIgPgBIgJAAg");
	this.shape.setTransform(5.5,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,11,14.7), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEFEFE").s().p("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");
	this.shape.setTransform(158.4,201.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC10A").s().p("AA1BrIAAg0QgoAQghgHQgjgHgVgaQgUgagBgmQADgRgCgTQgCgTgIgSIAuAAQAEAFADAJQADAJAAAKIABANIgBAMQgBAnAVAPQAUAQAXgGQAZgFAMgZQADgJABgHIABgQIgCg8IA2AAIAADVg");
	this.shape_1.setTransform(17,201.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEC10A").s().p("AgfAiQgNgOgBgUQABgUANgNQAMgNATAAQATAAANANQANANAAAUQAAAUgNAOQgNANgTAAQgTAAgMgNg");
	this.shape_2.setTransform(17.2,197.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A20B3A").s().p("AigCQIAAkfIFBAAIAAEfg");
	this.shape_3.setTransform(17,201.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D0CFCE").s().p("AD5CoIjKjeIAADYIgsAAIAAlJIABAAIDKDeIAAjXIAtAAIAAFIgAJACiIh8iXIggAlIAAByIgtAAIAAlCIAtAAIAACWICHiYIAyAAIh8CNICUC3gAhlCiIgehCIiRAAIgdBCIgwAAICVlJIACAAICVFJgAkDA5IBwAAIg4h8gAp0CiIAAlCIByAAQAyAAAaAXQAZAWAAAoQAAAbgMAQQgLARgPAHQAcAHASASQASATABAjQgBAsgdAXQgdAYgvAAgApIB5IBXAAQAfAAARgNQARgOAAgZQAAgzhGgBIhSAAgApIgWIBFAAQAbAAAPgOQAPgNAAgWQAAgvg9gBIhBAAg");
	this.shape_4.setTransform(234.8,151.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A3A19E").s().p("AiNgoIEbiPIAADgIkbCQg");
	this.shape_5.setTransform(123.9,95.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00BCE9").s().p("AirDtIjGiQIAAjlIDEhkIACACIIdHXg");
	this.shape_6.setTransform(175.1,90.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEFEFE").s().p("AFxlAIAAEOIrhFzg");
	this.shape_7.setTransform(101.2,82.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ACZB4QgugugChKQAChIAtgvQAtgvBJgBQAnAAAdAMQAdANAWAXIgqAyQgNgQgTgJQgTgLgaAAQgsABgaAdQgaAdAAAuQAAAvAcAdQAbAeAwAAQAfAAAWgQIAAg0IhGAAIAAg6ICJAAIAACPQgvAthJAAQhNgBgvgvgAAWCoIi/i5IAAC0IhEAAIAAlKIADAAIC/C6IAAi0IBCAAIAAFJgAM7CjIAAlEIBEAAIAAFEgAKdCjIhEhzIgsAAIAABzIhEAAIAAlEICAAAQAwAAAhAbQAhAcABAyQAAAigQAXQgQAXgbAMIBLB/gAItgJIA2AAQAYAAAOgMQAOgMAAgXQAAgXgOgMQgOgMgYAAIg2AAgAofCjIAAlEIDSAAIAAA+IiOAAIAABFIB8AAIAAA5Ih8AAIAABKICSAAIAAA+gAsVCjIAAkJIhpAAIAAg7IEWAAIAAA7IhqAAIAAEJg");
	this.shape_8.setTransform(67.5,151.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-22,50,319.7,165.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AgLA4IAAhvIAXAAIAABvg");
	this.shape.setTransform(83.4,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E2783").s().p("AgMA4IAAhZIghAAIAAgWIBbAAIAAAWIghAAIAABZg");
	this.shape_1.setTransform(76,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E2783").s().p("AAXA4IAAhIQgOAQgMASQgMASgKAUIgWAAIAAhvIAZAAIAABBIANgRIAMgSIAMgQIANgOIAUAAIAABvg");
	this.shape_2.setTransform(65,11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E2783").s().p("AgOA5IgLgCIgJgDIgIgDIAHgTIAGABIAHACIAIADIAJABQAJAAAHgEQAGgDAAgHQAAgFgCgDQgCgDgDgBIgJgCIgKAAIgPAAIAAgUIARAAIAHgBIAHgCQADgCABgCQACgDAAgDQAAgGgEgDQgFgCgHAAQgIAAgHACQgGACgGADIgIgUQAGgEAJgDQAJgCAMAAQAIAAAHACQAIACAGAEQAFAEADAGQADAGAAAIQAAAGgDAGQgDAGgHAEIAHAEIAGAFIAEAIQABAFAAAFQAAASgMAHQgNAJgVAAIgLgBg");
	this.shape_3.setTransform(53.9,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E2783").s().p("AgUA2QgLgEgHgHQgIgHgEgLQgEgLAAgOQAAgOAEgKQAFgLAHgHQAIgHAKgEQAKgEAKAAQALAAAKAEQAKAEAIAHQAIAHAEALQAEAKAAAOQAAAOgEALQgEALgIAHQgHAHgKAEQgKAEgMAAQgKAAgKgEgAgMggQgFADgEAEQgEAFgBAGQgCAHAAAHQAAAIACAGQABAIAEAEQAEAEAFADQAGADAGAAQAHAAAFgDQAGgDAEgEQADgEACgIQACgGAAgIQAAgHgCgHQgCgGgDgFQgEgFgGgCQgFgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(42.9,11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6E2783").s().p("AAVA4IAAhZIgpAAIAABZIgYAAIAAhvIBaAAIAABvg");
	this.shape_5.setTransform(30.7,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6E2783").s().p("AgmA4IAAhvIBJAAIAAAWIgxAAIAAAVIAsAAIAAAUIgsAAIAAAaIA1AAIAAAWg");
	this.shape_6.setTransform(20.4,11.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6E2783").s().p("AAnBGIAAgdIhNAAIAAAdIgYAAIAAgyIAQAAQAGgLAEgJQADgKACgKIACgWIAAgXIAAgEIBJAAIAABZIATAAIAAAygAgGgeIgDASIgEAQIgHAQIAnAAIAAhEIgYAAIgBASg");
	this.shape_7.setTransform(8.6,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,88.1,21.9), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._51();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.511,0.511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,106.3,116), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AEoATQgGgHgBgMQABgLAGgHQAGgGALgBQALABAGAGQAGAHAAALQAAAMgGAHQgGAGgLABQgLgBgGgGgAEugNQgEAFAAAIQAAAJAEAEQAEAGAHAAQAHgBAEgEQAEgFgBgJQABgIgEgFQgEgFgHAAQgHAAgEAFgABoAZIAAgHIAEABQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAAAIAEgOIAEgaIAcAAIAAAxIgIAAIAAgqIgOAAIgFAcQgBAIgDADQgDAEgEAAIgFgBgAATATQgGgHAAgMQAAgHADgGQADgFAFgEQAFgCAHgBQAIABAGACIgDAHIgFgBIgGgBQgHAAgEAEQgDAFgBAIQABAJADAFQAEAEAHABIAHgBIAFgCIAAAHQgGADgGAAQgLgBgGgGgAEPAZIAAgXIgXAAIAAAXIgIAAIAAgxIAIAAIAAAUIAXAAIAAgUIAIAAIAAAxgADSAZIAAgqIgOAAIAAgHIAlAAIAAAHIgPAAIAAAqgAC/AZIgFgOIgTAAIgFAOIgIAAIASgxIAJAAIASAxgACugIIgEAMIANAAIgEgMIgBgFIgCgEIgCAJgABZAZIAAgqIgWAAIAAAqIgIAAIAAgxIAmAAIAAAxgAgXAZIAAgxIAbAAIAAAHIgSAAIAAANIARAAIAAAGIgRAAIAAAQIASAAIAAAHgAhCAZIAAgxIAfAAIAAAHIgXAAIAAANIAHAAQATAAAAAOQAAAPgTAAgAg6ASIAGAAQAGAAADgCQADgCgBgEQABgEgDgCQgDgCgGAAIgGAAgAiiAZIAAgXIgXAAIAAAXIgJAAIAAgxIAJAAIAAAUIAXAAIAAgUIAIAAIAAAxgAjWAZIAAgxIAIAAIAAAxgAj7AZIAAgxIAcAAIAAAHIgUAAIAAAqgAkjAZIAAgxIAdAAIAAAHIgVAAIAAANIATAAIAAAGIgTAAIAAAQIAVAAIAAAHgAlBAZIAAgqIgOAAIAAgHIAlAAIAAAHIgPAAIAAAqgAhzAGIAAgKIAKAAIAAAKg");
	this.shape.setTransform(33.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,67.2,5.1), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AAVB2IAAgsIhpAAIAAgBICHi+IABAAIAACiIAhAAIAAAdIghAAIAAAsgAgdAuIAzAAIAAhIg");
	this.shape.setTransform(8.5,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,16.9,23.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AhKA/IAdgHQAFASAMAJQALAKASAAQATgBAMgLQALgLAAgUQAAgSgMgLQgNgLgUgBIgZAAIAAgbIAaAAQAPAAALgJQAKgKABgRQAAgRgLgKQgKgKgQAAQgfgBgKAiIgcgMQASgyAzAAQAeAAATATQATASABAdQgBAkgfAOQASAGAKAOQALAOAAAUQAAAggVAUQgUATghAAQg4AAgTg6g");
	this.shape.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,14.9,24.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AAVB2IAAgsIhoAAIAAgBICGi+IACAAIAACiIAfAAIAAAdIgfAAIAAAsgAgdAuIAzAAIAAhIg");
	this.shape.setTransform(8.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,16.9,23.7), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AhKA/IAdgHQAGASALAJQALAKASAAQATgBAMgLQALgLAAgUQAAgSgMgLQgNgLgTgBIgaAAIAAgbIAaAAQAPAAALgJQALgKAAgRQAAgRgKgKQgLgKgQAAQgfgBgKAiIgcgMQASgyA0AAQAdAAATATQATASABAdQAAAkggAOQASAGALAOQAKAOAAAUQAAAggUAUQgUATgiAAQg5AAgSg6g");
	this.shape.setTransform(7.5,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,15,24.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E2783").s().p("AhqCgQgJAAgGgHQgHgGAAgJIAAkTQABgKAGgGQAGgGAJAAICTAAQAJABAGAFQAGAGAAAKIAABIIgKAEIAAhMQgBgFgCgDQgEgDgEAAIiTAAQgFAAgDADQgDADAAAFIAAETQAAAFADADQADADAFAAICTAAQAEAAAEgDQACgDABgFIAAiMIgbAJQgVALgMAPQgNAPgFALIgFANQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgCgLgJgLQgHgKgLgEQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIACgCQAGgBAKACQAEABAFAEQAJgUANgRQAOgRAQgNQAggVAXgFQAXgFAIABIAAgMIACgCIACABIAYAnQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgYAjQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBgCIAAgMQgGAAgVACIgLADIAACPQAAAJgGAGQgGAHgJAAgAg1CLIAAgKIAqAAIAAAKgAhrB2IAAgLICVAAIAAALgAhrhnIAAgMICVAAIAAAMgAgmh9IAAgKIALAAIAAAKg");
	this.shape.setTransform(12.9,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,25.7,32), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.people();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,189,177), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.Symbol22();
	this.instance.parent = this;
	this.instance.setTransform(12.8,12.8,0.294,0.294,0,0,0,12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.63,scaleY:1.63,x:12.9,y:12.9},9).to({scaleX:1,scaleY:1,x:12.8,y:12.8,alpha:0},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,7.5,7.5);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_22 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer 8
	this.instance = new lib.Symbol21();
	this.instance.parent = this;
	this.instance.setTransform(265.7,28.3,0.848,0.848,0,0,0,12.8,12.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(13));

	// Layer 9
	this.instance_1 = new lib.Symbol21();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.7,36.1,0.848,0.848,0,0,0,12.8,12.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(15));

	// Layer 10
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(230.6,56.3,0.848,0.848,0,0,0,12.8,12.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(17));

	// Layer 11
	this.instance_3 = new lib.Symbol21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(216.4,83.3,0.848,0.848,0,0,0,12.8,12.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(19));

	// Layer 12
	this.instance_4 = new lib.Symbol21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(205.3,98.6,0.848,0.848,0,0,0,12.8,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23));

	// Layer 6
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88,11.9,3.959,3.959,32.4,0,0,8.4,11.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:88.2,y:12,alpha:1},8,cjs.Ease.get(1)).wait(5));

	// Layer 5
	this.instance_6 = new lib.Symbol6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(71.6,12.1,3.675,3.675,-37,0,0,7.5,12.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:71.5,alpha:1},8,cjs.Ease.get(1)).wait(7));

	// Layer 4
	this.instance_7 = new lib.Symbol5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53.7,12,3.194,3.194,29.2,0,0,8.4,11.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,alpha:1},8,cjs.Ease.get(1)).wait(9));

	// Layer 3
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(37,12,3.058,3.058,-33.2,0,0,7.5,12.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,y:12.1,alpha:1},8,cjs.Ease.get(1)).wait(11));

	// Layer 1
	this.instance_9 = new lib.Symbol3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(12.9,16.2,2,2,33,0,0,12.9,16);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:0,y:16.1,alpha:1},8,cjs.Ease.get(1)).wait(15));

	// Layer 2
	this.instance_10 = new lib.Symbol8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(63.1,29.5,1,1,0,0,0,33.6,2.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({alpha:1},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.1,-24.7,234.6,126.5);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(16).call(this.frame_16).wait(1));

	// Layer 5
	this.instance = new lib.Symbol19();
	this.instance.parent = this;
	this.instance.setTransform(68.2,14.1,5.934,5.934,32.5,0,0,6,7.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:68.4,y:14.3,alpha:1},8,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_1 = new lib.Symbol18();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.4,14.6,5.662,5.662,-39.4,0,0,6.5,7.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:54.6,y:14.4,alpha:1},8,cjs.Ease.get(1)).wait(3));

	// Layer 3
	this.instance_2 = new lib.Symbol17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.9,14.5,4.862,4.862,30.7,0,0,6,7.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:40,y:14.3,alpha:1},8,cjs.Ease.get(1)).wait(5));

	// Layer 2
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24.2,14.2,4.618,4.618,-37.2,0,0,7.3,7.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0,x:24,y:14.3,alpha:1},8,cjs.Ease.get(1)).wait(7));

	// Layer 1
	this.instance_4 = new lib.Symbol15();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9.1,14.5,4.537,4.537,47.2,0,0,5.5,7.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,rotation:0,x:9.2,y:14.4,alpha:1},8,cjs.Ease.get(1)).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,-26.6,106.8,82);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol14();
	this.instance.parent = this;
	this.instance.setTransform(232.1,42.9,0.33,0.33,0,0,0,178.5,95.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},9).wait(94));

	// Layer 6
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(69.3,168.6,0.826,0.826,0,0,0,48.5,16.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).wait(67));

	// Layer 5
	this.instance_2 = new lib.Symbol12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(79.5,135,0.996,0.996,0,0,0,44.1,11);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({alpha:1},8).wait(67));

	// Layer 4
	this.instance_3 = new lib.Symbol11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(73.6,15.7,0.996,0.996,0,0,0,38.6,13.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).wait(85));

	// Layer 3
	this.instance_4 = new lib.Symbol10();
	this.instance_4.parent = this;
	this.instance_4.setTransform(78.7,74,2.238,2.238,39,0,0,52,56.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({regX:52.1,regY:56.6,scaleX:0.82,scaleY:0.82,rotation:12.4,x:92.4,y:65.4,alpha:1},9,cjs.Ease.get(1)).to({regY:56.5,scaleX:1,scaleY:1,rotation:0,y:65.3},2).wait(83));

	// Layer 2
	this.instance_5 = new lib.Symbol2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(193.7,173.5,0.87,0.87,0,0,0,94.5,88.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({alpha:1},3).wait(111));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AryUPIAAgyMAjnAAAIAAAyg");
	var mask_graphics_1 = new cjs.Graphics().p("AryUPIAApUMAjnAAAIAAJUg");
	var mask_graphics_2 = new cjs.Graphics().p("AryUPIAAw1MAjnAAAIAAQ1g");
	var mask_graphics_3 = new cjs.Graphics().p("AryUPIAA3VMAjnAAAIAAXVg");
	var mask_graphics_4 = new cjs.Graphics().p("AryUPIAA82MAjnAAAIAAc2g");
	var mask_graphics_5 = new cjs.Graphics().p("AryUPMAAAghXMAjnAAAMAAAAhXg");
	var mask_graphics_6 = new cjs.Graphics().p("AryUPMAAAgk4MAjnAAAMAAAAk4g");
	var mask_graphics_7 = new cjs.Graphics().p("AryUPMAAAgnYMAjnAAAMAAAAnYg");
	var mask_graphics_8 = new cjs.Graphics().p("AryUdMAAAgo5MAjnAAAMAAAAo5g");
	var mask_graphics_9 = new cjs.Graphics().p("AryUtMAAAgpZMAjnAAAMAAAApZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_1,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_2,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_3,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_4,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_5,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_6,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_7,x:152.5,y:129.5}).wait(1).to({graphics:mask_graphics_8,x:152.5,y:128.1}).wait(1).to({graphics:mask_graphics_9,x:152.5,y:126.5}).wait(114));

	// Layer 1
	this.instance_6 = new lib.bg();
	this.instance_6.parent = this;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,0,252,252);


// stage content:
(lib._500x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgnDgnDMBOHAAAMAAABOHMhOHAAAg");
	this.shape.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-50.8,-0.9,1.996,1.996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(199.2,249,608.8,516.9);
// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/500x500_atlas_.png", id:"500x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;