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
		{src:"back.png", id:"back"},
		{src:"back_s.png", id:"back_s"},
		{src:"disk.png", id:"disk"},
		{src:"noise1.jpg", id:"noise1"},
		{src:"road.png", id:"road"},
		{src:"tiguan.png", id:"tiguan"}
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



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,186);


(lib.back_s = function() {
	this.initialize(img.back_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,121);


(lib.disk = function() {
	this.initialize(img.disk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.noise1 = function() {
	this.initialize(img.noise1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,191);


(lib.road = function() {
	this.initialize(img.road);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,420,123);


(lib.tiguan = function() {
	this.initialize(img.tiguan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,537,168);


(lib.Символ789 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.noise1();
	this.instance.setTransform(0,7.4,0.424,1.408,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,105.1,275.3);


(lib.Символ19m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.059)","rgba(255,255,211,0.2)","rgba(255,255,204,0)"],[0,0.875,1],0,0,0,0,0,68.1).s().p("AlwIwQg3glgxgyQjFjEABkVQgBkUDFjEQAxgyA3glQCihtDOAAQEVgBDEDFQDFDEAAEUQAAEVjFDEQjEDFkVAAQjOAAiihug");
	this.shape.setTransform(120,137);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53,70,134,134);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.165,1],0,0,0,0,0,37.2).s().p("AkEEFQhshsAAiZQAAiYBshsQBshsCYAAQCZAABsBsQBsBsABCYQgBCZhsBsQhsBsiZABQiYgBhshsg");
	this.shape.setTransform(281.1,55.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.165,1],0,0,0,0,0,39.2).s().p("AkTEUQhxhzgBihQABigBxhzQBzhxCgAAQChAAByBxQBzBzgBCgQABChhzBzQhyBxihAAQigAAhzhxg");
	this.shape_1.setTransform(106,62);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.165,1],0,0,0,0,0,63.4).s().p("Am8G9Qi5i5AAkEQAAkDC5i5QC5i5EDAAQEEAAC5C5QC5C5AAEDQAAEEi5C5Qi5C5kEAAQkDAAi5i5g");
	this.shape_2.setTransform(63,63);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.1,126);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAtQgKgFgGgJQgHgJgCgMIgVAAIAAAmIgbAAIAAhfIAbAAIAAAmIAVAAQACgMAHgJQAFgJALgFQAJgFAOgBQARABAMAGQAKAHAHAMQAFALAAANQAAAOgFALQgHAMgKAHQgMAGgRABQgOAAgJgGgAAHgUQgHAHAAANQAAAOAHAHQAFAIALAAQALAAAGgIQAGgHAAgOQAAgNgGgHQgGgHgLAAQgLAAgFAHg");
	this.shape.setTransform(47.2,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpAwIAAhfIAbAAIAAAhIASAAQATAAAJAIQAKAGAAAQQAAAQgKAIQgJAIgTAAgAgOAbIAQAAQAHAAADgDQACgEAAgEIgBgFQgBgDgDgCQgCgCgFAAIgQAAg");
	this.shape_1.setTransform(33.7,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAwIAAhKIgcAAIAAgVIBSAAIAAAVIgdAAIAABKg");
	this.shape_2.setTransform(23.6,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAsQgLgGgGgLQgGgMAAgPQAAgOAGgMQAGgLALgGQAMgGAOgBIARACIANAEIgFAVIgKgDQgFgBgHAAQgHAAgGACQgEADgEAHQgDAGgBAJQABAKADAGQAEAHAEADQAGADAHAAIAMgCIAKgDIAFAVIgNAEQgIACgJAAQgOAAgMgHg");
	this.shape_3.setTransform(14.2,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAsQgMgHgFgMQgGgLAAgOQAAgNAGgLQAFgMAMgHQALgGAPgBQAQABAMAGQALAHAGAMQAFALAAANQAAAOgFALQgGAMgLAHQgMAGgQABQgPgBgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_4.setTransform(3.6,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATAwIAAgmIglAAIAAAmIgaAAIAAhfIAaAAIAAAmIAlAAIAAgmIAaAAIAABfg");
	this.shape_5.setTransform(-8.1,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpAwIAAhfIAbAAIAAAhIASAAQATAAAJAIQAKAGAAAQQAAAQgKAIQgJAIgTAAgAgOAbIAQAAQAHAAADgDQACgEAAgEIgBgFQgBgDgDgCQgCgCgFAAIgQAAg");
	this.shape_6.setTransform(-18.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyAbQAGAAAEgCQAEgDADgGQACgHABgLIACguIBPAAIAABfIgbAAIAAhKIgbAAIgDAbQgBATgFAKQgGALgJAFQgJADgOAAg");
	this.shape_7.setTransform(-30.5,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAvQgIgEgDgHQgEgHAAgJQAAgQALgFQALgIAZAAIAMAAIAAgFQAAgGgDgDQgDgDgEgBIgFAAQgIAAgIACQgIABgIAEIgGgVIASgGQAKgCAMgBQATABAKAKQAKAKAAASIAAAmIABADIACAAIAHAAIAAATIgGABIgIAAQgHAAgFgDQgEgDgDgFIAAAAQgFAEgJAEQgGADgJABQgLAAgHgEgAgPAJQgGADAAAGQAAAGADADQAEACAGAAIAJgBQAGgCAFgDIAAgRIgKAAQgMAAgFADg");
	this.shape_8.setTransform(-41.4,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgGgMQgFgLAAgOQAAgNAFgLQAGgMALgGQAKgHAOgBQAQABAKAFQAKAGAEAJQAFAKAAALIAAAIIgBAHIg/AAQABALAGAFQAHAGAIAAQAJAAAIgCIAOgEIAGATQgHAEgKACQgKADgMAAQgOgBgLgGgAgIgbQgFAEgCAFQgCAFgBAGIAnAAIAAgCIAAgBQABgJgFgFQgEgGgMAAQgFAAgEADg");
	this.shape_9.setTransform(-52.3,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBFIAAiGIAUAAIADAJIABAAIAIgGIAKgEIALgCQAOAAAJAHQAJAHAFALQAFAMAAAOQAAAOgFAKQgFALgJAHQgJAHgOABQgIgBgHgDIgKgGIgBAAIAAAugAgLgsIgJAEIAAAtIAJADIAKACQALAAAFgHQAGgHAAgNQAAgNgGgHQgFgJgLABQgFAAgFABg");
	this.shape_10.setTransform(-63.2,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpAwIAAhfIAbAAIAAAhIASAAQATAAAJAIQAKAGAAAQQAAAQgKAIQgJAIgTAAgAgOAbIAQAAQAHAAADgDQACgEAAgEIgBgFQgBgDgDgCQgCgCgFAAIgQAAg");
	this.shape_11.setTransform(62.4,-5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAsQgLgGgGgLQgGgMAAgPQAAgOAGgMQAGgLALgGQAMgGAOgBIARACIANAEIgFAVIgKgDQgFgBgHAAQgHAAgGACQgEADgEAHQgDAGgBAJQABAKADAGQAEAHAEADQAGADAHAAIAMgCIAKgDIAFAVIgNAEQgIACgJAAQgOAAgMgHg");
	this.shape_12.setTransform(52.2,-5.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXAsQgLgHgGgMQgFgLAAgOQAAgNAFgLQAGgMALgGQAKgHAOgBQAQABAKAFQAKAGAEAJQAFAKAAALIAAAIIgBAHIg/AAQABALAGAFQAHAGAIAAQAJAAAIgCIAOgEIAGATQgHAEgKACQgKADgMAAQgOgBgLgGgAgIgbQgFAEgCAFQgCAFgBAGIAnAAIAAgCIAAgBQABgJgFgFQgEgGgMAAQgFAAgEADg");
	this.shape_13.setTransform(42,-5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAwIAAhKIgdAAIAAgVIBTAAIAAAVIgeAAIAABKg");
	this.shape_14.setTransform(32,-5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAUBGIAAg8IgBAAIgiA8IgeAAIAAheIAbAAIAAA6IAAAAIAig6IAeAAIAABegAgTgtQgIgEgFgIIAIgMQAFADAHACQAGACAGgBQAJABAGgCQAHgBAFgEIAIAMQgFAIgJAEQgIAEgNAAQgKAAgJgEg");
	this.shape_15.setTransform(21.5,-8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAvQgIgEgDgHQgEgHAAgJQAAgQALgFQALgIAZAAIAMAAIAAgFQAAgGgDgDQgDgDgEgBIgFAAQgIAAgIACQgIABgIAEIgGgVIASgGQAKgCAMgBQATABAKAKQAKAKAAASIAAAmIABADIACAAIAHAAIAAATIgGABIgIAAQgHAAgFgDQgEgDgDgFIAAAAQgFAEgJAEQgGADgJABQgLAAgHgEgAgPAJQgGADAAAGQAAAGADADQAEACAGAAIAJgBQAGgCAFgDIAAgRIgKAAQgMAAgFADg");
	this.shape_16.setTransform(10.3,-5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAiA8IgDgYIg9AAIgCAYIgTAAIgEgtIALAAQAEgFACgGQACgEABgIIACgPIACgkIBMAAIAABKIALAAIgEAtgAgIgXIgBAPIgDAMQgBAHgCAEIAhAAIAAg1IgZAAg");
	this.shape_17.setTransform(-1.5,-4.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAxAwIgkgqIAAAAIAAAqIgZAAIAAgqIAAAAIgkAqIgeAAIAAgCIAoguIgmgtIAAgCIAdAAIAjAuIAAAAIAAguIAZAAIAAAuIAAAAIAjguIAdAAIAAACIgmAtIAoAuIAAACg");
	this.shape_18.setTransform(-15.5,-5.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggAvQgIgEgDgHQgEgHAAgJQAAgQALgFQALgIAZAAIAMAAIAAgFQAAgGgDgDQgDgDgEgBIgFAAQgIAAgIACQgIABgIAEIgGgVIASgGQAKgCAMgBQATABAKAKQAKAKAAASIAAAmIABADIACAAIAHAAIAAATIgGABIgIAAQgHAAgFgDQgEgDgDgFIAAAAQgFAEgJAEQgGADgJABQgLAAgHgEgAgPAJQgGADAAAGQAAAGADADQAEACAGAAIAJgBQAGgCAFgDIAAgRIgKAAQgMAAgFADg");
	this.shape_19.setTransform(-29,-5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgyAaQAGABAEgDQAEgCADgHQACgGABgLIACgtIBPAAIAABeIgbAAIAAhKIgbAAIgDAbQgBASgFAMQgGAKgJAEQgJAFgOAAg");
	this.shape_20.setTransform(-40.8,-5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAsQgLgGgGgLQgGgMAAgPQAAgOAGgMQAGgLALgGQAMgGAOgBIARACIANAEIgFAVIgKgDQgFgBgHAAQgHAAgGACQgEADgEAHQgDAGgBAJQABAKADAGQAEAHAEADQAGADAHAAIAMgCIAKgDIAFAVIgNAEQgIACgJAAQgOAAgMgHg");
	this.shape_21.setTransform(-51.1,-5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAvQgIgEgDgHQgEgHAAgJQAAgQALgFQALgIAZAAIAMAAIAAgFQAAgGgDgDQgDgDgEgBIgFAAQgIAAgIACQgIABgIAEIgGgVIASgGQAKgCAMgBQATABAKAKQAKAKAAASIAAAmIABADIACAAIAHAAIAAATIgGABIgIAAQgHAAgFgDQgEgDgDgFIAAAAQgFAEgJAEQgGADgJABQgLAAgHgEgAgPAJQgGADAAAGQAAAGADADQAEACAGAAIAJgBQAGgCAFgDIAAgRIgKAAQgMAAgFADg");
	this.shape_22.setTransform(-61.3,-5.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAcBDIAAg4Ig3AAIAAA4IgcAAIAAiFIAcAAIAAA3IA3AAIAAg3IAcAAIAACFg");
	this.shape_23.setTransform(-74,-7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,-22.9,152.6,47.8);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWA7IAAhEQAAgLgFgFQgFgHgKABQgHAAgGADQgGADgEADIAABRIghAAIAAhyIAaAAIAFAMIAAAAIAJgHQAFgEAHgCQAFgCAJAAQAUAAAMAMQALANAAAVIAABHg");
	this.shape.setTransform(93.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoA4QgIgFgEgIQgFgIAAgLQAAgTAOgHQANgKAeAAIAOAAIAAgFQAAgHgDgDQgEgEgFgBIgGgBQgJAAgKACQgLACgIAEIgIgZQAJgEANgDQANgDANAAQAXAAAMAMQANAMAAAXIAAAtIAAADIADABIAJAAIAAAWIgIACIgJAAQgJAAgFgDQgGgEgDgHIAAAAQgHAGgJAEQgJAEgKABQgNAAgKgFgAgTALQgHAEAAAHQAAAHAEADQAEADAHAAQAHAAAGgCQAGgCAGgEIAAgUIgMAAQgOAAgHAEg");
	this.shape_1.setTransform(80.3,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAvQgKgNAAgVIAAhHIAhAAIAABEQgBAKAFAGQAFAHAKgBQAGAAAGgDIALgHIAAhQIAgAAIAAByIgbAAIgDgMIgBAAIgIAGQgFAEgHADQgFACgJAAQgVAAgLgMg");
	this.shape_2.setTransform(66.7,9.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaBRQgLgDgIgFIAJgYQAHAFAJABQAJADALAAQAMAAAHgFQAGgHAAgOIAAgIIAAAAQgGAEgIADQgHADgKABQgRgBgLgHQgLgIgGgNQgGgMAAgRQAAgRAGgNQAGgOALgJQALgHARgBQAGABAHACIAMAFIAIAGIABAAIAFgKIAYAAIAABqQAAAdgPAPQgPAOgbAAQgOABgMgEgAgRgwQgGAKgBAPQABAPAGAIQAHAIAMABIAMgCIALgFIAAg0IgLgFQgGgCgGAAQgMAAgHAJg");
	this.shape_3.setTransform(52.6,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPBVIAAhxIAeAAIAABxgAgMg2QgFgEAAgIQAAgIAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAIQAAAIgFAEQgFAFgIAAQgHAAgFgFg");
	this.shape_4.setTransform(42.8,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPBRIAAiGIguAAIAAgbIB7AAIAAAbIguAAIAACGg");
	this.shape_5.setTransform(32.8,7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWA7IAAhEQAAgLgFgFQgFgHgKABQgHAAgGADQgGADgEADIAABRIghAAIAAhyIAaAAIAFAMIAAAAIAJgHQAFgEAHgCQAFgCAJAAQAUAAAMAMQALANAAAVIAABHg");
	this.shape_6.setTransform(13.5,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcA0QgNgIgHgOQgGgOAAgQQAAgQAGgNQAHgOANgIQANgJAQAAQATAAAMAHQAMAHAGALQAFALAAAOIAAAKIgBAJIhMAAQACAMAHAHQAIAHALAAQAKAAAJgCIASgFIAHAXQgJAEgMADQgMADgOAAQgSAAgNgJgAgKghQgFAEgDAGQgDAHgBAHIAwAAIAAgCIAAgCQAAgKgFgHQgGgGgNAAQgGAAgGADg");
	this.shape_7.setTransform(0,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBRQgLgDgJgFIAKgYQAHAFAJABQAJADAKAAQANAAAHgFQAGgHAAgOIAAgIIgBAAQgEAEgJADQgHADgKABQgRgBgLgHQgLgIgGgNQgFgMgBgRQABgRAFgNQAGgOALgJQALgHARgBQAHABAGACIAMAFIAJAGIAAAAIAEgKIAZAAIAABqQAAAdgPAPQgPAOgcAAQgOABgLgEgAgRgwQgGAKAAAPQAAAPAGAIQAHAIAMABIAMgCIALgFIAAg0IgLgFQgGgCgGAAQgMAAgHAJg");
	this.shape_8.setTransform(-13.8,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoA4QgIgFgFgIQgEgIAAgLQAAgTANgHQAOgKAeAAIAOAAIAAgFQAAgHgEgDQgDgEgFgBIgGgBQgKAAgKACQgKACgIAEIgIgZQAJgEANgDQAMgDAOAAQAXAAAMAMQAMAMAAAXIAAAtIABADIAEABIAIAAIAAAWIgIACIgJAAQgJAAgGgDQgFgEgDgHIgBAAQgFAGgLAEQgIAEgKABQgNAAgKgFgAgTALQgHAEAAAHQAAAHAEADQAEADAIAAQAGAAAFgCQAIgCAFgEIAAgUIgNAAQgNAAgHAEg");
	this.shape_9.setTransform(-27,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaA5IgahRIAAAAIgZBRIgjAAIgjhvIAAgCIAgAAIAWBOIAAAAIAZhOIAhAAIAZBOIAAAAIAWhOIAgAAIAAACIgiBvg");
	this.shape_10.setTransform(-43.7,9.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZA6QgLgDgLgFIAKgYQAJAFAJADQAKACAJAAQAIAAAEgDQAFgCAAgGQgBgFgEgDQgEgCgHgCIgOgEQgIgCgHgEQgHgDgEgFQgFgHAAgLQAAgRANgKQAMgKAVAAQANAAAKACQAKACAKAFIgJAWIgQgEQgIgCgJAAQgHAAgEACQgFADAAAFQABAFADACQAEADAFACIAPADQAJADAIAEQAHADAEAGQAFAHAAAKQAAASgNAKQgNAKgWAAQgOAAgLgDg");
	this.shape_11.setTransform(-59.4,9.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AATBUIgog2IgBAAIAAA2IggAAIAAinIAgAAIAABnIABAAIAngyIAjAAIAAACIgsA0IAuA5IAAADg");
	this.shape_12.setTransform(-70.8,7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBMQgHgIAAgSIAAiGIAeAAIAACNIABADIAEABIAMAAIAAAWIgJABIgKABQgPAAgGgJg");
	this.shape_13.setTransform(-80.9,7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggA0QgNgIgIgOQgGgOAAgQQAAgQAGgNQAIgOANgIQAOgJASAAQAUAAANAJQAOAIAGAOQAIANgBAQQABAQgIAOQgGAOgOAIQgNAJgUAAQgSAAgOgJgAgTgZQgIAJAAAQQAAARAIAIQAHAJAMAAQAMAAAIgJQAHgIABgRQgBgQgHgJQgIgIgMAAQgMAAgHAIg");
	this.shape_14.setTransform(-91.8,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTBRIg5ifIAAgCIAkAAIAoB+IAAAAIAph+IAkAAIAAACIg5Cfg");
	this.shape_15.setTransform(-106.8,7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAiBqIAAhxIgBAAIg+BxIgmAAIAAihIAiAAIAABxIAAAAIA/hxIAmAAIAAChgAgWhMQgKgFgHgJIALgQQAGAFAIABQAHACAIAAQAKAAAIgBQAIgCAGgFIAKAQQgGAJgKAFQgLAEgPAAQgNAAgKgEg");
	this.shape_16.setTransform(29.1,-19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA2BRIAAihIAhAAIAAChgAhWBRIAAihIAiAAIAAA8IAiAAQAaAAAOANQAOALAAAZQAAAagOANQgOANgaAAgAg0A1IAfAAQANAAAGgGQAEgGAAgMQAAgLgEgGQgFgGgOgBIgfAAg");
	this.shape_17.setTransform(9.8,-16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag+BRIAAihIA8AAQAbAAAQALQAPAKAAAXQAAANgGAJQgGAIgJAEIAAABQANACAHAJQAIAKAAAPQAAAXgOALQgPAMgfAAgAgdA1IAdAAQAPAAAHgFQAGgFAAgLQAAgLgGgFQgHgFgPAAIgdAAgAgdgOIAZAAQAMAAAHgEQAGgEAAgLQAAgLgGgEQgGgEgNAAIgZAAg");
	this.shape_18.setTransform(-8.2,-17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrBJQgSgLgIgTQgIgTAAgYQAAgWAIgUQAIgTASgLQARgLAagBQAaABASALQARALAIATQAJAUAAAWQAAAYgJATQgIATgRALQgSAMgaAAQgaAAgRgMgAgZgvQgJAHgEANQgFAMAAAPQAAAQAFANQAEAMAJAIQALAHAOAAQAPAAAKgHQAKgIAEgMQAEgNAAgQQAAgPgEgMQgEgNgKgHQgKgIgPAAQgOAAgLAIg");
	this.shape_19.setTransform(-25.4,-17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiBRIAAhFIhDAAIAABFIghAAIAAihIAhAAIAABDIBDAAIAAhDIAhAAIAAChg");
	this.shape_20.setTransform(-43.1,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.7,-34.7,219.5,57.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back_s();
	this.instance.setTransform(-272.5,-82.4,1.362,1.362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.5,-82.4,545,164.9);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.back();
	this.instance.setTransform(-300,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-93,600,186);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","#000000","rgba(0,0,0,0)","rgba(0,0,0,0)","#FFFFFF"],[0,0.545,0.894,1,1],0,0,0,0,0,102.2).s().p("ArKKmQknkZAAmNQAAmMEnkZQEpkZGhAAQGiAAEoEZQEoEZAAGMQAAGNkoEZQkoEZmiAAQmhAAkpkZg");
	this.shape.setTransform(0,-55.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.1,-151.9,202.1,192);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.disk();
	this.instance.setTransform(-25,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.road();
	this.instance.setTransform(-242,-77,1.252,1.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242,-77,526,154.1);


(lib.noise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ789();
	this.instance.setTransform(252.1,152.9,1,1.186,3.7,0,0,52.6,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:248,y:71.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189,-13.3,126.1,332.7);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(-112,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-119},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354,-77,526,154.1);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgwCAOXIht8QMBjgADwIiMYgg");
	mask.setTransform(55.5,92);

	// Слой 2
	this.instance = new lib.noise();
	this.instance.setTransform(-37.5,99.8,3.103,2.13,0,-88.3,-38.2,242.2,114.1);
	this.instance.alpha = 0.051;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227));

	// Слой 3
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(38,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(227));

	// Слой 4
	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(148,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:0.1,scaleX:0.62,scaleY:0.62,x:-33.9,y:-40.9},226).wait(1));

	// Слой 5
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(115.5,-70.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:58.5},226).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-154,764,338);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:173.8},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoxhRQgUgHgLgSQhKhrhrieQABgIAHgCIALAAQApgDBAgDQBfgEBagBQELgCCSAeQBoA/BaA8QB0BNBWBDQi8ACjvAGImxALIgRABQgQAAgNgEg");
	mask.setTransform(-77.4,-39.3);

	// Слой 2
	this.instance = new lib.Символ7();
	this.instance.setTransform(-34,-58.1,0.421,0.585,0,-42.8,180,0.1,0);
	this.instance.alpha = 0.352;
	this.instance.compositeOperation = "lighter";

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.3,regY:-0.1,scaleX:0.72,scaleY:1.17,skewX:-51,x:-293.8,y:-92},226).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(-232.7,7.2,0.359,0.768,0,0,0,0.4,-0.2);
	this.instance_1.alpha = 0.25;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(-126.3,18.8,0.58,1.034,0,0,0,-0.3,0);
	this.instance_2.alpha = 0.34;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.tiguan();
	this.instance_3.setTransform(-268.5,-84);

	this.instance_4 = new lib.Символ5();
	this.instance_4.setTransform(-97,50,1.58,0.375,0,0,0,-0.1,0);
	this.instance_4.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(227));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.5,-84,537,168);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.instance = new lib.Символ16();
	this.instance.setTransform(-76.5,-16,0.453,0.453,0,0,0,63,62.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(91).to({_off:false},0).wait(5).to({alpha:0},2).wait(3).to({alpha:1},0).wait(4).to({alpha:0},2).wait(1));

	// Слой 3
	this.instance_1 = new lib.Символ6();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.5,-98,537,182.1);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 13
	this.instance = new lib.Символ15();
	this.instance.setTransform(157.3,260);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61).to({_off:false},0).to({alpha:1},9).wait(146).to({alpha:0},8).to({_off:true},1).wait(2));

	// Слой 12
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(157.8,67);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},9).wait(176).to({alpha:0},8).to({_off:true},1).wait(2));

	// Слой 10
	this.instance_2 = new lib.Символ19m();
	this.instance_2.setTransform(233.7,225.4,0.554,0.554,0,0,0,67,67);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({regX:67.1,regY:67.1,x:149.5,y:128.1,alpha:0.73},24).to({regX:67,regY:67,x:117.9,y:91.5,alpha:1},9).to({scaleX:0.41,scaleY:0.41,x:11.6,y:14.5,alpha:0},26).to({_off:true},1).wait(136));

	// Слой 11
	this.instance_3 = new lib.Символ19m();
	this.instance_3.setTransform(177,149,1,1,0,0,0,67,67);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({_off:false},0).to({x:97,y:82,alpha:0.641},33).to({x:14,y:-1,alpha:0},24).to({_off:true},1).wait(139));

	// Слой 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(-28,183,0.948,0.948);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:254.5,y:187},13,cjs.Ease.get(1)).wait(180).to({x:555.5,y:207},10,cjs.Ease.get(-1)).to({_off:true},1).wait(10));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AKNL+QgXgXAAghQAAgiAXgXQAXgXAiAAQAhAAAXAXQAXAXAAAiQAAAhgXAXQgXAXghAAQgiAAgXgXg");
	var mask_graphics_1 = new cjs.Graphics().p("AHmMbQhAhAAAhbQAAhaBAhAQBAhABaAAQBbAABABAQBABAAABaQAABbhABAQhABAhbAAQhaAAhAhAg");
	var mask_graphics_2 = new cjs.Graphics().p("AFHM2QhmhnAAiQQAAiRBmhnQBnhmCRAAQCQAABnBmQBmBnAACRQAACQhmBnQhnBmiQAAQiRAAhnhmg");
	var mask_graphics_3 = new cjs.Graphics().p("ACxNQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACKCLQCMCLAADEQAADFiMCLQiKCLjFAAQjEAAiLiLg");
	var mask_graphics_4 = new cjs.Graphics().p("AAkNoQiritAAj1QAAj1CritQCtirD1AAQD1AACtCrQCtCtAAD1QAAD1itCtQitCtj1AAQj1AAititg");
	var mask_graphics_5 = new cjs.Graphics().p("AhfN/QjNjOAAkiQAAkiDNjMQDMjNEiAAQEiAADNDNQDODMAAEiQAAEijODOQjNDNkiAAQkiAAjMjNg");
	var mask_graphics_6 = new cjs.Graphics().p("AjbOUQjsjsAAlNQAAlNDsjpQDpjsFNAAQFNAADsDsQDsDpAAFNQAAFNjsDsQjsDslNAAQlNAAjpjsg");
	var mask_graphics_7 = new cjs.Graphics().p("AlPOoQkIkIAAl1QAAlyEIkIQEIkIFyAAQF1AAEIEIQEIEIAAFyQAAF1kIEIQkIEIl1AAQlyAAkIkIg");
	var mask_graphics_8 = new cjs.Graphics().p("Am6O6QkikiAAmZQAAmXEikiQEikiGXAAQGZAAEiEiQEiEiAAGXQAAGZkiEiQkiEimZAAQmXAAkikig");
	var mask_graphics_9 = new cjs.Graphics().p("AodPLQk5k6AAm7QAAm5E5k6QE6k5G5AAQG7AAE6E5QE6E6AAG5QAAG7k6E6Qk6E6m7AAQm5AAk6k6g");
	var mask_graphics_10 = new cjs.Graphics().p("Ap3PbQlPlQAAnaQAAnYFPlQQFQlPHYAAQHaAAFPFPQFQFQAAHYQAAHalQFQQlPFPnaAAQnYAAlQlPg");
	var mask_graphics_11 = new cjs.Graphics().p("ArIPoQljljAAn2QAAn0FjljQFjljH0AAQH2AAFjFjQFkFjAAH0QAAH2lkFjQljFkn2AAQn0AAljlkg");
	var mask_graphics_12 = new cjs.Graphics().p("AsRP1Ql1l1AAoPQAAoNF1l1QF1l1INAAQIPAAF1F1QF1F1AAINQAAIPl1F1Ql1F1oPAAQoNAAl1l1g");
	var mask_graphics_13 = new cjs.Graphics().p("AtRQAQmFmFAAolQAAojGFmEQGEmFIjAAQIlAAGFGFQGFGEAAIjQAAIlmFGFQmFGFolAAQojAAmEmFg");
	var mask_graphics_14 = new cjs.Graphics().p("AuJQKQmSmTAAo4QAAo2GSmSQGSmSI2AAQI4AAGSGSQGTGSAAI2QAAI4mTGTQmSGSo4AAQo2AAmSmSg");
	var mask_graphics_15 = new cjs.Graphics().p("Au4QSQmdmeAApIQAApGGdmeQGemdJGAAQJIAAGdGdQGeGeAAJGQAAJImeGeQmdGdpIAAQpGAAmemdg");
	var mask_graphics_16 = new cjs.Graphics().p("AvfQYQmmmnAApVQAApUGmmnQGnmmJUAAQJVAAGnGmQGnGnAAJUQAAJVmnGnQmnGnpVAAQpUAAmnmng");
	var mask_graphics_17 = new cjs.Graphics().p("Av9QdQmumuAApgQAApdGumvQGvmuJdAAQJgAAGuGuQGvGvAAJdQAAJgmvGuQmuGvpgAAQpdAAmvmvg");
	var mask_graphics_18 = new cjs.Graphics().p("AwSQhQmzmzAApnQAApmGzmzQGzmzJmAAQJnAAGzGzQGzGzAAJmQAAJnmzGzQmzGzpnAAQpmAAmzmzg");
	var mask_graphics_19 = new cjs.Graphics().p("AwfQjQm2m2AApsQAAppG2m3QG3m2JpAAQJsAAG2G2QG3G3AAJpQAAJsm3G2Qm2G3psAAQppAAm3m3g");
	var mask_graphics_20 = new cjs.Graphics().p("AwjQkQm4m4AApsQAApsG4m3QG3m4JsAAQJtAAG2G4QG4G3AAJsQAAJsm4G4Qm2G4ptgBQpsABm3m4g");
	var mask_graphics_217 = new cjs.Graphics().p("At2QGQmNmNABoxQgBowGNmOQGOmNIwABQIxgBGNGNQGNGOAAIwQAAIxmNGNQmNGNoxAAQowAAmOmNg");
	var mask_graphics_218 = new cjs.Graphics().p("ArIPoQliljAAn1QAAn0FilkQFkliH0AAQH1AAFjFiQFkFkgBH0QABH1lkFjQljFkn1gBQn0ABlklkg");
	var mask_graphics_219 = new cjs.Graphics().p("AoaPLQk4k5AAm6QAAm5E4k5QE5k4G5AAQG6AAE4E4QE5E5AAG5QAAG6k5E5Qk4E4m6AAQm5AAk5k4g");
	var mask_graphics_220 = new cjs.Graphics().p("AlsOtQkOkPAAl+QAAl9EOkPQEPkOF9AAQF+AAEOEOQEPEPAAF9QAAF+kPEPQkOEOl+AAQl9AAkPkOg");
	var mask_graphics_221 = new cjs.Graphics().p("Ai+OPQjkjlAAlCQAAlDDkjjQDjjkFDAAQFCAADlDkQDkDjAAFDQAAFCjkDlQjlDklCAAQlDAAjjjkg");
	var mask_graphics_222 = new cjs.Graphics().p("AgQNxQi6i6AAkHQAAkIC6i4QC4i6EIAAQEHAAC6C6QC6C4ABEIQgBEHi6C6Qi6C6kHABQkIgBi4i6g");
	var mask_graphics_223 = new cjs.Graphics().p("ACcNTQiQiQAAjLQAAjMCQiQQCQiQDMAAQDLAACQCQQCQCQABDMQgBDLiQCQQiQCRjLAAQjMAAiQiRg");
	var mask_graphics_224 = new cjs.Graphics().p("AFJM2QhlhmAAiQQAAiRBlhmQBmhlCRAAQCQAABlBlQBmBmAACRQAACQhmBmQhlBliQAAQiRAAhmhlg");
	var mask_graphics_225 = new cjs.Graphics().p("AH3MYQg7g8AAhUQAAhVA7g8QA8g7BVAAQBUAAA8A7QA7A8AABVQAABUg7A8Qg8A7hUAAQhVAAg8g7g");
	var mask_graphics_226 = new cjs.Graphics().p("AKlL6QgRgSAAgYQAAgZARgSQASgRAZAAQAYAAASARQARASAAAZQAAAYgRASQgSARgYAAQgZAAgSgRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:79,y:79}).wait(1).to({graphics:mask_graphics_1,x:85.9,y:85.9}).wait(1).to({graphics:mask_graphics_2,x:92.5,y:92.5}).wait(1).to({graphics:mask_graphics_3,x:98.7,y:98.7}).wait(1).to({graphics:mask_graphics_4,x:104.6,y:104.6}).wait(1).to({graphics:mask_graphics_5,x:110.1,y:110.1}).wait(1).to({graphics:mask_graphics_6,x:115.2,y:115.2}).wait(1).to({graphics:mask_graphics_7,x:120,y:120}).wait(1).to({graphics:mask_graphics_8,x:124.4,y:124.4}).wait(1).to({graphics:mask_graphics_9,x:128.5,y:128.5}).wait(1).to({graphics:mask_graphics_10,x:132.2,y:132.2}).wait(1).to({graphics:mask_graphics_11,x:135.6,y:135.6}).wait(1).to({graphics:mask_graphics_12,x:138.6,y:138.6}).wait(1).to({graphics:mask_graphics_13,x:141.3,y:141.3}).wait(1).to({graphics:mask_graphics_14,x:143.6,y:143.6}).wait(1).to({graphics:mask_graphics_15,x:145.6,y:145.6}).wait(1).to({graphics:mask_graphics_16,x:147.2,y:147.2}).wait(1).to({graphics:mask_graphics_17,x:148.4,y:148.4}).wait(1).to({graphics:mask_graphics_18,x:149.3,y:149.3}).wait(1).to({graphics:mask_graphics_19,x:149.8,y:149.8}).wait(1).to({graphics:mask_graphics_20,x:150,y:150}).wait(197).to({graphics:mask_graphics_217,x:142.8,y:142.8}).wait(1).to({graphics:mask_graphics_218,x:135.6,y:135.6}).wait(1).to({graphics:mask_graphics_219,x:128.4,y:128.4}).wait(1).to({graphics:mask_graphics_220,x:121.2,y:121.2}).wait(1).to({graphics:mask_graphics_221,x:114,y:114}).wait(1).to({graphics:mask_graphics_222,x:106.8,y:106.8}).wait(1).to({graphics:mask_graphics_223,x:99.6,y:99.6}).wait(1).to({graphics:mask_graphics_224,x:92.4,y:92.4}).wait(1).to({graphics:mask_graphics_225,x:85.2,y:85.2}).wait(1).to({graphics:mask_graphics_226,x:78,y:78}).wait(1));

	// Слой 9
	this.instance_5 = new lib.Символ12();
	this.instance_5.setTransform(155,151);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(227));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(292,292,16,16);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;