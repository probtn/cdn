(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,400,400],[402,0,400,400],[804,0,400,400]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
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



(lib._5127852 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5143100 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._5161619 = function() {
	this.spriteSheet = ss["index_atlas_"];
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Распродажа – скидки до 50% \nс 15.07.2017 по 31.07.2017. \nОАО «ТД ЦУМ», Москва, \nул. Петровка, д. 2, \nОГРН 1027739063208.\n\nКоличество товара ограничено. \nНе является публичной офертой. \nРеклама. Все подробности \nна tsum.ru.", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(0,-76);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-78,262.5,156);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Распродажа – скидки до 50% \nс 15.07.2017 по 31.07.2017. \nОАО «ТД ЦУМ», Москва, \nул. Петровка, д. 2, \nОГРН 1027739063208.\n\nКоличество товара ограничено. \nНе является публичной офертой. \nРеклама. Все подробности \nна tsum.ru.", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(0,-76);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.2,-78,262.5,156);


(lib.tsumlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUCGIAAgLIAeAAIAWgsIhQi0QgEgKgEgEQgFgGgKAAIgPAAIAAgMIBQAAIAAAMIgOAAQgRAAAAAJQAAAJAKAUIBBCVIBei7IgfAAIAAgMIByAAIAAAMIgeAAIh7D0IAeAAIAAALg");
	this.shape.setTransform(-0.2,-20.2,1.01,1.01);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FC4600").s().p("AgZAaIAAgzIAzAAIAAAzg");
	this.shape_1.setTransform(-14.2,17.1,1.01,1.01);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPAZIgPgrIAAAAIgOArIgKAAIgSgxIAIAAIAPArIAPgrIAJAAIAPArIAPgrIAIAAIgSAxg");
	this.shape_2.setTransform(58.2,17,1.01,1.01);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVASQgGgHAAgLQAAgJAGgHQAHgJAOAAQAOAAAIAJQAGAHAAAJQAAALgGAHQgIAIgOAAQgOAAgHgIgAgOgOQgGAGABAIQgBAJAGAGQAGAGAIAAQAJAAAGgGQAFgGAAgJQAAgIgFgGQgGgFgJAAQgIAAgGAFg");
	this.shape_3.setTransform(44.8,17,1.01,1.01);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAGgHQAHgJAOAAQAJAAAGAEQAGAEAAAGIgHAAQgDgIgMAAQgSAAAAATQAAAVASAAQANAAACgKIAIAAQgCAPgWAAQgMAAgGgIg");
	this.shape_4.setTransform(32.9,17,1.01,1.01);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAKIAIAAQAAALAPAAQARAAAAgKQgBgGgRgCQgUgDABgKQAAgPAUAAQAVAAABAOIgHAAQgBgIgOAAQgGAAgDACQgFADAAADQAAAGAIABIASADQAMABAAAKQAAAQgYAAQgVAAgCgQg");
	this.shape_5.setTransform(21.3,17,1.01,1.01);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVASQgGgHAAgLQAAgJAGgHQAHgJAOAAQAOAAAIAJQAGAHAAAJQAAALgGAHQgIAIgOAAQgOAAgHgIgAgOgOQgFAGAAAIQAAAJAFAGQAGAGAIAAQAJAAAGgGQAGgGAAgJQAAgIgGgGQgGgFgJAAQgIAAgGAFg");
	this.shape_6.setTransform(9.6,17,1.01,1.01);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaAZIAAgsIgWAsIgHAAIgWgsIAAAAIAAAsIgHAAIAAgxIALAAIAVArIAWgrIALAAIAAAxg");
	this.shape_7.setTransform(-3.5,17,1.01,1.01);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaAZIAAgsIgXAsIgGAAIgWgsIgBAAIAAAsIgHAAIAAgxIAMAAIAVArIAVgrIANAAIAAAxg");
	this.shape_8.setTransform(-25.4,17,1.01,1.01);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWAEIAAgdIAHAAIAAAeQAAAPAPAAQAQAAAAgPIAAgeIAHAAIAAAdQAAAWgXgBQgWABAAgWg");
	this.shape_9.setTransform(-38.2,17.1,1.01,1.01);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAKIAIAAQAAALAPAAQAQAAAAgKQAAgGgSgCQgTgDAAgKQAAgPAVAAQAVAAAAAOIgHAAQAAgIgOAAQgGAAgEACQgEADAAADQAAAGAIABIARADQAMABAAAKQAAAQgXAAQgWAAgBgQg");
	this.shape_10.setTransform(-49.7,17,1.01,1.01);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAZIAAgrIgVAAIAAgGIAxAAIAAAGIgVAAIAAArg");
	this.shape_11.setTransform(-60.7,17,1.01,1.01);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACOCSIAAgBQAAgIgGgJQgIgIgJAAIkJAAIAAgLIAhAAIAAjzIghAAIAAgLIBxAAIAAALIghAAIAADzICEAAIAAjzIggAAIAAgLIBxAAIAAALIgiAAIAADzIAiAAIAAAlg");
	this.shape_12.setTransform(-54.2,-18.9,1.01,1.01);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAqCFIAAgLIAiAAIAAjlIgBAAIhSDlIgTAAIhVjhIAAAAIAADDQAAATAEAFQAEAGAOAAIAOAAIAAALIhPAAIAAgLIAJAAQAOAAAFgGQAEgFAAgTIAAjVIggAAIAAgLIBVAAIBGDAIBGjAIBUAAIAAALIggAAIAADzIAgAAIAAALg");
	this.shape_13.setTransform(53.4,-20.3,1.01,1.01);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCDNIAAmZIAFAAIAAGZg");
	this.shape_14.setTransform(24.4,-21.2,1.01,1.01);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCDMIAAmXIAFAAIAAGXg");
	this.shape_15.setTransform(-24.7,-21.2,1.01,1.01);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AsqHGIAAuLIZVAAIAAOLgAsaG2IY0AAIAAtrI40AAg");
	this.shape_16.setTransform(0,-14.2,1.01,1.01);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC4600").s().p("At6IWIAAwrIb1AAIAAQrgAs6HXIZ0AAIAAusI50AAg");
	this.shape_17.setTransform(0,-14.2,1.01,1.01);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000001").s().p("AtIHkIAAvHIaRAAIAAPHg");
	this.shape_18.setTransform(0,-14.2,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tsumlogo, new cjs.Rectangle(-90,-68.1,180,107.8), null);


(lib.translate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AARAuQgGgHAAgNQAAgLAGgIQAEgHALAAQAKAAAFAHQAHAGAAANQAAANgHAHQgFAHgKAAQgJAAgGgHgAAZAMQgDAEAAALQAAAKADAEQADADAFAAQAEAAADgDQADgEAAgLQAAgKgDgEQgDgEgEAAQgFAAgDAEgAgfA1IA2hpIAKAAIg2BpgAgvgFQgGgHAAgOQAAgLAGgHQAFgIAKAAQAJAAAHAHQAGAHAAANQAAANgGAGQgHAGgIAAQgKAAgGgFgAgngnQgDAEAAAKQAAAKADAEQADAEAFAAQAEAAADgEQAEgEAAgLQgBgJgDgEQgDgEgEAAQgFAAgDAEg");
	this.shape.setTransform(91.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWApQgKgMAAgdQAAgQAEgMQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAHACAJQACAIABAOQAAARgEAMQgEAKgHAGQgHAGgLAAQgNAAgJgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAIAAAHgIQAFgIAAgZQAAgXgFgJQgHgIgIAAQgHAAgGAHg");
	this.shape_1.setTransform(81.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXArQgIgIgBgMIAMgCQACAKAFAFQAFAEAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgFQgGgGgIAAQgGAAgFADQgFADgDADIgLgCIAJgyIAxAAIAAAMIgnAAIgFAbQAJgHAJAAQANAAAJAJQAJAIAAAPQAAANgIAKQgKAMgPAAQgOAAgJgHg");
	this.shape_2.setTransform(73.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_3.setTransform(62.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdAvIAAgVIg5AAIAAAVIgKAAIAAgfIAHAAQANgRgBgtIAyAAIAAA+IAIAAIAAAfgAgTAQIAmAAIAAg0IgcAAQgBAkgJAQg");
	this.shape_4.setTransform(53.9,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAkIAAg2IggA2IgOAAIAAhHIANAAIAAA2IAgg2IAOAAIAABHg");
	this.shape_5.setTransform(42.3,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAkIgNgWQgDgHgDgCQgDgCgEAAIAAAhIgNAAIAAhHIANAAIAAAfQAGAAACgCQACgCAEgLIAGgMIAFgDIAJgBIADAAIAAAKIgEAAQgEAAgCABIgEAJQgDAHgCADQgDADgDACQAGABAIANIAOAWg");
	this.shape_6.setTransform(35.9,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAvIAAgVIg5AAIAAAVIgKAAIAAgfIAHAAQANgRgBgtIAyAAIAAA+IAIAAIAAAfgAgTAQIAmAAIAAg0IgcAAQgBAkgJAQg");
	this.shape_7.setTransform(28,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARAkIAAg2IggA2IgOAAIAAhHIANAAIAAA2IAgg2IAOAAIAABHg");
	this.shape_8.setTransform(20.3,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANAkIgNgWQgDgHgDgCQgDgCgEAAIAAAhIgNAAIAAhHIANAAIAAAfQAGAAACgCQACgCAEgLIAGgMIAFgDIAJgBIADAAIAAAKIgEAAQgEAAgCABIgEAJQgDAHgCADQgDADgDACQAGABAIANIAOAWg");
	this.shape_9.setTransform(13.8,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgWAcQgIgKgBgSQAAgLAFgIQADgJAJgFQAHgEAJAAQAMAAAHAGQAHAGACALIgLACQgCgHgFgEQgEgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAHAHAIAAQAGAAAFgFQAGgEABgJIALABQgBANgJAHQgHAHgMAAQgOAAgKgKg");
	this.shape_10.setTransform(7,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAFIAAgJIBNAAIAAAJg");
	this.shape_11.setTransform(-4.5,1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_12.setTransform(-16.1,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiAkIgNgWQgEgHgDgCQgDgCgFAAIAAAhIgLAAIAAghQgEAAgDACQgDACgEAHIgOAWIgNAAIANgWQAIgNAIgBQgFgDgDgCIgGgPIgDgEIgGgBIgDAAIAAgKIABAAIAKABQADAAADADIAGAMQAEAKADADQACACAGAAIAAgfIALAAIAAAfQAGAAADgCQACgCAFgLQAEgLADgDQAEgCAHAAIAFAAIAAAKIgEAAQgFAAgBABIgFAJQgCAHgDADQgCADgFACQAIABAIANIANAWg");
	this.shape_13.setTransform(-24.6,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAgQgGgGAAgJQgBgFADgFQADgEAEgDIAIgDIALgCQAOgBAHgDIAAgDQAAgIgEgDQgEgEgJAAQgIAAgEADQgEADgDAIIgMgCQACgHAEgFQAEgFAHgCQAHgDAJAAQAIAAAGACQAHACACAEQADADABAFIABALIAAAQQAAARAAAFQABAEACAEIgMAAQgCgEgBgFQgGAGgHACQgGADgGAAQgMAAgHgGgAgCAEIgLADQgDABgBADQgDADAAADQAAAFAFADQADADAHAAQAGAAAGgDQAFgDADgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_14.setTransform(-33.2,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdAvIAAgVIg5AAIAAAVIgKAAIAAgfIAHAAQANgRgBgtIAyAAIAAA+IAIAAIAAAfgAgTAQIAmAAIAAg0IgcAAQgBAkgJAQg");
	this.shape_15.setTransform(-41.3,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAcQgJgKAAgSQAAgTALgKQAJgIANAAQAPAAAKAKQAJAKAAARQAAANgEAIQgEAIgIAEQgIAFgKAAQgOAAgKgKgAgOgUQgGAHAAANQAAAOAGAHQAGAHAIAAQAJAAAHgHQAFgHAAgOQAAgNgFgHQgHgHgJAAQgIAAgGAHg");
	this.shape_16.setTransform(-49.1,1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfAzIAAhkIAMAAIAAAKQAEgGAFgDQAFgCAGAAQAJAAAHAFQAHAEAEAJQAEAJAAAKQAAAMgEAIQgEAIgIAFQgIAFgIAAQgFAAgFgDQgFgCgDgEIAAAjgAgNghQgGAHAAAOQAAANAFAHQAGAHAIgBQAHAAAGgGQAGgIAAgNQAAgOgGgHQgFgHgIAAQgHAAgGAIg");
	this.shape_17.setTransform(-56.6,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQAkIAAg9IgfAAIAAA9IgNAAIAAhHIA5AAIAABHg");
	this.shape_18.setTransform(-64.4,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAcQgJgKAAgSQAAgLAEgIQAFgJAIgFQAHgEAJAAQAMAAAHAGQAIAGACALIgMACQgCgHgEgEQgFgEgGAAQgIAAgGAHQgGAGAAAOQAAAPAFAGQAGAHAJAAQAHAAAEgFQAFgEACgJIALABQgCANgHAHQgJAHgLAAQgOAAgKgKg");
	this.shape_19.setTransform(-71.5,1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAgQgHgGAAgJQAAgFADgFQACgEAEgDIAJgDIALgCQAOgBAHgDIAAgDQAAgIgDgDQgFgEgJAAQgIAAgEADQgEADgCAIIgMgCQABgHAEgFQAEgFAHgCQAHgDAIAAQAJAAAHACQAFACADAEQADADABAFIAAALIAAAQQAAARABAFQABAEADAEIgOAAQgBgEgBgFQgGAGgHACQgFADgIAAQgMAAgGgGgAgCAEIgLADQgDABgCADQgBADAAADQAAAFADADQAEADAHAAQAHAAAFgDQAGgDACgFQACgFAAgIIAAgEQgGADgNABg");
	this.shape_20.setTransform(-79.1,1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglAyIAAhjIAlAAIAPAAQAHACAFAEQAFADADAGQADAGAAAIQAAAMgIAJQgIAJgVAAIgZAAIAAAogAgYgBIAZAAQANgBAFgFQAFgEAAgJQAAgGgDgFQgDgEgFgBIgNgBIgYAAg");
	this.shape_21.setTransform(-87.4,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAHIgIAOIgIgFIALgNIgRgDIAEgKIAQAHIgCgRIAJAAIgCARIAQgHIADAKQgIACgIABIAMANIgJAFIgJgOg");
	this.shape_22.setTransform(-95,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.translate, new cjs.Rectangle(-103,-9.8,206.1,19.6), null);


(lib.slide3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJA1IgKgDIgJgFQgEgEgCgDIALgNQADAEAIAFQAHADAFAAQAHAAAEgDQAEgDAAgHQAAgDgCgDIgFgFIgPgIIgJgFQgFgBgDgEQgDgEgCgEQgCgFAAgGQAAgGACgFQACgGAFgDQAEgEAGgDQAGgCAHAAQAGAAALADQAIADAFAFIgKAOQgEgEgEgCQgFgCgGAAQgGAAgEADQgEAEAAAFQAAADACAEQACACAEACIAPAIIAJAFIAIAFQADADACAFQACAFAAAGQAAAHgDAGQgCAFgFAEQgFAEgGACQgHACgHAAIgJgBg");
	this.shape.setTransform(51.3,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AATA1IgcgoIgNAAIAAAoIgSAAIAAhoIAggBQAHAAAKADQAHACAFAFQAEAEACAGQACAGAAAHQAAAGgCAGQgCAFgDACQgDAEgEACQgDADgDABIAgArgAgWgiIAAAfIAMAAIAIgBQADgBACgCQADgCACgDIABgHIgBgGIgDgFIgFgDIgJgBg");
	this.shape_1.setTransform(42.9,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKA1IgLgDIgJgEIgIgHQgEgDgCgFIgFgJIgDgLQgCgFAAgGIACgKIADgLIAEgJIAHgIIAIgGIAJgFIAKgDIALgBIALABIALADQAFABAEAEIAIAFIAHAIIAFAJIADALIABALIgBALIgDAKIgFAKIgHAIIgIAHIgJAEIgLADIgLABIgKgBgAgNghQgGADgFAFQgFAEgCAHQgDAHAAAHQAAAIADAGQACAHAFAGQAFAFAGACQAHADAGAAQAIAAAHgDQAGgCAFgGQAFgFACgHQACgGAAgIQAAgHgCgHQgDgHgFgEQgFgFgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_2.setTransform(31.2,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATA1Igqg1IAAA1IgTAAIAAhoIATAAIAAAxIApgxIAVAAIgpAwIAtA4g");
	this.shape_3.setTransform(20.8,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggA1IAAhoIATAAIAABWIAuAAIAAASg");
	this.shape_4.setTransform(8.5,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeA1IAAhoIA8AAIAAARIgqAAIAAAaIAlAAIAAAQIglAAIAAAbIArAAIAAASg");
	this.shape_5.setTransform(-0.3,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAhA1IgLgbIgsAAIgLAbIgSAAIAshpIAPAAIAsBpgAAPAJIgPglIgPAlIAeAAg");
	this.shape_6.setTransform(-10.2,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAYA1IAAgtIgvAAIAAAtIgSAAIAAhoIASAAIAAArIAvAAIAAgrIASAAIAABog");
	this.shape_7.setTransform(-21.2,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1IgLgDIgJgEIgIgHQgDgDgDgFIgFgJQgCgFAAgGQgCgFAAgGIABgKIADgKIAEgKIAGgIIAIgGIAJgFIAKgDIAMgBQAHAAALADQAJADAFAFIgJANQgEgEgFgBQgHgCgHAAQgIAAgEADQgHACgEAFQgFAFgCAHQgDAHAAAHQAAAIADAHQACAGAFAGQAFAFAGACQAGADAIAAQAHAAAGgCQAGgDAGgDIAHANIgGAFIgIAEQgNADgHAAIgKgBg");
	this.shape_8.setTransform(-31.7,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA1IAAhoIARAAIAABog");
	this.shape_9.setTransform(-39.3,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjA1IAAhMIghAuIgCAAIghgtIAABLIgTAAIAAhoIATAAIAjAwIAhgwIASAAIAABog");
	this.shape_10.setTransform(-48.7,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(252,70,0,0.6)").ss(1,1,1).p("AmEAAIMJAA");
	this.shape_11.setTransform(0,31.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgSAuIgKgBIAAhaIAzAAIAAALIgoAAIAAAaIAPgBQAGAAAGACQAGACAEADQAEADACAFQACAFAAAGQAAAHgCAFQgCAGgFADQgEAEgHACQgHACgGAAgAgRABIAAAiIANAAIAJgBQAEgBADgCIAEgGQACgDgBgEQABgEgCgEIgEgFQgDgCgEgBQgEgCgEAAg");
	this.shape_12.setTransform(29.1,32);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgSAsIgFgCIAEgJQADACAEAAQAEAAACgCQADgDACgEIABgDIgohEIAMAAIAhA5IAZg5IALAAIgfBFIgFAKIgFAHIgFADIgHACIgGgCg");
	this.shape_13.setTransform(20.5,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgcAuIAAhaIAMAAIAMgBQAIAAAHADQAGACAEAEQAEAEACAFQACAFAAAGQAAAMgJAHQgEAEgGACQgGACgHAAIgOAAIAAAjgAgRgiIAAAiIAOABIAIgBIAGgDQADgCACgEQABgDAAgEQAAgFgBgDQgBgDgDgCQgDgDgEgBQgEgBgEAAg");
	this.shape_14.setTransform(12.7,31.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgFAuIgHgDIgEgDIgFgGQgEgHgBgIQgCgFgBgOQAAgJADgJQABgIAEgHIAEgGIAFgDIAGgDIAGgBIAHABIAGADIAFADIAEAGQAIAMAAAVQgBALgBAJQgDAKgDAEIgDAGIgGADIgGADIgGABIgGgBgAgHghQgEACgCAEQgCAFgBAHQgBAHAAAIQAAAJABAHQABAHACAFQACAEAFACQACADAFAAQAEAAAEgDQADgCACgEQACgFACgHIABgQIgBgPQgCgHgCgFQgCgEgDgCQgEgDgFAAQgEAAgDADg");
	this.shape_15.setTransform(1.9,32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgFAuIgHgDIgEgDIgFgGQgDgHgDgIQgBgFgBgOQAAgJACgJQADgIADgHIAEgGIAFgDIAGgDIAGgBIAHABIAGADIAFADIAEAGQAIAMAAAVQgBALgBAJQgDAKgDAEIgDAGIgGADIgGADIgGABIgGgBgAgHghQgDACgDAEQgCAFgBAHQgCAHAAAIQAAAJACAHQABAHACAFQACAEAFACQACADAFAAQAEAAADgDQAEgCACgEQACgFABgHIACgQIgCgPQgBgHgCgFQgCgEgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_16.setTransform(-5.4,32);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgbAuIAAgJIAagbIAKgQIADgHIABgHIgBgGIgDgFIgFgDIgFAAIgGAAIgEADIgEAFIgCAGIgJgEIADgJIAGgHIAIgEQAEgBAFAAQAFAAAEABQAFADADADQAEADABAEQACAFAAAEIgBAJIgEAJQgCAFgDAEIgHAKIgLAMIgJAJIApAAIAAAKg");
	this.shape_17.setTransform(-12.5,31.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAJAuIAAgXIgpAAIAAgIIAmg8IALAAIgjA6IAbAAIAAgZIALAAIAAAZIANAAIAAAKIgNAAIAAAXg");
	this.shape_18.setTransform(-22.4,32);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgbAuIAAgJIAagbIAKgQIADgHIABgHIgBgGIgDgFIgFgDIgFAAIgGAAIgEADIgEAFIgCAGIgJgEIADgJIAGgHIAIgEQAEgBAFAAQAFAAAEABQAFADADADQAEADABAEQACAFAAAEIgBAJIgEAJQgCAFgDAEIgHAKIgLAMIgJAJIApAAIAAAKg");
	this.shape_19.setTransform(-29.4,31.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC4600").s().p("AgjA4IAAhvIBAAAIAAASIgtAAIAAAZIAPgBQAIAAAHACQAHADAFAEQAFAEACAGQADAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgIACQgIACgJAAgAgQAGIAAAfIANABQAEAAAEgBQAEgBADgDQACgCABgDQACgDAAgEQAAgDgCgDQgBgDgCgDIgGgDIgIgBg");
	this.shape_20.setTransform(34.5,51.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC4600").s().p("AgYA3QgEgCgCgCIAHgQQAEACAEABQAEAAADgCIAEgGIACgEIgyhRIAWAAIAkA9IAbg9IAUAAIgmBVIgGALIgHAIIgHAGQgFABgFAAIgJgBg");
	this.shape_21.setTransform(23.9,51.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC4600").s().p("AglA4IAAhvIAhAAQAGAAANADQAIADAGAFQAEAFACAHQADAGAAAHQAAAHgDAHQgDAFgFAFQgFAFgIADQgLADgFAAIgPAAIAAAogAgRgkIAAAiIAOABIAHgBIAHgDQADgDABgDQACgEAAgEQAAgFgCgDQgBgDgCgCIgHgEIgIgBg");
	this.shape_22.setTransform(14,51.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNQgCgHgBgRQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_23.setTransform(0.9,51.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNIgDgYQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_24.setTransform(-8,51.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FC4600").s().p("AgLA4IgJgDIgIgFIgHgHIALgOQADAFAHADQAGADAHAAQADAAADgBIAGgEIAEgGIABgHIgCgJQgBgDgDgDQgDgDgFgBQgDgBgGAAIgLABIgHACIAHg7IA0AAIAAASIgkAAIgDAXIAFgBQAIAAAGACQAHADAEAFQAFAEADAGQADAGAAAJQAAAIgDAIQgDAHgGAFQgFAFgHACQgHADgHAAIgJgBg");
	this.shape_25.setTransform(-16.7,51.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FC4600").s().p("AAJA4IAAgaIgyAAIAAgOIAqhHIAVAAIgnBDIAaAAIAAgbIATAAIAAAbIAOAAIAAASIgOAAIAAAag");
	this.shape_26.setTransform(-28.5,51.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FC4600").s().p("AACA4IAAhVIgMALIgKgQIAcgVIANAAIAABvg");
	this.shape_27.setTransform(-36.7,51.4);

	this.instance = new lib._5161619();
	this.instance.parent = this;
	this.instance.setTransform(-93,-169,0.46,0.46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide3, new cjs.Rectangle(-93,-169,184,235.3), null);


(lib.slide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKA1IgLgDIgJgEIgIgHQgEgDgCgFIgFgJIgDgLQgCgFAAgGIACgKIADgLIAEgJIAHgIIAIgGIAJgFIAKgDIALgBIALABIALADQAFABAEAEIAIAFIAHAIIAFAJIADALIABALIgBALIgDAKIgFAKIgHAIIgIAHIgJAEIgLADIgLABIgKgBgAgNghQgGADgFAFQgFAEgCAHQgDAHAAAHQAAAIADAGQACAHAFAGQAFAFAGACQAHADAGAAQAIAAAHgDQAGgCAFgGQAFgFACgHQACgGAAgIQAAgHgCgHQgDgHgFgEQgFgFgGgDQgHgDgHAAQgGAAgHADg");
	this.shape.setTransform(20.1,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpA1IAAgNIA5hKIg2AAIAAgRIBPAAIAAAMIg6BKIA7AAIAAASg");
	this.shape_1.setTransform(9.2,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeA1Ig4hIIAABIIgSAAIAAhoIAPAAIA5BIIAAhIIARAAIAABog");
	this.shape_2.setTransform(-1.6,7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeA1IAAhoIA8AAIAAARIgqAAIAAAaIAlAAIAAAQIglAAIAAAbIArAAIAAASg");
	this.shape_3.setTransform(-11.5,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATA1Igqg1IAAA1IgSAAIAAhoIASAAIAAAxIAogxIAXAAIgqAwIAsA4g");
	this.shape_4.setTransform(-20.4,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(252,70,0,0.6)").ss(1,1,1).p("AmEAAIMJAA");
	this.shape_5.setTransform(0,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgSAuIgJgBIAAhaIAyAAIAAALIgnAAIAAAaIANgBQAHAAAGACQAGACAEADQAEADADAFQABAFAAAGQAAAHgCAFQgCAGgFADQgEAEgHACQgGACgIAAgAgQABIAAAiIAMAAIAJgBQAEgBADgCIAEgGQABgDABgEQgBgEgBgEIgEgFQgDgCgEgBQgEgCgEAAg");
	this.shape_6.setTransform(28.2,32);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgSAsIgFgCIAEgJQADACAEAAQAEAAACgCQADgDACgEIABgDIgohEIAMAAIAhA5IAZg5IALAAIgfBFIgFAKIgFAHIgFADIgHACIgGgCg");
	this.shape_7.setTransform(19.7,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgcAuIAAhaIAMAAIAMgBQAIAAAHADQAGACAEAEQAEAEACAFQACAFAAAGQAAAMgJAHQgEAEgGACQgGACgHAAIgOAAIAAAjgAgRgiIAAAiIAOABIAIgBIAGgDQADgCACgEQABgDAAgEQAAgFgBgDQgBgDgDgCQgDgDgEgBQgEgBgEAAg");
	this.shape_8.setTransform(11.8,31.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgGAuIgFgDIgGgDIgEgGQgEgHgCgIQgBgFAAgOQAAgJABgJQACgIAEgHIAEgGIAFgDIAGgDIAGgBIAHABIAGADIAFADIAFAGQAGAMAAAVQAAALgBAJQgDAKgCAEIgFAGIgEADIgHADIgHABIgGgBgAgHghQgDACgCAEQgDAFgBAHQgBAHgBAIQABAJABAHQABAHADAFQACAEADACQAEADADAAQAFAAADgDQAEgCADgEQABgFABgHIABgQIgBgPQgBgHgCgFQgCgEgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_9.setTransform(1.1,32);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgJAtIgHgCIgGgFIgFgGIAGgHIAEAEIAFAEQAGADAFAAQADAAAEgCIAGgEIADgGQACgDAAgFQAAgEgCgDQgBgEgEgCQgGgFgIAAQgIAAgHACIAGgtIAoAAIAAAKIgfAAIgDAZIAHgBQAMAAAHAIQAEADADAFQACAFAAAGQAAAOgJAIQgJAIgLAAIgIgBg");
	this.shape_10.setTransform(-6,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAKAuIAAgXIgqAAIAAgIIAlg8IAMAAIgjA6IAcAAIAAgZIAKAAIAAAZIAMAAIAAAKIgMAAIAAAXg");
	this.shape_11.setTransform(-12.9,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgLAtQgFgBgFgEQgEgEgCgEQgCgFAAgFIABgIIADgHIAGgEIAHgDIAAgBIgGgCIgEgGIgDgGIgBgHQAAgKAHgHQAIgHALAAQALAAAIAHQAEADACAFQACADAAAGIgBAHIgDAFIgEAGIgHADIAAABQAEAAADACIAGAEQADADABAEIABAIQAAAGgCAFQgCAEgFAEQgEAEgFABQgGACgGAAQgFAAgGgCgAgHAFIgGADQgDADgBACQgBADAAAEQAAADABADIAEAGIAGADQAEACADAAQAEAAAEgCIAGgDIAEgFIABgHQAAgEgBgDIgEgFQgCgCgEgBIgGgBIgCAAIgHABgAgGgiIgFADIgDAEIgBAGIABAGQABADACACIAFAEIAFABIADAAIAFgBIAFgEQACgCABgDIABgGQAAgDgBgDQgBgDgDgBIgFgDIgGgCIgGACg");
	this.shape_12.setTransform(-23.2,32);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AAEAuIAAhMIgMALIgGgJIAVgRIAHAAIAABbg");
	this.shape_13.setTransform(-30,31.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC4600").s().p("AgjA4IAAhvIBAAAIAAASIgtAAIAAAZIAPgBQAIAAAHACQAHADAFAEQAFAEACAGQADAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgIACQgIACgJAAgAgQAGIAAAfIANABQAEAAAEgBQAEgBADgDQACgCABgDQACgDAAgEQAAgDgCgDQgBgDgCgDIgGgDIgIgBg");
	this.shape_14.setTransform(33.1,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FC4600").s().p("AgYA3QgEgCgCgCIAHgQQAEACAEABQAEAAADgCIAEgGIACgEIgyhRIAWAAIAkA9IAbg9IAUAAIgmBVIgGALIgHAIIgHAGQgFABgFAAIgJgBg");
	this.shape_15.setTransform(22.5,51.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC4600").s().p("AgkA4IAAhvIAfAAQAIAAAMADQAIADAFAFQAFAFADAHQABAGAAAHQABAHgDAHQgCAFgGAFQgFAFgHADQgLADgGAAIgPAAIAAAogAgRgkIAAAiIAOABIAHgBIAHgDQADgDACgDQABgEAAgEQAAgFgBgDQgCgDgDgCIgGgEIgHgBg");
	this.shape_16.setTransform(12.6,51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNQgCgHgBgRQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_17.setTransform(-0.5,51.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC4600").s().p("AgLA4IgJgDIgIgFIgHgHIALgOQADAFAHADQAGADAHAAQADAAADgBIAGgEIAEgGIABgHIgCgJQgBgDgDgDQgDgDgFgBQgDgBgGAAIgLABIgHACIAHg7IA0AAIAAASIgkAAIgDAXIAFgBQAIAAAGACQAHADAEAFQAFAEADAGQADAGAAAJQAAAIgDAIQgDAHgGAFQgFAFgHACQgHADgHAAIgJgBg");
	this.shape_18.setTransform(-9.2,51.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNQgCgHgBgRQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_19.setTransform(-17.6,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC4600").s().p("AACA4IAAhVIgMALIgKgQIAbgVIAOAAIAABvg");
	this.shape_20.setTransform(-29.1,51.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC4600").s().p("AADA4IAAhVIgNALIgKgQIAbgVIAOAAIAABvg");
	this.shape_21.setTransform(-35.3,51.4);

	this.instance = new lib._5143100();
	this.instance.parent = this;
	this.instance.setTransform(-105,-172,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide2, new cjs.Rectangle(-105,-172,208,238.3), null);


(lib.slide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAYA1IAAgtIgvAAIAAAtIgTAAIAAhoIATAAIAAArIAvAAIAAgrIATAAIAABog");
	this.shape.setTransform(41.9,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA1IgKgDIgKgEIgHgHQgFgDgCgFIgFgJQgCgFgBgGQgBgFAAgGIABgKIADgKIAEgKIAGgIIAHgGIAKgFIALgDIALgBQAHAAALADQAJADAFAFIgIANQgGgEgEgBQgHgCgHAAQgIAAgEADQgHACgFAFQgEAFgCAHQgEAHAAAHQAAAIAEAHQACAGAFAGQAEAFAIACQAFADAIAAQAHAAAGgCQAHgDAFgDIAHANIgGAFIgIAEQgNADgHAAIgKgBg");
	this.shape_1.setTransform(31.5,7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATA1IgcgoIgNAAIAAAoIgSAAIAAhoIAggBQAHAAAKADQAHACAFAFQAEAEACAGQACAGAAAHQAAAGgCAGQgCAFgDACQgDAEgEACQgDADgDABIAgArgAgWgiIAAAfIAMAAIAIgBQADgBACgCQADgCACgDIABgHIgBgGIgDgFIgFgDIgJgBg");
	this.shape_2.setTransform(22.1,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPAzIgIgEIgHgFIgFgHIgEgIQgCgEAAgFIgBgLIAAg7IASAAIAAA3QAAAIACAGQABAGAEAEQADAFAFACQAFACAFAAQAGAAAFgCQAEgCADgEQADgEACgGIABgNIAAg5IASAAIAAA8IgBALIgCAKIgEAIIgFAGIgHAFIgHADQgHACgJAAQgLgBgFgBg");
	this.shape_3.setTransform(10.9,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AghA1IAAhoIAegBQAIAAAHACQAGACAFAEQAEADACAFQACAEAAAGIgBAIQgBAEgDADQgBADgDACIgGAEIAHACIAGAFIAEAHQABAEAAAFQAAAJgDAGQgDAFgFAFQgFAEgIABQgGACgIAAgAgPAjIAMABIAIgBIAGgDQACgCABgDQACgDAAgDQAAgDgCgDIgDgEIgGgDIgHAAIgNAAgAgPgiIAAAbIANAAQAGgBAEgDIADgEIABgHIgBgFIgDgFQgFgCgGAAg");
	this.shape_4.setTransform(0.9,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIA1IAAgsIgmg8IAWAAIAZAsIAZgsIAVAAIgmA8IAAAsg");
	this.shape_5.setTransform(-11.8,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATA1IgcgoIgNAAIAAAoIgSAAIAAhoIAggBQAHAAAKADQAHACAFAFQAEAEACAGQACAGAAAHQAAAGgCAGQgCAFgDACQgDAEgEACQgDADgDABIAgArgAgWgiIAAAfIAMAAIAIgBQADgBACgCQADgCACgDIABgHIgBgGIgDgFIgFgDIgJgBg");
	this.shape_6.setTransform(-20.8,6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKA1IgLgDIgJgEIgIgHQgEgDgCgFIgFgJIgDgLQgCgFAAgGIACgKIADgLIAEgJIAHgIIAIgGIAJgFIAKgDIALgBIALABIALADQAFABAEAEIAIAFIAHAIIAFAJIADALIABALIgBALIgDAKIgFAKIgHAIIgIAHIgJAEIgLADIgLABIgKgBgAgNghQgGADgFAFQgFAEgCAHQgDAHAAAHQAAAIADAGQACAHAFAGQAFAFAGACQAHADAGAAQAIAAAHgDQAGgCAFgGQAFgFACgHQACgGAAgIQAAgHgCgHQgDgHgFgEQgFgFgGgDQgHgDgHAAQgGAAgHADg");
	this.shape_7.setTransform(-32.5,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIA1IAAhXIgiAAIAAgRIBVAAIAAARIgiAAIAABXg");
	this.shape_8.setTransform(-43.1,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(252,70,0,0.6)").ss(1,1,1).p("AmEAAIMJAA");
	this.shape_9.setTransform(0,31.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgSAuIgKgBIAAhaIAzAAIAAALIgnAAIAAAaIANgBQAHAAAGACQAGACAEADQAEADADAFQACAFAAAGQgBAHgCAFQgCAGgFADQgFAEgGACQgHACgGAAgAgQABIAAAiIAMAAIAJgBQAEgBADgCIAEgGQACgDAAgEQAAgEgCgEIgEgFQgDgCgEgBQgEgCgEAAg");
	this.shape_10.setTransform(29.4,32);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgSAsIgFgCIAEgJQADACAEAAQAEAAACgCQADgDACgEIABgDIgohEIAMAAIAhA5IAZg5IALAAIgfBFIgFAKIgFAHIgFADIgHACIgGgCg");
	this.shape_11.setTransform(20.8,32);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgcAuIAAhaIAMAAIAMgBQAIAAAHADQAGACAEAEQAEAEACAFQACAFAAAGQAAAMgJAHQgEAEgGACQgGACgHAAIgOAAIAAAjgAgRgiIAAAiIAOABIAIgBIAGgDQADgCACgEQABgDAAgEQAAgFgBgDQgBgDgDgCQgDgDgEgBQgEgBgEAAg");
	this.shape_12.setTransform(13,31.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgGAuIgFgDIgGgDIgEgGQgDgHgCgIQgCgFAAgOQAAgJACgJQACgIADgHIAEgGIAFgDIAGgDIAGgBIAHABIAGADIAFADIAEAGQAIAMgBAVQABALgCAJQgDAKgDAEIgEAGIgFADIgFADIgIABIgGgBgAgHghQgDACgDAEQgCAFgBAHQgCAHABAIQgBAJACAHQABAHACAFQADAEADACQAEADADAAQAFAAAEgDQADgCADgEQACgFABgHIAAgQIAAgPQgCgHgCgFQgCgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_13.setTransform(2.2,32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgGAuIgGgDIgEgDIgFgGQgDgHgCgIQgCgFAAgOQAAgJACgJQACgIADgHIAEgGIAFgDIAGgDIAGgBIAHABIAGADIAFADIAEAGQAIAMgBAVQABALgCAJQgDAKgDAEIgDAGIgGADIgFADIgHABIgHgBgAgHghQgEACgCAEQgCAFgBAHQgCAHABAIQgBAJACAHQABAHACAFQACAEAEACQAEADAEAAQAEAAAEgDQADgCACgEQADgFABgHIABgQIgBgPQgBgHgDgFQgCgEgDgCQgEgDgFAAQgDAAgEADg");
	this.shape_14.setTransform(-5.1,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgLAtQgFgBgFgEQgEgEgCgEQgCgFAAgFIABgIIADgHIAGgEIAHgDIAAgBIgGgCIgEgGIgDgGIgBgHQAAgKAHgHQAIgHALAAQALAAAIAHQAEADACAFQACADAAAGIgBAHIgDAFIgEAGIgHADIAAABQAEAAADACIAGAEQADADABAEIABAIQAAAGgCAFQgCAEgFAEQgEAEgFABQgGACgGAAQgFAAgGgCgAgHAFIgGADQgDADgBACQgBADAAAEQAAADABADIAEAGIAGADQAEACADAAQAEAAAEgCIAGgDIAEgFIABgHQAAgEgBgDIgEgFQgCgCgEgBIgGgBIgCAAIgHABgAgGgiIgFADIgDAEIgBAGIABAGQABADACACIAFAEIAFABIADAAIAFgBQADgBACgDQACgCABgDIABgGQAAgDgBgDQgBgDgDgBIgFgDIgGgCIgGACg");
	this.shape_15.setTransform(-12.6,32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgbAuIAAgJIAagbIAKgQIADgHIABgHIgBgGIgDgFIgFgDIgFAAIgGAAIgEADIgEAFIgCAGIgJgEIADgJIAGgHIAIgEQAEgBAFAAQAFAAAEABQAFADADADQAEADABAEQACAFAAAEIgBAJIgEAJQgCAFgDAEIgHAKIgLAMIgJAJIApAAIAAAKg");
	this.shape_16.setTransform(-22.8,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgIAuIgIgDIgHgFIgEgHIAGgHIAEAFIAFAEQACACAEAAIAGACQAEAAADgCIAFgDIAEgGIABgGIgBgHIgEgFIgGgDQgDgBgDAAIgHAAIAAgJIAGAAQACAAACgBIAGgEIADgEIABgHIgBgGIgCgEIgFgDIgFgCQgMAAgHAMIgGgHIAEgHIAGgEIAHgDIAIgBQAFAAAFACQAFACADACIAFAIQACAEAAAFIgBAIIgDAFIgEAGIgHADIAAAAQAEABAEABIAFAFQADADABAEIABAIQAAAFgCAFQgCAFgEAEQgEADgFACQgFACgGAAIgIgBg");
	this.shape_17.setTransform(-29.8,32);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC4600").s().p("AgjA4IAAhvIBAAAIAAASIgtAAIAAAZIAPgBQAIAAAHACQAHADAFAEQAFAEACAGQADAGAAAIQAAAJgDAGQgDAHgFAFQgGAFgIACQgIACgJAAgAgQAGIAAAfIANABQAEAAAEgBQAEgBADgDQACgCABgDQACgDAAgEQAAgDgCgDQgBgDgCgDIgGgDIgIgBg");
	this.shape_18.setTransform(34.3,51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC4600").s().p("AgYA3QgEgCgCgCIAHgQQAEACAEABQAEAAADgCIAEgGIACgEIgyhRIAWAAIAkA9IAbg9IAUAAIgmBVIgGALIgHAIIgHAGQgFABgFAAIgJgBg");
	this.shape_19.setTransform(23.7,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC4600").s().p("AglA4IAAhvIAhAAQAHAAAMADQAIADAFAFQAFAFACAHQACAGAAAHQAAAHgCAHQgDAFgFAFQgFAFgHADQgLADgGAAIgPAAIAAAogAgRgkIAAAiIAOABIAIgBIAGgDQADgDACgDQABgEAAgEQAAgFgBgDQgBgDgDgCIgHgEIgHgBg");
	this.shape_20.setTransform(13.8,51.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNQgCgHgBgRQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_21.setTransform(0.7,51.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FC4600").s().p("AgIA4IgHgDIgHgFIgFgGQgDgFgEgNQgCgHgBgRQAAgMADgKQABgHAGgLIAFgHIAGgFIAIgDQAEgBAEAAIAJABIAIADIAGAFIAFAHQAGALABAHQADAKAAAMQAAANgDALQgDANgDAFIgGAGIgGAFIgIADIgJABIgIgBgAgHgkQgDACgDAFQgCAFgBAIIgBAQIABASQABAIADAFQACAFADACQAEACADAAQAFAAAEgCQADgCACgFQACgFABgIIABgSQAAgJgBgIQgBgHgCgFQgCgFgEgCQgDgDgFAAQgEAAgDADg");
	this.shape_22.setTransform(-8.2,51.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FC4600").s().p("AgYA4IAlhdIgvAAIAAgSIBFAAIAAANIgnBig");
	this.shape_23.setTransform(-16.6,51.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC4600").s().p("AgYArQAIgCAHgDQAHgEAFgEQAFgFADgHQAEgGACgIQgEAFgFACQgGADgGAAQgHAAgGgDQgGgCgFgFQgEgEgDgGQgCgGAAgIQAAgIADgHQADgHAFgFQAGgFAGgCQAHgDAHAAQAIAAAHADQAIADAFAGQAFAGADAHQACAIAAAKIgBAOQgBAHgCAHIgFAMIgHAKIgJAIIgKAHIgJAEIgMADgAgHglIgGAEIgEAFIgBAHIABAHIAEAGQACADAEABQADACAEAAQAHAAAFgEQAEgDADgFIgBgKQgCgEgCgDQgDgEgEgCQgDgCgEAAQgEAAgDACg");
	this.shape_24.setTransform(-28.4,51.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FC4600").s().p("AACA4IAAhVIgMALIgKgQIAcgVIANAAIAABvg");
	this.shape_25.setTransform(-36.5,51.4);

	this.instance = new lib._5127852();
	this.instance.parent = this;
	this.instance.setTransform(-107,-182,0.53,0.53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.slide1, new cjs.Rectangle(-107,-182,212,248.3), null);


(lib.salelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAIIgBAAIgCgHIgBAHIAAAAIgCAAIgBgBIAAgBIAEgGIgGACIgCgBIAAgBIAAAAIACAAIAGAAIgEgEIAAgCIABgBIABAAIABAAIAAABIABADIAAADIACgGIABgBIABAAIABAAIABABIgCADIgDADIAHAAIAAAAIABAAIgBABIAAABIgHgCIABADIADADIABABIgBABg");
	this.shape.setTransform(111.4,-70.2,2.731,2.731);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuLHYQhFgWgqgaIgnAtIgyAAIgGlGIAxAAQAMAkAeA+QAaAxAiAqQAiArAtAbQAsAbA7AAQBNAAAqgqQAqgqAAhBQAAg1gjgkQglgkhJgZIhZghQglgMgngRQhUgjgnhFQgohBAAhUQAAg5AVgtQATguAqgqQAmgkA8gWQA7gXBFAAQBFAAA7AUQA6AVAjAVIAkgmIAxAAIAFE0IgxAAQgNgkgchCQgXg2gaggQgcgjglgYQgogWgvABQg/gBgmAmQgpApAAA4QAAA1AiAjQAjAiBJAbIBXAgQAvARAgANQBWAnApA6QAsBAAABcQAAA5gZA5QgaA1gqAlQgsAng+AXQg/AWhOAAQhJAAhDgWgAKsHPQg+gagpguQgogsgTg+QgVg8AAhJQAAg/AWg+QATg1ArgzQApgwA5gYQA8gcBLAAQBPAAA1AVQA0AVAjAnQAfAjAQAyQAPAwAAA2IAAAqImGAAQAACCAtBDQAuBFBjAAQA2AAArgiQAugiAdgwIArAkQgTAjgdAgQgdAigkAWQguAbghAJQgmAMg0AAQhXAAg9gbgALihNQgaAvgDBtIC5gCQAAgmgEgoQgBgogKgZQgJgfgSgPQgQgPgbAAQgsAAgbAygABiHqQhCAAglgaQghgYgLgpIgEAAQggAggGAFQgWARgSAIQgVAMgfAJQgUAHgyAAQhDgBgvgrQgvgqAAhJQAAgtAKgZQAKgdATgWQARgUAYgOQATgMAfgNQA3gWBFgWQBCgTApgUIgDhnQgBgSgIgaQgKgWgPgMQgUgOgaAAQgaAAgRAJQgQAHgLAIIAJAnQAJAXAAAbQAAAHgFATQgFARgKAKQgRANgOAGQgPAHgkAAQgvAAgZgaQgZgaAAgoQAAgjAZgeQAggfAggPQAmgUAtgIQAugMAqAAQA4AAAuAHQAuAJAmAWQAkAYAUApQAWArAABBIgDCrQgDBCAABfQAAAeAIAQQAJASAPAGQAIAEAXACIAMAAQALgBAPgFQAUgHAFgQQAHgLAAgaIABq/QAAgUgJgYQgJgVgPgMQgMgHgYgHQgagJgOAAIAAgwIEjgQIAJAKIgCNQQAAAaAIAMQAIAQAQAIIAYAJQAJAEAWADIAAAvgAh2CYQglAVgPAMQgWAUgLAZQgNAcAAAlQAAAxAVAYQAUAVAeABQAjgBATgOQAUgOAPgVIADjXQggAMghAPg");
	this.shape_1.setTransform(0,-54.2,1.074,1.074);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("An9KLQifj0gCmUQAAmXCnj3QC1kNFKAAQFRAACuESQCYDwAAGPQAAGqioD0QixEClLAAQlIAAiwkOgAi2nIQhHCfACEsQgCEsBFCaQBCCVB7AAQB7AAA/iYQBAibAAktQAAkphAiYQg/iah9AAQh3AAhCCVg");
	this.shape_2.setTransform(27.2,60.7,0.506,0.506);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmpNrQh7gchSgrIBKk4QBHAiBkAYQB5AeBvAAQCRAABhhBQByhKAAiFQAAkon1AAQiCAAhvARIB2umIPUAAIAAFXIqxAAIgnESQAngGBMAAQCFAAB1AfQB+AhBcBBQBnBGA4BsQA5B0AACYQAAEEjKCxQjXC8lbAAQiYAAiLgfg");
	this.shape_3.setTransform(-42.2,61.4,0.506,0.506);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AklGqIHUtQIB1AAInTNQgACKFlQhEhHAAhvQAAhtBAhIQBEhNBvABIACAAQBugBBABJQA8BCAABpQAAB7hKBKQhEBDhkAAQhmAAhDhEgAD+BMQgRAjAAA9QAAA8ATAjQATAlAlAAQAigBASghQASgjAAhBQAAiEhHAAIgBAAQglAAgTAmgAngAPQhEhGAAhuQAAhuBAhJQBEhNBvAAIABAAQBvgBBABJQA8BDAABqQAAB6hKBJQhEBDhkAAQhnABhChEgAlskJQgRAiAAA9QAAA9ATAiQATAlAlAAQBGAAAAiEQAAg9gQgjQgSglglgBIgCAAQglAAgSAng");
	this.shape_4.setTransform(91.9,82.2,0.506,0.506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.salelogo, new cjs.Rectangle(-119.7,-107.2,239.4,214.5), null);


(lib.sale_coin_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FC4600").ss(1,1,1).p("AVmAAQAAI9mVGUQmUGVo9AAQo8AAmVmVQmUmUAAo9QAAo7GUmVQGVmVI8AAQI9AAGUGVQGVGVAAI7g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvRPRQmUmUAAo9QAAo7GUmVQGVmVI8AAQI9AAGUGVQGVGVAAI7QAAI9mVGUQmUGVo9AAQo8AAmVmVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sale_coin_bg, new cjs.Rectangle(-139.1,-139.1,278.4,278.4), null);


(lib.sale_coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC4600").s().p("AwWQXQmxmzAApkQAApjGxmzQGzmxJjAAQJkAAGzGxQGxGzAAJjQAAJkmxGzQmzGxpkAAQpjAAmzmxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.sale_coin, new cjs.Rectangle(-148,-148,296,296), null);


(lib.sale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADAIIgBAAIgCgHIgBAHIAAAAIgCAAIgBgBIAAgBIAEgGIgGACIgCgBIAAgBIAAAAIACAAIAGAAIgEgEIAAgCIABgBIABAAIABAAIAAABIABADIAAADIACgGIABgBIABAAIABAAIABABIgCADIgDADIAHAAIAAAAIABAAIgBABIAAABIgHgCIABADIADADIABABIgBABg");
	this.shape.setTransform(94.7,-13.6,2.321,2.321);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuLHYQhFgWgqgaIgnAtIgyAAIgGlGIAxAAQAMAkAeA+QAaAxAiAqQAiArAtAbQAsAbA7AAQBNAAAqgqQAqgqAAhBQAAg1gjgkQglgkhJgZIhZghQglgMgngRQhUgjgnhFQgohBAAhUQAAg5AVgtQATguAqgqQAmgkA8gWQA7gXBFAAQBFAAA7AUQA6AVAjAVIAkgmIAxAAIAFE0IgxAAQgNgkgchCQgXg2gaggQgcgjglgYQgogWgvABQg/gBgmAmQgpApAAA4QAAA1AiAjQAjAiBJAbIBXAgQAvARAgANQBWAnApA6QAsBAAABcQAAA5gZA5QgaA1gqAlQgsAng+AXQg/AWhOAAQhJAAhDgWgAKsHPQg+gagpguQgogsgTg+QgVg8AAhJQAAg/AWg+QATg1ArgzQApgwA5gYQA8gcBLAAQBPAAA1AVQA0AVAjAnQAfAjAQAyQAPAwAAA2IAAAqImGAAQAACCAtBDQAuBFBjAAQA2AAArgiQAugiAdgwIArAkQgTAjgdAgQgdAigkAWQguAbghAJQgmAMg0AAQhXAAg9gbgALihNQgaAvgDBtIC5gCQAAgmgEgoQgBgogKgZQgJgfgSgPQgQgPgbAAQgsAAgbAygABiHqQhCAAglgaQghgYgLgpIgEAAQggAggGAFQgWARgSAIQgVAMgfAJQgUAHgyAAQhDgBgvgrQgvgqAAhJQAAgtAKgZQAKgdATgWQARgUAYgOQATgMAfgNQA3gWBFgWQBCgTApgUIgDhnQgBgSgIgaQgKgWgPgMQgUgOgaAAQgaAAgRAJQgQAHgLAIIAJAnQAJAXAAAbQAAAHgFATQgFARgKAKQgRANgOAGQgPAHgkAAQgvAAgZgaQgZgaAAgoQAAgjAZgeQAggfAggPQAmgUAtgIQAugMAqAAQA4AAAuAHQAuAJAmAWQAkAYAUApQAWArAABBIgDCrQgDBCAABfQAAAeAIAQQAJASAPAGQAIAEAXACIAMAAQALgBAPgFQAUgHAFgQQAHgLAAgaIABq/QAAgUgJgYQgJgVgPgMQgMgHgYgHQgagJgOAAIAAgwIEjgQIAJAKIgCNQQAAAaAIAMQAIAQAQAIIAYAJQAJAEAWADIAAAvgAh2CYQglAVgPAMQgWAUgLAZQgNAcAAAlQAAAxAVAYQAUAVAeABQAjgBATgOQAUgOAPgVIADjXQggAMghAPg");
	this.shape_1.setTransform(0,0,0.913,0.913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sale, new cjs.Rectangle(-101.7,-45.1,203.5,90.2), null);


(lib._50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An9KLQifj0gCmUQAAmXCnj3QC1kNFKAAQFRAACuESQCYDwAAGPQAAGqioD0QixEClLAAQlIAAiwkOgAi2nIQhHCfACEsQgCEsBFCaQBCCVB7AAQB7AAA/iYQBAibAAktQAAkphAiYQg/iah9AAQh3AAhCCVg");
	this.shape.setTransform(3.7,0,0.43,0.43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmpNrQh7gchSgrIBKk4QBHAiBkAYQB5AeBvAAQCRAABhhBQByhKAAiFQAAkon1AAQiCAAhvARIB2umIPUAAIAAFXIqxAAIgnESQAngGBMAAQCFAAB1AfQB+AhBcBBQBnBGA4BsQA5B0AACYQAAEEjKCxQjXC8lbAAQiYAAiLgfg");
	this.shape_1.setTransform(-55.2,0.7,0.43,0.43);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AklGqIHUtQIB1AAInTNQgACKFlQhEhHAAhvQAAhtBAhIQBEhNBvABIACAAQBugBBABJQA8BCAABpQAAB7hKBKQhEBDhkAAQhmAAhDhEgAD+BMQgRAjAAA9QAAA8ATAjQATAlAlAAQAigBASghQASgjAAhBQAAiEhHAAIgBAAQglAAgTAmgAngAPQhEhGAAhuQAAhuBAhJQBEhNBvAAIABAAQBvgBBABJQA8BDAABqQAAB6hKBJQhEBDhkAAQhnABhChEgAlskJQgRAiAAA9QAAA9ATAiQATAlAlAAQBGAAAAiEQAAg9gQgjQgSglglgBIgCAAQglAAgSAng");
	this.shape_2.setTransform(58.7,18.3,0.43,0.43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._50, new cjs.Rectangle(-82.3,-39.6,164.6,79.2), null);


(lib.sale50_hor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sale();
	this.instance.parent = this;
	this.instance.setTransform(-58.2,0.1,0.674,0.674,0,0,0,0.1,0.1);

	this.instance_1 = new lib._50();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.4,3.7,0.674,0.674,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sale50_hor, new cjs.Rectangle(-126.7,-30.4,253.5,60.8), null);


// stage content:
(lib.SALE50_TSUM_ADBUTTON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_68 = new cjs.Graphics().p("AgTOdQgIl/AAoeIAAAAQAAocAImAIAAAAQAJl+AKAAIAAAAQALAAAJF+IAAAAQAIGAAAIcIAAAAQAAIegIF/IAAAAQgJF+gLAAIAAAAQgKAAgJl+g");
	var mask_graphics_69 = new cjs.Graphics().p("AjIOdQhTl/AAoeIAAAAQAAocBTmAIAAAAQBTl+B1AAIAAAAQB2AABSF+IAAAAQBUGAAAIcIAAAAQAAIehUF/IAAAAQhSF+h2AAIAAAAQh1AAhTl+g");
	var mask_graphics_70 = new cjs.Graphics().p("Al9OdQidl/AAoeIAAAAQAAocCdmAIAAAAQCel+DfAAIAAAAQDgAACdF+IAAAAQCeGAAAIcIAAAAQAAIeieF/IAAAAQidF+jgAAIAAAAQjfAAiel+g");
	var mask_graphics_71 = new cjs.Graphics().p("AoyOdQjol/AAoeIAAAAQAAocDomAIAAAAQDpl+FJAAIAAAAQFKAADoF+IAAAAQDpGAAAIcIAAAAQAAIejpF/IAAAAQjoF+lKAAIAAAAQlJAAjpl+g");
	var mask_graphics_72 = new cjs.Graphics().p("ArnOdQkzl/AAoeIAAAAQAAocEzmAIAAAAQE0l+GzAAIAAAAQG0AAEzF+IAAAAQE0GAAAIcIAAAAQAAIek0F/IAAAAQkzF+m0AAIAAAAQmzAAk0l+g");
	var mask_graphics_73 = new cjs.Graphics().p("AucOdQl+l/AAoeIAAAAQAAocF+mAIAAAAQF/l+IdAAIAAAAQIeAAF+F+IAAAAQF/GAAAIcIAAAAQAAIel/F/IAAAAQl+F+oeAAIAAAAQodAAl/l+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(68).to({graphics:mask_graphics_68,x:150.1,y:149.9}).wait(1).to({graphics:mask_graphics_69,x:149.6,y:149.9}).wait(1).to({graphics:mask_graphics_70,x:149.1,y:149.9}).wait(1).to({graphics:mask_graphics_71,x:148.7,y:149.9}).wait(1).to({graphics:mask_graphics_72,x:148.2,y:149.9}).wait(1).to({graphics:mask_graphics_73,x:150,y:150}).wait(257));

	// Layer 9
	this.instance = new lib.slide1();
	this.instance.parent = this;
	this.instance.setTransform(150,194.5,0.06,1,0,0,0,0.8,0.1);
	this.instance._off = true;

	this.instance_1 = new lib.slide2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(151,194.5,1,1,0,0,0,0,0.1);

	this.instance_2 = new lib.slide3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151,194.5,1,1,0,0,0,0,0.1);

	this.text = new cjs.Text("Распродажа – скидки до 50% \nс 15.07.2017 по 31.07.2017. \nОАО «ТД ЦУМ», Москва, \nул. Петровка, д. 2, \nОГРН 1027739063208.\n\nКоличество товара ограничено. \nНе является публичной офертой. \nРеклама. Все подробности \nна tsum.ru.", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 258;
	this.text.parent = this;
	this.text.setTransform(150,85.3);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,161.3);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,150.8,0.07,0.07,0,0,0,0.7,0.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.text,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},68).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_1}]},70).to({state:[{t:this.instance_2}]},72).to({state:[{t:this.text}]},73).to({state:[{t:this.instance_3}]},33).to({state:[{t:this.instance_4}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({regX:0,scaleX:1},5,cjs.Ease.cubicInOut).to({_off:true},70).wait(187));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(321).to({_off:false},0).to({_off:true,regX:0.7,regY:0.7,scaleX:0.07,scaleY:0.07,y:150.8},8).wait(1));

	// Layer 8
	this.instance_5 = new lib.sale_coin_bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,150,0.017,0.98,0,0,0,3,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(68).to({_off:false},0).to({regX:0,scaleX:0.98},5,cjs.Ease.cubicInOut).wait(248).to({regX:1,regY:1,scaleX:0.05,scaleY:0.05},8).wait(1));

	// Layer 2
	this.instance_6 = new lib.translate();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,176.4,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(22).to({_off:false},0).to({scaleX:1,scaleY:1,y:171.4,alpha:1},10,cjs.Ease.cubicInOut).wait(30).to({regX:1.2,scaleX:0.04},5,cjs.Ease.cubicInOut).to({_off:true},1).wait(262));

	// Layer 4
	this.TsumLogo = new lib.tsumlogo();
	this.TsumLogo.parent = this;
	this.TsumLogo.setTransform(150.1,277.4,0.198,0.198,0,0,0,0.2,1);
	this.TsumLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.TsumLogo).wait(22).to({_off:false},0).to({regY:1.1,scaleX:0.58,scaleY:0.58,y:237.6},10,cjs.Ease.quadInOut).wait(30).to({regX:2.1,scaleX:0.02,x:150},5,cjs.Ease.cubicInOut).to({_off:true},1).wait(262));

	// Layer 6
	this.instance_7 = new lib.sale();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,111.8);
	this.instance_7._off = true;

	this.instance_8 = new lib.sale50_hor();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154.5,126.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(22).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.67,scaleY:0.67,x:96.3,y:126.6},10,cjs.Ease.cubicInOut).to({_off:true},30).wait(268));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(62).to({_off:false},0).to({regX:1.2,scaleX:0.04,x:150.2},5,cjs.Ease.cubicInOut).to({_off:true},1).wait(262));

	// Layer 5
	this.instance_9 = new lib._50();
	this.instance_9.parent = this;
	this.instance_9.setTransform(169.4,209.4);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.67,scaleY:0.67,x:225.8,y:130.2},10,cjs.Ease.cubicInOut).to({_off:true},30).wait(268));

	// Layer 3
	this.SaleLogo = new lib.salelogo();
	this.SaleLogo.parent = this;
	this.SaleLogo.setTransform(150.2,150,0.03,0.03);
	this.SaleLogo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.SaleLogo).wait(1).to({_off:false},0).to({regX:0.2,scaleX:0.92,scaleY:0.92,y:157.9},6,cjs.Ease.cubicInOut).to({regY:0.1,scaleX:0.85,scaleY:0.85,y:158},2,cjs.Ease.cubicInOut).to({_off:true},13).wait(308));

	// Layer 1
	this.instance_10 = new lib.sale_coin();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.1,150.1,0.04,0.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.01,scaleY:1.01,x:150,y:150},6,cjs.Ease.cubicInOut).to({scaleX:0.98,scaleY:0.98},4,cjs.Ease.cubicInOut).wait(52).to({regX:1.3,scaleX:0.04},5,cjs.Ease.cubicInOut).to({_off:true},1).wait(262));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(294.2,294.2,11.8,11.8);
// library properties:
lib.properties = {
	id: 'AC641640054A423F8DFD89A7374C2E79',
	width: 300,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"index_atlas_.jpg", id:"index_atlas_"}
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
an.compositions['AC641640054A423F8DFD89A7374C2E79'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;