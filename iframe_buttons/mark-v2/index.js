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
		{src:"ls.png", id:"LS"}
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



(lib.LS = function() {
	this.initialize(img.LS);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,268);


(lib.Logo_Markai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTByIgBAAIgIAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgCgCIgDgCIgBABIgDABIgLgGIgJgBQgEABgEgBQgIgCABgIQgHgHgBgMIAAgUQgCgjADgVQgBgNACAAQACAAABgKIACgKIABgFIABgFIAEgNQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBIAGgQQADgGAGgEIAJgIIAHgBIAIgDIAEAAIAEgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAIgCQAWgLAVADQAAAAAAAAQAAAAAAAAQABABAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAIABADACQAEADAFAKIAEALQAIAHAFAKIADADIgCgBIAEAGQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBABIACADQAAAJgBgBQAEAPgCAMQgCAKgIALIgBAGQgBAGgEAFIACAFIgFAHIgFAGIgGAEIgDAGQAAAFgDgCIgFAJIgHALIgBABIgEAMQgDAJgCAAQgEAEgGAEIgFACQgCACgEgBIgFAFQgGAFgIAAQAAABgBAAQAAABAAAAQAAAAAAAAQAAAAAAAAIgBgCQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIAAABg");
	this.shape.setTransform(293.1,100.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkrI9QgWgFgJgRQgWguABgZQAChNAJh8IAOjIIAGiIIAFiLIAFkbIADgUQAAgJgEgGIgDgHIADgKQAEgKADgCQAGgEABgIIAXgOQAOgHAHADIAjARIAEACQAgAPAPAdQAPAdABAwQABA7gDBZIgECUIAAAZIAlgXIAVgRQAJgKAAACIADgBIAFgEIAJgFIAFgDIAGgFQAGgEABADIAHgCQAJgFAHgBQAHgDAJACIALAAIAFAFQADABADADIABACIABABIAJAFQADABAEAEQAXAJAOATQgBAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAIADAEIAOAQQALANAOAIQADAHgiAWIioB7IgUAOQAjAlDKDCQCTCMBLBtIAFAFIgDgBIADAEIAAAAIAFAHIgDAAIgEgDIgXgRIgQgKQgCgCgGAAIgGABQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAIgEgBIgRgMIgIgGIgEgCIgDgDQgEgDAAgCIgEgDIgCgDIgCgCIgJgBIgDgBIgCgBIgHgCIAAAEIAUAbIADAGIADAEQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBAAQgFABgDgDQgmgdgSgLIAAAAIgLgGIgCABIgCgCIgDgBIgBgBQgLgFgQgFIAeATQAoAYAGAJIgsgUIABACQAAACgPgIIgTgDIgfgIQgNgDgTgLQgbgLgZgUIgBAAQgCAAgLgGQgKgGgEgGIgigsQgUgUgfgdIg0gvQgNgNgVgQIgpgdIgIBCQgFA8gHB8QAAAMAFAGIAHAIQAFASgJARQgJAPgSAKQgMAHgNAAQgHAAgHgCg");
	this.shape_1.setTransform(250.7,57.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnHFnQgxhBALhjIAjkcQAHg6gBggQgWA/gRAnQgKAWgfBfQgYBKgbAoQgFAIgEAWQgIAcgKAJQgIAIgXADIgtAIQgaADgTgCQgZgBgGgIQgFgIADgbQANhdAShsQARhoARhWIAJglIAJglQABgGAAgLIgBgWIhoC4IgjA8QgUAjgLAaQgIASgEAfIgHA2QgVCBgIA6IgBAHIgEAdQgGAogfgHQgagIgWABQgTgBgtgVIgOgHQgOgKAXhkIAHg9IArkCQAHg3AFgcIAYiLIAAAAIABgMQAAgGgDgGQADgJAQABQAWAAAFgBIAKABQAKABAAACQAQgCALASIAOAZIAFAHQAMAVAFASIAAABQAGANABAbQABAWgCAlIgCA8IAIgGQAFgEACgDIA5hZIA8hlQATgeADgJIAEgHIACgDIAHgHQAIgJAFgBQALgGAWgDIATADQAUAFAIAGIAhAgIAHAKQAGALAAAIIgBAtQgHBJgSCQIgBAaIAAAdQATgcACgGQBNjCATg3IANgrQAJgZANgPQATgVATgHQAVgIAZAHIAfAKQAZAKALAHQAMAHAGAMQAEADAAAGQAGAGACANIAAAUQADAkgDAWQABANgBAAIgBADQAAAFgCACIAAAGQgCAtgJBCIgQBsIgcDUIBThmIAVgcIAVgcQARgYAJgWQASgnAegnQAYgeAngkIAcgeQARgSANgLIAUgOQAOgJAGgCIASgDQAKgBACgGIAKgeQAIgWAIgNQAGgIAEAAIAHABQADAAAJABQANACAOAGQARAIA/AZQAyAUAcASQAcAPADAGQAGAMgKAqIgDATIgBgBQgVBmgRBnQgDAYgCAlIgEA9QABABgBAGQgBAFABAAIAigkQAVgYAJgPIBKhxQApg/Acg0QANgWALgnIAUhBQAJgVAPgFIALgEQBYgiAUADIAGAAQAGgCACACIAJACIAEAUQADAEAAAEQAGAHABAMIABAUQADAcgBAOIADAZQAWgjAHgPQAmhVBKg4QAIgIAEgDQAdgSAUgLIALgGIAIgDQAPgIALABIAHgBIAEgBQAJgCAGAAIAKABQAMgCAJABQALAAABABQACABgBAQIAAAEQABAJgBAFQgFBAgTAqQgCAFgGAAIgQAAQhdADhDA3QhAAzggBcQgTAygYBLIgpB/IAAABQACANgCgBQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIgBAGIgCAKIgCAGQABAQgFgBQgCAFgDAEIgGAPQgDAGgGAFIgIAIIgGABIgGADQg1ATgOACQgeAHgggKQgWgBAAgMQgChcAGg4QAQhvAGg7QgQAfgTAeIghA3QhOCCgeAsQgYAignAXQgvAbgogXQgngVgQg7QgGgYgCgnIgChBIgBgXIgOAXQgOAYgZAfQgfAngLAPQghA0gyADQgwADgqgoQgFgEgGgLIgJgUIgmAoIgmAnQgjAigSANQgeAYggAJQgOADgNAAQgnAAgcgmgAgVAgQgZAxgIAqQgJAtAPAJIAFgGIANgRQAHgIARgbQARgeAbguIAuhMIAcgsQADgFgOgCIgHAAQg5AAg6B0g");
	this.shape_2.setTransform(107.3,80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVBrIAAghIhLAAIAAAhIgoAAIAAhFIAOAAQAIgOAFgYQAEgZAAgaIAAgPIBrAAIAABoIAPAAIAABFgAhCgbQAAAggNAhIAoAAIAAhEIgbAAgAClBLIAAgiIAJABQAJAAAEgJQADgIAAgRIAAhKIBzAAIAACMIgsAAIAAhnIgcAAIAAAmQAAAjgMAQQgNARgaAAQgKAAgHgCgAIyBKIAAhSIgBAAIgoBSIgvAAIAAiMIAqAAIAABRIAAAAIAohRIAvAAIAACMgAGYBKIAAgzIgLAAIgeAzIgzAAIAng4QgMgEgHgLQgIgKAAgNQAAgWAQgMQAPgMAbAAIBBAAIAACMgAFzgTQAAANAQAAIAVAAIAAgbIgVAAQgQAAAAAOgAAgBKIAAiMIB2AAIAAAlIhKAAIAAARIBDAAIAAAgIhDAAIAAASIBMAAIAAAkgAjCBKIAAiMIAsAAIAACMgAlIBKIAAiMIAsAAIAAAtIAWAAQAYAAAOAMQAOAKAAAXQAAAYgPANQgOANgZAAgAkcAoIAQAAQAHAAAFgEQAEgEAAgHQAAgPgQAAIgQAAgAnbBKIAAiMIBPAAQAVAAAMAKQALAJAAARQAAASgRAKQAZAGAAAbQAAATgPAMQgPAMgUAAgAmvAoIAaAAQARAAAAgNQAAgNgPAAIgcAAgAmvgLIAYAAQAOAAAAgLQAAgKgOAAIgYAAgAolBKIAFglIgOAAIgGAlIgaAAIAFglIgRAAIADgXIARAAIADgRIgRAAIADgXIARAAIAFgkIAbAAIgFAkIAOAAIAFgkIAaAAIgFAkIAQAAIgEAXIgPAAIgDARIAQAAIgEAXIgPAAIgFAlgAorAOIAOAAIACgRIgOAAgAH2hqIAQAAQAAAGAHADQAGAEAIAAQASAAACgNIAQAAQgBAOgKAIQgKAIgQAAQgiAAgCgeg");
	this.shape_3.setTransform(72.2,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB0087").s().p("Ah0A2QgTgVAAghQAAggATgUQAUgVAhAAQA5AAAGA5IgqAAQgFgVgRAAQgOAAgHAKQgHALAAAQQAAASAHAKQAHALAOAAQASAAAEgYIAqAAQAAAZgRARQgSARgcAAQghAAgUgUgABdBHIAAgzIgLAAIgdAzIg0AAIAng4QgMgFgHgKQgIgKAAgNQABgXAPgMQAPgLAcAAIBAAAIAACMgAA4gXQABAOAQAAIAUAAIAAgbIgVAAQgQAAAAANg");
	this.shape_4.setTransform(148,30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,301.7,120.5);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.369,0.91,1],0,0,0,0,0,146.6).s().p("Av4P6QmmmmgBpUQABpTGmmmQGlmmJTAAQJUAAGmGmQGlGmABJTQgBJUmlGmQmmGmpUAAQpTAAmlmmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144,-144,288,288.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.LS();
	this.instance.setTransform(-44,-99,0.742,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-99,69,198.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5},10).to({y:0},9).to({rotation:-15},6,cjs.Ease.get(1)).to({rotation:0},6,cjs.Ease.get(-1)).to({rotation:7},4,cjs.Ease.get(1)).to({rotation:0},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-99,69,198.9);


// stage content:



(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Logo_Markai("synched",0);
	this.instance.setTransform(131.5,133.7,0.845,0.845,0,0,0,151.1,60.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 2
	this.instance_1 = new lib.Символ1();
	this.instance_1.setTransform(259,133.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1tI+IAAx7MAraAAAIAAR7g");
	this.shape.setTransform(131.2,133.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 3
	this.instance_2 = new lib.Символ17();
	this.instance_2.setTransform(150,150,1.042,1.041);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142.2,150.1,307.8,300);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;