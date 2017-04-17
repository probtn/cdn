(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 25,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bf.png", id:"bf"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/logobf.png", id:"logobf"},
		{src:"images/ty.png", id:"ty"},
		{src:"images/waves.png", id:"waves"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bf = function() {
	this.initialize(img.bf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,72);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,375);


(lib.logobf = function() {
	this.initialize(img.logobf);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,55);


(lib.ty = function() {
	this.initialize(img.ty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,55);


(lib.waves = function() {
	this.initialize(img.waves);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,105);


(lib.wavesinner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.waves();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,105);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logobf();
	this.instance.setTransform(-36,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-27.5,72,55);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bf();
	this.instance.setTransform(-26,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-36,52,72);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bf();
	this.instance.setTransform(-26,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-36,52,72);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bf();
	this.instance.setTransform(-26,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-36,52,72);


(lib.Sprivvvte8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,1],0.1,-46.5,0.1,46.5).s().p("AyuA2MAldgQNIAAOiMgldAQNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-98.5,240,197);


(lib.Sprite21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0,-11.3,0,11.1).s().p("AhxAJIABgJQAGggARgZQAZgnAqgMIAqgCIAXAGIAOAGQAlATAOAsQAJAZgDAXQgHBNhLARQgXAEgRAAQhaAAgPhmgAhjAaQgBAWANARQATAaAfADIBAgDQAXgGAWgSIALgOIADgFIgGgMIgdATQgNAJgRACQgqALgpgVIgZgSQgMgKACgPgABcAZIAAABIAKgNIgCgDQgKAEACALgAgrhFIgLAKIgBADQAAAEAWgOQAXgOAQADIgHgJQgXADgTAOgAAchVQgEADAAAEIAEABIAOADQAHABAAgFQAAgEgEgDIgJgDg");
	this.shape.setTransform(-1.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.392)").s().p("AgkBBQhlgfAahoQATB7B/gbQBLgQAGhLQAGBBgzAqQghAdgmAAQgRAAgTgGg");
	this.shape_1.setTransform(-1.9,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.682)").s().p("AhYAMQgNgOABgXIACgNQgCAQAMAKIAZAPQApAWAqgLQARgCANgJIAdgSIAGAMIgDAEIgLANQgWASgXAGIhAAEQgfgDgTgbgABbgZQgCgLAKgFIACAEIgKANg");
	this.shape_2.setTransform(-1.5,4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.812)").s().p("AgzAPIABgDIAKgKQAUgMAVgDIAJAJQgQgDgXAMQgSALgDAAIgBgBgAAugBIgPgDIgDgBQAAgEADgDIAJgDIAJADQAEADAAAEQAAAEgFAAIgCAAg");
	this.shape_3.setTransform(-2,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-12.1,23.5,26.4);


(lib.eeeSprite28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAsIgDgUIgDgYIgBgUIgCgYIgCgHIABgDQAAgDADgCIAGgBIAAABIADgBIAAgBIADAAIAEgBIACAAIAIABIAEADIABAAIACABQAEACAAAEIAAACQgGAWABAQIgDA3QgGASgGAAQgFAAgFgSg");
	this.shape.setTransform(5.6,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAaIASg1IgOA4gAgKAbIgSg3IAWA2IAAABIgDABg");
	this.shape_1.setTransform(5.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,7.8,5.9,18.1);


(lib.eeeSprite26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D7EAE").s().p("AhKgwQBKAcAzA/IgKAKIgDACQgJg0hngzgAAWgkQgSgLgQgHIBXAbQgWAIgtATQAhgZgTgLg");
	this.shape.setTransform(12.1,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B3ADCF","#5FEEFE"],[0,1],-4,0,4.1,0).s().p("AAbBEIgLgKQgNgLgJgRQgTgbgOglIAAgCQAHgPABgSIAHAMQADAdAPAcQAMAcAYAeIAKAMg");
	this.shape_1.setTransform(3.7,46);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#109DEC","#5FEEFE"],[0,1],5.8,4.8,-3.7,-4.7).s().p("AgWBeIgKgMQgZgegOgdQgOgbgDgdIgHgNQgBgJAEgoQA0AKAnAJQAsALAaAKQANAFgCAEQgBACgEACIAUAAIABADIgCASIhZgbQATAHASALQATAMghAXQA5gEAFAFIgCAMQgxgDAiAeIgCAEQg1g+hIgdQBmA0AKA0QgqAEAQATQgNALgUAAQgKAAgLgCg");
	this.shape_2.setTransform(10.1,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEFEFF").s().p("AgDACIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADAAIAEACIABACIgCAEIgDABg");
	this.shape_3.setTransform(19.5,30.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1EACEF").s().p("AhyAfIACgHIACAAQArgPAsgTQAngUAqgdIA5gDIAAAXQgxA5gEAsgABDgHQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIACADIAEACIAEgBIACgCIgBgFIgFgCgABIgyQgDACAAAEQgBAEADADIAGADIAHgBIACgGIgCgHQgCgDgEgBIgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAg");
	this.shape_4.setTransform(12.3,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCADIgDgDIADgDIACgBIAAgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIADADIAAAAIgDAEIgDACg");
	this.shape_5.setTransform(14.9,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#109DEC").s().p("AAvA/QgagKgsgLQgngJg0gKIAAgBICwAgIAVAAIgNAHIgMALQACgEgNgFgAhvAOIAAgCIABgDQArgMAsgVIBOgvIA8AAIAAABIg5ADQgqAcgnAUQgsAUgrAOIgCAAg");
	this.shape_6.setTransform(12.3,31.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#98DBF8").s().p("AgCACIgBgCIABgCIACgBIACABIACACIgCACIgCACg");
	this.shape_7.setTransform(21.2,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4FAFF").s().p("AgVAgQgDgDAAgEQAAgEAEgBQACgDADABQAEAAADADIABAIIgCAFIgGACgAAVgZQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgEIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADABIABADIgBAEIgDABg");
	this.shape_8.setTransform(21.8,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#109DEC","#5FEEFE"],[0,1],7.8,-5.3,-10.6,5.3).s().p("AiBBDIAAAAQAXgcAmgfQAlgcAXgbQAtgaAqADQAqADAHgCIADAMQABAGgJAKQhHACAzAQQgNAJAFAFIg8AAIhPAtQgrAWgsANQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBgABBgdIgBAEIABACIADACIADgCIABgCIgBgEIgDgBgAAEgzIgEABIAAADIAAAFIAEACIAEgBIACgEIAAgBIgCgEQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAgABbgzIgBAEIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAIADgBIABgDIgBgEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_9.setTransform(14.4,25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhAC/IgNgCIgNgKQgMgMgMgRQgTgcgPgrIAAAAQAOAnATAbQALARANALIALAKIANACQAmAHATgQQgQgTAngEIADgDIAKgKIADgEQghgeAvADIADgMQgGgFg3AEQArgUAWgIIACgSIgBgDIgUAAQADgBABgCIANgMIAMgHIgUAAQADgrAxg7IABgWIAAgBQgFgGANgIQgzgRBHgCQAJgKgBgGIgDgLQgHABgqgCQgqgDgtAZQgXAcglAeQgmAegXAcIAAgBIAAABQgCABACgIQADgIAzgtIBFg+QBFhABNAVIAHAKQAJAOgJAQIgJAOIgcAYIgEADIgDACIAAAcQgFBDgVAbIgHAIIgNAJIAAABIAEANIAAAAIABADIgHAxIgDANQgDAPgLAMIgDAEIgKALIgEADIgVAVQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgNALgWAAQgLAAgNgDg");
	this.shape_10.setTransform(14.6,34.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,15,30,38.9);


(lib.Sprdwite26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B3ADCF","#5FEEFE"],[0,1],-4,0,4.1,0).s().p("AAbBEIgLgKQgNgLgJgRQgTgbgOglIAAgCQAHgPABgSIAHAMQADAdAPAcQAMAcAYAeIAKAMg");
	this.shape.setTransform(3.7,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#109DEC","#5FEEFE"],[0,1],5.8,4.8,-3.7,-4.7).s().p("AgWBeIgKgMQgZgegOgdQgOgbgDgdIgHgNQgBgJAEgoQA0AKAnAJQAsALAaAKQASAHAIAGIAAAAIABADIgBAJIgBAJIhZgbQATAHASALQAZAPAXAVIgCAMQgDAOgMANIgCAEQg1g+hIgdQBmA0AKA0IgXAUIgDADQgNALgUAAQgKAAgLgCg");
	this.shape_1.setTransform(10.1,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#109DEC","#5FEEFE"],[0,1],7.8,-4.6,-10.6,6).s().p("AiBBKIAAAAQAXgcAmgfQAlgcAXgbQA4gyA6ARQASAGAEAFIADAMQABAGgJAKIgUASQgNAJAFAFIg8AAIhPAtQgrAWgsANQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBgABBgWIgBAEIABACIADACIADgCIABgCIgBgEIgDgBgAAEgsIgEABIAAADIAAAFIAEACIAEgBIACgEIAAgBIgCgEQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAgABbgsIgBAEIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAIADgBIABgDIgBgEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_2.setTransform(14.4,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1EACEF").s().p("AgXAxIhbgOIACgHIACgBQArgOAsgUQAngUAqgcIA5gDIAAAIIAAAOQgFBCgUAdgABDgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIACADIAEADIAEgBIACgEIgBgDIgFgCgABIguQgDABAAAEQgBAEADADIAGAEIAHgCIACgFIgCgIQgCgCgEgBIgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_3.setTransform(12.3,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhAC/IgNgCIgNgKQgMgMgMgRQgTgcgPgrIAAAAQAOAnATAbQALARANALIALAKIANACQAmAHATgQIADgDIAUgUIADgDIAKgKIADgEQALgNADgOIADgMIACgPIACgOIABgJIABgJIgBgDIAAAAIgDgNIAAgCIAMgHIAHgIQAVgaAEhEIAAgPIABgHIAAgBQgFgGANgIIAUgTQAJgKgBgGIgDgLQgEgGgSgGQg6gQg4AxQgXAcglAeQgmAegXAcIAAgBIAAABQgCABACgIQADgIAzgtIBFg+QBFhABNAVIAHAKQAJAOgJAQIgJAOIgcAYIgEADIgDACIAAACIAAAIIAAASQgFBDgVAbIgHAIIgNAJIAAABIAEANIAAAAIABADIgBAJIgCAKIgCAPIgCAPIgDANQgDAPgLAMIgDAEIgKALIgEADIgVAVQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgNALgWAAQgLAAgNgDg");
	this.shape_4.setTransform(14.6,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCADIgDgDIADgDIACgBIAAgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIADADIAAAAIgDAEIgDACg");
	this.shape_5.setTransform(14.9,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D7EAE").s().p("AhKgwQBKAcAzA/IgKAKIgDACQgJg0hngzgAAWgkQgSgLgQgHIBXAbIgCAOIgCANQgYgVgZgPg");
	this.shape_6.setTransform(12.1,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEFEFF").s().p("AgDACIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADAAIAEACIABACIgCAEIgDABg");
	this.shape_7.setTransform(19.5,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4FAFF").s().p("AgVAgQgDgDAAgEQAAgEAEgBQACgDADABQAEAAADADIABAIIgCAFIgGACgAAVgZQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgEIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADABIABADIgBAEIgDABg");
	this.shape_8.setTransform(21.8,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#98DBF8").s().p("AgCACIgBgCIABgCIACgBIACABIACACIgCACIgCACg");
	this.shape_9.setTransform(21.2,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#109DEC").s().p("AAvA+QgagLgsgLQgngJg0gKIAAgBIBbAPIBxAKIgHAHIgNAHIABADIACAMQgIgGgSgGgAhvAMIAAgCIABgDQArgLAsgWIBOgvIA8AAIAAABIg5ADQgqAcgnAUQgsAVgrANIgCAAg");
	this.shape_10.setTransform(12.3,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,15,30,38.9);


(lib.dw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAsIgDgUIgDgYIgBgUIgCgYIgCgHIABgDQAAgDADgCIAGgBIAAABIADgBIAAgBIADAAIAEgBIACAAIAIABIAEADIABAAIACABQAEACAAAEIAAACQgGAWABAQIgDA3QgGASgGAAQgFAAgFgSg");
	this.shape.setTransform(5.6,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAaIASg1IgOA4gAgKAbIgSg3IAWA2IAAABIgDABg");
	this.shape_1.setTransform(5.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,7.8,5.9,18.1);


(lib.Sprdwitefes26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B3ADCF","#5FEEFE"],[0,1],-4,0,4.1,0).s().p("AAbBEIgLgKQgNgLgJgRQgTgbgOglIAAgCQAHgPABgSIAHAMQADAdAPAcQAMAcAYAeIAKAMg");
	this.shape.setTransform(3.7,46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#109DEC","#5FEEFE"],[0,1],5.8,4.8,-3.7,-4.7).s().p("AgWBeIgKgMQgZgegOgdQgOgbgDgdIgHgNQgBgJAEgoQA0AKAnAJQAsALAaAKQASAHAIAGIAAAAIABADIgBAJIgBAJIhZgbQATAHASALQAZAPAXAVIgCAMQgDAOgMANIgCAEQg1g+hIgdQBmA0AKA0IgXAUIgDADQgNALgUAAQgKAAgLgCg");
	this.shape_1.setTransform(10.1,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#109DEC","#5FEEFE"],[0,1],7.8,-4.6,-10.6,6).s().p("AiBBKIAAAAQAXgcAmgfQAlgcAXgbQA4gyA6ARQASAGAEAFIADAMQABAGgJAKIgUASQgNAJAFAFIg8AAIhPAtQgrAWgsANQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBgABBgWIgBAEIABACIADACIADgCIABgCIgBgEIgDgBgAAEgsIgEABIAAADIAAAFIAEACIAEgBIACgEIAAgBIgCgEQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAgBAAgABbgsIgBAEIABADQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAIAAAAIADgBIABgDIgBgEIgDgBQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_2.setTransform(14.4,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1EACEF").s().p("AgXAxIhbgOIACgHIACgBQArgOAsgUQAngUAqgcIA5gDIAAAIIAAAOQgFBCgUAdgABDgDQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIACADIAEADIAEgBIACgEIgBgDIgFgCgABIguQgDABAAAEQgBAEADADIAGAEIAHgCIACgFIgCgIQgCgCgEgBIgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_3.setTransform(12.3,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AhAC/IgNgCIgNgKQgMgMgMgRQgTgcgPgrIAAAAQAOAnATAbQALARANALIALAKIANACQAmAHATgQIADgDIAUgUIADgDIAKgKIADgEQALgNADgOIADgMIACgPIACgOIABgJIABgJIgBgDIAAAAIgDgNIAAgCIAMgHIAHgIQAVgaAEhEIAAgPIABgHIAAgBQgFgGANgIIAUgTQAJgKgBgGIgDgLQgEgGgSgGQg6gQg4AxQgXAcglAeQgmAegXAcIAAgBIAAABQgCABACgIQADgIAzgtIBFg+QBFhABNAVIAHAKQAJAOgJAQIgJAOIgcAYIgEADIgDACIAAACIAAAIIAAASQgFBDgVAbIgHAIIgNAJIAAABIAEANIAAAAIABADIgBAJIgCAKIgCAPIgCAPIgDANQgDAPgLAMIgDAEIgKALIgEADIgVAVQAAABgBAAQAAAAgBABQAAAAAAABQgBAAAAABQgNALgWAAQgLAAgNgDg");
	this.shape_4.setTransform(14.6,34.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCADIgDgDIADgDIACgBIAAgBQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAIADADIAAAAIgDAEIgDACg");
	this.shape_5.setTransform(14.9,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D7EAE").s().p("AhKgwQBKAcAzA/IgKAKIgDACQgJg0hngzgAAWgkQgSgLgQgHIBXAbIgCAOIgCANQgYgVgZgPg");
	this.shape_6.setTransform(12.1,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEFEFF").s().p("AgDACIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIADAAIAEACIABACIgCAEIgDABg");
	this.shape_7.setTransform(19.5,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4FAFF").s().p("AgVAgQgDgDAAgEQAAgEAEgBQACgDADABQAEAAADADIABAIIgCAFIgGACgAAVgZQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgBgEIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADABIABADIgBAEIgDABg");
	this.shape_8.setTransform(21.8,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#98DBF8").s().p("AgCACIgBgCIABgCIACgBIACABIACACIgCACIgCACg");
	this.shape_9.setTransform(21.2,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#109DEC").s().p("AAvA+QgagLgsgLQgngJg0gKIAAgBIBbAPIBxAKIgHAHIgNAHIABADIACAMQgIgGgSgGgAhvAMIAAgCIABgDQArgLAsgWIBOgvIA8AAIAAABIg5ADQgqAcgnAUQgsAVgrANIgCAAg");
	this.shape_10.setTransform(12.3,31.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,15,30,38.9);


(lib.dwfe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgJAsIgDgUIgDgYIgBgUIgCgYIgCgHIABgDQAAgDADgCIAGgBIAAABIADgBIAAgBIADAAIAEgBIACAAIAIABIAEADIABAAIACABQAEACAAAEIAAACQgGAWABAQIgDA3QgGASgGAAQgFAAgFgSg");
	this.shape.setTransform(5.6,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAaIASg1IgOA4gAgKAbIgSg3IAWA2IAAABIgDABg");
	this.shape_1.setTransform(5.6,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,7.8,5.9,18.1);


(lib.Shape169 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.682)").s().p("Ah9ALQgNgTgHgeIgIgkIADAAQAKAYAiAeQA4AvBFAAQBCgBAZgVQAOgKAcg7IABgCIABAIQAAAlgiApQgsA3hFAAQhcAAgohAg");
	this.shape.setTransform(-2.2,618.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(77,77,77,0.4)").s().p("AhTgGQAOgVA5gNQA3gOBJBNQh8hghrB0QARgfAPgSg");
	this.shape_1.setTransform(-1.9,587.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Shape Sublayer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.682)").s().p("AhUgLQARgTANgIIAugNQBUgHA1BOQhUgvg+AJQhAAKgvA8g");
	this.shape_2.setTransform(-2,591);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Shape Sublayer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.6,0.5,23.9).s().p("Ah7DNQgTgLgMgUQg1hXAYhkQAXhdA6hNQAmgyBAgBQBgAKAvBYQAqBRAGBMQAFBOgVAqQgVAqghAVQgiAWheAJIgOAAQg2AAgwgeg");
	this.shape_3.setTransform(-1.7,605.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Shape Sublayer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.251)").s().p("AhECPQhJgUgahNQgXhGgDhLIAjA4QBABrB3gTQAXgEAUgMQBig6Abh1IAAASQgDCviSBaIgmAHQgPADgRAAQgVAAgVgEg");
	this.shape_4.setTransform(-1.7,624.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,582.1,38.8,57.6);


(lib.Shape96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.682)").s().p("Ah9ALQgNgTgHgeIgIgkIADAAQAKAYAiAeQA4AvBFgBQBCAAAZgVQAOgKAcg7IABgCIABAJQAAAkgiApQgsA3hFAAQhcAAgohAg");
	this.shape.setTransform(-2.2,518.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Shape Sublayer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(77,77,77,0.4)").s().p("AhTgGQAOgVA5gNQA3gOBJBNQh8hghrB0QARgfAPgSg");
	this.shape_1.setTransform(-1.9,487.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Shape Sublayer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.682)").s().p("AhUgLQARgTANgIIAugNQBUgHA1BOQhUgvg+AJQhAAKgvA8g");
	this.shape_2.setTransform(-2,491);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Shape Sublayer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.6,0.5,23.9).s().p("Ah7DNQgTgLgMgUQg1hXAYhkQAXhdA6hNQAmgyBAgBQBgAKAvBYQAqBRAGBMQAFBOgVAqQgVAqghAVQgiAWheAJIgOAAQg2AAgwgeg");
	this.shape_3.setTransform(-1.7,505.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Shape Sublayer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.251)").s().p("AhECPQhJgUgahNQgXhGgDhLIAjA4QBABrB3gTQAXgEAUgMQBig6Abh1IAAASQgDCviSBaIgmAHQgPADgRAAQgVAAgVgEg");
	this.shape_4.setTransform(-1.7,524.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.1,482.1,38.8,57.6);


(lib.Shape2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Shape Sublayer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-19.1,0,19.2,0).s().p("Ah6ClQgngRgQg3IgGgeQgMhHAJhJQAEguAJg2QgBA6AKAqQAQBSBLAdIAQAIQAZAKA7AAQBPAAAogwQAMgMAJgTIASgiIAGgQIgIAgQgTBMgvBCQgYAhgcAUQg0Akg3AAQgnAAgpgRg");
	this.shape.setTransform(19.6,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-15.5,0,15.6,0).s().p("AiCAHIgYg5IASAOQA2AnBDAHIAVABQAmABAigNQApgTAkgfQgaA8g9AaQgoARgkAAQg/AAg7gtg");
	this.shape_1.setTransform(20.8,40.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.4,0,2.5,0).s().p("AgTAMQgEgJAAgHQAAgaAXAEQAYAFAAAZQAAALgEAFQgFAIgMAAQgPAAgHgQg");
	this.shape_2.setTransform(28.7,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.5,0,6.6,0).s().p("Ag2AKQAdggAsgGQAKACAJAFQAYAKADAXIgHACIAEAEIgggOQgSgFgUACQgLADgJAFQgRAMgTAIQADgLAHgIg");
	this.shape_3.setTransform(17.7,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],0,-22.3,0,24.3).s().p("AhEDiIgQgIQhLgdgQhUQgKgqABg6QgCADABgMQADgbAIgYQAPgwAagrQANgVAOgUQANgQAQgNQAOgLAQgEIAcgEIAfAGQAxAIAjAiQAiAfANAuIAgBcQANArgCAwIAAAIIgFAUIgBAEIgGAQIgSAiQgJATgMAOQgoAwhPAAQg7AAgZgKgAiBCsQBfBHBngsQA9gaAag9QgkAfgpATQgiAOgmgBIgVgBQhDgHg2goIgSgPgAA4h8QAAAIAEAJQAHAQAQAAQANAAAFgHQADgFAAgMQAAgbgYgEIgGgBQgSAAAAAXgAg9jWQgeAMgfBCQAkgqAPgFIAogOQAagJAkAKQAlAKAlAWIAAAAIAPALIgOgNQgWgXgegPIgdgMQgVgHgSAAQgXAAgYAJgAhTicQgIAIgCALQATgIARgMQAJgFALgDQAVgEARAIIAfANIgDgDIAGgCQgCgagYgKQgJgFgJgBQgtAFgdAig");
	this.shape_4.setTransform(20.7,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.7,0,0.8,0).s().p("AgGgDIABgCIAMALg");
	this.shape_5.setTransform(32,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-11.5,0,11.5,0).s().p("Ag1ghQAtgRApAPIAdAMQAeAPAXAVIgCACQglgUglgKQglgKgYAJIgpAOQgPADgkAqQAfhAAegMg");
	this.shape_6.setTransform(19.8,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(141,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],0,0,0.1,0).s().p("AAAABIAAgBIAAABg");
	this.shape_7.setTransform(31.3,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.1,38.9,60.7);


(lib.LGai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00327D").s().p("AmDBsQgeggAAg8IAAiUIAEAAQAgAAAPAQQAOAPABAiIAABVQAABAA3AAQA4AAgBhAIAAhVQABgiAPgPQAPgQAfAAIAFAAIAACUQAAB7h6AAQg8AAgfgfgAGQCHQgTAAgmgVIgggRQgUgIgRAAIgCABIgBgBQgSAAgTAIIggARIgDACIgZANQgOAGgLAAIgWAAIBqj3QAJgTAUgBIAYAAQAVABAIATIBqD3gAE6AuIgqhuIgpBuIAOgGQAOgEANAAQARAAAZAKgABGCHQg1AAgWgqQgWgpgLgjIgBgCIAAgDQgCgGADgDQABgDASAAIASAAQAUAAAMgJQALgKABgRIAAgBQgBgTgNgLQgMgKgWAAIg2AAIAACQQgBAmgRAQQgOANghABIgIAAQAGgYAAggIAAiaQAAgdASgPQAOgNAXAAIBHAAQA2AAAcAdQAYAXAAAmIAAABQgBA2g0AQQgLAEgOACIAhAwQAgAtAOAHgAKhCGQgWAAgOgIQgKgGgOgPIhkiJIAABrQgBAhgRAOQgNALgbABIgIAAIAAjSQAAgcASgPQAPgNAWAAIALAAIB1CfIAAhsQADgZAOgMQANgMAagCIAQAAIgCAQQgDATAAAUIAADTgAplCGQAFgXAAggIAAiXIgdAAQg2ABgKAFIAAABIgBgFQABg+A8AAIB2AAQBAAAAKgGIABAAIAAAEQAAA+g9AAIggAAIAACIIAAACIAAABQAAAmgSAQQgPAMgfABg");
	this.shape.setTransform(-174,34.7,1.508,1.505);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-279.9,13.7,212,42.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjDDDQhRhQAAhzQAAhxBRhSQBShRBxAAQBzAABQBRQBSBSAABxQAABzhSBQQhQBShzAAQhxAAhShSg");
	this.shape.setTransform(27.8,27.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.5,55.5);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.098,0.525,0.929],-58.5,20.4,58.5,-20.3).s().p("AtfpUISQmYIIvZBIyQGYg");
	this.shape.setTransform(86.4,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,201.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F6AB2").s().p("AsYBAQgDgFgMgCIgTAAIg8AAQgMAAgHAHIgBAAIAAgFIAAgLIAHAAIARgkIAfhHIAIAAIAuBrIAIAAIgCALIACAFgAt3AwIBKAAIgkhZIgBAAgACuA/QgEgFgNgCIgSAAIg9AAQgMAAgHAHIAAAAIAAgFIAAgLIAHAAIARgkIAehHIAJAAIAtBrIAIAAIAAALIAAAFgABNAvIBKAAIgkhYIgBAAgAwCAsQgRgSAAgaQAAgcASgRQASgRAdAAQAcAAASAPQATAQAAAcQAAAdgSAQQgTARgeAAQgcAAgSgPgAv2gnQgMAQAAAXQAAAXAMAPQANAQAXAAQAYAAANgWQALgQAAgSQAAgXgLgPQgMgQgYAAQgZAAgMARgAIyAqQgRgQgBgbQAAgcATgSQASgQAcAAQAdAAARAPQATAQAAAcQAAAcgSARQgSARgeAAQgdAAgRgQgAI9goQgLAQAAAYQgBAXAMAOQANAPAXAAQAZAAANgVQALgQAAgSQAAgXgMgPQgMgQgYAAQgYAAgNARgAFOAqQgRgQAAgbQAAgcASgSQASgQAcAAQAcAAASAPQATAQAAAcQAAAcgSARQgSARgdAAQgeAAgRgQgAFZgoQgMAQABAYQAAAXAMAOQAMAPAXAAQAZAAANgVQAKgQAAgSQABgXgLgPQgMgQgZAAQgYAAgNARgAj4AqQgSgQAAgbQAAgcASgSQATgQAcAAQAcAAASAPQATAQAAAcQAAAcgSARQgSARgeAAQgdAAgRgQgAjtgoQgLAQAAAYQAAAXALAOQANAPAXAAQAZAAAMgVQALgQAAgSQAAgXgMgPQgLgQgYAAQgYAAgNARgApqAxIADgLIAAAAQAFAFAJAEQAJAEAIABQAhAAAAgdQAAgNgIgHQgJgFgMAAIgQABIAAgEIAAgDIAOAAQALAAAIgGQAGgHAAgMQABgLgIgHQgHgFgMAAQgWAAgGAOIgBAAIgFgKQANgLAWAAQARAAAMAGQAOAIAAAPQAAAWgcAHQAPAAAJAGQAKAIAAANQAAAUgRAJQgNAIgWgBQgRAAgQgJgAq5A5IgLgdIgHgRIgsAAIgMAcIgGASIgGAAIgGAAIA2h3IAEAAIA0B3gAr0ADIAmAAIgTgqgAxxA5IAAh0IAjAAQAQgBAJAEQAMAGABAPQAAALgJAJQgGAHgNADQAOAAAIAGQALAGAAANQgBATgPALQgGAEgMACQgGABgNAAgAxiAyIARAAQAMAAAKgGQAHgIAAgNQAAgXgkAAIgKAAgAxigHIAUgBQADAAAHgDQANgGAAgPQAAgVgeAAIgNAAgARrA4IgIAAIAAg4IgGAAIgtA4IgVAAIAwg5QgPgDgJgHQgLgKAAgNQAAgaAmAAIAlAAIAAB0gAQ2ggQAAAUAXAFIAWABIAAgvIgaAAQgTADAAASgAQPA4IgKAAIgKgcIgIgSIgsAAIgLAcIgHASIgGAAIgGAAIA2h3IAEAAIA0B3gAPKACIAmAAIgTgqgANbA4IgHAAIAAh0IAfAAQAVAAAKADQAOAHAAASQAAARgMAIQgIAHgSACIgTAAIgDAAIAAA2gANkgDIANAAIAEAAQAMAAAHgIQAIgIAAgMQAAgJgFgFQgEgIgHAAIgcAAgAMuA4IgHgIIgCgDIgDgFIgngqIgBgBIgBAAIAAA7IgIAAIgHAAIAAh0IAPAAIAAA1IABABIAEgCIAzg0IAOAAIg2A0IA4A/IAAABgAHWA4IAAh0IA9AAIgBAFIABAFIgPgCIggAAIAABsgAEeA4IgIAAIAAg6IhJAAIAAA6IgHAAIgHAAIAAh0IAOAAIAAAxIBJAAIAAgxIAQAAIAAB0gAkpA4IgHAAIAAhsIhJAAIAABsIgHAAIgIAAIAAh0IBnAAIAAB0gAmiA4IgIAAIgMgcIgHgSIgsAAIgLAcIgHASIgGAAIgGAAIA3h3IADAAIA0B3gAnmACIAmAAIgTgqgAgLA4IAAh0IA9AAIgBAFIABAFIgQgCIgfAAIAAAsIAkAAIAHgBIgBAEIABAFIgrgBIAAAwIAmgBIAJAAIAAAEIAAAGgAhwA4IAAh0IAiAAQARAAAJADQANAFAAAQQAAALgJAJQgHAHgLADQANAAAIAGQAKAGAAANQAAATgPAKQgHAGgLABIgTABgAhiAxIASAAQANAAAIgHQAIgHAAgNQAAgYgkAAIgLAAgAhigIIAVgBQADAAAHgDQANgGAAgPQAAgUgeAAIgOAAg");
	this.shape.setTransform(121.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,1,227.8,12.9);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(51,255,255,0)","#33FFFF","rgba(51,255,255,0)"],[0.098,0.525,0.929],-58.5,20.4,58.5,-20.3).s().p("AtfpUISQmYIIvZBIyQGYg");
	this.shape.setTransform(86.4,100.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172.8,201.1);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ty();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,55);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F2FAFD","#C6E1F5"],[0,1],0,0,0,0,0,202.9).s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.waves_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.wavesinner();
	this.instance.setTransform(0,0,0.317,0.317,0,0,0,120,52.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({scaleX:0.76,scaleY:0.76},40).to({scaleX:1.21,scaleY:1.21,y:-0.1,alpha:0},40).wait(1));

	// Layer 1
	this.instance_1 = new lib.wavesinner();
	this.instance_1.setTransform(0,0,0.317,0.317,0,0,0,120,52.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.76,scaleY:0.76},39).to({scaleX:1.21,scaleY:1.21,y:-0.1,alpha:0},40).wait(1).to({scaleX:0.32,scaleY:0.32,y:0,alpha:1},0).to({scaleX:0.76,scaleY:0.76},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-16.6,76,33.3);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AsYBAQgCgFgNgCIgTAAIg9AAQgLAAgHAHIgCAAIABgFIgBgLIAIAAIARgkIAehHIAJAAIAtBrIAIAAIgBALIABAFgAt4AwIBLAAIgkhZIgBAAgACtA/QgDgFgMgCIgTAAIg8AAQgNAAgGAHIgBAAIABgFIgBgKIAHAAIAQglIAghHIAIAAIAuBsIAHAAIAAAKIAAAFgABNAwIBKAAIgkhZIAAAAgAwCAsQgRgSAAgaQAAgcASgSQASgQAcAAQAdAAASAPQATAQAAAcQAAAcgTARQgSARgeAAQgcAAgSgPgAv3gnQgLAQAAAXQAAAXAMAPQANAQAWAAQAZAAANgWQALgQAAgSQAAgXgMgPQgLgQgYAAQgZAAgNARgAIzAqQgTgQABgbQAAgcASgSQASgQAcAAQAcAAATAPQASAQAAAcQAAAdgSAQQgSARgdAAQgdAAgRgQgAI9goQgMAQABAYQAAAXAMAOQAMAPAXAAQAZAAANgVQAKgQAAgSQABgXgLgPQgMgQgZAAQgYAAgNARgAFOAqQgSgQAAgbQABgcASgSQARgQAdAAQAdAAARAPQATAQAAAcQAAAdgRAQQgTARgeAAQgdAAgRgQgAFZgoQgMAQAAAYQABAXAMAOQAMAPAXAAQAZAAANgVQALgQAAgSQgBgXgKgPQgNgQgXAAQgZAAgNARgAj5AqQgRgQAAgbQAAgcASgSQASgQAdAAQAdAAARAPQATAQAAAcQAAAdgRAQQgUARgdAAQgcAAgTgQgAjtgoQgMAQAAAYQAAAXANAOQAMAPAXAAQAYAAAOgVQAKgQAAgSQAAgXgLgPQgMgQgYAAQgYAAgNARgAprAxIAEgLIABAAQAEAFAJAFQAJADAIAAQAhAAABgcQAAgNgJgHQgIgFgNAAIgQABIABgDIgBgEIANAAQANABAGgHQAIgHgBgMQAAgLgHgGQgHgGgMAAQgWAAgGAOIgBAAIgGgKQAOgLAVAAQASAAALAGQAPAIAAAPQAAAWgcAHQAOAAAKAGQALAIAAANQAAAUgSAJQgNAHgWAAQgSAAgQgJgAq6A5IgKgcIgIgSIgrAAIgMAcIgFASIgHAAIgGAAIA2h3IAEAAIA0B3gAr0ADIAmAAIgTgqgAxxA5IAAh0IAiAAQASAAAIADQANAGAAAPQgBALgHAJQgIAHgLAEQANgBAIAGQALAGgBANQAAATgPALQgGAEgMACQgGABgNAAgAxiAyIARAAQANAAAJgGQAHgIAAgNQAAgYgkAAIgKAAgAxigHIATgBQAEAAAHgDQANgGAAgPQAAgVgeAAIgNAAgARrA4IgIABIAAg5IgHAAIgtA5IgTAAIAvg6QgPgDgJgHQgMgKAAgNQAAgaAnAAIAlAAIAAB1gAQ2ggQABAUAVAFIAXABIAAgvIgaAAQgSADgBASgAQPA4IgKABIgLgdIgIgSIgrAAIgMAcIgFATIgHgBIgGABIA2h4IAEAAIA0B4gAPLACIAlAAIgTgqgANcA4IgIABIAAh1IAeAAQAXAAAJADQAOAHgBASQABARgLAIQgJAHgSACIgTAAIgDAAIAAA3gANkgDIANAAIADAAQANAAAHgIQAIgJgBgLQAAgIgEgHQgDgHgIAAIgcAAgAMuA5IgGgJIgDgDIgEgFIgmgqIgBgBIgBAAIAAA8IgHgBIgIABIAAh1IAPAAIAAA1IACABIACgCIA0g0IAOAAIg3A0IA5A/IAAACgAHWA5IAAh1IA9AAIgBAFIABAFIgQgCIgfAAIAABtgAEeA4IgIABIAAg7IhJAAIAAA7IgHgBIgIABIAAh1IAPAAIAAAxIBJAAIAAgxIAQAAIAAB1gAkpA4IgHABIAAhtIhJAAIAABtIgIgBIgIABIAAh1IBpAAIAAB1gAmiA4IgIABIgMgdIgHgSIgsAAIgMAcIgFATIgHgBIgGABIA2h4IAEAAIA0B4gAnmACIAmAAIgTgqgAgKA4IAAh0IA8AAIgBAFIABAFIgQgCIgfAAIAAAsIAjAAIAHgCIAAAFIAAAEIgqAAIAAAxIAngBIAJgBIgBAEIABAGgAhxA4IAAh0IAjAAQARAAAJADQANAGAAAOQgBAMgHAJQgIAHgLAEQAMgBAJAGQALAGgBAOQABASgRAKQgGAFgMACIgTABgAhiAxIASAAQAMAAAJgHQAIgHAAgNQAAgYglAAIgKAAgAhigIIAUgBQAEAAAGgDQAOgGAAgPQAAgUgeAAIgOAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AsYBAQgCgFgNgCIgTAAIg9AAQgLAAgHAHIgCAAIABgFIgBgLIAIAAIARgkIAehHIAJAAIAtBrIAIAAIgBALIABAFgAt4AwIBLAAIgkhZIgBAAgACtA/QgDgFgMgCIgTAAIg8AAQgNAAgGAHIgBAAIABgFIgBgKIAHAAIAQglIAghHIAIAAIAuBsIAHAAIAAAKIAAAFgABNAwIBKAAIgkhZIAAAAgAwCAsQgRgSAAgaQAAgcASgSQASgQAcAAQAdAAASAPQATAQAAAcQAAAcgTARQgSARgeAAQgcAAgSgPgAv3gnQgLAQAAAXQAAAXAMAPQANAQAWAAQAZAAANgWQALgQAAgSQAAgXgMgPQgLgQgYAAQgZAAgNARgAIzAqQgTgQABgbQAAgcASgSQASgQAcAAQAcAAATAPQASAQAAAcQAAAdgSAQQgSARgdAAQgdAAgRgQgAI9goQgMAQABAYQAAAXAMAOQAMAPAXAAQAZAAANgVQAKgQAAgSQABgXgLgPQgMgQgZAAQgYAAgNARgAFOAqQgSgQAAgbQABgcASgSQARgQAdAAQAdAAARAPQATAQAAAcQAAAdgRAQQgTARgeAAQgdAAgRgQgAFZgoQgMAQAAAYQABAXAMAOQAMAPAXAAQAZAAANgVQALgQAAgSQgBgXgKgPQgNgQgXAAQgZAAgNARgAj5AqQgRgQAAgbQAAgcASgSQASgQAdAAQAdAAARAPQATAQAAAcQAAAdgRAQQgUARgdAAQgcAAgTgQgAjtgoQgMAQAAAYQAAAXANAOQAMAPAXAAQAYAAAOgVQAKgQAAgSQAAgXgLgPQgMgQgYAAQgYAAgNARgAprAxIAEgLIABAAQAEAFAJAFQAJADAIAAQAhAAABgcQAAgNgJgHQgIgFgNAAIgQABIABgDIgBgEIANAAQANABAGgHQAIgHgBgMQAAgLgHgGQgHgGgMAAQgWAAgGAOIgBAAIgGgKQAOgLAVAAQASAAALAGQAPAIAAAPQAAAWgcAHQAOAAAKAGQALAIAAANQAAAUgSAJQgNAHgWAAQgSAAgQgJgAq6A5IgKgcIgIgSIgrAAIgMAcIgFASIgHAAIgGAAIA2h3IAEAAIA0B3gAr0ADIAmAAIgTgqgAxxA5IAAh0IAiAAQASAAAIADQANAGAAAPQgBALgHAJQgIAHgLAEQANgBAIAGQALAGgBANQAAATgPALQgGAEgMACQgGABgNAAgAxiAyIARAAQANAAAJgGQAHgIAAgNQAAgYgkAAIgKAAgAxigHIATgBQAEAAAHgDQANgGAAgPQAAgVgeAAIgNAAgARrA4IgIABIAAg5IgHAAIgtA5IgTAAIAvg6QgPgDgJgHQgMgKAAgNQAAgaAnAAIAlAAIAAB1gAQ2ggQABAUAVAFIAXABIAAgvIgaAAQgSADgBASgAQPA4IgKABIgLgdIgIgSIgrAAIgMAcIgFATIgHgBIgGABIA2h4IAEAAIA0B4gAPLACIAlAAIgTgqgANcA4IgIABIAAh1IAeAAQAXAAAJADQAOAHgBASQABARgLAIQgJAHgSACIgTAAIgDAAIAAA3gANkgDIANAAIADAAQANAAAHgIQAIgJgBgLQAAgIgEgHQgDgHgIAAIgcAAgAMuA5IgGgJIgDgDIgEgFIgmgqIgBgBIgBAAIAAA8IgHgBIgIABIAAh1IAPAAIAAA1IACABIACgCIA0g0IAOAAIg3A0IA5A/IAAACgAHWA5IAAh1IA9AAIgBAFIABAFIgQgCIgfAAIAABtgAEeA4IgIABIAAg7IhJAAIAAA7IgHgBIgIABIAAh1IAPAAIAAAxIBJAAIAAgxIAQAAIAAB1gAkpA4IgHABIAAhtIhJAAIAABtIgIgBIgIABIAAh1IBpAAIAAB1gAmiA4IgIABIgMgdIgHgSIgsAAIgMAcIgFATIgHgBIgGABIA2h4IAEAAIA0B4gAnmACIAmAAIgTgqgAgKA4IAAh0IA8AAIgBAFIABAFIgQgCIgfAAIAAAsIAjAAIAHgCIAAAFIAAAEIgqAAIAAAxIAngBIAJgBIgBAEIABAGgAhxA4IAAh0IAjAAQARAAAJADQANAGAAAOQgBAMgHAJQgIAHgLAEQAMgBAJAGQALAGgBAOQABASgRAKQgGAFgMACIgTABgAhiAxIASAAQAMAAAJgHQAIgHAAgNQAAgYglAAIgKAAgAhigIIAUgBQAEAAAGgDQAOgGAAgPQAAgUgeAAIgOAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-1.7,y:2}).wait(49).to({graphics:mask_graphics_49,x:-1.7,y:2}).wait(1));

	// Слой 2
	this.instance = new lib.Символ8();
	this.instance.setTransform(-207.4,6.8,1,1,0,0,0,86.4,100.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192.5,y:-2.2},49).wait(1));

	// Layer 1
	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(-0.7,1.5,1,1,0,0,0,122.9,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.6,-4.5,227.8,12.9);


(lib.Sprvvvite9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sprivvvte8();
	this.instance.setTransform(0,30);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:29.8,alpha:0.012},0).wait(1).to({y:29.6,alpha:0.02},0).wait(1).to({y:29.2,alpha:0.031},0).wait(1).to({y:28.7,alpha:0.039},0).wait(1).to({y:28.2,alpha:0.059},0).to({y:26.7,alpha:0.109},2).to({y:24.8,alpha:0.172},2).to({y:21.2,alpha:0.289},3).to({y:16.7,alpha:0.449},3).to({y:11.2,alpha:0.629},3).to({y:2.5,alpha:0.922},4).to({y:0,alpha:1},1).wait(1).to({y:-1.6,alpha:0.922},0).to({y:-7.4,alpha:0.629},4).to({y:-11.1,alpha:0.449},3).to({y:-14.1,alpha:0.289},3).to({y:-16.5,alpha:0.172},3).to({y:-17.8,alpha:0.109},2).to({y:-18.7,alpha:0.059},2).to({y:-19.1,alpha:0.039},1).wait(1).to({y:-19.4,alpha:0.031},0).wait(1).to({y:-19.7,alpha:0.02},0).wait(1).to({y:-19.8,alpha:0.012},0).wait(1).to({y:-19.9,alpha:0},0).wait(1).to({y:-20},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-68.5,240,197);


(lib.Sprivvvte10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.instance = new lib.Sprvvvite9();
	this.instance.setTransform(0,-130.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1800).wait(22));

	// Layer 9
	this.instance_1 = new lib.Sprvvvite9();
	this.instance_1.setTransform(0,-72.3,1.008,1,0,0,7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true},1795).wait(18));

	// Layer 7
	this.instance_2 = new lib.Sprvvvite9();
	this.instance_2.setTransform(0,-140);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true},1780).wait(13));

	// Layer 5
	this.instance_3 = new lib.Sprvvvite9();
	this.instance_3.setTransform(0,-137,1.006,1,0,0,-6.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({_off:true},1764).wait(9));

	// Layer 3
	this.instance_4 = new lib.Sprvvvite9();
	this.instance_4.setTransform(0,-16.9,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({_off:false},0).to({_off:true},1753).wait(5));

	// Layer 1
	this.instance_5 = new lib.Sprvvvite9();
	this.instance_5.setTransform(0,106.2,1,1,0,0,180);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(79).to({_off:false},0).wait(1743));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-199.2,240,197);


(lib.Sprite172 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 
	this.instance = new lib.Shape169("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({_off:true},1).wait(26));

	// 
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah2hIIADAAQAFAUAlAiQAuApAsAAQAjAAAggkQAZgcAFgTIAFgCIgKAtQAAARghAiQglAngiAAQhAAAgkhGQgVgogCgjg");
	this.shape.setTransform(14.7,331.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.682)").s().p("AhfADQgUgogCgjIADAAQAEATAmAjQAtApAsAAQAiAAAhgkQAZgdAEgSIAFgCIgJAtQgBARggAiQgkAngjAAQhAAAgkhGg");
	this.shape_1.setTransform(14.7,331.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah2hIIADAAQAFASAeAeQA2AvArAAQAlAAAggjQAYgcAFgUQAFABgBAEQgFAWgDAQQgBAOgUAWQgFAHgHAIQglAngjAAQgCAAgDAAQg+gCgihEQAAgBgBgBQgLgVgGgVQgEgRgBgOg");
	this.shape_2.setTransform(13.9,342.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.682)").s().p("AABBJQg+gCgihEIgBgCQgLgVgGgVQgEgQgBgPIADAAQAFATAeAdQA2AwArAAQAlAAAggkQAYgcAFgUQAFABgBAEIgIAmQgBAPgUAVIgMAPQglAngjAAIgFAAg");
	this.shape_3.setTransform(13.9,342.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3hIIADAAQAFASAfAeQA1AvAtAAQAlAAAhgiQAXgcAGgUQAEAAgBADQgDAXgEAQQgBAOgUAXQgFAHgIAHQgkAngkAAQgCAAgDAAQg/gCgihEQgBgBAAgBQgMgVgGgVQgEgQgBgPg");
	this.shape_4.setTransform(13.2,353.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.682)").s().p("AACBJQg/gCgihEIgBgCQgMgVgGgVQgEgQgBgPIADAAQAFASAfAeQA1AvAtAAQAlAAAhgiQAXgcAGgUQABAAABAAQABAAAAABQAAAAAAABQAAABAAAAQgDAXgEAQQgBAOgUAXIgNAOQgkAngkAAIgFAAg");
	this.shape_5.setTransform(13.2,353.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5hIIADAAQAFATAfAdQA2AwAuAAQAmAAAggjQAXgaAHgWQAEAAgBADQgDAXgEAQQgBAPgUAWQgGAHgHAHQglAngkAAQgDAAgCAAQhAgCgjhDQgBgBAAgBQgMgVgGgWQgEgQgBgPg");
	this.shape_6.setTransform(12.6,364.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.682)").s().p("AACBJQhAgCgjhDIgBgCQgMgVgGgWQgEgQgBgPIADAAQAFATAfAdQA2AwAuAAQAmAAAggjQAXgaAHgWQAEAAgBADQgDAXgEAQQgBAPgUAWIgNAOQglAngkAAIgFAAg");
	this.shape_7.setTransform(12.6,364.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6hIIADAAQAFASAfAeQA2AwAvAAQAnAAAggiQAXgZAHgYQAEAAAAADQgEAWgEARQgBAPgUAWQgGAHgHAIQglAmglAAQgCAAgDAAQhBgCgjhCQgBgCAAgBQgMgVgGgWQgEgQgBgPg");
	this.shape_8.setTransform(12,375.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.682)").s().p("AACBJQhBgCgjhCIgBgDQgMgUgGgXQgEgQgBgPIADAAQAFATAfAdQA2AwAvAAQAnAAAggiQAXgaAHgXQABAAABAAQABAAAAABQABAAAAAAQAAABAAABQgEAWgEARQgBAPgUAVIgNAPQglAnglAAIgFAAg");
	this.shape_9.setTransform(12,375.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah8hIIAEAAQAFATAfAdQA3AwAvAAQApAAAfghQAWgZAIgYQAFgBgBACQgDAXgFAQQgBAPgUAWQgFAIgIAHQglAngmAAQgCAAgCAAQhDgCgjhCQgBgBAAgCQgMgUgGgXQgEgQgCgPg");
	this.shape_10.setTransform(11.3,386.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhDgCgjhCIgBgDQgMgUgGgXQgEgQgCgPIAEAAQAFATAfAdQA3AwAvAAQApAAAfghQAWgZAIgYQACAAAAAAQABAAABAAQAAAAAAAAQABABgBAAQgDAXgFAQQgBAPgUAWQgFAIgIAHQglAngmAAIgEAAg");
	this.shape_11.setTransform(11.3,386.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah9hIIAEAAQAFATAgAeQA3AvAvAAQAqAAAgggQAVgZAJgZQAEgBAAACQgDAXgFAQQgCAQgTAWQgGAHgHAIQglAmgnAAQgCAAgDAAQhDgCgkhCQAAgBgBgBQgMgVgGgXQgEgQgCgPg");
	this.shape_12.setTransform(10.6,397.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhDgCgkhCIgBgCQgMgVgGgXQgEgQgCgPIAEAAQAFATAgAeQA3AvAvAAQAqAAAgggQAVgZAJgZQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQgDAXgFAQQgCAQgTAWIgNAPQglAmgnAAIgFAAg");
	this.shape_13.setTransform(10.6,397.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah+hJIADAAQAGAUAfAeQA3AvAxAAQArAAAfggQAVgYAKgaQAEgBAAABQgDAXgFARQgCAPgTAXQgGAHgHAIQglAmgoAAQgDAAgCAAQhFgCgjhCQgBAAgBgCQgLgVgHgXQgEgQgBgQg");
	this.shape_14.setTransform(10,408.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhFgBgjhCIgCgDQgLgUgHgYQgEgQgBgPIADAAQAGATAfAeQA3AvAxAAQArAAAfggQAVgYAKgaQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQgDAXgFARQgCAPgTAWIgNAQQglAmgoAAIgFAAg");
	this.shape_15.setTransform(10,408.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAhIIADAAQAGAUAhAdQA3AvAyAAQAsAAAfgfQAUgWALgcQAEgCAAACQgDAXgFAQQgCAQgUAWQgGAHgHAIQglAmgpABQgCAAgCAAQhHgCgjhCQgBgBgBgBQgMgUgGgYQgEgRgCgPg");
	this.shape_16.setTransform(9.4,419.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhFgBgkhCIgCgCQgLgVgHgXQgDgRgCgPIADAAQAFATAgAeQA4AvAyAAQAsAAAegfQAVgWALgcQABAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQgCAYgFAQQgCAQgUAVIgNAQQglAmgpAAIgFAAg");
	this.shape_17.setTransform(9.4,419.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiBhJIADAAQAGAUAhAeQA4AvAyAAQAtAAAfgeQAUgWALgdQAEgCAAABQgCAXgFARQgDAQgTAVQgGAIgIAIQglAmgpABQgDAAgCAAQhIgCgjhCQgBgBgBgBQgLgUgHgYQgEgRgCgQg");
	this.shape_18.setTransform(8.7,430.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.682)").s().p("AADBKQhHgCgjhCIgBgCQgMgUgHgYQgEgRgCgQIAEAAQAFAUAhAeQA4AvAyAAQAtAAAegeQAVgWALgdQABAAAAgBQABAAABAAQAAgBABAAQAAAAAAABQgDAXgFARQgDAQgSAVIgOAQQglAmgpABIgGAAg");
	this.shape_19.setTransform(8.7,430.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiChIIADAAQAHAUAgAeQA4AuAzAAQAvAAAegdQATgWAMgdQAEgDAAABQgBAXgGARQgDAQgTAWQgGAHgIAIQglAmgqABQgCAAgDAAQhIgCgkhBQgBgBAAgBQgMgVgHgYQgEgRgCgPg");
	this.shape_20.setTransform(8,441.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.682)").s().p("AAEBJQhIgBgkhBIgBgDQgMgUgHgYIgGggIADAAQAHATAgAeQA4AvAzAAQAvAAAegeQATgVAMgeQABAAABgBQABAAAAgBQABAAAAAAQAAAAAAAAQgBAXgGASQgDAQgTAVIgOAQQglAmgqAAIgFAAg");
	this.shape_21.setTransform(8,441.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiEhJIADAAQAHAUAgAeQA5AwA0AAQAwAAAegeQATgVAMgeQAFgEAAABQgCAXgFARQgEARgTAWQgGAHgHAIQgmAmgrAAQgCAAgDAAQhJgBglhBQAAgBgBgBQgMgVgHgYQgEgRgCgQg");
	this.shape_22.setTransform(7.4,452.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.682)").s().p("AAEBKQhJgCglhAIgBgDQgMgVgHgYQgDgQgDgRIAEAAQAGAVAgAdQA5AwA0gBQAvAAAfgdQASgVANgeIAEgDQgBAXgGARQgDASgTAVIgOAPQglAmgrABIgFAAg");
	this.shape_23.setTransform(7.4,452.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiFhJIADAAQAHAVAgAeQA5AuA1AAQAxAAAegcQASgUAOggQAEgEAAABQgBAXgGARQgEARgTAVQgGAIgHAIQgmAmgsABQgCAAgCAAQhLgCglhAQAAgCgBgBQgMgUgHgZQgEgRgCgQg");
	this.shape_24.setTransform(6.8,463.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.682)").s().p("AAFBKQhLgCglhAIgBgDQgMgUgGgZIgHghIADAAQAHAVAhAeQA4AuA1AAQAxAAAegcQASgUANggIAFgDQgCAXgFARQgEARgTAVIgOAQQglAmgsABIgEAAg");
	this.shape_25.setTransform(6.8,463.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiHhJIAEAAQAHAVAgAeQA5AvA2AAQAzAAAdgcQASgTAOghQAEgEABAAQgBAXgGASQgFARgSAVQgHAIgHAHQgmAmgsABQgDAAgCAAQhMgBgkhBQgBgBgBgBQgMgUgHgZQgEgRgDgRg");
	this.shape_26.setTransform(6.1,475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.682)").s().p("AAFBKQhMgBgkhBIgCgCQgMgUgHgZIgGgiIADAAQAHAVAgAeQA6AvA1AAQAzAAAdgcQASgTANghIAGgEQgBAXgHASQgEARgSAVIgOAPQgmAmgsABIgFAAg");
	this.shape_27.setTransform(6.1,475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiIhJIAEAAQAHAVAhAeQA5AvA2AAQA0AAAcgbQATgTAOgiQAFgEAAgBQgBAYgGASQgFARgSAVQgHAIgHAHQgmAmgtABQgDAAgCAAQhMgBglhAQgBgBgBgCQgMgUgHgZQgEgRgDgRg");
	this.shape_28.setTransform(5.4,486);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.682)").s().p("AAFBKQhMgBglhAIgCgDQgMgUgHgZIgHgiIAEAAQAHAVAhAeQA5AvA2AAQA0AAAcgbQATgTAOgiIAFgFQgBAYgGASQgFARgSAVIgOAPQgmAmgtABIgFAAg");
	this.shape_29.setTransform(5.4,486);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiJhJIAEAAQAHAVAhAeQA5AvA3AAQA1AAAcgbQASgSAPgjQAFgFAAAAQAAAXgHASQgFARgSAWQgGAHgIAIQgmAmguABQgCAAgCAAQhOgBglhAQgBgBgBgCQgMgUgHgZQgEgSgDgQg");
	this.shape_30.setTransform(4.8,497.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhOgBglhAIgCgDQgMgUgHgZIgHgiIAEAAQAHAWAhAeQA5AuA3AAQA1AAAcgbQASgRAPgkIAFgFQAAAYgHARQgFARgSAWQgGAHgIAIQgmAmguABIgEAAg");
	this.shape_31.setTransform(4.8,497.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiLhJIAEAAQAHAWAhAeQA7AvA4AAQA1AAAcgaQASgSAPgkQAFgFABgBQgBAYgGARQgFASgTAVQgGAIgIAIQgmAlgvABQgCAAgCAAQhQgBglg/QgBgBAAgCQgNgUgHgaQgEgRgDgRg");
	this.shape_32.setTransform(4.2,508.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhQgBgkhAIgDgCQgMgUgHgaIgGgiIADAAQAHAVAhAfQA7AuA3ABQA2AAAcgaQARgSAQgkIAGgHQgBAZgGASQgFARgTAUIgOAQQgmAmgvABIgEAAg");
	this.shape_33.setTransform(4.2,508.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiMhJIAEAAQAHAWAiAeQA6AuA5AAQA3AAAbgZQARgRARglQAEgGABgBQAAAYgHASQgFASgTAVQgGAIgIAHQgmAmgwABQgCAAgCAAQhQgBgmg/QAAgBgBgCQgNgUgHgaQgEgRgDgRg");
	this.shape_34.setTransform(3.5,519.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhQgBgmg/IgBgDQgNgUgHgaIgHgiIAEAAQAHAWAiAeQA6AuA5AAQA3AAAbgZQARgRARglIAFgHQAAAYgHASQgFASgTAVIgOAPQgmAmgwABIgEAAg");
	this.shape_35.setTransform(3.5,519.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiNhJIAEAAQAHAWAiAeQA6AvA6AAQA4AAAbgaQARgPARgnQAFgGAAgBQABAYgHASQgGASgSAVQgHAIgIAIQgmAlgwABQgDAAgCAAQhRgBgmg+QAAgCgBgBQgNgUgHgbQgEgRgDgRg");
	this.shape_36.setTransform(2.8,530.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhRgBgmg/IgBgDQgNgUgHgaIgHgiIAEAAQAHAWAiAeQA6AvA6gBQA4ABAbgaQARgQARgmIAFgIQABAZgHASQgGASgSAUQgHAJgIAHQgmAmgwABIgFAAg");
	this.shape_37.setTransform(2.8,530.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiPhJIAEAAQAIAWAiAeQA7AvA6AAQA5AAAbgaQAQgNASgoQAFgHABgBQAAAYgHASQgGATgSAUQgHAIgIAIQgmAlgxABQgCAAgDAAQhSAAgmg/QgBgBAAgCQgNgTgHgbQgEgSgEgRg");
	this.shape_38.setTransform(2.2,541.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhSgBgmg+IgBgDQgNgTgHgbIgIgjIAEAAQAIAWAiAeQA7AvA6AAQA5AAAbgaQAQgOASgnIAGgJQAAAZgHASQgGATgSATQgHAJgIAIQgmAlgxABIgFAAg");
	this.shape_39.setTransform(2.2,541.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiQhJIADAAQAIAWAiAeQA7AvA8AAQA6AAAbgaQAPgMATgpQAFgHABgCQAAAYgHATQgGASgTAUQgGAJgIAHQgmAmgzABQgCAAgCAAQhTAAgmg/QgBgBgBgBQgNgUgHgbQgEgSgDgRg");
	this.shape_40.setTransform(1.6,552.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhTAAgmg/IgCgCQgNgUgHgbIgHgjIADAAQAIAWAiAeQA7AvA8AAQA6AAAbgaQAPgMATgpIAGgJQAAAYgHATQgGASgTAUIgOAQQgmAmgzABIgEAAg");
	this.shape_41.setTransform(1.6,552.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiRhJIADAAQAJAWAiAfQA7AuA8AAQA8AAAagZQAPgMAUgpQAEgIABgCQACAYgIATQgHATgSAUQgHAIgHAIQgmAlg0ABQgCAAgCAAQhUAAgng+QgBgCgBgBQgMgUgIgbQgEgSgDgRg");
	this.shape_42.setTransform(0.9,563.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhUAAgng+IgCgDQgMgUgIgbIgHgjIADAAQAJAWAiAfQA7AuA8AAQA8AAAagZQAPgMAUgpIAFgKQACAYgIATQgHATgSAUIgOAQQgmAlg0ABIgEAAg");
	this.shape_43.setTransform(0.9,563.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiThKIAEAAQAIAYAjAeQA8AuA8AAQA9AAAagYQAPgLAUgrQAFgIABgCQABAXgIAUQgHATgSAUQgGAIgIAIQgmAlg1ACQgCAAgCAAQhVgBgng+QgBgBgBgBQgNgUgHgcQgEgSgEgSg");
	this.shape_44.setTransform(0.2,574.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhVAAgng+IgCgDQgNgUgHgbIgIgjIAEAAQAIAWAjAeQA8AvA8AAQA9AAAagYQAPgLAUgrIAGgKQABAYgIATQgHASgSAUQgGAJgIAIQgmAlg1ABIgEAAg");
	this.shape_45.setTransform(0.2,574.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiUhJIAEAAQAIAWAjAfQA8AuA9AAQA+AAAagXQAOgLAVgsQAFgIABgDQACAYgIATQgIATgRAUQgHAJgIAIQgmAlg1ABQgCAAgCAAQhXAAgng9QgBgCgBgBQgNgUgHgcQgEgSgEgRg");
	this.shape_46.setTransform(-0.4,585.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.682)").s().p("AAIBKQhXAAgng9IgCgDQgNgUgHgcIgIgjIAEAAQAIAWAjAfQA8AuA9AAQA+AAAagXQAOgLAVgsIAGgLQACAYgIATQgIATgRAUQgHAJgIAIQgmAlg1ABIgEAAg");
	this.shape_47.setTransform(-0.4,585.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiWhJIAEAAQAJAXAiAeQA9AuA+AAQA/AAAagXQANgJAWgtQAFgJABgDQACAYgIATQgIAUgSATQgHAJgHAIQgnAlg2ABQgCAAgCAAQhYAAgng9QgBgBgBgCQgMgTgIgdQgEgSgEgRg");
	this.shape_48.setTransform(-1,596.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhYAAgng9IgCgDQgMgTgIgdIgIgjIAEAAQAJAXAiAeQA9AuA+AAQA/AAAagXQANgJAWgtIAGgMQACAYgIATQgIAUgSATIgOARQgnAlg2ABIgEAAg");
	this.shape_49.setTransform(-1,596.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiXhKIAEAAQAIAXAjAfQA9AuA/AAQBAAAAagWQANgJAWguQAFgKABgDQADAYgJAUQgIATgRAVQgHAIgIAIQgnAlg2ACQgCAAgCAAQhZgBgog9QgBgBgBgBQgNgUgHgdQgEgSgEgSg");
	this.shape_50.setTransform(-1.7,607.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.682)").s().p("AAIBKQhZAAgog9IgCgDQgNgTgHgdIgIgkIAEAAQAIAYAjAeQA9AuA/AAQBAAAAagWQANgJAWguIAGgNQADAYgJAUQgIATgRAVQgHAJgIAHQgnAlg2ABIgEAAg");
	this.shape_51.setTransform(-1.7,607.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4AUQgsA3hFAAQhcAAgohAQgNgUgIgcIgIglIAEAAQAJAYAjAfQA4AuBGAAQBBAAAZgWQAOgKAcg7IACgBIABAIQAAAkgjApg");
	this.shape_52.setTransform(-2.2,618.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.682)").s().p("Ah9ALQgNgTgHgeIgIgkIADAAQAKAYAiAeQA4AvBFAAQBCgBAZgVQAOgKAcg7IABgCIABAIQAAAlgiApQgsA3hFAAQhcAAgohAg");
	this.shape_53.setTransform(-2.2,618.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},69).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[]},1).wait(26));

	// 
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWAKQgEAKgLAIIgMAIQgMAHgOAAIgXgBQgzgDgZgPIgLgJQgJgIgBgJIAAgKIAAgCQABgOAagIIAHgCIA1gEIAJABQAcACATAGQAUAHAIAMIACAEIACAKg");
	this.shape_54.setTransform(12.7,316.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.682)").s().p("AAKAqQgzgDgZgPIgLgJQgIgIgCgJIAAgKIAAgCQABgOAbgIIAGgCIA1gEIAJABQAcACATAGQAUAHAIAMIABAEIADAKIgCAKQgEAKgLAIIgMAIQgMAHgOAAg");
	this.shape_55.setTransform(12.7,316.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhggpQAAAAABgBQADgDAaAFQAnAMAbABIAMAAQAfACAXgJQABAAAAAAQAVgFAGACIABAAIACABIAAACIAAAPIAAADQgCAFAAAEQgBACgBACQgDAIgLAMIgBAAIgMALQgOAKgOADQgBAAgBABQgNADgMAAQgCAAgBAAQg2gCgcghIgLgMQgIgLgCgOIgBgMg");
	this.shape_56.setTransform(13.2,321.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.682)").s().p("AAIAtQg2gCgcghIgLgMQgIgLgCgOIgBgMIAAgCIABgBQADgDAaAFQAnAMAbABIAMAAQAfACAXgJIABAAQAVgFAGACIABAAIACABIAAACIAAAPIAAADIgCAJIgCAEQgDAIgLAMIgBAAIgMALQgOAKgOADIgCABQgNADgMAAIgDAAg");
	this.shape_57.setTransform(13.2,321.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahrg5QABgBABAAQAEAHAbARQArAbAfAEIANABQAiABAdgXQAAgBAAAAQAWgQAGgJIAEAAIgEAYQgBAGgBAFQgBACAAACQgBALgPAPQAAABAAAAIgOAOQgOAOgPAGQgBAAgCABQgPAHgOAAQgBAAgCAAQg7gBgggzIgKgQQgHgPgEgQIgCgPg");
	this.shape_58.setTransform(13.9,326.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.682)").s().p("AAHA6Qg7gBgggzIgKgQQgHgPgEgQIgCgOIAAgCIACgBQAEAIAbAQQArAbAfAEIANACQAiAAAdgXIAAgBQAWgPAGgKIAEAAIgEAZIgCAKIgBAFQgBAKgPAQIAAABIgOANQgOAOgPAGIgDABQgPAHgOAAIgDAAg");
	this.shape_59.setTransform(13.9,326.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARAXQAjAAAggkQAZgcAFgTIAFgCIgHAcQgDAKAAAHQAAANgRAUIgQASQgRATgRAJQgSALgTAAQhAAAgkhGIgJgUIgLgkIgDgRIAAgCIADAAQAEASAfAeIAHAGQAnAiAjAGg");
	this.shape_60.setTransform(14.7,331.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.682)").s().p("AhfADIgJgUIgLgkIgCgRIAAgCIADAAQADARAgAfIAHAGQAmAiAjAGIAQABQAiAAAhgkQAZgdAEgSIAFgCIgHAbQgCALAAAHQgBANgQAUIgQASQgRASgQAKQgTALgTAAQhAAAgkhGg");
	this.shape_61.setTransform(14.7,331.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_55},{t:this.shape_54}]},66).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[]},1).wait(52));

	// 
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiMgyIADgCQAYAPCAA1QATAAArgQQAugQASgQQgJARguAeQg4AmgmAAQhIAAgkgvQgSgWgGgig");
	this.shape_62.setTransform(14.9,307.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.682)").s().p("AhzAGQgTgWgGgiIADgCQAYAPCAA1QAUAAAqgQQAugQASgQQgJARguAeQg3AmgmAAQhJAAgjgvg");
	this.shape_63.setTransform(14.9,307.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtgcQAAgJAPgEQAZADBRAdQA1ACAWAJQAXgBAAgBQgNAPghAQQhFATghgNQgpgFgSgdQgJgMgDgTg");
	this.shape_64.setTransform(13.4,311.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.682)").s().p("AgmAlQgpgFgSgdQgJgMgDgTQAAgJAPgEQAZADBRAdQA1ACAWAJQAWgBABgBQgNAPghAQQgpALgbAAQgUAAgOgFgABuAAIAAAAIAAAAg");
	this.shape_65.setTransform(13.4,311.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgMQAAgQAbgIQAagIAiACQBYAFAAAlQAAAPgRANQgRAPgVAAQhTAAgbgcQgJgIgBgJg");
	this.shape_66.setTransform(12.7,316.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.682)").s().p("AhNAPQgIgIgCgJIAAgKQAAgQAcgIQAZgIAiACQBYAFAAAlQAAAPgRANQgSAPgUAAQhTAAgbgcg");
	this.shape_67.setTransform(12.7,316.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63},{t:this.shape_62}]},64).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[]},1).wait(55));

	//  0
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACIgTIguAsIgDACQgnAggjAAIgRgBQhIgEgbgpIgFgKIgMgaQgIgXgHgIIACgCIAAgBQATgBATANIAlAeQAhAYAhAKIAvAHIAOgGIA/gmg");
	this.shape_68.setTransform(-4.9,294.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.682)").s().p("AgEA6QhHgEgcgpIgFgKIgMgaQgIgXgHgIIACgCIABgBQASgBAUANIAkAeQAhAYAhAKIAvAHIAOgGIA+gmIAFgBIguAsIgDACQgoAggiAAg");
	this.shape_69.setTransform(-4.9,294.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiHg0IACgCQATADASAKIAoAZQAiATAiANQAWADAYgDIAvgUQASgKANgJQgPAUgbAUQgCABgBABQgCACgCABQgCABgBABQgkAageAEQgFAAgEABIgJAAQgDAAgEAAQhAgDgeglQgCgCgCgCIgDgFIgOgZQgIgUgFgNg");
	this.shape_70.setTransform(4.8,301.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.682)").s().p("AAAA3IgHAAQhAgDgeglIgEgEIgDgFIgOgZIgNghIAAAAIACgCQATADASAKIAoAZQAiATAiANQAWADAYgDIAvgUQASgKANgJQgPAUgbAUIgDACIgEADIgDACQgkAageAEIgJABg");
	this.shape_71.setTransform(4.8,301.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABTARQgpAcghAGIgRACQhCAAgjgnIgHgIIgNgVQgIgPgDgTIAAgBIADgCIABABICXBDQAQAAAggLIAqgPQAYgLAMgLIgDAFQgMARgoAZg");
	this.shape_72.setTransform(14.9,307.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.682)").s().p("AhtAOIgGgIIgOgVQgHgPgEgTIAAgBIADgCIABABICXBDQAQAAAggLIAqgPQAYgLAMgLIgDAFQgMARgoAZIgDACQgqAcggAGIgQACQhDAAgjgng");
	this.shape_73.setTransform(14.9,307.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69},{t:this.shape_68}]},62).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[]},1).wait(57));

	// 
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAVQgbAVgeADIgLABQgpAAgigrIgBgCIgRgWIgLgYIAEAAIAeAFQARAEASAHIBGAlIAMgDIAXgJIAlgXIgDAGQgKAWgZATg");
	this.shape_74.setTransform(-5.7,289.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.682)").s().p("AhMACIgBgBIgRgWIgLgYIAEAAIAeAEQARAFASAHIBGAlIAMgDIAXgJIAlgXIgDAGQgKAWgZASIgBABQgbAWgeADIgLABQgpAAgigsg");
	this.shape_75.setTransform(-5.7,289.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvgwIACAAQARABAPAFQASAHASAJIAbAQQAXAMAaAKIARgEQAIgDANgFIAngZIAAAEQgPAYgXASIgBABIAAABQgdAWgfADQgBAAgBAAIgLABQAAAAgBAAQgwgBghgrIAAgBQAAgBgBAAQgHgJgIgPQgBgBAAAAQgGgPgGgLg");
	this.shape_76.setTransform(-5.6,290.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.682)").s().p("AgBAxQgwgBghgrIAAgBIgBgBQgHgJgIgPIgBgBIgMgZIACgBQARABAPAFQASAHASAJIAbAQQAXAMAaAKIARgEIAVgIIAngZIAAAEQgPAYgXASIgBABIAAABQgdAWgfADIgCAAIgLABIgBAAg");
	this.shape_77.setTransform(-5.6,290.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gyIABgBQATABAQAHQATAKARAKIAcASQAZANAcAIIASgCQAIgCAQgJIAqgZIACACQgVAbgVAQIgBABQAAAAAAABQghAZgfACQgBAAgBAAIgLAAQgBAAgBAAQg4gCgegqIgBgBQAAgBgBAAQgHgKgJgSQAAAAAAgBQgHgRgGgKg");
	this.shape_78.setTransform(-5.3,291.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.682)").s().p("AALA0IgLAAIgCAAQg4gCgegqIgBgBIgBgBQgHgKgJgSIAAgBQgHgRgGgKIABgBQATABAQAHIAkAUIAcASQAZANAcAIIASgCQAIgCAQgJIAqgZIACACQgVAbgVAQIgBABIAAABQghAZgfACIgCAAg");
	this.shape_79.setTransform(-5.3,291.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah/g1IACgBQATAAARAKQATAMARAMIAdAUQAbAOAfAGIAUAAQAGgCATgKIAsgcIAFAAQgaAegTAPIgBABQgBAAAAAAQgjAcghABQgBAAgBAAIgMAAQgBAAgBAAQg/gEgdgpIgBAAQAAgBgBgBQgHgJgIgWQgBgBAAAAQgHgUgHgJg");
	this.shape_80.setTransform(-5.1,293.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.682)").s().p("AALA3IgMAAIgCAAQg/gEgdgpIgBgBIgBAAQgHgKgIgWIgBgBQgHgTgHgJIACgCQATAAARAKIAkAXIAdAVQAbAOAfAGIAUgBQAGAAATgLIAsgbIAFgBQgaAdgTAQIgBABIgBABQgjAbghABIgCAAg");
	this.shape_81.setTransform(-5.1,293.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACIgTQgfAggSAOIgCACQgmAegiAAIgOgBQhJgEgbgoIgCgBQgIgMgJgYQgIgXgHgIIACgCIAAgBQATgBATANIBCAwQAgATAmADIAOABQAFAAAWgOIAvgcg");
	this.shape_82.setTransform(-4.9,294.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.682)").s().p("AgCA6QhHgEgdgoIgBgBQgIgMgJgYQgIgXgHgIIACgCIABgBQASgBAUANIBBAwQAgATAlADIAPABQAFAAAWgOIAvgcIAHgDQgfAggSAOIgCACQgnAeghAAg");
	this.shape_83.setTransform(-4.9,294.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_75},{t:this.shape_74}]},58).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[]},1).wait(59));

	// 
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABYAdQgdAbg/AEIgWABQgyAAgegsIgJgOQgKgQgGgVIgFgSIAAgBIABgHIABADQAXAJAWAiQARAOAiAHIBKAGIACAAQATAAAZgLIA3gfQgMAJgKANIgXAfg");
	this.shape_84.setTransform(-5.8,279.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.682)").s().p("AhrARIgIgOQgKgQgHgVIgEgSIAAgBIABgHIABADQAYAJAVAiQARAOAiAHIBJAGIACAAQAUAAAYgLIA4gfQgMAJgKANIgXAfIgEAFQgdAbhAAEIgVABQgxAAgggsg");
	this.shape_85.setTransform(-5.8,279.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah/gzIACgGQAYAKAXAdQASANAcAGQAjAGAhAFQAWgBAXgKIAvgaQgDAFgIAKQgCACgCADIgYAeQgCABgBACQgcAag6ADQAAAAgBAAIgQAAQgCAAgDAAQgtgBgegqIgIgNQgKgPgHgTIgFgSg");
	this.shape_86.setTransform(-6.1,281.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.682)").s().p("AgBA6IgQAAIgFAAQgtgCgegqIgIgNQgKgPgHgTIgFgSIAAAAIADgFQAXAJAXAdQASANAcAGIBFALQAVAAAXgLIAvgaIgLAPIgEAFIgYAeIgDADQgdAag5AEIgBAAg");
	this.shape_87.setTransform(-6.1,281.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5gyIADgEQAYAJAXAXQASAMAaAIQAgAGAeAHQAUgBAXgKIAsgZQgEAHgHAJQgCADgCACIgWAbIgBABQgCABgBABQgeAagzADQAAAAgCAAIgPAAQgCgBgCAAQgqgDgdgoIgIgLQgJgPgHgSIgFgQg");
	this.shape_88.setTransform(-6,283.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.682)").s().p("AgCA3IgPAAIgEgBQgqgDgdgoIgIgLQgJgPgHgSIgFgQIAAgBIADgDQAYAHAXAYQASAMAaAIIA+ANQAUgBAXgKIAsgZIgLARIgEAEIgWAaIgBACIgDADQgeAZgzADIgCAAg");
	this.shape_89.setTransform(-6,283.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah0gwIAFgDQAWAGAYATQATAKAXAJQAfAIAbAJQASgBAWgJIAqgaQgFAJgHAKQgCACgCADIgVAXIgCACQgBABgCACQgeAYgtACQgBAAgBAAIgPgBQgCAAgBAAQgngFgcgmIgHgJQgJgPgIgQg");
	this.shape_90.setTransform(-5.9,285.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.682)").s().p("AgDA0IgOgBIgEgBQgmgEgcgmIgHgJQgJgPgIgQIgFgQIAFgDQAXAGAXATQASAKAZAIIA4ASQATgBAWgKIApgZIgLATIgEAFIgWAYIgBABIgDACQgeAZgtACIgDAAg");
	this.shape_91.setTransform(-5.9,285.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhugvIAFgBQAXAEAYAOQASAIAWAKQAcAMAXAJQARgBAWgKIAngZQgGANgGAJQgCABgCACIgWAXQgCACgBABQgfAYgoABQgBAAgBAAIgOgBQgCAAgBgBQgjgGgbgjIgHgKQgIgNgIgPg");
	this.shape_92.setTransform(-5.8,287.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.682)").s().p("AgDAxIgOgBIgDgBQgjgHgbgiIgHgJIgQgdIgFgOIAFgCQAXAEAYAOIAoASIAzAUQARAAAWgKIAngZIgMAVIgEAFIgWAXIgDACQgfAYgoABIgCAAg");
	this.shape_93.setTransform(-5.8,287.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAVQghAZgjAAIgQgBQgggHgbgjIgYgjIgFgNIAIAAQAVACAaAJQARAHAUAKQAZANAVALIABABQALAAAYgMIAlgXIgNAXIgVAVg");
	this.shape_94.setTransform(-5.7,289.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.682)").s().p("AgRAtQgggHgbgkIgYgiIgFgNIAIAAQAVACAaAJQARAHAUAKQAZANAVALIABABQALAAAYgMIAlgXIgNAXIgVAVIgFADQghAagjAAg");
	this.shape_95.setTransform(-5.7,289.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_85},{t:this.shape_84}]},53).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[]},1).wait(63));

	// 
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1geIgJgRIAIACIABAAIBTAfQAzAWAgAAQAXAAAXgNIAOgMQALgMADgNIADAAIABAAIABAIQAAAHgEACQgDAEgBAFIAAABQAAAPgVANIgdAPQgtAUgjAAQgvAAglgtIgCgCQgKgLgLgUg");
	this.shape_96.setTransform(12,278.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.682)").s().p("AheAEIgCgDQgLgLgKgUIgJgRIAIACIABAAIBTAgQAzAVAfAAQAYAAAWgOIAPgLQALgLACgOIAEAAIABgBIABAJQgBAGgDADQgDAEgBAFIAAABQAAAPgVANIgdAPQgtAUgkAAQguAAglgsg");
	this.shape_97.setTransform(12,278.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAguIAHAAQAmAPAlAUQArASAZACQAbADAggMQAZgPAKgOIANgHQgCAOgEAFQgGAGgDAIQgCADgEABQgIAPgfALIgWAMQgvAPgjgOQgjAAgcgiQgDgFgDgEQgIgMgJgSg");
	this.shape_98.setTransform(7.4,278.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.682)").s().p("AgjAoQgjAAgcgiIgGgJQgIgMgJgSIgHgNIAHAAQAmAPAlAUQArASAZACQAbADAggMQAZgPAKgOIANgHQgCAOgEAFQgGAGgDAIIgGAEQgIAPgfALIgWAMQgZAIgVAAQgSAAgSgHg");
	this.shape_99.setTransform(7.4,278.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiCgvIAEgCQAiAOAfAYQAiAOAXAEQAcAHAqgIQAZgJARgPIAXgNQgFANgGAGQgHAKgGAIQgFAGgIAFQgQAQgoAHIgQAIQgwAKgjgcQgYAAgTgXQgFgIgEgLQgGgLgHgPg");
	this.shape_100.setTransform(3,278.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.682)").s().p("Ag8AeQgYAAgUgXQgFgIgEgLQgGgLgGgPIgFgJIAFgCQAhAOAgAYQAiAOAWAEQAcAHAqgIQAZgJARgPIAXgNQgGANgFAGIgNASQgFAGgIAFQgQAQgoAHIgQAIQgNACgLAAQghAAgZgUg");
	this.shape_101.setTransform(3,278.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiEgxIADgFQAdAMAaAeQAZAMASAEQAfAKA0gEQAYgGAYgNIAhgUQgJANgHAHQgIALgJAOQgHAIgMAGQgZARgxAEIgHAEQg1AEghgoQgMgCgKgMQgIgMgFgQQgEgKgFgMg");
	this.shape_102.setTransform(-1.5,279.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.682)").s().p("AhWATQgMgCgKgMQgIgMgFgQIgJgWIgCgEIADgFQAdAMAaAeQAZAMASAEQAfAKA0gEQAYgGAYgNIAhgUQgJANgHAHIgRAZQgHAIgMAGQgZARgxAEIgHAEIgLAAQgtAAgegkg");
	this.shape_103.setTransform(-1.5,279.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACCgXIgQARIgVAeQgKAMgQAIQghAQg5ABIgCAAQg4AAggg3IgCgDQgKgQgGgVIgFgSIAAgBIABgHIABADQAYAJAVAiIAeAOQAjANA8AAIABAAQAYAAAfgOIArgaIACgBg");
	this.shape_104.setTransform(-5.9,279.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.682)").s().p("AgaA9Qg3AAgfg3IgCgDQgKgQgHgVIgFgSIAAgBIABgHIABADQAYAJAVAiIAeAOQAjANA8AAIABAAQAXAAAggOIAqgaIADgBIgHAFIgQARIgVAeQgKAMgQAIQghAQg5ABg");
	this.shape_105.setTransform(-5.9,279.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_97},{t:this.shape_96}]},49).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[]},1).wait(68));

	// Layer 16
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgjgSIBMAMQAHAAAbgLIAJgEIAlgMIgCAEIAAABIgUAkQgMARgQAIIgeAHIgrgGQgfgIgdgSIg6grIACgDIABgBQAMABAhAKIAkAKg");
	this.shape_106.setTransform(16.9,185.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.682)").s().p("AgCAiQgfgHgdgTIg6grIABgCIACgCQAMABAhAKIAkAKIABAAIBLAMQAIAAAagLIAKgEIAlgMIgCAEIAAABIgUAkQgNARgPAIIgfAGg");
	this.shape_107.setTransform(16.9,185.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABtgFQgCACAAADQgCAAgCACQgBACgDABQgCADAAAAQgBACgBAAQgIAKgLAGQgFACgFACIgJACQgGACgFABQgMAAgLgCIgXgDQgGgCgHgDQgSgFgRgKQgBAAAAAAQgGgDgFgCIgVgOQgTgOgRgLIgBgBIgCgCIgBAAIABgBQAOAEAeAKIAdAKQAiAKAaADQAMABAMAAQAGAAAQgEQAGgCAHgDIAPgGQAQgFAPgGQAAACgBABQAAAAAAABQAAABAAACQgEAGgEAHQAAAAAAABgAh4gmIABgBQAQABAeAKIAlALIBOANQALAAAYgKQAIgEABgBQASgGAQgIIACgBIgBACIABAAIgEAIQAAABgBABQgBADgCADQgCAEgCAEQgBABAAACQgDAFgFAIQgBAAAAABQgMAPgQAJQgDAAgCABIgaAGIgFgBQgUAAgSgDQgCAAgCgBQgegGgcgTIAAAAIgRgMQgUgQgUgT");
	this.shape_108.setTransform(16.2,199);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.682)").s().p("AAZAjIgXgDIgOgFQgRgFgSgKIgBgBIgKgEIgVgOIgkgaIgBAAIgDgCIAAAAIAAAAQAPACAdALIAeAKQAiAKAZACIAYACQAHgBAQgDIAMgFIAQgGIAfgLIgBADIAAABIgDAGIgFAIIgBADIABgDIAFgIIADgGIgBADIgHANIgBABIgCADIgDAEIgEAEIgDACIgBACQgJAKgLAGIgKADIgJADIgLACQgLAAgLgBg");
	this.shape_109.setTransform(16,198.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5gnIACAAQARABAdAKIAlALIBPARQAMgCAXgKQAJgEABgBQATgHANgKIACAAIAAABIAAACIgCAGQgCAFgCADIAAAAQAAACAAAAQgBAEgDADQAAABgBAAQgBABAAACQgBABgBABQgCABgCABQgCAAgBAAQgBABAAABQgIALgLAHQgFABgFADIgJACQgGADgFABQgMAAgLAAIgYgEQgFgCgIgCQgTgGgRgJQgBgBAAAAQgGgCgFgEIgXgMQgUgNgRgLIgCgBIgCgBIAAAAIAAgBQAPAIAaAMIAdAMQAiAKAaADQAMACANAAQAHAAAPgGQAGgCAHgBIAQgGQARgGAOgGQAAABAAAAQAAABAAAAQgDAEgBAEQAAABAAAAQgDAIgGAHQAAABgBAAQgMAPgSAJQgCABgDAAIgZAHIgFAAQgVAAgTgBQgBAAgCgBQgggFgcgUIAAAAIgRgNQgTgRgTgVIAAgBg");
	this.shape_110.setTransform(15.4,212.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.682)").s().p("AAoAnQgVABgTgCIgDAAQgggGgcgUIAAAAIgRgMQgTgRgTgVIAAAAIACABIACABIAlAYIAXAMIALAGIABABQARAJATAGIANAEIAYADIAIABIAGAAIABAAIABAAIADAAIAEAAIALgEIAJgDIAKgDQALgIAIgKIABgCIADgBIAEgBIACgCQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIABgBQgDAIgGAHIgBABQgMAPgSAJIgFABIgZAHgAAtAeIgGAAIgIgBIgYgDIgNgEQgTgGgRgJIgBgBIgLgGIgXgMIglgYIgCgBIgCgBIAAAAIAAgBIAAABIAAgBIAAAAIApATIAdANQAiAKAaADIAZACQAHgBAPgFIANgDIAQgGIAfgMIAAABIAAABQgDAEgBAEIAAABIgBABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIgCACIgEABIgDABIgBACQgIAKgLAIIgKADIgJADIgLAEIgEAAIgDAAIgBAAIgBAAgABzgJQABgEADgEIAAACQgBADgDAEIAAgBgAB3gRIAAAAgAh2gmg");
	this.shape_111.setTransform(15.1,212.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6goIACAAQASACAdAKIAlAMIBQAQQAOAAAWgJQAJgFABAAQATgKAMgKIABgCIAAAAIABABIAAAAIgCAIQgBAFgCAEQgDADgBADQAAABAAABQAAABgBABQgBgBABABQAAABgBgBQgCAAgBgBQgCACgCAAQAAACgBABQgHAJgLAIQgFACgFADIgJADQgGACgFACQgMABgMgBIgYgDQgIgCgGgCQgSgGgRgIQAaAJAUACQAMABANAAQAIgBAPgFQAGgCAGgDIARgFQARgGAOgGQABAAAAAAQAAABABAAQABACgDABQgCAIgGAGQgBABAAAAQgMAPgTAJQgDABgCAAIgaAIIgFAAQgWACgSgBQgCAAgCgBQgggEgdgVIgRgPQgSgQgTgYIAAAAQAPAMAXAMIAcAQQAIABAHADQgBgBgBAAQAAgBgBAAQgFgCgGgBIgXgOQgWgNgSgKIgBAAIgCgCIgBAA");
	this.shape_112.setTransform(14.7,225.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.682)").s().p("AAgAhIgYgDIgOgEQgSgGgRgIQAaAJAUACIAZABQAIgBAPgFIAMgFIARgGIAfgLIABAAIAAACIgBACQgBgBABABIgBAAIgDgBIgEABIgBACQgHALgLAIIgKAFIgJADIgLAEIgPAAIgJAAgAAFAXQgUgCgagJIgCgBIgBgBIgLgFIgXgMIgogXIgBAAIgCgCIgBAAIAAAAIACAAQASACAdAKIAlAMIBQAQQAOgBAWgIIAKgFQATgKAMgKIABgCIAAAAIABABIAAAAIgCAIQgBAFgCAEIgEAGIgBAAIgfALIgRAGIgMAFQgPAFgIABIgZgBgAgpAMIAAAAgAg4AGIgcgOQgXgMgPgMIABAAIACACIABAAIAoAXIAXAMIALAFIABABIACABIgPgGgABxAAIABgCIAAgCIABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABIAAAAgABygEIAAAAg");
	this.shape_113.setTransform(14.7,224.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7gpIACgBQASADAdAKIBPAaIAoAFQAPgBAVgIQAKgFABgBQATgKAKgMIABgCIAAAAIACAAIAAABIAAABIgBAGQgBAGgDADQgCADgBADIAAAAQgBgBgCgCQgCABgBABQgBABgBABQgDAGgFAGQAFgDAFgCQABAAABAAIABAAQABgBAAAAQgCAHgGAGQAAAAgBABQgLANgUAKQgDABgCABIgfAIQgXADgTAAQgCgBgCAAQghgDgdgWIgRgRQgSgPgSgaAAlAVIgBAAIgYgEQgIgBgGgCQgTgHgTgHQgBAAAAAAQgGgDgGgDIgYgNQgYgMgSgJIgBAAIgCgBIgBAAQAAAAAAAAQAPAPAVAOIAaAQQAiARAbACQANABANgBQAFAAAGgCQAFgBAHgCQAGgDAHgCIARgHQAMgEAJgDQgEADgGAEQgEADgGACIgJAEQgFADgGABQgLADgMgBgAB0gMQgBAAAAABQAAABAAAAIAAAAQgBgCABAAgABzgKQAAACgBABAB0gOQAAABAAAB");
	this.shape_114.setTransform(14,238.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(255,255,255,0.682)").s().p("AAAAgQgbgBgigSIgagPQgVgOgPgPIAAgBIABAAIACABIABABIAqAUIAYAMIAMAFIABABIAmAPIAOAEIAYAEIABAAIgLACIgJAAIgRgBgAAlAfIAMgEIANgFIARgGIAVgJIgKAIIgKAGIgJAEIgLAEQgKACgKAAIgDAAgAAkAfIgYgEIgOgEIgmgPIgBgBIgMgFIgYgMIgqgUIgBgBIgCgBIgBAAIACAAQASACAdAKIBPAYIAoAHQAPAAAVgKIALgEQATgKAKgNIABgBIAAgBIACABIAAAAIAAACIgBAGQgBAFgDAEIgDAGIgBABIAAAAIAAACIAAAAIAAABIAAgBIAAAAIAAgCIAAAAIAAACIAAABIgBABIgBAAIgBAAIgCAAIgKAGQAFgGADgEIACgDIADgBIADACIAAABIAAgBIgDgCIgDABIgCADQgDAEgFAGIgVAJIgRAGIgNAFIgMAEgABkAHIAAAAg");
	this.shape_115.setTransform(14,237.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7grIABAAQATADAcAKIBRAdIAoAFQARAAAUgIQAJgGABgBQAUgLAIgOIABgCIAAgBIACABIABAAIAAABIAAAHQgBAFgDAEQgBAAAAABQAAgBAAAAQgBgCgBgCQgDABgBAAQAAABgBACQgFAMgNAJQgEACgGADIgJAFQgFACgGACQgMADgNAAIgYgEQgIgCgIgCQgSgHgUgGQAAAAgBgBQgGgCgFgDIgZgNQgagMgSgHIgCAAgAB2gQQAAAAAAAAQACgBAAgDQgBACgBACQgBACAAACIAAAAQgBAEgBADAh8grQAPAUASAPIAZASQAiAUAeABQALABANgBQAKgCANgEQAHgCAHgDIARgGQASgIANgGQACAAABgBQACgBAAAAQACgCABgBQgCAFgFAFQgBAAAAABQgMANgVAKQgCABgDABIgfAJQgXAFgUAAQgCgBgCAAQghgCgegXQAAgBAAAAIgRgRQgRgPgSgdIAAAAIAAAAIABAAAB1gMQgBgCACgC");
	this.shape_116.setTransform(13.3,252.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("rgba(255,255,255,0.682)").s().p("AgCAmQgegBgigVIgZgSQgSgOgPgUIAAAAIAAgBIABAAIACABIACABIAsATIAZANIALADIABABIAmAPIAQADIAYAEIACAAIABAAIAAAAIABAAQAJAAAJgCIADgBIALgEIAJgEIAKgHQANgIAFgMIABgDIAEgBIACAFIAAAAIAAAAIAAAAIAAAAIgCgFIgEABIgBADQgFAMgNAIIgKAHIgJAEIgLAEIgDABQgJACgJAAIgBAAIAAAAIgBAAIgCAAIgYgEIgQgDIgmgPIgBgBIgLgDIgZgNIgsgTIgCgBIgCgBIABAAQATAEAcAKIBRAaIAoAHQARAAAUgKIAKgEQAUgMAIgOIABgCIAAAAIACAAIABAAIAAACIAAAGQgBAGgDADIgBABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAAABIACgFIgCAFQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIgCAFIgDACIgCACIgDABQgNAIgSAHIgRAHIgOAFQgNAEgKABIgRABIgHAAgAB2gJIAAAAg");
	this.shape_117.setTransform(13.3,251.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB3ghQABgDABgCIACgCIAAgBIADAAIAAACIAAAGQAAAGgDADQABgBAAgDQgBgDgBgDQgCAAgBABQAAAAgBAAQAAABgBABQAAABAAABQABgCABgCgAh4gsQATAEAaAJIBRAfIApAGQASgBATgIQAKgGABgBQAPgIAHgLQgEAMgNAKQgFAEgFADIgJADQgGADgFACQgNAEgMAAIgZgEQgIgCgJgBQgSgGgUgHQgBgBAAAAQgGgDgGgDIgagMQgbgLgTgGgAB4gTQAAgBABgBQACgBAAgCQAAABAAAAQgCACgBACgAB2gLQAAgBAAgCQAAgDACgCQgBADAAACQAAACgBABQAAADgCADQgCAFgEADQgBABAAAAQgMANgWAKQgDABgCABIggALQgYAGgUAAQgBAAgCAAQgjgBgegZQAAgBgBAAIgRgRQgQgQgRgfQAPAYAPAQIAYAVQAjAXAeAAQALABAOgCQAKgCANgEQAHgCAHgDIARgGQATgIANgJQACgBACgBQABgBABgBQAEgCABgDAh7gtIABAAQABABABAAIgCAAIgBgBIgBAAIgBAAIAAAAAh9gtIACAA");
	this.shape_118.setTransform(12.6,265.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(255,255,255,0.682)").s().p("AgFArQgegBgjgXIgYgUQgPgQgPgYIAAgBIABAAIABABIgCgBIACABIABAAIACAAQATAGAbAMIAaAMIAMAFIABABIAmANIARADIAZAFQAMAAANgEIALgFIAJgFIAKgFQANgLAEgMIACgEIADgBIACAHIAAADIgBABIgDAEQgCADAAADIABABIgBABIgCAGIgFAFIgCACIgEADQgNAIgTAIIgRAHIgOAFQgNAEgKABQgLACgJAAIgFAAgAAVALIgRgDIgmgNIgBgBIgMgFIgagMQgbgMgTgGQATAEAaAKIBRAdIApAHQASAAATgJIALgGQAPgJAHgLQgEAMgNALIgKAFIgJAFIgLAFQgNAEgMAAgAB3gIIABgBIgBgBQAAgDACgDIgBAGIgBACIAAAAgAB8gUIABgBQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgBABIADgEgAB2gaIAAAAgAB2gbIABgDIABAAIgCAEIAAgBgAh3gpgAh5gpIgBAAIABAAIACAAg");
	this.shape_119.setTransform(12.5,265.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AheADQgQgPgQgiIAAgBIAEABIABAAQATAEAdAMIAnAQIABACIAnANIArAHQASAAATgIIAJgFQAWgPAFgTIABgDIADAAIABAAIABAIQAAAHgEACQgEAEAAAGQAAAKgKAIQgMANgcAMIggAMQgaAIgWAAQgkAAgegag");
	this.shape_120.setTransform(12,278.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(255,255,255,0.682)").s().p("AhMAWIgSgSQgPgRgRghIAAgBIADABIACAAQATAFAdALIAnARIABABIAnAMIAqAIQATAAASgIIAJgGQAXgOAEgTIABgDIAEAAIABgBIABAJQgBAGgDADQgEAEAAAGQAAALgKAIQgMANgcALIggAMQgaAIgXAAQgjAAgegag");
	this.shape_121.setTransform(12,278.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_107},{t:this.shape_106}]},42).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[]},1).wait(72));

	//  0
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(77,77,77,0.4)").s().p("AgSgEQgigJgaAyQADguAMgWQAFgJAIABQAIABAQAHQAPAHBaBAQhCglgfgHg");
	this.shape_122.setTransform(6.9,274.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(77,77,77,0.4)").s().p("AgKAMIgPgDQglgIgDAOIgDABIAHgLQAQgKASgIQAHgEAIABQAKAAAKAGIA9Abg");
	this.shape_123.setTransform(6.9,280);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(77,77,77,0.4)").s().p("AgzAYQg1gUANgDIgCgGIANgHQBfAnBQg2QhLA3gvAAQgNAAgLgEg");
	this.shape_124.setTransform(11.7,285.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(77,77,77,0.4)").s().p("AAhgdQALAdAIgBQhBAYgmAHQAsgYAogjg");
	this.shape_125.setTransform(15.7,287.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(77,77,77,0.4)").s().p("AASgbIAbAkIAAAIQg3gegiArQAbhFAjAMg");
	this.shape_126.setTransform(17.3,290.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAuAUIAKAWQgzhYg8BWIALgjQALgdANgLQAbgYAnBPg");
	this.shape_127.setTransform(17.7,293.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(77,77,77,0.4)").s().p("Ag3AoIALgjQALgdANgLQAbgYAnBPIAKAWQgzhYg8BWg");
	this.shape_128.setTransform(17.7,293.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAGgSAGgSQALgcAPgLQAcgYApBPIAHAUQg0hXg+BXg");
	this.shape_129.setTransform(16.9,304.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(77,77,77,0.4)").s().p("Ag4ApIALgkQALgcAPgLQAcgYApBPIAIAUQg1hXg9BXg");
	this.shape_130.setTransform(16.9,304.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag6ApQAGgTAGgSQALgcAQgLQAdgYArBQIAGASQg3hWg+BYg");
	this.shape_131.setTransform(16.1,315.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(77,77,77,0.4)").s().p("AguAEQALgcAQgLQAdgYArBQIAGASQg3hWg+BYIAMglg");
	this.shape_132.setTransform(16.1,315.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag8ApQAHgTAGgRQAMgcARgMQAfgXArBPIAFARQg5hVhABYg");
	this.shape_133.setTransform(15.3,327.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(77,77,77,0.4)").s().p("AgvAFQALgcASgMQAfgXArBPIAFARQg5hVhABYIANgkg");
	this.shape_134.setTransform(15.3,327.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag+ApQAHgTAHgSQAMgcATgLQAggXAsBPIAEAPQg8hThBBYg");
	this.shape_135.setTransform(14.5,338.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(77,77,77,0.4)").s().p("AgwAEQALgcAUgLQAfgXAtBPIAEAPQg8hThBBYIAOglg");
	this.shape_136.setTransform(14.5,338.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag/ApQAHgUAHgSQAMgbAVgLQAhgXAuBPIACAOQg+hThCBZg");
	this.shape_137.setTransform(13.7,349.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(77,77,77,0.4)").s().p("AgxADQALgbAWgLQAggXAvBPIACAOQg/hThCBZIAPgmg");
	this.shape_138.setTransform(13.7,349.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCApQAIgUAIgTQALgaAYgMQAhgWAvBPIACAMQhBhShEBag");
	this.shape_139.setTransform(12.9,361.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(77,77,77,0.4)").s().p("AgyACQALgaAYgMQAhgWAvBPIABAMQhAhShEBaIAQgng");
	this.shape_140.setTransform(12.9,361.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhEApQAJgVAIgSQAMgaAYgMQAjgVAwBOIAAALQhDhRhFBag");
	this.shape_141.setTransform(12.1,372.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("rgba(77,77,77,0.4)").s().p("AgzACQAMgaAYgMQAjgVAxBOIgBALQhDhRhFBaIARgng");
	this.shape_142.setTransform(12.1,372.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhGApQAJgVAIgSQAMgaAbgMQAjgVAyBOIgCAJQhFhQhGBbg");
	this.shape_143.setTransform(11.3,383.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(77,77,77,0.4)").s().p("Ag0ACQALgaAbgMQAjgVAyBOIgCAJQhFhQhGBbIASgng");
	this.shape_144.setTransform(11.3,383.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhJAqQAKgWAIgTQANgZAcgMQAlgVAzBPIgEAHQhGhPhJBcg");
	this.shape_145.setTransform(10.6,395.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("rgba(77,77,77,0.4)").s().p("Ag2ABQALgZAdgMQAkgVA0BPIgEAHQhGhPhIBcIASgpg");
	this.shape_146.setTransform(10.6,395.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhLApQAKgWAJgTQAMgZAegMQAmgUA0BOIgFAGQhHhOhLBcg");
	this.shape_147.setTransform(9.9,406.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("rgba(77,77,77,0.4)").s().p("Ag4ABQAMgZAegNQAmgTA0BOIgFAGQhIhPhKBcIATgog");
	this.shape_148.setTransform(9.9,406.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhOAqQALgXAKgTQAMgZAfgMQAngUA2BPIgHAEQhJhNhNBdg");
	this.shape_149.setTransform(9.1,417.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(77,77,77,0.4)").s().p("Ag5AAQAMgZAfgMQAngUA2BPIgHAEQhJhNhNBdIAVgqg");
	this.shape_150.setTransform(9.1,417.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhQAqQAKgYAKgSQANgZAhgMQAogTA3BOIgIADQhMhNhNBeg");
	this.shape_151.setTransform(8.4,429);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("rgba(77,77,77,0.4)").s().p("Ag7AAQAMgZAhgMQAogTA3BOIgIADQhMhNhNBeQALgYAKgSg");
	this.shape_152.setTransform(8.4,429);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhTAqQAMgYAKgSQAMgZAjgMQApgTA5BOIgJABQhPhMhPBfg");
	this.shape_153.setTransform(7.7,440.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("rgba(77,77,77,0.4)").s().p("Ag9AAQAMgZAjgMQAqgTA3BOIgJABQhOhMhOBfIAVgqg");
	this.shape_154.setTransform(7.7,440.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVAqQAMgZAKgRQANgZAlgNQAqgSA5BOIgKgBQhRhKhQBfg");
	this.shape_155.setTransform(6.9,451.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(77,77,77,0.4)").s().p("Ag/AAQANgZAlgNQAqgSA5BOIgLgBQhQhKhQBfIAWgqg");
	this.shape_156.setTransform(6.9,451.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXAqQALgZALgRQANgZAngNQArgSA7BOIgNgCQhShKhRBgg");
	this.shape_157.setTransform(6.2,463);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("rgba(77,77,77,0.4)").s().p("AhBAAQANgZAmgNQAsgSA7BOIgNgCQhShKhSBgIAXgqg");
	this.shape_158.setTransform(6.2,463);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhaAqQAMgZAMgSQANgYAogNQAsgSA8BOIgNgDQhVhJhTBgg");
	this.shape_159.setTransform(5.5,474.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("rgba(77,77,77,0.4)").s().p("AhDgBQAOgYAogNQAsgSA8BOIgOgDQhUhJhTBgIAXgrg");
	this.shape_160.setTransform(5.5,474.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhcAqQAMgaAMgRQANgYAqgNQAtgRA+BNIgPgFQhYhHhTBgg");
	this.shape_161.setTransform(4.7,485.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("rgba(77,77,77,0.4)").s().p("AhEgBQANgYAqgNQAtgRA+BNIgQgFQhXhHhTBgQANgaALgRg");
	this.shape_162.setTransform(4.7,485.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhfAqQANgaAMgSQANgYAsgMQAugRA/BNIgQgGQhbhHhUBhg");
	this.shape_163.setTransform(4,496.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("rgba(77,77,77,0.4)").s().p("AhGgCQANgYAsgMQAugRA/BNIgRgGQhZhHhVBhQANgaAMgSg");
	this.shape_164.setTransform(4,496.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhiAqQAOgbAMgRQAOgYAtgNQAwgQBABNIgSgIQhdhGhWBig");
	this.shape_165.setTransform(3.3,508.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(77,77,77,0.4)").s().p("AhIgCQAOgYAugNQAugQBABNIgSgIQhchGhWBiQAOgbAMgRg");
	this.shape_166.setTransform(3.3,508.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhkAqQAOgbANgSQAOgXAugNQAxgQBBBNIgTgJQhfhFhXBig");
	this.shape_167.setTransform(2.5,519.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(77,77,77,0.4)").s().p("AhJgDQAOgXAugNQAxgQBBBNIgTgJQhfhFhXBiQAOgbANgSg");
	this.shape_168.setTransform(2.5,519.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnArQAPgcANgSQAOgXAxgNQAxgPBDBNIgVgMQhhhEhZBkg");
	this.shape_169.setTransform(1.8,530.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(77,77,77,0.4)").s().p("AhLgDQAPgXAwgNQAxgPBCBNIgUgMQhhhEhYBkQAOgcANgSg");
	this.shape_170.setTransform(1.8,530.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpArQAPgdANgSQAPgWAygNQAygPBEBNIgXgNQhihDhaBkg");
	this.shape_171.setTransform(1.1,542.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(77,77,77,0.4)").s().p("AhNgEQAOgWAzgNQAygPBEBNIgXgNQhihDhaBkQAPgdANgSg");
	this.shape_172.setTransform(1.1,542.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrArQAPgdAOgTQAOgVA0gNQA0gPBEBNIgXgPQhmhChaBlg");
	this.shape_173.setTransform(0.3,553.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("rgba(77,77,77,0.4)").s().p("AhOgFQAOgVA0gNQAzgPBFBNIgXgPQhlhChcBlQAQgdAOgTg");
	this.shape_174.setTransform(0.3,553.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuArQAQgeAOgSQAPgVA2gOQA0gOBGBNIgZgQQhohBhcBlg");
	this.shape_175.setTransform(-0.4,564.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("rgba(77,77,77,0.4)").s().p("AhQgFQAPgVA2gOQA0gOBGBNIgZgQQhohBhcBlQAQgeAOgSg");
	this.shape_176.setTransform(-0.4,564.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxArQARgeAPgSQAOgVA3gOQA2gOBIBNIgbgRQhqhBheBmg");
	this.shape_177.setTransform(-1.1,576.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("rgba(77,77,77,0.4)").s().p("AhSgFQAPgVA3gOQA2gOBIBNIgbgRQhqhBhdBmQAQgeAOgSg");
	this.shape_178.setTransform(-1.1,576.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABYAEQhshAhfBnQARgfAPgSQAOgVA6gNQA2gOBJBNg");
	this.shape_179.setTransform(-1.9,587.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("rgba(77,77,77,0.4)").s().p("AhTgGQAOgVA5gNQA3gOBJBNIgcgTQhshAhfBnQARgfAPgSg");
	this.shape_180.setTransform(-1.9,587.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},64).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).to({state:[]},1).wait(26));

	// 
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgDgYQgaABgsAnIgBABQAAgZAWgNIAggZIADgDIASAAQAOAIAXAYIABABQApAqgGAVIgBADIg3g/QgJgMgMABg");
	this.shape_181.setTransform(2.4,259.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("rgba(77,77,77,0.4)").s().p("AASgNQgJgMgMABQgaABgsAnIgBABQAAgZAWgNIAggZIADgDIASAAQAOAIAXAYIABABQApAqgGAVIgBADg");
	this.shape_182.setTransform(2.4,259.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AApAHQgWgNgTgFQgRgBgcARQgRgFgNAbQAAgbANgPIAVgYIAVgFQALAFAOAOIAVAOQALALAEAHQAFAIgCAFIAgAZIgcgiQgDgCgEgCg");
	this.shape_183.setTransform(4.6,267);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("rgba(77,77,77,0.4)").s().p("AAsAUQACgFgEgIIAGAEIAcAigAg+gPIAVgYIAVgFQALAFAOAOIAVAOQALALAFAHQgXgNgTgFQgRgBgcARQgRgFgNAbQAAgbANgPg");
	this.shape_184.setTransform(4.6,267);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgsgmQAHACALAFIAnAaIABABIBBAsIgCgBQgtgZgdgMIgVgGQgigJgaAyQACgcAEgRIAJgXQAFgJAIABg");
	this.shape_185.setTransform(6.9,274.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(77,77,77,0.4)").s().p("ABNAnQgtgZgdgMIgVgGQgigJgaAyQACgcAEgRIAJgXQAFgJAIABIAGABQAHACALAFIAnAaIABABIBBAsg");
	this.shape_186.setTransform(6.9,274.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_182},{t:this.shape_181}]},62).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[]},1).wait(57));

	// 
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA5AAQAIASgBAdIADAIIgFgOQgRgpgWgVQgjgig2AWIAMgJQAIgIAYgEQATgDAUAMQAIAFAIAGQAQAMAIAVg");
	this.shape_187.setTransform(7.7,257.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(77,77,77,0.4)").s().p("AA+ApQgRgpgWgVQgkgig0AWIALgJQAIgIAYgEQATgDAUAMIAQALQAQAMAIAVIAAABQAHASAAAdIACAIg");
	this.shape_188.setTransform(7.7,257.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag8gQQAWgUAKAFQANADAYAFQAOgFAQAIQAWAKAAAJQgBAIgDAUIgEAGQgFgCgHgCQgRgdgSgKQgZgYgpASg");
	this.shape_189.setTransform(5.6,257.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("rgba(77,77,77,0.4)").s().p("AAoAdQgQgdgSgKQgZgYgoASQAVgUAKAFIAlAIQANgFARAIQAVAKAAAJQAAAIgDAUIgEAGIgNgEg");
	this.shape_190.setTransform(5.6,257.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAuAGQgCACgBACIgJAEQgIADgMAEQgPgRgNgCQgTgLgbAMQAmghAPAOQAQANAaAMQAGgDAFAAQAFgBAEABQALgCgIgDQgGgBgGAGg");
	this.shape_191.setTransform(4,257.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("rgba(77,77,77,0.4)").s().p("AgOACQgTgLgbAMQAmghAPAOQAQANAaAMQAGgDAFAAQAGgGAGABQAIADgLACIgJAAIgDAEIgJAEIgUAHQgPgRgNgCg");
	this.shape_192.setTransform(4,257.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAGgSQAXAVAaAXQAHgFAEgEQAAgPgQgLQgPgNgLABIgPABQgBABgCABQgIAHgPAIQgQgDgJAGQgJgBgOAIQA1gwASAXg");
	this.shape_193.setTransform(3.1,258.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("rgba(77,77,77,0.4)").s().p("AAGgSIADgCIAPgBQALgBAPANQAQALAAAPIgLAJQgagXgXgVgAAGgSQgIAHgPAIQgQgDgJAGQgJgBgOAIQA1gwASAXgAAGgSIAAAAg");
	this.shape_194.setTransform(3.1,258.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AASgNQgXghhFA/IACgNQAEgPAQgKQAWgPANgNIATABQAOAIAWAXIABABQAYAYAIARIADAKQACAJgDAGg");
	this.shape_195.setTransform(2.4,259.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(77,77,77,0.4)").s().p("AASgNQgXghhFA/IACgNQAEgPAQgKQAWgPANgNIATABQAOAIAWAXIABABQAYAYAIARIADAKQACAJgDAGg");
	this.shape_196.setTransform(2.4,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_188},{t:this.shape_187}]},58).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[]},1).wait(59));

	// 
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAfgnQAWARAHAgIADAoQghiRhcBrQACgWATgOQASgNASgJQAPgJAVAQg");
	this.shape_197.setTransform(9.5,251.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(77,77,77,0.4)").s().p("Ag9AMQACgWASgOQASgNASgJQAPgJAVAQQAWARAHAgIADAoQgiiRhaBrg");
	this.shape_198.setTransform(9.5,251.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag+ACQADgSAPgLQAQgNATgIQARgIAYASQAXATAGAkIACAiQgjiNhaBcg");
	this.shape_199.setTransform(9.1,252.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(77,77,77,0.4)").s().p("Ag+ACQADgSAPgLQAQgNATgIQARgIAYASQAXATAGAkIACAiQgjiNhaBcg");
	this.shape_200.setTransform(9.1,252.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag/gFQADgQAOgKQANgLAVgHQASgHAaATQAaAUADAqIADAbQgliJhaBQg");
	this.shape_201.setTransform(8.8,253.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("rgba(77,77,77,0.4)").s().p("Ag/gFQADgQAOgKQAOgLAUgHQASgHAaATQAaAUADAqIADAbQgliJhaBQg");
	this.shape_202.setTransform(8.8,253.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAgOQAEgMALgJQAMgKAWgGQAUgGAbAVQAcAVACAvIADAVQgniFhaBCg");
	this.shape_203.setTransform(8.4,255.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("rgba(77,77,77,0.4)").s().p("AhAgOQAEgMALgJQAMgKAWgGQAUgGAbAVQAcAVACAvIADAVQgniFhaBCg");
	this.shape_204.setTransform(8.4,255.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhBgXQAFgJAJgHQAJgIAYgFQAVgGAeAXQAdAWABA1IADAOQgpiBhaA0g");
	this.shape_205.setTransform(8,256.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(77,77,77,0.4)").s().p("AhBgXQAFgJAJgHQAJgIAYgFQAVgGAeAXQAdAWABA1IADAOQgpiBhaA0g");
	this.shape_206.setTransform(8,256.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhCghIAMgJQAIgIAYgEQAXgEAgAYQAgAYgBA5IADAIQgrh9haAlg");
	this.shape_207.setTransform(7.7,257.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("rgba(77,77,77,0.4)").s().p("AhBghIALgJQAIgIAYgEQAXgEAgAYQAgAYgBA5IACAIQgrh9hYAlg");
	this.shape_208.setTransform(7.7,257.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_198},{t:this.shape_197}]},53).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[]},1).wait(63));

	//  0
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAhgdQAPAWATAjIASAmIgEgGQhdiihIBXQANgWAPgIIAggSQALgGANAIQAIAFALALg");
	this.shape_209.setTransform(15.6,246.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("rgba(77,77,77,0.4)").s().p("ABRA8QhdiihIBXQANgWAPgIIAggSQALgGANAIQAIAFALALIAOAQQAPAWATAjIASAmg");
	this.shape_210.setTransform(15.6,246.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhOgJQAKgWAOgJIAfgSQAVgBACAAQAHAEAKAHQABABABABQAFAFAGAFQACACABACQAQAUAQAgQAAABAAACIAOAlIgBgBQgBgCgBgBQhOidhMBcg");
	this.shape_211.setTransform(14.1,247.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("rgba(77,77,77,0.4)").s().p("ABOA7IgCgDQhOidhMBcQAKgWAOgJIAfgSIAXgBQAHAEAKAHIACACIALAKIADAEQAQAUAQAgIAAADIAOAlg");
	this.shape_212.setTransform(14.1,247.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhJgCQAHgUAPgLIAcgRQAVgFABABQAHACAKAEQACABACABQAFAEAFAFQACACACACQAQATANAfQAAABAAABIAKAlIAAAAQgBgCgBgBQhAiYhQBhg");
	this.shape_213.setTransform(12.6,249);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("rgba(77,77,77,0.4)").s().p("ABJA4IgCgDQhAiYhQBhQAIgUAOgLIAdgRQAUgFABABQAIACAJAEIAEACIALAJIADAEQAQATANAfIABACIAKAlg");
	this.shape_214.setTransform(12.6,249);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhDADQAEgSAOgMIAbgRQATgIACABQAHAAAKACQACABACABQAFADAGAFQACACACACQARASAKAdQAAACAAABIAGAkIAAABQgBgBgBgCQgwiShVBkg");
	this.shape_215.setTransform(11,250.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(77,77,77,0.4)").s().p("ABCAxQgwiShVBkQAEgSAOgMIAbgRQATgIACABIARACIAEACQAFADAGAFIAEAEQARASAKAdIAAADIAGAkIAAABIgCgDg");
	this.shape_216.setTransform(11,250.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAfgoQAWARAHAgIADAoQghiRhcBrQACgSANgNIAGgFIAkgWIAVgBQAIACAHAGg");
	this.shape_217.setTransform(9.5,251.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(77,77,77,0.4)").s().p("Ag9ALQABgSANgNIAGgFIAkgWIAVgBQAIACAHAGQAWARAHAgIADAoQgiiRhaBrg");
	this.shape_218.setTransform(9.5,251.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_210},{t:this.shape_209}]},49).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[]},1).wait(68));

	// Layer 15
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAQgxQAUAXAzBcQhXiVhWBOQAggeAOgJIAZgTQALgKAUAYg");
	this.shape_219.setTransform(18.7,151.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgFQAggeANgJIAagTQALgKAUAYQAUAXAzBcQhXiVhWBOg");
	this.shape_220.setTransform(18.7,151.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgGQAegdANgJIAagTQAMgKAVAZQAWAXAxBbQhXiYhWBQg");
	this.shape_221.setTransform(18.3,164.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgGQAegdAOgJIAagTQALgKAVAZQAWAXAwBbQhWiYhWBQg");
	this.shape_222.setTransform(18.3,164.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgIQAbgbAOgJIAbgTQANgKAVAZQAXAZAwBZQhZibhUBRg");
	this.shape_223.setTransform(17.8,178.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgIQAbgbAOgJIAbgTQANgKAWAZQAWAZAvBZQhXibhVBRg");
	this.shape_224.setTransform(17.8,178.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgJQAYgbAOgJIAcgSQAOgKAWAaQAXAZAuBYQhaiehRBTg");
	this.shape_225.setTransform(17.4,192.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("rgba(77,77,77,0.4)").s().p("AhVgJQAYgbAOgJIAcgSQAOgKAWAaQAYAZAtBYQhZiehSBTg");
	this.shape_226.setTransform(17.4,192.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgLQAWgZAOgIIAdgTQAPgKAXAbQAYAZAsBXQhbihhQBUg");
	this.shape_227.setTransform(16.9,205.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("rgba(77,77,77,0.4)").s().p("AhVgLQAWgZAOgIIAdgTQAPgKAXAbQAYAZAsBXQhbihhQBUg");
	this.shape_228.setTransform(16.9,205.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgMQASgZAPgIIAegSQAPgKAYAbQAaAaApBWQhcikhNBWg");
	this.shape_229.setTransform(16.5,219.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgMQASgZAPgIIAegSQAPgKAYAbQAaAaApBWQhcikhNBWg");
	this.shape_230.setTransform(16.5,219.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgOQAQgXAOgIIAfgSQARgKAZAcQAaAbAoBUQheinhLBXg");
	this.shape_231.setTransform(16,232.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgOQAQgXAOgIIAfgSQARgKAZAcQAaAbAoBUQheinhLBXg");
	this.shape_232.setTransform(16,232.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AATgtQAcAcAmBTQhgiqhJBZQANgWAPgIIAggSQASgKAZAcg");
	this.shape_233.setTransform(15.6,246.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgPQANgWAPgIIAggSQASgKAZAcQAcAcAmBTQhgiqhJBZg");
	this.shape_234.setTransform(15.6,246.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_220},{t:this.shape_219}]},42).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[]},1).wait(72));

	//  0
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgVQgVAJgGALIgeArQAVhBAcgSIAkAAIAeAZQglgOgVAJg");
	this.shape_235.setTransform(16.4,298.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(255,255,255,0.682)").s().p("AgHgpIAkAAIAdAZQglgOgVAJQgVAJgGALIgeArQAVhBAdgSg");
	this.shape_236.setTransform(16.4,298.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5AqQAWhBAegRQATgBAVACQAMAJALAMQgkgNgWAJQgUAJgHALg");
	this.shape_237.setTransform(15.4,309.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAXhAAfgRQAUgBAZAEQAKAFAGAMQgkgNgWAJQgTAJgHAMg");
	this.shape_238.setTransform(14.4,321.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAYhAAggRQAXgBAaAGQAHACADAMQgjgMgWAIQgTAJgIANg");
	this.shape_239.setTransform(13.4,332.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAZhAAggRQAZgBAdAHQAFgBgBALQgigLgXAJQgTAIgHANg");
	this.shape_240.setTransform(12.5,343.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag7ApQAahAAigQQAbgCAgAJIgDAHQgigLgWAIQgTAJgIANg");
	this.shape_241.setTransform(11.6,355);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA2gcQAAAAAAAAQgigJgUAIQgUAJgJANIghAvQAbg/AjgQQAagCAfAJIAAAAQADABADABIAAgBQAAgBAAAAQAAAAAAgBIAAAAIgBgBIAAAAQgCgBgDADQgBACgCACgAA+giQgCgBgDADQgBACgCAC");
	this.shape_242.setTransform(11,366.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA2ggQgCABgCABQgggJgVAJQgUAIgJAOIghAwQAcg/AlgQQAYgCAeAJQAGACAGACQgDgLgJAHg");
	this.shape_243.setTransform(10.3,377.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAwggIgBAAQgggIgUAJQgUAIgJAOIgjAxQAdg/AogQQAWgCAcAIIAAAAQAKADAKADQgBAAAAgBIAAgBQgBgBAAgBQgBAAAAgBQAAAAAAAAIgBgBQAAAAgBAAQAAAAAAgBQgBAAgBgBIAAAAIgBAAQAAAAAAAAIgGgBQgDABgDACQgBAAgBABgAAyghQgBAAgBABAA4gkQgDABgDAC");
	this.shape_244.setTransform(9.7,389);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAugiQANAEAOAFQAAgBgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQgBgCgCgBIAAgBQgBAAgBgBQgBAAAAgBQgBAAAAAAIgBAAIgJAAQgEAAgDACQgBAAAAABIgBAAQgggIgUAIQgTAJgKAOIgjAyQAeg/ApgPQAVgDAaAHgAA1gkQgEAAgDACQgBAAAAAB");
	this.shape_245.setTransform(9,400.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAhgkIAnALQACABACABQgLgXgYALQgLgDgKAAQgBAAgBAAQAHAAAIACgAAUgmQAHAAAGACAgPggQADgBADgCQACgBADgBQAAAAABAAQAAgBABAAQAIgBAKABQgEAAgFAAIgLACQgEABgDABIgCABQgBABgBAAgAgfgVQAGgFAHgEQABgBACgBAgfgVQAGgFAHgEQABgBACgBAgigSQABAAAAgBQABgBABgBAgigSQgDADgDAEIgjAzQABgDACgDQAAgBABgBQAIgQAJgNQAKgMAKgJgAAQgmQACAAACAAAAQgmQABAAABAAQgFAAgGAAAgNghQgCABgDAC");
	this.shape_246.setTransform(8.4,411.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgEglIAAAAQAAAAAAAAAgEglQAAAAAAAAQABAAAAAAIABAAQAAAAABAAQAAAAgBAAIAAAAQgBAAgBAAgAgCglIAAAAQgBAAgBAAAgEglQgFABgEACQgTAIgLAPIAAABIgBAAQATgTAVgIAgBglQADgBAGAAAgCglQAEgBAGAAIAyAJQADABADABQAIADAIAEQgOgbgcAKQgXgEgQAEAgsgKIAAAAAgrgKIgBAAIgjAyIAcgqQAEgEADgEAgzgCQAEgEAEgEQASgTAVgI");
	this.shape_247.setTransform(7.7,422.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgpgOIAlgWQAmgEAxAXQgRgeggAKQgegFgUAHQgSAJgLAPIgEAFQAAAAAAAAIAAAAQAEgEAEgEgAg6ADQAEgEAFgFAg6ADQAFgEAEgFIghAvgAgtgLIgEAFQAEgEAEgE");
	this.shape_248.setTransform(7.1,434.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5AAQAYgaAcgJQAogEAzAYQgTghgkAJQgdgEgVAIQgSAIgLAQgAhVAqQANgZAPgR");
	this.shape_249.setTransform(6.4,445.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag1gEIAsgcQACgBABAAQApgFA3AaQgWglgoAJQgcgDgVAIQgSAIgMAQIgIAKIgEAFIAAABIgBAAQAGgFAFgEgAg/AEQAAAAAAAAIAAABIgBABQAAgBAAAAAhGANQADgEAEgFAhGANQADgEADgDIgZAkQABAAAAgCgAg7gBIgEAFQAFgEAFgE");
	this.shape_250.setTransform(5.8,456.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhFAKQAcghAigJQArgFA5AcQgZgpgrAKQgbgDgWAHQgRAJgNAQgAhcArQALgTAMgO");
	this.shape_251.setTransform(5.1,467.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag9AAIAvgdQACgBADAAQAAgBABAAQAtgFA7AeQgbgsgvAJQgagCgXAHQgRAJgNAQIgQAVIgDAFQAHgJAIgGgAhOARQACgBAAgBIgCADQAIgLAJgHAhWAdQAEgGAEgFIgRAaQAAgBABgBIAIgNQAEgGAEgGAhJAKIgFAH");
	this.shape_252.setTransform(4.5,478.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhSAVQAggpAqgKQAugGA9AgQgdgwg0AJQgZAAgXAHQgQAIgNAQIgWAeIgCAEQAAAAABgBgAhiAtQAHgMAHgKQABAAAAgBAhRASIgBAD");
	this.shape_253.setTransform(3.8,490.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhcAfQAkgxAvgKQAvgHBBAiQghgzg3AJQgZAAgWAGQgQAJgOAQgAhmAuQAFgIAFgH");
	this.shape_254.setTransform(3.2,501.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXAVIA7gqQAEgCAEgBQACgBADAAQACgBADgBQAxgHBDAiQgjg1g7AJQgYABgXAGQgQAJgOARIgaAkIgBABIgEAHQABgCABgBIgCADQAFgGAEgGgAhcAaIgCAEQADgFAEgEAhlAoQACgEADgDAhpAuIAEgGQACgEADgD");
	this.shape_255.setTransform(2.5,512.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmAmQAng1A0gLQAzgHBFAkQglg4g/AIQgYABgXAHQgPAIgPASgAhsAvQACgEADgDIABgC");
	this.shape_256.setTransform(1.9,523.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhAdIBEgxQABAAABAAQABgBABAAQAGgCAGgBQA1gHBIAlQgog8hDAIQgXADgXAHQgPAIgPARIgjAzIgDAEQAGgIAGgHgAhrApQgCADgCAEQAAgBAAAAQABgCABgBAhrApIAAAAQAAgBABAAQAEgGAFgFAhrApIgCAD");
	this.shape_257.setTransform(1.3,534.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwAtQAqg5A5gLQA3gIBKAnQgrg/hGAIQgXADgXAGQgPAJgPARgAhzAxIADgE");
	this.shape_258.setTransform(0.6,546.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah2AyQAsg9A8gLQA4gIBNApQgthDhKAIQgXAEgXAGQgOAIgQASg");
	this.shape_259.setTransform(-0.1,557.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6AzQAug9A9gKQA6gJBQArQgxhGhMAHQgXAFgXAHQgPAIgQASg");
	this.shape_260.setTransform(-0.7,568.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah9AzQAvg8A+gKQA8gJBSAtQgzhKhQAHQgXAGgXAGQgOAIgQATg");
	this.shape_261.setTransform(-1.4,579.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgLIgsA/QAvg8BAgKQA+gJBUAvQg1hOhUAHIguANQgNAIgRATg");
	this.shape_262.setTransform(-2,591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_236},{t:this.shape_235}]},69).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[]},1).wait(26));

	// 
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAmgMIAvgUIAKgEIgbAbQgkAfgbAKQgYAKgSgJIgDgCQgogXgOgOIBeAIg");
	this.shape_263.setTransform(12.1,288.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(255,255,255,0.682)").s().p("AglAhIgDgCQgogXgOgOIBeAIIAmgOIAvgUIAKgEIgbAbQgkAfgbAKQgMAFgLAAQgKAAgJgEg");
	this.shape_264.setTransform(12.1,288.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhIAPQAdgIAdgEQAFgBAHgBQAPgIAPgHIAsgNIADAVQglAQgYAKQgYAKgNgCIgEgBQgfgIgOgEIAAAAAhJAPIAAAAQAAAAABAAQgBAAAAAAgAhIAPQgBAAAAAA");
	this.shape_265.setTransform(12.7,291.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(255,255,255,0.682)").s().p("AgXAcIgFgBIgsgMIgBAAIAAAAIABAAQAdgIAdgEIALgCQAPgIAQgHIAsgNIADAVQgmAQgYAKQgTAIgNAAIgEAAgAhJAPIAAAAIgBAAgAhJAPIAAAAg");
	this.shape_266.setTransform(12.7,291.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgQgEQANgNAMgHIApgGIAQAXQglABgXAIQgWAJgJAEIgDABQgXAHgOAIQAXgYAagLg");
	this.shape_267.setTransform(14.6,294.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("rgba(255,255,255,0.682)").s().p("AgQgEQANgNAMgHIAogGIARAXQglABgXAIIgfANIgDABQgXAHgOAIQAXgYAagLg");
	this.shape_268.setTransform(14.6,294.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgVQgTAIgHAKIgBACIgeArQAMgoAQgVQAKgPALgHIAkAAIAeAZQglgOgVAJg");
	this.shape_269.setTransform(16.4,298.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("rgba(255,255,255,0.682)").s().p("AgdgTQAKgPAMgHIAkAAIAdAZQglgOgVAJQgTAIgHAKIgBACIgeArQANgoAPgVg");
	this.shape_270.setTransform(16.4,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_264},{t:this.shape_263}]},66).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[]},1).wait(52));

	// 
	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgVgEQgVgNgaArQAVhDABAUIALgFIAQgBQAIACALAGQAKAEAhAXIAaAUQhUgjgFADg");
	this.shape_271.setTransform(6.6,276.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("rgba(255,255,255,0.682)").s().p("AgUgEIgBAAQgVgNgaAsQAVhEABAUIALgEIAQgCQAIACALAGQAKAFAhAXIAaATQhUgjgFADg");
	this.shape_272.setTransform(6.6,276.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhLAKQAfgfAUAMIAbgFQALgBAMAAQASgDAeAGIACAUQgBABgBAAQhLANgUgHQgBAAAAAAQgBgBAAAAQgfgQgVAMg");
	this.shape_273.setTransform(8.7,282.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("rgba(255,255,255,0.682)").s().p("AgVAPIgBAAIgBgBQgfgQgVAMQAfgfAUAMIAbgFQALgBANAAQASgDAdAGIABAUIgBABQgyAIgYAAQgOAAgHgCg");
	this.shape_274.setTransform(8.7,282.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhegGIBQAHIAOABIARgGIAYgKIA2gWIgbAaQhFA/gkgUQgqgYgPgPg");
	this.shape_275.setTransform(12.1,288.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(255,255,255,0.682)").s().p("AglAhQgqgYgPgPIBQAHIAOABIARgGIAYgKIA2gWIgbAaQg2AvggAAQgKAAgJgEg");
	this.shape_276.setTransform(12.1,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_272},{t:this.shape_271}]},64).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[]},1).wait(55));

	// 
	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABKBAQAAAAAAABIABAAIgBgBIhAhVQgHgGgGgDQghgLgmAlQASgjAXgMIATgJQAIgEAEgBIAgAoQAYAhAUA4g");
	this.shape_277.setTransform(3.2,263.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(255,255,255,0.682)").s().p("AALgUQgIgGgGgDQgggLgnAlQASgjAYgMIASgJIANgFIAgAoQAXAhAVA4g");
	this.shape_278.setTransform(3.1,263.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAgAOIgfgYIgBgBQgEgDgFgBQgCgBgBgBQgagLggAmIgBABQANgaAPgSIAOgHQAGgDAEgBIAPAGQAHAHAMAIQAVAXAiAsIACACQgXgRgRgPgABGAsQgVgQgRgO");
	this.shape_279.setTransform(4.9,270.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("rgba(255,255,255,0.682)").s().p("AAgAPIgegYIgCgBQgDgDgGgBIgCgCQgagLghAmIAAABQAMgaAPgSIAOgIIAKgDIAQAGIASAPQAWAWAiAtIgngeg");
	this.shape_280.setTransform(4.8,270.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAbQABAAABABIgBgBQgBAAAAAAQg4gYgTgFIgMgCQgVgOgbAsIAPgrQAGgPABALIAKgEIARgCQAIACALAGQANAGA2Aog");
	this.shape_281.setTransform(6.6,276.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("rgba(255,255,255,0.682)").s().p("AgHgBIgMgCQgVgOgbAsIAPgrQAGgPABALIAKgEIARgCQAIACALAGQANAGA2AnQg4gXgTgFg");
	this.shape_282.setTransform(6.5,276.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_278},{t:this.shape_277}]},62).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[]},1).wait(57));

	//  0
	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgOgsIAVALIADAHQAKAYAGAcQAJApAigNIgDgdQgFgZgLgRQgJgNgTgIQgCgLgNgEIgOgDIgXACQgNAAgLAMIgOAQQAQgOAMgHQALgEAOAHg");
	this.shape_283.setTransform(6.4,259.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhEgUQANgPAMgIIAZgCQANACAJADIAEAEQAMAXAKAcQAKAlAcgCIABgPQgLgegRgXQgIgLgRgGQgEgJgMgEIgLgCQgMACgMACQgMACgKALg");
	this.shape_284.setTransform(5.5,260.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AALgfIgBgBQgGgGgLgDIgJgBQgMABgNAFQgLADgJAKIgJAKQAMgQAMgKIAYgHQAOgBAIABIAEACQAFAGAEAHIAAABQgBgBgBAAgAAWgZQgEgDgFgCQAKARAJATQAMAgAXAJIAEgBQgSgjgWgdQAAAAgBAAQAAAAAAgBIgIgGQgEgDgFgDQgBAAgBAA");
	this.shape_285.setTransform(4.7,261.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAjAAIgPgUQgHgHgKgEQgHgDgMgDIgFAAQgNABgOAIQgJAEgJAJIgGAGQAKgRALgKIAYgNQAPgFAJgBIADAAQASAUAQAfIAEAGQABACAAABQABABAAAAQACAEACAEIAQAVQABACABABQACADACACIAHANQgFgJgGgJQgLgQgLgQQAAgBgBAAQgCgDgCgCgAAoAGQACAEACAEAAmACQABACABACAAoAGQgDgEgCgC");
	this.shape_286.setTransform(4,262.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgChBQATASATAfQAPAWAOAgIAKAbIhBhWQgGgFgFgDIgXgDIgCAAQgOACgOAKQgIAFgJAIIgDADQAJgSAKgLQALgMALgGIABAAQAQgIAJgEg");
	this.shape_287.setTransform(3.2,263.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("rgba(255,255,255,0.682)").s().p("AAKgVQgGgFgFgDIgXgDIgCAAQgOACgOAKQgIAFgJAJIgDACQAJgRAKgMQALgMALgFIABAAIAZgMIAFgDQATASATAgQAPAWAOAfIAKAbg");
	this.shape_288.setTransform(3.2,263.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_283}]},58).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[]},1).wait(59));

	//  0
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAsgUIACAIIAGAhIAAAWIgDAYIgFg4QgCgMgHgMIgPgUQgFgFgFgDQgKgHgIABIgHACQgKAEgKAGIgOAMIgCACQAJgRAJgJIAHgGQAHgFAHgEIAKgEIAMACIANAKQAQAOAFAUg");
	this.shape_289.setTransform(10,254.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("rgba(255,255,255,0.682)").s().p("AAsALQgDgMgGgMIgPgUIgKgIQgKgHgIABIgHACQgKAEgJAGIgPAMIgCACQAJgRAJgJIAGgGIAPgJIAKgEIAMACIANAKQAQAOAFAUIACAIIAFAhIABAWIgEAYg");
	this.shape_290.setTransform(10,254.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AArAAQgEgIgGgJQgBgBgBgBQgGgJgHgHQgGgFgFgDQgBgBgBAAQgHgFgJABIgHADQgCAAgBAAQgJAEgIAGQAAABgBAAIgPAOIAAAAQAKgRAJgIQAQgKAHgCIAKgCIALACIAMAMQAOAPAFATIADAJQAAACAAAAQAAABABACQAAADABADIAAgEQAAgBgBgBQAAgCgBgBQABACAAABAArAAIAAAAAAtALIAAgBIAAgFAAtALIAAgCQAAABAAAAQADAKACAIIAFASIgDAPQgCgagFgYgAArgCQAAACAAAA");
	this.shape_291.setTransform(9.2,255.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAdgWQAFAKACAKIADAGQAEAVAGALIACACIAEAGQgDgVgGgSIAAgFQgBAAAAgBQgFgLgJgJQgBAAgBgBgAAbgZQgEgIgIgGQgGgEgFgCQgBgBgCAAQgHgDgIABIgIABQgCABgBAAQgJADgIAHQAAAAgBABIgPAOQALgPALgJQAPgIAIAAIAKAAIAMADIALAMQAEAGADAHQABABABACAA7AyIgDAEQgBgFAAgEgAA3AtIAAgBIAEAGAAzAmIAEAH");
	this.shape_292.setTransform(8.5,256.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgOgyIAKACIAMAEIAJAOQAKARAFAQIACAIQAEAXAKAKIAOAHIgDgFQgDgbgIgUIgCgFQgBgBAAgBQgGgKgKgHQgBgBgCgBQgDgKgLgGQgGgDgFgCQgBAAAAgBQgHgBgHAAgAgSgyIAAAAQABAAAAAAQABAAAAAAIABAAQABAAAAAAAgSgyIgIACQAAAAgBAAQgBAAgBAAQgBAAgBABQAAAAgBAAQAAAAAAAAQgHADgGAGQgBABgBAAIgOAPQAMgOALgIIACgBQADgBACgBAgkgtQACgBACgBAgggvQACAAABgBAgbgwQAFgCAEAA");
	this.shape_293.setTransform(7.8,257.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAgXQANgOALgIQARgEAIACIAWAJIAIAOQAIATAFAQIACAIQAFAXAMAIIASADIgCgPQgEgcgKgTIgCgEQgCgBAAgBQgHgJgLgHQgCAAgBgBQgCgKgMgFQgHgDgEgBQgBgBgCAAQgJAAgJAAIgIABQgBABgCAAQgIACgIAIQgBAAAAABIgOAPg");
	this.shape_294.setTransform(7.1,258.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAtgXQgJgJgOgFQgCgMgPgEIgMgCIgdACQgJACgJAJIgOARQAQgOAMgHIAIgCQAIAAAKAFIAVALIAHAQIAMArQAFAYAOAFIAYgCIgCgYQgFgdgMgSg");
	this.shape_295.setTransform(6.4,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_290},{t:this.shape_289}]},53).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[]},1).wait(63));

	// 
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhSgCIgUATIAwghIAigGQATAAASAIQAVAKAUASIAXAYIgFgHIALAMIAFAFIALAMIgZgfIgqg3IAAAAIgWgWQgRgPgJAHIgEADQgUAOgYAVIgDACg");
	this.shape_296.setTransform(13.7,247.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAmgSIgCgGIgTgWQgPgLgFAEQgGgEgGADQgQALgSAQQgEACgDACIgSAOIgPAOQAVgRAVgQIAagFQASgCAPAGQAOAFAQAMIAAABIAAAAQAEADAEAEQAMALAKAOIAGANIAEAEIAIASIgTgUIgbgsIgCgDgAAsgIIgCgDAAqgMIgEgG");
	this.shape_297.setTransform(12.8,249.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgkgkIgCACQgFACgFADIgSAOIgKALQARgUATgOIAIgBIAAAAIAKgDQAQgEANADQABAAABABIALAEQACABACABIgFgFQgKgJgGACQgIgJgKAFQgBAAAAAAIgKAIQgDACgDADQgCABgCACgAgagsQgDACgDADQgCABgCACAAbgiIAKAIQACACACACQAOANAIAOIAGAWIADADIAFAZIgOgKIgbhCIgMgPQACABABABgAAYgkQACABABABAAYgkIAAAAAAUgmQACABACAB");
	this.shape_298.setTransform(11.8,251.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAgMQAPgWAQgLIALgDQANgGAKAAQAOgBARARQAPAOAHARIAGAdIACADIADAeIgJABIgThHIgPgUQgGgFgEAAQgNgPgOAGQgGAEgHAGQgGADgHAEIgRAOg");
	this.shape_299.setTransform(10.9,253);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAUggQgTgUgQAHIgCABQgIAEgJAGIgQANIgBABQALgXAOgJIADgCQALgIAKgDQAJgEAQAPQAQAPAFATIAGAcIABAKIABACIgBAkIgCALIgFg4IgHgUIgNgTg");
	this.shape_300.setTransform(9.9,254.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("rgba(255,255,255,0.682)").s().p("AAsALIgHgUIgNgTIgEgEQgTgUgQAHIgCABQgIAEgJAGIgQANIgBABQALgXAOgJIADgCQALgIAKgDQAJgEAQAPQAQAPAFATIAGAcIABAKIABACIgBAkIgCALg");
	this.shape_301.setTransform(9.9,254.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_296}]},49).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[]},1).wait(68));

	// 
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAcgPQgMgJgNgEQgagIggARIgVANQgLAHgMALQAKgMAcgVIAwgpQANgNA5BMIAsBAIg1g/g");
	this.shape_302.setTransform(17.9,152.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("rgba(255,255,255,0.682)").s().p("AAwACIgVgRQgMgJgNgEQgZgIggARIgVANQgLAHgMALQAKgMAcgVIAwgpQANgNA5BMIArBAg");
	this.shape_303.setTransform(17.9,152.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag8gVIAyglQAVgFAyBDIAnA3Ig0g9IgVgTQgCgCgCgBQgKgIgLgCQgCAAAAgBQgZgCgeAQQgCACgDABIgQAKQgBACgCABQgKAGgKAKQANgLAagVg");
	this.shape_304.setTransform(17.2,166.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhiAKQANgLAZgVIA0gfQAYgDAxA/IAcAmIAGAJIg0g+IgUgTQgCgCgCgBQgLgIgLgCQgBgBgBABQgYAAgdARQgDACgCABIgQALQgBABgCABQgKAHgKAKg");
	this.shape_305.setTransform(16.5,180.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag+gSIAAgBQACgBACgBIACgCIABAAIAAAAIAAAAIAFgDIAggQIAAAAQgCABgCABIggAQQAAAAgBABIAFgDAg6gVIAAAAIgCABIgCACAg4gXQgBABgBABAg8gUIgCABIgEADIgIAGQgCABgBACQgKAHgKAJQANgKAWgRIgEACAgRgqIANgHQAbAAAuA7IAEAGIAYAeIABAEIgzg/IgUgTQgCgCgCgCQgMgIgKgCQgBAAgBABIgIABQgFABgEABQgCABgCABAgJgsQgEABgEABAgSgqIABAAAg4gXIABAAQgCABgBABAg2gYQgBAAAAAB");
	this.shape_306.setTransform(15.8,193.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABYAlIgrg1IgUgUQgCgBgCgCQgMgJgJgBQgBAAgDABQgXAGgbASQgCACgDACIgPALQgCABgCACQgJAHgLAKQAQgLAXgSIA4gXQAfACArA3IARAVIALANIgDgDg");
	this.shape_307.setTransform(15.2,207.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABeAtIgzhAIgUgUQgCgBgCgCQgNgKgHAAQgDABgCAAQgXAKgaATQgCACgDABIgQAMQgBABgCACQgKAHgKAKIgBABQASgOAWgPIA7gTQAhAFAqAzIABACIATAVIAHAI");
	this.shape_308.setTransform(14.7,220.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhlAPQATgOAVgOIA8gNQAlAHAnAvIABAAIAaAcIg+hNIgUgUQgBgCgCgCQgOgKgHAAQgDAAgCACQgWAMgaAUQgCACgDACIgPALQgBABgCACQgKAIgKAKg");
	this.shape_309.setTransform(14.2,233.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhSgCIgUATIAwghIA3gDQApAKAnAvIgFgHIALAMIADADIANAOIgRgVIgyhBIgWgWQgRgPgJAHQgXAQgcAYg");
	this.shape_310.setTransform(13.7,247.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_303},{t:this.shape_302}]},42).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[]},1).wait(72));

	// 
	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1geIADgCIACgBIBQgCIBnAIQAgAGAKALQAFAFAAAFQAAASgWAJIgBAAQgVAIguABIgMAAQg0AAgkgSIgRgMQgcgTAAgRg");
	this.shape_311.setTransform(23.7,141.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("rgba(255,255,255,0.682)").s().p("AAQAkQg0AAgkgSIgRgMQgcgTAAgRIADgCIABgBIBRgCIBnAIQAgAGAKALQAFAFAAAFQAAASgWAJIgBAAQgWAIgtABg");
	this.shape_312.setTransform(23.7,141.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxggIACgCQAjgCAmACIBfAKQAdAFANAJQAGAEAHACQAHAJgMAGQgVANgkAEQgLAIgNAAQgnAAgdgOQgTgEgRgMQgcgTgHgTg");
	this.shape_313.setTransform(21.5,152.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("rgba(255,255,255,0.682)").s().p("AgqAWQgTgEgRgMQgcgTgHgTIACgCQAjgCAmACIBfAKQAdAFANAJQAGAEAHACQAHAJgMAGQgVANgkAEQgLAIgNAAQgnAAgdgOg");
	this.shape_314.setTransform(21.5,152.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxgiIACgCQAcgBAkAEIBWAMQAbAFAQAHQAGACANgCQAQADgDADQgSAQgcAIQgOAQgVAAQgdAAgTgKQgdgEgbgRQgcgUgOgUg");
	this.shape_315.setTransform(19.8,163.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("rgba(255,255,255,0.682)").s().p("AgPAbQgdgEgbgRQgcgUgOgUIACgCQAcgBAkAEIBWAMQAbAFAQAHQAGACANgCQAQADgDADQgSAQgcAIQgOAQgVAAQgdAAgTgKg");
	this.shape_316.setTransform(19.8,163.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gjIACgCQAVAAAiAHIBPANQAYAEASAGQAHABAUgHQAYgEAGgBQgQAVgSAMQgTAXgcAAQgRAAgOgFQglgDgkgXQgcgUgWgWg");
	this.shape_317.setTransform(18.3,174.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("rgba(255,255,255,0.682)").s().p("AAGAhQglgDgjgXQgcgUgXgWIACgCQAVAAAjAHIBOANQAYAEASAGQAIABATgHIAdgFQgPAVgSAMQgTAXgcAAQgRAAgOgFg");
	this.shape_318.setTransform(18.3,174.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgNIApAHQAHAAAbgLQAfgMAPgEIgFAMIgRAdQgXAggjAAIgLgBQgwgDgsgcIg6grIACgDIABgBQAMABAhAKg");
	this.shape_319.setTransform(16.9,185.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(255,255,255,0.682)").s().p("AAdAnQgwgDgrgcIg6grIABgCIACgCQAMABAhAKIBIAPIAoAHQAIAAAagLQAfgNAQgDIgFAMIgRAdQgXAggkgBg");
	this.shape_320.setTransform(16.9,185.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_312},{t:this.shape_311}]},38).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[]},1).wait(79));

	// 
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAcAoIg8AFQgxAAgbgTIgNgLQgMgNgHgaIAKgCQAZAMATAFIBVAJIAiAAQAcAAAWgMQAkgXAWgJIgFAIIgWAkIgKAJQgZAXgzAIg");
	this.shape_321.setTransform(17.9,116.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("rgba(255,255,255,0.682)").s().p("AhsAaIgNgLQgMgNgHgaIAKgCQAZAMASAFIBWAJIAiAAQAbAAAXgNQAjgWAXgIIgFAHIgWAkIgKAJQgaAXgyAIIg9AFQgxAAgagTg");
	this.shape_322.setTransform(17.9,116.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiKgZQAFgBAFgCQAbAMAVAEIBTAKQATABASABQAZAAAVgNQAhgUAUgGIgcAnIgOAKQgZAWgxAHQgdABgfAAQgtAAgagRQgGgGgHgHQgKgKgHgZg");
	this.shape_323.setTransform(18.3,118.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(255,255,255,0.682)").s().p("AhsAXIgNgMQgKgLgHgZIAKgDQAbAMAVAEIBTAKIAlACQAZAAAVgMQAhgVAUgGIgcAnIgOAKQgZAVgxAIQgdACgfgBQgtAAgagRg");
	this.shape_324.setTransform(18.3,118.8);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiIgaQAEgCAFgBQAeAKAYAEIBRAKQAWABAQACQAYABASgLQAfgSASgGIgbAlIgTAKQgZATgvAHQgdABgfgBQgqgBgYgQQgIgHgFgHQgKgJgGgXg");
	this.shape_325.setTransform(18.8,120.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(255,255,255,0.682)").s().p("AgpAlQgqgBgYgQIgNgOQgKgJgGgXIAJgDQAeAKAYAEIBRAKIAmADQAYABASgLQAfgSASgGIgbAlIgUAKQgYATgvAHIgdAAIgfAAg");
	this.shape_326.setTransform(18.8,120.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiGgdQAEgBAGgCQAgAKAaADIBQAKQAXACAQADQAVABASgKQAbgPAQgFIgcAjIgXAJQgZASgtAFQgdABgegDQgngBgWgPQgIgIgGgHQgIgIgGgWg");
	this.shape_327.setTransform(19.2,122.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(255,255,255,0.682)").s().p("AgtAgQgngBgWgPQgIgIgGgHQgIgIgGgWIAKgDQAgAKAaADIBQAKQAXACAQADQAVABASgKQAbgPAQgFIgcAjIgXAJQgZASgtAFIgJAAQgZAAgZgCg");
	this.shape_328.setTransform(19.2,122.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiEgeQADgBAGgBQAiAIAeADIBPAJQAZADAOAEQATABARgIQAYgNAOgEIgcAhIgcAJQgZAQgqAEQgfAAgdgEQgjgCgUgOQgKgIgEgGQgIgJgFgUg");
	this.shape_329.setTransform(19.6,124.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(255,255,255,0.682)").s().p("AgyAdQgjgCgUgOQgJgIgFgGQgIgJgFgUIAJgCQAjAIAdADIBPAJQAYADAPAEQATABAQgIQAZgNAOgEIgbAhIgdAJQgYAQgrAEQgfAAgdgEg");
	this.shape_330.setTransform(19.6,124.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiCgdQADgCAGgBQAlAHAgADIBOAJQAaADAOAFQARABAOgHQAWgKAMgDIgcAfIggAJQgZANgpAEQgegBgdgGQgggBgSgNQgKgKgFgGQgHgIgEgRg");
	this.shape_331.setTransform(20,126.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(255,255,255,0.682)").s().p("Ag2AaQgggBgSgNQgKgKgFgGQgHgIgEgRIAJgDQAlAHAgADIBOAJQAaADAOAFQARABAOgHQAWgKAMgDIgcAfIggAJQgZANgpAEQgegBgdgGg");
	this.shape_332.setTransform(20,126.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAgdQADgCAGgBQAnAGAjADIBNAIQAbAEAOAGQAPACAMgGQAUgIAJgBIgcAcIglAJQgZALgmADQgfgCgcgHQgcgCgRgMQgLgKgEgHQgGgHgEgPg");
	this.shape_333.setTransform(20.4,128.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(255,255,255,0.682)").s().p("Ag6AYQgcgCgRgMQgLgKgEgHQgGgHgEgPIAJgDQAnAGAjADIBNAIQAbAEAOAGQAPACAMgGQAUgIAJgBIgcAcIglAJQgZALgmADQgfgCgcgHg");
	this.shape_334.setTransform(20.4,128.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah+gdQACgCAHgBQApAFAmACIBLAJQAdADANAIQANACALgFQAQgFAIgBIgcAcIgpAHQgZAKgjADQghgEgbgIQgZgCgPgLQgMgJgEgKQgFgGgDgNg");
	this.shape_335.setTransform(20.9,130.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(255,255,255,0.682)").s().p("Ag+AWQgZgCgPgLQgMgKgEgJQgFgGgDgOQACgBAHgBQApAFAmACIBLAJQAdAEANAHQANACALgEQAQgGAIAAIgcAaIgpAIQgZAKgjACQghgCgbgJg");
	this.shape_336.setTransform(20.9,130.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah8gdQACgCAHgCQAsAFAoACIBKAIQAfAEAMAJQALACAJgDQAOgDAFABIgcAYIguAIQgZAIggACQghgEgbgKQgWgDgNgKQgNgKgDgKQgEgFgDgLg");
	this.shape_337.setTransform(21.3,131.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(255,255,255,0.682)").s().p("AhCAUQgWgDgNgKQgNgJgDgLQgEgFgDgMQACgBAHgBQAsAEAoACIBKAIQAfAFAMAIQALADAJgEQAOgDAFABIgcAYIguAIQgZAIggABQghgDgbgKg");
	this.shape_338.setTransform(21.3,131.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7gdQACgCAIgBQAuADArACIBIAIQAhAFALAJQAJADAIgCQALgBADADIgcAWIgzAHQgZAGgeABQghgFgagMQgTgCgMgJQgNgLgDgLQgDgEgDgJg");
	this.shape_339.setTransform(21.7,133.7);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(255,255,255,0.682)").s().p("AhGARQgTgDgLgIQgOgLgDgLQgDgEgDgJQACgCAIgBQAuAEArABIBJAHQAgAGALAJQAJADAIgCQALgBAEACIgdAXIgzAHQgYAGgfAAQghgEgagMg");
	this.shape_340.setTransform(21.7,133.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah4gdQABgCAIgBQAwACAuABIBHAIQAjAFAKALQAHADAGgBQAIACABABIgcAWIg3AHQgZAEgcAAQgigFgZgNQgQgEgKgHQgOgLgCgMQgDgDgBgHg");
	this.shape_341.setTransform(22.1,135.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(255,255,255,0.682)").s().p("AhKAPQgQgEgKgHQgOgLgCgMQgDgDgBgHQABgCAIgBIBeADIBHAIQAjAFAKALQAHADAGgBQAIACABABIgcAWIg3AHQgZAEgcAAQgigFgZgNg");
	this.shape_342.setTransform(22.1,135.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gdQABgCAJgBQAyABAxABIBGAHQAkAGAJAMQAFADAFABQAFACgBAFIgcAUIg8AGQgZACgagBQgigGgZgPQgMgDgIgGQgPgNgCgMQgBgCgCgFg");
	this.shape_343.setTransform(22.6,137.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(255,255,255,0.682)").s().p("AgUAhQgigGgZgPQgMgDgIgGQgPgNgCgMIgDgHQABgCAJgBIBjACIBGAHQAkAGAJAMQAFADAFABQAFACgBAFIgcAUIg8AGIggABIgTAAg");
	this.shape_344.setTransform(22.6,137.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gdQAAgCAJgCQA0ABA0AAIBFAHQAlAGAJANQADAEADACQACAFgDAFIgcASIhAAGQgYAAgZgBQgjgHgYgQQgIgEgHgFQgQgNgBgNQgBgCAAgCg");
	this.shape_345.setTransform(23.1,139.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.682)").s().p("AgZAgQgjgGgYgQQgIgFgHgEQgQgNgBgNIgBgFQAAgCAJgBIBoABIBFAHQAlAHAJAMIAGAGQACAEgDAGIgcASIhAAGIgxgCg");
	this.shape_346.setTransform(23.1,139.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gfQAAgCAJgBIBsAAIBFAGQAnAHAIANIACAIQAAAHgFAHQgFAHgMAFIgLAEIhFAFIgvgEQgjgHgXgTIgKgGQgRgQgBgNg");
	this.shape_347.setTransform(23.7,141.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("rgba(255,255,255,0.682)").s().p("AggAfQgigIgXgSIgKgGQgSgQAAgNIAAgBQAAgCAJgCIBsAAIBFAHQAnAHAIANIACAIQAAAHgFAHQgGAHgLAFIgMAEIhEAFg");
	this.shape_348.setTransform(23.7,141.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_322},{t:this.shape_321}]},25).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_347}]},1).to({state:[]},1).wait(83));

	// 
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAzAUQgfAUgzAAIgRgCQgfgFgIgaIgCguIAIADIAZARIACACQAdATAmAAIAQgBQASgCASgJIAZgQIgIAOIgMAOIgQAPg");
	this.shape_349.setTransform(2,111.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("rgba(255,255,255,0.682)").s().p("AgwAmQgfgFgIgaIgCguIAIADIAZARIACACQAdATAmgBIAQAAQASgBASgKIAZgQIgIANIgMAPIgQAQIgDABQgfAVgzgBg");
	this.shape_350.setTransform(2,111.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhoglIAJABIAeAQQAjATAsABIARgBQAYgCASgKQARgLANgIIACAGQgGAIgHALQgJAJgIAIIgDACQghAYg7ACIgUgBQgjgDgOgWIgHgOQgEgPgEgTg");
	this.shape_351.setTransform(7,113.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("rgba(255,255,255,0.682)").s().p("AgoAlQgjgDgOgWIgHgOQgEgPgEgTIAAgBIAJABIAeAQQAjATArABIASgBQAYgCASgKIAegTIABAGIgNATQgIAJgIAIIgDACQghAYg7ACg");
	this.shape_352.setTransform(7,113.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5ghIAJgBIAiAPQAoAPAzACIAUgBQAZgBAUgMQATgNAPgHIAKgBQgEAFgIAPQgJANgJAIIgDADQgiAchFADIgWAAQgngCgUgSIgNgQQgIgLgFgXg");
	this.shape_353.setTransform(12.4,115.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("rgba(255,255,255,0.682)").s().p("AgkAmQgngCgUgSIgNgQQgIgLgFgXIAAgBIAJgBIAiAPQAoAQAzAAIAUAAQAZgBAUgMQATgNAPgIIAKAAIgMAUQgJANgJAHIgDAEQgiAchFADg");
	this.shape_354.setTransform(12.4,115.4);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABoAJQgiAfhNAEIgZABQgtAAgagPIgSgPQgMgNgHgaIAKgCIAnAPIAFACQAmAJA7AAIAWAAQAcAAAWgMQAVgOARgIIAUgKQgEAFgLAUQgIAQgLAJg");
	this.shape_355.setTransform(17.9,116.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("rgba(255,255,255,0.682)").s().p("AhnAdIgSgOQgMgNgHgaIAKgCIAoAPIADACQAnAJA7AAIAWAAQAbAAAXgNQAVgNAQgIIAVgJQgEAEgLATQgIARgLAIIgDAEQgiAfhNAEIgaABQgsgBgagPg");
	this.shape_356.setTransform(17.9,116.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_350},{t:this.shape_349}]},22).to({state:[{t:this.shape_352},{t:this.shape_351}]},1).to({state:[{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_355}]},1).to({state:[]},1).wait(96));

	// Layer 14
	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAUAvIgYgBQgygEgkgUIgFgDQgjgTAAgZQAAgQAJgFIAWAOQAUALAjANIAkALQAlAMAWAAIAHAAQAVgCAUgIIAGgCIAagOQgPAWgMALIgFAEQgbAVg0AAg");
	this.shape_357.setTransform(-0.6,-91.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("rgba(255,255,255,0.682)").s().p("AgEAuQgygEgkgUIgEgDQgkgTAAgZQAAgQAJgFIAWAOQAVALAiANIAkALQAlAMAWAAIAHAAQAUgCAVgIIAGgCIAagOQgPAWgMALIgFAEQgcAVgyAAg");
	this.shape_358.setTransform(-0.6,-91.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAgaQAAgPAKgEQApAYAfALIAlAMQACAAABAAQAjAMAWAAIAHAAQATgCATgHQACgBABAAIAGgCIASgKQADgBADgCQgMARgKALQgDADgCACQgDACgCACQgaATgxABQgBAAgCAAIgUgBQgCAAgCAAQgvgDgigTQgBgBgCgBIgFgDQghgTgBgXg");
	this.shape_359.setTransform(-0.5,-82.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("rgba(255,255,255,0.682)").s().p("AATAuIgUgBIgEAAQgvgDgigTIgDgCIgFgDQghgSgBgYIAAgCQAAgQAKgDQApAYAfALIAlALIADABQAjAMAWAAIAHAAQATgCATgHIADgBIAGgDIASgJIAGgCQgMAQgKAKIgFAGIgFAEQgaAUgxAAIgDAAg");
	this.shape_360.setTransform(-0.5,-82.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah+gbQABgOAJgEQApAYAfALIAkALQACABACAAQAiALAXgBIAFAAIABAAQATgCATgHQABgBABAAIAFgCIASgIQACgBADgBQgMAQgKAKQgCADgDACQgCADgDACQgaATgwABQgBAAgCAAIgUgBQgCAAgCAAQgugEghgTQgCgBgCgBIgBgBIgDgCQgggTgBgXg");
	this.shape_361.setTransform(-0.4,-73);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(255,255,255,0.682)").s().p("AASAuIgUgBIgEAAQgvgEgggTIgEgCIgBgBIgDgCQgfgTgBgXIAAgCQAAgOAJgEQApAYAfALIAkALIADABQAjALAXgBIAFAAIABAAQATgCATgHIACgBIAFgCIASgIIAEgCQgLAQgKAKIgFAFIgFAFQgbATgvABIgDAAg");
	this.shape_362.setTransform(-0.4,-73);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7gcQAAgNAKgDQAoAYAfAKIAkALQACAAABABQAiAKAWgBIAGgBIABAAQASgCASgHQACgBABAAIAFAAIAQgIQACgBACgBQgLAQgKAKQgDADgCACQgDACgCACQgaATgvABQgCAAgBAAIgUAAQgCAAgCAAQgugFgggTQgBgBgCAAIgCgCIgCgCQgegTgBgXg");
	this.shape_363.setTransform(-0.4,-63.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(255,255,255,0.682)").s().p("AARAtIgUgBIgEAAQgugDgggTIgDgDIgCgBIgCgCQgegTgBgXIAAgBQAAgOAKgDQAoAYAfALIAkAKIADABQAiALAWgCIAGgBIABAAQASgCASgHIADgBIAFAAIAQgIIAEgCQgLAQgKAKIgFAFIgFAEQgaATgvABIgDAAg");
	this.shape_364.setTransform(-0.4,-63.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5gcQABgNAJgDQAoAZAeAKIAlAKQABABABAAQAiAKAWgCIAFAAIABgBQATgCARgHQACAAABAAIAEAAIAPgHQACgCACgBQgMARgKAKQgCACgDACQgCACgCACQgaATgvABQgBAAgCAAIgTgBQgCAAgCAAQgugDgegUQgCgBgCgCIgEgCQgcgTgBgXg");
	this.shape_365.setTransform(-0.3,-54.6);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("rgba(255,255,255,0.682)").s().p("AAPAsIgTAAIgEAAQgugDgegUIgEgDIgEgDQgcgSgBgYIAAgBQABgOAJgCQAoAZAeAKIAlAKIACABQAiAKAWgDIAFAAIABAAQATgCARgHIADAAIAEgBIAPgHIAEgCQgMAQgKAKIgFAFIgEAEQgaATgvAAIgDAAg");
	this.shape_366.setTransform(-0.3,-54.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gdQABgNAKgBQAnAYAeAKIAkAJQACABABAAQAhAJAWgCIAFgBIABAAQASgDASgFQABAAAAAAIAFgBIANgGQACgBACgBQgMAQgKAKQgCACgDACQgCACgDACQgZATguABQgBAAgCAAIgTgBQgCAAgCAAQgugDgdgUQgCgBgBgCIgCgBIgCgCQgbgTgBgXg");
	this.shape_367.setTransform(-0.2,-45.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("rgba(255,255,255,0.682)").s().p("AAOAsIgTgBIgEAAQgtgDgegUIgDgDIgBgBIgDgBQgbgTgBgXIAAgCQABgNAKgBQAoAYAdAKIAkAJIADABQAhAKAWgDIAFgBIABAAQASgDASgEIACgBIADgBIAOgGIAEgBQgLAPgKAKIgGAEIgEAFQgaASguABIgDAAg");
	this.shape_368.setTransform(-0.2,-45.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1geQACgMAKAAQAnAYAdAJIAkAKQABAAAAAAQAhAJAXgDIAFgBIABAAQASgDARgFQABAAABAAIADgBIAMgFQACgBACAAQgMAPgKAKQgCACgDADQgCABgDADQgZARgtABQgCAAgBAAIgTAAQgCAAgCAAQgtgDgdgUQgBgCgCgBIgBgBIgCgCQgZgTgCgYg");
	this.shape_369.setTransform(-0.1,-36.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("rgba(255,255,255,0.682)").s().p("AANArIgTAAIgEAAQgtgDgdgUIgDgDIgBgBIgCgCQgZgTgCgYIAAgBQACgLAKgCQAnAZAdAJIAkAKIABABQAhAIAXgDIAFgBIABAAQASgDARgFIACAAIADgBIAMgFIAEgBQgMAPgKAKIgFAFIgFADQgZASgtABIgDAAg");
	this.shape_370.setTransform(-0.1,-36.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhzgfQACgLALAAQAmAYAdAKIAjAJQAAAAABAAQAhAIAXgDIAFgBIABAAQARgEARgFQABAAAAAAIAEAAIALgEQABAAACgBQgMAPgKAKQgCACgDACQgCACgCACQgaASgtABQgBAAgCAAIgSAAQgCAAgCAAQgtgDgbgVQgCgCgBgBIgBgBIgDgCQgXgTgCgXg");
	this.shape_371.setTransform(0,-26.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("rgba(255,255,255,0.682)").s().p("AAMArIgTAAIgEAAQgtgDgbgVIgDgDIgBgBIgDgCQgXgTgBgXIAAgCQABgLALAAQAnAYAcAKIAjAJIABAAQAhAIAXgDIAFgBIABAAQARgEARgFIABAAIAEAAIALgEIACgBQgLAPgKAKIgFAEIgEAEQgaASgtABIgCAAg");
	this.shape_372.setTransform(0,-26.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwggQACgKAKAAQAnAZAcAJIAhAIQABAAABABQAhAHAWgDIAGgCIABAAQARgDAQgFQABAAABAAIACAAIAKgDQABAAABgBQgLAPgKAJQgCADgDACQgCACgDABQgZASgsABQgBAAgCAAIgSAAQgCAAgCAAQgsgCgbgWQgBgCgCgBIgDgCQgWgUgBgXg");
	this.shape_373.setTransform(0,-17.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("rgba(255,255,255,0.682)").s().p("AAKAqIgSAAIgEAAQgsgDgbgVIgDgDIgDgCQgWgUgBgXIAAgBQACgKAKAAQAnAYAcAJIAhAIIACABQAhAIAWgEIAGgBIABAAQARgEAQgFIACAAIACAAIAKgDIACgBQgLAPgKAJIgFAFIgFADQgZASgsABIgDAAg");
	this.shape_374.setTransform(0,-17.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuggQACgJAKAAQAnAZAbAJIAiAIQABAAABAAQAgAHAWgEIAGgBIABgBQAQgCAQgHQABAAABAAIACABIAIgBQABAAABgBQgLAPgKAJQgCACgDACQgCACgCACQgZARgsABQgBAAgCAAIgSAAQgCAAgBAAQgtgDgZgVQgCgCgBgBIgBgBIgCgCQgVgTgBgXg");
	this.shape_375.setTransform(0.1,-8.5);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("rgba(255,255,255,0.682)").s().p("AAJAqIgSAAIgDAAQgtgDgZgVIgDgDIgBgBIgCgCQgVgTgBgXIAAgCQACgJAKAAQAnAZAbAJIAhAIIADAAQAgAHAWgEIAFgBIABgBQARgCAQgHIABAAIADABIAIgBIACgBQgLAPgKAJIgFAEIgFAEQgZARgrABIgDAAg");
	this.shape_376.setTransform(0.1,-8.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsghQADgJAKACQAmAYAcAJIAgAHQABAAABABQAgAGAWgFIAFgBIABAAQARgDAPgHQABAAABABIABAAIAHAAQABAAABAAQgLAPgKAJQgDACgCACQgCACgDABQgZARgqACQgCAAgBAAIgSgBQgCAAgCAAQgsgCgYgWQgBgCgBgBIgBgBIgCgCQgTgUgCgXg");
	this.shape_377.setTransform(0.2,0.7);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("rgba(255,255,255,0.682)").s().p("AAIAqIgSgBIgEAAQgsgCgYgWIgCgDIgBgBIgCgCQgTgUgCgXIAAgBQADgJAKACQAmAYAcAJIAgAHIACABQAgAGAWgFIAFgBIABAAQARgDAPgHIACABIABAAIAHAAIACAAQgLAPgKAJIgFAEIgFADQgZARgqACIgDAAg");
	this.shape_378.setTransform(0.2,0.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqgiQACgIAMACQAlAZAbAIIAgAHQACAAABAAQAeAGAXgFIAFgBIABAAQAQgDAPgIQABABAAAAIACABIAFABQABAAABABQgLANgKAJQgDADgCABQgDACgCACQgZAQgqACQgBAAgBAAIgSAAQgCAAgCAAQgsgDgXgWQgBgCgBgBIgBgBIgCgCQgSgUgBgXg");
	this.shape_379.setTransform(0.3,10);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("rgba(255,255,255,0.682)").s().p("AAGApIgRAAIgEAAQgrgDgYgWIgCgDIgBgBIgBgCQgSgUgCgXIAAgBQADgIALACQAlAZAbAIIAgAHIACAAQAfAGAWgFIAGgBIABAAQAQgDAPgIIABABIABABIAGABIABABQgLANgJAJIgGAEIgEAEQgZAQgqACIgDAAg");
	this.shape_380.setTransform(0.3,10);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhngiQACgIALADQAlAZAbAIIAgAGQABAAABAAQAeAFAWgFIAFAAIABAAQAQgFAPgHIABAAIABABIAEADQABABAAAAQgLANgKAJQgCADgDABQgCACgCABQgZARgpABQgBAAgCAAIgRABQgCAAgCAAQgrgDgWgXQgBgBgCgCIgBgBIgBgCQgQgTgBgXg");
	this.shape_381.setTransform(0.4,19.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("rgba(255,255,255,0.682)").s().p("AgQApQgrgDgWgXIgDgDIgBgBIgBgCQgQgTgBgXIAAgBQACgIALADQAlAZAbAIIAgAGIACAAQAeAFAWgFIAFAAIABAAQAQgFAPgHIABAAIABABIAEADIABABQgLANgKAJIgFAEIgEADQgZARgpABIgDAAIgRABIgEAAg");
	this.shape_382.setTransform(0.4,19.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhlgjQACgHAMAEQAlAYAaAIIAfAGQACAAABAAQAdAFAXgFIAEgBIABAAQAQgFAPgIQAAABAAAAIABABIACAEQABABAAABQgLANgKAIQgCADgDABQgCACgCABQgZAQgoACQgBAAgCAAIgRAAQgCAAgCAAQgrgCgVgYQgBgBgBgBIgBgBIgBgCQgPgUgBgXg");
	this.shape_383.setTransform(0.5,28.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("rgba(255,255,255,0.682)").s().p("AAEAoIgSAAIgDAAQgrgCgVgYIgCgCIgBgBIgBgCQgPgUgBgXIAAgBQACgHAMAEQAkAYAbAIIAfAGIACAAQAdAFAYgFIAEgBIABAAQAQgFAPgIIAAABIAAABIADAEIABACQgLANgKAIIgFAEIgEADQgZAQgoACIgDAAg");
	this.shape_384.setTransform(0.5,28.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhjgjQADgHALAEQAlAZAaAIIAfAFQABAAABAAQAdAEAWgFIAFgBIABgBQAPgFAOgHQABAAAAABIAAABIABAGQABAAAAABQgLANgKAJQgDACgCABQgCACgCABQgZAQgoACQgBAAgBAAIgRAAQgCAAgCAAQgrgCgTgYQgBgBgBgCIgBgBIgBgCQgOgUgBgXg");
	this.shape_385.setTransform(0.5,37.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("rgba(255,255,255,0.682)").s().p("AgSAoQgrgCgTgYIgCgDIgBgBIgBgCQgOgUgBgXIAAAAQADgHALAEQAlAZAaAIIAfAFIACAAQAdAEAWgFIAFgBIABgBQAPgFAOgHIABABIAAABIABAGIABABQgLANgKAJIgFADIgEADQgZAQgoACIgCAAIgRAAIgEAAg");
	this.shape_386.setTransform(0.5,37.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhgkQADgFAMAEQAkAZAZAHIAfAFQABAAABAAQAcAEAXgGIAEgBIABgBQAPgFAOgIQABABAAAAIgBAJQAAABAAABQgKAMgKAJQgDACgCABQgDACgCABQgYAPgnACQgBAAgCAAIgRABQgBAAgCAAQgrgCgSgZQgBgBgBgBIgCgEQgMgTgBgXg");
	this.shape_387.setTransform(0.6,46.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("rgba(255,255,255,0.682)").s().p("AgTAoQgrgCgSgZIgCgCIgCgEQgMgTgBgXIAAgBQADgFAMAEQAkAZAZAHIAfAFIACAAQAcAEAXgGIAEgBIABgBQAPgFAOgIIABABIgBAJIAAACQgKAMgKAJIgFADIgFADQgYAPgnACIgDAAIgRABIgDAAg");
	this.shape_388.setTransform(0.6,46.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhggkQAEgFALAFQAkAZAZAHIAfAEQABAAABAAQAbADAXgGIAEgBIABgBQAPgGAOgHQAAAAAAABIgCAKQAAABgBABQgLAMgJAJQgDACgCABQgCACgCABQgYAPgnACQgBAAgBAAIgSABQgBAAgCAAQgqgCgSgZQgBgBAAgCIgCgBIAAgCQgLgUgBgXg");
	this.shape_389.setTransform(0.8,56);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("rgba(255,255,255,0.682)").s().p("AgVAoQgqgCgRgZIgCgDIgCgBIAAgCQgLgUgBgXIAAAAQADgFANAFQAjAZAZAHIAeAEIADAAQAbADAXgGIAEgBIABgBQAPgGAOgHIAAABIgDAKIAAACQgKAMgLAJIgEADIgFADQgYAPgnACIgBAAIgRABIgEAAg");
	this.shape_390.setTransform(0.8,56);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhfglQAEgEAMAGQAjAZAZAHIAeAEQABAAABAAQAbACAXgGIAEgCIABgBQAOgGAOgHQAAAAAAABIgEAMQgBABAAABQgLAMgKAIQgCACgDACQgCABgCABQgYAPglACQAAAAgCAAIgSABQgCAAgBAAQgqgCgRgZQgBgCAAgBIgBgBIgBgCQgIgUgCgXg");
	this.shape_391.setTransform(1,65.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("rgba(255,255,255,0.682)").s().p("AgXAoQgqgCgQgZIgCgDIgBgBIAAgCQgJgUgCgXIAAgBQAEgEAMAGQAkAZAYAHIAeAEIACAAQAaACAXgGIAFgCIABgBQAOgGAOgHIAAABIgFAMIgBACQgKAMgKAIIgFAEIgEACQgYAPglACIgBAAIgTABIgDAAg");
	this.shape_392.setTransform(1,65.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AheglQAEgDAMAGQAkAZAYAGIAdAEQACAAABAAQAZACAXgHIAGgDQANgHAOgHQgBABAAABIgBADIgEAKQgBABgBABQgKAMgKAIQgCACgDACQgCABgCABQgYAOgjADQgBAAgCAAIgSABQgBAAgCAAQgqgCgPgaQgBgBgBgBIgBgBIAAgDQgHgUgCgXg");
	this.shape_393.setTransform(1.2,74.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("rgba(255,255,255,0.682)").s().p("AgaAoQgpgCgQgaIgBgDIAAgBIgBgCQgHgUgBgXIAAAAQADgDANAFQAiAaAYAGIAeADIADAAQAZACAXgHIAGgCIAbgOIgBACIgBACIgFAKIgBAEQgKALgKAIIgFADIgEADQgYAOgkADIgCAAIgSABIgEAAg");
	this.shape_394.setTransform(1.2,74.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhdgmQAEgCANAGQAiAaAYAGIAdADQABAAABAAQAZABAXgIIAFgBIABgBQAOgHANgHQgBABAAAAIgCADIgFAMQgBACgBABQgKAMgLAHQgCACgDACQgCABgBABQgYAOgjADQgBAAgCAAIgSAAQgBAAgCAAQgpgBgOgaQgBgCgBgBIAAgBIgBgCQgFgVgCgWg");
	this.shape_395.setTransform(1.4,83.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("rgba(255,255,255,0.682)").s().p("AgcAnQgpgBgOgaIgCgDIAAgBIAAgCQgGgVgCgWIAAgBQAFgCAMAGQAiAaAYAGIAeADIABAAQAaABAWgIIAFgBIABgBIAbgOIgBABIgCADIgGAMIgBADQgLAMgJAHIgGAEIgDACQgYAOgjADIgCAAIgSAAIgEAAg");
	this.shape_396.setTransform(1.4,83.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhbgmQAEgCAMAHQAjAaAXAFIAdADQABAAABAAQAZAAAWgIIAFgBIABgBQANgHAMgIQAAABAAABIgJAQQgBACgBACQgLALgKAIQgCABgDACQgCABgCABQgXAOgiACQgBAAgCAAIgRABQgCAAgBAAQgpgBgOgbQAAgBgBgCIgBgBIAAgCQgEgUgBgXg");
	this.shape_397.setTransform(1.6,92.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("rgba(255,255,255,0.682)").s().p("AgdAnQgpgBgOgbIgBgDIgBgBIAAgCQgEgUgBgXIAAAAQAEgCAMAHQAjAaAXAFIAdADIACAAQAZAAAWgIIAFgBIABgBIAZgPIAAACIgJAQIgCAEQgLALgKAIIgFADIgEACQgXAOgiACIgDAAIgRABIgDAAg");
	this.shape_398.setTransform(1.6,92.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagmQAEgBANAHQAiAaAXAFIAcACQABAAABAAQAYAAAXgIIAEgCIABgBQANgHAMgIQAAABAAABIgDAEIgIAOQgCACgBACQgKALgKAHQgCACgDABQgCABgCABQgXAOgiADQgBAAgBAAIgSAAQgBAAgCAAQgogBgMgbQgBgBgBgCIAAgBIAAgCQgDgVgBgWg");
	this.shape_399.setTransform(1.8,101.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("rgba(255,255,255,0.682)").s().p("AggAnQgogBgMgbIgCgDIAAgBIAAgCIgEgrQAEgBANAHQAiAaAXAFIAcACIACAAQAYAAAXgIIAEgCIABgBIAZgPIAAACIgDAEIgIAOIgDAEQgKALgKAHIgFADIgEACQgXAOgiADIgCAAIgSAAIgDAAg");
	this.shape_400.setTransform(1.8,101.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABagaIgNAWQgMANgLAJIgFADQgYAPgkADIgUABQgrAAgLgdIgCgEIgCgtQAEgBANAJIAQALQASAOAWAFIAdACQAYAAAYgKIAEgCg");
	this.shape_401.setTransform(2,111);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("rgba(255,255,255,0.682)").s().p("AhVALIgCgEIgCgtQAEgBANAJIAQALQASAOAWAFIAdACQAYAAAYgKIAEgCIAZgQIgNAWQgMANgLAJIgFADQgYAPgkADIgUABQgrAAgLgdg");
	this.shape_402.setTransform(2,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_358},{t:this.shape_357}]}).to({state:[{t:this.shape_360},{t:this.shape_359}]},1).to({state:[{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_370},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_400},{t:this.shape_399}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[]},1).wait(99));

	// 
	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA8jaQAlA1AVAzQARAoAIAnQANA+gMA9QgLA5ggA3IgUAfQhIBghbhaQhNhLALhYQAHg0Ajg1QAPgXATgXQASgWAmhiIAdhTQAaAfAVAfg");
	this.shape_403.setTransform(14.6,312.7);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.1,0.9,25.4).s().p("AhSDtQhNhLALhYQAHg0Ajg1QAPgXATgXQASgWAmhiIAdhTQAaAfAVAfQAlA1AVAzQARAoAIAnQANA+gMA9QgLA5ggA3IgUAfQglAygqAAQgnAAgtgsg");
	this.shape_404.setTransform(14.6,312.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiVBGQAHgzAjg2QAPgWASgXQAcgtAfhKQAKgWAHgXQAHgQAHgRQAaAfAVAfQAeAtASAkQAFAMAFAMQAKAZAHAZQAEAOADAPQAJAtgEAtQgCARgDAPQgFAZgJAYQgMAfgUAeQgKAPgLAPQgFAHgGAGQgwAzg3gaQgKgEgKgHQgIgFgJgHQgGgGgGgGQhLhKALhYg");
	this.shape_405.setTransform(13.9,324);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.2,0.9,25.4).s().p("AgkENQgKgEgKgHIgRgMIgMgMQhLhKALhYIAAgCQAHgzAjg2QAPgWASgXQAcgtAfhKIARgtIAOghQAaAfAVAfQAeAtASAkIAKAYQAKAZAHAZIAHAdQAJAtgEAtQgCARgDAPQgFAZgJAYQgMAfgUAeIgVAeIgLANQggAigjAAQgRAAgTgJg");
	this.shape_406.setTransform(13.9,324);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiWBDQAHg0Ajg1QAOgXATgXQAdguAghGQAKgWAIgWQAIgPAHgPQAbAeAVAfQAdAtARAlQAGAMAFALQAKAaAGAZQAEAOADAPQAJAugFAsQgCAQgDAQQgGAZgKAXQgMAfgUAdQgLAPgLAOQgGAHgGAFQgwAyg3gbQgKgEgKgHQgIgGgJgHQgGgFgGgGQhJhLALhXg");
	this.shape_407.setTransform(13.3,335.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.3,0.9,25.3).s().p("AgnEKQgKgEgKgHIgRgNIgMgLQhJhLALhXIAAgCQAHg0Ajg1QAOgXATgXQAdguAghGIASgsIAPgeQAbAeAVAfQAdAtARAlIALAXQAKAaAGAZIAHAdQAJAugFAsIgFAgQgGAZgKAXQgMAfgUAdIgWAdIgMAMQggAgghAAQgTAAgTgJg");
	this.shape_408.setTransform(13.3,335.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiXA/QAHg0Ajg1QAOgXATgXQAdguAihEQALgVAJgUQAHgOAIgPQAbAeAVAgQAdAtARAlQAGAMAEALQAKAaAHAZQADAOADAPQAJAugGAsQgCAQgDAQQgHAYgKAXQgMAegWAdQgLAOgMAOQgGAGgGAGQgxAvg3gbQgJgEgKgHQgJgGgIgHQgFgFgHgGQhIhLAMhYg");
	this.shape_409.setTransform(12.6,346.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.4,0.9,25.2).s().p("AgrEHQgJgEgKgHIgRgNIgMgLQhIhLAMhYIAAgCQAHg0Ajg1QAOgXATgXQAdguAihEIAUgpIAPgdQAbAeAVAgQAdAtARAlIAKAXQAKAaAHAZIAGAdQAJAugGAsQgCAQgDAQQgHAYgKAXQgMAegWAdIgXAcIgMAMQgfAeghAAQgTAAgVgKg");
	this.shape_410.setTransform(12.6,346.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiZA7QAIg0Aig1QAPgXASgXQAegvAjhBQAMgUAJgTQAIgNAIgNQAbAdAWAgQAdAuARAlQAFALAFAMQAJAaAHAZQADAOADAPQAIAugGAsQgCAQgEAQQgHAYgKAXQgOAdgWAbQgLAOgNANQgGAHgGAFQgyAtg2gaQgKgFgKgHQgIgGgIgHQgGgGgGgGQhHhLAMhYg");
	this.shape_411.setTransform(12,357.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.5,0.9,25.1).s().p("AguEFQgKgFgKgHQgIgGgIgHIgMgMQhHhLAMhYIAAgCQAIg0Aig1QAPgXASgXQAegvAjhBIAVgnIAQgaQAbAdAWAgQAdAuARAlIAKAXQAJAaAHAZIAGAdQAIAugGAsQgCAQgEAQQgHAYgKAXQgOAdgWAbIgYAbIgMAMQgfAcggAAQgUAAgVgJg");
	this.shape_412.setTransform(12,357.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiaA3QAIg0Aig1QAOgXASgXQAfgwAkg+QANgSAKgSQAJgMAIgNQAbAeAVAfQAeAuAQAlQAFAMAFAMQAJAaAGAZQAEAOACAPQAIAvgGArQgDAQgEAPQgHAYgLAXQgOAcgYAbQgLANgMANQgHAGgGAFQgyAsg3gbQgKgFgKgHQgIgGgIgHQgFgGgGgGQhGhLANhZg");
	this.shape_413.setTransform(11.4,369.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.5,0.9,25).s().p("AgyECQgKgFgKgHIgQgNIgLgMQhGhLANhZIAAgCQAIg0Aig1QAOgXASgXQAfgwAkg+IAXgkIARgZQAbAeAVAfQAeAuAQAlIAKAYQAJAaAGAZIAGAdQAIAvgGArIgHAfQgHAYgLAXQgOAcgYAbIgXAaIgNALQgfAbgfAAQgVAAgWgKg");
	this.shape_414.setTransform(11.4,369.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AibA0QAIg0Ahg2QAPgXASgXQAggwAlg7QAMgSAMgRQAJgLAJgLQAbAdAWAgQAdAuAQAlQAFAMAFAMQAJAaAGAZQADAOACAPQAIAvgHArQgDAQgEAPQgIAYgLAWQgOAcgZAaQgMAMgNANQgGAGgHAEQgzAqg2gbQgKgFgKgHQgIgGgIgIQgFgFgGgGQhFhMAOhZg");
	this.shape_415.setTransform(10.8,380.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.6,0.9,24.9).s().p("Ag1D/QgKgFgKgHIgQgOIgLgLQhFhMAOhZIAAgBQAIg0Ahg2QAPgXASgXIBFhrIAYgjIASgWQAbAdAWAgQAdAuAQAlIAKAYQAJAaAGAZIAFAdQAIAvgHArQgDAQgEAPQgIAYgLAWQgOAcgZAaIgZAZIgNAKQgfAZgeAAQgWAAgWgKg");
	this.shape_416.setTransform(10.8,380.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AidAvQAJgzAhg2QAPgXASgXQAggyAng4QAMgQANgPQAKgLAJgKQAbAcAWAhQAdAuAQAlQAFAMAEAMQAKAaAFAZQADAPADAOQAHAwgHAqQgEAQgEAPQgIAYgMAWQgPAbgaAZQgMAMgNAMQgHAFgHAFQgxAog4gcQgKgFgKgHQgIgGgIgHQgFgGgGgGQhDhMANhZg");
	this.shape_417.setTransform(10.1,391.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.8,0.9,24.8).s().p("Ag4D7QgKgFgKgHIgQgNIgLgMQhDhMANhZIAAgCQAJgzAhg2QAPgXASgXQAggyAng4IAZgfIATgVQAbAcAWAhQAdAuAQAlIAJAYQAKAaAFAZIAGAdQAHAwgHAqIgIAfQgIAYgMAWQgPAbgaAZIgZAYIgOAKQgeAYgeAAQgWAAgXgMg");
	this.shape_418.setTransform(10.1,391.8);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AieArQAJgzAhg2QAOgXATgXQAhgyAog1QANgQANgOQAKgKAKgIQAcAcAVAgQAdAvAQAlQAFAMAEAMQAJAaAGAZQADAPACAOQAGAwgHAqQgEAQgFAPQgIAYgMAVQgPAagcAZQgMALgOAMQgHAFgHAEQgyAmg4gcQgJgFgKgHQgIgGgIgHQgFgGgFgGQhDhNAOhZg");
	this.shape_419.setTransform(9.5,403.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.9,0.9,24.7).s().p("Ag8D4IgTgMIgQgNIgKgMQhDhNAOhZIAAgCQAJgzAhg2QAOgXATgXQAhgyAog1IAageIAUgSQAcAcAVAgQAdAvAQAlIAJAYQAJAaAGAZIAFAdQAGAwgHAqQgEAQgFAPQgIAYgMAVQgPAagcAZIgaAXIgOAJQgeAWgdAAQgXAAgYgMg");
	this.shape_420.setTransform(9.5,403.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AifAoQAJg0Ahg2QAOgXASgXQAigzApgyQAOgPAOgMQAKgJAKgIQAcAcAWAhQAcAuAQAmQAFAMAEAMQAJAaAFAZQADAPACAOQAHAxgJApQgDAQgFAPQgJAXgNAVQgPAagdAXQgNAMgOALQgHAEgHAFQgyAkg5gdQgJgFgKgHQgIgGgHgIQgFgFgGgGQhBhNAPhag");
	this.shape_421.setTransform(8.9,414.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22,0.8,24.6).s().p("AhAD1QgJgFgKgHIgPgOIgLgLQhBhNAPhaIAAgBQAJg0Ahg2QAOgXASgXQAigzApgyIAcgbIAUgRQAcAcAWAhQAcAuAQAmIAJAYQAJAaAFAZIAFAdQAHAxgJApQgDAQgFAPQgJAXgNAVQgPAagdAXIgbAXIgOAJQgdAUgdAAQgYAAgZgNg");
	this.shape_422.setTransform(8.9,414.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AigAkQAJg0Agg2QAPgXASgXQAig0ArgvQAPgOAOgLQALgIAKgGQAcAbAWAhQAdAvAPAlQAFAMAEANQAJAaAFAZQADAPABAOQAGAxgIApQgEAQgGAPQgJAXgNAUQgQAZgeAXQgNALgOAKQgHAFgIAEQgzAig4gcQgJgGgKgHQgIgGgHgIQgFgFgFgGQhBhOAQhag");
	this.shape_423.setTransform(8.2,425.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.1,0.9,24.5).s().p("AhDDzIgTgNIgPgOIgKgLQhBhOAQhaIAAgBQAJg0Agg2QAPgXASgXQAig0ArgvIAdgZIAVgOQAcAbAWAhQAdAvAPAlIAJAZQAJAaAFAZIAEAdQAGAxgIApQgEAQgGAPQgJAXgNAUQgQAZgeAXIgbAVIgPAJQgdASgcAAQgZAAgZgMg");
	this.shape_424.setTransform(8.2,425.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiiAgQAKg0Agg2QAOgXASgXQAjg0AsgtQAQgMAPgKQALgHAKgGQAdAbAWAhQAcAvAPAmQAFAMAEAMQAJAbAFAZQACAPACAOQAGAxgKApQgEAQgFAOQgKAYgOAUQgQAYgfAWQgNAKgPAKQgIAEgHAEQg0Agg4gcQgJgGgKgHQgHgGgIgIQgFgGgFgGQg/hNAQhbg");
	this.shape_425.setTransform(7.6,437);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.2,0.8,24.4).s().p("AhHDwIgTgNIgPgOIgKgMQg/hNAQhbIAAgBQAKg0Agg2QAOgXASgXQAjg0AsgtIAfgWIAVgNQAdAbAWAhQAcAvAPAmIAJAYQAJAbAFAZIAEAdQAGAxgKApQgEAQgFAOQgKAYgOAUQgQAYgfAWIgcAUIgPAIQgdARgbAAQgZAAgbgNg");
	this.shape_426.setTransform(7.6,437);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AijAcQAKg0Agg2QAOgYASgXQAkg1AtgpQAQgMAQgIQALgGALgFQAdAbAWAhQAcAvAPAmQAFAMAEANQAIAaAFAaQADAOABAOQAFAygJAoQgFAQgGAPQgKAXgOATQgRAYggAVQgNAKgQAJQgHAEgIAEQg0Aeg4gdQgJgFgKgHQgHgHgIgIQgFgFgEgGQg+hOAQhbg");
	this.shape_427.setTransform(7,448.4);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.3,0.8,24.2).s().p("AhKDsIgTgMIgPgPIgJgLQg+hOAQhbIAAgBQAKg0Agg2QAOgYASgXQAkg1AtgpQAQgMAQgIIAWgLQAdAbAWAhQAcAvAPAmIAJAZQAIAaAFAaIAEAcQAFAygJAoQgFAQgGAPQgKAXgOATQgRAYggAVQgNAKgQAJIgPAIQgcAQgaAAQgbAAgbgPg");
	this.shape_428.setTransform(7,448.4);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AilAYQALg0Afg2QAOgXASgYQAlg1AvgnQAQgKAQgIQANgFALgDQAdAaAWAiQAcAvAOAmQAFAMAEANQAIAaAFAaQACAPACAMQAFA0gKAnQgFAQgGAOQgLAYgPATQgRAXghAUQgOAJgPAJQgIAEgIADQg1Adg3geQgKgFgKgHQgHgHgHgIQgFgFgFgGQg8hPAQhbg");
	this.shape_429.setTransform(6.4,459.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.4,0.8,24.2).s().p("AhNDpIgUgMIgOgPIgKgLQg8hPAQhbIAAgBQALg0Afg2QAOgXASgYQAlg1AvgnQAQgKAQgIIAYgIQAdAaAWAiQAcAvAOAmIAJAZQAIAaAFAaIAEAbQAFA0gKAnQgFAQgGAOQgLAYgPATQgRAXghAUIgdASIgQAHQgbAOgZAAQgcAAgcgPg");
	this.shape_430.setTransform(6.4,459.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AimAUQAKg1Afg1QAOgXASgYQAmg2AwgkQARgJARgGQANgEALgDQAeAaAVAiQAcAwAPAmQAEAMAEAMQAIAbAFAZQACAQABAMQAFA0gLAnQgEAQgHAOQgLAXgPATQgSAWgjATQgOAJgPAIQgIAEgJAEQg1Aag3geQgKgGgJgHQgIgGgHgIQgEgGgFgGQg8hOAShcg");
	this.shape_431.setTransform(5.8,471);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.5,0.7,24.1).s().p("AhRDmIgTgNIgPgOIgJgMQg8hOAShcIAAgBQAKg1Afg1QAOgXASgYQAmg2AwgkIAigPIAYgHQAeAaAVAiQAcAwAPAmIAIAYQAIAbAFAZIADAcQAFA0gLAnQgEAQgHAOQgLAXgPATQgSAWgjATIgdARIgRAIQgZAMgYAAQgeAAgdgQg");
	this.shape_432.setTransform(5.8,471);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AinAQQAKg1Afg1QAOgYASgXQAng3AxghQASgIARgFQANgDAMgCQAeAaAWAiQAbAwAOAmQAFAMAEANQAIAaAEAaQACAPABANQAFA0gLAnQgFAPgHAOQgMAXgQASQgRAWgkASQgPAJgQAIQgIADgIADQg2AZg3geQgKgGgKgHQgHgHgHgIQgEgFgFgGQg6hPAShcg");
	this.shape_433.setTransform(5.1,482.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.6,0.7,23.9).s().p("AhUDjIgUgNIgOgPIgJgLQg6hPAShcIAAgBQAKg1Afg1QAOgYASgXQAng3AxghQASgIARgFIAZgFQAeAaAWAiQAbAwAOAmIAJAZQAIAaAEAaIADAcQAFA0gLAnQgFAPgHAOQgMAXgQASQgRAWgkASIgfARIgQAGQgZAMgXAAQgfAAgegRg");
	this.shape_434.setTransform(5.1,482.3);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipAMQALg1Afg1QANgYASgXQAog4AygeQATgHASgEQANgCANAAQAeAZAVAjQAcAvAOAnQAEAMAEAMQAIAbAEAaQACAPABANQAEA0gMAnQgFAPgHAOQgMAXgQASQgSAVgmARQgOAIgRAHQgIAEgJADQg2AWg3geQgKgGgJgHQgHgHgHgIQgFgGgEgGQg5hPAShcg");
	this.shape_435.setTransform(4.5,493.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.7,0.7,23.8).s().p("AhYDgIgTgNIgOgPIgJgMQg5hPAShcIAAgBQALg1Afg1QANgYASgXQAog4AygeQATgHASgEIAagCQAeAZAVAjQAcAvAOAnIAIAYQAIAbAEAaIADAcQAEA0gMAnQgFAPgHAOQgMAXgQASQgSAVgmARIgfAPIgRAHQgVAJgYAAQggAAgggRg");
	this.shape_436.setTransform(4.5,493.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqAIQALg1Aeg1QAOgYASgXQAog5A0gaQAUgHASgCQAOgBAMAAQAfAZAWAjQAbAwAOAmQAEANAEAMQAHAbAEAaQACAOABAOQAEA1gMAlQgGAQgHAOQgMAXgRARQgTAUgmARQgPAHgRAHQgJADgIADQg3AVg3gfQgKgGgKgHQgGgHgHgIQgFgGgEgGQg4hPAThdg");
	this.shape_437.setTransform(3.9,504.9);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.8,0.7,23.7).s().p("AhbDdIgUgNIgNgPIgJgMQg4hPAThdIAAgBQALg1Aeg1QAOgYASgXQAog5A0gaQAUgHASgCIAagBQAfAZAWAjQAbAwAOAmIAIAZQAHAbAEAaIADAcQAEA1gMAlQgGAQgHAOQgMAXgRARQgTAUgmARIggAOIgRAGQgWAIgXAAQghAAgggSg");
	this.shape_438.setTransform(3.9,504.9);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisAFQAMg2Aeg1QAOgYARgXQApg5A1gYQAVgFASgCQAPAAANACQAeAYAWAjQAcAwANAnQAEANAEAMQAHAbAEAaQACANABAPQADA1gNAlQgFAQgIANQgNAXgRARQgTAUgoAPQgPAHgRAHQgJADgJACQg3ATg3gfQgKgGgJgHQgHgIgHgIQgEgFgEgGQg3hQAThdg");
	this.shape_439.setTransform(3.3,516.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.9,0.7,23.6).s().p("AhfDaIgTgNIgOgQIgIgLQg3hQAThdIAAAAQAMg2Aeg1QAOgYARgXQApg5A1gYQAVgFASgCQAPAAANACQAeAYAWAjQAcAwANAnIAIAZQAHAbAEAaIADAcQADA1gNAlQgFAQgIANQgNAXgRARQgTAUgoAPIggAOIgSAFQgTAIgWAAQgjAAgigUg");
	this.shape_440.setTransform(3.3,516.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitACQAMg2Aeg1QANgYASgXQAqg6A2gVQAVgEATAAQAPABAOACQAfAZAWAjQAbAwANAnQAEAMAEANQAHAbADAaQACANABAPQADA2gOAkQgFAQgIANQgNAXgSAQQgUATgoAPQgQAGgSAGQgIADgKACQg3ASg4ggQgJgGgJgHQgHgIgHgIQgEgFgEgGQg2hQAUheg");
	this.shape_441.setTransform(2.6,527.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.9,0.7,23.6).s().p("AhjDYIgSgNIgOgQIgIgLQg2hQAUheIAAAAQAMg2Aeg1QANgYASgXQAqg6A2gVQAVgEATAAQAPABAOACQAfAZAWAjQAbAwANAnIAIAZQAHAbADAaIADAcQADA2gOAkQgFAQgIANQgNAXgSAQQgUATgoAPIgiAMIgSAFQgSAGgVAAQgkAAgkgUg");
	this.shape_442.setTransform(2.6,527.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivAAQANg4Adg0QAOgYARgXQArg7A3gSQAWgDAUABQAPABAOAFQAfAXAWAkQAbAwANAnQAFANADAMQAHAbADAaQACAOABAOQACA2gOAlQgGAPgIANQgNAXgTAQQgUASgqAOQgPAGgTAGQgJACgJACQg4APg3gfQgJgHgKgHQgHgHgGgIQgEgGgEgGQg1hRAUhcg");
	this.shape_443.setTransform(2,538.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-23,0.6,23.6).s().p("AhmDWIgTgOIgNgPIgIgMQg1hRAUhcIAAAAQANg4Adg0QAOgYARgXQArg7A3gSQAWgDAUABQAPABAOAFQAfAXAWAkQAbAwANAnIAIAZQAHAbADAaIADAcQACA2gOAlQgGAPgIANQgNAXgTAQQgUASgqAOIgiAMIgSAEQgRAFgSAAQgnAAglgVg");
	this.shape_444.setTransform(2,538.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgCQANg4Adg0QAOgZARgXQArg7A5gPQAXgDAUADQAQACAOAGQAfAXAXAkQAaAwANAnQAEANAEANQAHAbADAZQABAOABAPQACA2gPAkQgGAPgIAOQgOAWgTAQQgUARgrANQgQAGgTAFQgJACgKACQg5ANg3ggQgJgGgJgHQgHgIgGgIQgEgGgEgGQgzhRAUhbg");
	this.shape_445.setTransform(1.4,549.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.9,0.6,23.6).s().p("AhqDUIgSgNIgNgQIgIgMQgzhRAUhbIAAgBQANg4Adg0QAOgZARgXQArg7A5gPQAXgDAUADQAQACAOAGQAfAXAXAkQAaAwANAnIAIAaQAHAbADAZIACAdQACA2gPAkQgGAPgIAOQgOAWgTAQQgUARgrANIgjALIgTAEQgPAEgSAAQgoAAgngXg");
	this.shape_446.setTransform(1.4,549.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixgFQANg4Acg0QAOgYARgYQAsg8A6gMQAYgBAVAEQAQADAPAGQAfAXAWAkQAbAxAMAnQAFANADAMQAHAcACAYQACAPAAAPQACA3gPAjQgGAPgJANQgOAXgUAPQgUARgtAMQgQAFgTAFQgJABgKACQg5AMg3ghQgJgGgKgHQgGgIgHgIQgEgGgDgGQgyhRAVhcg");
	this.shape_447.setTransform(0.8,561);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.9,0.6,23.7).s().p("AhtDSIgTgNIgNgQIgHgMQgyhRAVhcIAAgBQANg4Acg0QAOgYARgYQAsg8A6gMQAYgBAVAEQAQADAPAGQAfAXAWAkQAbAxAMAnIAIAZQAHAcACAYIACAeQACA3gPAjQgGAPgJANQgOAXgUAPQgUARgtAMIgjAKIgTADQgOADgPAAQgrAAgogYg");
	this.shape_448.setTransform(0.8,561);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizgHQANg5Adg0QANgYARgXQAtg9A8gJQAYgBAVAGQARAEAPAHQAgAXAWAkQAbAxAMAnQAEANADANQAHAbACAYQACAQAAAOQABA4gPAiQgHAQgJANQgOAWgUAPQgWAQgtALQgRAFgTAEQgJABgKACQg6AKg3ghQgJgHgKgHQgGgIgGgIQgEgGgDgGQgxhRAVhdg");
	this.shape_449.setTransform(0.2,572.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.8,0.6,23.7).s().p("AhxDRIgTgOIgMgQIgHgMQgxhRAVhdQANg5Adg0QANgYARgXQAtg9A8gJQAYgBAVAGQARAEAPAHQAgAXAWAkQAbAxAMAnIAHAaQAHAbACAYIACAeQABA4gPAiQgHAQgJANQgOAWgUAPQgWAQgtALIgkAJIgTADQgMACgOAAQgtAAgqgZg");
	this.shape_450.setTransform(0.2,572.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai0gJQANg5Adg0QANgYARgXQAug+A9gGQAZABAWAGQARAFAPAJQAgAWAWAkQAbAyAMAnQAEANADANQAGAbADAYQABAQAAAOQABA4gQAiQgHAQgJAMQgPAWgUAPQgWAPgvALQgRAEgTADQgKACgIABQg9AIg2ghQgJgHgKgHQgGgIgGgIQgEgGgDgGQgwhSAWhdg");
	this.shape_451.setTransform(-0.5,583.3);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.7,0.6,23.8).s().p("Ah0DQIgTgOIgMgQIgHgMQgwhSAWhdQANg5Adg0QANgYARgXQAug+A9gGQAZABAWAGQARAFAPAJQAgAWAWAkQAbAyAMAnIAHAaQAGAbADAYIABAeQABA4gQAiQgHAQgJAMQgPAWgUAPQgWAPgvALIgkAHIgSADIgXABQgwAAgsgag");
	this.shape_452.setTransform(-0.5,583.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2gLQAOg5Acg0QANgYARgYQAvg+A+gDQAaABAWAIQASAGAPAKQAhAWAWAkQAaAyAMAnQAEANADANQAGAbACAZQACAPAAAPQAAA4gQAiQgHAPgKANQgPAWgVAOQgWAOgwAKQgRAEgUADQgKABgIABQg9AGg3ghQgJgHgKgIQgGgIgGgIQgDgGgDgGQgvhSAWhdg");
	this.shape_453.setTransform(-1.1,594.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.7,0.5,23.9).s().p("Ah4DPIgTgPIgMgQIgGgMQgvhSAWhdQAOg5Acg0QANgYARgYQAvg+A+gDQAaABAWAIQASAGAPAKQAhAWAWAkQAaAyAMAnIAHAaQAGAbACAZIACAeQAAA4gQAiQgHAPgKANQgPAWgVAOQgWAOgwAKIglAHIgSACIgTAAQgyAAgvgbg");
	this.shape_454.setTransform(-1.1,594.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACPiIQAVAoAMAnQAMApADAlQAFBOgVAqQgVAqghAVQgiAWheAJQg+AEg2giIgTgOIgMgRQg1hXAYhkQAXhdA6hNQAmgyBAgBQAaADAXAJQA9AXAhA/g");
	this.shape_455.setTransform(-1.7,605.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.6,0.5,23.9).s().p("Ah7DNIgTgOIgMgRQg1hXAYhkQAXhdA6hNQAmgyBAgBQAaADAXAJQA9AXAhA/QAVAoAMAnQAMApADAlQAFBOgVAqQgVAqghAVQgiAWheAJIgOAAQg2AAgwgeg");
	this.shape_456.setTransform(-1.7,605.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_404},{t:this.shape_403}]},69).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_412},{t:this.shape_411}]},1).to({state:[{t:this.shape_414},{t:this.shape_413}]},1).to({state:[{t:this.shape_416},{t:this.shape_415}]},1).to({state:[{t:this.shape_418},{t:this.shape_417}]},1).to({state:[{t:this.shape_420},{t:this.shape_419}]},1).to({state:[{t:this.shape_422},{t:this.shape_421}]},1).to({state:[{t:this.shape_424},{t:this.shape_423}]},1).to({state:[{t:this.shape_426},{t:this.shape_425}]},1).to({state:[{t:this.shape_428},{t:this.shape_427}]},1).to({state:[{t:this.shape_430},{t:this.shape_429}]},1).to({state:[{t:this.shape_432},{t:this.shape_431}]},1).to({state:[{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.shape_436},{t:this.shape_435}]},1).to({state:[{t:this.shape_438},{t:this.shape_437}]},1).to({state:[{t:this.shape_440},{t:this.shape_439}]},1).to({state:[{t:this.shape_442},{t:this.shape_441}]},1).to({state:[{t:this.shape_444},{t:this.shape_443}]},1).to({state:[{t:this.shape_446},{t:this.shape_445}]},1).to({state:[{t:this.shape_448},{t:this.shape_447}]},1).to({state:[{t:this.shape_450},{t:this.shape_449}]},1).to({state:[{t:this.shape_452},{t:this.shape_451}]},1).to({state:[{t:this.shape_454},{t:this.shape_453}]},1).to({state:[{t:this.shape_456},{t:this.shape_455}]},1).to({state:[]},1).wait(26));

	// 
	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohpQDEDCjxCfQgHAEgIADQgvAKgzgdIgHgEQh+hKgDhfQgEhfA5jhIAmAlQBdBUBbAag");
	this.shape_457.setTransform(14.7,291.4);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],3,-25.3,3,21.3).s().p("Ag2DsIgHgEQh+hKgDhfQgEhfA5jhIAmAlQBdBUBbAaIATAFQDEDCjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_458.setTransform(14.7,291.4);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwAkQAAhQAxi4QAVAJAbgVQBMBGBKAWQAnApgBAmQCcCbjBCBQgIAMgMALQgoAJgngXQgSAWgXgVQh9hTARhqg");
	this.shape_459.setTransform(14.9,296.4);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["rgba(103,225,225,0.314)","rgba(255,255,255,0.541)"],[0,1],2.3,-25.2,2.3,21.4).s().p("AgbDgQgSAWgXgVQh9hTARhqQAAhQAxi4QAVAJAbgVQBMBGBKAWQAnApgBAmQCcCbjBCBQgIAMgMALQgLADgLAAQgdAAgcgRg");
	this.shape_460.setTransform(14.9,296.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AieATQAEhAApiQQAVgBAkg6QA5A2A6ASQBFBRgMBIQB1B2iRBiQgKAVgQATQgeAHgfgQQgfAugqgoQh8hcAmh3g");
	this.shape_461.setTransform(14.9,300.3);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["rgba(104,195,195,0.314)","rgba(255,255,255,0.541)"],[0,1],1.9,-24,1.9,22.6).s().p("AhIDmQh8hcAmh3QAEhAApiQQAVgBAkg6QA5A2A6ASQBFBRgMBIQB1B2iRBiQgKAVgQATQgeAHgfgQQgQAZgUAAQgSAAgTgTg");
	this.shape_462.setTransform(14.9,300.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiLABQAIgxAghnQAWgLAuhgQAnAmAoAPQBjB4gWBoQBNBShiBEQgKAdgUAbQgVAHgWgKQgsBGg+g7Qh7hlA7iDg");
	this.shape_463.setTransform(14.7,304.4);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.lf(["rgba(104,166,166,0.314)","rgba(255,255,255,0.541)"],[0,1],1.7,-23,1.7,23.5).s().p("AhLDpQh7hlA7iDQAIgxAghnQAWgLAuhgQAnAmAoAPQBjB4gWBoQBNBShiBEQgKAdgUAbQgVAHgWgKQgZAlgbAAQgZAAgdgag");
	this.shape_464.setTransform(14.7,304.4);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gQQAMgkAYg+QAXgVA2iGQAWAXAXALQCBCfghCLQAmAsgyAlQgMAmgYAjQgLAFgMgDQg9BehPhOQh7huBQiNg");
	this.shape_465.setTransform(14.4,308.6);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.lf(["rgba(105,136,136,0.314)","rgba(255,255,255,0.541)"],[0,1],1.5,-22.1,1.5,24.5).s().p("AhMDrQh7huBQiNQAMgkAYg+QAXgVA2iGQAWAXAXALQCBCfghCLQAmAsgyAlQgMAmgYAjQgLAFgMgDQghAzglAAQghAAglgjg");
	this.shape_466.setTransform(14.4,308.6);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAakJQCeDGgsCuIgDANQgOAtgbAsIgEAHQhMB2hihhQh6h3BliZIAfgqQAZgeA8itg");
	this.shape_467.setTransform(14.6,312.7);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.1,0.9,25.4).s().p("AhSDtQh6h3BliZIAfgqQAZgeA8itIANAPQCeDGgsCuIgDANQgOAtgbAsIgEAHQgqBBgwAAQgnAAgtgsg");
	this.shape_468.setTransform(14.6,312.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_458},{t:this.shape_457}]},64).to({state:[{t:this.shape_460},{t:this.shape_459}]},1).to({state:[{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_464},{t:this.shape_463}]},1).to({state:[{t:this.shape_466},{t:this.shape_465}]},1).to({state:[{t:this.shape_468},{t:this.shape_467}]},1).to({state:[]},1).wait(52));

	// 
	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACBivQCmEIjxCfIgPAHQgvAKgzgdQiFhMgDhhQgEhfD/jhQArAoAeAqg");
	this.shape_469.setTransform(-3.6,277.4);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],2.5,-25.3,2.5,21.3).s().p("Ag7DsQiFhMgDhhQgEhfD/jhQArAoAeAqQCmEIjxCfIgPAHQgNADgNAAQgiAAgmgWg");
	this.shape_470.setTransform(-3.6,277.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBBBQgEhfCejhQBQBTBMAiQC0DkjxCfQg9ASg0geQiEhLgEhhg");
	this.shape_471.setTransform(5.5,284.3);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],2.8,-25.1,2.8,21.4).s().p("Ag5DtQiEhLgEhhQgEhfCejhQBQBTBMAiQC0DkjxCfQgXAHgWAAQgkAAgggTg");
	this.shape_472.setTransform(5.5,284.3);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohpQDEDCjxCfQgHAEgIADQgvAKgzgdQiFhMgDhhQgEhfA5jhQB6B+B3Aag");
	this.shape_473.setTransform(14.7,291.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],3,-25.3,3,21.3).s().p("Ag2DsQiFhMgDhhQgEhfA5jhQB6B+B3AaQDEDCjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_474.setTransform(14.7,291.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_470},{t:this.shape_469}]},62).to({state:[{t:this.shape_472},{t:this.shape_471}]},1).to({state:[{t:this.shape_474},{t:this.shape_473}]},1).to({state:[]},1).wait(57));

	// 
	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAxDNQhiAqg0g6QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APg");
	this.shape_475.setTransform(-3.5,274);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-25.4,0.6,21.2).s().p("AhlC9QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APQgqASgfAAQgvAAgegig");
	this.shape_476.setTransform(-3.5,274);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/AdQBahvCZiRQAtgCAjAYQCECqifCmQgNBIgtAMQhVAig1gzQhnhPADhag");
	this.shape_477.setTransform(-3.5,275.1);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.lf(["rgba(103,218,218,0.314)","rgba(255,255,255,0.541)"],[0,1],1.1,-25.6,1.1,21).s().p("AhbDGQhnhPADhaQBahvCZiRQAtgCAjAYQCECqifCmQgNBIgtAMQgjAOgcAAQgrAAgggfg");
	this.shape_478.setTransform(-3.5,275.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjAAoQA6hpC7isQAsAMAiAeQCPDIi7ClQgKAxghAJQhIAag0grQhxhPABhcg");
	this.shape_479.setTransform(-3.5,275.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],1.6,-25.5,1.6,21.1).s().p("AhQDTQhxhPABhcQA6hpC7isQAsAMAiAeQCPDIi7ClQgKAxghAJQgbAKgXAAQgpAAghgbg");
	this.shape_480.setTransform(-3.5,275.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjCA0QAbhkDejHQArAaAgAkQCaDojVCiQgJAagUAHQg8ASg0glQh7hMgBhfg");
	this.shape_481.setTransform(-3.6,276.6);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.lf(["rgba(105,143,143,0.314)","rgba(255,255,255,0.541)"],[0,1],2,-25.4,2,21.2).s().p("AhGDfQh7hMgBhfQAbhkDejHQArAaAgAkQCaDojVCiQgJAagUAHQgVAGgTAAQglAAgjgZg");
	this.shape_482.setTransform(-3.6,276.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACBivQCmEIjxCfIgPAHQgvAKgzgdQiFhMgDhhQgEhfD/jhQArAoAeAqg");
	this.shape_483.setTransform(-3.6,277.4);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],2.5,-25.3,2.5,21.3).s().p("Ag7DsQiFhMgDhhQgEhfD/jhQArAoAeAqQCmEIjxCfIgPAHQgNADgNAAQgiAAgmgWg");
	this.shape_484.setTransform(-3.6,277.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_476},{t:this.shape_475}]},58).to({state:[{t:this.shape_478},{t:this.shape_477}]},1).to({state:[{t:this.shape_480},{t:this.shape_479}]},1).to({state:[{t:this.shape_482},{t:this.shape_481}]},1).to({state:[{t:this.shape_484},{t:this.shape_483}]},1).to({state:[]},1).wait(59));

	//  0
	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA4C6QiVBJg1hWQg3hXAOhNQC2hPAuhHQAwhHArgGQBMALgWC4QgXC2hrAbg");
	this.shape_485.setTransform(-3,267.4);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.6,-22.4,-1.6,24.2).s().p("AiSCtQg3hXAOhNQC2hPAuhHQAwhHArgGQBMALgWC4QgXC2hrAbQhDAhgxAAQg5AAgdgug");
	this.shape_486.setTransform(-3,267.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6AKQCqhWA8hRQAvg8AqgBQBVAlgsC1QgVCkhhAZQiLBCg1hQQg+hWAMhPg");
	this.shape_487.setTransform(-3.2,268.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.lf(["rgba(103,225,225,0.314)","rgba(255,255,255,0.541)"],[0,1],-1,-23.1,-1,23.4).s().p("AiICvQg+hWAMhPQCqhWA8hRQAvg8AqgBQBVAlgsC1QgVCkhhAZQg+AegtAAQg4AAgdgsg");
	this.shape_488.setTransform(-3.2,268.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6AMQCeheBLhaQAugxApADQBeA+hCCxQgUCVhXAWQiAA8g2hLQhGhUALhRg");
	this.shape_489.setTransform(-3.4,270.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.lf(["rgba(104,195,195,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.5,-23.8,-0.5,22.8).s().p("Ah/CxQhGhUALhRQCeheBLhaQAugxApADQBeA+hCCxQgUCVhXAWQg4AbgrAAQg1AAgegqg");
	this.shape_490.setTransform(-3.4,270.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7AOQCRhlBahkQAugmAoAIQBnBYhZCvQgRCChOATQh2A3g1hGQhOhTAJhTg");
	this.shape_491.setTransform(-3.4,271.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.lf(["rgba(104,166,166,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.1,-24.3,-0.1,22.2).s().p("Ah2C0QhOhTAJhTQCRhlBahkQAugmAoAIQBnBYhZCvQgRCChOATQg1AYgmAAQgzAAgdgng");
	this.shape_492.setTransform(-3.4,271.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8ARQCFhtBohtQAugbAmANQBwBxhuCsQgQBwhEARQhsAxg0hAQhWhSAHhVg");
	this.shape_493.setTransform(-3.5,272.8);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.lf(["rgba(105,136,136,0.314)","rgba(255,255,255,0.541)"],[0,1],0.3,-24.9,0.3,21.6).s().p("AhtC4QhWhSAHhVQCFhtBohtQAugbAmANQBwBxhuCsQgQBwhEARQgvAVgjAAQgxAAgdgkg");
	this.shape_494.setTransform(-3.5,272.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAxDNQhiAqg0g6QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APg");
	this.shape_495.setTransform(-3.5,274);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-25.4,0.6,21.2).s().p("AhlC9QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APQgqASgfAAQgvAAgegig");
	this.shape_496.setTransform(-3.5,274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_486},{t:this.shape_485}]},53).to({state:[{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_490},{t:this.shape_489}]},1).to({state:[{t:this.shape_492},{t:this.shape_491}]},1).to({state:[{t:this.shape_494},{t:this.shape_493}]},1).to({state:[{t:this.shape_496},{t:this.shape_495}]},1).to({state:[]},1).wait(63));

	//  0
	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWipQAuBHAUBAIADAIQAUA/gEAzQgCAWgGATIgNAgQgMAcgXATQgXASghAIQgoAKgwgLIgZgHQgVgGgQgLIgKgHQhFgygBhhIAAgGQABhWA3hVQAbgpAogfIAygiIAfgJIAUAXQASAWAPAXg");
	this.shape_497.setTransform(12.3,262.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-23,0.9,23.6).s().p("AgdDpIgZgHQgVgGgQgLIgKgHQhFgygBhhIAAgGQABhWA3hVQAbgpAogfIAygiIAfgJIAUAXQASAWAPAXQAuBHAUBAIADAIQAUA/gEAzQgCAWgGATIgNAgQgMAcgXATQgXASghAIQgTAEgVAAQgWAAgagFg");
	this.shape_498.setTransform(12.3,262.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiuAmQAZhLA4hKQAhgoAkgfIAmgcQAQgJAPgHQALAFAKAHQASAOAOASQAqA2ATA3QAHAQgCAeQAOAwgDAoQgEAhgKAaIgPAhQgMAZgUARQgXASggAIQgmALgqgHQgWACgSgEQgTgGgPgKQgIgEgHgHQg1gngBhKQgOgYAEgVg");
	this.shape_499.setTransform(8.4,263.9);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.lf(["rgba(103,218,218,0.314)","rgba(255,255,255,0.541)"],[0,1],0.3,-23,0.3,23.6).s().p("AgVDhQgWACgSgEQgTgGgPgKQgIgEgHgHQg1gngBhKQgOgYAEgVQAZhLA4hKQAhgoAkgfIAmgcIAfgQIAVAMQASAOAOASQAqA2ATA3QAHAQgCAeQAOAwgDAoQgEAhgKAaIgPAhQgMAZgUARQgXASggAIQgYAGgaAAQgNAAgRgCg");
	this.shape_500.setTransform(8.4,263.9);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiyAYQAzhAA5g/QAmgmAfggIAbgWQAQgNAQgKQALAAALACQAQAHAPAKQAlAmASAwQAMAagGA5QAKAhgDAcQgGAtgOAhIgRAjQgMAUgRAPQgXASgfAIQgjAMgkgBQggAGgYgFQgRgGgOgIQgLgGgJgKQgkgbgCgzQgcgtAHgog");
	this.shape_501.setTransform(4.5,265.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.2,-23.2,-0.2,23.4).s().p("AhEDZQgRgGgOgIQgLgGgJgKQgkgbgCgzQgcgtAHgoQAzhAA5g/IBFhGIAbgWQAQgNAQgKQALAAALACQAQAHAPAKQAlAmASAwQAMAagGA5QAKAhgDAcQgGAtgOAhIgRAjQgMAUgRAPQgXASgfAIQgjAMgkgBQgRADgPAAQgNAAgLgCg");
	this.shape_502.setTransform(4.5,265.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1AOQBLg2A7g0QArgkAYggIATgQQAPgSAQgMQAMgHAMgCQAPgBAOAFQAiAVAQAnQARAmgKBUQAFATgCAPQgHA5gSAnIgUAkQgMAQgOAOQgXASgfAIQggANgeADQgpALgegGQgPgFgNgHQgOgHgLgOQgUgQgDgbQgohCAKg6g");
	this.shape_503.setTransform(0.6,266.7);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.lf(["rgba(105,143,143,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.8,-23.1,-0.8,23.5).s().p("AhLDWQgPgFgNgHQgOgHgLgOQgUgQgDgbQgohCAKg6QBLg2A7g0QArgkAYggIATgQQAPgSAQgMQAMgHAMgCQAPgBAOAFQAiAVAQAnQARAmgKBUQAFATgCAPQgHA5gSAnIgUAkQgMAQgOAOQgXASgfAIQggANgeADQgaAHgVAAQgNAAgLgCg");
	this.shape_504.setTransform(0.6,266.7);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACEjaQAeAEAPAgQAWAwgNBvIgBAJQgKBDgWAuIgWAmIgXAYQgXASgdAHQgeAPgaAIQgxAQgkgIIgZgJQgRgJgNgRIgGgJQg3hXAOhNQBkgqA8gqQAvgiAVggIAHgKQAQgWAQgPQAMgNANgHQAOgIANgCg");
	this.shape_505.setTransform(-3,267.4);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.6,-22.4,-1.6,24.2).s().p("AhVDZIgZgJQgRgJgNgRIgGgJQg3hXAOhNQBkgqA8gqQAvgiAVggIAHgKQAQgWAQgPQAMgNANgHQAOgIANgCQAeAEAPAgQAWAwgNBvIgBAJQgKBDgWAuIgWAmIgXAYQgXASgdAHQgeAPgaAIQghAKgbAAQgNAAgMgCg");
	this.shape_506.setTransform(-3,267.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_498},{t:this.shape_497}]},49).to({state:[{t:this.shape_500},{t:this.shape_499}]},1).to({state:[{t:this.shape_502},{t:this.shape_501}]},1).to({state:[{t:this.shape_504},{t:this.shape_503}]},1).to({state:[{t:this.shape_506},{t:this.shape_505}]},1).to({state:[]},1).wait(68));

	//  0
	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARjyIA1BGQAzBLAZBBQAYA+gBA4IgCAhIgBAGIgIAfQgXBCg7ASIhVADIgagFIglgNQhagogGhvIAAgBQgFhVA4haQAcgsArgsIAkgkIAagQg");
	this.shape_507.setTransform(16.6,167);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.6,1,24).s().p("AgjDuIglgNQhagogGhvIAAgBQgFhVA4haQAcgsArgsIAkgkIAagQIABAAIA1BGQAzBLAZBBQAYA+gBA4IgCAhIgBAGIgIAfQgXBCg7ASIhVADg");
	this.shape_508.setTransform(16.6,167);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioBGQgEhWA4hZQAbgrArgqIAjghIAcgRQAeAhAZAjQAzBKAYBBQAXA+AAA2IgEAqIgJAgQgXBAg8ASQgrADgqgBIgCAAIgYgFIgCgBQgSgFgRgHQgBAAgCgBQhWgqgFhtQAAgBAAAAg");
	this.shape_509.setTransform(16,180.7);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.lf(["rgba(103,234,234,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.6,1,23.9).s().p("AgLDxIgCAAIgYgFIgCgBIgjgMIgDgBQhWgqgFhtIAAgBQgEhWA4hZQAbgrArgqIAjghIAcgRQAeAhAZAjQAzBKAYBBQAXA+AAA2IgEAqIgJAgQgXBAg8ASQglACglAAIgLAAg");
	this.shape_510.setTransform(16,180.7);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipBCQgDhVA4hZQAcgrArgpIAlggIAcgQQAdAiAZAiQAzBLAXBBQAXA+gBA1IgEAkIgKAmQgYBAg9ARQgqAEgrgCIgCAAIgYgFIgCgBQgRgGgRgHQgCgBgBAAQhVgsgFhtQAAAAAAgBg");
	this.shape_511.setTransform(15.4,194.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.lf(["rgba(103,212,212,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.7,1,23.8).s().p("AgODwIgCAAIgYgFIgCgBIgigNIgDgBQhVgsgFhtIAAgBQgDhVA4hZQAcgrArgpIAlggIAcgQQAdAiAZAiQAzBLAXBBQAXA+gBA1IgEAkIgKAmQgYBAg9ARQgcADgdAAIgcgBg");
	this.shape_512.setTransform(15.4,194.3);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipA/QgDhWA4hYQAcgsAsgnIAmgfIAcgOQAeAhAYAjQAzBLAXBBQAWA/gCA0IgEAkIgLAmQgYA+g+ARQgqAFgsgEIgCAAIgXgFIgCgBQgSgGgRgHQgBgBgCgBQhUgsgDhtQAAgBAAAAg");
	this.shape_513.setTransform(14.8,208);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.lf(["rgba(104,191,191,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.8,0.9,23.8).s().p("AgRDuIgCAAIgXgFIgCgBQgSgGgRgHIgDgCQhUgsgDhtIAAgBQgDhWA4hYQAcgsAsgnIAmgfIAcgOQAeAhAYAjQAzBLAXBBQAWA/gCA0IgEAkIgLAmQgYA+g+ARQgYADgaAAQgSAAgSgCg");
	this.shape_514.setTransform(14.8,208);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqA7QgBhVA4hXQAcgsAtgmIAmgeIAdgOQAfAiAXAjQAyBLAWBCQAWA/gCA0IgFAkIgMAlQgYA9g/ARQgqAGgsgGIgCAAIgXgFIgCgBQgTgGgQgIQgBgBgCAAQhTgvgDhtQAAAAAAgBg");
	this.shape_515.setTransform(14.1,221.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.lf(["rgba(104,170,170,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.8,1,23.8).s().p("AgTDtIgCAAIgXgFIgCgBQgTgGgQgIIgDgBQhTgvgDhtIAAgBQgBhVA4hXQAcgsAtgmIAmgeIAdgOQAfAiAXAjQAyBLAWBCQAWA/gCA0IgFAkIgMAlQgYA9g/ARQgWADgXAAQgVAAgUgDg");
	this.shape_516.setTransform(14.1,221.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqA4QgBhWA4hWQAdgtAtgkIAngcIAegNQAfAhAXAjQAxBLAWBDQAVA/gDA0IgGAkIgMAlQgZA7hAARQgpAHgtgHIgCAAIgXgGIgCgBQgTgFgPgJQgCgBgBgBQhTgvgBhtQAAgBAAAAg");
	this.shape_517.setTransform(13.5,235.2);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.lf(["rgba(105,149,149,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.8,0.9,23.7).s().p("AgWDsIgCAAIgXgGIgCgBQgTgFgPgJIgDgCQhTgvgBhtIAAgBQgBhWA4hWQAdgtAtgkIAngcIAegNQAfAhAXAjQAxBLAWBDQAVA/gDA0IgGAkIgMAlQgZA7hAARQgUADgWAAQgWAAgWgDg");
	this.shape_518.setTransform(13.5,235.2);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirA0QAAhVA4hWQAdgtAugjIAogbIAegMQAfAiAXAjQAxBLAVBDQAVA/gEAzIgGAkIgOAlQgYA6hCARQgoAIgugJIgCAAIgXgFIgCgBQgSgGgQgJQgBgBgCgBQhRgxgBhtQAAAAAAgBg");
	this.shape_519.setTransform(12.9,248.9);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.lf(["rgba(105,127,127,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.9,0.9,23.6).s().p("AgZDqIgCAAIgXgFIgCgBQgSgGgQgJIgDgCQhRgxgBhtIAAgBQAAhVA4hWQAdgtAugjIAogbIAegMQAfAiAXAjQAxBLAVBDQAVA/gEAzIgGAkIgOAlQgYA6hCARQgTAEgVAAQgVAAgZgFg");
	this.shape_520.setTransform(12.9,248.9);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWipQAxBLAUBEQAUA/gEAzIgHAkIgBAFIgNAgQgZA4hCARQgoAKgugLIgCAAIgZgHQgVgGgQgLQhRgzABhtQABhWA3hVQAegtAvgiIAngaIABgBIAfgJIABABQAeAgAWAjg");
	this.shape_521.setTransform(12.3,262.5);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-23,0.9,23.6).s().p("AgbDpIgCAAIgZgHQgVgGgQgLQhRgzABhtQABhWA3hVQAegtAvgiIAngaIABgBIAfgJIABABQAeAgAWAjQAxBLAUBEQAUA/gEAzIgHAkIgBAFIgNAgQgZA4hCARQgTAEgVAAQgVAAgZgFg");
	this.shape_522.setTransform(12.3,262.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_508},{t:this.shape_507}]},42).to({state:[{t:this.shape_510},{t:this.shape_509}]},1).to({state:[{t:this.shape_512},{t:this.shape_511}]},1).to({state:[{t:this.shape_514},{t:this.shape_513}]},1).to({state:[{t:this.shape_516},{t:this.shape_515}]},1).to({state:[{t:this.shape_518},{t:this.shape_517}]},1).to({state:[{t:this.shape_520},{t:this.shape_519}]},1).to({state:[{t:this.shape_522},{t:this.shape_521}]},1).to({state:[]},1).wait(72));

	//  0
	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_523.setTransform(28.1,108.3);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(77,77,77,0.4)").s().p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_524.setTransform(28.1,108.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgMQAQgPALgLQAPgPAOgFQAOgGAaAXQAbAYA4BNQhoiJhLBBg");
	this.shape_525.setTransform(25.8,119);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(77,77,77,0.4)").s().p("AhZgMIAbgaQAPgPAOgFQAOgGAaAXQAbAYA4BNQhoiJhLBBg");
	this.shape_526.setTransform(25.8,119);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgJQAWgVALgKQAPgNANgHQANgHAYAYQAZAXA2BTQhiiNhPBFg");
	this.shape_527.setTransform(23.4,129.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(77,77,77,0.4)").s().p("AhYgJIAhgfQAPgNANgHQANgHAYAYQAZAXA2BTQhiiNhPBFg");
	this.shape_528.setTransform(23.4,129.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgHQAbgZANgKQANgLANgIQAMgJAWAYQAXAXA0BXQhbiRhUBKg");
	this.shape_529.setTransform(21.1,140.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(77,77,77,0.4)").s().p("AhXgHQAbgZAMgKQAOgLANgIQAMgJAVAYQAXAXA1BXQhbiRhUBKg");
	this.shape_530.setTransform(21.1,140.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAQgxQAUAXAzBcQhXiVhWBOQAggeAOgJIAZgTQALgKAUAYg");
	this.shape_531.setTransform(18.7,151.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgFQAggeANgJIAagTQALgKAUAYQAUAXAzBcQhXiVhWBOg");
	this.shape_532.setTransform(18.7,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_524},{t:this.shape_523}]},38).to({state:[{t:this.shape_526},{t:this.shape_525}]},1).to({state:[{t:this.shape_528},{t:this.shape_527}]},1).to({state:[{t:this.shape_530},{t:this.shape_529}]},1).to({state:[{t:this.shape_532},{t:this.shape_531}]},1).to({state:[]},1).wait(79));

	//  0
	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABSAyQhNiIhWBhQAMgfASgPQARgPAaABQAXABAXATQAXASAVA9g");
	this.shape_533.setTransform(6.6,81.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(77,77,77,0.4)").s().p("AhRALQAMgfASgPQARgPAaABQAXABAXATQAXASAVA9QhNiIhWBhg");
	this.shape_534.setTransform(6.6,81.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhSAJQAMgeARgOQARgPAZABQAWAAAYATQAYATAYA+QhQiIhVBeg");
	this.shape_535.setTransform(8.3,83.6);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(77,77,77,0.4)").s().p("AhSAJQAMgeARgOQARgPAZABQAWAAAYATQAYATAYA+QhQiIhVBeg");
	this.shape_536.setTransform(8.3,83.6);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhSAHQAMgcAQgPQARgPAYABQAWAAAYATQAYATAaA/QhSiIhTBcg");
	this.shape_537.setTransform(9.9,85.7);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(77,77,77,0.4)").s().p("AhSAHQAMgcAQgPQARgPAYABQAWAAAYATQAYATAaA/QhSiIhTBcg");
	this.shape_538.setTransform(9.9,85.7);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhTAFQAMgbAPgOQASgPAXAAQAUAAAZATQAZAUAdBAQhUiIhTBZg");
	this.shape_539.setTransform(11.6,87.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(77,77,77,0.4)").s().p("AhTAFQAMgbAPgOQASgPAXAAQAVAAAYATQAZAUAdBAQhUiIhTBZg");
	this.shape_540.setTransform(11.6,87.8);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUADQAMgZAQgOQAQgPAXgBQATAAAaAUQAZAUAgBBQhWiIhTBWg");
	this.shape_541.setTransform(13.2,89.8);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(77,77,77,0.4)").s().p("AhUADQAMgZAPgOQARgPAXgBQATAAAaAUQAZAUAfBBQhViIhTBWg");
	this.shape_542.setTransform(13.2,89.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVABQAMgXAPgOQARgQAWAAQATgBAZAUQAaAVAjBBQhZiHhSBTg");
	this.shape_543.setTransform(14.9,91.9);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(77,77,77,0.4)").s().p("AhVABQAMgXAPgOQARgQAWAAQATgBAZAUQAZAVAkBBQhZiHhSBTg");
	this.shape_544.setTransform(14.9,91.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVAAQALgXAPgNQAQgQAVgBQAUgBAYAVQAaAVAmBCQhbiHhQBRg");
	this.shape_545.setTransform(16.5,93.9);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(77,77,77,0.4)").s().p("AhVAAQALgXAPgNQAQgQAVgBQAUgBAYAVQAaAVAmBCQhbiHhQBRg");
	this.shape_546.setTransform(16.5,93.9);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgCQAMgVANgNQARgQAUgBQATgCAYAVQAbAVApBEQheiHhPBOg");
	this.shape_547.setTransform(18.2,96);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgCQAMgVANgNQARgQAUgBQATgCAYAVQAbAVApBEQheiHhPBOg");
	this.shape_548.setTransform(18.2,96);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgEQALgTAOgNQAQgQATgCQASgCAZAVQAcAWArBEQhhiGhNBLg");
	this.shape_549.setTransform(19.9,98);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgEQALgTANgNQARgQASgCQASgCAZAVQAcAWArBEQhhiGhMBLg");
	this.shape_550.setTransform(19.9,98);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgGQAMgSAMgMQARgQASgCQARgDAaAWQAcAWAuBFQhkiGhMBIg");
	this.shape_551.setTransform(21.5,100.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(77,77,77,0.4)").s().p("AhYgGQAMgSANgMQAQgQASgCQARgDAaAWQAcAWAvBFQhkiGhNBIg");
	this.shape_552.setTransform(21.5,100.1);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgIQALgQANgMQAPgQASgDQAQgDAbAWQAcAXAxBGQhmiGhLBFg");
	this.shape_553.setTransform(23.2,102.1);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(77,77,77,0.4)").s().p("AhYgIQALgQANgMQAPgQASgDQAQgDAbAWQAcAXAxBGQhmiGhLBFg");
	this.shape_554.setTransform(23.2,102.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgKQALgOAMgMQAQgQAQgEQAQgDAbAWQAdAYA0BGQhpiFhKBCg");
	this.shape_555.setTransform(24.8,104.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(77,77,77,0.4)").s().p("AhZgKQALgOAMgMQAQgQAQgEQAQgDAbAWQAdAYA0BGQhpiFhKBCg");
	this.shape_556.setTransform(24.8,104.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgMQAKgMAMgMQAQgRAPgDQAPgEAbAXQAeAXA2BIQhriFhIA/g");
	this.shape_557.setTransform(26.5,106.2);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(77,77,77,0.4)").s().p("AhZgMIAWgYQAQgRAPgDQAPgEAcAXQAdAXA2BIQhriFhIA/g");
	this.shape_558.setTransform(26.5,106.2);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_559.setTransform(28.1,108.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(77,77,77,0.4)").s().p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_560.setTransform(28.1,108.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_534},{t:this.shape_533}]},25).to({state:[{t:this.shape_536},{t:this.shape_535}]},1).to({state:[{t:this.shape_538},{t:this.shape_537}]},1).to({state:[{t:this.shape_540},{t:this.shape_539}]},1).to({state:[{t:this.shape_542},{t:this.shape_541}]},1).to({state:[{t:this.shape_544},{t:this.shape_543}]},1).to({state:[{t:this.shape_546},{t:this.shape_545}]},1).to({state:[{t:this.shape_548},{t:this.shape_547}]},1).to({state:[{t:this.shape_550},{t:this.shape_549}]},1).to({state:[{t:this.shape_552},{t:this.shape_551}]},1).to({state:[{t:this.shape_554},{t:this.shape_553}]},1).to({state:[{t:this.shape_556},{t:this.shape_555}]},1).to({state:[{t:this.shape_558},{t:this.shape_557}]},1).to({state:[{t:this.shape_560},{t:this.shape_559}]},1).to({state:[]},1).wait(83));

	//  0
	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABkAfQhphQhkA6QAWgXAWgMQAXgLAYACQAMACALAFQAOAFANAHQArAUAbAgg");
	this.shape_561.setTransform(0.5,78.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(77,77,77,0.4)").s().p("ABjAfQhohQhkA6QAWgXAWgMQAXgLAYACQANACAKAFQAOAFAMAHQArAUAcAgg");
	this.shape_562.setTransform(0.5,78.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhgALQASgaAVgNQAVgMAZACQAkALAMAIQAkATAYAnIgDgBQhehihgBHg");
	this.shape_563.setTransform(2.5,79.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(77,77,77,0.4)").s().p("ABeAmQhehihgBHQASgaAVgNQAVgMAZACQAkALALAIQAlATAYAng");
	this.shape_564.setTransform(2.5,79.5);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYALQAPgcATgOQATgOAaACQAjALAMAIQAdATAWAvIgBADQhWh2haBUg");
	this.shape_565.setTransform(4.5,80.5);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(77,77,77,0.4)").s().p("AhYALQAQgcASgOQAUgOAZACQAjALAMAIQAcATAXAvIgBADQhWh2haBUg");
	this.shape_566.setTransform(4.5,80.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABSAyQhNiIhWBhQAMgfASgPQARgPAaABQAKABAMAFQAMAFAMAJQAVARAUA3g");
	this.shape_567.setTransform(6.6,81.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(77,77,77,0.4)").s().p("AhRALQAMgfASgPQARgPAaABQAKABAMAFQAMAFAMAJQAVARAUA3IADAHQhNiIhWBhg");
	this.shape_568.setTransform(6.6,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_562},{t:this.shape_561}]},22).to({state:[{t:this.shape_564},{t:this.shape_563}]},1).to({state:[{t:this.shape_566},{t:this.shape_565}]},1).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[]},1).wait(96));

	// Layer 13
	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABMAHQgtgagpAAQgjAAgjAaQgVARgNATIgCAAQAJgOAWgkQAZgfArgDIAYgBQAxADAbAaQALAKAKAQIANAYg");
	this.shape_569.setTransform(0.4,-124.5);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(77,77,77,0.4)").s().p("Ah0ArQAKgOAVgkQAZgfAqgDIAZgBQAwADAcAaQAKAKALAQIAMAYIgogeQgtgagpAAQgjAAgjAaQgVARgNATg");
	this.shape_570.setTransform(0.4,-124.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhzAqQAJgOAVgjQAagfAqgDQBIAEAbAZQAMALAKAPIAMAXQgUgPgUgOQgugagoAAQgjAAgjAZQgUAQgOATg");
	this.shape_571.setTransform(0.4,-115.3);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(77,77,77,0.4)").s().p("AhzAqQAJgOAWgjQAZgfAqgDQBIAEAbAZQALALALAPIAMAXIgogdQgtgagpAAQgiAAgkAZQgUAQgNATg");
	this.shape_572.setTransform(0.4,-115.3);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhyAoQAJgOAWghQAZgfApgCQBIAEAbAZQALALALAQIALAVQgTgOgUgPQgtgZgogBQgjAAgiAYQgVAQgOASg");
	this.shape_573.setTransform(0.4,-106.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(77,77,77,0.4)").s().p("AhyApIAfgwQAZgfApgBQBIADAbAaQALAKALAQIALAVIgngdQgtgZgogBQgjAAgiAZQgVAPgOATg");
	this.shape_574.setTransform(0.4,-106.1);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhyAoQAKgPAVggQAageApgCQBGAFAbAZQAMAJALARIALAVQgUgPgUgOQgsgZgoAAQgigBgjAYQgUAPgOASg");
	this.shape_575.setTransform(0.4,-96.9);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(77,77,77,0.4)").s().p("AhyAoIAfgvQAageApgCQBGAFAbAZQAMAJALARIALAVIgogdQgsgZgoAAQgigBgjAYQgUAPgOASg");
	this.shape_576.setTransform(0.4,-96.9);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxAnQAKgPAVgfQAagdAogCQBGAGAbAYQAMAKAMARIAJATQgTgOgUgOQgsgZgngBQgjAAgiAXQgUAOgOASg");
	this.shape_577.setTransform(0.4,-87.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(77,77,77,0.4)").s().p("AhSgHQAageAogBQBGAGAbAYQAMAKAMARIAJATIgngcQgrgZgogBQgigBgjAYQgUAOgOARIgCABIAfgug");
	this.shape_578.setTransform(0.4,-87.7);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxAmQAMgPAUgeQAagdAogBQBFAHAbAYQAMAKAMARIAJARQgTgOgUgNQgrgZgngBQgjgBgiAWQgUAOgPASg");
	this.shape_579.setTransform(0.4,-78.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(77,77,77,0.4)").s().p("ABLAKQgrgYgngBQgjgBgiAWQgVAOgOARIgCAAQAMgOAUgfQAagcAogBQBFAHAbAXQAMAKAMASIAJARIgngcg");
	this.shape_580.setTransform(0.4,-78.5);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwAkQALgPAUgdQAagcAogBQBEAHAbAYQANAKAMASIAIAQQgTgOgTgOQgrgYgngBQgjgBgiAVQgUAOgOARg");
	this.shape_581.setTransform(0.4,-69.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(77,77,77,0.4)").s().p("ABKAKQgrgYgmgBQgigBgjAVQgTAOgPARIgCAAIAggsQAagcAngBQBEAHAbAYQANAKAMASIAIAQIgngcg");
	this.shape_582.setTransform(0.4,-69.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvAiQALgQAVgbQAagcAnAAQBDAIAbAYQANAKAMARIAHAPQgTgOgTgNQgqgYgngBQgigBghAVQgVAMgOARg");
	this.shape_583.setTransform(0.3,-60);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(77,77,77,0.4)").s().p("ABKAKQgqgXgngCQgigBghAUQgVANgOARIgCAAIAggrQAagbAnAAQBDAHAbAYQANAKAMARIAHAPIgmgbg");
	this.shape_584.setTransform(0.3,-60);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvAhQAMgQAUgaQAbgbAmAAQBCAIAbAYQAOAKAMARIAHAOQgTgOgTgNQgqgXgmgCQgigBgiAUQgUAMgPAQg");
	this.shape_585.setTransform(0.3,-50.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(77,77,77,0.4)").s().p("ABKAKQgqgXgmgCQgigBgiAUQgUAMgPAQIgCABIAggqQAbgbAmAAQBCAIAbAYQAOAKAMARIAHAOIgmgbg");
	this.shape_586.setTransform(0.3,-50.8);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuAgQANgRATgZQAbgaAmAAQBBAKAbAXQAOALANARIAFAMQgSgNgTgNQgqgXglgCQgjgBghASQgTAMgQAQg");
	this.shape_587.setTransform(0.3,-41.6);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(77,77,77,0.4)").s().p("ABKALQgqgXglgCQgigCgiATQgTAMgQAQIgCABIAggqQAbgaAmAAQBBAKAbAXQAOALAMARIAGAMIglgag");
	this.shape_588.setTransform(0.3,-41.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuAeQANgRAUgXQAagaAmABQBBAKAbAXQAOALANARIAFALQgTgOgSgMQgqgXglgCQgigBghARQgUAMgPAPg");
	this.shape_589.setTransform(0.3,-32.4);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(77,77,77,0.4)").s().p("ABKALQgqgXglgCQgigBghARQgUAMgQAPIgCABIAhgoQAagaAmABQBAAKAbAXQAOALANARIAGALIglgag");
	this.shape_590.setTransform(0.3,-32.4);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtAcQANgQATgXQAbgZAlABQBAALAbAXQAOALAOARIAEAKQgTgOgSgMQgpgXglgCQghgBghARQgUALgQAPg");
	this.shape_591.setTransform(0.3,-23.1);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgpgXglgCQghgBghARQgUALgQAPIgCAAIAggnQAbgZAlABQBAALAbAXQAOALAOARIAEAKIglgag");
	this.shape_592.setTransform(0.3,-23.1);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsAbQANgRATgWQAbgZAlACQA/AMAbAWQAOAMAOAQIADAJQgSgNgSgMQgogWglgDQgigCghARQgTAKgQAPg");
	this.shape_593.setTransform(0.3,-13.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgogWglgDQgigCghARQgTAKgQAPIgCABIAggnQAcgZAkACQA/AMAaAWQAPAMAOAQIADAJIgkgZg");
	this.shape_594.setTransform(0.3,-13.9);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrAZQAMgRAUgVQAbgYAkACQA/ANAaAWQAPAMAOAQIACAIQgRgOgSgLQgogWglgDQghgCghAQQgUAKgQAOg");
	this.shape_595.setTransform(0.3,-4.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(77,77,77,0.4)").s().p("ABIALQgogWgkgDQghgCghAQQgTAKgRAOIgCABQAOgRATgVQAbgYAkACQA+ANAbAWQAPAMAOAQIACAIQgRgOgTgLg");
	this.shape_596.setTransform(0.3,-4.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrAYQAOgSATgTQAbgYAkADQA9ANAbAVQAPANAOARIACAGQgSgNgSgMQgngVgkgDQghgCghAPQgTAJgRAOg");
	this.shape_597.setTransform(0.3,4.6);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(77,77,77,0.4)").s().p("ABIALQgngVgkgDQghgCghAPQgTAJgRAOIgCABQAOgSATgTQAbgYAkADQA9ANAbAVQAPANAOARIACAGQgSgNgSgMg");
	this.shape_598.setTransform(0.3,4.6);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqAWQAOgSASgSQAcgXAjADQA9AOAaAUQAQAOAOARIABAEQgRgNgSgLQgngVgkgDQghgCggAPQgTAHgRAOg");
	this.shape_599.setTransform(0.3,13.8);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(77,77,77,0.4)").s().p("ABIALQgngVgkgDQghgCggAPQgTAHgRAOIgCABQAOgSASgSQAcgXAjADQA9AOAaAUQAQAOAOARIABAEQgRgNgSgLg");
	this.shape_600.setTransform(0.3,13.8);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqAUQAPgSASgRQAcgWAjADQA7APAbAUQAPAOAQAQIgBAEQgRgNgRgLQgngVgkgDQgggCggAPQgUAGgRAOg");
	this.shape_601.setTransform(0.3,23.1);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(77,77,77,0.4)").s().p("ABIALQgngVgkgDQgggCggAPQgUAGgRAOIgCAAQAPgSASgRQAcgWAjADQA7APAbAUIAfAeIgBAEQgRgNgRgLg");
	this.shape_602.setTransform(0.3,23.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqATQAPgTASgPQAcgWAjADQA7AQAaATQAQAPAQAQIgBADQgSgNgRgLQgmgVgjgDQghgCggAOQgTAGgSANg");
	this.shape_603.setTransform(0.3,32.3);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(77,77,77,0.4)").s().p("ABHALQgmgVgjgDQghgCggAOQgTAGgRANIgDABQAPgTASgPQAcgWAiADQA8AQAaATQAQAPAPAQIgBADIgigYg");
	this.shape_604.setTransform(0.3,32.3);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpARQAPgRASgQQAcgVAiAEQA6AQAaATQARAPAPARIgBABQgSgNgQgLQgngUgigDQghgDggANQgTAGgRANg");
	this.shape_605.setTransform(0.3,41.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(77,77,77,0.4)").s().p("ABHALQgngUgigDQghgDggANQgTAGgRANIgCAAQAPgRASgQQAcgVAiAEQA6AQAaATQARAPAPARIgBABIgigYg");
	this.shape_606.setTransform(0.3,41.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpAQQAPgRASgPQAdgVAhAEQA5ARAbATQAQAPAQARIgCgBQgRgMgRgLQglgUgjgDQghgDgfAMQgTAFgSANg");
	this.shape_607.setTransform(0.4,50.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(77,77,77,0.4)").s().p("ABnAiIghgXQgmgUgigDQgggDggAMQgTAFgSANIgCABQAPgRATgPQAcgVAhAEQA5ARAaATIAhAgg");
	this.shape_608.setTransform(0.4,50.8);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpAOQAQgSARgOQAdgUAhAFQA4ASAbASQARAQAQAQIgEgBQgQgNgRgKQglgUgjgDQgggEgfAMQgTAFgSAMg");
	this.shape_609.setTransform(0.4,60.1);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(77,77,77,0.4)").s().p("ABnAiQgRgNgRgKQglgUgjgDQgfgEggAMQgTAFgRAMIgDABQAQgSARgOQAdgUAhAFQA4ASAbASIAhAgg");
	this.shape_610.setTransform(0.4,60.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpALQAQgRASgNQAdgUAgAGQA3ASAbATQARAPARAQIgFgCQgQgNgQgKQglgTgigEQgggDgfALQgTAFgSAKg");
	this.shape_611.setTransform(0.4,69.4);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("rgba(77,77,77,0.4)").s().p("ABlAhQgQgNgQgKQglgTgigEQgggDgfALQgTAFgSAKIgDABQAQgRASgNQAdgUAgAGQA3ASAbATIAiAfg");
	this.shape_612.setTransform(0.4,69.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgCgNQgggEgfAKQgTAGgSAJIgDABQARgSARgLQAdgTAgAFIATAGQAkAOAaASIAjAgIgFgEQgRgNgQgJQglgTghgEg");
	this.shape_613.setTransform(0.5,78.7);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("rgba(77,77,77,0.4)").s().p("ABkAgQgQgNgQgJQglgTghgEQgggEgfAKQgTAGgSAJIgDABQARgSARgLQAegTAfAFIATAGQAjAOAbASIAjAgg");
	this.shape_614.setTransform(0.5,78.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_570},{t:this.shape_569}]}).to({state:[{t:this.shape_572},{t:this.shape_571}]},1).to({state:[{t:this.shape_574},{t:this.shape_573}]},1).to({state:[{t:this.shape_576},{t:this.shape_575}]},1).to({state:[{t:this.shape_578},{t:this.shape_577}]},1).to({state:[{t:this.shape_580},{t:this.shape_579}]},1).to({state:[{t:this.shape_582},{t:this.shape_581}]},1).to({state:[{t:this.shape_584},{t:this.shape_583}]},1).to({state:[{t:this.shape_586},{t:this.shape_585}]},1).to({state:[{t:this.shape_588},{t:this.shape_587}]},1).to({state:[{t:this.shape_590},{t:this.shape_589}]},1).to({state:[{t:this.shape_592},{t:this.shape_591}]},1).to({state:[{t:this.shape_594},{t:this.shape_593}]},1).to({state:[{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_598},{t:this.shape_597}]},1).to({state:[{t:this.shape_600},{t:this.shape_599}]},1).to({state:[{t:this.shape_602},{t:this.shape_601}]},1).to({state:[{t:this.shape_604},{t:this.shape_603}]},1).to({state:[{t:this.shape_606},{t:this.shape_605}]},1).to({state:[{t:this.shape_608},{t:this.shape_607}]},1).to({state:[{t:this.shape_610},{t:this.shape_609}]},1).to({state:[{t:this.shape_612},{t:this.shape_611}]},1).to({state:[{t:this.shape_614},{t:this.shape_613}]},1).to({state:[]},1).wait(99));

	// 
	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgugEQA9AqAtgUQAugTAZguIAIgRQAOgfAGgqIAEgiIAACkIgcBLQgRAlgaAYQgpAng/AEIgbAAQhbgEgVhKQgJgggCgfQgDgwAPgwIAHgdQAhAmAeAag");
	this.shape_615.setTransform(12.8,339.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("rgba(0,0,0,0.251)").s().p("AiXBeQgJgggCgfQgDgxAPgvIAHgcQAhAlAeAaIAiAbQA9ApAtgVQAugSAZguIAIgQQAOggAGgqIAEgiIAACjIgcBMQgRAkgaAYQgpAog/ADIgbABQhbgFgVhJg");
	this.shape_616.setTransform(12.8,339.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AijAZQgBgcAGgcQADgRAGgPQATgOAMAMQAKALAKAKQAKAJAJAHQARANASANQAKAFAJAFQAWALARADQAaAFAWgLQAggPAWgZQAJgLAIgOQAEgIAEgIQAKgXAGgeQABgIABgJQABgBAAgBQACgQACgPQAAASAAASIAAAiQgBAvgBAuQgMAfgOAgIgEALQgHAPgJAMQgKAQgMAMQgDACgCADQgaAXghAKQgWAGgYABQgNAAgNAAQgTgCgPgEQgOgEgMgGQgmgUgMgsQgJgggCggg");
	this.shape_617.setTransform(12.2,350.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("rgba(0,0,0,0.251)").s().p("AgqCpQgTgCgPgEQgOgEgMgGQgmgUgMgsQgJgggCggQgBgcAGgcQADgRAGgPQATgOAMAMIAUAVIATAQIAjAaIATAKQAWALARADQAaAFAWgLQAggPAWgZQAJgLAIgOIAIgQQAKgXAGgeIACgRIABgCIAEgfIAAAkIAAAiIgCBdQgMAfgOAgIgEALQgHAPgJAMQgKAQgMAMIgFAFQgaAXghAKQgWAGgYABIgaAAg");
	this.shape_618.setTransform(12.2,350.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AikAUQgBgaAHgbQADgPAGgOQAUgMAMAMQAKALALAKQAJAIAKAHQARANASAMQAKAFAJAFQAWAKARADQAaADAWgKQAggPAWgaQAJgLAHgOQAEgIAEgIQAKgXAGgdQABgIACgIQAAgBAAgCQACgNACgPQAAATAAASIgBAiQgBAugCAuQgNAegOAhIgEAKQgIAPgJAMQgKAPgNAMQgCACgDADQgaAWghAJQgXAGgXABQgNgBgNAAQgSgCgPgFQgOgFgMgGQglgVgMgsQgIgggCgfg");
	this.shape_619.setTransform(11.7,361.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("rgba(0,0,0,0.251)").s().p("AguCmQgSgCgPgFQgOgFgMgGQglgVgMgsQgIgggCgfQgBgaAHgbQADgPAGgOQAUgMAMAMIAVAVIATAPIAjAZIATAKQAWAKARADQAaADAWgKQAggPAWgaQAJgLAHgOIAIgQQAKgXAGgdIADgQIAAgDIAEgcIAAAlIgBAiIgDBcIgbA/IgEAKQgIAPgJAMQgKAPgNAMIgFAFQgaAWghAJQgXAGgXABIgagBg");
	this.shape_620.setTransform(11.7,361.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AimAOQABgYAGgYQAEgNAGgOQAVgJAMALQAKALALAJQAKAJAJAHQASAMARALQALAFAJAFQAVAJASACQAaADAWgKQAfgOAXgbQAIgMAHgNQAFgIAEgJQAKgXAGgdQABgHABgIQAAgBAAgBQADgMACgNQgBASgBASIAAAiQgCAugDAuQgNAegPAgIgFALQgHAOgKAMQgKAPgNALQgDACgCADQgbAVghAJQgWAFgYAAQgNAAgNgCQgSgCgPgGQgNgEgLgHQgkgWgMgsQgJgggCgfg");
	this.shape_621.setTransform(11.1,372.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("rgba(0,0,0,0.251)").s().p("AgxCiQgTgCgOgGQgOgEgLgHQgkgWgMgsQgIgggCgfQAAgYAHgYQADgNAHgOQAUgJAMALIAVAUIAUAQIAjAXIAUAKQAUAJASACQAaADAWgKQAggOAWgbQAIgMAHgNIAIgRQALgXAFgdIADgPIAAgCIAFgZIgBAkIgBAiQgCAugEAuQgMAegPAgIgEALQgJAOgIAMQgLAPgOALIgFAFQgZAVgiAJQgWAFgXAAIgagCg");
	this.shape_622.setTransform(11.1,372.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AinAJQABgWAHgWQAEgMAHgMQAVgIAMAMQALAKAKAJQAKAJAKAGQARAMASAKQAKAFAKAFQAUAJATABQAaADAWgLQAfgPAWgbQAJgLAHgOQAEgIAEgIQAKgYAGgdQACgGABgHQAAgBAAAAQACgMACgMQgBATAAASIgCAiQgCAugFAsQgNAfgPAgIgFAKQgIAOgJAMQgMAOgNAMQgDACgCACQgbAVgiAIQgUAFgZgBQgNgBgNgBQgRgDgPgHQgNgFgLgHQgjgWgMgsQgIgggCgfg");
	this.shape_623.setTransform(10.6,383.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("rgba(0,0,0,0.251)").s().p("AgbCiIgbgCQgRgDgOgHQgNgFgMgHQgjgWgLgsQgJgggBgfQABgWAGgWQAFgMAGgMQAVgIAMAMIAWATQAJAJAKAGIAkAWIAUAKQATAJAUABQAZADAWgLQAfgPAWgbQAIgLAIgOIAIgQQAKgYAGgdIACgNIABgBIAEgYIgBAlIgCAiQgCAugFAsQgOAfgOAgIgGAKQgHAOgKAMQgLAOgNAMIgFAEQgbAVgiAIQgRAEgTAAIgIAAg");
	this.shape_624.setTransform(10.6,383.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioADQACgTAIgUQAEgLAGgLQAWgGAMAMQALAKALAJQAKAIAKAHQARALATAJQAKAFAKAFQAUAIATABQAZABAWgLQAfgPAVgbQAJgLAIgOQAEgIADgIQALgYAGgdQABgFABgGQAAgBAAgBQACgKACgKQgBATgBASIgBAhQgDAvgGAqQgOAggPAfIgGALQgIANgJAMQgMAOgNALQgDACgCACQgbAUgiAHQgVAFgYgCQgNgBgNgCQgRgDgPgHQgMgFgLgIQgigXgMgsQgIgggCgfg");
	this.shape_625.setTransform(10,394.6);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("rgba(0,0,0,0.251)").s().p("AgfCfIgagDQgRgDgPgHQgMgFgLgIQgigXgMgsQgIgggCgfQACgTAIgUIAKgWQAWgGAMAMIAWATIAUAPIAkAUIAUAKQAUAIATABQAZABAWgLQAfgPAVgbQAJgLAIgOIAHgQQALgYAGgdIACgLIAAgCIAEgUIgCAlIgBAhQgDAvgGAqQgOAggPAfIgGALQgIANgJAMQgMAOgNALIgFAEQgbAUgiAHQgPADgSAAIgMAAg");
	this.shape_626.setTransform(10,394.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipgBQADgTAIgRQAEgKAHgKQAWgEAMALQALAKALAJQAKAIAKAGQASAMATAIQAKAFAKAEQAUAIATAAQAZABAVgMQAfgPAWgbQAJgMAHgNQAEgIAEgJQAKgXAGgdQABgFABgFQABgBAAAAQABgJACgJQgBATgBASIgCAhQgEAvgGAqQgPAggQAeIgFAKQgJAOgJAMQgMANgOAKQgCACgDACQgbAUgiAGQgVAEgYgCQgNgBgNgCQgRgEgOgIQgMgFgLgIQghgYgLgsQgIgggCgdg");
	this.shape_627.setTransform(9.4,405.7);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCcIgagDQgRgEgOgIQgMgFgLgIQghgYgLgsQgIgggCgdQADgTAIgRQAEgKAHgKQAWgEAMALIAWATQAKAIAKAGQASAMATAIIAUAJQAUAIATAAQAZABAVgMQAfgPAWgbQAJgMAHgNIAIgRQAKgXAGgdIACgKIABgBIADgSIgCAlIgCAhQgEAvgGAqQgPAggQAeIgFAKQgJAOgJAMQgMANgOAKIgFAEQgbAUgiAGQgNADgQAAIgQgBg");
	this.shape_628.setTransform(9.4,405.7);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqgHQADgQAJgQQAFgIAHgJQAWgCAMALQAMAKALAJQAKAIAKAGQASALATAHQAKAFAKAEQAUAHATAAQAaAAAVgMQAfgQAVgbQAJgMAHgNQAEgIAEgJQAKgXAGgdQABgEABgEQAAgBAAAAQACgIABgIQgBATgBASIgCAiQgEAugIAqQgPAfgRAfIgFAKQgJANgKAMQgMAMgOAKQgCACgDACQgcATgiAGQgVADgXgCQgNgCgNgDQgRgEgOgIQgMgGgKgIQgggZgLgrQgIgggCgeg");
	this.shape_629.setTransform(8.8,416.7);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("rgba(0,0,0,0.251)").s().p("AgmCaQgNgCgNgDQgRgEgOgIQgMgGgKgIQgggZgLgrQgIgggCgeQADgQAJgQQAFgIAHgJQAWgCAMALIAXATQAKAIAKAGQASALATAHIAUAJQAUAHATAAQAaAAAVgMQAfgQAVgbQAJgMAHgNIAIgRQAKgXAGgdIACgIIAAgBQACgIABgIIgCAlIgCAiQgEAugIAqQgPAfgRAfIgFAKQgJANgKAMQgMAMgOAKIgFAEQgcATgiAGQgLACgOAAIgTgBg");
	this.shape_630.setTransform(8.8,416.7);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirgNQAEgOAJgNQAFgHAHgIQAXAAAMALQAMAJALAJQAKAIAKAGQATAKATAHQAKAFAKADQAUAHATgBQAZgBAVgMQAfgQAVgbQAJgMAHgNQAEgIAEgJQALgXAFgdQABgDABgEQABgBAAAAQABgGABgHQgBATgBASIgDAiQgFAugJApQgOAggSAeIgGAKQgJANgKALQgMANgPAKQgCABgDACQgcASgiAFQgVADgXgDQgNgCgMgDQgRgFgOgIQgMgHgKgIQgfgagKgrQgIghgCgdg");
	this.shape_631.setTransform(8.3,427.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("rgba(0,0,0,0.251)").s().p("AgqCXIgZgFQgRgFgOgJQgMgGgKgJQgfgZgKgrQgIgggCgeQAEgOAJgNIAMgPQAXAAAMALIAXASIAUAOQATAKATAHIAUAIQAUAHATgBQAZgBAVgMQAfgPAVgcQAJgLAHgOIAIgRQALgXAFgdIACgHIABgBIACgNIgCAlIgDAiQgFAugJApQgOAggSAeIgGAKQgJANgKALQgMAMgPAKIgFAEQgcASgiAFQgJACgMAAIgXgCg");
	this.shape_632.setTransform(8.3,427.8);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisgTQAEgMAKgKQAFgGAHgHQAYACAMALQAMAJALAJQALAHAKAGQASAKAUAGQAKAFAKADQAUAGAUgCQAZgBAVgMQAegQAVgcQAJgMAHgNQAEgIAEgJQAKgXAGgdQABgDABgDQAAAAAAAAQACgFAAgFQAAASgCASIgDAiQgFAugKApQgQAggSAdIgGAKQgJANgKALQgNAMgPAJQgDACgCACQgcARghAEQgXADgXgEQgNgCgMgEQgRgFgNgJQgMgHgJgJQgegagLgrQgIgggBgeg");
	this.shape_633.setTransform(7.7,438.9);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(0,0,0,0.251)").s().p("AguCUIgZgGQgQgFgOgJQgLgHgKgJQgegagLgrQgHgggCgeQAFgMAJgKIAMgNQAYACAMALIAYASIAUANQASAKAUAGIAVAIQATAGATgCQAagBAUgMQAfgQAVgcQAJgMAHgNIAIgRQAKgXAGgdIACgGIAAAAIACgKIgCAkIgDAiQgGAugJApQgQAggSAdIgGAKQgJANgKALQgNAMgPAJIgFAEQgcARghAEIgTABQgNAAgOgCg");
	this.shape_634.setTransform(7.7,438.9);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitgZQAFgJAKgJQAFgEAIgGQAYAEAMALQAMAJALAIQALAIAKAFQATAIAUAIQAKAEAKACQAVAGATgCQAZgCAUgNQAegQAWgcQAIgMAHgNQAEgIAEgJQALgXAGgdQABgCAAgCIAAAAQACgEAAgEQAAATgCASIgEAhQgGAvgLAoQgPAfgTAdIgHAKQgJANgKALQgOALgPAJQgCACgDACQgcARghADQgXACgXgFQgNgCgMgEQgQgGgNgJQgLgIgKgJQgdgbgKgrQgIgggBgeg");
	this.shape_635.setTransform(7.2,449.9);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("rgba(0,0,0,0.251)").s().p("AgyCRIgZgGQgQgGgNgJQgLgIgKgJQgdgbgKgrQgHgggCgeQAFgJAKgJIANgKQAYAEAMALIAYARQAKAIAKAFQAUAIATAIQAKAEALACQATAGAUgCQAYgCAVgNQAegQAWgcQAIgMAHgNIAIgRQALgXAFgdIACgEIABAAIABgIIgCAlIgEAhQgGAvgLAoQgPAfgUAdIgGAKQgJANgKALQgOALgPAJIgEAEQgdARghADIgOAAQgQAAgQgDg");
	this.shape_636.setTransform(7.2,449.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiuggQAGgHAKgGQAGgDAIgEQAYAFANALQAMAJALAIQALAHAKAFQATAIAUAHQAKAEALACQAUAFATgDQAZgDAUgMQAegRAVgcQAJgMAHgNQAEgIAEgJQAKgXAGgdQABgBAAgCIABAAIAAAAIAAAAQABgCAAgCQgBATgBARIgEAiQgHAugMAoQgQAfgUAdIgGAJQgKANgKALQgOALgPAIQgCACgDACQgdAQghACQgXACgXgFQgMgDgMgEQgQgHgNgKQgLgHgJgKQgcgbgKgrQgIgfgBggg");
	this.shape_637.setTransform(6.6,461.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("rgba(0,0,0,0.251)").s().p("Ag2COQgMgDgMgEQgQgHgNgKQgLgHgJgKQgcgbgKgrQgIgfgBggQAGgHAKgGIAOgHQAYAFANALIAXARQALAHAKAFQATAIAUAHIAVAGQAUAFATgDQAZgDAUgMQAegRAVgcQAJgMAHgNIAIgRQAKgXAGgdIABgDIABAAIAAAAIAAAAIABgEIgCAkIgEAiQgHAugMAoQgQAfgUAdIgGAJQgKANgKALQgOALgPAIIgFAEQgdAQghACIgKABQgSAAgSgEg");
	this.shape_638.setTransform(6.6,461.1);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivglQAGgFALgEQAGgCAIgDQAZAHANALQAMAIALAJQALAHALAFQATAHAUAGQAKAEALACQAUAEATgDQAZgEAUgMQAegSAVgcQAIgMAHgNQAEgIAEgJQAKgXAGgdQABAAABgBIAAAAQABgBAAgBQgBATgBASIgFAhQgHAugNAoQgRAfgUAcIgHAJQgJANgLALQgOAKgPAIQgDACgCACQgeAPghACQgXABgXgGQgMgDgMgEQgQgHgMgLQgLgIgJgKQgbgcgKgrQgHgegBggg");
	this.shape_639.setTransform(6,472.1);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("rgba(0,0,0,0.251)").s().p("Ag6CLQgMgDgMgEQgQgHgMgLIgUgSQgbgcgKgrQgHgegBggQAGgFALgEIAOgFQAZAHANALIAXARQALAHALAFQATAHAUAGQAKAEALACQAUAEATgDQAZgEAUgMQAegSAVgcQAIgMAHgNIAIgRQAKgXAGgdIACgBIAAAAIABgCIgCAlIgFAhQgHAugNAoQgRAfgUAcIgHAJQgJANgLALQgOAKgPAIIgFAEQgeAPghACIgHAAQgUAAgTgFg");
	this.shape_640.setTransform(6,472.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixgsQAIgBALgCQAGgBAIgCQAaAJANALQAMAIAMAIQAKAHALAFQAUAHAUAGQAKADAKACQAWAEATgFQAYgEAUgLQAegTAVgdQAIgLAHgOQAEgIAEgIQAKgZAGgcQABAAABAAIAAABQABABAAgBQgBATgCASIgFAiQgIAugOAoQgRAegVAcIgHAJQgKAMgKALQgPAKgPAIQgDABgCABQgfAPghACQgXAAgXgHQgMgDgLgFQgQgHgNgLQgKgJgJgKQgagdgJgrQgHgegCghg");
	this.shape_641.setTransform(5.5,483.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("rgba(0,0,0,0.251)").s().p("Ag9CIQgMgDgMgFQgQgIgMgLIgTgSQgagdgKgrQgHgegBggIATgFIANgCQAaAJANAKIAYARQALAHALAFQATAHAUAFIAUAGQAWADASgEQAZgEAUgLQAdgTAWgdQAIgMAHgNIAHgQQALgZAGgcIABAAIAAABIABAAIgDAlIgEAiQgIAugOAoQgRAegVAbIgHAJIgUAYQgPAJgQAJIgEACQgfAPggACQgYAAgWgHg");
	this.shape_642.setTransform(5.5,483.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiygwQAJABALAAQAHABAIgBQAbALAMAKQAMAJAMAHQALAHALADQAUAIAUAGQALACAIACQAXADATgFQAYgFAUgLQAdgUAVgcQAIgMAHgNQAEgIAEgJQALgYAGgcQAAABABABIAAAAQABACAAABQgBATgDASIgFAiQgIAugQAnQgRAegVAcIgHAJQgLALgKALQgPAJgQAIQgDACgCABQgfAOggABQgYgBgWgGQgMgEgMgGQgPgIgNgLQgJgJgJgKQgZgegJgrQgHgegCghg");
	this.shape_643.setTransform(4.9,494.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("rgba(0,0,0,0.251)").s().p("AhBCIQgMgEgMgGQgPgIgNgLQgJgJgJgKQgZgegJgrQgHgegCghIAUABIAPAAQAbALAMAKIAYAQIAWAKQAUAIAUAGIATAEQAXADATgFQAYgFAUgLQAdgUAVgcQAIgMAHgNIAIgRQALgYAGgcIABACIAAAAIABADQgBATgDASIgFAiQgIAugQAnQgRAegVAcIgHAJIgVAWQgPAJgQAIIgFADQgfAOggABQgYgBgWgGg");
	this.shape_644.setTransform(4.9,494.1);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aizg0QAJADAMACQAHADAIAAQAcAMAMAKQAMAJAMAIQALAFAMAEQATAIAVAEQALADAIACQAXACATgFQAYgGAUgMQAdgUAUgdQAJgLAHgOQAEgIADgIQALgYAGgcQABACAAABQAAAAAAABQABADAAADQgBASgDATIgFAhQgJAugRAnQgRAegWAbIgIAJQgKALgLAKQgQAKgQAHQgCACgDABQgfANggAAQgYgBgWgHQgMgFgLgFQgQgJgMgLQgJgKgJgKQgYgfgJgrQgGgegCghg");
	this.shape_645.setTransform(4.3,505);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("rgba(0,0,0,0.251)").s().p("AhFCHIgXgKQgQgJgMgMIgSgTQgYgggJgqQgGgegCggIAVAEQAHACAIAAQAcANAMAKIAYARIAXAJQATAIAVAEIATAFQAXACATgFQAYgGAUgMQAdgUAUgdQAJgLAHgOIAHgQQALgYAGgcIABADIAAABIABAGQgBASgDATIgFAhQgJAugRAnQgRAegWAbIgIAIIgVAXQgQAJgQAHIgFADQgfANggAAQgYgBgWgHg");
	this.shape_646.setTransform(4.3,505);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai0g4QAKAFAMAFQAHADAJACQAbAPANAJQAMAJANAHQALAEALAFQAUAIAVAEQALACAIABQAXACATgGQAYgHAUgMQAcgUAVgcQAIgMAHgNQAEgJAEgIQAKgYAGgcQABACAAACQAAABAAAAQABAFAAAEQgCATgCASIgGAhQgJAugSAnQgSAdgXAbIgHAJQgLALgLAKQgQAJgQAHQgDABgCABQggANgggBQgYgBgWgIQgMgEgLgHQgPgJgMgMQgJgKgIgKQgXgggJgrQgHgegBghg");
	this.shape_647.setTransform(3.8,515.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("rgba(0,0,0,0.251)").s().p("AgbCPQgYgBgWgIQgMgEgLgHQgPgJgMgMIgRgUQgXgggJgrQgHgegBghIAWAKQAHADAJACQAbAPANAJIAZAQQALAEALAFQAUAIAVAEIATADQAXACATgGQAYgHAUgMQAcgUAVgcQAIgMAHgNIAIgRQAKgYAGgcIABAEIAAABIABAJIgEAlIgGAhQgJAugSAnQgSAdgXAbIgHAJIgWAVQgQAJgQAHIgFACQgeAMgfAAIgDAAg");
	this.shape_648.setTransform(3.8,515.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1g8QAKAHANAHQAHAFAJACQAcARANAKQANAIAMAFQALAGAMAFQAUAHAVAEQAKABAJABQAXACATgHQAYgHATgNQAdgUAUgdQAJgMAGgNQAEgIAEgJQALgYAGgbQAAADABACQAAABAAABQAAAGAAAEQgCAUgCASIgHAhQgKAugTAmQgSAdgXAbIgIAIQgLALgLALQgQAIgRAGQgCACgDABQggAMghgCQgYgCgVgIQgMgFgLgGQgPgKgLgNQgJgKgIgLQgWghgJgqQgGgegBghg");
	this.shape_649.setTransform(3.2,526.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(0,0,0,0.251)").s().p("AggCPQgYgCgVgIQgMgFgLgGQgPgKgLgNIgRgVQgWghgJgqQgGgegBghIAXAOQAHAFAJACQAcARANAKIAZANQALAGAMAFQAUAHAVAEIATACQAXACATgHQAYgHATgNQAdgUAUgdQAJgMAGgNIAIgRQALgYAGgbIABAFIAAACIAAAKIgEAmIgHAhQgKAugTAmQgSAdgXAbIgIAIIgWAWQgQAIgRAGIgFADQgcAKgdAAIgIAAg");
	this.shape_650.setTransform(3.2,526.7);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2hAQALAJAOAKQAHAFAJAEQAdATANAJQAMAIANAGQALAFAMAEQAUAHAWADQAJACAJABQAXAAAUgHQAXgIAUgNQAcgUAUgdQAJgMAGgNQAEgJAEgIQAKgYAHgcQAAAEAAADQAAABAAABQABAHgBAGQgBAUgDASIgHAhQgKAugUAmQgTAdgYAaIgIAIQgLALgMAKQgQAIgRAGQgCABgDABQgeALgjgCQgYgCgWgJQgLgFgLgHQgPgKgLgOQgIgKgIgLQgVgigJgpQgGgfgBghg");
	this.shape_651.setTransform(2.6,537.6);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCPQgYgCgWgJQgLgFgLgHQgPgKgLgOIgQgVQgVgigJgpQgGgfgBghIAZATQAHAFAJAEIAqAcIAZAOQALAFAMAEQAUAHAWADIASADQAXAAAUgHQAXgIAUgNQAcgUAUgdQAJgMAGgNIAIgRQAKgYAHgcIAAAHIAAACIAAANQgBAUgDASIgHAhQgKAugUAmQgTAdgYAaIgIAIIgXAVIghAOIgFACQgbAKgcAAIgKgBg");
	this.shape_652.setTransform(2.6,537.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai4hEQAMALAOAMQAIAHAJAFQAdAUANAKQANAGAMAHQAMAFAMAEQAUAHAWACQAIABALABQAXAAATgIQAYgJATgNQAcgUAVgeQAHgLAIgOQAEgIADgIQAKgZAHgbQAAAEAAAEQABABAAABQAAAJgBAHQgCAUgCASIgIAhQgLAugVAlQgTAdgYAaIgJAIQgLAKgMAKQgRAIgRAGQgDABgCABQgfAKgjgDQgYgDgVgJQgMgGgKgHQgPgKgLgPQgIgKgHgMQgUgigJgoQgGghgBggg");
	this.shape_653.setTransform(2.1,548.5);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(0,0,0,0.251)").s().p("AgnCPQgYgDgWgJQgLgGgLgHQgOgKgMgPIgPgWQgUgigIgoQgHghAAggIAZAXQAIAHAJAFIAqAeIAZANQAMAFAMAEQAUAHAWACIATACQAXAAATgIQAXgJAUgNQAcgUAUgeQAJgLAGgOIAIgQQALgZAGgbIAAAIIABACIgBAQQgBAUgEASIgGAhQgMAugVAlQgTAdgZAaIgIAIIgXAUQgQAIgSAGIgFACQgZAIgZAAIgPgBg");
	this.shape_654.setTransform(2.1,548.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai5hIQANAOAOAOQAIAIAKAGQAdAXANAHQANAHANAHQALAGAMAEQAVAGAWACQAJABAKAAQAXgBAUgIQAXgKATgOQAcgUAUgdQAIgMAHgNQAEgJAEgIQAKgYAGgcQABAFAAAFQAAABAAABQAAAKgBAJQgCATgDASIgHAhQgMAsgWAnQgTAdgaAZIgIAIQgMALgMAJQgRAHgRAGQgDABgCABQgfAJgjgDQgZgEgUgKQgMgFgKgIQgPgLgLgPQgHgLgIgMQgTgjgHgoQgGgggCghg");
	this.shape_655.setTransform(1.5,559.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(0,0,0,0.251)").s().p("AgrCQQgZgEgUgKQgMgFgKgIQgPgLgLgPIgPgXQgTgjgHgoQgGgggCghIAbAcQAIAIAKAGIAqAeIAaAOQALAGAMAEQAVAGAWACIATABQAXgBAUgIQAXgKATgOQAcgUAUgdIAPgZIAIgRQAKgYAGgcIABAKIAAACQAAAKgBAJQgCATgDASIgHAhQgMAsgWAnQgTAdgaAZIgIAIIgYAUQgRAHgRAGIgFACQgXAGgZAAIgSAAg");
	this.shape_656.setTransform(1.5,559.4);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6hNQANAQAPARQAIAJAKAIQAeAYANAHQANAHANAHQALAFAMAEQAVAGAXABQAJABAKgBQAXgBAUgJQAXgKATgOQAcgVAUgdQAIgMAGgNQAEgJAEgIQALgYAGgcQAAAGAAAFQAAACAAABQAAALgBAKQgCATgDASIgIAiQgMArgYAnQgTAdgaAZIgJAHQgMALgMAJQgRAHgSAFQgCABgDABQggAJgjgFQgYgEgVgKQgLgGgLgIQgOgMgKgPQgIgMgHgMQgSgkgHgnQgGghgBghg");
	this.shape_657.setTransform(1,570.3);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(0,0,0,0.251)").s().p("AgvCPQgZgEgUgKQgMgGgLgIQgNgMgLgPIgOgYQgSgkgIgnQgGghgBghIAcAhQAIAJAKAIQAeAYANAHIAaAOQALAFANAEQAUAGAXABIATAAQAXgBAUgJQAWgKATgOQAcgVAVgdQAHgMAHgNIAIgRQAKgYAHgcIAAALIAAADQAAALgBAKQgCATgDASIgIAiQgMArgYAnQgUAdgaAZIgIAHIgYAUIgjAMIgFACQgUAGgXAAIgXgCg");
	this.shape_658.setTransform(1,570.3);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hRQAOATAPASQAJALAJAIQAfAZANAIQANAIANAGQAMAFAMAEQAVAFAXABQAJAAAKAAQAYgCATgKQAXgLATgOQAbgVAUgeQAIgMAHgNQAEgIADgJQALgYAGgbQAAAGAAAHQAAABAAABQAAANgBALQgCATgDASIgIAiQgNArgZAnQgUAcgaAZIgJAHQgNAKgMAKQgRAGgSAEQgDABgCABQggAIgjgFQgZgEgUgLQgMgHgKgIQgOgMgKgQQgHgMgHgMQgRglgHgoQgGgggBghg");
	this.shape_659.setTransform(0.4,581.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(0,0,0,0.251)").s().p("AgzCPQgZgEgUgLQgMgHgKgIQgOgMgKgQIgOgYQgRglgHgoQgGgggBghIAdAlQAJALAJAIQAfAZANAIIAaAOIAYAJQAVAFAXABIATAAQAYgCATgKQAXgLATgOQAbgVAUgeQAIgMAHgNIAHgRQALgYAGgbIAAANIAAACQAAANgBALQgCATgDASIgIAiQgNArgZAnQgUAcgaAZIgJAHIgZAUQgRAGgSAEIgFACQgTAFgVAAQgOAAgNgCg");
	this.shape_660.setTransform(0.4,581.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai9hVQAPAVAQAUQAJAMAKAKQAfAaANAJQAOAHANAGQALAFANADQAVAFAXABQAIAAALgBQAYgCATgLQAXgLASgPQAcgWATgdQAJgMAGgNQAEgJAEgIQAKgYAHgcQAAAIAAAHQAAABAAACQgBANgBANQgCATgDASIgJAhQgOAsgZAmQgVAcgbAYIgJAIQgMAKgNAJQgSAFgSAFQgCABgDAAQggAIgkgGQgZgFgUgMQgLgGgKgJQgOgMgKgRQgGgMgHgNQgQglgHgoQgGgggBghg");
	this.shape_661.setTransform(-0.1,592.1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(0,0,0,0.251)").s().p("Ag4CPQgZgFgTgMQgMgGgKgJQgOgMgJgRIgOgZQgQglgHgoQgFgggBghQAOAVAQAUQAIAMAKAKQAgAaANAJIAaANQAMAFANADQAUAFAYABIATgBQAXgCAUgLQAXgLASgPQAcgWATgdQAIgMAHgNIAHgRQALgYAGgcIAAAPIAAADIgBAaQgCATgEASIgIAhQgOAsgZAmQgVAcgbAYIgJAIIgZATIgkAKIgFABQgSAFgUAAQgPAAgPgDg");
	this.shape_662.setTransform(-0.1,592.1);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+haQAQAYAQAXQAJANAKALQAgAcANAIQAOAHANAGQAMAFAMADQAVAFAWAAQAKgBALgBQAYgDATgLQAWgMATgPQAbgWAUgdQAIgMAHgNQAEgJADgIQALgZAGgbQAAAIAAAIQAAABAAACQAAAPgCAOQgCATgEASIgIAhQgPAsgbAmQgUAcgcAXIgKAIQgMAJgNAJQgSAFgTAFQgCAAgDABQggAHgkgHQgYgFgUgNQgMgGgJgKQgOgNgKgRQgGgMgGgNQgPgngHgnQgGgggBgig");
	this.shape_663.setTransform(-0.7,603);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(0,0,0,0.251)").s().p("Ag8CPQgYgFgUgNQgMgGgJgKQgOgNgKgRIgMgZQgPgngHgnQgGgggBgiIAgAvQAJANAKALQAgAcANAIIAbANQAMAFAMADQAVAFAWAAIAVgCQAYgDATgLQAWgMATgPQAbgWAUgdIAPgZIAHgRQALgZAGgbIAAAQIAAADQAAAPgCAOQgCATgEASIgIAhQgPAsgbAmQgUAcgcAXIgKAIIgZASIglAKIgFABQgQADgSAAQgRAAgRgDg");
	this.shape_664.setTransform(-0.7,603);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/heQAQAZAQAZQAKAPAKAMQAgAeAOAIQANAHAOAGQALAFANACQAWAFAVgBQALgBALgBQAXgDAUgMQAWgNATgPQAbgXATgdQAIgMAGgNQAFgJADgIQAKgZAHgbQAAAJAAAIQAAACAAACQAAAQgCAPQgCAUgEASIgJAhQgPArgcAmQgVAbgdAYIgKAHQgMAJgNAJQgTAFgTAEQgCAAgDABQghAGgjgHQgZgGgUgNQgLgHgKgKQgNgNgJgSQgGgNgHgNQgOgngGgoQgFgggBghg");
	this.shape_665.setTransform(-1.2,614);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(0,0,0,0.251)").s().p("AhACPQgZgGgUgNQgKgHgLgKQgMgNgKgSIgNgaQgNgngHgoQgFgggBghIAhAyQAJAPAKAMQAhAeANAIIAbANQAMAFANACQAVAFAWgBIAVgCQAYgDATgMQAWgNATgPQAbgXATgdQAIgMAGgNIAIgRQAKgZAHgbIAAARIAAAEQAAAQgCAPQgCAUgEASIgKAhQgOArgcAmQgWAbgbAYIgKAHIgaASIglAJIgGABQgOADgQAAQgTAAgTgEg");
	this.shape_666.setTransform(-1.2,614);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADBiAQAAAogIAkIgKAhQgbBNhEA2IgkAZIgmAHQgkAHgmgIQg8gQgcg2IgLgbQgYhGgChLIAiA4QAcAtAnAYIAbAMQApAPAxgIQAYgEATgMQA2gfAhgzQAagpANg0g");
	this.shape_667.setTransform(-1.7,624.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(0,0,0,0.251)").s().p("AhECPQg7gQgdg2IgLgbQgXhGgDhLIAjA4QAcAtAmAYIAbAMQApAPAxgIQAXgEAUgMQA2gfAhgzQAagpAMg0IAAASQAAAogJAkIgJAhQgbBNhEA2IgkAZIgmAHQgPADgRAAQgVAAgVgEg");
	this.shape_668.setTransform(-1.7,624.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_616},{t:this.shape_615}]},69).to({state:[{t:this.shape_618},{t:this.shape_617}]},1).to({state:[{t:this.shape_620},{t:this.shape_619}]},1).to({state:[{t:this.shape_622},{t:this.shape_621}]},1).to({state:[{t:this.shape_624},{t:this.shape_623}]},1).to({state:[{t:this.shape_626},{t:this.shape_625}]},1).to({state:[{t:this.shape_628},{t:this.shape_627}]},1).to({state:[{t:this.shape_630},{t:this.shape_629}]},1).to({state:[{t:this.shape_632},{t:this.shape_631}]},1).to({state:[{t:this.shape_634},{t:this.shape_633}]},1).to({state:[{t:this.shape_636},{t:this.shape_635}]},1).to({state:[{t:this.shape_638},{t:this.shape_637}]},1).to({state:[{t:this.shape_640},{t:this.shape_639}]},1).to({state:[{t:this.shape_642},{t:this.shape_641}]},1).to({state:[{t:this.shape_644},{t:this.shape_643}]},1).to({state:[{t:this.shape_646},{t:this.shape_645}]},1).to({state:[{t:this.shape_648},{t:this.shape_647}]},1).to({state:[{t:this.shape_650},{t:this.shape_649}]},1).to({state:[{t:this.shape_652},{t:this.shape_651}]},1).to({state:[{t:this.shape_654},{t:this.shape_653}]},1).to({state:[{t:this.shape_656},{t:this.shape_655}]},1).to({state:[{t:this.shape_658},{t:this.shape_657}]},1).to({state:[{t:this.shape_660},{t:this.shape_659}]},1).to({state:[{t:this.shape_662},{t:this.shape_661}]},1).to({state:[{t:this.shape_664},{t:this.shape_663}]},1).to({state:[{t:this.shape_666},{t:this.shape_665}]},1).to({state:[{t:this.shape_668},{t:this.shape_667}]},1).to({state:[]},1).wait(26));

	//  0
	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADHiHQAEATgCAUQgCAagMAdQgZA3giA2IgkAzQgwA3hJAFQg4AEgogeQgWgRgRgbQgxhMARgyQAQg0gKgXQAjAtAgAeIAZAUQBFA2A4gMQBkgXAXghIACgDQAVgiAJgfQAKghgLhDQANAVAFAXg");
	this.shape_669.setTransform(14.5,310.6);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(0,0,0,0.251)").s().p("Ah9CZQgWgRgRgbQgxhMARgyQAQg0gKgXQAjAtAgAeIAZAUQBFA2A4gMQBkgXAXghIACgDQAVgiAJgfQAKghgLhDQANAVAFAXQAEATgCAUQgCAagMAdQgZA3giA2IgkAzQgwA3hJAFIgNABQgwAAgjgbg");
	this.shape_670.setTransform(14.5,310.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+gJQANgxgHgZQAXATAJAGQAPARAPAOQAMALANALQAaATAZAMQAkASAfgFQAkgFAbgKQAqgQAQgVQAXgjAJgfQADgJABgLQAEgggFgtQACACABACQAIASADASQADASgBAUQgBAagKAcQgIAWgJAWQgNAagPAbQgEAGgDAGQgQAagSAYQgVAagcAPQgfARglAEQgOABgOgBQgdgCgYgMQgHgEgHgEQgXgPgSgZQgSgagJgaQgOgpAIgfg");
	this.shape_671.setTransform(14.2,316.4);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(0,0,0,0.251)").s().p("AgxCxQgdgCgYgMIgOgIQgXgPgSgZQgSgagJgaQgOgpAIgfQANgxgHgZQAXATAJAGIAeAfIAZAWQAaATAZAMQAkASAfgFQAkgFAbgKQAqgQAQgVQAXgjAJgfQADgJABgLQAEgggFgtIADAEQAIASADASQADASgBAUQgBAagKAcIgRAsQgNAagPAbIgHAMQgQAagSAYQgVAagcAPQgfARglAEIgOAAIgOAAg");
	this.shape_672.setTransform(14.2,316.4);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AAQAJgugDgbQATAEAIABQAPARAPAOQAMALALALQAaATAXAMQAjATAdgBQAkgBAagLQAngQARgVQAXggAKggQADgJABgLQAFgggDgrQACABABABQAGARACASQADASgBATQgBAagIAcQgGAWgGAWQgNAZgNAbQgDAGgEAGQgPAagQAYQgVAZgaAPQgeASgkAEQgOABgOAAQgcgCgYgJQgHgDgHgEQgZgNgRgXQgTgYgIgbQgOgnAGgfg");
	this.shape_673.setTransform(13.8,322.2);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("rgba(0,0,0,0.251)").s().p("AgoCvQgcgCgYgJIgOgHQgZgNgRgXQgTgYgIgbQgOgnAGgfQAJgugDgbIAbAFQAPARAPAOIAXAWQAaATAXAMQAjATAdgBQAkgBAagLQAngQARgVQAXggAKggIAEgUQAFgggDgrIADACQAGARACASQADASgBATQgBAagIAcIgMAsIgaA0IgHAMQgPAagQAYQgVAZgaAPQgeASgkAEIgVABIgHAAg");
	this.shape_674.setTransform(13.8,322.2);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixAGQAGgoABgeQAQgIAGgFQAPARAOANQALAMAMAKQAXAVAXAKQAhAUAcACQAiADAbgLQAkgPATgWQAWgeAKggQADgKACgKQAFggAAgoQABgBABAAQAEARACARQABASAAASQgBAbgFAbQgEAWgEAVQgMAagMAbQgDAFgDAGQgNAbgQAWQgUAZgZAPQgdASgjAFQgNACgOAAQgbgCgZgGQgHgCgHgDQgagMgSgVQgSgWgJgbQgMgmADgig");
	this.shape_675.setTransform(13.5,328);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(0,0,0,0.251)").s().p("AhTClQgHgCgHgEQgagKgSgWQgSgWgJgbQgMgmADgiQAGgoABgeIAWgMIAdAdIAXAWQAXAVAXAKQAhAVAcACQAiACAbgLQAkgPATgWQAWgeAKggIAFgUQAFggAAgoIACgCQAEARACASQABASAAASQgBAagFAcIgIAsIgYA0IgGALQgNAbgQAXQgUAYgZAPQgdASgjAGQgNACgOAAQgbgCgZgHg");
	this.shape_676.setTransform(13.5,328);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqAQQACgmAFggQAMgWAFgJQAPAQANAOQAMALAKAKQAXAUAVAOQAgATAaAFQAiAHAagMQAhgPAUgWQAWgbALghQADgJACgKQAGghACglQABgCABgDQACARABARQABASgBARQAAAagDAcQgCAWgCAVQgKAZgLAbQgCAFgDAGQgNAbgPAWQgSAZgYAPQgcATgkAFQgLACgOABQgagCgZgEQgHgBgHgDQgbgJgSgUQgTgUgIgcQgMgkABgig");
	this.shape_677.setTransform(13.2,333.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(0,0,0,0.251)").s().p("AhJCnIgOgEQgbgJgSgUQgTgVgIgbQgMglABghQACglAFggIARggIAcAdIAWAWQAXAVAVANQAgATAaAFQAiAGAagLQAhgPAUgWQAWgbALghIAFgTQAGgiACglIACgDQACAQABARQABARgBASQAAAbgDAaIgEAsIgVA0IgFALQgNAbgPAWQgSAYgYAQQgcASgkAGQgLACgOABQgagCgZgEg");
	this.shape_678.setTransform(13.2,333.7);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA8ASQAfgOAVgXQAbgeAMgvIAMhLIAACkIgTAzQgYBEguAgQglAZgxADIgygDQhHgLgShAQgKgjgBgiQgCgtAOgtIAHgcQAxA3AoAdQBDAwAvgVg");
	this.shape_679.setTransform(12.8,339.4);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(0,0,0,0.251)").s().p("Ag+CpQhHgLgShAQgKgjgBgiQgCgtAOgtIAHgcQAxA3AoAdQBDAwAvgVQAfgOAVgXQAbgeAMgvIAMhLIAACkIgTAzQgYBEguAgQglAZgxADg");
	this.shape_680.setTransform(12.8,339.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_670},{t:this.shape_669}]},64).to({state:[{t:this.shape_672},{t:this.shape_671}]},1).to({state:[{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_676},{t:this.shape_675}]},1).to({state:[{t:this.shape_678},{t:this.shape_677}]},1).to({state:[{t:this.shape_680},{t:this.shape_679}]},1).to({state:[]},1).wait(52));

	//  0
	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADFhBQgJApgkBhQglBjhuAHQhtAHg1hMQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApg");
	this.shape_681.setTransform(-4.7,296.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(0,0,0,0.251)").s().p("AidBuQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApQgJApgkBhQglBjhuAHIgQAAQhhAAgxhFg");
	this.shape_682.setTransform(-4.7,296.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjGgSQANgsgBgeQBxCjBdgVQBkgXAXghQAXgjAKghQAMgsACg9QAXBDgVA7QgVA4grBVQgrBUhgAHQhjAHgzhNQgzhMAOgzg");
	this.shape_683.setTransform(4.9,303.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(0,0,0,0.251)").s().p("AihBtQgzhMAOgzQANgsgBgeQBxCjBdgVQBkgXAXghQAXgjAKghQAMgsACg9QAXBDgVA7QgVA4grBVQgrBUhgAHIgQABQhXAAgvhHg");
	this.shape_684.setTransform(4.9,303.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgdCzQhXAHgwhNQgxhNARgxQAQg0gKgXQB9CeBcgVQBkgXAXghQAWgjAKghQAKghgLhDQAmA+ggBMQghBJgxBHQgyBGhUAGg");
	this.shape_685.setTransform(14.5,310.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(0,0,0,0.251)").s().p("AikBtQgxhNARgxQAQg0gKgXQB9CeBcgVQBkgXAXghQAWgjAKghQAKghgLhDQAmA+ggBMQghBJgxBHQgyBGhUAGIgOABQhNAAgshHg");
	this.shape_686.setTransform(14.5,310.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_682},{t:this.shape_681}]},62).to({state:[{t:this.shape_684},{t:this.shape_683}]},1).to({state:[{t:this.shape_686},{t:this.shape_685}]},1).to({state:[]},1).wait(57));

	// 
	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AC5hEQgDAggxBiQgyBkhqAfQhsAfgohYQgphZAQg7QAQg9AjghQAtCsBkgXQBigWAXghQAWgkAKghQAKghAnhWg");
	this.shape_687.setTransform(-6.4,292.8);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("rgba(0,0,0,0.251)").s().p("AirCIQgphZAQg7QAQg9AjghQAtCsBkgXQBigWAXghQAWgkAKghQAKghAnhWIgRCEQgDAggxBiQgyBkhqAfQgcAIgXAAQhDAAgehBg");
	this.shape_688.setTransform(-6.4,292.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjEgNQAOg3AcgiQA7CrBhgXQBkgWAXghQAXgkAKghQALgmAghPQgEBEgIA8QgFAiguBiQguBjhrAaQhtAZgrhWQgshVAPg5g");
	this.shape_689.setTransform(-6,293.7);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(0,0,0,0.251)").s().p("AinCBQgshVAPg5QAOg3AcgiQA7CrBhgXQBkgWAXghQAXgkAKghQALgmAghPQgEBEgIA8QgFAiguBiQguBjhrAaQgZAGgVAAQhJAAghhDg");
	this.shape_690.setTransform(-6,293.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjEgPQAMgwAWgjQBJCpBggWQBkgWAXghQAWgkAKghQANgrAahHQAABFgJA2QgGAkgrBiQgrBjhrATQhtATgvhSQgvhTAOg3g");
	this.shape_691.setTransform(-5.7,294.7);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(0,0,0,0.251)").s().p("AijB7QgvhTAOg3QAMgwAWgjQBJCpBggWQBkgWAXghQAWgkAKghQANgrAahHQAABFgJA2QgGAkgrBiQgrBjhrATQgUAEgTAAQhPAAgmhDg");
	this.shape_692.setTransform(-5.7,294.7);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjGgQQALgqAQgkQBWCpBggWQBkgXAXghQAWgjAKghQANgxAVg/QAEBGgJAwQgIAngnBhQgoBjhsANQhuANgyhPQgyhQAMg1g");
	this.shape_693.setTransform(-5.2,295.6);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(0,0,0,0.251)").s().p("AigB1QgyhQAMg1QALgqAQgkQBWCpBggWQBkgXAXghQAWgjAKghQANgxAVg/QAEBGgJAwQgIAngnBhQgoBjhsANQgPABgPAAQhXAAgrhDg");
	this.shape_694.setTransform(-5.2,295.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADFhBQgJApgkBhQglBjhuAHQhtAHg1hMQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApg");
	this.shape_695.setTransform(-4.7,296.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(0,0,0,0.251)").s().p("AidBuQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApQgJApgkBhQglBjhuAHIgQAAQhhAAgxhFg");
	this.shape_696.setTransform(-4.7,296.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_688},{t:this.shape_687}]},58).to({state:[{t:this.shape_690},{t:this.shape_689}]},1).to({state:[{t:this.shape_692},{t:this.shape_691}]},1).to({state:[{t:this.shape_694},{t:this.shape_693}]},1).to({state:[{t:this.shape_696},{t:this.shape_695}]},1).to({state:[]},1).wait(59));

	// 
	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABuBgQg7BIhWgOIgNgCQhZgSgng4IgBgBQgpg8AghEIAeAnIAgAfQApAjA0ASQAwgKApgWQA2gdAkgyQASgaANgfIAEgJIASgyIgIArQgMA+gQAvQgRAugVAgg");
	this.shape_697.setTransform(-4.7,282.3);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCaIgNgCQhZgSgng4IgBgBQgpg8AghEIAeAnIAgAfQApAjA0ASQAwgKApgWQA2gdAkgyQASgaANgfIAEgJIASgyIgIArQgMA+gQAvQgRAugVAgIgRAVQgxA8hEAAQgNAAgPgCg");
	this.shape_698.setTransform(-4.7,282.3);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6gtQANAIAOAKQAPAJAPAIQAlAqAsAWQAxAFApgRQBEgfAfgrQACgDACgCQARgZAMgcQABgDABgEIAXg9IgCAYIAAACQgLA+gPAyQgOArgYApIgQAXQAAAAgBABQg4BLhXgEIgOgBQhdgJgng+QAAAAgBgBQAAAAAAgBQgohBAchBg");
	this.shape_699.setTransform(-5.3,284.6);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("rgba(0,0,0,0.251)").s().p("AgbCfIgOgBQhdgJgng+IgBgBIAAgBQgohBAchBIAbASIAeARQAlAqAsAWQAxAFApgRQBEgfAfgrIAEgFQARgZAMgcIACgHIAXg9IgCAYIAAACQgLA+gPAyQgOArgYApIgQAXIgBABQg2BHhRAAIgIAAg");
	this.shape_700.setTransform(-5.3,284.6);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8gpQAMgBANACQAPAAAPACQAiAyAnAZQAyARAqgQQBMgdAdgoQACgDACgDQARgbAMgcQABgDABgDIAYhAIADAHIAAADQgLA+gNA2QgLAngbAxIgPAYQgBABAAAAQg2BQhZAFIgOAAQhgACgnhEQgBgBAAAAQgBgBAAAAQgohHAZhAg");
	this.shape_701.setTransform(-5.6,287.1);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("rgba(0,0,0,0.251)").s().p("AirBgIgBgBIgBgBQgohHAZhAQAMgBANACQAPAAAPACQAiAyAnAZQAyARAqgQQBMgdAdgoIAEgGQARgbAMgcIACgGIAYhAIADAHIAAADQgLA+gNA2QgLAngbAxIgPAYIgBABQg2BQhZAFIgOAAIgEABQhdAAgmhDg");
	this.shape_702.setTransform(-5.6,287.1);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/ghQALgKAMgGQAPgJAQgEQAdA7AjAbQAwAdAtgPQBUgbAbglQACgDACgDQATgdAKgdQABgDACgDIAZhBIAIgKIAAACQgKA/gMA6QgJAmgdA2IgOAZQgBABAAABQg0BThaAPIgPACQhjALgohJQgBgBAAgBQAAAAgBgBQgohNAWg+g");
	this.shape_703.setTransform(-5.9,289.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("rgba(0,0,0,0.251)").s().p("AirBtIgBgCIgBgBQgohNAWg+QALgKAMgGQAPgJAQgEQAdA7AjAbQAwAdAtgPQBUgbAbglIAEgGQATgdAKgdIADgGIAZhBIAIgKIAAACQgKA/gMA6QgJAmgdA2IgOAZIgBACQg0BThaAPIgPACIgZABQhQAAgig/g");
	this.shape_704.setTransform(-5.9,289.1);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBgWQAIgUANgOQAOgRARgLQAYBDAgAfQAtAoAxgNQBcgaAZgiQACgDACgDQATgfAJgdQACgDABgDIAnhfIAAADQgIBAgKA9QgHAigfA+IgPAbQAAABgBABQgwBYhcAYIgPADQhnAVgphPQAAgBgBgBQAAAAAAgBQgphSAUg9g");
	this.shape_705.setTransform(-6.1,290.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("rgba(0,0,0,0.251)").s().p("AirB8IgBgCIAAgBQgphSAUg9QAIgUANgOQAOgRARgLQAYBDAgAfQAtAoAxgNQBcgaAZgiIAEgGQATgfAJgdIADgGIAnhfIAAADQgIBAgKA9QgHAigfA+IgPAbIgBACQgwBYhcAYIgPADQgWAFgTAAQhHAAggg/g");
	this.shape_706.setTransform(-6.1,290.9);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACTAgIgOAeQguBcheAiIgQAFQhrAfgphXIAAgBQgphZAQg7QAIgdAMgWQANgZASgSQATBJAcAkQAoA1A6gNQBigWAXghQAWgkAKghIAxh3IgRCEQgCAbgkBJg");
	this.shape_707.setTransform(-6.4,292.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("rgba(0,0,0,0.251)").s().p("AirCJIAAgBQgphZAQg7QAIgdAMgWQANgZASgSQATBJAcAkQAoA1A6gNQBigWAXghQAWgkAKghIAxh3IgRCEQgCAbgkBJIgOAeQguBcheAiIgQAFQgcAIgYAAQhCAAgehAg");
	this.shape_708.setTransform(-6.4,292.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_698},{t:this.shape_697}]},53).to({state:[{t:this.shape_700},{t:this.shape_699}]},1).to({state:[{t:this.shape_702},{t:this.shape_701}]},1).to({state:[{t:this.shape_704},{t:this.shape_703}]},1).to({state:[{t:this.shape_706},{t:this.shape_705}]},1).to({state:[{t:this.shape_708},{t:this.shape_707}]},1).to({state:[]},1).wait(63));

	//  0
	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4BUQifC0iHiuQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0Beg");
	this.shape_709.setTransform(9.9,282.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("rgba(0,0,0,0.251)").s().p("AiuBaQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0BeIgKAOQhSBchJAAQhJAAhChWg");
	this.shape_710.setTransform(9.9,282.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitAiQAAgMADgOQAKgfAkg3QARgcATghQABAyA3AmQAOAIAOAFQAQAGAUAAQAfAYAmgBQA6ABAPgNQgfAzgcAmQgmAkgdANQhOApg/gfQgzgbgdhCg");
	this.shape_711.setTransform(5.8,284.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("rgba(0,0,0,0.251)").s().p("AhdB/QgzgbgdhCQABgMACgOQAKgfAkg3IAlg9QAAAyA4AmQANAIAOAFQAQAGAUAAQAfAYAmgBQA6ABAPgNQgfAzgdAmQgmAkgbANQgvAXgmAAQgeAAgbgNg");
	this.shape_712.setTransform(5.8,284.7);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiogXQAFgBAHgDQAYgCAwgcQAZgWAYgaQAbAUAygBQAMAAAMgFQAPgEARgIQARAiAWAPQAgAaAAAHQghA0ghAgQgqAeggAGQhVAWg3gpQgwgmgJhBg");
	this.shape_713.setTransform(1.4,286.9);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("rgba(0,0,0,0.251)").s().p("AhvBQQgwgmgJhBIAMgEQAYgCAwgcQAZgWAYgaQAbAUAygBQAMAAAMgFQAPgEARgIQARAiAWAPQAgAaAAAHQghA0ghAgQgqAeggAGQgdAHgZAAQgyAAgkgag");
	this.shape_714.setTransform(1.4,286.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AingjQAKAJALAIQAlAcA9gCQAhgMAbgVQA1gIAwgoQALgKAKgNQAMgOANgSQAFAuAEAdQAGA0gOAZQgjA3gmAaQgtAXgkAAQhbADgwgyQgtgyALhCg");
	this.shape_715.setTransform(-2.7,284.4);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("rgba(0,0,0,0.251)").s().p("AiFBRQgtgyALhCIAVARQAlAcA9gCQAhgMAbgVQA1gIAwgoQALgKAKgNIAZggQAFAuAEAdQAGA0gOAZQgjA3gmAaQgtAXgkAAIgIABQhWAAgtgwg");
	this.shape_716.setTransform(-2.7,284.4);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB/BLQhABfhigQQhjgQgqg8Qgqg9AghEIAeAnQAzA7BKAZQCcgeA6iTIASgyQgZCcgxBKg");
	this.shape_717.setTransform(-4.7,282.3);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCaQhjgQgqg8Qgqg9AghEIAeAnQAzA7BKAZQCcgeA6iTIASgyQgZCcgxBKQg3BRhPAAQgNAAgPgCg");
	this.shape_718.setTransform(-4.7,282.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_710},{t:this.shape_709}]},49).to({state:[{t:this.shape_712},{t:this.shape_711}]},1).to({state:[{t:this.shape_714},{t:this.shape_713}]},1).to({state:[{t:this.shape_716},{t:this.shape_715}]},1).to({state:[{t:this.shape_718},{t:this.shape_717}]},1).to({state:[]},1).wait(68));

	// 
	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADDhFQgNCMh6BOQh5BOhGg6QhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfg");
	this.shape_719.setTransform(13.8,186.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("rgba(0,0,0,0.251)").s().p("AiDCpQhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfQgNCMh6BOQhEAtg1AAQgoAAgegZg");
	this.shape_720.setTransform(13.8,186.8);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8ApQAGhJA2iZQgDAfABAYQgEBvAtAVQASAIANAFQAdAMAKACQBsAcArgvQAoguARgaQABAZgFAXQgTA6grAwQgiAhgXAPQhzBOhIg1QhEg1ABhHg");
	this.shape_721.setTransform(13.1,200.9);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("rgba(0,0,0,0.251)").s().p("Ah5ClQhEg1ABhHQAGhJA2iZQgDAfABAYQgEBvAtAVIAfANQAdAMAKACQBsAcArgvQAoguARgaQABAZgFAXQgTA6grAwQgiAhgXAPQhEAug1AAQglAAgdgVg");
	this.shape_722.setTransform(13.1,200.9);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai5AsQAChKAyiUQAAAVADAPQgIBnAtAeQAPAIANAFQAaAMALAEQBjAgAygrQApgpATgYQAGATgCAQQgUA4goAwQghAhgWAQQhuBNhIgxQhBgugHhGg");
	this.shape_723.setTransform(12.5,215.1);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("rgba(0,0,0,0.251)").s().p("AhwCgQhBgugHhGIgBAAQAChKAyiUQAAAVADAPQgIBnAtAeIAcANIAlAQQBjAgAygrQApgpATgYQAGATgCAQQgUA4goAwQghAhgWAQQhFAvgzAAQgiAAgcgTg");
	this.shape_724.setTransform(12.5,215.1);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AvQgChMAviOQABALAFAFQgKBfArAlQAOAJAMAIQAYALALAGQBaAjA4gmQAsgkAVgWQAKANABAJQgVA2glAwQggAhgVAPQhoBNhJgrQg/gpgPhEg");
	this.shape_725.setTransform(12,229.3);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("rgba(0,0,0,0.251)").s().p("AhoCcQg/gpgPhEIgBAAQgChMAviOQABALAFAFQgKBfArAlIAaARIAjARQBaAjA4gmQAsgkAVgWQAKANABAJQgVA2glAwQggAhgVAPQhEAyg0AAQgfAAgagQg");
	this.shape_726.setTransform(12,229.3);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1A0QgHhNAsiIQAEAAAHgFQgOBYAqAsQAMAKAMAJQAVAOAMAFQBRAmA+ghQAugeAWgUQAPAFAFADQgXA1giAvQgeAhgUAPQhjBNhKgmQg8gjgYhDg");
	this.shape_727.setTransform(11.5,243.2);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("rgba(0,0,0,0.251)").s().p("AhhCaQg8gjgYhDIAAAAQgHhNAsiIQAEAAAHgFQgOBYAqAsIAYATIAhATQBRAmA+ghQAugeAWgUQAPAFAFADQgXA1giAvQgeAhgUAPQhDA0g1AAQgcAAgZgNg");
	this.shape_728.setTransform(11.5,243.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizBBQgLhPAqiCQAFgKAJgPQgQBQAoAzQALALALAKQASAPAMAHQBJApBEgdQAwgYAYgSQAUgBAHgEQgXAzggAvQgdAhgSAPQhdBNhLgiQg6gcgghCg");
	this.shape_729.setTransform(11,256.4);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("rgba(0,0,0,0.251)").s().p("AhYCfQg6gcgghCIgBAAQgLhPAqiCIAOgZQgQBQAoAzIAWAVIAeAWQBJApBEgdQAwgYAYgSQAUgBAHgEQgXAzggAvQgdAhgSAPQhDA2g2AAQgZAAgWgLg");
	this.shape_730.setTransform(11,256.4);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixBOQgPhQAmh9QAIgUAKgYQgTBIAnA5QAJAMALAMQAPAPAOAJQBBAtBJgZQAxgUAbgOQAXgIAMgKQgZAwgdAwQgcAggRAPQhYBMhLgcQg3gWgphAg");
	this.shape_731.setTransform(10.5,269.6);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("rgba(0,0,0,0.251)").s().p("AhQClQg3gWgphAIgBgBQgPhQAmh9IASgsQgTBIAnA5QAJAMALAMQAPAPAOAJQBBAtBJgZQAxgUAbgOQAXgIAMgKQgZAwgdAwQgcAggRAPQhBA3g4AAQgWAAgUgHg");
	this.shape_732.setTransform(10.5,269.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4BUQifC0iHiuQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0Beg");
	this.shape_733.setTransform(9.9,282.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("rgba(0,0,0,0.251)").s().p("AiuBaQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0BeIgKAOQhSBchJAAQhJAAhChWg");
	this.shape_734.setTransform(9.9,282.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_720},{t:this.shape_719}]},42).to({state:[{t:this.shape_722},{t:this.shape_721}]},1).to({state:[{t:this.shape_724},{t:this.shape_723}]},1).to({state:[{t:this.shape_726},{t:this.shape_725}]},1).to({state:[{t:this.shape_728},{t:this.shape_727}]},1).to({state:[{t:this.shape_730},{t:this.shape_729}]},1).to({state:[{t:this.shape_732},{t:this.shape_731}]},1).to({state:[{t:this.shape_734},{t:this.shape_733}]},1).to({state:[]},1).wait(72));

	// 
	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgWgkIAgACQAcAIATAaIAHA7QAUAOAMgYIADgIQABgQgngkIgMgLQhQhYhEBkQAXgOAWgHg");
	this.shape_735.setTransform(26.5,111.4);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhgEQAUgOAXgLIAegJIAcgDQAbAEAWAeIAOA4QASAPANgOQgFgZgegcIgLgMQhLhWhKBhg");
	this.shape_736.setTransform(24.2,121.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgEgwQgOgDgQAFQgeAIggAmQARgNAZgOIAbgNgAgEgwIAEgBQAWAAAbAiIABADIAUAzQAQAPALgEQgGgUgagcIgMgKQgBgCgCgCQAAgBgBAAQgbgegagFIAAAA");
	this.shape_737.setTransform(21.9,132.2);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgoggIAkgVQARgDAeAlIAMAUIAQAfQAOAQAMAGQgJgQgXgZIgKgMIgBgBQgsg0gyAUQgbALgdAdQAOgLAagTg");
	this.shape_738.setTransform(19.7,142.2);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhjAMQAKgMAcgVIAwgpQAMgKAjAtIBDBcIgrgxIgGgJQg9hQhaBVg");
	this.shape_739.setTransform(17.9,152.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("rgba(255,255,255,0.682)").s().p("AA6AQIgGgJQg9hQhaBVQAKgMAcgVIAwgpQALgKAkAtIBCBcg");
	this.shape_740.setTransform(17.9,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_735}]},38).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_740},{t:this.shape_739}]},1).to({state:[]},1).wait(79));

	// 
	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAxgcQhFhOhABUQAjgMAbgCQA0AJAGAiQAGAjAYARQAYASgHgaQgHgbgbg0g");
	this.shape_741.setTransform(6.9,85.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgVQAkgNAbgCQA0AIAHAiQAGAjAXASQAYASgGgaQgFgageg1QhGhOhABVg");
	this.shape_742.setTransform(8.4,87.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgUQAjgOAcgCQA0AHAKAiQAFAjAWATQAXARgEgaQgEgZggg1QhHhPhABXg");
	this.shape_743.setTransform(9.9,89.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgTQAkgPAcgCQA0AGALAjQAGAiATAUQAYARgDgaQgCgYgjg1QhIhQhABYg");
	this.shape_744.setTransform(11.4,91.8);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgSQAlgQAegCQAzAFANAjQAFAiASAVQAXARgBgaQgBgXglg1QhJhRhBBZg");
	this.shape_745.setTransform(12.9,93.7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgRQAlgRAfgCQAzAEAPAkQAFAhAQAXQAXAQAAgaQABgWgog2QhJhRhCBag");
	this.shape_746.setTransform(14.4,95.7);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagRQAlgRAggCQAzADARAkQAEAhAPAXQAWAQACgZQADgWgrg2QhKhShCBbg");
	this.shape_747.setTransform(15.9,97.7);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhbgPQAmgTAggCQAyACATAkQAFAhANAYQAWAQADgZQAFgVgug2QhLhThCBdg");
	this.shape_748.setTransform(17.4,99.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhcgOQAmgUAhgCQAyABAVAkQAFAhALAZQAWAQAEgZQAHgUgxg2QhMhUhCBeg");
	this.shape_749.setTransform(18.9,101.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhdgOQAmgUAhgCQAzgBAWAlQAFAhAJAaQAWAPAGgZQAIgTgzg2QhNhVhCBfg");
	this.shape_750.setTransform(20.4,103.6);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhfgNQAngVAjgCQAygBAYAlQAEAgAIAbQAVAPAIgZQAKgSg2g3QhOhVhDBgg");
	this.shape_751.setTransform(21.9,105.5);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhggMQAngWAkgCQAxgCAbAmQAEAfAGAcQAVAPAJgZQAMgRg5g3QhOhWhEBhg");
	this.shape_752.setTransform(23.4,107.5);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhgLQAngXAkgCQAygEAcAoQAEAeAEAdQAVAOALgYQANgRg7g3QhQhXhDBjg");
	this.shape_753.setTransform(25,109.5);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhigKQAngYAlgCQAygFAeApIAGA7QAVAOAMgYQAPgQg+g3QhQhYhEBkg");
	this.shape_754.setTransform(26.5,111.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_741}]},25).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[]},1).wait(83));

	// 
	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABaAAQhehjhlBEIBZgOQBLAJANA1QANA2AJgPIAFgHQASgegbgTg");
	this.shape_755.setTransform(1.6,83.3);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhfgaQAqgJAmgGQBDAKALAuQALAwAOgEQASgkgbgeQhVhchZBJg");
	this.shape_756.setTransform(3.1,84);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgWQAmgLAhgDQA7AJAJAoQAIApATAHQAOgkgagpQhOhVhMBPg");
	this.shape_757.setTransform(4.6,84.7);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAxgcQhFhOhABUQAjgMAbgCQA0AJAGAiQAGAjAYARQAYASgHgaQgHgbgbg0g");
	this.shape_758.setTransform(6.9,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_755}]},22).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[]},1).wait(96));

	// Layer 12
	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABlAAQh/iFhaCqQA9hLBTgBIAaAXQgBBKA0AAIAFgIQASgdgbgVg");
	this.shape_759.setTransform(0,-120.9);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhzAiQA8hHBRgCQAQAMANANQAABJAygBQAXglgbgVQh9iDhbClg");
	this.shape_760.setTransform(0,-111.6);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhyAfQA7hFBQgBQASALANAPQABBIAwgBQAXglgbgVQh8iChbChg");
	this.shape_761.setTransform(0.1,-102.3);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhyAcQA7hBBNgCQAWALANARQABBHAugCQAXglgbgVQh6iAhcCcg");
	this.shape_762.setTransform(0.2,-93.1);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxAZQA6g/BLgCQAZALANATQACBGAsgCQAXglgbgVQh5h+hcCXg");
	this.shape_763.setTransform(0.2,-83.8);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxAVQA5g7BKgCQAbALAOAVQACBFAqgEQAXglgbgUQh3h9hdCSg");
	this.shape_764.setTransform(0.3,-74.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwASQA4g4BIgDQAfALANAXQADBEAogEQAXglgbgUQh2h8hdCOg");
	this.shape_765.setTransform(0.4,-65.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwAPQA4g1BGgDQAiALANAZQAEBDAlgFQAXglgbgUQh0h6heCJg");
	this.shape_766.setTransform(0.4,-55.9);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvALQA3gxBEgDQAkALANAaQAFBCAkgFQAXglgbgUQhzh5heCEg");
	this.shape_767.setTransform(0.5,-46.6);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvAJQA3gvBCgDQAnAKANAdQAFBBAigGQAXglgbgUQhxh3hfCAg");
	this.shape_768.setTransform(0.6,-37.4);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuAFQA1grBBgEQAqALANAfQAGBAAggHQAXglgbgUQhwh1hfB6g");
	this.shape_769.setTransform(0.7,-28.1);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhuACQA1goA+gEQAtAKAOAgQAGBAAegHQAXglgbgUQhuh0hgB2g");
	this.shape_770.setTransform(0.8,-18.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtAAQA0gmA8gEQAwAKAOAhQAGBAAcgIQAXglgbgUQhshyhgByg");
	this.shape_771.setTransform(0.8,-9.5);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtgDQAzgjA7gFQAzALANAiQAIA/AagIQAXglgbgUQhrhxhhBug");
	this.shape_772.setTransform(0.9,-0.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsgGQAyggA6gFQA1AKANAlQAIA+AYgKQAXglgbgTQhphvhhBpg");
	this.shape_773.setTransform(1,9.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsgJQAygdA5gFQA2AKAOAnQAIA9AXgKQAXglgbgUQhohuhiBlg");
	this.shape_774.setTransform(1.1,18.3);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrgMQAxgaA3gGQA5AKAOApQAJA8AUgLQAXglgbgTQhmhshiBgg");
	this.shape_775.setTransform(1.1,27.6);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrgQQAxgXA1gFQA9AKANAqQAKA7ASgLQAXglgbgTQhlhrhjBbg");
	this.shape_776.setTransform(1.2,36.9);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqgTQAvgTA0gGQA/AKANAsQALA6AQgMQAXglgbgTQhjhphjBWg");
	this.shape_777.setTransform(1.3,46.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqgWQAvgRAygGQBCAKAOAvQALA5AOgNQAXglgbgTQhihohkBSg");
	this.shape_778.setTransform(1.3,55.5);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpgZQAugNAvgHQBGAKANAwQAMA4AMgNQAXglgbgTQhghmhkBNg");
	this.shape_779.setTransform(1.4,64.7);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpgcQAugKAugHQBIAKANAyQANA3AKgNQAXglgbgUQhfhkhlBIg");
	this.shape_780.setTransform(1.5,74);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABaAAQhehjhlBEIBZgOQBLAJANA1QANA2AJgPIAFgHQASgegbgTg");
	this.shape_781.setTransform(1.6,83.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_759}]}).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[]},1).wait(99));

	// 
	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgLQAqhyBxh2IBXBNQDUDQiRCeIgmAjQiAAXhIglQgbgOgTgXQhDhTAqhwg");
	this.shape_782.setTransform(26.4,124);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.2,-24.6,-6.2,21.9).s().p("AhoDdQgbgOgTgXQhDhTAqhwQAqhyBxh2IBXBNQDUDQiRCeIgmAjQgzAJgpAAQhAAAgsgXg");
	this.shape_783.setTransform(26.4,124);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitABQAehyBvh3QAfAOAeAOIAYAMQDKDRhxCZQgQAWgPARQhsAqhSggQgdgMgUgTQhLhJAehyg");
	this.shape_784.setTransform(23.9,135.5);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.lf(["rgba(103,218,218,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.4,-24.9,-4.4,21.7).s().p("AhPDbQgdgMgUgTQhLhJAehyQAehyBvh3IA9AcIAYAMQDKDRhxCZQgQAWgPARQg9AYg0AAQgpAAgkgOg");
	this.shape_785.setTransform(23.9,135.5);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirANQARhyBvh5QAcAAAegBIAZAEQDBDShSCVQgNAYgMASQhVA9hggcQgdgJgWgQQhTg9ASh0g");
	this.shape_786.setTransform(21.5,147.2);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.6,-25.2,-2.6,21.3).s().p("Ag3DXQgdgJgWgQQhTg9ASh0QARhyBvh5IA6gBIAZAEQDBDShSCVQgNAYgMASQg6AqhBAAQgbAAgfgJg");
	this.shape_787.setTransform(21.5,147.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipApQAFh0Bth5QAbgPAdgPIAZgFQC5DRgzCTQgJAagKASQg+BRhugXQgegHgXgNQhbgxAGh1g");
	this.shape_788.setTransform(19,157.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.lf(["rgba(105,143,143,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.7,-24.1,-0.7,22.4).s().p("AgfDjQgegHgXgNQhbgxAGh1QAFh0Bth5QAbgPAdgPIAZgFQC5DRgzCTQgJAagKASQgwA/hOAAQgVAAgZgFg");
	this.shape_789.setTransform(19,157.3);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARjzQCuDXgYCRQgEAZgIATQgmBjh9gTQgegEgZgKQhjgmgGh1QgHh1Brh7QAZgdAggdg");
	this.shape_790.setTransform(16.6,167.2);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.7,1,23.8).s().p("AgIDxQgegEgZgKQhjgmgGh1QgHh1Brh7QAZgdAggdIAcgRQCuDXgYCRQgEAZgIATQggBThfAAQgSAAgSgDg");
	this.shape_791.setTransform(16.6,167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_783},{t:this.shape_782}]},38).to({state:[{t:this.shape_785},{t:this.shape_784}]},1).to({state:[{t:this.shape_787},{t:this.shape_786}]},1).to({state:[{t:this.shape_789},{t:this.shape_788}]},1).to({state:[{t:this.shape_791},{t:this.shape_790}]},1).to({state:[]},1).wait(79));

	// 
	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag1D2Qh/gNgOiHQgVjFAhhVIACgEQAhhPBpAcQBTDMB1AyQBKAiguBPQgbAshBA7QhXAWg8gHg");
	this.shape_792.setTransform(16,100.2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-8.2,-24.1,-8.2,22.4).s().p("Ag1D2Qh/gNgOiHQgVjFAhhVIACgEQAhhPBpAcQBTDMB1AyQBKAiguBPQgbAshBA7QhDARgyAAQgQAAgOgCg");
	this.shape_793.setTransform(16,100.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBBYQgQi/AnhXQAmhJBkAdQBXDJBoA4QBDAjgvBMQgdAqhBA2QhVAUg8gKQh7gTgKiFg");
	this.shape_794.setTransform(16.8,102.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.lf(["rgba(102,244,244,0.314)","rgba(255,255,255,0.541)"],[0,1],-8.1,-24.3,-8.1,22.2).s().p("Ag8DwQh7gTgKiFQgQi/AnhXQAmhJBkAdQBXDJBoA4QBDAjgvBMQgdAqhBA2Qg6ANgrAAQgYAAgUgDg");
	this.shape_795.setTransform(16.8,102.2);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/BOQgLi4AthaQAog/BgAfQBbDEBbA+QA8AlgxBKQgfAmhBAzQhVARg6gOQh3gYgFiDg");
	this.shape_796.setTransform(17.6,104.2);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.lf(["rgba(103,232,232,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.9,-24.5,-7.9,22).s().p("AhDDpQh3gYgFiDQgLi4AthaQAog/BgAfQBbDEBbA+QA8AlgxBKQgfAmhBAzQgwAJgmAAQgfAAgagGg");
	this.shape_797.setTransform(17.6,104.2);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8BDQgHixAzhcQArg1BbAhQBgDABOBDQA0AmgyBIQgiAkhAAuQhVAPg5gRQhxgegBiCg");
	this.shape_798.setTransform(18.3,106.2);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.lf(["rgba(103,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.6,-24.7,-7.6,21.8).s().p("AhKDjQhxgegBiCQgHixAzhcQArg1BbAhQBgDABOBDQA0AmgyBIQgiAkhAAuQgpAHggAAQgnAAgegJg");
	this.shape_799.setTransform(18.3,106.2);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6A5QgCirA5heQAugrBVAjQBmC8BABJQAtAngyBGQglAghAAqQhVANg3gVQhtgjADiAg");
	this.shape_800.setTransform(19,108.2);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.lf(["rgba(103,209,209,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.4,-25,-7.4,21.6).s().p("AhQDcQhtgjADiAQgCirA5heQAugrBVAjQBmC8BABJQAtAngyBGQglAghAAqQghAFgbAAQguAAgigNg");
	this.shape_801.setTransform(19,108.2);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AvQADikA/hhQAwghBQAkQBrC5AzBOQAlApgzBDQgnAdhAAmQhUALg2gYQhpgoAIh/g");
	this.shape_802.setTransform(19.6,110.2);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.lf(["rgba(104,198,198,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.1,-25.2,-7.1,21.4).s().p("AhWDWQhpgoAIh/QADikA/hhQAwghBQAkQBrC5AzBOQAlApgzBDQgnAdhAAmQgaADgYAAQgzAAglgQg");
	this.shape_803.setTransform(19.6,110.2);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai0AlQAHidBFhjQAzgXBLAlQBvC1AnBUQAdArg0BAQgqAag/AiQhUAIg1gbQhkguANh9g");
	this.shape_804.setTransform(20.3,112.1);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.lf(["rgba(104,186,186,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.8,-25.3,-6.8,21.2).s().p("AhdDQQhkguANh9QAHidBFhjQAzgXBLAlQBvC1AnBUQAdArg0BAQgqAag/AiQgUACgTAAQg6AAgogVg");
	this.shape_805.setTransform(20.3,112.1);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiyAcQANiXBKhmQA1gMBHAnQB0CxAaBZQAWAsg2A/QgtAXg+AdQhUAGgzgeQhfg0AQh7g");
	this.shape_806.setTransform(21,114);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.lf(["rgba(104,175,175,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.6,-25.4,-6.6,21.1).s().p("AhjDLQhfg0AQh7QANiXBKhmQA1gMBHAnQB0CxAaBZQAWAsg2A/IhrA0IgbABQhBAAgrgZg");
	this.shape_807.setTransform(21,114);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwAUQASiQBRhoQA3gCBCAoQB5CtAMBfQAPAug3A8QgvAUg+AZQhUAEgygiQhag5AUh6g");
	this.shape_808.setTransform(21.7,115.8);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.lf(["rgba(104,163,163,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.3,-25.4,-6.3,21.2).s().p("AhqDHQhag5AUh6QASiQBRhoQA3gCBCAoQB5CtAMBfQAPAug3A8IhtAtIgSAAQhHAAgtgeg");
	this.shape_809.setTransform(21.7,115.8);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiuANQAXiJBWhrQA6AIA+AqQB9CpgBBlQAHAvg3A6QgyARg+AUQhUACgwglQhWg+AZh5g");
	this.shape_810.setTransform(22.5,117.4);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.lf(["rgba(105,152,152,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-25.2,-6.1,21.3).s().p("AhxDEQhWg+AZh5QAXiJBWhrQA6AIA+AqQB9CpgBBlQAHAvg3A6IhwAlIgIABQhOAAgugkg");
	this.shape_811.setTransform(22.5,117.4);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitAHQAbiDBdhtQA7ASA7AsQCBCkgOBrQAAAxg4A3Qg1ANg+ARQhTAAgvgpQhRhEAdh2g");
	this.shape_812.setTransform(23.3,119.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.lf(["rgba(105,140,140,0.314)","rgba(255,255,255,0.541)"],[0,1],-6,-25.1,-6,21.4).s().p("Ah5DBQhRhEAdh2QAbiDBdhtQA7ASA7AsQCBCkgOBrQAAAxg4A3Qg1ANg+ARQhTAAgvgpg");
	this.shape_813.setTransform(23.3,119.1);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitAAQAgh8BihwQA9AdA3AtQCGChgbBwQgIAyg5A1Qg4AKg7ANQhVgDgtgsQhNhJAih1g");
	this.shape_814.setTransform(24.3,120.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.lf(["rgba(105,129,129,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-25,-6.1,21.6).s().p("AiCC+QhNhJAih1QAgh8BihwQA9AdA3AtQCGChgbBwQgIAyg5A1IhzAXQhVgDgtgsg");
	this.shape_815.setTransform(24.3,120.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugFQAlh4BphyQA/AnAyAvQCKCagoB4QgPA0g6AzQg6AHg7AJQhVgFgsgxQhIhNAmhyg");
	this.shape_816.setTransform(25.3,122.4);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.lf(["rgba(106,117,117,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-24.9,-6.1,21.7).s().p("AiMC7QhIhPAmhxQAlh3BphzQA/AnAyAvQCKCbgoB3QgPA0g6AzIh1AQQhVgGgsgvg");
	this.shape_817.setTransform(25.3,122.4);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgLQAqhwBuh1IADgDQA/A0AuAwQCOCXg1B+QgXA1g7AwIh3AJQhVgIgqgzQhDhUAqhwg");
	this.shape_818.setTransform(26.4,123.9);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.2,-24.6,-6.2,22).s().p("AiWC5QhDhTAqhxQAqhwBuh0IADgDQA/AzAuAxQCOCWg1B+QgXA1g7AxIh3AIQhVgIgqgzg");
	this.shape_819.setTransform(26.4,123.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_793},{t:this.shape_792}]},25).to({state:[{t:this.shape_795},{t:this.shape_794}]},1).to({state:[{t:this.shape_797},{t:this.shape_796}]},1).to({state:[{t:this.shape_799},{t:this.shape_798}]},1).to({state:[{t:this.shape_801},{t:this.shape_800}]},1).to({state:[{t:this.shape_803},{t:this.shape_802}]},1).to({state:[{t:this.shape_805},{t:this.shape_804}]},1).to({state:[{t:this.shape_807},{t:this.shape_806}]},1).to({state:[{t:this.shape_809},{t:this.shape_808}]},1).to({state:[{t:this.shape_811},{t:this.shape_810}]},1).to({state:[{t:this.shape_813},{t:this.shape_812}]},1).to({state:[{t:this.shape_815},{t:this.shape_814}]},1).to({state:[{t:this.shape_817},{t:this.shape_816}]},1).to({state:[{t:this.shape_819},{t:this.shape_818}]},1).to({state:[]},1).wait(83));

	// 
	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABOicQCKCBhFByQgjA7hYA3QgdATgcAAQgngBgfgnQhMhcALh+QAOinB1gNQASgCATACQAtAfAhAfg");
	this.shape_820.setTransform(2.3,96.1);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.1,-23.8,-4.1,22.8).s().p("AghDcQgngBgfgnQhMhcALh+QAOinB1gNQASgCATACQAtAfAhAfQCKCBhFByQgjA7hYA3QgcATgcAAIgBAAg");
	this.shape_821.setTransform(2.3,96.1);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AijAEQACiwBZglQAPgJATgDQAoAIAxAbQB4CagHBdQAIA2hcBLQgfAXgcAJQgpAEgjgZQhug6ACiLg");
	this.shape_822.setTransform(5.5,97.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.lf(["rgba(103,205,205,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.1,-24.1,-4.1,22.5).s().p("Ag3DJQhug6ACiLQACiwBZglQAPgJATgDQAoAIAxAbQB4CagHBdQAIA2hcBLQgfAXgcAJIgMAAQgiAAgegVg");
	this.shape_823.setTransform(5.5,97.7);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiyAyQgJi6A9g9QAMgQARgJQAogQA9AZQBnCzA3BHQA0AwhiBhQgdAZgcASQgvAJglgLQiRgXgIiWg");
	this.shape_824.setTransform(10.7,99);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.lf(["rgba(105,156,156,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-24.2,-6.1,22.3).s().p("AgZDfQiRgXgIiWQgJi6A9g9QAMgQARgJQAogQA9AZQBnCzA3BHQA0AwhiBhQgdAZgcASQgVAEgTAAQgWAAgWgGg");
	this.shape_825.setTransform(10.7,99);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgqjvQBTDMB1AyQBfArhnB1Ig4A4QgzANgrADQixAMgRihQgVjFAhhVQAJgXAOgOQAngnBOAVg");
	this.shape_826.setTransform(16,100.2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-8.2,-24.1,-8.2,22.4).s().p("AjCBiQgVjFAhhVQAJgXAOgOQAngnBOAVQBTDMB1AyQBfArhnB1Ig4A4QgzANgrADIgWABQidAAgPiWg");
	this.shape_827.setTransform(16,100.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_821},{t:this.shape_820}]},22).to({state:[{t:this.shape_823},{t:this.shape_822}]},1).to({state:[{t:this.shape_825},{t:this.shape_824}]},1).to({state:[{t:this.shape_827},{t:this.shape_826}]},1).to({state:[]},1).wait(96));

	// Layer 11
	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AC/AVQAFBOgVAqQgVAqghAVQgVANgqAJIhBAJQgzADgvgXIgSgKQgTgLgMgUQg1hXAYhkQAXhdA6hNQAmgyBAgBIAIABQBbAOAsBTQAqBRAGBMg");
	this.shape_828.setTransform(0.3,-106.4);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.lf(["rgba(0,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.6,0.5,23.9).s().p("AhpDXIgSgKQgTgLgMgUQg1hXAYhkQAXhdA6hNQAmgyBAgBIAIABQBbAOAsBTQAqBRAGBMQAFBOgVAqQgVAqghAVQgVANgqAJIhBAJIgOAAQgsAAgogUg");
	this.shape_829.setTransform(0.3,-106.4);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2gOQAWheA5hLQAngyA/AAQBkASArBPQABADABACQAoBOAGBKQAFBNgWAqQgVApghAVQgWAOgpAJIgGABQgeAEgcAEQgBAAgBAAQgyADgtgXIgSgLQgSgLgLgTQgBAAAAgBQg1hXAYhjg");
	this.shape_830.setTransform(0.4,-97.2);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.lf(["rgba(5,248,248,0.314)","rgba(255,255,255,0.541)"],[0,1],0.3,-22.7,0.3,23.9).s().p("AhpDWIgSgLQgSgLgLgTIgBgBQg1hXAYhjQAWheA5hLQAngyA/AAQBkASArBPIACAFQAoBOAGBKQAFBNgWAqQgVApghAVQgWAOgpAJIgGABIg6AIIgCAAIgMAAQgrAAgogUg");
	this.shape_831.setTransform(0.4,-97.2);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2gPQAWhfA5hJQAngxA/AAQBiAUArBNQABACABADQAqBNAFBJQAFBMgXArQgVAoghAWQgWANgoAJIgGABQgeAGgcADQgBAAgBAAQgxADgtgYIgSgKQgRgMgLgTQgBAAAAgBQg1hWAXhjg");
	this.shape_832.setTransform(0.5,-88);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.lf(["rgba(10,241,241,0.314)","rgba(255,255,255,0.541)"],[0,1],0.1,-22.7,0.1,23.8).s().p("AhpDUIgSgKQgRgMgLgTIgBgBQg1hWAXhjQAWhfA5hJQAngxA/AAQBiAUArBNIACAFQAqBNAFBJQAFBMgXArQgVAoghAWQgWANgoAJIgGABQgeAGgcADIgCAAIgLAAQgrAAgogVg");
	this.shape_833.setTransform(0.5,-88);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1gRQAVheA5hIQAmgwA/gBQBiAWAqBMQABACABACQArBNAFBIQAEBMgXAqQgVAogiAWQgVANgnAKIgGABQgeAGgcAEQgBAAgBAAQgxADgsgZIgRgLQgSgMgLgSQAAgBAAAAQg0hWAWhjg");
	this.shape_834.setTransform(0.6,-78.8);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.lf(["rgba(14,235,235,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.1,-22.8,-0.1,23.8).s().p("AhpDTIgRgLQgSgMgLgSIAAgBQg0hWAWhjIAAgBQAVheA5hIQAmgwA/gBQBiAWAqBMIACAEQArBNAFBIQAEBMgXAqQgVAogiAWQgVANgnAKIgGABQgeAGgcAEIgCAAIgKAAQgrAAgogWg");
	this.shape_835.setTransform(0.6,-78.8);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai0gSQAUhgA4hGQAngvA/AAQBgAWArBLQABACABACQArBMAFBIQAEBKgYArQgVAngiAWQgWAOgmAKIgGACQgdAGgcAEQgBAAgBAAQgwADgsgaIgRgLQgRgMgLgTQAAAAgBgBQgzhVAWhjg");
	this.shape_836.setTransform(0.7,-69.5);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.lf(["rgba(19,228,228,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.3,-22.9,-0.3,23.7).s().p("AhpDRIgRgLQgRgMgLgTIgBgBQgzhVAWhjQAUhgA4hGQAngvA/AAQBgAWArBLIACAEQArBMAFBIQAEBKgYArQgVAngiAWQgWAOgmAKIgGACQgdAGgcAEIgCAAIgKAAQgrAAgngXg");
	this.shape_837.setTransform(0.7,-69.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizgTQAThgA5hFQAmgvA/AAQBfAZAqBIQACADABACQAsBLAEBIQAEBJgZArQgVAmghAXQgWAOgmAKIgFACQgeAHgbADQgBAAgBAAQgwADgrgbIgRgLQgRgMgLgTQAAAAAAgBQgzhVAVhig");
	this.shape_838.setTransform(0.7,-60.3);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.lf(["rgba(24,221,221,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.5,-22.9,-0.5,23.6).s().p("AhoDPIgRgLQgRgMgLgTIAAgBQgzhVAVhiQAThgA5hFQAmgvA/AAQBfAZAqBIIADAFQAsBLAEBIQAEBJgZArQgVAmghAXQgWAOgmAKIgFACQgeAHgbADIgCAAIgKABQgrAAgmgZg");
	this.shape_839.setTransform(0.7,-60.3);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizgUQAThhA4hEQAngtA+AAQBeAaArBHQABACABACQAtBLAEBHQAEBIgaAsQgVAlghAXQgWAOglALIgGABQgdAIgbADQgBAAgBAAQgwADgqgcIgRgLQgQgMgLgTQAAAAgBgBQgyhUAUhig");
	this.shape_840.setTransform(0.8,-51.1);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.lf(["rgba(29,214,214,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.7,-23,-0.7,23.6).s().p("AhoDNIgRgLQgQgMgLgTIgBgBQgyhUAUhiQAThhA4hEQAngtA+AAQBeAaArBHIACAEQAtBLAEBHQAEBIgaAsQgVAlghAXQgWAOglALIgGABQgdAIgbADIgCAAIgJABQgrAAgmgag");
	this.shape_841.setTransform(0.8,-51.1);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiygVQAShiA4hCQAmgtA+ABQBeAbAqBGQABACABACQAuBKAEBGQAEBHgbAsQgVAlghAXQgXAOgjALIgGACQgeAIgaAEQgBAAgBAAQgvADgqgdIgQgMQgQgMgLgTQgBAAAAgBQgxhTAThig");
	this.shape_842.setTransform(0.9,-41.9);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.lf(["rgba(34,208,208,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.9,-23,-0.9,23.5).s().p("AhoDMIgQgMQgQgMgLgTIgBgBQgxhTAThiQAShiA4hCQAmgtA+ABQBeAbAqBGIACAEQAuBKAEBGQAEBHgbAsQgVAlghAXQgXAOgjALIgGACQgeAIgaAEIgCAAIgIAAQgrAAgmgag");
	this.shape_843.setTransform(0.9,-41.9);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixgWQAShiA3hBQAmgsA+ABQBdAcAqBEQABACABACQAvBKADBGQAEBFgcAtQgVAkghAXQgWAPgjALIgGACQgdAJgaADQgBAAgBAAQgvADgqgeIgPgLQgQgNgLgTQAAAAgBgBQgxhTAThhg");
	this.shape_844.setTransform(1,-32.7);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.lf(["rgba(39,201,201,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.1,-23.1,-1.1,23.5).s().p("AhoDKIgPgLQgQgNgLgTIgBgBQgxhTAThhQAShiA3hBQAmgsA+ABQBdAcAqBEIACAEQAvBKADBGQAEBFgcAtQgVAkghAXQgWAPgjALIgGACQgdAJgaADIgCAAIgJAAQgqAAgmgbg");
	this.shape_845.setTransform(1,-32.7);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgYQARhiA3hAQAmgqA+AAQBbAeAqBDQACACABACQAvBJADBFQAEBEgdAuQgVAjghAXQgXAPgiAMIgFACQgdAJgaAEQgBAAgBAAQgvADgpgfIgPgMQgPgNgLgSQgBgBAAAAQgwhTAShhg");
	this.shape_846.setTransform(1.1,-23.5);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.lf(["rgba(43,194,194,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.3,-23.1,-1.3,23.4).s().p("AhoDJIgPgMQgPgNgLgSIgBgBQgwhTAShhIAAgBQARhiA3hAQAmgqA+AAQBbAeAqBDIADAEQAvBJADBFQAEBEgdAuQgVAjghAXQgXAPgiAMIgFACQgdAJgaAEIgCAAIgJAAQgqAAglgcg");
	this.shape_847.setTransform(1.1,-23.5);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgZQARhjA3g+QAmgqA9ABQBbAfAqBBQABACABACQAwBJADBEQAEBEgeAtQgVAjghAYQgXAPghAMIgGACQgdAKgZADQgBAAgBAAQguADgpggIgPgMQgPgNgLgSQAAgBAAAAQgwhSARhhg");
	this.shape_848.setTransform(1.2,-14.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.lf(["rgba(48,187,187,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.5,-23.2,-1.5,23.4).s().p("AhoDHIgPgMQgPgNgLgSIAAgBQgwhSARhhIAAgBQARhjA3g+QAmgqA9ABQBbAfAqBBIACAEQAwBJADBEQAEBEgeAtQgVAjghAYQgXAPghAMIgGACQgdAKgZADIgCAAIgIAAQgqAAglgdg");
	this.shape_849.setTransform(1.2,-14.3);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgaQAQhjA2g9QAmgpA+ABQBZAhAqA/QABACACACQAwBIADBEQADBCgeAuQgVAighAYQgXAPggANIgGACQgdAKgZADQgBAAgBAAQguADgoggIgOgNQgPgNgLgSQAAgBAAAAQgvhSAQhgg");
	this.shape_850.setTransform(1.3,-5.1);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.lf(["rgba(53,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.7,-23.2,-1.7,23.3).s().p("AhoDGIgOgNQgPgNgLgSIAAgBQgvhSAQhgIAAgBQAQhjA2g9QAmgpA+ABQBZAhAqA/IADAEQAwBIADBEQADBCgeAuQgVAighAYQgXAPggANIgGACQgdAKgZADIgCAAIgIAAQgpAAglgdg");
	this.shape_851.setTransform(1.3,-5.1);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgbQAPhkA3g7QAmgpA9ABQBZAjApA+QACACABACQAxBHADBDQADBBgfAvQgVAhghAYQgXAPggANIgFADQgdALgZADQgBAAgBAAQguADgngiIgOgNQgOgOgLgRQgBgBAAAAQguhRAPhhg");
	this.shape_852.setTransform(1.4,4.1);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.lf(["rgba(58,174,174,0.314)","rgba(255,255,255,0.541)"],[0,1],-2,-23.2,-2,23.3).s().p("AhoDEIgOgNQgOgOgLgRIgBgBQguhRAPhhQAPhkA3g7QAmgpA9ABQBZAjApA+IADAEQAxBHADBDQADBBgfAvQgVAhghAYQgXAPggANIgFADQgdALgZADIgCAAIgHAAQgqAAgkgfg");
	this.shape_853.setTransform(1.4,4.1);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugcQAOhlA3g5QAmgoA9ABQBXAkAqA8QABACABACQAyBHADBCQADBBggAuQgVAhghAYQgXAQgfANIgGACQgcAMgZADQgBAAgBAAQgtADgngiIgOgNQgOgPgLgRQAAgBAAAAQguhQAPhhg");
	this.shape_854.setTransform(1.5,13.3);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.lf(["rgba(63,167,167,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.2,-23.3,-2.2,23.3).s().p("AhoDDIgOgNQgOgPgLgRIAAgBQguhQAPhhQAOhlA3g5QAmgoA9ABQBXAkAqA8IACAEQAyBHADBCQADBBggAuQgVAhghAYQgXAQgfANIgGACQgcAMgZADIgCAAIgHAAQgpAAgkgfg");
	this.shape_855.setTransform(1.5,13.3);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitgdQANhmA2g4QAmgmA9ABQBXAlApA7QABACACACQAyBGADBCQACA/ggAvQgVAggiAYQgXAQgeAOIgFACQgcANgZACQgBAAgBAAQgtADgmgjIgNgNQgOgPgLgRQAAAAAAgBQgthQAOhgg");
	this.shape_856.setTransform(1.6,22.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.lf(["rgba(67,160,160,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.4,-23.3,-2.4,23.2).s().p("AhoDBIgNgNQgOgPgLgRIAAgBQgthQAOhgIAAAAQANhmA2g4QAmgmA9ABQBXAlApA7IADAEQAyBGADBCQACA/ggAvQgVAggiAYQgXAQgeAOIgFACQgcANgZACIgCAAIgHAAQgpAAgjggg");
	this.shape_857.setTransform(1.6,22.5);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisgfQANhmA1g2QAmgmA9ABQBWAnApA5QABACACACQAzBFADBCQACA+giAvQgVAfghAZQgXAQgeAOIgFADQgcANgYACQgBAAgBAAQgtADgmgkIgMgNQgOgPgLgRQAAgBAAAAQgthQAOhfg");
	this.shape_858.setTransform(1.6,31.7);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.lf(["rgba(72,153,153,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.6,-23.4,-2.6,23.1).s().p("AhoC/IgNgNQgNgPgLgRIAAgBQgthQAOhfIAAgBQANhmA1g2QAmgmA9ABQBWAnApA5IADAEQAzBFADBCQABA+ghAvQgVAfgiAZQgWAQgeAOIgFADQgcANgYACIgCAAIgHABQgpAAgjgig");
	this.shape_859.setTransform(1.6,31.7);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisggQANhnA1g1QAmglA9ACQBUAoApA4QACABABACQA0BFADBBQABA9giAwQgVAeghAZQgYAQgcAPIgFADQgcANgYADQgBAAgBAAQgsADgmglIgMgOQgNgPgLgRQAAgBAAAAQgshPAMhfg");
	this.shape_860.setTransform(1.7,40.9);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.lf(["rgba(77,147,147,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.8,-23.5,-2.8,23.1).s().p("AhoC+IgMgOQgNgPgLgRIAAgBQgshPAMhfIAAgBQANhnA1g1QAmglA9ACQBUAoApA4IADADQA0BFADBBQABA9giAwQgVAeghAZQgYAQgcAPIgFADQgcANgYADIgCAAIgHAAQgoAAgjgig");
	this.shape_861.setTransform(1.7,40.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirghQAMhnA1g0QAmgkA8ACQBTApAqA2QABACABACQA1BEACBAQACA8gjAwQgVAeghAZQgYARgbAOIgGADQgbAOgYADQgBAAgBAAQgsADglgmIgMgOQgMgPgLgRQAAgBgBAAQgrhOAMhfg");
	this.shape_862.setTransform(1.8,50.1);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.lf(["rgba(82,140,140,0.314)","rgba(255,255,255,0.541)"],[0,1],-3,-23.5,-3,23).s().p("AhoC8IgMgOQgMgPgLgRIgBgBQgrhOAMhfIAAgBQAMhnA1g0QAmgkA8ACQBTApAqA2IACAEQA1BEACBAQACA8gjAwQgVAeghAZQgYARgbAOIgGADQgbAOgYADIgCAAIgGAAQgoAAgjgjg");
	this.shape_863.setTransform(1.8,50.1);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqgiQALhoA1gyQAmgkA8ACQBSArApA1QACABABACQA2BEACBAQABA6gkAxQgVAdghAaQgXAQgbAPIgFADQgcAPgXACQgBAAgBAAQgsADgkgnIgMgOQgMgPgLgRQAAgBAAAAQgrhOALheg");
	this.shape_864.setTransform(1.9,59.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.lf(["rgba(87,133,133,0.314)","rgba(255,255,255,0.541)"],[0,1],-3.2,-23.6,-3.2,23).s().p("AhnC6IgMgOQgMgPgLgRIAAgBQgrhOALheIAAgBQALhoA1gyQAmgkA8ACQBSArApA1IADADQA2BEACBAQABA6gkAxQgVAdghAaQgXAQgbAPIgFADQgcAPgXACIgCAAIgHABQgoAAghglg");
	this.shape_865.setTransform(1.9,59.3);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqgjQALhpA1gxQAlgiA8ACQBSAsApAzQABACACACQA2BDACA/QABA5glAyQgVAcghAaQgYARgaAPIgFADQgbAPgXADQgBAAgBAAQgrADgkgoIgLgOQgMgQgLgRQAAgBgBAAQgqhNAKhfg");
	this.shape_866.setTransform(2,68.5);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.lf(["rgba(92,126,126,0.314)","rgba(255,255,255,0.541)"],[0,1],-3.4,-23.6,-3.4,22.9).s().p("AhnC5IgLgOIgXghIgBgBQgqhNAKhfQALhpA1gxQAlgiA8ACQBSAsApAzIADAEQA2BDACA/QABA5glAyQgVAcghAaQgYARgaAPIgFADQgbAPgXADIgCAAIgGAAQgoAAghglg");
	this.shape_867.setTransform(2,68.5);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipgkQAKhpA0gwQAmghA8ACQBQAtApAyQACACABABQA3BDACA/QABA4gmAxQgVAcghAaQgYARgZAQIgFADQgbAQgXACQgBAAgBAAQgrADgjgpIgLgOQgMgQgLgRQAAAAAAgBQgphNAJheg");
	this.shape_868.setTransform(2.1,77.7);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.lf(["rgba(96,120,120,0.314)","rgba(255,255,255,0.541)"],[0,1],-3.6,-23.7,-3.6,22.9).s().p("AhnC3IgLgOIgXghIAAgBQgphNAJheIAAAAQAKhpA0gwQAmghA8ACQBQAtApAyIADADQA3BDACA/QABA4gmAxQgVAcghAaQgYARgZAQIgFADQgbAQgXACIgCAAIgGAAQgnAAghgmg");
	this.shape_869.setTransform(2.1,77.7);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioglQAJhqA0guQAmghA7ADQBQAvAoAwQACABABACQA5BCABA+QABA3gnAyQgVAbghAaQgYARgYAQIgFAEQgaAQgYACQgBAAgBAAQgqADgjgpIgLgPQgLgQgLgRQAAAAAAgBQgphMAJheg");
	this.shape_870.setTransform(2.2,86.9);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.lf(["rgba(101,113,113,0.314)","rgba(255,255,255,0.541)"],[0,1],-3.9,-23.7,-3.9,22.8).s().p("AhnC2IgLgPIgWghIAAgBQgphMAJheIAAAAQAJhqA0guQAmghA7ADQBQAvAoAwIADADQA5BCABA+QABA3gnAyQgVAbghAaIgwAhIgFAEQgaAQgYACIgCAAIgFAAQgoAAgggmg");
	this.shape_871.setTransform(2.2,86.9);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACqAHQAAA1gnAzQgWAbghAaIg0AlQgaARgZACQgqADgigrIgggwQgphMAIheQAJhrA0gsQAmghA9ADIAIABQBHAxApAwQA5BDABA9g");
	this.shape_872.setTransform(2.3,96.1);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.1,-23.8,-4.1,22.8).s().p("AhnC0IgggwQgphMAIheQAJhrA0gsQAmghA9ADIAIABQBHAxApAwQA5BDABA9QAAA1gnAzQgWAbghAaIg0AlQgaARgZACIgFAAQgnAAgggog");
	this.shape_873.setTransform(2.3,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_829},{t:this.shape_828}]}).to({state:[{t:this.shape_831},{t:this.shape_830}]},1).to({state:[{t:this.shape_833},{t:this.shape_832}]},1).to({state:[{t:this.shape_835},{t:this.shape_834}]},1).to({state:[{t:this.shape_837},{t:this.shape_836}]},1).to({state:[{t:this.shape_839},{t:this.shape_838}]},1).to({state:[{t:this.shape_841},{t:this.shape_840}]},1).to({state:[{t:this.shape_843},{t:this.shape_842}]},1).to({state:[{t:this.shape_845},{t:this.shape_844}]},1).to({state:[{t:this.shape_847},{t:this.shape_846}]},1).to({state:[{t:this.shape_849},{t:this.shape_848}]},1).to({state:[{t:this.shape_851},{t:this.shape_850}]},1).to({state:[{t:this.shape_853},{t:this.shape_852}]},1).to({state:[{t:this.shape_855},{t:this.shape_854}]},1).to({state:[{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_859},{t:this.shape_858}]},1).to({state:[{t:this.shape_861},{t:this.shape_860}]},1).to({state:[{t:this.shape_863},{t:this.shape_862}]},1).to({state:[{t:this.shape_865},{t:this.shape_864}]},1).to({state:[{t:this.shape_867},{t:this.shape_866}]},1).to({state:[{t:this.shape_869},{t:this.shape_868}]},1).to({state:[{t:this.shape_871},{t:this.shape_870}]},1).to({state:[{t:this.shape_873},{t:this.shape_872}]},1).to({state:[]},1).wait(99));

	// 
	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhcgUQA8AUAOABQBmgEA+g+IArgpQgNCMhTBeQhTBdhhhGQhkhGgBhNQgBhLAHhtQAeCLA8AVg");
	this.shape_874.setTransform(25.1,149.5);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("rgba(0,0,0,0.251)").s().p("AhXCXQhkhGgBhNQgBhLAHhtQAeCLA8AVQA8AUAOABQBmgEA+g+IArgpQgNCMhTBeQgvA1gzAAQgoAAgqgeg");
	this.shape_875.setTransform(25.1,149.5);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai9ANQAChKATh6QARCYA9AVQA8ATAOABQBpACA4g5QAZgcAUgYQgMCMhdBaQhbBahchDQhdhEAChLg");
	this.shape_876.setTransform(22.3,158.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("rgba(0,0,0,0.251)").s().p("AhiCcQhdhEAChLQAChKATh6QARCYA9AVQA8ATAOABQBpACA4g5IAtg0QgMCMhdBaQg2AzgzAAQgnAAgngcg");
	this.shape_877.setTransform(22.3,158.8);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+AVQAEhJAgiHQAFClA8AVQA8ATAOABQBtAKAyg3QAdgkATgaQgNCMhnBWQhkBWhVhAQhVhBAEhKg");
	this.shape_878.setTransform(19.5,168.2);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("rgba(0,0,0,0.251)").s().p("AhtCgQhVhBAEhKQAEhJAgiHQAFClA8AVQA8ATAOABQBtAKAyg3QAdgkATgaQgNCMhnBWQg6AygzAAQgoAAgkgcg");
	this.shape_879.setTransform(19.5,168.2);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/AdQAGhIAtiTQgICxA8ATQA8AVAOACQBxARAsg0QAggsASgcQgNCMhwBSQhvBShOg+QhNg+AHhJg");
	this.shape_880.setTransform(16.7,177.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("rgba(0,0,0,0.251)").s().p("Ah5CkQhNg+AHhJQAGhIAtiTQgICxA8ATQA8AVAOACQBxARAsg0QAggsASgcQgNCMhwBSQhAAvg0AAQgnAAgigbg");
	this.shape_881.setTransform(16.7,177.5);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADDhFQgNCMh6BOQh5BOhGg6QhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfg");
	this.shape_882.setTransform(13.8,186.8);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("rgba(0,0,0,0.251)").s().p("AiDCpQhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfQgNCMh6BOQhEAtg1AAQgoAAgegZg");
	this.shape_883.setTransform(13.8,186.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_875},{t:this.shape_874}]},38).to({state:[{t:this.shape_877},{t:this.shape_876}]},1).to({state:[{t:this.shape_879},{t:this.shape_878}]},1).to({state:[{t:this.shape_881},{t:this.shape_880}]},1).to({state:[{t:this.shape_883},{t:this.shape_882}]},1).to({state:[]},1).wait(79));

	// 
	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhdB4QgpgtgZg0QgkhJgBhaQAKAYAQARQAqAxArAZQBUAvBTgoQAegPAfgbQAbgXAbghIgWBbQgJAZgKAWQg+CFh3gQQgggEgkgPg");
	this.shape_884.setTransform(15.2,124.5);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("rgba(0,0,0,0.251)").s().p("AgZCLQgggEgkgPQgpgtgZg0QgkhJgBhaQAKAYAQARQAqAxArAZQBUAvBTgoQAegPAfgbQAbgXAbghIgWBbQgJAZgKAWQg3B3hlAAQgMAAgNgCg");
	this.shape_885.setTransform(15.2,124.5);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBiJQAKAUAPAOQAVAWAXAPQASARASAMQA8AnA7gJQAWgEAWgJQAsgYATgPQAJgIAJgIQAJgIAIgJQAKgKALgLQgDASgEASIgIAqQgBACAAABQgIAZgJATQgvBrhWAQQgVAEgWgCQgKgBgLgCQgXgDgZgKQgZgZgTgcQgPgUgLgWQgcgzgHg9QgDgZgBgag");
	this.shape_886.setTransform(15.7,126.8);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("rgba(0,0,0,0.251)").s().p("AgPCJIgVgDQgXgDgZgKQgZgZgTgcQgPgUgLgWQgcgzgHg9QgDgZgBgaQAKAUAPAOQAVAWAXAPQASARASAMQA8AnA7gJQAWgEAWgJQAsgYATgPIASgQIARgRIAVgVIgHAkIgIAqIgBADQgIAZgJATQgvBrhWAQQgOADgOAAIgPgBg");
	this.shape_887.setTransform(15.7,126.8);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai9iGQAJAQANAKQAUASAVAKQARASARANQA5AtA7gJQAWgDAVgIQAtgVAUgOQAKgHAJgJQAJgHAIgIQALgKALgLQgCAPgBAQIgEAjQgBABAAABQgHAZgKAUQgsBqhUAWQgWAFgVgBQgKAAgLgBQgXgDgZgIQgagXgVgcQgPgUgMgWQgegzgHg9QgDgZAAgag");
	this.shape_888.setTransform(16.2,129.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("rgba(0,0,0,0.251)").s().p("AgGCGIgVgBQgXgDgZgIQgZgXgWgcQgPgUgLgWQgfgzgHg9QgCgZgBgaQAJAQAOAKQATASAVAKQARASARANQA5AtA7gJQAWgDAVgIQAtgVAUgOIATgQIARgPIAWgVIgEAfIgDAjIgBACQgHAZgJAUQgtBqhUAWQgUAFgTAAIgEgBg");
	this.shape_889.setTransform(16.2,129.1);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6iDQAJAMAMAHQASANATAGQAQASAQAOQA3AxA6gGQAXgCAVgGQAtgTAUgOQAKgGAKgIQAJgHAJgIQALgKALgLQABANgBANIAAAcQAAABAAABQgHAZgJAWQgqBphTAaQgVAHgXAAQgIAAgKAAQgYgBgZgIQgbgWgWgcQgQgTgMgVQghg0gHg8QgCgZgBgbg");
	this.shape_890.setTransform(16.6,131.5);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("rgba(0,0,0,0.251)").s().p("AgRCDQgYAAgZgJQgbgVgWgcQgQgTgMgWQghgzgHg8QgCgagBgaQAJAMAMAHQASANATAFQAQATAQAOQA3AxA6gGQAXgCAVgHQAtgTAUgNIAUgPIASgOIAWgVIAAAZIAAAdIAAACQgHAZgJAWQgqBphTAZQgVAIgXAAIgSgBg");
	this.shape_891.setTransform(16.6,131.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6iBQAIAIALADQARAIARABQAPAUAQAOQA0A3A4gFQAXAAAVgGQAvgQAUgMQAKgHALgHQAJgHAJgIQAMgJALgLQACALACAJIADAWQABABAAAAQgHAagIAWQgoBphRAfQgVAIgXACQgIABgLAAQgXAAgZgIQgcgTgYgcQgRgTgNgVQgkg0gFg8QgCgagBgag");
	this.shape_892.setTransform(17.5,133.9);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("rgba(0,0,0,0.251)").s().p("Ag8B6QgcgTgZgcQgQgTgNgVQgjg0gGg8QgCgagBgaQAIAIALADQARAIARABQAPAUAPAOQA0A3A5gFQAXAAAVgGQAugQAVgMIAUgOIATgPIAXgUIADAUIAEAWIABABQgHAagIAWQgoBphRAfQgVAIgXACIgTABQgXAAgZgIg");
	this.shape_893.setTransform(17.5,133.9);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6h/QAHAFAKgBQAPADAQgDQAOAUAOAQQAyA6A5gCQAWABAUgEQAwgOAUgMQALgGALgHQAJgHAKgHQAMgJALgLQAFAIADAHIAHAPQABABAAAAQgGAZgIAXQgmBphQAkQgUAKgWADQgKABgJABQgYABgZgHQgdgSgZgbQgSgTgNgUQgmg0gFg8QgCgagBgbg");
	this.shape_894.setTransform(18.3,136.3);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("rgba(0,0,0,0.251)").s().p("Ag3B6QgdgSgZgbQgSgTgNgUQgmg0gFg8QgCgagBgbQAHAFAKgBQAPADAQgDQAOAUAOAQQAyA6A5gCQAWABAUgEQAwgOAUgMQALgGALgHIATgOIAXgUIAIAPIAHAPIABABQgGAZgIAXQgmBphQAkQgUAKgWADIgTACIgGAAQgVAAgWgGg");
	this.shape_895.setTransform(18.3,136.3);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6h2QAGAAAJgEQANgCAOgIQANAVAOARQAuA/A5AAQAWACAUgDQAxgLAVgLQALgGALgHQAKgGAJgHQANgJAMgKQAGAFAFAEIALAJQABAAAAAAQgFAZgIAXQgkBphOAqQgUAKgWAFQgKACgIABQgZACgZgGQgdgQgcgbQgSgTgOgUQgog0gFg8QgCgaAAgag");
	this.shape_896.setTransform(19.2,138.1);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("rgba(0,0,0,0.251)").s().p("AgzCAQgdgQgbgbQgSgTgOgUQgog0gFg8QgCgaAAgaQAGAAAJgEQANgCAOgIQANAVAOARQAuA/A4AAQAXACAUgDQAwgLAWgLQALgGAKgHIAUgNIAYgTIALAJIAMAJIABAAQgFAZgIAXQgkBphOAqQgVAKgVAFIgSADIgOABQgSAAgTgFg");
	this.shape_897.setTransform(19.2,138.1);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6hsQAFgEAIgHQAMgHAMgMQAMAWAMARQAsBDA4ADQAZADASgCQAxgJAVgKQAMgFALgGQAKgGAKgHQANgJAMgKQAIADAGABIAQACQABAAAAAAQgFAZgHAXQgiBqhMAuQgUAMgWAFQgKADgKACQgWAEgagGQgegOgdgcQgTgSgOgTQgrg3gFg5QgBgaAAgbg");
	this.shape_898.setTransform(20,139.7);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("rgba(0,0,0,0.251)").s().p("AgtCIQgegOgdgcQgTgSgOgTQgrg3gFg5IgBg1IANgLQAMgHAMgMQAMAWAMARQAsBDA4ADQAZADASgCQAxgJAVgKIAXgLIAUgNQANgJAMgKQAIADAGABIAQACIABAAQgFAZgHAXQgiBqhMAuQgUAMgWAFIgUAFQgIABgKAAQgPAAgPgDg");
	this.shape_899.setTransform(20,139.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6hiQADgIAHgLQALgLALgRQAKAWALASQAqBIA3AGQAZAEASgBQAygGAWgKQAMgFALgFQALgGAKgHQANgIANgKQAJABAIgDIAUgEQABgBABAAQgFAagHAXQgfBqhLAzQgUANgVAHQgKADgKACQgXAGgagGQgfgMgegbQgUgSgPgTQgtg3gFg5QAAgaAAgbg");
	this.shape_900.setTransform(20.9,141.3);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("rgba(0,0,0,0.251)").s().p("AgpCPQgegMgfgbQgTgSgPgTQgtg3gEg5IgBg1IAKgTQALgLAKgRQALAWAMASQApBIA2AGQAaAEARgBQAzgGAVgKIAYgKIAUgNQAOgIAMgKQAKABAIgDIAUgEIACgBQgGAagGAXQggBqhLAzQgTANgVAHIgUAFQgLADgNAAQgMAAgOgDg");
	this.shape_901.setTransform(20.9,141.3);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hYQAEgLAGgPQAIgQAJgWQAKAYAKATQAnBMA2AIQAaAFATABQAxgFAWgIQANgFALgFQALgGAKgGQAOgIANgJQAMgDAJgFIAYgLQABgBABAAQgEAZgHAYQgdBqhKA4QgTAPgVAIQgKAEgKACQgXAHgagFQgggLgfgaQgVgSgPgTQgwg2gEg5QgBgbAAgbg");
	this.shape_902.setTransform(21.7,142.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCXQgggLgfgaQgVgSgPgTQgwg2gEg5IgBg2IAKgaIARgmQAKAYAKATQAnBMA2AIQAaAFATABQAxgFAWgIIAYgKIAVgMQAOgIANgJQAMgDAJgFIAYgLIACgBQgEAZgHAYQgdBqhKA4QgTAPgVAIIgUAGQgOAEgOAAQgKAAgLgCg");
	this.shape_903.setTransform(21.7,142.9);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hOQACgPAFgTQAHgVAHgaQAJAYAKAUQAkBRA0AKQAaAHATABQAygBAXgIQANgEAMgFQALgGALgFQAOgIANgKQAOgEALgIIAbgSQACgBABgBQgEAagFAXQgcBrhIA9QgTAQgUAJQgKAFgKADQgYAIgagFQghgIghgbQgVgRgRgSQgyg3gDg5QAAgbAAgbg");
	this.shape_904.setTransform(22.6,144.6);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("rgba(0,0,0,0.251)").s().p("AgeCeQgggIgigbQgVgRgQgSQgzg3gCg5IgBg2QACgPAFgTIAOgvQAJAYAKAUQAkBRA0AKQAaAHAUABQAygBAWgIIAZgJIAWgLQAOgIANgKQAOgEALgIIAbgSIADgCQgEAagGAXQgbBrhIA9QgTAQgVAJQgJAFgKADQgQAFgPAAQgJAAgKgCg");
	this.shape_905.setTransform(22.6,144.6);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hFQACgTADgVQAFgaAGgfQAIAZAJAVQAhBVAzAMQAbAIATADQAzABAXgHQANgEANgEQALgFALgGQAPgHANgKQAPgHANgLIAggZQABgBABgBQgDAagFAYQgaBrhGBCQgTASgUAKQgKAFgKAEQgZAJgZgEQghgHgjgbQgWgRgRgRQg1g3gCg5QAAgbAAgcg");
	this.shape_906.setTransform(23.4,146.2);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("rgba(0,0,0,0.251)").s().p("AgZCmQghgHgjgbQgWgRgRgRQg1g3gCg5IAAg3IAFgoIALg5QAIAZAJAVQAhBVAzAMQAbAIATADQAzABAXgHIAagIIAWgLQAPgHANgKQAPgHANgLIAggZIACgCQgDAagFAYQgaBrhGBCQgTASgUAKQgKAFgKAEQgRAGgRAAIgQgBg");
	this.shape_907.setTransform(23.4,146.2);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8g7QABgXADgZQADgfAEgjQAHAaAIAWQAfBZAyAPQAbAJATAEQAzADAYgGQANgDAOgFQALgEAMgFQAPgHANgKQARgKAPgNIAkggQABgBACgCQgDAagFAZQgYBqhFBIQgSATgTALQgKAGgKAEQgaAKgZgDQgigFglgaQgWgRgSgRQg3g3gCg5QAAgbAAgcg");
	this.shape_908.setTransform(24.3,147.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("rgba(0,0,0,0.251)").s().p("AgUCtQgigFglgaQgWgRgRgRQg4g3gCg5IAAg3IAEgwIAIhCQAGAaAIAWQAfBZAyAPQAcAJASAEQA0ADAXgGIAbgIIAWgJQAQgHANgKQARgKAPgNIAjggIADgDQgDAagEAZQgYBqhFBIQgSATgUALQgJAGgKAEQgVAIgSAAIgMgBg");
	this.shape_909.setTransform(24.3,147.9);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACShBIArgpQgNCMhTBeQgbAfgeANQg5AahCgvQhkhGgBhNIAAg1QACg7AEhIQAeCLA8AVQA8AUAOABQAogBAkgLIAXgJQAlgRAcgcg");
	this.shape_910.setTransform(25.1,149.5);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("rgba(0,0,0,0.251)").s().p("AhXCXQhkhGgBhNIAAg1QACg7AEhIQAeCLA8AVQA8AUAOABQAogBAkgLIAXgJQAlgRAcgcIArgpQgNCMhTBeQgbAfgeANQgVAJgUAAQgoAAgqgeg");
	this.shape_911.setTransform(25.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_885},{t:this.shape_884}]},25).to({state:[{t:this.shape_887},{t:this.shape_886}]},1).to({state:[{t:this.shape_889},{t:this.shape_888}]},1).to({state:[{t:this.shape_891},{t:this.shape_890}]},1).to({state:[{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_895},{t:this.shape_894}]},1).to({state:[{t:this.shape_897},{t:this.shape_896}]},1).to({state:[{t:this.shape_899},{t:this.shape_898}]},1).to({state:[{t:this.shape_901},{t:this.shape_900}]},1).to({state:[{t:this.shape_903},{t:this.shape_902}]},1).to({state:[{t:this.shape_905},{t:this.shape_904}]},1).to({state:[{t:this.shape_907},{t:this.shape_906}]},1).to({state:[{t:this.shape_909},{t:this.shape_908}]},1).to({state:[{t:this.shape_911},{t:this.shape_910}]},1).to({state:[]},1).wait(83));

	// 
	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAhB2QhXA+g4gkQg4gkgEhIIABgzQAGg8AXhRQAnEEBqguIAXgMQA4glBKhvIANAWQguCAhSA/g");
	this.shape_912.setTransform(1.2,112.6);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("rgba(0,0,0,0.251)").s().p("AhuCQQg4gkgEhIIACgzQAFg8AXhRQAnEEBqguIAXgMQA4glBJhvIAOAWQguCAhSA/IgKAHQg2AngrAAQgZAAgVgNg");
	this.shape_913.setTransform(1.2,112.6);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AilgbQAEgKAGgMQAUgVAhgtQBGDBBzhSQArAHAkg2IAEAVQg4ByhjAYIgJACQhLAWgtgwQgsgrgDhEg");
	this.shape_914.setTransform(4.5,117.1);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("rgba(0,0,0,0.251)").s().p("Ah2BUQgsgrgDhEIAKgWQAUgVAhgtQBGDBBzhSQArAHAkg2IAEAVQg4ByhjAYIgJACQgWAGgWAAQgtAAgfggg");
	this.shape_915.setTransform(4.5,117.1);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AijhjQAHAHAKACQAkATAqgLQBkCAB9h6QAJBEgDABIgFATQhDBlhygPIgIgDQhAgTgjg7QgfgwgChEg");
	this.shape_916.setTransform(8.1,122.4);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("rgba(0,0,0,0.251)").s().p("AgXBiIgIgDQhAgTgjg7QgfgwgChEQAHAHAKACQAkATAqgLQBkCAB9h6QAJBEgDABIgFATQg6BYhfAAQgNAAgPgCg");
	this.shape_917.setTransform(8.1,122.4);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhkBwQg0g8gYhFQgTg5gBhCQAKAYAQARQAzA6AzAZQCDA8CGigIgFAYQgWBlgoA6IgPAUQhMBXiEg2g");
	this.shape_918.setTransform(15.2,124.5);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("rgba(0,0,0,0.251)").s().p("AhdB4IgHgIQg0g8gYhFQgTg5gBhCQAKAYAQARQAzA6AzAZQCDA8CGigIgFAYQgWBlgoA6IgPAUQgvA2hEAAQgqAAgzgVg");
	this.shape_919.setTransform(15.2,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_913},{t:this.shape_912}]},22).to({state:[{t:this.shape_915},{t:this.shape_914}]},1).to({state:[{t:this.shape_917},{t:this.shape_916}]},1).to({state:[{t:this.shape_919},{t:this.shape_918}]},1).to({state:[]},1).wait(96));

	// Layer 10
	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACngfIASgiIAGgQIgIAgQgKAqgTAlIgNAZIgYAmQgYAhgcAUQhCAvhNgOQgWgFgWgJQgngRgQg3IgHgiQgLhFAJhHIANhkQgBA6AKAqIADAOQATBGBFAbIAQAIQAZAKA7AAQBPAAAogwQAMgMAJgTg");
	this.shape_920.setTransform(-0.3,-87.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCzQgWgFgWgJQgngRgQg3IgHgiQgLhFAJhHIANhkQgBA6AKAqIADAOQATBGBFAbIAQAIQAZAKA7AAQBPAAAogwQAMgMAJgTIASgiIAGgQIgIAgQgKAqgTAlIgNAZIgYAmQgYAhgcAUQg0Akg3AAQgSAAgSgDg");
	this.shape_921.setTransform(-0.3,-87.9);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai5hOQAGgxAHgzQgBA2AKAmQAWBVBDAZQAoAUA5ABQBNACApgvQANgNAJgTIASgiQAEgJAEgJIgHAfQgJApgSAkIgOAbQgOAVgOAUQgXAggcATQhBAvhLgPQgVgEgWgJQgmgQgPg1QgFgSgEgUQgKhBAIhEg");
	this.shape_922.setTransform(-0.3,-78.6);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCvQgVgEgWgJQgmgQgPg1QgFgSgEgUQgKhBAIhEIANhkQgBA2AKAmQAWBVBDAZQAoAUA5ABQBNACApgvQANgNAJgTIASgiIAIgSIgHAfQgJApgSAkIgOAbIgcApQgXAggcATQgzAkg2AAQgRAAgSgEg");
	this.shape_923.setTransform(-0.3,-78.6);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai4hLQAGgxAGgyQAAAwALAiQAVBUBAAaQAnAWA3ACQBMAFAqgvQANgOAKgTIATgiQAFgKAFgKIgGAeQgKApgRAiIgPAdQgOAXgRAUQgWAfgcATQhAAuhJgOQgVgFgWgJQgjgPgPgyQgIgTgDgWQgKg/AIhAg");
	this.shape_924.setTransform(-0.2,-69.2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCsQgVgFgWgJQgjgPgPgyQgIgTgDgWQgKg/AIhAIAMhjQAAAwALAiQAVBUBAAaQAnAWA3ACQBMAFAqgvQANgOAKgTIATgiIAKgUIgGAeQgKApgRAiIgPAdQgOAXgRAUQgWAfgcATQgyAjg1AAQgQAAgSgDg");
	this.shape_925.setTransform(-0.2,-69.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3hIQAGgwAHgzQAAAsAKAeQAVBSA+AcQAmAXA1ADQBKAHArguQAOgOALgTIATgjQAGgKAGgNIgFAeQgJAogRAiIgQAeQgQAZgSAVQgWAegbATQg/AshHgNQgVgFgVgJQgigOgOgwQgKgUgEgYQgJg8AHg9g");
	this.shape_926.setTransform(-0.2,-59.9);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCpQgVgFgVgJQgigOgOgwQgKgUgEgYQgJg8AHg9IANhjQAAAsAKAeQAVBSA+AcQAmAXA1ADQBKAHArguQAOgOALgTIATgjIAMgXIgFAeQgJAogRAiIgQAeQgQAZgSAVQgWAegbATQgyAig0AAQgQAAgQgDg");
	this.shape_927.setTransform(-0.2,-59.9);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2hFQAFgwAHgzQABAoAKAaQAVBRA7AcQAlAZAzAEQBJAKAsguQAPgPALgTIAUgjQAHgLAHgOIgEAeQgKAmgQAhIgQAgQgRAbgUAWQgXAdgaASQg+ArhFgNQgVgEgUgJQgggOgOgtQgMgVgEgbQgJg4AHg6g");
	this.shape_928.setTransform(-0.2,-50.5);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("rgba(0,0,0,0.251)").s().p("AhNClQgVgEgUgJQgggOgOgtQgMgVgEgbQgJg4AHg6QAFgwAHgzQABAoAKAaQAVBRA7AcQAlAZAzAEQBJAKAsguQAPgPALgTIAUgjIAOgZIgEAeQgKAmgQAhIgQAgQgRAbgUAWQgXAdgaASQgxAigyAAQgQAAgQgEg");
	this.shape_929.setTransform(-0.2,-50.5);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1hCQAFgvAHgzQABAjALAVQATBQA5AeQAkAaAyAGQBGALAugtQAPgQAMgTIAVgiQAHgNAJgPIgEAdQgJAlgQAgIgRAhQgSAegWAXQgWAcgaARQg9ArhDgNQgUgFgVgIQgegNgMgrQgQgWgDgdQgJg1AHg3g");
	this.shape_930.setTransform(-0.1,-41.2);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCiQgUgFgVgIQgegNgMgrQgQgWgDgdQgJg1AHg3QAFgvAHgzQABAjALAVQATBQA5AeQAkAaAyAGQBGALAugtQAPgQAMgTIAVgiIAQgcIgEAdQgJAlgQAgIgRAhQgSAegWAXQgWAcgaARQgwAhgxAAQgPAAgQgDg");
	this.shape_931.setTransform(-0.1,-41.2);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai0g+QAEgvAHgzQACAeALARQATBPA2AgQAkAbAvAGQBFAPAvguQAQgQANgUIAUgiQAJgOAJgQIgCAdQgJAkgQAhIgSAhQgTAfgYAYQgVAbgaARQg8AphBgMQgUgFgUgIQgcgMgMgpQgSgWgDggQgIgyAGgzg");
	this.shape_932.setTransform(-0.1,-31.9);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCfQgUgFgUgIQgcgMgMgpQgSgWgDggQgIgyAGgzQAEgvAHgzQACAeALARQATBPA2AgQAkAbAvAGQBFAPAvguQAQgQANgUIAUgiIASgeIgCAdQgJAkgQAhIgSAhQgTAfgYAYQgVAbgaARQgvAfgvAAQgPAAgQgCg");
	this.shape_933.setTransform(-0.1,-31.9);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aizg7QAEgvAIgzQABAaALANQATBOA0AhQAiAcAwAHQBCARAvgtQARgRANgTIAVgjQAKgOAKgTIgBAdQgJAjgPAgIgTAjQgUAhgaAZQgVAagZARQg7Ang/gMQgUgEgTgJQgbgLgMgmQgUgXgDgiQgIgvAGgwg");
	this.shape_934.setTransform(-0.1,-22.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("rgba(0,0,0,0.251)").s().p("AhMCbQgUgEgTgJQgbgLgMgmQgUgXgDgiQgIgvAGgwQAEgvAIgzQABAaALANQATBOA0AhQAiAcAwAHQBCARAvgtQARgRANgTIAVgjQAKgOAKgTIgBAdQgJAjgPAgIgTAjQgUAhgaAZQgVAagZARQguAegvAAQgOAAgPgDg");
	this.shape_935.setTransform(-0.1,-22.5);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aiyg4QAEguAHgzQACAVAMAJQASBMAxAiQAiAeAtAJQBAATAxgtQARgRAPgUIAVgiQALgQALgUIAAAcQgJAigPAgIgTAjQgWAkgbAZQgWAZgYARQg6Ang9gMQgTgFgUgIQgZgKgKgkQgXgYgDglQgHgrAFgtg");
	this.shape_936.setTransform(0,-13.2);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("rgba(0,0,0,0.251)").s().p("AhMCYQgTgFgUgIQgZgKgKgkQgXgYgDglQgHgrAFgtQAEguAHgzQACAVAMAJQASBMAxAiQAiAeAtAJQBAATAxgtQARgRAPgUIAVgiIAWgkIAAAcQgJAigPAgIgTAjQgWAkgbAZQgWAZgYARQgsAdguAAQgPAAgOgCg");
	this.shape_937.setTransform(0,-13.2);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aixg1QADguAIgzQACARAMAEQASBLAvAkQAgAfAsAKQA+AVAygsQASgSAPgUIAWgiQALgRANgVIAAAbQgJAhgOAfIgUAlQgXAmgdAaQgVAYgYAQQg5Amg7gLQgTgFgTgIQgXgKgKghQgZgZgEgnQgGgoAFgqg");
	this.shape_938.setTransform(0,-3.8);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("rgba(0,0,0,0.251)").s().p("AhMCVQgTgFgTgIQgXgKgKghQgZgZgEgnQgGgoAFgqQADguAIgzQACARAMAEQASBLAvAkQAgAfAsAKQA+AVAygsQASgSAPgUIAWgiIAYgmIAAAbQgJAhgOAfIgUAlQgXAmgdAaQgVAYgYAQQgrAdguAAQgOAAgNgCg");
	this.shape_939.setTransform(0,-3.8);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgyQACgtAIg0QADANALAAQASBKAsAkQAgAhAqALQA8AYA0gtQASgSAQgUIAWgiQAMgSAOgXIACAcQgJAggOAdIgVAnQgYAogfAbQgVAXgXAQQg4Akg6gLQgSgFgSgHQgWgJgJgfQgcgagDgqQgGglAFgmg");
	this.shape_940.setTransform(0.1,5.5);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCRQgSgFgSgHQgWgJgJgfQgcgagDgqQgGglAFgmQACgtAIg0QADANALAAQASBKAsAkQAgAhAqALQA8AYA0gtQASgSAQgUIAWgiQAMgSAOgXIACAcQgJAggOAdIgVAnQgYAogfAbQgVAXgXAQQgrAcgsAAQgOAAgNgDg");
	this.shape_941.setTransform(0.1,5.5);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgvQACgtAIgzQADAIAMgEQARBIAqAlQAfAkAoALQA7AaA0gsQATgSAQgVIAXgiQAOgTAOgYIADAbQgJAfgNAdIgWAoQgZAqghAcQgVAWgXAPQg2Akg4gLQgSgFgSgHQgUgJgIgcQgegagEgtQgFgiAEgjg");
	this.shape_942.setTransform(0.2,14.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCOQgSgFgSgHQgUgJgIgcQgegagEgtQgFgiAEgjQACgtAIgzQADAIAMgEQARBIAqAlQAfAkAoALQA7AaA0gsQATgSAQgVIAXgiQAOgTAOgYIADAbQgJAfgNAdIgWAoQgZAqghAcQgVAWgXAPQgpAbgrAAQgNAAgNgCg");
	this.shape_943.setTransform(0.2,14.9);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgqQACgsAIgzQADADAMgIQARBHAoAmQAdAlAmANQA5AcA2gtQATgSARgUIAYgiQAOgUAQgaIADAaQgIAegNAcIgWAqQgbAsgjAdQgUAVgXAPQg1Aig2gKQgSgFgRgHQgSgIgIgaQgggbgEgvQgFgeAEghg");
	this.shape_944.setTransform(0.3,24);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCNQgSgFgRgHQgSgIgIgaQgggbgEgvQgFgeAEghQACgsAIgzQADADAMgIQARBHAoAmQAdAlAmANQA5AcA2gtQATgSARgUIAYgiQAOgUAQgaIADAaQgIAegNAcIgWAqQgbAsgjAdQgUAVgXAPQgoAagqAAQgNAAgMgCg");
	this.shape_945.setTransform(0.3,24);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgiQACgsAIgzQADgCANgMQAQBGAlAnQAdAnAkANQA3AfA3guQAUgRASgVIAYgiQAPgVARgbIAFAaQgJAdgMAbIgXAsQgcAuglAdQgUAUgWAPQg1Ahg0gKQgRgFgRgHQgQgHgHgXQgjgcgEgyQgEgbADgdg");
	this.shape_946.setTransform(0.4,32.9);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCOQgRgFgRgHQgQgHgHgXQgjgcgEgyQgEgbADgdQACgsAIgzQADgCANgMQAQBGAlAnQAdAnAkANQA3AfA3guQAUgRASgVIAYgiQAPgVARgbIAFAaQgJAdgMAbIgXAsQgcAuglAdQgUAUgWAPQgoAZgoAAQgNAAgMgCg");
	this.shape_947.setTransform(0.4,32.9);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugbQABgrAIg0QAEgFAMgRQAQBFAjAoQAbAoAjAPQA2AhA4guQAUgRATgVIAYgiQAQgWASgdIAGAaQgJAcgLAaIgYAtQgeAwgmAfQgUATgVAOQg0AggygKQgRgFgQgHQgPgGgHgVQglgdgEg0QgEgYAEgag");
	this.shape_948.setTransform(0.5,41.8);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCPQgRgFgQgHQgPgGgHgVQglgdgEg0QgEgYAEgaQABgrAIg0IAQgWQAQBFAjAoQAbAoAjAPQA2AhA4guQAUgRATgVIAYgiQAQgWASgdIAGAaQgJAcgLAaIgYAtQgeAwgmAfQgUATgVAOQgoAYgnAAQgMAAgLgCg");
	this.shape_949.setTransform(0.5,41.8);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugTQABgrAIg0QAEgKANgVQAQBEAgApQAaAqAhAQQA0AjA5gtQAVgSAUgWIAYghQARgYATgdIAHAZQgIAagLAaIgZAuQgfAygoAgQgUASgVANQgyAggxgKQgQgFgQgGQgNgGgGgSQgngegEg3QgEgWADgVg");
	this.shape_950.setTransform(0.6,50.7);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCQIgggLQgNgGgGgSQgngegEg3QgEgWADgVQABgrAIg0QAEgKANgVQAQBEAgApQAaAqAhAQQA0AjA5gtIApgoIAYghQARgYATgdIAHAZQgIAagLAaIgZAuQgfAygoAgQgUASgVANQgmAYgmAAQgLAAgMgCg");
	this.shape_951.setTransform(0.6,50.7);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitgMQAAgqAJg0QAEgPANgZQAPBCAeAqQAZAsAfARQAzAmA6guQAVgSAVgVIAZgiQASgYAUggIAHAZQgIAagKAYIgaAwQggA0gqAhQgTARgVANQgxAegvgJQgPgFgQgHQgMgFgFgPQgqgfgEg5QgDgUADgRg");
	this.shape_952.setTransform(0.6,59.6);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCRIgfgMQgMgFgFgPQgqgfgEg5QgDgUADgRQAAgqAJg0QAEgPANgZQAPBCAeAqQAZAsAfARQAzAmA6guIAqgnIAZgiQASgYAUggIAHAZQgIAagKAYIgaAwQggA0gqAhQgTARgVANQglAXglAAQgLAAgLgCg");
	this.shape_953.setTransform(0.6,59.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitgEQAAgqAJg0QAFgTANgeQAPBCAbAqQAYAuAdASQAzApA5guQAWgUAWgUIAZgiQATgZAVghIAJAYQgJAZgKAXIgaAyQghA2gsAhQgTAQgUANQgxAdgsgJQgPgFgQgGQgKgEgEgNQgsgggEg7QgDgRACgOg");
	this.shape_954.setTransform(0.7,68.5);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCSIgfgLQgKgEgEgNQgsgggEg7QgDgRACgOQAAgqAJg0QAFgTANgeQAPBCAbAqQAYAuAdASQAzApA5guIAsgoIAZgiQATgZAVghIAJAYQgJAZgKAXIgaAyQghA2gsAhQgTAQgUANQglAWgjAAQgLAAgKgCg");
	this.shape_955.setTransform(0.7,68.5);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisABQgBgnAJg0QAFgYAOgiQAOBBAZArQAXAwAbATQAxArA7guQAWgVAWgUIAaghQAUgbAWgiIAKAYQgIAYgKAWIgbAzQgiA5guAiQgTAPgUAMQgvAcgqgJQgPgFgQgGQgIgDgDgLQgvgggEg+QgCgOACgNg");
	this.shape_956.setTransform(0.8,77.4);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCTIgfgLQgIgDgDgLQgvgggEg+QgCgOACgNQgBgnAJg0QAFgYAOgiQAOBBAZArQAXAwAbATQAxArA7guIAsgpIAaghQAUgbAWgiIAKAYQgIAYgKAWIgbAzQgiA5guAiQgTAPgUAMQgjAVgiAAQgKAAgKgCg");
	this.shape_957.setTransform(0.8,77.4);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirAJQgBgnAIg0QAGgdAOgmQAOBAAWAsQAWAxAZAUQAwAuA8guQAXgVAXgUIAagiQAVgbAXgkIAKAYQgIAWgJAWIgcA1QgjA6gwAjQgSAOgUAMQguAagogIQgPgEgPgHQgGgCgDgIQgxgigEhAQgCgKACgKg");
	this.shape_958.setTransform(0.9,86.3);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCUQgPgEgPgHQgGgCgDgIQgxgigEhAQgCgKACgKQgBgnAIg0QAGgdAOgmQAOBAAWAsQAWAxAZAUQAwAuA8guIAugpIAagiQAVgbAXgkIAKAYIgRAsIgcA1QgjA6gwAjQgSAOgUAMQgjAUggAAQgKAAgJgCg");
	this.shape_959.setTransform(0.9,86.3);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirAQQgBgmAJg1QAGghANgqQAOA+AUAuQAVAzAXAUQAuAwA9gtQAYgWAXgUIAbgiQAWgcAYglIALAXQgHAVgJAVIgdA3QgkA8gyAkQgSANgTALQgtAagngIQgOgFgOgGQgFgCgCgFQg0gigEhDQgBgHABgHg");
	this.shape_960.setTransform(1,95.2);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("rgba(0,0,0,0.251)").s().p("AhQCVIgcgLQgFgCgCgFQg0gigEhDQgBgHABgHQgBgmAJg1QAGghANgqQAOA+AUAuQAVAzAXAUQAuAwA9gtIAvgqIAbgiQAWgcAYglIALAXIgQAqIgdA3QgkA8gyAkIglAYQgiAUggAAQgJAAgJgCg");
	this.shape_961.setTransform(1,95.2);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirAXQgBglAJg1QAGgmAOguQANA9ARAuQAVA1AVAWQAtAyA9gtQAZgWAYgUIAbgiQAXgdAZgnIANAXQgIAUgIAUIgeA4QglA+g0AlQgSAMgSALQgsAYglgHQgOgFgOgGQgDgBgCgDQg2gjgEhFQAAgEAAgEg");
	this.shape_962.setTransform(1.1,104.1);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("rgba(0,0,0,0.251)").s().p("AhQCWIgcgLQgDgBgCgDQg2gjgEhFIAAgIQgBglAJg1QAGgmAOguQANA9ARAuQAVA1AVAWQAtAyA9gtIAxgqIAbgiQAXgdAZgnIANAXIgQAoIgeA4QglA+g0AlIgkAXQgiATgeAAQgJAAgIgCg");
	this.shape_963.setTransform(1.1,104.1);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAeAtIAygtIAcggQAYgeAagoIANAWIgPAmIgeA6QgnBAg2AmIghAVQgtAYgjgHIgbgLIgCgBQg5gkgEhIIAAgBQgCglAJg0QAHgrAOgyIADgJQAKBEAPAwIAFAOQAOAoATAXQArA1A/gtg");
	this.shape_964.setTransform(1.1,112.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("rgba(0,0,0,0.251)").s().p("AhQCcIgbgLIgCgBQg5gkgEhIIAAgBQgCglAJg0QAHgrAOgyIADgJQAKBEAPAwIAFAOQAOAoATAXQArA1A/gtIAygtIAcggQAYgeAagoIANAWIgPAmIgeA6QgnBAg2AmIghAVQgjASgdAAQgIAAgIgBg");
	this.shape_965.setTransform(1.1,112.6);

	this.instance_1 = new lib.Sprite21();
	this.instance_1.setTransform(5.4,-142.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_921},{t:this.shape_920}]}).to({state:[{t:this.shape_923},{t:this.shape_922}]},1).to({state:[{t:this.shape_925},{t:this.shape_924}]},1).to({state:[{t:this.shape_927},{t:this.shape_926}]},1).to({state:[{t:this.shape_929},{t:this.shape_928}]},1).to({state:[{t:this.shape_931},{t:this.shape_930}]},1).to({state:[{t:this.shape_933},{t:this.shape_932}]},1).to({state:[{t:this.shape_935},{t:this.shape_934}]},1).to({state:[{t:this.shape_937},{t:this.shape_936}]},1).to({state:[{t:this.shape_939},{t:this.shape_938}]},1).to({state:[{t:this.shape_941},{t:this.shape_940}]},1).to({state:[{t:this.shape_943},{t:this.shape_942}]},1).to({state:[{t:this.shape_945},{t:this.shape_944}]},1).to({state:[{t:this.shape_947},{t:this.shape_946}]},1).to({state:[{t:this.shape_949},{t:this.shape_948}]},1).to({state:[{t:this.shape_951},{t:this.shape_950}]},1).to({state:[{t:this.shape_953},{t:this.shape_952}]},1).to({state:[{t:this.shape_955},{t:this.shape_954}]},1).to({state:[{t:this.shape_957},{t:this.shape_956}]},1).to({state:[{t:this.shape_959},{t:this.shape_958}]},1).to({state:[{t:this.shape_961},{t:this.shape_960}]},1).to({state:[{t:this.shape_963},{t:this.shape_962}]},1).to({state:[{t:this.shape_965},{t:this.shape_964}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},25).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({y:-1.4},14).to({y:7.5},5).to({y:213},15).to({y:221.9},10).to({y:284.5},5).to({y:297},1).wait(24));

	// Layer 8
	this.instance_2 = new lib.Sprite21();
	this.instance_2.setTransform(5.4,297);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({scaleX:0.8,scaleY:0.8,y:298,alpha:0.672},0).to({scaleX:0.41,scaleY:0.41,y:300,alpha:0},2).to({_off:true},1).wait(55));

	// Layer 6
	this.instance_3 = new lib.Sprite21();
	this.instance_3.setTransform(-11.7,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({scaleX:0.76,scaleY:0.76,x:-13.7,y:272.5,alpha:0.672},0).to({scaleX:0.28,scaleY:0.28,x:-17.7,y:277.1,alpha:0},2).to({_off:true},1).wait(68));

	// Layer 4
	this.instance_4 = new lib.Sprite21();
	this.instance_4.setTransform(21,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23).to({scaleX:0.8,scaleY:0.8,alpha:0.672},0).to({scaleX:0.41,scaleY:0.41,alpha:0},2).to({_off:true},1).wait(53).to({_off:false,scaleX:1,scaleY:1,x:-11.7,y:-81.5,alpha:1},0).to({y:139.9},13).to({y:152.9},5).to({y:253.4},6).to({y:270.1},1).wait(18));

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqIHzIAAvlIURAAIAAPlg");
	var mask_graphics_22 = new cjs.Graphics().p("AqIQUMAAAggnIURAAMAAAAgng");
	var mask_graphics_25 = new cjs.Graphics().p("AqIQyMAAAghjIURAAMAAAAhjg");
	var mask_graphics_38 = new cjs.Graphics().p("AqISjMAAAglFIURAAMAAAAlFg");
	var mask_graphics_42 = new cjs.Graphics().p("AqIWcMAAAgs3IURAAMAAAAs3g");
	var mask_graphics_49 = new cjs.Graphics().p("AqIdKMAAAg6TIURAAMAAAA6Tg");
	var mask_graphics_53 = new cjs.Graphics().p("AqIdzMAAAg7lIURAAMAAAA7lg");
	var mask_graphics_58 = new cjs.Graphics().p("AqIeqMAAAg9TIURAAMAAAA9Tg");
	var mask_graphics_62 = new cjs.Graphics().p("AqIeqMAAAg9TIURAAMAAAA9Tg");
	var mask_graphics_64 = new cjs.Graphics().p("AqIf7MAAAg/1IURAAMAAAA/1g");
	var mask_graphics_66 = new cjs.Graphics().p("AqIf7MAAAg/1IURAAMAAAA/1g");
	var mask_graphics_69 = new cjs.Graphics().p("EgKIAgZMAAAhAxIURAAMAAABAxg");
	var mask_graphics_95 = new cjs.Graphics().p("EgKIA3VMAAAhupIURAAMAAABupg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2,y:-170.1}).wait(22).to({graphics:mask_graphics_22,x:2,y:-15.6}).wait(3).to({graphics:mask_graphics_25,x:2,y:-12.6}).wait(13).to({graphics:mask_graphics_38,x:2,y:-1.3}).wait(4).to({graphics:mask_graphics_42,x:2,y:23.6}).wait(7).to({graphics:mask_graphics_49,x:2,y:66.6}).wait(4).to({graphics:mask_graphics_53,x:2,y:70.7}).wait(5).to({graphics:mask_graphics_58,x:2,y:76.2}).wait(4).to({graphics:mask_graphics_62,x:2,y:80.3}).wait(2).to({graphics:mask_graphics_64,x:2,y:88.3}).wait(2).to({graphics:mask_graphics_66,x:2,y:92.3}).wait(3).to({graphics:mask_graphics_69,x:2,y:95.3}).wait(26).to({graphics:mask_graphics_95,x:2,y:242.1}).wait(27));

	// Layer 2
	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("rgba(255,255,255,0.125)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeIAAgJQAEgjgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_966.setTransform(2.9,255.1);

	this.instance_5 = new lib.Sprite21();
	this.instance_5.setTransform(21,-94.1);
	this.instance_5._off = true;

	this.shape_966.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_966}]}).to({state:[]},96).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},1).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({y:92.4},10).to({y:111},1).wait(13));

	// 
	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("rgba(255,255,255,0)").s().p("EgBcAwqIgNpiIABgcIATlcIAUldQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAWhLIAGgZIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgQgTIgJgLIAAgJQAEgjgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg6sLIgCgcQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA9IqIABAUQgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_967.setTransform(2.9,255.1);
	this.shape_967._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_967).wait(121).to({_off:false},0).wait(1));

	// Layer 1
	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EABQgwyQgSCkgTCTQhMGPBcF8QA6DqBvDUIA9IqIABAUQgyHggvDwIhEEEIgqBSIglCRIAYA4IB/BrIAmE3IgKAiIAcDKQgIBJgZBHQgXBAg4BkQg7BrgUAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQhODFgNpDIgOpiIABgcIAUlcIAUldQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAWhLIAGgZIAAgtIAKAZQACgmAIglQAkiXhYh3Qg2hJhIg0QiFhigDirQADggAPgcQAnhIAkgQQC7hZA2jJQCHlJhUl0IgRgTIgJgLIAAgJQAFgjgEgiQgIg4ghguQgPgUgRgQIgpghIgOgsQhXldASlvIg5sLIgCgcQAAiBAwivQArihA9h3QA8h7ApABQAvACABCnQgChFgiFDg");
	this.shape_968.setTransform(2.9,255.1);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("rgba(255,255,255,0.125)").s().p("EgBcAwqIgNpiIABgcIATlcIAUldQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAWhLIAGgZIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgQgTIgJgLIAAgJQAEgjgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg6sLIgCgcQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA9IqIABAUQgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_969.setTransform(2.9,255.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AkhCSQADggAPgcQAnhIAkgQQC7hZA2jJQCHlJhUl0IgageQAFgsgEgiQgIg4ghguQgPgUgRgQIgpghIgOgsQhXldASlvIg7snQAAiBAwivQArihA9h3QA8h7ApABQAvACABCnQgChFgiFDQgSCkgTCTQhMGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhEEEIgqBSIglCRIAYA4IB/BrIAmE3IgKAiIAcDKQgIBJgZBHQgXBAg4BkQg7BrgUAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQhODFgNpDIgOpiIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAIglQAkiXhYh3Qg2hJhIg0QiFhigDirg");
	this.shape_970.setTransform(2.9,255.1);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("rgba(255,255,255,0.122)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_971.setTransform(2.9,255.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("rgba(255,255,255,0.114)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_972.setTransform(2.9,255.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("rgba(255,255,255,0.11)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_973.setTransform(2.9,255.1);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("rgba(255,255,255,0.106)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_974.setTransform(2.9,255.1);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("rgba(255,255,255,0.102)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_975.setTransform(2.9,255.1);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("rgba(255,255,255,0.094)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_976.setTransform(2.9,255.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("rgba(255,255,255,0.09)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_977.setTransform(2.9,255.1);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("rgba(255,255,255,0.086)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_978.setTransform(2.9,255.1);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("rgba(255,255,255,0.078)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_979.setTransform(2.9,255.1);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("rgba(255,255,255,0.075)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_980.setTransform(2.9,255.1);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("rgba(255,255,255,0.071)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_981.setTransform(2.9,255.1);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("rgba(255,255,255,0.067)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_982.setTransform(2.9,255.1);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("rgba(255,255,255,0.059)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_983.setTransform(2.9,255.1);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("rgba(255,255,255,0.055)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_984.setTransform(2.9,255.1);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("rgba(255,255,255,0.051)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_985.setTransform(2.9,255.1);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("rgba(255,255,255,0.047)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_986.setTransform(2.9,255.1);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("rgba(255,255,255,0.039)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_987.setTransform(2.9,255.1);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("rgba(255,255,255,0.035)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_988.setTransform(2.9,255.1);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("rgba(255,255,255,0.031)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_989.setTransform(2.9,255.1);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("rgba(255,255,255,0.024)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_990.setTransform(2.9,255.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("rgba(255,255,255,0.02)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_991.setTransform(2.9,255.1);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("rgba(255,255,255,0.016)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_992.setTransform(2.9,255.1);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("rgba(255,255,255,0.012)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_993.setTransform(2.9,255.1);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("rgba(255,255,255,0.004)").s().p("EgBcAwqIgNpiIAorVQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAchkIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgZgeQAEgsgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg8snQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA+I+QgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_994.setTransform(2.9,255.1);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("rgba(255,255,255,0)").s().p("EgBcAwqIgNpiIABgcIATlcIAUldQAAgZgYiQQgZiQAAgZQAAgZAThfQAUhfAAgZQAAgTA0ixIAWhLIAGgZIAAgtIAKAZQACgmAJglQAjiXhYh3Qg2hJhHg0QiFhigEirQADggAPgcQAnhIAlgQQC6hZA2jJQCHlJhUl0IgQgTIgJgLIAAgJQAEgjgEgiQgIg4ghguQgPgUgRgQIgoghIgPgsQhXldATlvIg6sLIgCgcQAAiBAwivQAsihA8h3QA8h7ApABQAwACAACnQgChFgiFDQgRCkgTCTQhNGPBcF8QA6DqBvDUIA9IqIABAUQgyHggvDwIhDEEIgrBSIgkCRIAYA4IB+BrIAmE3IgKAiIAcDKQgHBJgaBHQgXBAg4BkQg8BrgTAxQgkBaAABaQAABPANBOIAdCOQArDMAAEGQAAB1gSGyQgRGyhNDFQgTAygQAAQguAAgKmwg");
	this.shape_995.setTransform(2.9,255.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_969},{t:this.shape_968}]},96).to({state:[{t:this.shape_971},{t:this.shape_970}]},1).to({state:[{t:this.shape_972},{t:this.shape_970}]},1).to({state:[{t:this.shape_973},{t:this.shape_970}]},1).to({state:[{t:this.shape_974},{t:this.shape_970}]},1).to({state:[{t:this.shape_975},{t:this.shape_970}]},1).to({state:[{t:this.shape_976},{t:this.shape_970}]},1).to({state:[{t:this.shape_977},{t:this.shape_970}]},1).to({state:[{t:this.shape_978},{t:this.shape_970}]},1).to({state:[{t:this.shape_979},{t:this.shape_970}]},1).to({state:[{t:this.shape_980},{t:this.shape_970}]},1).to({state:[{t:this.shape_981},{t:this.shape_970}]},1).to({state:[{t:this.shape_982},{t:this.shape_970}]},1).to({state:[{t:this.shape_983},{t:this.shape_970}]},1).to({state:[{t:this.shape_984},{t:this.shape_970}]},1).to({state:[{t:this.shape_985},{t:this.shape_970}]},1).to({state:[{t:this.shape_986},{t:this.shape_970}]},1).to({state:[{t:this.shape_987},{t:this.shape_970}]},1).to({state:[{t:this.shape_988},{t:this.shape_970}]},1).to({state:[{t:this.shape_989},{t:this.shape_970}]},1).to({state:[{t:this.shape_990},{t:this.shape_970}]},1).to({state:[{t:this.shape_991},{t:this.shape_970}]},1).to({state:[{t:this.shape_992},{t:this.shape_970}]},1).to({state:[{t:this.shape_993},{t:this.shape_970}]},1).to({state:[{t:this.shape_994},{t:this.shape_970}]},1).to({state:[{t:this.shape_995},{t:this.shape_968}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-130.9,56.2,442.1);


(lib.Sprite99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	//  0
	this.instance = new lib.Shape96("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(77).to({_off:false},0).to({_off:true},1).wait(20));

	//  0
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah2hIIADAAQAFAUAlAiQAuApAsAAQAjAAAggkQAZgcAFgTIAFgCIgKAtQAAARghAiQglAngiAAQhAAAgkhGQgVgogCgjg");
	this.shape.setTransform(14.7,331.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.682)").s().p("AhfADQgUgogCgjIADAAQAEATAmAjQAtApAsAAQAiAAAhgkQAZgdAEgSIAFgCIgJAtQgBARggAiQgkAngjAAQhAAAgkhGg");
	this.shape_1.setTransform(14.7,331.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3hIIADAAQAFASAfAeQA1AwAtAAQAlAAAggjQAYgcAGgUQAEAAgBAEQgEAWgEAQQgBAPgTAWQgGAHgHAHQglAngjAAQgDAAgCAAQg/gCgihDQgBgBAAgBQgMgVgGgWQgEgQgBgPg");
	this.shape_2.setTransform(13.4,343.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.682)").s().p("AACBJQg/gCgihDIgBgCQgMgVgGgWQgEgQgBgPIADAAQAFATAfAdQA1AwAtgBQAlABAggjQAYgcAGgUQAEABgBACIgIAnQgBAPgTAWIgNAOQglAngjAAIgFAAg");
	this.shape_3.setTransform(13.4,343.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5hIIADAAQAFASAfAeQA2AvAuAAQAnAAAgghQAXgaAHgXQAEAAgBADQgDAXgEAQQgBAOgUAWQgGAIgHAHQglAnglAAQgCAAgCAAQhBgCgjhDQgBgBAAgBQgMgVgGgWQgEgQgBgPg");
	this.shape_4.setTransform(12.3,356.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhBgCgjhDIgBgCQgMgVgGgWQgEgQgBgPIADAAQAFASAfAeQA2AvAuAAQAnAAAgghQAXgaAHgXQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQgDAXgEAQQgBAOgUAWIgNAPQglAnglAAIgEAAg");
	this.shape_5.setTransform(12.3,356.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah8hIIADAAQAGATAfAeQA3AvAvAAQApAAAgghQAWgZAIgYQAEgBAAACQgEAXgEAQQgCAQgTAWQgGAHgHAHQglAngmAAQgDAAgCAAQhDgCgjhCQgBgBAAgBQgMgVgGgXQgEgQgCgPg");
	this.shape_6.setTransform(11.2,368.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.682)").s().p("AADBJQhDgCgjhCIgBgCQgMgVgGgXQgEgQgCgPIADAAQAGATAfAeQA3AvAvAAQApAAAgghQAWgZAIgYQABAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQgEAXgEAQQgCAQgTAWIgNAOQglAngmAAIgFAAg");
	this.shape_7.setTransform(11.2,368.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah+hJIADAAQAGAUAfAdQA3AwAxAAQArAAAfggQAVgYAKgaQAEgBAAABQgCAXgFARQgDAPgTAWQgGAIgHAHQgmAngnAAQgDAAgCAAQhFgCgjhCQgBgBgBgBQgLgVgHgXQgEgQgBgQg");
	this.shape_8.setTransform(10.1,381.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.682)").s().p("AADBKQhFgCgjhDIgCgCQgLgUgHgXQgDgRgCgQIADAAQAGAUAgAeQA2AvAxAAQArAAAfggQAVgYAKgaQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQgDAYgFAQQgCAPgTAXIgOAOQglAngnABIgFAAg");
	this.shape_9.setTransform(10.1,381.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAhJIADAAQAGAUAgAeQA4AvAyAAQAtAAAegfQAVgWALgcQAEgCAAABQgCAXgGARQgCAQgUAVQgGAIgHAHQglAngpAAQgDAAgCAAQhHgBgjhCQgBgBgBgBQgMgVgGgXQgEgRgCgQg");
	this.shape_10.setTransform(8.9,393.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.682)").s().p("AAEBKQhHgCgkhCIgBgCQgMgUgHgYQgDgRgDgQIAEAAQAGAVAgAdQA4AvAyAAQAtAAAegeQAUgXAMgcQAAgBABAAQABAAAAAAQABAAAAAAQAAAAAAAAQgCAXgFARQgCAQgUAWIgNAOQgmAngoABIgFAAg");
	this.shape_11.setTransform(8.9,393.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiDhJIAEAAQAGAUAgAeQA4AvA0AAQAvAAAegdQAUgVALgeQAFgDAAAAQgCAYgFARQgEAQgTAVQgGAIgHAIQgmAmgqAAQgCAAgDAAQhIgBglhBQAAgBgBgBQgMgVgHgYQgEgRgCgQg");
	this.shape_12.setTransform(7.8,406.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.682)").s().p("AAEBKQhIgCglhBIgBgCQgMgUgHgZQgEgRgCgQIAEAAQAGAUAgAfQA4AuA0AAQAvAAAegdQAUgVALgeIAFgCQgCAXgFARQgEARgTAVIgNAPQgmAmgqABIgFAAg");
	this.shape_13.setTransform(7.8,406.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiFhJIADAAQAHAVAgAeQA5AvA1AAQAyAAAcgdQAUgUAMggIAFgDQgBAXgGASQgEAQgTAVQgGAIgHAIQgmAmgsABQgCAAgCAAQhLgCglhAQAAgBgBgCQgMgUgHgZQgEgRgCgQg");
	this.shape_14.setTransform(6.7,418.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.682)").s().p("AAEBKQhKgCgkhAIgCgDQgMgUgHgZQgEgRgCgQIADAAQAHAVAhAeQA4AvA1AAQAxAAAegdQASgUANggIAFgDQgBAXgGASQgEAQgSAVIgOAQQgmAmgsABIgFAAg");
	this.shape_15.setTransform(6.7,418.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiIhJIAEAAQAHAVAhAeQA5AvA2AAQAzAAAdgbQASgTAPgiQAEgFABAAQgBAYgGARQgFASgTAVQgGAIgHAHQgmAmgtABQgDAAgCAAQhMgBglhAQgBgCgBgBQgMgUgHgZQgEgRgDgRg");
	this.shape_16.setTransform(5.5,431.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.682)").s().p("AAFBKQhMgBglhAIgCgDQgMgUgHgZIgHgiIAEAAQAHAVAhAeQA5AvA2AAQAzAAAdgbQASgTAPgiIAFgFQgBAYgGARQgFASgTAVIgNAPQgmAmgtABIgFAAg");
	this.shape_17.setTransform(5.5,431.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiKhJIADAAQAIAVAhAeQA6AvA4AAQA0AAAdgaQARgSAQgkQAFgFAAAAQAAAXgHASQgFARgSAWQgHAIgHAHQgmAmgvABQgDAAgCAAQhOgBglg/QgBgCgBgCQgMgUgHgZQgEgSgDgQg");
	this.shape_18.setTransform(4.4,443.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhPgBglg/IgCgEQgMgUgHgZIgHgiIAEAAQAHAVAhAeQA6AvA3AAQA2AAAcgaQARgSAQgkIAFgFQAAAXgHASQgFARgSAWIgPAPQglAmgvABIgEAAg");
	this.shape_19.setTransform(4.4,443.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiMhJIADAAQAIAVAhAfQA7AvA5AAQA3AAAcgaQAQgQARgmQAFgGAAgBQAAAYgGASQgGASgSAVQgHAIgIAIQglAlgxABQgCAAgCAAQhQgBgmg/QgBgBgBgBQgMgUgHgbQgEgRgDgRg");
	this.shape_20.setTransform(3.3,456.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.682)").s().p("AAGBKQhQgBgmg/IgCgDQgMgTgHgbIgHgiIADAAQAIAVAhAfQA7AuA5AAQA3AAAcgZQAQgQARgmIAFgHQAAAYgGASQgGASgSAVQgHAIgIAHQglAmgxABIgEAAg");
	this.shape_21.setTransform(3.3,456.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiPhJIAEAAQAIAWAiAfQA7AuA6AAQA5AAAcgaQAPgOASgnQAFgHABgCQAAAZgHASQgGATgSAUQgHAIgHAIQgmAlgyABQgCAAgCAAQhTgBgmg+QgBgBAAgCQgNgUgHgbQgEgRgEgRg");
	this.shape_22.setTransform(2.1,468.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhTAAgmg/IgBgDQgNgTgHgbIgIgjIAEAAQAIAWAiAfQA7AtA6AAQA5ABAcgaQAPgNASgoIAGgJQAAAYgHATQgGASgSAVIgOAPQgmAmgyABIgEAAg");
	this.shape_23.setTransform(2.1,468.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiRhJIAEAAQAIAWAiAeQA7AvA8AAQA7AAAbgZQAPgMATgpQAFgIABgCQABAYgHATQgHASgSAUQgHAJgIAIQgmAlgzABQgCAAgCAAQhUAAgng+QgBgCgBgBQgMgUgIgbQgEgSgDgRg");
	this.shape_24.setTransform(1,481.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhUAAgng+IgCgDQgMgUgIgbIgHgjIAEAAQAIAWAiAeQA7AvA8AAQA7AAAbgZQAPgMATgpIAGgKQABAYgHATQgHASgSAUQgHAJgIAIQgmAlgzABIgEAAg");
	this.shape_25.setTransform(1,481.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiUhJIAEAAQAIAXAjAeQA8AuA9AAQA9AAAagYQAOgLAVgrQAFgIABgDQACAYgIATQgIAUgRAUQgHAIgIAIQgmAlg1ABQgCAAgCAAQhWAAgng9QgBgCgBgBQgNgUgHgcQgEgSgEgRg");
	this.shape_26.setTransform(-0.1,493.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.682)").s().p("AAHBKQhWAAgng9IgCgDQgNgUgHgcIgIgjIAEAAQAIAXAjAeQA8AuA9AAQA9AAAagYQAOgLAVgrIAGgLQACAYgIATQgIAUgRAUIgPAQQgmAlg1ABIgEAAg");
	this.shape_27.setTransform(-0.1,493.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiWhJIAEAAQAJAXAiAeQA9AuA+AAQBAAAAZgWQAOgKAVgtQAFgJACgDQACAYgIATQgIAUgSAUQgHAJgIAHQgmAlg2ACQgCAAgCAAQhYgBgog9QgBgBgBgCQgMgTgIgdQgEgRgEgSg");
	this.shape_28.setTransform(-1.2,506.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.682)").s().p("AAIBLQhYgBgog9IgCgDQgMgTgIgdIgIgkIAEAAQAJAXAiAfQA9AuA+AAQBAAAAZgWQAOgKAVgtIAHgNQACAZgIATQgIATgSAVQgHAIgIAIQgmAlg2ACIgEAAg");
	this.shape_29.setTransform(-1.2,506.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4AUQgsA3hFAAQhcAAgohAQgNgUgIgcIgIgkIAEAAQAJAXAjAfQA4AuBGAAQBBAAAZgWQAOgKAcg7IACgBIABAIQAAAkgjApg");
	this.shape_30.setTransform(-2.2,518.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.682)").s().p("Ah9ALQgNgTgHgeIgIgkIADAAQAKAYAiAeQA4AvBFgBQBCAAAZgVQAOgKAcg7IABgCIABAJQAAAkgiApQgsA3hFAAQhcAAgohAg");
	this.shape_31.setTransform(-2.2,518.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},62).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).wait(20));

	// 
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWAKQgEAKgLAIIgMAIQgMAHgOAAIgXgBQgzgDgZgPIgLgJQgJgIgBgJIAAgKIAAgCQABgOAagIIAHgCIA1gEIAJABQAcACATAGQAUAHAIAMIACAEIACAKg");
	this.shape_32.setTransform(12.7,316.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.682)").s().p("AAKAqQgzgDgZgPIgLgJQgIgIgCgJIAAgKIAAgCQABgOAbgIIAGgCIA1gEIAJABQAcACATAGQAUAHAIAMIABAEIADAKIgCAKQgEAKgLAIIgMAIQgMAHgOAAg");
	this.shape_33.setTransform(12.7,316.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhggpQAAAAABgBQADgDAaAFQAnAMAbABIAMAAQAfACAXgJQABAAAAAAQAVgFAGACIABAAIACABIAAACIAAAPIAAADQgCAFAAAEQgBACgBACQgDAIgLAMIgBAAIgMALQgOAKgOADQgBAAgBABQgNADgMAAQgCAAgBAAQg2gCgcghIgLgMQgIgLgCgOIgBgMg");
	this.shape_34.setTransform(13.2,321.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.682)").s().p("AAIAtQg2gCgcghIgLgMQgIgLgCgOIgBgMIAAgCIABgBQADgDAaAFQAnAMAbABIAMAAQAfACAXgJIABAAQAVgFAGACIABAAIACABIAAACIAAAPIAAADIgCAJIgCAEQgDAIgLAMIgBAAIgMALQgOAKgOADIgCABQgNADgMAAIgDAAg");
	this.shape_35.setTransform(13.2,321.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahrg5QABgBABAAQAEAHAbARQArAbAfAEIANABQAiABAdgXQAAgBAAAAQAWgQAGgJIAEAAIgEAYQgBAGgBAFQgBACAAACQgBALgPAPQAAABAAAAIgOAOQgOAOgPAGQgBAAgCABQgPAHgOAAQgBAAgCAAQg7gBgggzIgKgQQgHgPgEgQIgCgPg");
	this.shape_36.setTransform(13.9,326.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.682)").s().p("AAHA6Qg7gBgggzIgKgQQgHgPgEgQIgCgOIAAgCIACgBQAEAIAbAQQArAbAfAEIANACQAiAAAdgXIAAgBQAWgPAGgKIAEAAIgEAZIgCAKIgBAFQgBAKgPAQIAAABIgOANQgOAOgPAGIgDABQgPAHgOAAIgDAAg");
	this.shape_37.setTransform(13.9,326.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARAXQAjAAAggkQAZgcAFgTIAFgCIgHAcQgDAKAAAHQAAANgRAUIgQASQgRATgRAJQgSALgTAAQhAAAgkhGIgJgUIgLgkIgDgRIAAgCIADAAQAEASAfAeIAHAGQAnAiAjAGg");
	this.shape_38.setTransform(14.7,331.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.682)").s().p("AhfADIgJgUIgLgkIgCgRIAAgCIADAAQADARAgAfIAHAGQAmAiAjAGIAQABQAiAAAhgkQAZgdAEgSIAFgCIgHAbQgCALAAAHQgBANgQAUIgQASQgRASgQAKQgTALgTAAQhAAAgkhGg");
	this.shape_39.setTransform(14.7,331.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_33},{t:this.shape_32}]},59).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[]},1).wait(35));

	// 
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiMgyIADgCQAYAPCAA1QATAAArgQQAugQASgQQgJARguAeQg4AmgmAAQhIAAgkgvQgSgWgGgig");
	this.shape_40.setTransform(14.9,307.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.682)").s().p("AhzAGQgTgWgGgiIADgCQAYAPCAA1QAUAAAqgQQAugQASgQQgJARguAeQg3AmgmAAQhJAAgjgvg");
	this.shape_41.setTransform(14.9,307.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtgcQAAgJAPgEQAZADBRAdQA1ACAWAJQAXgBAAgBQgNAPghAQQhFATghgNQgpgFgSgdQgJgMgDgTg");
	this.shape_42.setTransform(13.4,311.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.682)").s().p("AgmAlQgpgFgSgdQgJgMgDgTQAAgJAPgEQAZADBRAdQA1ACAWAJQAWgBABgBQgNAPghAQQgpALgbAAQgUAAgOgFgABuAAIAAAAIAAAAg");
	this.shape_43.setTransform(13.4,311.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgMQAAgQAbgIQAagIAiACQBYAFAAAlQAAAPgRANQgRAPgVAAQhTAAgbgcQgJgIgBgJg");
	this.shape_44.setTransform(12.7,316.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.682)").s().p("AhNAPQgIgIgCgJIAAgKQAAgQAcgIQAZgIAiACQBYAFAAAlQAAAPgRANQgSAPgUAAQhTAAgbgcg");
	this.shape_45.setTransform(12.7,316.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40}]},57).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).wait(38));

	// 
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACIgTIguAsIgDACQgnAggjAAIgRgBQhIgEgbgpIgFgKIgMgaQgIgXgHgIIABgCIABgBQATgBATANIAlAeQAhAYAhAKIAvAHQADAAALgGIAbgSQAagPAKgFg");
	this.shape_46.setTransform(-12.1,294.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.682)").s().p("AgEA6QhHgEgcgpIgFgKIgMgaQgIgXgHgIIACgCIABgBQASgBAUANIAkAeQAhAYAhAKIAvAHQADAAALgGIAbgSQAagPAJgFIAFgBIguAsIgDACQgoAggiAAg");
	this.shape_47.setTransform(-12.1,294.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiIg0IACgCQAUADASAKIAoAZQAiATAhANQAXADAYgDQAJgDAFgCIAcgNQAagPAKgHIABADQgQASgcAVQgCABgBABQgCABgBABQgCABgBABQgkAagfAEQgEAAgFABIgIAAQgEAAgEAAQhAgDgeglQgCgCgBgCIgGgJIgLgVQgIgUgGgNg");
	this.shape_48.setTransform(1.2,301.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.682)").s().p("AAAA3IgIAAQhAgDgeglIgDgEIgGgJIgLgVIgOghIAAAAIACgCQAUADASAKIAoAZQAiATAhANQAXADAYgDIAOgFIAcgNIAkgWIABADQgQASgcAVIgDACIgDACIgDACQgkAagfAEIgJABg");
	this.shape_49.setTransform(1.2,301.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABTARQgpAcghAGIgRACQhCAAgjgnIgHgIIgNgVQgIgPgDgTIAAgBIADgCIABABICXBDQAQAAAggLIAqgPQAYgLAMgLIgDAFQgMARgoAZg");
	this.shape_50.setTransform(14.9,307.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.682)").s().p("AhtAOIgGgIIgOgVQgHgPgEgTIAAgBIADgCIABABICXBDQAQAAAggLIAqgPQAYgLAMgLIgDAFQgMARgoAZIgDACQgqAcggAGIgQACQhDAAgjgng");
	this.shape_51.setTransform(14.9,307.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_47},{t:this.shape_46}]},55).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[]},1).wait(40));

	// 
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABngVQgKAWgZATIgBABQgbAVgeADIgLABQgpAAgigrIgBgCIgRgWIgLgYIAEAAIAeAFQARAEASAHIAXAMQAZANAWAMIAMgDQAKgDANgGIAlgXg");
	this.shape_52.setTransform(-8.8,289.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.682)").s().p("AhMACIgBgBIgRgWIgLgYIAEAAIAeAEQARAFASAHIAXAMQAZAOAWALIAMgDQAKgEANgFIAlgXIgDAGQgKAWgZASIgBABQgbAWgeADIgLABQgpAAgigsg");
	this.shape_53.setTransform(-8.8,289.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsguIAEgBQArAIASAIIAeARQAaAOAYALIAMgDQAJgDAOgGIAigVQADAAAAACQgJAUgUAOIgIAIQgdAWgfADIgMABQgtgBghgrIgCgCQgIgJgIgOQgGgOgGgLg");
	this.shape_54.setTransform(-9.4,289.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.682)").s().p("AhPAEIgBgCIgQgXIgLgZIADgBQArAIASAIIAdARIAyAZIANgDQAJgDAOgGIAigVQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQgIAUgUAOIgJAIQgdAWgeADIgMABQgtgBgigrg");
	this.shape_55.setTransform(-9.4,289.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwgwIAEAAQAmAGATAJIAjAWQAbANAaALIAOgCQAIgDAPgIIAfgSQAGgCABAAQgGARgQALIgQAPQgeAXgfADIgNAAQgygBgggqIgBgCQgIgKgIgQQgHgPgGgLg");
	this.shape_56.setTransform(-9.9,290.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.682)").s().p("AhSAGIgBgCQgHgKgJgQIgMgaIADAAQAnAGASAJIAkAWQAbANAaALIAMgCQAJgDAQgIIAegSQAFgCADAAQgHARgRALIgPAPQgeAXgfADIgNAAQgxgBghgqg");
	this.shape_57.setTransform(-9.9,290.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah0gxIADgBQAjAFATAKIApAbQAcAOAdAKIANgCQAIgCARgKIAbgQQAJgFAEAAQgFANgMAIIgXAWQggAZggACIgNAAQg2gBgfgqIgBgCQgIgKgJgSQgHgRgGgKg");
	this.shape_58.setTransform(-10.4,291.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.682)").s().p("AAAAzQg2gBgfgqIgBgCQgIgKgJgSQgHgQgFgLIACgBQAjAEATALIAqAbQAcAPAcAJIANgCQAIgCAQgKIAcgQQAJgEAEgBQgFANgNAIIgWAWQggAZggACg");
	this.shape_59.setTransform(-10.4,291.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gzIACgBQAfADATALIAwAhQAdAPAeAHIAOgBQAHgBASgLIAYgOQAMgHAFgCQgCAJgIAIIgeAbQghAaggABIgPABQg5gDgfgqIgBgBQgIgKgJgUQgHgSgGgKg");
	this.shape_60.setTransform(-11,292.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.682)").s().p("AhYAIIgBgBQgIgKgJgUQgHgSgGgKIACgBQAfADATALIAwAhQAdAPAeAHIAOgBQAHgBASgLIAYgOQAMgHAFgCQgCAJgIAIIgeAbQghAaggABIgPABQg5gDgfgqg");
	this.shape_61.setTransform(-11,292.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7g0IACgCQAbACATALIA2AnQAeAQAhAGIANAAQAHgCATgMIAVgLQAQgLAGgCQAAAFgEAFIglAiQgjAbghACIgPAAQg9gEgegpIgBgBQgIgKgJgWQgIgUgGgJg");
	this.shape_62.setTransform(-11.5,293.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.682)").s().p("AAAA3Qg9gDgegqIgBgBQgIgKgJgWQgIgUgGgJIACgBQAbABATALIA2AnQAeAQAhAGIANAAQAHgCATgMIAVgLQAQgKAGgDQAAAFgEAFIglAjQgjAbghABg");
	this.shape_63.setTransform(-11.5,293.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiAg2IACgBQAXAAATAMIA8ArQAfASAjAEIAOAAQAGAAAUgNIASgKQATgNAIgDQACACAAABIgsAqQglAcghAAIgPAAQhDgDgcgpIgBgBQgIgLgJgYQgIgVgHgJg");
	this.shape_64.setTransform(-11.9,293.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.682)").s().p("AAAA4QhDgDgcgpIgBgBQgIgLgJgXQgIgWgHgJIACgBQAXAAATAMIA8ArQAfARAjAFIAOAAQAGAAAUgNIASgKQATgMAIgFQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgsAqQglAbghABg");
	this.shape_65.setTransform(-11.9,293.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACIgTIgzAwQgnAeghAAIgPgBQhIgEgbgoIgCgBQgIgMgJgYQgIgXgHgIIABgCIABgBQATgBATANIBCAwQAgATAmADIAOABQAFAAAWgOIAOgKQAXgNAKgFg");
	this.shape_66.setTransform(-12.1,294.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.682)").s().p("AgCA6QhHgEgdgoIgBgBQgIgMgJgYQgIgXgHgIIACgCIABgBQASgBAUANIBBAwQAgATAlADIAPABQAFAAAWgOIAOgKQAWgNALgFIAHgDIgzAwQgnAeghAAg");
	this.shape_67.setTransform(-12.1,294.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_53},{t:this.shape_52}]},48).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[]},1).wait(42));

	// 
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABXAdQgcAbhAAEIgVABQgyAAgfgsIgIgOQgKgQgHgVIgEgSIAAgBIABgHIAAADQAYAJAWAiQARAOAiAHIBJAGIACAAQAUAAAZgLIA3gfQgMAJgKANIgXAfg");
	this.shape_68.setTransform(-4.9,279.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.682)").s().p("AhrARIgIgOQgKgQgHgVIgEgSIAAgBIABgHIABADQAYAJAVAiQARAOAiAHIBJAGIACAAQAUAAAYgLIA4gfQgMAJgKANIgXAfIgEAFQgdAbhAAEIgVABQgxAAgggsg");
	this.shape_69.setTransform(-4.9,279.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah/gzIADgGQAXAKAXAdQASANAcAGQAjAGAhAFQAWgBAXgKIAvgaQgDAFgIAKQgCACgCADIgYAeQgBABgCACQgcAag6ADQAAAAgBAAIgQAAQgCAAgCAAQgugBgegqIgJgNQgJgPgHgTIgFgSg");
	this.shape_70.setTransform(-6,281.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,255,255,0.682)").s().p("AgBA6IgQAAIgFAAQgtgCgegqIgIgNQgKgPgHgTIgEgSIAAAAIACgFQAYAJAWAdQASANAcAGIBEALQAWAAAXgLIAvgaIgLAPIgEAFIgYAeIgDADQgcAag6AEIgBAAg");
	this.shape_71.setTransform(-6,281.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5gyIADgEQAXAJAXAXQATAMAaAIQAgAGAfAHQAUgBAWgKIAsgZQgEAHgHAJQgCADgCACIgWAbIgBABQgCABgBABQgdAag0ADQAAAAgBAAIgQAAQgCgBgCAAQgqgDgdgoIgIgLQgJgPgIgSIgEgQg");
	this.shape_72.setTransform(-6.7,283.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,255,255,0.682)").s().p("AgBA3IgQAAIgEgBQgqgDgdgoIgHgLQgKgPgHgSIgFgQIAAgBIADgDQAXAHAYAYQASAMAaAIIA+ANQAUgBAXgKIAsgZIgLARIgEAEIgWAaIgCACIgCADQgeAZgzADIgBAAg");
	this.shape_73.setTransform(-6.7,283.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah0gwIAEgDQAYAGAXATQASAKAYAJQAeAIAbAJQATgBAWgJIAqgaQgGAJgGAKQgCACgCADIgWAXIgBACQgBABgCACQgeAYgtACQgBAAgCAAIgOgBQgCAAgCAAQgmgFgcgmIgHgJQgJgPgIgQg");
	this.shape_74.setTransform(-7.4,285.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(255,255,255,0.682)").s().p("AgDA0IgOgBIgEgBQgmgEgcgmIgHgJQgJgPgIgQIgFgQIAEgDQAYAGAXATQASAKAYAIIA5ASQATgBAWgKIAqgZIgMATIgEAFIgWAYIgBABIgDACQgeAZgtACIgDAAg");
	this.shape_75.setTransform(-7.4,285.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhugvIAFgBQAXAEAYAOQASAIAWAKQAcAMAYAJQAQgBAWgKIAngZQgGANgGAJQgCABgCACIgWAXQgCACgBABQgfAYgoABQgBAAgBAAIgOgBQgCAAgBgBQgjgGgbgjIgGgKQgJgNgIgPg");
	this.shape_76.setTransform(-8.1,287.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(255,255,255,0.682)").s().p("AgDAxIgOgBIgDgBQgjgHgbgiIgGgJIgRgdIgFgOIAFgCQAXAEAYAOIAoASIA0AUQAQAAAWgKIAngZIgMAVIgEAFIgWAXIgDACQgfAYgoABIgCAAg");
	this.shape_77.setTransform(-8.1,287.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABdgEIgVAVIgFAEQghAZgjAAIgQgBQgggHgbgjIgYgjIgFgNIAIAAQAVACAaAJQARAHAUAKQAZANAVALIABABQALAAAYgMIAlgXg");
	this.shape_78.setTransform(-8.8,289.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.682)").s().p("AgRAtQgggHgbgkIgYgiIgFgNIAIAAQAVACAaAJQARAHAUAKQAZANAVALIABABQALAAAYgMIAlgXIgNAXIgVAVIgFADQghAagjAAg");
	this.shape_79.setTransform(-8.8,289.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69},{t:this.shape_68}]},43).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[]},1).wait(49));

	// 
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB8gYQgDADgBAFIAAABQAAAPgVANIgdAQQgtATgjAAQgvAAglgsIgCgCQgKgLgLgVIgJgRIAIACIABAAIBTAfQAzAWAgAAQAXAAAXgNIAOgMQALgMADgNIADAAIABAAIABAIQAAAHgEADg");
	this.shape_80.setTransform(12,274.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(255,255,255,0.682)").s().p("AheAEIgCgDQgLgKgKgVIgJgRIAIACIABAAIBTAfQAzAWAfAAQAYAAAWgOIAPgLQALgLACgOIAEAAIABgBIABAJQgBAGgDADQgDAEgBAFIAAABQAAAPgVANIgdAPQgtAUgkAAQguAAglgsg");
	this.shape_81.setTransform(12,274.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiCgvIAEgCQAiAOAfAYQAgAPAZADQAcAHAqgIQAZgJARgPIAXgNQgFANgGAGQgHAKgGAIQgFAGgHAFQgRAQgoAHIgQAIQgwAKgjgcQgYAAgTgXQgFgIgEgLQgGgLgHgPg");
	this.shape_82.setTransform(3.4,276.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(255,255,255,0.682)").s().p("Ag8AeQgYAAgUgXQgFgIgEgLQgGgLgGgPIgFgJIAFgCQAhAOAgAYQAfAPAZADQAcAHAqgIQAZgJARgPIAXgNQgGANgFAGIgNASQgFAGgIAFQgQAQgoAHIgQAIQgNACgLAAQghAAgZgUg");
	this.shape_83.setTransform(3.4,276.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACCgXIgQARIgVAeQgKAMgQAIQghAQg5ABIgDAAQg3AAgfg3IgDgDQgKgQgGgVIgFgSIAAgBIABgHIABADQAYAJAVAiQALAKATAEQAjANA8AAIABAAQAYAAAfgOIArgaIACgBg");
	this.shape_84.setTransform(-5,279.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(255,255,255,0.682)").s().p("AgaA9Qg3AAgfg3IgCgDQgKgQgHgVIgFgSIAAgBIABgHIABADQAYAJAVAiQAMAKASAEQAjANA8AAIABAAQAXAAAggOIAqgaIADgBIgHAFIgQARIgVAeQgKAMgQAIQghAQg5ABg");
	this.shape_85.setTransform(-5,279.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81},{t:this.shape_80}]},41).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[]},1).wait(54));

	// 
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgjgSIBMAMQAHAAAbgLIAJgEIAlgMIgCAEIAAABIgUAkQgMARgQAIIgeAHIgrgGQgfgIgdgSIg6grIACgDIABgBQAMABAhAKIAkAKg");
	this.shape_86.setTransform(16.9,185.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,255,255,0.682)").s().p("AgCAiQgfgHgdgTIg6grIABgCIACgCQAMABAhAKIAkAKIABAAIBLAMQAIAAAagLIAKgEIAlgMIgCAEIAAABIgUAkQgNARgPAIIgfAGg");
	this.shape_87.setTransform(16.9,185.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABtgFQgCACAAADQgCAAgCACQgBACgDABQgCADAAAAQgBABgBABQgIAKgLAHQgFABgFABIgJADQgGACgFABQgMAAgLgCIgXgDQgGgCgHgDQgSgFgRgKQgBAAAAAAQgGgDgFgDIgVgNQgTgOgRgLIgBgBIgCgCIgBAAIABgBQAOADAeALIAdAKQAiAKAaADQAMABAMAAQAGAAAQgEQAGgCAHgDIAPgGQAQgFAPgGQAAABAAABQAAAAgBABQAAACAAACQgEAGgEAHQAAAAAAABQgDAFgFAIQgBAAAAABQgMAPgQAJQgDAAgCABIgaAGIgFgBQgUAAgSgCQgCgBgCgBQgegGgcgTIAAAAIgRgMQgUgQgUgTAh4gmIABgBQAQABAeAKIAlALIBOANQALAAAYgKQAIgEABgBQASgGAQgIIACgBIgBABIABACIgEAHAB1gXQgBAEgCADQgCAEgCAEQgBABAAAC");
	this.shape_88.setTransform(16.2,198.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,255,255,0.682)").s().p("AAZAjIgXgDIgOgEQgRgGgSgKIgBgBIgKgFIgVgNIgkgZIgBgBIgDgCIAAAAIAAAAQAPACAdALIAeAKQAiAKAZACIAYACQAHgBAQgDIAMgFIAQgGIAfgLIgBACIAAABIgDAHIgFAIIgBADIABgDIAFgIIADgHIgBAEIgHANIgBABIgCADIgDAEIgEAEIgDACIgBACQgJAKgLAHIgKACIgJACIgLAEQgLgBgLgBg");
	this.shape_89.setTransform(16,198.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5gmIACgBQARABAdAKIAlAMIBPAPQAMAAAXgKQAJgFABAAQATgIANgJIACgBIAAABIAAACIgCAGQgCAEgCAEIAAABQAAABAAAAQgBAEgDADQgDAIgGAHQAAABgBAAQgMAPgSAJQgCABgDAAIgZAHIgFAAQgVAAgTgBQgBgBgCAAQgggFgcgUIAAAAIgRgNQgTgRgTgVIAAAAQAPAHAaAMIAdAMQAiAKAaADQAMABANABQAHAAAPgGQAGgCAHgBIAQgGQARgGAOgGQAAABAAABQAAAAAAABQgDADgBAFQAAAAgBABQgBABAAACQgBACgBAAQgCABgCABQgCAAgBAAQgBABAAABQgIALgLAHQgFACgFACIgJADQgGACgFABQgMABgLgBIgYgEQgFgCgIgCQgTgGgRgJQgBAAAAgBQgGgCgFgDIgXgNQgUgNgRgLIgCgBIgCgBIAAAA");
	this.shape_90.setTransform(15.4,210.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(255,255,255,0.682)").s().p("AAAAmIgDAAQgggGgcgUIAAAAIgRgNQgTgQgTgVIAAAAIACABIACABIAlAXIAXANIALAGIABABQARAIATAHIANAEIAYADIALABIAMgBIALgDIAJgDIAKgEQALgHAIgKIABgCIADgBIAEgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIABgDIABgBQgDAJgGAHIgBABQgMAPgSAIIgFACIgZAGIgFAAIgKABIgegCgAAfAdIgYgDIgNgEQgTgHgRgIIgBgBIgLgGIgXgNIglgXIgCgBIgCgBIAAAAIAAgBIApATIAdANQAiAKAaACIAZADQAHgBAPgFIANgDIAQgGIAfgNIAAACIAAABQgDAEgBAEIgBABIgBADQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDABIgBACQgIAKgLAHIgKAEIgJADIgLADIgMABIgLgBgAB3gRIAAACQgBADgDADQABgEADgEgAh2gmg");
	this.shape_91.setTransform(15.1,211);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6gnIACgBQASACAdAKIBOAXIAnAFQAOAAAWgJQAJgEABgBQATgJAMgLIABgBIAAgBIABABIAAABIgCAHQgBAFgCAEQgDADgBAEQAAAAABABQABABgDABQgCAIgGAHQgBAAAAABQgMAOgTAJQgDABgCABIgaAHIgFAAQgWACgSgBQgCAAgCAAQgggFgdgVQAAAAAAAAIgRgPQgSgPgTgYIAAAAAgrADQAbAKAVACQAMABANAAQAIgBAPgFQAGgCAGgDIARgFQARgFAOgHQABAAAAABQAAABAAABQAAAAgBABIAAAAQgBAAABAAQAAABgBgBQgCAAgBAAQgCABgCABQAAABgBABQgHAJgLAIQgFADgFACIgJADQgGADgFABQgMACgMgBIgYgEQgIgCgGgCQgTgGgSgJQAAAAgBgBQgFgCgGgBIgXgOQgWgNgSgJIgBgBIgCgBIgBAAQAPALAXANIAcAPQAHABAGACg");
	this.shape_92.setTransform(14.7,223.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(255,255,255,0.682)").s().p("AAkAhIgYgEIgNgEQgTgGgTgJQAbAKAVACIAZABQAIgBAPgFIANgFIAQgGQARgGAPgFIAAABIAAACIAAABIAAAAQgCAAABAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAgBIgDAAIgEABIgBABQgHALgLAIIgKAFIgJADIgLAEIgQABIgIAAgAg0AFIgbgNQgYgNgOgLIAAAAIACABIABABIAoAWIAXAMIALAFIABABIgNgFg");
	this.shape_93.setTransform(14.3,222.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7gpQAPAQAVANIAaAQQAiARAbACQANABANgBQAFgBAGgBIgBAAIgYgEQgIgCgGgCQgTgGgTgHQgBAAAAgBQgGgCgGgDIgYgNQgYgNgSgIIgBAAIgCgCIABAAQASADAdAKIBPAaIAoAFQAPgBAVgIQAKgFABgBQATgKAKgNIABgBIAAgBIACABIAAAAIAAACIgBAGQgBAGgDADQgCADgBADQAAAAAAgBQgBgBgCgBQgCABgBAAQgBACgBABQgDAGgFAGQAFgDAFgCQABAAABgBQABABAAgBQABAAAAAAQgCAHgGAFQAAABgBAAQgLAOgUAKQgDAAgCABIgbAIIgEABQgXADgTgBQgCAAgCAAQghgDgdgXQAAAAAAAAIgRgQQgSgPgSgaIAAgBIABAAAAlAVQAFgBAHgDQAGgCAHgDIARgGQAMgFAJgCQgEADgGAEQgEACgGADIgJAEQgFACgGACQgLACgMAAgAB0gMQgBAAAAABQAAAAAAABIAAAAQgBgCABAAgAB0gOQAAABAAABABzgKQAAACgBAB");
	this.shape_94.setTransform(14,236.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(255,255,255,0.682)").s().p("AAAAhQgbgDgigRIgagQQgVgNgPgQIAAAAIABAAIACABIABAAIAqAWIAYALIAMAFIABABQATAJATAGIAOAEIAYADIABAAIgLADIgNAAIgNAAgAAlAeIAMgDIANgFIARgGIAVgJIgKAJIgKAFIgJAEIgLAEQgJACgKAAIgEgBgAAkAeIgYgDIgOgEQgTgGgTgJIgBgBIgMgFIgYgLIgqgWIgBAAIgCgBIABAAQASADAdAKIBPAXIAoAHQAPAAAVgKIALgEQATgLAKgMIABgBIAAgBIACABIAAAAIAAACIgBAGQgBAGgDADIgDAGIgBABIAAAAIAAABIAAACIAAAAIAAAAIAAgCIAAgBIAAAAIAAACIAAABIgBABIgBAAIgBAAIgCAAIgKAGQAFgGADgFIACgCIADgBIADACIAAABIAAgBIgDgCIgDABIgCACQgDAFgFAGIgVAJIgRAGIgNAFIgMADgABkAHIAAAAgAh6ggg");
	this.shape_95.setTransform(14,235.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah8gsIAAABQAAAAAAAAAh6grIgBgBIgBAAgAB4gUQAAgBAAAAQgBgCgBgDQgDABgBAAQAAACgBABQgFAMgNAKQgEACgGADIgJAEQgFADgGACQgMADgNgBIgYgEQgIgBgIgCQgSgHgUgGQAAgBgBAAQgGgDgFgCIgZgNQgagMgSgHIgCAAIgBgBIAAAAQATADAcAKIBRAdIAoAFQARgBAUgIQAJgFABgBQAUgMAIgOIABgCIAAAAIACAAIABAAIAAACIAAAGQgBAGgDADQgBABAAABgAB2gQQgBACAAABIAAABQABAEgDADQgCAFgFAEQgBABAAAAQgMANgVALQgCAAgDABIgaAJIgFABQgXAFgUgBQgCAAgCAAQghgCgegYQAAAAAAgBIgRgQQgRgPgSgdQAPAUASAOIAZATQAiAUAeABQALABANgCQAKgBANgEQAHgDAHgCIARgHQASgHANgGQACAAABgBQACgBAAgBQACgBABgBAB2gQQAAAAAAAAQACgBAAgDQgCACAAACg");
	this.shape_96.setTransform(13.3,248.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,255,255,0.682)").s().p("AgCAmQgegCgigUIgZgSQgSgOgPgUIAAgBIAAAAIACAAIABABIACAAQASAHAaANIAZAMIALAEIABAAQAUAJASAGIAQAEIAYAEIACAAIACAAIAAAAIAAAAQAKAAAJgCIACgBIALgEIAJgFIAKgGQANgIAFgMIABgDIAEgBIACAEIAAABIAAAAIAAAAIAAgBIgCgEIgEABIgBADQgFAMgNAIIgKAGIgJAFIgLAEIgCABQgJACgKAAIAAAAIAAAAIgCAAIgCAAIgYgEIgQgEQgSgGgUgJIgBAAIgLgEIgZgMQgagNgSgHIgCAAIgBgBIAAAAQATADAcALIBRAaIAoAHQARAAAUgKIAKgFQAUgLAIgOIABgCIAAgBIACABIABAAIAAABIAAAHQgBAGgDADIgBABQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAAABIACgFIgCAFIgBADIAAABQABADgDACIgDACIgCABIgDACQgNAHgSAIIgRAGIgOAFQgNAEgKACIgTABIgFAAgAB2gJIAAAAgAh6glgAh8glIABAAIABAAg");
	this.shape_97.setTransform(13.3,248.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB3ghQABgDABgCIACgCIAAAAIACAAIABAAIAAAIQAAAFgDADQABgBAAgCQgBgDgBgEQgCAAgBABQAAAAgBAAQAAABgBACQAAAAAAABQABgCABgCgAB4gTQAAgBABAAQACgCAAgCQAAABAAAAQgCACgBACQgBADAAACQAAACgBABQAAAEgCADQgCAEgEADQgBABAAABQgMAMgWALQgDAAgCACIggAKQgYAGgUAAQgBAAgCAAQgjgBgegZQAAAAgBAAIgRgRQgQgRgRgfQAPAZAPAPIAYAVQAjAXAeABQALAAAOgCQAKgCANgDQAHgDAHgCIARgHQATgIANgIQACgCACgBQABgBABgBQADgBACgDAB2gLQAAgBAAgCQAAgDACgCAh4gsQATAEAaAKIBRAeIApAGQASAAATgIQAKgHABAAQAPgJAHgLQgEAMgNAKQgFAEgFADIgJAEQgGACgFACQgNAFgMAAIgZgFQgIgCgJgBQgSgFgUgIQgBgBAAAAQgGgDgGgCIgagNQgbgLgTgGIgCAAIgBgBIABAAQABABABAAgAh7gtIgBAAIgBAAIAAAAAh9gtIACAA");
	this.shape_98.setTransform(12.6,261.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(255,255,255,0.682)").s().p("AgIAuQgjgBgegZIgBAAIgRgRQgQgQgRggQAPAZAPAQIAYAUQAjAXAeABIABAAIAEAAIAAAAIAAAAIASgCIACAAQAKgBANgFIAOgEIARgHQATgIANgJIAEgCIACgCIAFgEQgCAEgEADIgBABQgMANgWALIgFACIggAKQgYAGgUAAIgDAAgAAAAoIgEAAIgBAAQgegBgjgXIgYgUQgPgQgPgZIAAAAIABAAIABAAIgCAAIACAAIABABIACAAQATAEAaAJIBRAfIApAGQASAAATgIIALgHQAPgJAHgLQgEAMgNALIgKAGIgJAEIgLAFQgNADgMAAIgZgEIgRgDIgmgNIgBgBIgMgFIgagNQgbgLgTgGQATAGAbALIAaANIAMAFIABABIAmANIARADIAZAEQAMAAANgDIALgFIAJgEIAKgGQANgLAEgMIACgEIADgBIACAGIAAAEIgBABIgDAEQgCACAAAEIABABIgBABIABgBIgBgBQAAgEACgCIgBAGIgBACIgCAHIgFAEIgCACIgEACQgNAJgTAIIgRAHIgOAEQgNAEgKACIgCAAIgSACIAAAAIAAAAgAB5gTIAAAAgAB8gXIABgBQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgBACIADgEgAB2gfIABgCIABAAIgCAEIAAgCgAB4ghIAAAAgAh5gsIgBgBIABAAIACABgAh8gtIAAAAg");
	this.shape_99.setTransform(12.5,261.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB8gYQgEADAAAGQAAALgKAIQgMANgcAMIggALQgaAIgWAAQgkAAgegaIgSgSQgQgQgQgiIAAgBIAEABIABAAQATAFAdALIAnAQIABACIAnANIArAHQASAAATgIIAJgFQAWgPAFgTIABgDIADAAIABAAIABAIQAAAHgEADg");
	this.shape_100.setTransform(12,274.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(255,255,255,0.682)").s().p("AhMAWIgSgSQgPgRgRghIAAgBIADABIACAAQATAFAdALIAnAQIABACIAnAMIAqAIQATAAASgIIAJgGQAXgPAEgSIABgDIAEAAIABgBIABAJQgBAGgDADQgEAEAAAGQAAALgKAIQgMAMgcAMIggAMQgaAIgXAAQgjAAgegag");
	this.shape_101.setTransform(12,274.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_87},{t:this.shape_86}]},34).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[]},1).wait(56));

	// 
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1geIADgCIACgBIBQgCIBnAIQAgAGAKALQAFAFAAAFQAAASgWAJIgBAAQgVAIguABIgMAAQg0AAgkgSIgRgMQgcgTAAgRg");
	this.shape_102.setTransform(23.7,141.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(255,255,255,0.682)").s().p("AAQAkQg0AAgkgSIgRgMQgcgTAAgRIADgCIABgBIBRgCIBnAIQAgAGAKALQAFAFAAAFQAAASgWAJIgBAAQgWAIgtABg");
	this.shape_103.setTransform(23.7,141.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxggIACgCQAjgCAmACIBfAKQAdAFANAJQAGAEAHACQAHAJgMAGQgVANgkAEQgLAIgNAAQgnAAgdgOQgTgEgRgMQgcgTgHgTg");
	this.shape_104.setTransform(21.5,152.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(255,255,255,0.682)").s().p("AgqAWQgTgEgRgMQgcgTgHgTIACgCQAjgCAmACIBfAKQAdAFANAJQAGAEAHACQAHAJgMAGQgVANgkAEQgLAIgNAAQgnAAgdgOg");
	this.shape_105.setTransform(21.5,152.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxgiIACgCQAcgBAkAEIBWAMQAbAFAQAHQAGACANgCQAQADgDADQgSAQgcAIQgOAQgVAAQgdAAgTgKQgdgEgbgRQgcgUgOgUg");
	this.shape_106.setTransform(19.8,163.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("rgba(255,255,255,0.682)").s().p("AgPAbQgdgEgbgRQgcgUgOgUIACgCQAcgBAkAEIBWAMQAbAFAQAHQAGACANgCQAQADgDADQgSAQgcAIQgOAQgVAAQgdAAgTgKg");
	this.shape_107.setTransform(19.8,163.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gjIACgCQAVAAAiAHIBPANQAYAEASAGQAHABAUgHQAYgEAGgBQgQAVgSAMQgTAXgcAAQgRAAgOgFQglgDgkgXQgcgUgWgWg");
	this.shape_108.setTransform(18.3,174.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("rgba(255,255,255,0.682)").s().p("AAGAhQglgDgjgXQgcgUgXgWIACgCQAVAAAjAHIBOANQAYAEASAGQAIABATgHIAdgFQgPAVgSAMQgTAXgcAAQgRAAgOgFg");
	this.shape_109.setTransform(18.3,174.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgNIApAHQAHAAAbgLQAfgMAPgEIgFAMIgRAdQgXAggjAAIgLgBQgwgDgsgcIg6grIACgDIABgBQAMABAhAKg");
	this.shape_110.setTransform(16.9,185.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(255,255,255,0.682)").s().p("AAdAnQgwgDgrgcIg6grIABgCIACgCQAMABAhAKIBIAPIAoAHQAIAAAagLQAfgNAQgDIgFAMIgRAdQgXAggkgBg");
	this.shape_111.setTransform(16.9,185.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_103},{t:this.shape_102}]},30).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[]},1).wait(63));

	// Layer 16
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("rgba(255,255,255,0.682)").s().p("AhsAaIgNgLQgMgNgHgaIAKgCQAZAMASAFIBWAJIAiAAQAbAAAXgNQAjgWAXgIIgFAHIgWAkIgKAJQgaAXgyAIIg9AFQgxAAgagTg");
	this.shape_112.setTransform(17.9,116.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(255,255,255,0.682)").s().p("AhrAWIgOgNQgJgJgHgaIAKgCQAcALAVAEIBTAKIAlADQAZAAAUgMQAggUATgGIgbAmIgPAKQgaAVgwAHIg8ACQgsgBgZgRg");
	this.shape_113.setTransform(18.5,119.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(255,255,255,0.682)").s().p("AgsAiQgogBgWgQQgJgHgEgHQgKgJgGgWIAKgDQAfAKAZADIBRAKQAWACAQADQAXAAARgKQAdgQARgGIgcAlIgVAJQgZASguAGIgMABQgXAAgZgCg");
	this.shape_114.setTransform(19,122);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiFgdQAEgCAGgCQAiAJAdADIBQAKQAXACAPAEQAUABARgJQAYgNAPgDIgdAhIgbAIQgZARgrAFQgegBgdgEQgkgCgUgNQgKgJgEgGQgIgJgGgTg");
	this.shape_115.setTransform(19.6,124.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(255,255,255,0.682)").s().p("AgxAdQgkgBgUgOQgJgJgFgGQgIgJgGgTIAKgDQAjAIAcADIBPAKQAZACAPAEQATABARgIQAYgOAOgDIgcAhIgbAJQgZAQgrAEQgeAAgdgEg");
	this.shape_116.setTransform(19.6,124.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiCgdQADgCAHgBQAlAHAgADIBOAIQAaAEAOAFQARABAOgGQAWgKALgDIgcAfIghAIQgZAOgoAEQgfgCgdgGQgfgCgSgMQgLgKgEgHQgHgHgEgRg");
	this.shape_117.setTransform(20.1,126.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(255,255,255,0.682)").s().p("Ag3AaQgfgCgSgMQgLgKgEgHQgGgHgFgRIAKgDQAlAHAhADIBNAJQAaADAOAFQARACAOgIQAWgKALgCIgcAfIgiAIQgZAOgnADQgfgBgdgGg");
	this.shape_118.setTransform(20.1,126.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah/gdQACgCAHgBQAoAGAlACIBLAJQAdADANAHQAOACAMgGQARgGAJgBIgcAcIgnAIQgZALgkADQgggDgcgIQgbgCgQgLQgLgKgEgJQgGgGgDgOg");
	this.shape_119.setTransform(20.7,129.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("rgba(255,255,255,0.682)").s().p("Ag8AXQgbgCgQgLQgLgKgEgJQgGgGgDgPIAJgCQAoAFAlADIBLAJQAdADANAHQAOACAMgGQARgGAJgBIgcAcIgnAIQgZAKgkADQgggCgcgIg");
	this.shape_120.setTransform(20.7,129.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah9gdQADgCAGgBQAsAFAoABIBJAIQAgAFAMAIQALACAKgDQAOgEAFABIgbAZIgtAIQgZAIghABQgigDgagKQgXgCgNgKQgNgKgDgKQgEgGgEgLg");
	this.shape_121.setTransform(21.2,131.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("rgba(255,255,255,0.682)").s().p("AhBAUQgXgCgOgKQgMgKgDgKQgEgGgDgLQABgCAIgBQAqAFApABIBJAIQAgAFALAIQAMACAJgDQAOgEAHABIgdAZIgtAIQgYAIghABQgigDgagKg");
	this.shape_122.setTransform(21.2,131.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6gdQABgCAIgBQAuADAsACIBIAHQAhAFALAKQAJADAHgCQALgBADADIgcAWIgzAHQgZAGgfAAQghgEgagMQgSgDgMgIQgNgLgDgLQgDgEgCgJg");
	this.shape_123.setTransform(21.8,133.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("rgba(255,255,255,0.682)").s().p("AhGARQgTgDgMgIQgNgLgCgLQgEgEgCgJQACgCAHgBQAuADAsACIBIAHQAhAFALAKQAJADAHgCQALgBADADIgcAWIgzAHQgZAGgfAAQgggEgagMg");
	this.shape_124.setTransform(21.8,133.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gdQABgCAIgBQAxACAvABIBHAHQAjAGAKALQAGADAFAAQAHACABADIgcAVIg6AHQgYADgcgBQgigFgZgOQgOgDgJgHQgPgMgCgMQgCgDgBgGg");
	this.shape_125.setTransform(22.3,136.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("rgba(255,255,255,0.682)").s().p("AgRAhQgigFgZgOQgOgDgJgHQgPgMgCgMQgCgDgCgGQACgCAHgBIBhADIBGAHQAkAGAJALQAGADAGAAQAHACAAADIgcAVIg5AHQgVACgXAAIgIAAg");
	this.shape_126.setTransform(22.3,136.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gdQAAgCAJgCQA0ABAzABIBFAHQAlAGAJAMQADAEADACQAEADgCAGIgdASIg/AHQgYAAgZgBQgigHgZgQQgJgDgHgGQgQgNgBgMQgCgCAAgDg");
	this.shape_127.setTransform(22.9,138.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("rgba(255,255,255,0.682)").s().p("AgXAhQgigHgZgQQgJgDgHgGQgQgNgBgMIgCgFQAAgCAJgCIBnACIBFAHQAlAGAJAMIAGAGQAEADgCAGIgdASIg/AHIgMAAIglgBg");
	this.shape_128.setTransform(22.9,138.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1gfQAAgCAJgBIBsAAIBFAGQAnAHAIANIACAIQAAAHgFAHQgFAHgMAFIgLAEIhFAFIgvgEQgjgHgXgTIgKgGQgRgQgBgNg");
	this.shape_129.setTransform(23.7,141.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(255,255,255,0.682)").s().p("AggAfQgigIgXgSIgKgGQgSgQAAgNIAAgBQAAgCAJgCIBsAAIBFAHQAnAHAIANIACAIQAAAHgFAHQgGAHgLAFIgMAEIhEAFg");
	this.shape_130.setTransform(23.7,141.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_112}]},20).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[]},1).wait(67));

	// 
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("rgba(77,77,77,0.4)").s().p("AgSgEQgigJgaAyQADguAMgWQAFgJAIABQAIABAQAHQAPAHBaBAQhCglgfgHg");
	this.shape_131.setTransform(6.9,274.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(77,77,77,0.4)").s().p("AgKAMIgPgDQglgIgDAOIgDABIAHgLQAQgKASgIQAHgEAIABQAKAAAKAGIA9Abg");
	this.shape_132.setTransform(6.9,280);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("rgba(77,77,77,0.4)").s().p("AgzAYQg1gUANgDIgCgGIANgHQBfAnBQg2QhLA3gvAAQgNAAgLgEg");
	this.shape_133.setTransform(11.7,285.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(77,77,77,0.4)").s().p("AAhgdQALAdAIgBQhBAYgmAHQAsgYAogjg");
	this.shape_134.setTransform(15.7,287.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("rgba(77,77,77,0.4)").s().p("AASgbIAbAkIAAAIQg3gegiArQAbhFAjAMg");
	this.shape_135.setTransform(17.3,290.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAuAUIAKAWQgzhYg8BWIALgjQALgdANgLQAbgYAnBPg");
	this.shape_136.setTransform(17.7,293.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("rgba(77,77,77,0.4)").s().p("Ag3AoIALgjQALgdANgLQAbgYAnBPIAKAWQgzhYg8BWg");
	this.shape_137.setTransform(17.7,293.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag6ApQAGgTAGgRQALgdAQgLQAdgXAqBPIAHATQg3hWg+BXg");
	this.shape_138.setTransform(16.3,306.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("rgba(77,77,77,0.4)").s().p("AguAFQALgdAQgLQAdgXAqBPIAHATQg3hWg+BXIAMgkg");
	this.shape_139.setTransform(16.3,306.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag9ApQAHgTAGgSQAMgbATgMQAegXAsBPIAFAQQg6hUhBBYg");
	this.shape_140.setTransform(14.9,319.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("rgba(77,77,77,0.4)").s().p("AgwAEQAMgbATgMQAegXAsBPIAFAQQg6hUhBBYIANglg");
	this.shape_141.setTransform(14.9,319.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAApQAHgUAHgSQAMgbAWgLQAggWAvBOIACAOQg+hThDBZg");
	this.shape_142.setTransform(13.5,332.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(77,77,77,0.4)").s().p("AgyADQAMgbAWgLQAggWAvBOIACAOQg/hThCBZIAOgmg");
	this.shape_143.setTransform(13.5,332.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhEAqQAJgVAIgTQAMgaAZgMQAigVAxBPIgBAKQhChRhGBbg");
	this.shape_144.setTransform(12.1,345);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("rgba(77,77,77,0.4)").s().p("AgzACQAMgaAZgMQAigVAwBPIAAAKQhChRhFBbIAQgog");
	this.shape_145.setTransform(12.1,345);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhIAqQAKgWAIgTQAMgZAcgMQAkgVAzBPIgDAIQhGhQhIBcg");
	this.shape_146.setTransform(10.8,358);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("rgba(77,77,77,0.4)").s().p("Ag2ABQAMgZAcgMQAkgVAzBPIgDAIQhGhQhIBcIASgpg");
	this.shape_147.setTransform(10.8,358);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhMAqQAKgXAJgTQAMgZAfgMQAmgUA1BPIgFAFQhJhOhLBdg");
	this.shape_148.setTransform(9.6,370.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(77,77,77,0.4)").s().p("Ag5AAQANgZAegMQAmgUA1BPIgGAFQhHhOhMBdIATgqg");
	this.shape_149.setTransform(9.6,370.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhQAqQALgYAJgSQANgZAhgMQAogTA3BOIgIACQhMhMhNBeg");
	this.shape_150.setTransform(8.3,383.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("rgba(77,77,77,0.4)").s().p("Ag8AAQANgZAhgMQAogTA3BOIgIACQhMhMhNBeIAUgqg");
	this.shape_151.setTransform(8.3,383.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVAqQAMgZAKgRQANgZAlgMQApgTA6BOIgLAAQhQhLhQBfg");
	this.shape_152.setTransform(7,396.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(77,77,77,0.4)").s().p("Ag/AAQANgZAlgMQApgTA6BOIgLAAQhQhLhQBfQAMgZAKgRg");
	this.shape_153.setTransform(7,396.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZAqQAMgZALgSQANgYAogNQArgSA8BOIgNgDQhVhJhRBgg");
	this.shape_154.setTransform(5.8,409.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("rgba(77,77,77,0.4)").s().p("AhCgBQANgYAogNQArgSA8BOIgNgDQhUhJhSBgIAXgrg");
	this.shape_155.setTransform(5.8,409.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhdAqQANgaALgRQAOgYAqgNQAtgRA+BNIgPgFQhYhIhUBhg");
	this.shape_156.setTransform(4.5,422.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("rgba(77,77,77,0.4)").s().p("AhFgBQAOgYAqgNQAtgRA+BNIgPgFQhYhIhUBhQANgaALgRg");
	this.shape_157.setTransform(4.5,422.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhiAqQAOgbANgRQANgYAugMQAvgRBABNIgSgIQhchGhXBig");
	this.shape_158.setTransform(3.2,435.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(77,77,77,0.4)").s().p("AhIgCQAOgYAtgMQAwgRBABNIgSgIQhchGhWBiQANgbAMgRg");
	this.shape_159.setTransform(3.2,435.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmArQAPgcANgSQANgXAxgNQAxgQBCBOIgVgLQhghFhYBkg");
	this.shape_160.setTransform(1.9,448.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(77,77,77,0.4)").s().p("AhKgDQAOgXAwgNQAxgQBCBOIgVgLQhfhFhZBkQAPgcANgSg");
	this.shape_161.setTransform(1.9,448.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrArQAQgdAOgSQAOgWAzgNQAzgPBFBNIgXgOQhlhDhbBlg");
	this.shape_162.setTransform(0.7,461.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("rgba(77,77,77,0.4)").s().p("AhNgEQAOgWAzgNQAzgPBEBNIgWgOQhlhDhbBlQAQgdAOgSg");
	this.shape_163.setTransform(0.7,461.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvArQARgeAOgSQAOgVA2gOQA1gOBHBNIgagRQhohBhdBmg");
	this.shape_164.setTransform(-0.6,474.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("rgba(77,77,77,0.4)").s().p("AhQgFQAOgVA2gOQA1gOBHBNIgagRQhohBhdBmQARgeAOgSg");
	this.shape_165.setTransform(-0.6,474.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABYAEQhshAhfBnQARgfAPgSQAOgVA6gNQA2gOBJBNg");
	this.shape_166.setTransform(-1.9,487.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(77,77,77,0.4)").s().p("AhTgGQAOgVA5gNQA3gOBJBNIgcgTQhshAhfBnQARgfAPgSg");
	this.shape_167.setTransform(-1.9,487.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_131}]},57).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[]},1).wait(20));

	// 
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABJAyIg3g/QgJgMgMABQgaABgsAnIgBABQAAgZAWgNIAggZIADgDIASAAQAOAIAXAYIABABQApAqgGAVg");
	this.shape_168.setTransform(-4.8,259.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(77,77,77,0.4)").s().p("AASgNQgJgMgMABQgaABgsAnIgBABQAAgZAWgNIAggZIADgDIASAAQAOAIAXAYIABABQApAqgGAVIgBADg");
	this.shape_169.setTransform(-4.8,259.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAqAHQgXgNgTgFQgRgBgcARQgRgFgNAbQAAgbANgPIAVgYIAVgFQALAFAOAOIAVAOQALALAFAHQAEAIgCAFIAgAZIgcgiQgDgCgDgCg");
	this.shape_170.setTransform(1,267);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("rgba(77,77,77,0.4)").s().p("AAsAUQACgFgEgIIAGAEIAcAigAg+gPIAVgYIAVgFQALAFAOAOIAVAOQALALAFAHQgXgNgTgFQgRgBgcARQgRgFgNAbQAAgbANgPg");
	this.shape_171.setTransform(1,267);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgagfIAnAaIABABIBBAsIgCgBQgtgZgdgMIgVgGQgigJgaAyQACgcAEgRIAJgXQAFgJAIABIAGABQAHACALAFg");
	this.shape_172.setTransform(6.9,274.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("rgba(77,77,77,0.4)").s().p("ABNAnQgtgZgdgMIgVgGQgigJgaAyQACgcAEgRIAJgXQAFgJAIABIAGABQAHACALAFIAnAaIABABIBBAsg");
	this.shape_173.setTransform(6.9,274.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_169},{t:this.shape_168}]},55).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[]},1).wait(40));

	// 
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAXgVQgkgig1AWIAMgJQAHgIAZgEQASgDAVAMQAIAFAIAGQAQAMAIAVIAAABQAIASgBAdIADAIIgGgOQgQgpgWgVg");
	this.shape_174.setTransform(4.5,257.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("rgba(77,77,77,0.4)").s().p("AA+ApQgRgpgWgVQgkgig0AWIALgJQAIgIAYgEQATgDAUAMIAQALQAQAMAIAVIAAABQAHASAAAdIACAIg");
	this.shape_175.setTransform(4.5,257.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag9gZQAPgNAJAAQAKgBAZABQAOgEATAJQAaAQADAOQADANgCAYIgBAHIgJgJQgRghgTgPQgegdguAUg");
	this.shape_176.setTransform(2.6,257.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("rgba(77,77,77,0.4)").s().p("AAzAgQgRghgTgPQgegdguAUQAPgNAJAAQAKgBAZABQAOgEATAJQAaAQADAOQADANgCAYIgBAHg");
	this.shape_177.setTransform(2.6,257.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag7gMQAYgWALAGQANAEAYAGQANgEAQAGQAUAIgCAIQgBAGgEATIgEAFIgOgCQgQgcgSgIQgYgWgmASg");
	this.shape_178.setTransform(1,257.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("rgba(77,77,77,0.4)").s().p("AAlAcQgQgcgSgIQgYgWgmASQAYgWALAGIAlAKQANgEAQAGQAUAIgCAIIgFAZIgEAFg");
	this.shape_179.setTransform(1,257.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag7AAQAhgfAOAMQAOAKAaAJQALgDAMADQAOAAgGABQgGACgGANIgHAEIgSAEQgRgUgMgEQgWgPgeAPg");
	this.shape_180.setTransform(-0.5,257.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("rgba(77,77,77,0.4)").s().p("AgHAAQgWgPgeAPQAhgfAOAMQAOAKAaAJQALgDAMADQAOAAgGABQgGACgGANIgHAEIgSAEQgRgUgMgEg");
	this.shape_181.setTransform(-0.5,257.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAaAIQAGAFAHAEQABABABAAQAJgFAJAAQAHgFgKgGQgKgDgIAGIgLADIgBAAIgVAKQgOgNgMABQgQgJgYALQAqglARARQALALARAJg");
	this.shape_182.setTransform(-1.8,257.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("rgba(77,77,77,0.4)").s().p("AAnARIgNgJIABAAIALgDQAIgGAKADQAKAGgHAFQgJAAgJAFIgCgBgAgVAGQgQgJgYALQAqglARARQALALARAJIgVAKQgOgNgMABgAAaAIIAAAAg");
	this.shape_183.setTransform(-1.8,257.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAJgMQAUARAXAUQAIgGAFgDQABgMgPgLQgOgLgKADIgOABIgEACIgVAMQgQgDgJAEQgLgDgQAJQAzguARAWQADADACACg");
	this.shape_184.setTransform(-2.9,258.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(77,77,77,0.4)").s().p("AAJgMIAEgCIAOgBQAKgDAOALQAPALgBAMIgNAJQgXgUgUgRgAAEgRIAFAFIgVAMQgQgDgJAEQgLgDgQAJQAzguARAWgAAJgMIAAAAg");
	this.shape_185.setTransform(-2.9,258.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgZIAKAGQAAAAABABIAAAAQAAAAABABQAZAZAaAbQAFgGACgGQgFgUgTgRQgTgSgMgCIgPAAIgNAJIgBAAIgSANQgQACgHAKQgDABgFAEQAAAAgBAAQAfgZAUgFQAIgCAFACgAgOgZQAJgCAFACAhFAKIADgCQABgCABgBAg/AFQAegZATgFAhCAIQABgCACgB");
	this.shape_186.setTransform(-3.9,259.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(77,77,77,0.4)").s().p("AAKgRIAAgBIAAAAIgBgBIgJgHIgBAAIgCAAIgBAAIgCAAIAAAAIgBAAIgHABIAHgBIABAAIAAAAIACAAIABAAIACAAIABAAQgHgBgIACQgTAFgeAZIgBAAIABAAIgDADIACgDQAegZAVgFIgBAAIABAAIAMgJIAPAAQANACASASQAUARAEAUQgBAGgFAGIg0g0gAgPgZIgSANQgQACgHAKQgDABgFAEQAegZATgFgAgPgZg");
	this.shape_187.setTransform(-3.8,259.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABJAyIg3g/QgXghhFA/IACgNQAEgPAQgKIAjgcIATABQAOAIAWAXIABABQAYAYAIARIADAKQACAJgDAGg");
	this.shape_188.setTransform(-4.8,259.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(77,77,77,0.4)").s().p("AASgNQgXghhFA/IACgNQAEgPAQgKIAjgcIATABQAOAIAWAXIABABQAYAYAIARIADAKQACAJgDAGg");
	this.shape_189.setTransform(-4.8,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_175},{t:this.shape_174}]},48).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[]},1).wait(42));

	// 
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAggnQAVARAHAgIADAoQghiRhbBrQACgWASgOQASgNASgJQAPgJAWAQg");
	this.shape_190.setTransform(10.4,251.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("rgba(77,77,77,0.4)").s().p("Ag9AMQACgWASgOQASgNASgJQAPgJAVAQQAWARAHAgIADAoQgiiRhaBrg");
	this.shape_191.setTransform(10.4,251.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag+ACQACgSAQgLQAQgNATgIQARgIAYASQAXATAGAkIACAiQgjiNhaBcg");
	this.shape_192.setTransform(9.2,252.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("rgba(77,77,77,0.4)").s().p("Ag+ACQACgSAQgLQAQgNATgIQARgIAYASQAXATAGAkIACAiQgjiNhaBcg");
	this.shape_193.setTransform(9.2,252.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag/gFQADgQANgKQAOgLAVgHQASgHAaATQAZAUAEAqIADAbQgliJhaBQg");
	this.shape_194.setTransform(8.1,253.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(77,77,77,0.4)").s().p("Ag/gFQADgQANgKQAPgLAUgHQATgHAZATQAZAUAEAqIADAbQgliJhaBQg");
	this.shape_195.setTransform(8.1,253.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAgOQAEgMALgJQAMgKAWgGQATgGAdAVQAbAVADAvIACAVQgniFhaBCg");
	this.shape_196.setTransform(6.9,255.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(77,77,77,0.4)").s().p("AhAgOQAFgMALgJQALgKAWgGQATgGAdAVQAbAVACAvIADAVQgniFhaBCg");
	this.shape_197.setTransform(6.9,255.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhBgXQAGgJAIgHQAJgIAYgFQAVgGAeAXQAeAWAAA1IADAOQgpiBhaA0g");
	this.shape_198.setTransform(5.7,256.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(77,77,77,0.4)").s().p("AhBgXQAGgJAIgHQAJgIAYgFQAVgGAeAXQAeAWAAA1IADAOQgpiBhaA0g");
	this.shape_199.setTransform(5.7,256.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDA3Qgrh9haAlIAMgJQAHgIAZgEQAXgEAgAYQAgAYgBA5g");
	this.shape_200.setTransform(4.5,257.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("rgba(77,77,77,0.4)").s().p("AhBghIALgJQAIgIAYgEQAXgEAgAYQAgAYgBA5IACAIQgrh9hYAlg");
	this.shape_201.setTransform(4.5,257.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_191},{t:this.shape_190}]},43).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[]},1).wait(49));

	// 
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAcIASAmIgEgGQhdiihIBXQANgWAPgIIAggSQALgGANAIQAIAFALALIAOAQQAPAWATAjg");
	this.shape_202.setTransform(15.6,242);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("rgba(77,77,77,0.4)").s().p("ABRA8QhdiihIBXQANgWAPgIIAggSQALgGANAIQAIAFALALIAOAQQAPAWATAjIASAmg");
	this.shape_203.setTransform(15.6,242);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhIgFQAHgVAPgKIASgLQAegFAJADIASAHQALAMAOAWQAPAQAIAaIgBARQhAiZhQBhg");
	this.shape_204.setTransform(13,247);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("rgba(77,77,77,0.4)").s().p("AhIgFQAHgVAOgKIATgLQAegFAJADIASAHQAMAMANAWQAPAQAIAaIgBARQhAiZhQBhg");
	this.shape_205.setTransform(13,247);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAggoQAVARAHAgIADAoQghiRhbBrQABgSAOgNIAFgFQAJgGAIgFIATgLIAVgBQAIACAIAGg");
	this.shape_206.setTransform(10.4,251.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("rgba(77,77,77,0.4)").s().p("Ag9ALQABgSANgNIAGgFIARgLIATgLIAVgBQAIACAHAGQAWARAHAgIADAoQgiiRhaBrg");
	this.shape_207.setTransform(10.4,251.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_203},{t:this.shape_202}]},41).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[]},1).wait(54));

	// 
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAQgxQAUAXAzBcQhXiVhWBOQAggeAOgJIAZgTQALgKAUAYg");
	this.shape_208.setTransform(18.7,151.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgFQAggeANgJIAagTQALgKAUAYQAUAXAzBcQhXiVhWBOg");
	this.shape_209.setTransform(18.7,151.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgGQAegdANgJIAagTQAMgKAVAZQAWAYAxBaQhXiYhWBQg");
	this.shape_210.setTransform(18.3,164.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgGQAegdAOgJIAagTQALgKAVAZQAWAYAwBaQhWiYhWBQg");
	this.shape_211.setTransform(18.3,164.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgIQAbgcAOgIIAbgTQANgKAVAZQAXAZAwBZQhZibhUBRg");
	this.shape_212.setTransform(17.8,177.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgIQAbgcAOgIIAbgTQANgKAWAZQAWAZAvBZQhXibhVBRg");
	this.shape_213.setTransform(17.8,177.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgJQAYgbAOgIIAcgTQAOgKAWAaQAXAZAuBYQhaiehRBTg");
	this.shape_214.setTransform(17.4,190.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("rgba(77,77,77,0.4)").s().p("AhVgJQAYgbAOgIIAcgTQAOgKAWAaQAYAZAtBYQhZiehSBTg");
	this.shape_215.setTransform(17.4,190.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVgLQAWgZAOgJIAdgSQAPgKAXAaQAYAaAsBXQhbihhQBUg");
	this.shape_216.setTransform(16.9,203.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(77,77,77,0.4)").s().p("AhVgLQAWgZAOgJIAdgSQAPgKAXAaQAYAaAsBXQhbihhQBUg");
	this.shape_217.setTransform(16.9,203.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgMQASgYAPgJIAegSQAPgKAYAbQAaAaApBWQhcikhNBWg");
	this.shape_218.setTransform(16.5,216);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgMQASgYAPgJIAegSQAPgKAYAbQAaAaApBWQhcikhNBWg");
	this.shape_219.setTransform(16.5,216);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgOQAQgXAOgIIAfgSQARgKAZAbQAaAbAoBVQheinhLBXg");
	this.shape_220.setTransform(16,229);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgOQAQgXAOgIIAfgSQARgKAZAbQAaAbAoBVQheinhLBXg");
	this.shape_221.setTransform(16,229);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AATgtQAcAcAmBTQhgiqhJBZQANgWAPgIIAggSQASgKAZAcg");
	this.shape_222.setTransform(15.6,242);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("rgba(77,77,77,0.4)").s().p("AhUgPQANgWAPgIIAggSQASgKAZAcQAcAcAmBTQhgiqhJBZg");
	this.shape_223.setTransform(15.6,242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_209},{t:this.shape_208}]},34).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[]},1).wait(56));

	// 
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_224.setTransform(28.1,108.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("rgba(77,77,77,0.4)").s().p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_225.setTransform(28.1,108.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgMQAQgPALgLQAPgPAOgFQAOgGAaAXQAbAYA4BNQhoiJhLBBg");
	this.shape_226.setTransform(25.8,119);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("rgba(77,77,77,0.4)").s().p("AhZgMIAbgaQAPgPAOgFQAOgGAaAXQAbAYA4BNQhoiJhLBBg");
	this.shape_227.setTransform(25.8,119);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgJQAWgVALgKQAPgNANgHQANgHAYAYQAZAXA2BTQhiiNhPBFg");
	this.shape_228.setTransform(23.4,129.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("rgba(77,77,77,0.4)").s().p("AhYgJIAhgfQAPgNANgHQANgHAYAYQAZAXA2BTQhiiNhPBFg");
	this.shape_229.setTransform(23.4,129.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgHQAbgZANgKQANgLANgIQAMgJAWAYQAXAXA0BXQhbiRhUBKg");
	this.shape_230.setTransform(21.1,140.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("rgba(77,77,77,0.4)").s().p("AhXgHQAbgZAMgKQAOgLANgIQAMgJAVAYQAXAXA1BXQhbiRhUBKg");
	this.shape_231.setTransform(21.1,140.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAQgxQAUAXAzBcQhXiVhWBOQAggeAOgJIAZgTQALgKAUAYg");
	this.shape_232.setTransform(18.7,151.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgFQAggeANgJIAagTQALgKAUAYQAUAXAzBcQhXiVhWBOg");
	this.shape_233.setTransform(18.7,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_225},{t:this.shape_224}]},30).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[]},1).wait(63));

	// Layer 15
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(77,77,77,0.4)").s().p("AhRALQAMgfASgPQARgPAaABQAXABAXATQAXASAVA9QhNiIhWBhg");
	this.shape_234.setTransform(6.6,81.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("rgba(77,77,77,0.4)").s().p("AhSAIQAMgdARgPQARgPAZABQAWABAXATQAYATAZA+QhRiIhUBdg");
	this.shape_235.setTransform(8.7,84.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("rgba(77,77,77,0.4)").s().p("AhTAGQAMgbAQgPQASgPAXABQAVgBAYAUQAYAUAdA/QhUiIhTBag");
	this.shape_236.setTransform(10.9,86.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUADQAMgYAPgOQARgQAWAAQAUgBAZAUQAaAUAgBBQhWiIhTBWg");
	this.shape_237.setTransform(13.1,89.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("rgba(77,77,77,0.4)").s().p("AhTADQALgYAQgOQAQgQAXAAQAUgBAYAUQAaAUAfBBQhViIhSBWg");
	this.shape_238.setTransform(13.1,89.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhVAAQAMgWAOgOQASgPAVgBQAUgBAYAUQAaAVAkBBQhaiHhRBSg");
	this.shape_239.setTransform(15.2,92.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("rgba(77,77,77,0.4)").s().p("AhVAAQAMgWAOgOQARgPAVgBQAVgBAYAUQAaAVAjBBQhYiHhSBSg");
	this.shape_240.setTransform(15.2,92.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhWgBQAMgWAOgNQARgQAUgBQATgCAZAVQAaAVAoBDQhdiHhQBQg");
	this.shape_241.setTransform(17.4,95);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgBQAMgWAOgNQARgQAUgBQAUgCAYAVQAbAVAmBDQhciHhQBQg");
	this.shape_242.setTransform(17.4,95);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgDQAMgUANgNQARgQATgCQASgCAaAVQAbAWArBEQhhiGhOBMg");
	this.shape_243.setTransform(19.5,97.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(77,77,77,0.4)").s().p("AhWgDQALgUAOgNQAQgQATgCQASgCAaAVQAbAWAqBEQhgiGhNBMg");
	this.shape_244.setTransform(19.5,97.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhXgGQALgSANgNQAQgQASgCQARgDAaAWQAcAXAvBFQhkiGhMBIg");
	this.shape_245.setTransform(21.7,100.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("rgba(77,77,77,0.4)").s().p("AhXgGQALgSAMgNQARgQASgCQARgDAaAWQAcAXAuBFQhkiGhLBIg");
	this.shape_246.setTransform(21.7,100.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhYgJQALgPAMgMQAQgRARgDQAQgDAaAXQAdAWAyBHQhniGhKBEg");
	this.shape_247.setTransform(23.8,103);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("rgba(77,77,77,0.4)").s().p("AhYgJQALgPAMgMQAQgRARgDQAQgDAaAXQAdAWAyBHQhniGhKBEg");
	this.shape_248.setTransform(23.8,103);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhZgLQALgOALgLQAQgRAQgDQAPgEAbAXQAdAXA2BIQhriGhIBBg");
	this.shape_249.setTransform(26,105.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("rgba(77,77,77,0.4)").s().p("AhZgLIAWgZQAQgRAQgDQAPgEAbAXQAdAXA2BIQhriGhIBBg");
	this.shape_250.setTransform(26,105.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_251.setTransform(28.1,108.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(77,77,77,0.4)").s().p("AhagOIAVgWQAQgRAPgEQAOgEAcAXQAeAYA5BJQhuiFhHA8g");
	this.shape_252.setTransform(28.1,108.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_234}]},20).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[]},1).wait(67));

	// 
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgVQgVAJgGALIgeArQAVhBAcgSIAkAAIAeAZQglgOgVAJg");
	this.shape_253.setTransform(16.4,298.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(255,255,255,0.682)").s().p("AgHgpIAkAAIAdAZQglgOgVAJQgVAJgGALIgeArQAVhBAdgSg");
	this.shape_254.setTransform(16.4,298.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAXhAAegRQAVgBAXADQALAHAHAMQgkgNgWAIQgTAJgHAMg");
	this.shape_255.setTransform(14.7,311.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag5ApQAYhAAhgRQAXgBAcAHQAGAAABAMQgigMgXAJQgTAJgHAMg");
	this.shape_256.setTransform(13,324.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag7ApQAbhAAhgQQAcgCAfAJQgBACgCAEQgigKgWAIQgTAJgIANg");
	this.shape_257.setTransform(11.4,337.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA3ggQAFACAGACQAAgBAAgBQAAAAAAgBIAAAAQgBgCgCgBIgCAAQgCgBgEADQgCABgBABIgBABQghgJgUAIQgVAJgJANIghAwQAcg/AlgQQAZgCAdAJQgBABgBABAA2ggIABAAAA9giQgCgBgFAD");
	this.shape_258.setTransform(10.4,350.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAvgiQgBABgBAAQgggHgUAIQgUAIgKAOIgiAyQAeg/AogPQAVgDAbAHQAMAEANAFQAAAAAAgBQAAAAAAAAQgBgCgBgBQAAAAAAgBIgBAAQgBgBAAgBQgIgIgNAGg");
	this.shape_259.setTransform(9.3,363.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAIgmQAgAAAmAQQgNgYgaAKQgQgDgPABgAAHgmQABAAAAAAAgIgjQADgCADgBQADAAAGAAIgHABQgEABgEABgAgJgjQAAAAAAAAQABAAAAAAAgagYIAPgKQABAAABgBQgBAAgBABAgJgjQgBAAgBABIgBAAIgOAKAAAglQgFABgEABAgfgVIgDACQgCACgBABQADgDADgCIAFgDAgmgPQAAAAgBABQgBACgBABIgkAzQACgEABgDIAaglQAFgGAEgEQAEgEAEgDAgmgPQAAAAABgBQgBABgBABAgwgEQAFgGAFgFAgigTQgCACgCAC");
	this.shape_260.setTransform(8.1,376.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgzgEQAWgYAZgIQAmgEAyAXQgRgfghAKQgegEgVAHQgSAJgLAPgAhTApQAPgdARgQ");
	this.shape_261.setTransform(7,388.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag+ADQAagcAegJQApgFA2AaQgVgkgoAJQgcgDgVAHQgSAJgMAPgAhYAqQAMgWAOgR");
	this.shape_262.setTransform(5.9,401.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhKAOQAegkAlgJQAsgGA6AdQgagqguAJQgagCgXAHQgRAIgMAQgAheAsQAKgRAKgN");
	this.shape_263.setTransform(4.7,414.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhNANIA1glQACAAACgBQABgBACAAQAEgCAEgBQAvgGA+AhQgegxg1AJQgZgBgXAHQgQAJgNAQIgUAcIgFAGQABgBAAAAQAEgFADgEgAhWAZIgNATQABgBABgBQAFgJAGgIQABgBAAgBQAEgFAEgFAhQARIgEAFIgBABAhWAZQABgBAAgB");
	this.shape_264.setTransform(3.7,427.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhAjQAmgzAxgLQAxgHBDAiQgjg1g7AJQgYABgXAGQgQAJgOARgAhpAvQAEgHAEgF");
	this.shape_265.setTransform(2.5,439.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsArQAWgeAZgQQABAAAAgBQABAAAAgBQABAAABgBQABAAAAAAQAUgNAWgEQAAAAABgBQA1gHBHAlQgng7hCAIQgYACgWAHQgQAIgPARgAhuAvIACgE");
	this.shape_266.setTransform(1.4,452.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1AxQAsg9A7gKQA4gJBMApQgthBhIAHQgXAEgWAGQgPAIgQASg");
	this.shape_267.setTransform(0.2,465.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7AzQAug9A+gKQA7gJBQAsQgxhIhNAIQgYAFgXAGQgOAIgRATg");
	this.shape_268.setTransform(-0.9,478.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhUgLIgsA/QAvg8BAgKQA+gJBUAvQg1hOhUAHIguANQgNAIgRATg");
	this.shape_269.setTransform(-2,491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_254},{t:this.shape_253}]},62).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[]},1).wait(20));

	// 
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAFAgQgYAKgSgJIgDgCQgogXgOgOIBeAIIAmgOIAvgUIAKgEIgbAbQgkAfgbAKg");
	this.shape_270.setTransform(12.1,288.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("rgba(255,255,255,0.682)").s().p("AglAhIgDgCQgogXgOgOIBeAIIAmgOIAvgUIAKgEIgbAbQgkAfgbAKQgMAFgLAAQgKAAgJgEg");
	this.shape_271.setTransform(12.1,288.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhIAPQAdgIAdgEQAFgBAHgBQAPgIAPgHIAsgNIADAVQglAQgYAKQgYAKgNgCIgEgBQgfgIgOgEIAAAAAhJAPIAAAAQAAAAABAAQgBAAAAAAgAhIAPQgBAAAAAA");
	this.shape_272.setTransform(12.7,291.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(255,255,255,0.682)").s().p("AgXAcIgFgBIgsgMIgBAAIAAAAIABAAQAdgIAdgEIALgCQAPgIAQgHIAsgNIADAVQgmAQgYAKQgTAIgNAAIgEAAgAhJAPIAAAAIgBAAgAhJAPIAAAAg");
	this.shape_273.setTransform(12.7,291.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgQgEQANgNAMgHIApgGIAQAXQglABgXAIQgWAJgJAEIgDABQgXAHgOAIQAXgYAagLg");
	this.shape_274.setTransform(14.6,294.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("rgba(255,255,255,0.682)").s().p("AgQgEQANgNAMgHIAogGIARAXQglABgXAIIgfANIgDABQgXAHgOAIQAXgYAagLg");
	this.shape_275.setTransform(14.6,294.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAAgVQgTAIgHAKIgBACIgeArQAMgoAQgVQAKgPALgHIAkAAIAeAZQglgOgVAJg");
	this.shape_276.setTransform(16.4,298.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(255,255,255,0.682)").s().p("AgdgTQAKgPAMgHIAkAAIAdAZQglgOgVAJQgTAIgHAKIgBACIgeArQANgoAPgVg");
	this.shape_277.setTransform(16.4,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_271},{t:this.shape_270}]},59).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[]},1).wait(35));

	// 
	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgVgEQgVgNgaArQAVhDABAUIALgFIAQgBQAIACALAGQAKAEAhAXIAaAUQhUgjgFADg");
	this.shape_278.setTransform(6.6,276.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("rgba(255,255,255,0.682)").s().p("AgUgEIgBAAQgVgNgaAsQAVhEABAUIALgEIAQgCQAIACALAGQAKAFAhAXIAaATQhUgjgFADg");
	this.shape_279.setTransform(6.6,276.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhLAKQAfgfAUAMIAbgFQALgBAMAAQASgDAeAGIACAUQgBABgBAAQhLANgUgHQgBAAAAAAQgBgBAAAAQgfgQgVAMg");
	this.shape_280.setTransform(8.7,282.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("rgba(255,255,255,0.682)").s().p("AgVAPIgBAAIgBgBQgfgQgVAMQAfgfAUAMIAbgFQALgBANAAQASgDAdAGIABAUIgBABQgyAIgYAAQgOAAgHgCg");
	this.shape_281.setTransform(8.7,282.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhegGIBQAHIAOABIARgGIAYgKIA2gWIgbAaQhFA/gkgUQgqgYgPgPg");
	this.shape_282.setTransform(12.1,288.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("rgba(255,255,255,0.682)").s().p("AglAhQgqgYgPgPIBQAHIAOABIARgGIAYgKIA2gWIgbAaQg2AvggAAQgKAAgJgEg");
	this.shape_283.setTransform(12.1,288.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_279},{t:this.shape_278}]},57).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[]},1).wait(38));

	// 
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABKBAQAAAAAAABIABAAIgBgBIhAhVQgHgGgGgDQghgLgmAlQASgjAXgMIAfgOIAgAoQAYAhAUA4g");
	this.shape_284.setTransform(-4,263.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("rgba(255,255,255,0.682)").s().p("AALgUQgIgGgGgDQgggLgnAlQASgjAYgMIAfgOIAgAoQAXAhAVA4g");
	this.shape_285.setTransform(-4.1,263.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAfANIgegYIgBgBQgEgDgGgCQgBAAgBgBQgbgLggAnQANgaAPgSIAYgLIAQAHQAHAGALAJQAUAWAkAsQABACAAABQgBgBAAAAQgWgRgSgPgABHArQgWgQgSgO");
	this.shape_286.setTransform(1.3,270.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("rgba(255,255,255,0.682)").s().p("AAgAPIgfgZIgBAAIgJgFIgDgBQgagMggAnQAMgaAPgRIAZgMIAPAHIATAPQAUAWAjAtIgngeg");
	this.shape_287.setTransform(1.2,270.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABDAbQABAAABABIgBgBQgBAAAAAAQg4gYgTgFIgMgCQgVgOgbAsIAPgrQAGgPABALIAKgEIARgCQAIACALAGQANAGA2Aog");
	this.shape_288.setTransform(6.6,276.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("rgba(255,255,255,0.682)").s().p("AgHgBIgMgCQgVgOgbAsIAPgrQAGgPABALIAKgEIARgCQAIACALAGQANAGA2AnQg4gXgTgFg");
	this.shape_289.setTransform(6.5,276.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_285},{t:this.shape_284}]},55).to({state:[{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[]},1).wait(40));

	// 
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ageg2QgNAAgLAMIgOAQIAcgVQALgEAOAHIABAAQAOAIAHADIADAHQAKAYAHAcQAIApAigNIgDgdQgFgZgLgRQgIgNgUgIQgCgLgNgEIgOgDg");
	this.shape_290.setTransform(3.3,259.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhEgWQANgLAMgKQAYgDABABQABAAABAAIABAAQAMAFAGACQACABABAAIACADQABACABABQALAYAIAbQAAABAAABQAJAlAfgHIgBgWQgGgZgMgPQgJgOgSgIQgCgLgMgFQAAAAgBAAIgLgEIgYABQgBAAgBAAQgLABgLAKQgBABgBABg");
	this.shape_291.setTransform(2.1,260);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhDgVQALgLALgJQAYgGABABQABAAABAAIABAAQALADAIABQABAAACABIABABQABACACACQAMAWAJAbQAAABAAABQALAkAbgCIAAgCIACgLIAAAAQgIgYgMgQQgJgOgSgKQgDgKgKgGQgBAAAAAAIgLgEIgZAAQAAAAgBAAQgMABgMAKQAAABgCABgAhFgTIACgC");
	this.shape_292.setTransform(1.1,260.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAHgnIgJgEIgZgBQAAAAgBAAQgMACgMAJQgBABgBABIgQAQQALgNAMgLQAYgIAAABQABAAABAAIABAAQAMABAIAAQABAAABAAIACABQABACACACQAAAAAAABQADAFADAFIAPAfQABABAAABQAAAAABABQAAACABABQAAABAAAAQALAiAZAEIAAgBIAEgDQgJgXgNgTQgKgMgQgLQgEgKgJgGQgBAAAAgBIgCAAgAAHgoQAAAAAAABQADAEADAG");
	this.shape_293.setTransform(0.1,261.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAMggQgBAAAAAAQAAAAgBgBQgBAAAAAAIgLgFIgYgBQgBAAgBAAQgMABgMAJQgBACgBAAIgRAQQALgOAMgLQAXgKAAAAQABAAABAAIABAAQAMgBAJgBQABAAAAgBIACACQACABABABQAGAJAFAJQABAAAAABQgDgDgCgDgAAQgbQgCgCgCgDAAUgWQgCgCgBgCQAIAOAHAOQAAABAAABQAMAgAWAKIABAAIAFAEQgKgWgNgTQgLgNgPgMIAAAAQgBgDgCgCIAAgBQgCgDgCgC");
	this.shape_294.setTransform(-1,261.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAigBQgFgGgFgFQgFgJgJgIQAAAAgBAAIgKgGIgDAAIgUgCIgCAAQgBAAgBAAQgMACgNAJQgBABgBABIgRAPQAKgPALgLQAXgNABAAQABAAABAAIABAAQALgCAKgDQACAAABgBIABABQABABABACQAQATAOAcQABABAAABgABDArQgJgPgKgNQgHgKgHgGQAMAcAUAQIABAAIACAEIAEAHIAAABQgCgEgCgE");
	this.shape_295.setTransform(-2,262.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhJgGQAJgRALgLQAXgPAAAAQABAAABAAIABAAQALgFALgDQABgBACgBIACAAQAAACACABQAQATAPAbQABABAAAAQAOAcARAVIABABIAIATIAAAAQgNgUgOgTQgLgPgNgNQgGgJgHgJQgBAAAAAAIgLgGIgCAAIgVgDIgCAAQAAAAgBAAQgNACgNAJQgBABAAABg");
	this.shape_296.setTransform(-3,263.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABLBBIhBhWIgLgIIgXgDIgCAAQgOACgOAKIgUAQQAJgSAKgLIAWgSIABAAIAZgMIAFgCQATASATAfIAdA2g");
	this.shape_297.setTransform(-4,263.9);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("rgba(255,255,255,0.682)").s().p("AAKgVIgLgIIgXgDIgCAAQgOACgOAKIgUAQQAJgRAKgMIAWgRIABAAIAZgMIAFgDQATASATAgIAdA1IAKAbg");
	this.shape_298.setTransform(-4,263.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_290}]},48).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[]},1).wait(42));

	// 
	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAugMIAFAhIABAWIgEAYIgEg4QgDgMgGgMIgPgUIgKgIQgKgHgIABIgHACIgUAKIgOAMIgCACQAIgRAKgJIAGgGQAIgFAHgEIAKgEIALACIAOAKQAQAOAFAUg");
	this.shape_299.setTransform(10.9,254.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("rgba(255,255,255,0.682)").s().p("AAsALQgDgMgGgMIgPgUIgKgIQgKgHgIABIgHACIgTAKIgPAMIgCACQAJgRAJgJIAGgGIAPgJIAKgEIAMACIANAKQAQAOAFAUIACAIIAFAhIABAWIgEAYg");
	this.shape_300.setTransform(10.9,254.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAsADQAAAAgBAAQgDgKgHgKQgBgBgBgBQgGgJgHgHQgBgCgBgBIgJgFQgBgBgBAAQgHgFgJABIgLAEIgQAJIgQAPQAJgQAKgJQAPgKAHgCIAKgCIAMACIAMALQAOARAFASIACAIIABADQAAABABACQAAADABACIAAACIAAgEIAAgBQgBgBAAAAgAAsAEIAAAAQAAACABACAAsAEIAAgBAArAAQAAABABADAAtAFQgBgBAAAAAAtAKQADALACAJIAFAQIgDAPQgCgagFgZg");
	this.shape_301.setTransform(9.3,255.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAbgaIAAABQABABAAABQABABAAAAIAGAQQABACAAACIACAGQAEAVAHAMIAGAIIAAAAIADAFIgCAEIAAgEQgBgCAAgDQgBgGgBgFIgHgiQgBAAgBgBQgEgLgIgIQgCgCgCgBAAbgaQgFgHgGgGQgBgBgCAAIgJgFQgCgBAAAAQgIgDgIABIgIABIgDABIgRAKIgNANIgDACQALgOAKgKQAQgIAIAAIAKAAIALADIALAMQAEAGAEAGgAA4AyQgBgCAAgDQgBgGgBgF");
	this.shape_302.setTransform(7.8,256.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgOgyIAKACIALAEIALANQAKASAFAQIACAIQAEAXAJAKIANAHIgBgEQgEgcgIgUIgCgEQAAgCgBgBQgGgKgJgHQgBgBgCgBQgDgKgKgGQgCAAgBgBIgKgEQgBAAAAgBQgHgBgHAAgAgbgwIgCAAIAAABQABgBABAAQAFgCAEAAIAAAAQABAAAAAAQABAAABAAIAAAAQABAAAAAAAg5gaQAJgKAKgIQAFgCAEgBIgQAJIgMAMIgCACIgCACQACgCACgCg");
	this.shape_303.setTransform(6.3,257.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhAgXQAMgMANgKQARgEAIACIAVAJIAIAOQAJATAEAQIADAIQAEAYAMAHIASADIgCgOQgDgdgLgTIgCgDQgBgCgBgBQgGgJgLgGQgCgBgBgBQgDgKgLgFQgBgBgCAAIgIgDQgBgBgCAAQgJAAgJAAIgLACIgQAKIgOAOg");
	this.shape_304.setTransform(4.7,258.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAOgQIANArQAFAYANAFIAYgCIgCgYQgEgdgNgSIgFgGQgIgJgPgFQgCgMgOgEIgNgCIgdACIgSALIgOARIAcgVIAIgCQAIAAAKAFIAVALg");
	this.shape_305.setTransform(3.3,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_300},{t:this.shape_299}]},43).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[]},1).wait(49));

	// 
	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmARIAwghIAigGQATAAASAIQAVAKAUASIAXAYIgFgHIALAMIADADIANAOIhDhWIAAAAIgWgWQgRgPgJAHIgEADQgUAOgYAVIgDACIgTAOg");
	this.shape_306.setTransform(13.7,242.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgbgsQgFACgFAEIgLAGIgSAOIgKALQARgVATgNIANgDIAFgBQAQgEANADQAFABAFACQALAFANAMQAOAOAIANIAGAWIACADIAGAZIgjgmIgCgaIgOgXQgFgEgEgDQgHgFgFgBIgEgBQgNgCgPAIg");
	this.shape_307.setTransform(12.3,249.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAUggQgTgUgQAHIgTALIgQANIgBABQALgXAOgJIADgCQALgIAKgDQAJgEAQAPQAQAPAFATIAGAcIABAKIABACIgBAkIgCALIgFg4IgHgUIgNgTg");
	this.shape_308.setTransform(10.8,254.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("rgba(255,255,255,0.682)").s().p("AAsALIgHgUIgNgTIgEgEQgTgUgQAHIgTALIgQANIgBABQALgXAOgJIADgCQALgIAKgDQAJgEAQAPQAQAPAFATIAGAcIABAKIABACIgBAkIgCALg");
	this.shape_309.setTransform(10.8,254.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_306}]},41).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[]},1).wait(54));

	// 
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAcgPQgMgJgNgEQgagIggARIgVANQgLAHgMALQAKgMAcgVIAwgpQANgNA5BMIAsBAIg1g/g");
	this.shape_310.setTransform(17.9,152.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("rgba(255,255,255,0.682)").s().p("AAwACIgVgRQgMgJgNgEQgZgIggARIgVANQgLAHgMALQAKgMAcgVIAwgpQANgNA5BMIArBAg");
	this.shape_311.setTransform(17.9,152.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhjALQAMgLAbgVIAyglQAVgFAyBDIAnA3Ig0g9IgVgUQgBgBgCgBQgLgIgLgCQgCAAAAgBQgZgDgeARQgCABgDACIgQALQgNAIgKAKg");
	this.shape_312.setTransform(17.2,165.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhMgIQABAAAAgBIAPgMIA0ggQAYgDAxA/IAcAmIAGAJIg0g9IgVgUQgBgCgCgBQgMgIgKgCQgBAAgBAAQgYAAgdARQgDACgCABIgRAMgAhTgCIABgBQACgBACgCQgBABgCABQgCACgCACQgHAEgGAGIAAAAQAAAAABAAIAJgJQACgBABAAAhTgCQgBABgBABAhRgEQADgCACgCAhOgGQABgBABgBAhYABQACgBADgC");
	this.shape_313.setTransform(16.5,178.7);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag7gVIgPAMQgNAJgKAJQAOgLAYgTgAgRgqIAMgHQAbAAAvA8IAcAjIABAEIg0g+IgUgVQgCgBgBgBQgNgJgKgBQAAAAgCAAQgHAAgIADQgBAAAAAAQgRAFgTANQgCACgDABIAjgSgAgYgnIAGgD");
	this.shape_314.setTransform(15.8,191.7);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABgAvIgzg/IgUgUQgCgBgCgCQgMgJgJgBQgCAAgCABQgXAGgcATQgCABgCACIgQAMQgMAJgLAKQAQgMAXgRIA4gXQAfADArA2IAZAfIADAD");
	this.shape_315.setTransform(15.2,204.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhALQARgLAUgQIA7gSQAhAFAqAzIAbAfIg6hIIgUgUQgCgCgCgBQgNgKgHAAQgDAAgCABQgXAJgbAUQgCABgCACIgQAMQgMAJgJAJQgBABgBABIgBABQACgBABgCg");
	this.shape_316.setTransform(14.7,217.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhlAPQATgOAVgOIA8gOQAlAIAnAvIABgBIAaAdIg+hOIgUgUQgCgCgBgBQgOgLgIABQgCAAgCABQgWAMgbAUQgCACgCACIgPAMQgNAKgKAKg");
	this.shape_317.setTransform(14.2,229.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ag2gQIA3gDQApAKAnAvIgFgHIALAMIADADIANAOIhDhWIgWgWQgRgPgJAHQgXAQgcAYIgTAOIgUATg");
	this.shape_318.setTransform(13.7,242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_311},{t:this.shape_310}]},34).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[]},1).wait(56));

	// 
	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgWgkIAgACQAcAIATAaIAHA7QAUAOAMgYIADgIQABgQgngkIgMgLQhQhYhEBkQAXgOAWgHg");
	this.shape_319.setTransform(26.5,111.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhhgEQAUgOAXgLIAegJIAcgDQAbAEAWAeIAOA4QASAPANgOQgFgZgegcIgLgMQhLhWhKBhg");
	this.shape_320.setTransform(24.2,121.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgEgwQgOgDgQAFQgeAIggAmQARgNAZgOIAbgNgAgEgwIAEgBQAWAAAbAiIABADIAUAzQAQAPALgEQgGgUgagcIgMgKQgBgCgCgCQAAgBgBAAQgbgegagFIAAAA");
	this.shape_321.setTransform(21.9,132.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgoggIAkgVQARgDAeAlIAMAUIAQAfQAOAQAMAGQgJgQgXgZIgKgMIgBgBQgsg0gyAUQgbALgdAdQAOgLAagTg");
	this.shape_322.setTransform(19.7,142.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhjAMQAKgMAcgVIAwgpQAMgKAjAtIBDBcIgrgxIgGgJQg9hQhaBVg");
	this.shape_323.setTransform(17.9,152.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("rgba(255,255,255,0.682)").s().p("AA6AQIgGgJQg9hQhaBVQAKgMAcgVIAwgpQALgKAkAtIBCBcg");
	this.shape_324.setTransform(17.9,152.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_319}]},30).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[]},1).wait(63));

	// 
	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhigKQAngYAlgCQAygFAeApIAGA7QAVAOAMgYQAPgQg+g3QhQhYhEBkg");
	this.shape_325.setTransform(26.5,111.4);
	this.shape_325._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_325).wait(30).to({_off:false},0).to({_off:true},1).wait(67));

	// 
	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("rgba(255,255,255,0.682)").s().p("AgwAmQgfgFgIgaIgCguIAIADIAZARIACACQAdATAmgBIAQAAQASgBASgKIAZgQIgIANIgMAPIgQAQIgDABQgfAVgzgBg");
	this.shape_326.setTransform(2,111.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(255,255,255,0.682)").s().p("AgrAlQghgDgMgYIAAgBIgEgOIgGggIAJABIAbAQIACABIABABIABABQAeARApAAIACAAIAPAAIADAAQASgCATgKIABgBIAbgRIgCAJIAAABIgNARIgBABIgPAOIgCACIgBABIgBABQgfAWg4AAg");
	this.shape_327.setTransform(5,112.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(255,255,255,0.682)").s().p("AgTAlIgVgBQgjgCgPgWIgBgBIgHgMQgFgPgEgUIAAAAIAJAAIAeAQIABABIACABIACAAQAfAQAuABIACAAIAQgBIADAAQAUgCATgLIABgBIAegSIADAGIgBAAIgMASIgBABQgIAJgHAIIgCACIgCAAIgBABQggAZg9ABg");
	this.shape_328.setTransform(8.1,113.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(255,255,255,0.682)").s().p("AglAlQgngCgSgTIgBAAIgLgQQgHgLgFgXIAAAAIAKgBIAhAPIACABIABABIABABQAjANAxABIADAAIARAAIACAAQAXgCATgLIACgBIAfgTIAIABIABAAQgEAFgJAPIgBABQgIALgIAHIgCABIgBADIgCABQggAahDACg");
	this.shape_329.setTransform(11.4,115);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("rgba(255,255,255,0.682)").s().p("AgMAoIgXAAQgpAAgWgRIgBgBIgOgOQgKgLgGgZIAAgBIAKgCIAkAQIACAAIACABIACAAQAjAMA2ACIADAAIASgBIADAAQAYgBAUgNIACAAQASgNAPgHIAOgEIABgBIgOAWIgBABQgHANgJAIIgCABIgBADIgCABQghAchIADIgBAAg");
	this.shape_330.setTransform(14.6,115.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("rgba(255,255,255,0.682)").s().p("AhnAdIgSgOQgMgNgHgaIAKgCIAoAPIADACQAnAJA7AAIAWAAQAbAAAXgNQAVgNAQgIIAVgJQgEAEgLATQgIARgLAIIgDAEQgiAfhNAEIgaABQgsgBgagPg");
	this.shape_331.setTransform(17.9,116.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_326}]},15).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[]},1).wait(77));

	// Layer 14
	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("rgba(255,255,255,0.682)").s().p("AgEAuQgygEgkgUIgEgDQgkgTAAgZQAAgQAJgFIAWAOQAVALAiANIAkALQAlAMAWAAIAHAAQAUgCAVgIIAGgCIAagOQgPAWgMALIgFAEQgcAVgyAAg");
	this.shape_332.setTransform(-0.6,8.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("rgba(255,255,255,0.682)").s().p("AATAuIgVgBIgEAAQgugEghgSIgEgDIgFgDQgggSgBgYIAAgCQAAgOAKgEIAWANQATALAfALIAEACIAhAJIADABQAjAMAWgBIAHAAQATgDASgGIADgBIAFgDIASgIIAGgCQgMAQgKALIgFAFIgFADQgaAUgwABIgDAAg");
	this.shape_333.setTransform(-0.5,15.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("rgba(255,255,255,0.682)").s().p("AARAtIgUAAIgEAAQgugEgggTIgEgCIgDgDQgfgTgBgYIAAgBQABgOAJgDIAWAOQATAKAeALIAEACIAhAIIADABQAhALAXgCIAGAAIABAAQASgDASgHIACAAIAGgBIAPgIIAFgCQgMAQgJALIgGAEIgFAEQgZAUgwAAIgCAAg");
	this.shape_334.setTransform(-0.3,22.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("rgba(255,255,255,0.682)").s().p("AAPAsIgTAAIgFAAQgtgDgegUIgEgDIgBgBIgCgCQgcgTgBgXIAAgBQAAgOALgCIAUAOQAUALAdAKIAEACIAgAIIADABQAhAKAWgDIAGgBIABAAQASgCARgGIACAAIAFgBIAOgHIAEgCQgMAQgKAKIgEAFIgFAEQgaASguABIgDAAg");
	this.shape_335.setTransform(-0.2,29.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("rgba(255,255,255,0.682)").s().p("AANArIgTAAIgEAAQgtgDgcgUIgDgDIgCgBIgCgCQgZgTgCgXIAAgCQACgLAJgBIAWANQASALAdAJIAEACIAfAIIACABQAiAIAWgDIAFAAIABgBQARgCASgGIACAAIAEgBIALgFIAEgBQgLAPgLAKIgEAFIgFADQgZATguAAIgDAAg");
	this.shape_336.setTransform(-0.1,36);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("rgba(255,255,255,0.682)").s().p("AALArIgSgBIgEAAQgtgDgbgVIgDgCIgBgBIgCgCQgXgTgCgYIAAgBQACgLAKAAIAVANQASAMAdAJIAEABIAeAHIABABQAhAIAXgEIAFAAIABgBQARgDARgFIACAAIADgBIAKgDIADgBQgMAPgKAKIgFAEIgEAEQgaARgsACIgDAAg");
	this.shape_337.setTransform(0,42.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("rgba(255,255,255,0.682)").s().p("AAJAqIgSAAIgDAAQgtgDgZgWIgDgCIgCgBIgBgCQgVgUgBgXIAAgBQACgKAKABIAUANQASAMAcAIIAEACIAdAGIADABQAfAHAXgFIAFAAIABgBQARgCAQgHIABAAIADAAIAIgBIADAAQgMAOgKAKIgFAEIgFADQgZASgrABIgDAAg");
	this.shape_338.setTransform(0.1,49.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("rgba(255,255,255,0.682)").s().p("AAHApIgSAAIgDAAQgsgCgYgXIgCgCIgCgBIgBgCQgTgUgBgXIAAgBQACgJALACIATANQATAMAbAIIAEABIAcAGIADABQAfAGAWgFIAFgBIABgBQAQgCAQgHIABAAIACABIAGAAIACAAQgLAOgKAKIgFAEIgFADQgYARgrABIgDAAg");
	this.shape_339.setTransform(0.2,56.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("rgba(255,255,255,0.682)").s().p("AAGApIgSAAIgDAAQgsgDgWgXIgDgCIgCgEQgRgTgBgXIAAgBQADgIALADIATAMQASAMAbAJIAEABIAbAFIADAAQAeAGAWgGIAFAAIABAAQAQgEAPgIIABABIABABIAFACIABABQgLAOgKAIIgFAEIgEAEQgZAQgqACIgCAAg");
	this.shape_340.setTransform(0.3,63.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("rgba(255,255,255,0.682)").s().p("AgRAoQgrgCgUgYIgDgCIgCgEQgOgTgBgXIAAgBQACgHALAEIATAMQASAMAaAIIAFABIAbAFIACAAQAdAFAXgFIAEgBIACgBQAPgFAPgHIAAABIAAABIADAEIAAACQgKANgKAIIgFAEIgEADQgZAQgoACIgEAAIgRAAIgDAAg");
	this.shape_341.setTransform(0.5,70.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("rgba(255,255,255,0.682)").s().p("AgSAoQgrgCgTgYIgCgDIgCgDQgMgUgBgXIAAgBQADgFALAEIASAMQASANAaAHIAEABIAbAEIACAAQAcAEAXgFIAEgCIABAAQAPgGAPgHIAAABIAAACIAAAGIAAACQgKAMgKAJIgFADIgFADQgYAQgoACIgCAAIgRAAIgDAAg");
	this.shape_342.setTransform(0.6,77);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(255,255,255,0.682)").s().p("AgVAoQgqgCgSgZIgCgDIgBgDQgKgUgBgXIAAgBQADgEAMAFIARAMQASANAZAHIAEABIAbADIACAAQAbADAXgGIAEgCIABAAQAPgGANgIIAAACIgCAKIAAACQgLAMgKAJIgFADIgEADQgYAPgnACIgBAAIgSABIgDAAg");
	this.shape_343.setTransform(0.8,83.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(255,255,255,0.682)").s().p("AgYAnQgqgBgQgaIgBgDIgBgBIAAgCQgJgUgBgXIAAAAQAEgEAMAGIARAMQASANAYAHIAEAAIAbADIACAAQAaACAWgGIAFgCIABgBIAbgNIAAABIgBADIgEAKIgBACQgKAMgKAIIgGADIgEADQgXAOglADIgCAAIgSAAIgDAAg");
	this.shape_344.setTransform(1.1,90.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(255,255,255,0.682)").s().p("AgcAnQgpgBgOgaIgCgDIAAgBIAAgDQgGgUgCgWIAAgBQAFgCAMAHIARALQASAOAXAGIAFAAIAZADIACAAQAZABAWgIIAFgBIABgBIAbgOIgBABIgCADIgGAMIgBADQgLAMgJAHIgGAEIgDACQgYAOgjADIgCAAIgSAAIgEAAg");
	this.shape_345.setTransform(1.4,97.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.682)").s().p("AgeAnQgpgBgNgbIgBgDIgBgBIAAgCQgDgVgCgWQAFgCAMAIIARAMQARANAXAGIAEAAIAZACIACAAQAYAAAXgIIAEgCIABgBIAagOIgBABIgKASIgCADQgKALgKAIIgFADIgEACQgYAOgiACIgCAAIgRABIgDAAg");
	this.shape_346.setTransform(1.7,104.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("rgba(255,255,255,0.682)").s().p("AhVALIgCgEIgCgtQAEgBANAJIAQALQASAOAWAFIAdACQAYAAAYgKIAEgCIAZgQIgNAWQgMANgLAJIgFADQgYAPgkADIgUABQgrAAgLgdg");
	this.shape_347.setTransform(2,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_332}]}).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[]},1).wait(82));

	// 
	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA8jaQAlA1AVAzQARAoAIAnQANA+gMA9QgLA5ggA3IgUAfQhIBghbhaQhNhLALhYQAHg0Ajg1QAPgXATgXQASgWAmhiIAdhTQAaAfAVAfg");
	this.shape_348.setTransform(14.6,312.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.1,0.9,25.4).s().p("AhSDtQhNhLALhYQAHg0Ajg1QAPgXATgXQASgWAmhiIAdhTQAaAfAVAfQAlA1AVAzQARAoAIAnQANA+gMA9QgLA5ggA3IgUAfQglAygqAAQgnAAgtgsg");
	this.shape_349.setTransform(14.6,312.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiWBEQAHg0Ajg1QAOgXATgXQAdgtAfhIQALgWAIgWQAHgPAHgQQAaAfAWAfQAdAtARAlQAGALAFAMQAKAZAHAZQADAPADAOQAJAugEAtQgCAQgEAQQgFAYgKAYQgMAfgUAdQgLAPgLAOQgGAHgFAGQgxAxg3gaQgKgEgKgHQgIgGgIgHQgGgFgGgGQhKhLALhXg");
	this.shape_350.setTransform(13.5,325.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.2,0.9,25.3).s().p("AgnELQgKgEgKgHIgQgNIgMgLQhKhLALhXIAAgCQAHg0Ajg1QAOgXATgXQAdgtAfhIIATgsIAOgfQAaAfAWAfQAdAtARAlIALAXQAKAZAHAZIAGAdQAJAugEAtIgGAgQgFAYgKAYQgMAfgUAdIgWAdIgLANQggAgghAAQgTAAgUgJg");
	this.shape_351.setTransform(13.5,325.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiYA9QAHg0Ajg1QAOgXATgXQAegvAihCQALgUAJgUQAIgOAIgOQAbAeAVAgQAdAtARAlQAFAMAFALQAKAaAGAZQAEAPADAOQAIAugFAsQgDARgEAPQgGAYgKAXQgNAegWAcQgLAOgMAOQgGAGgHAFQgxAvg3gbQgJgFgKgGQgJgGgIgHQgFgGgGgGQhIhLAMhYg");
	this.shape_352.setTransform(12.4,338.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.4,0.9,25.1).s().p("AgtEGIgTgLIgRgNIgLgMQhIhLAMhYIAAgCQAHg0Ajg1QAOgXATgXQAegvAihCIAUgoIAQgcQAbAeAVAgQAdAtARAlIAKAXQAKAaAGAZIAHAdQAIAugFAsQgDARgEAPQgGAYgKAXQgNAegWAcIgXAcIgNALQgfAeggAAQgUAAgVgKg");
	this.shape_353.setTransform(12.4,338.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiaA2QAIg1Aig0QAOgXASgXQAfgwAlg9QAMgTAKgRQAJgNAJgLQAbAdAVAfQAdAuARAlQAFAMAFAMQAJAaAGAZQAEAPACAOQAIAvgHArQgCAQgFAQQgHAYgLAWQgOAcgYAbQgLANgNANQgGAGgHAFQgyArg2gbQgKgFgKgHQgIgGgIgHQgGgGgFgGQhGhMANhYg");
	this.shape_354.setTransform(11.3,351.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.6,0.9,24.9).s().p("AgyEBQgKgFgKgHIgQgNIgLgMQhGhMANhYIAAgCQAIg1Aig0QAOgXASgXQAfgwAlg9IAWgkIASgYQAbAdAVAfQAdAuARAlIAKAYQAJAaAGAZIAGAdQAIAvgHArQgCAQgFAQQgHAYgLAWQgOAcgYAbIgYAaIgNALQgeAaggAAQgUAAgWgKg");
	this.shape_355.setTransform(11.3,351.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AidAwQAJgzAhg3QAPgXASgXQAggxAng4QAMgRANgPQAJgLAJgKQAcAdAWAgQAdAuAPAlQAGAMAEAMQAJAaAGAZQADAPACAOQAHAwgHAqQgDAQgEAPQgIAYgMAWQgPAbgaAZQgMAMgNAMQgHAGgHAEQgxAog4gbQgKgFgKgHQgIgGgIgIQgFgFgGgGQhDhMANhag");
	this.shape_356.setTransform(10.2,364.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.7,0.9,24.8).s().p("Ag4D8QgKgFgKgHIgQgOIgLgLQhDhMANhaIAAgBQAJgzAhg3QAPgXASgXIBHhpIAZggIASgVQAcAdAWAgQAdAuAPAlIAKAYQAJAaAGAZIAFAdQAHAwgHAqQgDAQgEAPQgIAYgMAWQgPAbgaAZIgZAYIgOAKQgeAYgeAAQgWAAgXgLg");
	this.shape_357.setTransform(10.2,364.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AifApQAJg0Ahg2QAOgXASgXQAigyApg0QAOgPANgNQALgJAJgIQAcAcAWAhQAdAuAPAmQAFAMAEAMQAJAaAGAZQADAPACAOQAGAxgIApQgDAQgFAPQgJAYgNAUQgPAagcAYQgNALgOAMQgHAFgHAEQgyAlg4gdQgKgFgKgHQgHgGgIgIQgFgFgGgGQhBhNAOhag");
	this.shape_358.setTransform(9.1,377.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.9,0.9,24.6).s().p("Ag+D2IgUgMIgPgOIgLgLQhBhNAOhaIAAgBQAJg0Ahg2QAOgXASgXQAigyApg0IAbgcIAUgRQAcAcAWAhQAdAuAPAmIAJAYQAJAaAGAZIAFAdQAGAxgIApQgDAQgFAPQgJAYgNAUQgPAagcAYIgbAXIgOAJQgeAVgcAAQgYAAgYgNg");
	this.shape_359.setTransform(9.1,377.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AihAiQAJg0Agg2QAOgXASgXQAkg0ArguQAPgNAOgLQALgHALgHQAcAcAWAhQAcAuAPAmQAFAMAEAMQAJAbAFAZQADAPACAOQAGAxgJApQgEAQgGAOQgJAYgOAUQgQAZgeAWQgNAKgPALQgHAEgIAEQgzAig4gdQgJgFgKgHQgIgHgHgHQgFgGgFgGQhAhNAQhbg");
	this.shape_360.setTransform(8,390.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.1,0.8,24.4).s().p("AhFDxIgTgMIgPgOIgKgMQhAhNAQhbIAAgBQAJg0Agg2QAOgXASgXQAkg0ArguIAdgYIAWgOQAcAcAWAhQAcAuAPAmIAJAYQAJAbAFAZIAFAdQAGAxgJApQgEAQgGAOQgJAYgOAUQgQAZgeAWIgcAVIgPAIQgcATgcAAQgZAAgagOg");
	this.shape_361.setTransform(8,390.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AikAcQAKg1Agg1QAOgYASgXQAlg1AtgpQAQgLAQgJQALgGALgEQAdAbAWAhQAcAvAPAmQAFAMAEAMQAIAbAFAZQACAPACANQAFAzgJAoQgFAQgGAOQgKAYgOATQgRAYghAUQgNAKgPAJQgIAFgIADQg0Aeg4gdQgJgFgKgHQgHgHgIgIQgEgFgFgGQg+hOAQhbg");
	this.shape_362.setTransform(6.9,403.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.3,0.8,24.3).s().p("AhLDsIgTgMIgPgPIgJgLQg+hOAQhbIAAgBQAKg1Agg1QAOgYASgXQAlg1AtgpIAggUIAWgKQAdAbAWAhQAcAvAPAmIAJAYQAIAbAFAZIAEAcQAFAzgJAoQgFAQgGAOQgKAYgOATQgRAYghAUIgcATIgQAIQgbAPgaAAQgbAAgcgOg");
	this.shape_363.setTransform(6.9,403.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AimAUQALg0Afg2QAOgXASgYQAlg2AwgkQARgJARgHQANgEALgCQAeAZAVAiQAcAwAPAmQAEAMAEANQAIAaAFAaQACAPABAMQAFA0gLAnQgEAQgHAOQgLAXgPATQgRAWgjAUQgOAJgQAIQgIAEgIADQg1Abg3geQgKgGgKgHQgHgGgHgIQgFgGgEgGQg8hOARhcg");
	this.shape_364.setTransform(5.8,416.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.5,0.8,24).s().p("AhQDmIgUgNIgOgOIgJgMQg8hOARhcIAAgBQALg0Afg2QAOgXASgYQAlg2AwgkQARgJARgHIAYgGQAeAZAVAiQAcAwAPAmIAIAZQAIAaAFAaIADAbQAFA0gLAnQgEAQgHAOQgLAXgPATQgRAWgjAUIgeARIgQAHQgaANgYAAQgdAAgdgQg");
	this.shape_365.setTransform(5.8,416.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioANQALg1Afg1QAOgXARgYQAng3AygfQATgIARgEQAOgDAMAAQAeAZAWAiQAbAwAOAmQAFANAEAMQAHAbAEAaQADAPABAMQAEA1gMAmQgFAQgHAOQgLAXgRASQgSAVgkASQgPAIgQAHQgIAEgJADQg2AXg3geQgKgGgJgHQgHgHgHgIQgFgGgEgGQg6hPAShcg");
	this.shape_366.setTransform(4.7,429.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.8,-22.7,0.8,23.8).s().p("AhWDhIgTgNIgOgPIgJgMQg6hPAShcIAAgBQALg1Afg1QAOgXARgYQAng3AygfQATgIARgEQAOgDAMAAQAeAZAWAiQAbAwAOAmIAJAZQAHAbAEAaIAEAbQAEA1gMAmQgFAQgHAOQgLAXgRASQgSAVgkASIgfAPIgRAHQgXAKgYAAQgfAAgfgRg");
	this.shape_367.setTransform(4.7,429.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirAHQAMg1Aeg1QAOgYARgXQApg5A0gaQAUgGASgCQAOgBANABQAfAZAWAjQAbAwANAmQAFANAEAMQAHAbAEAaQACANABAPQADA1gMAlQgGAQgHAOQgMAWgSASQgSAUgnAQQgPAHgRAHQgJADgJADQg2AUg4gfQgJgGgKgHQgHgHgGgIQgFgGgEgGQg4hQAThcg");
	this.shape_368.setTransform(3.7,442);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.7,-22.9,0.7,23.7).s().p("AhdDcIgTgNIgNgPIgJgMQg4hQAThcIAAgBQAMg1Aeg1QAOgYARgXQApg5A0gaQAUgGASgCQAOgBANABQAfAZAWAjQAbAwANAmIAJAZQAHAbAEAaIADAcQADA1gMAlQgGAQgHAOQgMAWgSASQgSAUgnAQQgPAHgRAHIgSAGQgUAHgWAAQgiAAgigSg");
	this.shape_369.setTransform(3.7,442);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitABQAMg2Adg0QAOgYARgYQAqg6A3gUQAVgEATAAQAPAAAOADQAeAYAWAkQAbAwAOAnQAEAMAEANQAHAbADAaQACANABAPQADA1gOAlQgGAQgIANQgNAXgSAQQgTATgpAPQgPAGgSAGQgJADgJACQg4ARg3gfQgJgHgKgHQgHgHgGgIQgFgGgDgGQg2hQAUhdg");
	this.shape_370.setTransform(2.6,454.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-23,0.6,23.6).s().p("AhjDYIgTgOIgNgPIgIgMQg2hQAUhdIAAgBQAMg2Adg0QAOgYARgYQAqg6A3gUQAVgEATAAQAPAAAOADQAeAYAWAkQAbAwAOAnIAIAZQAHAbADAaIADAcQADA1gOAlQgGAQgIANQgNAXgSAQQgTATgpAPIghAMIgSAFQgSAGgUAAQglAAgkgUg");
	this.shape_371.setTransform(2.6,454.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgCQANg4Adg0QAOgYARgYQArg7A5gQQAWgCAVACQAPADAOAEQAgAYAWAkQAbAwAMAnQAFANADAMQAHAcADAaQABANABAOQACA3gOAkQgGAPgIANQgOAXgTAQQgUARgrAOQgQAFgTAFQgJACgJACQg5AOg3ggQgJgGgKgHQgGgIgHgIQgEgGgEgGQgzhQAUhcg");
	this.shape_372.setTransform(1.5,467.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.9,0.6,23.6).s().p("AhpDUIgTgNIgNgQIgIgMQgzhQAUhcIAAgBQANg4Adg0QAOgYARgYQArg7A5gQQAWgCAVACQAPADAOAEQAgAYAWAkQAbAwAMAnIAIAZQAHAcADAaIACAbQACA3gOAkQgGAPgIANQgOAXgTAQQgUARgrAOIgjAKIgSAEQgQAFgSAAQgoAAgmgXg");
	this.shape_373.setTransform(1.5,467.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiygGQANg4Adg0QANgYARgYQAtg8A7gLQAYgBAVAFQAQAEAPAHQAgAWAWAkQAbAxAMAnQAEANADANQAHAbADAZQABAPAAAOQACA4gPAjQgHAPgIANQgPAWgUAPQgVARgtAMQgQAEgTAEQgKACgJACQg6AKg3ggQgJgHgKgHQgGgIgGgIQgEgGgEgGQgxhRAVhcg");
	this.shape_374.setTransform(0.4,480.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-22.8,0.6,23.7).s().p("AhvDSIgTgOIgMgQIgIgMQgxhRAVhcIAAgBQANg4Adg0QANgYARgYQAtg8A7gLQAYgBAVAFQAQAEAPAHQAgAWAWAkQAbAxAMAnIAHAaQAHAbADAZIABAdQACA4gPAjQgHAPgIANQgPAWgUAPQgVARgtAMIgjAIIgTAEQgNACgOAAQgtAAgpgYg");
	this.shape_375.setTransform(0.4,480.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1gJQAOg5Acg0QAOgZAQgXQAug+A+gFQAZABAWAHQARAFAPAJQAhAWAWAkQAaAyAMAnQAEANADANQAHAbACAYQABAQAAAOQABA4gQAiQgHAQgJAMQgPAWgVAPQgVAPgvAKQgRAEgUAEQgKABgIABQg9AIg2ghQgJgHgKgIQgGgHgGgJQgEgFgDgGQgwhSAWhdg");
	this.shape_376.setTransform(-0.6,492.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.7,0.5,23.8).s().p("Ah1DQIgTgPIgMgQIgHgLQgwhSAWhdQAOg5Acg0QAOgZAQgXQAug+A+gFQAZABAWAHQARAFAPAJQAhAWAWAkQAaAyAMAnIAHAaQAHAbACAYIABAeQABA4gQAiQgHAQgJAMQgPAWgVAPQgVAPgvAKIglAIIgSACIgWABQgxAAgsgag");
	this.shape_377.setTransform(-0.6,492.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACPiIQAVAoAMAnQAMApADAlQAFBOgVAqQgVAqghAVQgiAWheAJQg+AEg2giIgTgOIgMgRQg1hXAYhkQAXhdA6hNQAmgyBAgBQAaADAXAJQA9AXAhA/g");
	this.shape_378.setTransform(-1.7,505.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.5,-22.6,0.5,23.9).s().p("Ah7DNIgTgOIgMgRQg1hXAYhkQAXhdA6hNQAmgyBAgBQAaADAXAJQA9AXAhA/QAVAoAMAnQAMApADAlQAFBOgVAqQgVAqghAVQgiAWheAJIgOAAQg2AAgwgeg");
	this.shape_379.setTransform(-1.7,505.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_349},{t:this.shape_348}]},62).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[]},1).wait(20));

	// 
	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohpQDEDCjxCfQgHAEgIADQgvAKgzgdIgHgEQh+hKgDhfQgEhfA5jhIAmAlQBdBUBbAag");
	this.shape_380.setTransform(14.7,291.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],3,-25.3,3,21.3).s().p("Ag2DsIgHgEQh+hKgDhfQgEhfA5jhIAmAlQBdBUBbAaIATAFQDEDCjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_381.setTransform(14.7,291.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwAkQAAhQAxi4QAVAJAbgVQBMBGBKAWQAnApgBAmQCcCbjBCBQgIAMgMALQgoAJgngXQgSAWgXgVQh9hTARhqg");
	this.shape_382.setTransform(14.9,296.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["rgba(103,225,225,0.314)","rgba(255,255,255,0.541)"],[0,1],2.3,-25.2,2.3,21.4).s().p("AgbDgQgSAWgXgVQh9hTARhqQAAhQAxi4QAVAJAbgVQBMBGBKAWQAnApgBAmQCcCbjBCBQgIAMgMALQgLADgLAAQgdAAgcgRg");
	this.shape_383.setTransform(14.9,296.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AieATQAEhAApiQQAVgBAkg6QA5A2A6ASQBFBRgMBIQB1B2iRBiQgKAVgQATQgeAHgfgQQgfAugqgoQh8hcAmh3g");
	this.shape_384.setTransform(14.9,300.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["rgba(104,195,195,0.314)","rgba(255,255,255,0.541)"],[0,1],1.9,-24,1.9,22.6).s().p("AhIDmQh8hcAmh3QAEhAApiQQAVgBAkg6QA5A2A6ASQBFBRgMBIQB1B2iRBiQgKAVgQATQgeAHgfgQQgQAZgUAAQgSAAgTgTg");
	this.shape_385.setTransform(14.9,300.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiLABQAIgxAghnQAWgLAuhgQAnAmAoAPQBjB4gWBoQBNBShiBEQgKAdgUAbQgVAHgWgKQgsBGg+g7Qh7hlA7iDg");
	this.shape_386.setTransform(14.7,304.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["rgba(104,166,166,0.314)","rgba(255,255,255,0.541)"],[0,1],1.7,-23,1.7,23.5).s().p("AhLDpQh7hlA7iDQAIgxAghnQAWgLAuhgQAnAmAoAPQBjB4gWBoQBNBShiBEQgKAdgUAbQgVAHgWgKQgZAlgbAAQgZAAgdgag");
	this.shape_387.setTransform(14.7,304.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3gQQAMgkAYg+QAXgVA2iGQAWAXAXALQCBCfghCLQAmAsgyAlQgMAmgYAjQgLAFgMgDQg9BehPhOQh7huBQiNg");
	this.shape_388.setTransform(14.4,308.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["rgba(105,136,136,0.314)","rgba(255,255,255,0.541)"],[0,1],1.5,-22.1,1.5,24.5).s().p("AhMDrQh7huBQiNQAMgkAYg+QAXgVA2iGQAWAXAXALQCBCfghCLQAmAsgyAlQgMAmgYAjQgLAFgMgDQghAzglAAQghAAglgjg");
	this.shape_389.setTransform(14.4,308.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AAakJQCeDGgsCuIgDANQgOAtgbAsIgEAHQhMB2hihhQh6h3BliZIAfgqQAZgeA8itg");
	this.shape_390.setTransform(14.6,312.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-21.1,0.9,25.4).s().p("AhSDtQh6h3BliZIAfgqQAZgeA8itIANAPQCeDGgsCuIgDANQgOAtgbAsIgEAHQgqBBgwAAQgnAAgtgsg");
	this.shape_391.setTransform(14.6,312.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_381},{t:this.shape_380}]},57).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[]},1).wait(35));

	// 
	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA4kBQArAoAeAqQCmEIjxCfQgHAEgIADQgvAKgzgdQiFhMgDhhQgEhfD/jhg");
	this.shape_392.setTransform(-10.8,277.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],2.5,-25.3,2.5,21.3).s().p("Ag7DsQiFhMgDhhQgEhfD/jhQArAoAeAqQCmEIjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_393.setTransform(-10.8,277.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBBBQgEhfCejhQBQBTBMAiQC0DkjxCfQg9ASg0geQiEhLgEhhg");
	this.shape_394.setTransform(1.9,284.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],2.8,-25.1,2.8,21.4).s().p("Ag5DtQiEhLgEhhQgEhfCejhQBQBTBMAiQC0DkjxCfQgXAHgWAAQgkAAgggTg");
	this.shape_395.setTransform(1.9,284.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohpQDEDCjxCfQgHAEgIADQgvAKgzgdQiFhMgDhhQgEhfA5jhQB6B+B3Aag");
	this.shape_396.setTransform(14.7,291.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],3,-25.3,3,21.3).s().p("Ag2DsQiFhMgDhhQgEhfA5jhQB6B+B3AaQDEDCjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_397.setTransform(14.7,291.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_393},{t:this.shape_392}]},55).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[]},1).wait(40));

	// 
	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB5BgQgOBeg6APQhiAqg0g6QhehRAGhXIDvjrQAugQAkASQB5CKiECqg");
	this.shape_398.setTransform(-6.6,274);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-25.4,0.6,21.2).s().p("AhlC9QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APQgqASgfAAQgvAAgegig");
	this.shape_399.setTransform(-6.6,274);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+AZQBohyCKiFQAtgIAjAVQCACdiUCnQgNBSgzANQhaAlg1g2QhjhQAEhYg");
	this.shape_400.setTransform(-7.3,274.7);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["rgba(103,234,234,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-25.6,0.9,21).s().p("AhfDBQhjhQAEhYQBohyCKiFQAtgIAjAVQCACdiUCnQgNBSgzANQgmAPgdAAQgtAAgfggg");
	this.shape_401.setTransform(-7.3,274.7);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/AfQBVhvCeiVQAtAAAiAZQCGCvijCmQgMBFgsALQhTAhg0gyQhphPADhag");
	this.shape_402.setTransform(-7.8,275.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["rgba(103,212,212,0.314)","rgba(255,255,255,0.541)"],[0,1],1.2,-25.6,1.2,21).s().p("AhZDIQhphPADhaQBVhvCeiVQAtAAAiAZQCGCvijCmQgMBFgsALQgiANgbAAQgrAAgfgeg");
	this.shape_403.setTransform(-7.8,275.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjAAlQBEhrCxikQAsAIAiAcQCMDBizCkQgLA4gkAJQhMAdg0guQhuhOABhcg");
	this.shape_404.setTransform(-8.4,275.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["rgba(104,191,191,0.314)","rgba(255,255,255,0.541)"],[0,1],1.4,-25.5,1.4,21).s().p("AhTDPQhuhOABhcQBEhrCxikQAsAIAiAcQCMDBizCkQgLA4gkAJQgeALgYAAQgqAAgggcg");
	this.shape_405.setTransform(-8.4,275.6);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBAsQAyhoDFi0QAsAQAhAgQCSDRjCCkQgKArgdAIQhFAYg0gqQh0hOAAhcg");
	this.shape_406.setTransform(-9,276.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["rgba(104,170,170,0.314)","rgba(255,255,255,0.541)"],[0,1],1.7,-25.4,1.7,21.1).s().p("AhNDWQh0hOAAhcQAyhoDFi0QAsAQAhAgQCSDRjCCkQgKArgdAIQgaAJgVAAQgpAAghgbg");
	this.shape_407.setTransform(-9,276.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjCAyQAghlDZjCQArAXAgAkQCZDjjSCiQgJAfgWAGQg9ATg0gmQh6hNgBheg");
	this.shape_408.setTransform(-9.6,276.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["rgba(105,149,149,0.314)","rgba(255,255,255,0.541)"],[0,1],2,-25.4,2,21.2).s().p("AhHDdQh6hNgBheQAghlDZjCQArAXAgAkQCZDjjSCiQgJAfgWAGQgVAGgUAAQgmAAgigZg");
	this.shape_409.setTransform(-9.6,276.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjCA5QANhiDsjSQAsAfAfAnQCfD2jiChQgHARgPAEQg3APgzghQh/hNgChfg");
	this.shape_410.setTransform(-10.2,277);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["rgba(105,127,127,0.314)","rgba(255,255,255,0.541)"],[0,1],2.3,-25.3,2.3,21.2).s().p("AhBDlQh/hNgChfQANhiDsjSQAsAfAfAnQCfD2jiChQgHARgPAEQgSAFgRAAQgkAAgjgXg");
	this.shape_411.setTransform(-10.2,277);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA4kBQArAoAeAqQCmEIjxCfQgHAEgIADQgvAKgzgdQiFhMgDhhQgEhfD/jhg");
	this.shape_412.setTransform(-10.8,277.4);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],2.5,-25.3,2.5,21.3).s().p("Ag7DsQiFhMgDhhQgEhfD/jhQArAoAeAqQCmEIjxCfQgHAEgIADQgNADgNAAQgiAAgmgWg");
	this.shape_413.setTransform(-10.8,277.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_399},{t:this.shape_398}]},48).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[]},1).wait(42));

	// 
	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA4C6QiVBJg1hWQg3hXAOhNQC2hPAuhHQAwhHArgGQBMALgWC4QgXC2hrAbg");
	this.shape_414.setTransform(-2.1,267.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.6,-22.4,-1.6,24.2).s().p("AiSCtQg3hXAOhNQC2hPAuhHQAwhHArgGQBMALgWC4QgXC2hrAbQhDAhgxAAQg5AAgdgug");
	this.shape_415.setTransform(-2.1,267.4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6AKQCqhWA8hRQAvg8AqgBQBVAlgsC1QgVCkhiAZQiKBCg1hQQg/hWANhPg");
	this.shape_416.setTransform(-3.1,268.8);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["rgba(103,225,225,0.314)","rgba(255,255,255,0.541)"],[0,1],-1,-23.1,-1,23.4).s().p("AiICvQg/hWANhPQCqhWA8hRQAvg8AqgBQBVAlgsC1QgVCkhiAZQg9AeguAAQg3AAgdgsg");
	this.shape_417.setTransform(-3.1,268.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6AMQCdheBLhaQAvgxApADQBeA+hDCxQgTCVhXAWQiBA8g1hLQhGhUALhRg");
	this.shape_418.setTransform(-4.1,270.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["rgba(104,195,195,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.5,-23.8,-0.5,22.8).s().p("Ah/CxQhGhUALhRQCdheBLhaQAvgxApADQBeA+hDCxQgTCVhXAWQg5AbgqAAQg2AAgdgqg");
	this.shape_419.setTransform(-4.1,270.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7AOQCRhlBahkQAugmAnAIQBnBYhYCvQgSCChNATQh2A3g1hGQhOhTAJhTg");
	this.shape_420.setTransform(-4.9,271.5);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["rgba(104,166,166,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.1,-24.3,-0.1,22.2).s().p("Ah2C0QhOhTAJhTQCRhlBahkQAugmAnAIQBnBYhYCvQgSCChNATQg1AYgmAAQgyAAgegng");
	this.shape_421.setTransform(-4.9,271.5);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8ARQCFhtBohtQAugbAmANQBwBxhuCsQgQBwhDARQhtAxg0hAQhWhSAHhVg");
	this.shape_422.setTransform(-5.8,272.8);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["rgba(105,136,136,0.314)","rgba(255,255,255,0.541)"],[0,1],0.3,-24.9,0.3,21.6).s().p("AhtC4QhWhSAHhVQCFhtBohtQAugbAmANQBwBxhuCsQgQBwhDARQgwAVgjAAQgxAAgdgkg");
	this.shape_423.setTransform(-5.8,272.8);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB5BgQgOBeg6APQhiAqg0g6QhehRAGhXIDvjrQAugQAkASQB5CKiECqg");
	this.shape_424.setTransform(-6.6,274);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.6,-25.4,0.6,21.2).s().p("AhlC9QhehRAGhXIDvjrQAugQAkASQB5CKiECqQgOBeg6APQgqASgfAAQgvAAgegig");
	this.shape_425.setTransform(-6.6,274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_415},{t:this.shape_414}]},43).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[{t:this.shape_425},{t:this.shape_424}]},1).to({state:[]},1).wait(49));

	// 
	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWipQAuBHAUBAIADAIQAUA/gEAzQgCAWgGATIgNAgQgMAcgXATQgXASghAIQgoAKgwgLIgZgHQgVgGgQgLIgKgHQhFgygBhhIAAgGQABhWA3hVQAbgpAogfIAygiIAfgJIAUAXQASAWAPAXg");
	this.shape_426.setTransform(12.3,257.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-23,0.9,23.6).s().p("AgdDpIgZgHQgVgGgQgLIgKgHQhFgygBhhIAAgGQABhWA3hVQAbgpAogfIAygiIAfgJIAUAXQASAWAPAXQAuBHAUBAIADAIQAUA/gEAzQgCAWgGATIgNAgQgMAcgXATQgXASghAIQgTAEgVAAQgWAAgagFg");
	this.shape_427.setTransform(12.3,257.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiyAXQAzhAA5g/QAmglAfggIAbgWQAQgNAQgKIAWABQAQAHAPALQAlAlASAwQAMAagGA6QAKAhgDAcQgGAtgOAhIgRAiQgMAUgRAQQgXASgfAHQgjANgkgCQggAHgYgGQgRgFgOgIQgLgGgJgLQgkgbgCgzQgcgtAHgog");
	this.shape_428.setTransform(5,263.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.2,-23.2,-0.2,23.3).s().p("AhEDYQgRgFgOgIQgLgGgJgLQgkgbgCgzQgcgtAHgoQAzhAA5g/IBFhFIAbgWQAQgNAQgKIAWABQAQAHAPALQAlAlASAwQAMAagGA6QAKAhgDAcQgGAtgOAhIgRAiQgMAUgRAQQgXASgfAHQgjANgkgCQgRAEgPAAQgNAAgLgDg");
	this.shape_429.setTransform(5,263.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACEjaQAeAEAPAgQAWAwgNBvIgBAJQgKBDgWAuIgWAmIgXAYQgXASgdAHQgeAPgaAIQgxAQgkgIQgNgDgMgGQgRgJgNgRIgGgJQg3hXAOhNQBkgqA8gqQAvgiAVggIAHgKQAQgWAQgPIAZgUQAOgIANgCg");
	this.shape_430.setTransform(-2.1,267.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-1.6,-22.4,-1.6,24.2).s().p("AhVDZQgNgDgMgGQgRgJgNgRIgGgJQg3hXAOhNQBkgqA8gqQAvgiAVggIAHgKQAQgWAQgPIAZgUQAOgIANgCQAeAEAPAgQAWAwgNBvIgBAJQgKBDgWAuIgWAmIgXAYQgXASgdAHQgeAPgaAIQghAKgbAAQgNAAgMgCg");
	this.shape_431.setTransform(-2.1,267.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_427},{t:this.shape_426}]},41).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[]},1).wait(54));

	// 
	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARjyIA1BGQAzBLAZBBQAYA+gBA4IgCAhIgBAGIgIAfQgXBCg7ASIhVADIgagFIglgNQhagogGhvIAAgBQgFhVA4haQAcgsArgsIAkgkIAagQg");
	this.shape_432.setTransform(16.6,167);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.6,1,24).s().p("AgjDuIglgNQhagogGhvIAAgBQgFhVA4haQAcgsArgsIAkgkIAagQIABAAIA1BGQAzBLAZBBQAYA+gBA4IgCAhIgBAGIgIAfQgXBCg7ASIhVADg");
	this.shape_433.setTransform(16.6,167);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioBGQgEhWA4hZQAbgrArgqIAjghIAcgRQAeAhAZAjQAzBKAYBBQAXA+AAA2IgEAqIgJAgQgXBAg8ASQgrACgqAAIgCAAIgYgFIgCgBQgSgFgRgHQgBgBgCAAQhWgqgFhtQAAgBAAAAg");
	this.shape_434.setTransform(16,180);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["rgba(103,234,234,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.6,1,23.9).s().p("AgNDxIgYgFIgCgBIgjgMIgDgBQhWgqgFhtIAAgBQgEhWA4hZQAbgrArgqIAjghIAcgRQAeAhAZAjQAzBKAYBBQAXA+AAA2IgEAqIgJAgQgXBAg8ASQgrACgqAAg");
	this.shape_435.setTransform(16,180);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipBCQgDhVA4hYQAcgsArgpIAlggIAcgQQAdAiAZAjQAzBKAXBCQAXA+gBA1IgEAkIgKAmQgYA/g9ARQgqAEgrgCIgCAAIgYgFIgCgBQgRgGgRgHQgCAAgBgBQhVgrgFhuQAAAAAAgBg");
	this.shape_436.setTransform(15.4,193);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["rgba(103,212,212,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.7,1,23.9).s().p("AgODwIgCAAIgYgFIgCgBQgRgGgRgHIgDgBQhVgrgFhuIAAgBQgDhVA4hYQAcgsArgpIAlggIAcgQQAdAiAZAjQAzBKAXBCQAXA+gBA1IgEAkIgKAmQgYA/g9ARQgcADgdAAIgcgBg");
	this.shape_437.setTransform(15.4,193);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipA/QgDhWA4hXQAcgsAsgoIAmgeIAcgPQAeAhAYAjQAzBLAXBCQAWA+gCA1IgEAkIgLAlQgYA+g+ARQgqAFgsgDIgCAAIgXgGIgCgBQgSgFgRgIQgBgBgCAAQhUgtgDhtQAAgBAAAAg");
	this.shape_438.setTransform(14.8,206);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["rgba(104,191,191,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.7,0.9,23.8).s().p("AgRDvIgCAAIgXgGIgCgBQgSgFgRgIIgDgBQhUgtgDhtIAAgBQgDhWA4hXQAcgsAsgoIAmgeIAcgPQAeAhAYAjQAzBLAXBCQAWA+gCA1IgEAkIgLAlQgYA+g+ARQgZADgaAAIgjgBg");
	this.shape_439.setTransform(14.8,206);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqA7QgBhVA4hXQAcgtAtgmIAmgdIAdgOQAfAiAXAiQAyBMAWBBQAWA/gCA0IgFAkIgMAmQgYA8g/ARQgqAHgsgGIgCAAIgXgFIgCgBQgTgGgQgIQgBgBgCgBQhTgugDhtQAAAAAAgBg");
	this.shape_440.setTransform(14.1,219);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["rgba(104,170,170,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.8,1,23.7).s().p("AgTDtIgCAAIgXgFIgCgBQgTgGgQgIIgDgCQhTgugDhtIAAgBQgBhVA4hXQAcgtAtgmIAmgdIAdgOQAfAiAXAiQAyBMAWBBQAWA/gCA0IgFAkIgMAmQgYA8g/ARQgWAEgXAAQgVAAgUgDg");
	this.shape_441.setTransform(14.1,219);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqA4QgBhWA4hWQAdgtAtglIAngcIAegMQAfAhAXAjQAxBLAWBCQAVBAgDAzIgGAkIgMAlQgZA7hAARQgpAIgtgIIgCAAIgXgFIgCgBQgTgGgPgIQgCgBgBgBQhTgwgBhsQAAgBAAAAg");
	this.shape_442.setTransform(13.5,232);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["rgba(105,149,149,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.9,0.9,23.7).s().p("AgWDrIgCAAIgXgFIgCgBQgTgGgPgIIgDgCQhTgwgBhsIAAgBQgBhWA4hWQAdgtAtglIAngcIAegMQAfAhAXAjQAxBLAWBCQAVBAgDAzIgGAkIgMAlQgZA7hAARQgUAEgWAAQgWAAgWgEg");
	this.shape_443.setTransform(13.5,232);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirA0QAAhVA4hWQAdgtAugjIAogbIAegMQAfAiAXAjQAxBLAVBDQAVA/gEAzIgGAkIgOAlQgYA6hCARQgoAJgugKIgCAAIgXgFIgCgBQgSgGgQgJQgBgBgCgBQhRgxgBhtQAAAAAAgBg");
	this.shape_444.setTransform(12.9,244.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["rgba(105,127,127,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-22.9,0.9,23.6).s().p("AgZDqIgCAAIgXgFIgCgBQgSgGgQgJIgDgCQhRgxgBhtIAAgBQAAhVA4hWQAdgtAugjIAogbIAegMQAfAiAXAjQAxBLAVBDQAVA/gEAzIgGAkIgOAlQgYA6hCARQgTAEgWAAQgUAAgZgFg");
	this.shape_445.setTransform(12.9,244.9);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABWipQAxBLAUBEQAUA/gEAzIgHAkIgBAFIgNAgQgZA4hCARQgoAKgugLIgCAAIgZgHQgVgGgQgLQhRgzABhtQABhWA3hVQAegtAvgiIAngaIABgBIAfgJIABABQAeAgAWAjg");
	this.shape_446.setTransform(12.3,257.9);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],0.9,-23,0.9,23.6).s().p("AgbDpIgCAAIgZgHQgVgGgQgLQhRgzABhtQABhWA3hVQAegtAvgiIAngaIABgBIAfgJIABABQAeAgAWAjQAxBLAUBEQAUA/gEAzIgHAkIgBAFIgNAgQgZA4hCARQgTAEgVAAQgVAAgZgFg");
	this.shape_447.setTransform(12.3,257.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_433},{t:this.shape_432}]},34).to({state:[{t:this.shape_435},{t:this.shape_434}]},1).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_447},{t:this.shape_446}]},1).to({state:[]},1).wait(56));

	// 
	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgLQAqhyBxh2IBXBNQDUDQiRCeIgmAjQiAAXhIglQgbgOgTgXQhDhTAqhwg");
	this.shape_448.setTransform(26.4,124);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.2,-24.6,-6.2,21.9).s().p("AhoDdQgbgOgTgXQhDhTAqhwQAqhyBxh2IBXBNQDUDQiRCeIgmAjQgzAJgpAAQhAAAgsgXg");
	this.shape_449.setTransform(26.4,124);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitABQAehyBvh3QAfAOAeAOIAYAMQDKDRhxCZQgQAWgPARQhsAqhSggQgdgMgUgTQhLhJAehyg");
	this.shape_450.setTransform(23.9,135.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["rgba(103,218,218,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.4,-24.9,-4.4,21.7).s().p("AhPDbQgdgMgUgTQhLhJAehyQAehyBvh3IA9AcIAYAMQDKDRhxCZQgQAWgPARQg9AYg0AAQgpAAgkgOg");
	this.shape_451.setTransform(23.9,135.5);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AirANQARhyBvh5QAcAAAegBIAZAEQDBDShSCVQgNAYgMASQhVA9hggcQgdgJgWgQQhTg9ASh0g");
	this.shape_452.setTransform(21.5,147.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-2.6,-25.2,-2.6,21.3).s().p("Ag3DXQgdgJgWgQQhTg9ASh0QARhyBvh5IA6gBIAZAEQDBDShSCVQgNAYgMASQg6AqhBAAQgbAAgfgJg");
	this.shape_453.setTransform(21.5,147.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AipApQAFh0Bth5QAbgPAdgPIAZgFQC5DRgzCTQgJAagKASQg+BRhugXQgegHgXgNQhbgxAGh1g");
	this.shape_454.setTransform(19,157.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["rgba(105,143,143,0.314)","rgba(255,255,255,0.541)"],[0,1],-0.7,-24.1,-0.7,22.4).s().p("AgfDjQgegHgXgNQhbgxAGh1QAFh0Bth5QAbgPAdgPIAZgFQC5DRgzCTQgJAagKASQgwA/hOAAQgVAAgZgFg");
	this.shape_455.setTransform(19,157.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AARjzQCuDXgYCRQgEAZgIATQgmBjh9gTQgegEgZgKQhjgmgGh1QgHh1Brh7QAZgdAggdg");
	this.shape_456.setTransform(16.6,167.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],1,-22.7,1,23.8).s().p("AgIDxQgegEgZgKQhjgmgGh1QgHh1Brh7QAZgdAggdIAcgRQCuDXgYCRQgEAZgIATQggBThfAAQgSAAgSgDg");
	this.shape_457.setTransform(16.6,167.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_449},{t:this.shape_448}]},30).to({state:[{t:this.shape_451},{t:this.shape_450}]},1).to({state:[{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[]},1).wait(63));

	// 
	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-8.2,-24.1,-8.2,22.4).s().p("Ag1D2Qh/gNgOiHQgVjFAhhVIACgEQAhhPBpAcQBTDMB1AyQBKAiguBPQgbAshBA7QhDARgyAAQgQAAgOgCg");
	this.shape_458.setTransform(16,100.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["rgba(102,240,240,0.314)","rgba(255,255,255,0.541)"],[0,1],-8,-24.4,-8,22.2).s().p("Ag/DuQh5gVgIiEQgPi9AphYQAmhGBjAeQBZDHBkA6QBAAjgvBMQgeAphBA1Qg2AMgqAAQgaAAgXgEg");
	this.shape_459.setTransform(17.1,102.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.lf(["rgba(103,225,225,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.8,-24.7,-7.8,21.9).s().p("AhHDlQh0gbgDiCQgIi1AwhaQAqg6BdAhQBfDBBTBBQA3AmgxBJQgiAkhAAwQgrAIgiAAQgkAAgdgIg");
	this.shape_460.setTransform(18,105.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6A6QgDirA5heQAtgsBXAiQBkC9BCBIQAtAngyBGQglAhg/AqQhVANg4gUQhtgiADiBg");
	this.shape_461.setTransform(18.9,108);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.lf(["rgba(103,210,210,0.314)","rgba(255,255,255,0.541)"],[0,1],-7.4,-24.9,-7.4,21.6).s().p("AhQDdQhtgiADiBQgDirA5heQAtgsBXAiQBkC9BCBIQAtAngyBGQglAhg/AqQgjAFgbAAQgtAAgigMg");
	this.shape_462.setTransform(18.9,108);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AtQAEijBAhhQAxgfBPAkQBsC4AxBPQAjAqgzBDQgoAcg/AlQhVAKg2gYQhngqAIh+g");
	this.shape_463.setTransform(19.8,110.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.lf(["rgba(104,195,195,0.314)","rgba(255,255,255,0.541)"],[0,1],-7,-25.2,-7,21.3).s().p("AhYDVQhngqAIh+QAEijBAhhQAxgfBPAkQBsC4AxBPQAjAqgzBDQgoAcg/AlQgZADgXAAQg0AAgngRg");
	this.shape_464.setTransform(19.8,110.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizAhQAKiaBIhlQA0gRBJAmQBxCyAgBXQAaAsg1A/QgrAZg/AfQhUAHg0gdQhhgwAOh8g");
	this.shape_465.setTransform(20.7,113.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.lf(["rgba(104,181,181,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.7,-25.4,-6.7,21.2).s().p("AhgDNQhhgwAOh8QAKiaBIhlQA0gRBJAmQBxCyAgBXQAaAsg1A/QgrAZg/AfIggABQg+AAgqgXg");
	this.shape_466.setTransform(20.7,113.1);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwAWQARiSBPhnQA3gFBDApQB4CtAPBeQAQAug2A8QgvAUg/AaQhUAFgxgiQhcg3AUh6g");
	this.shape_467.setTransform(21.6,115.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.lf(["rgba(104,166,166,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.4,-25.4,-6.4,21.2).s().p("AhoDHQhcg3AUh6QARiSBPhnQA3gFBDApQB4CtAPBeQAQAug2A8IhuAuIgUABQhGAAgrgeg");
	this.shape_468.setTransform(21.6,115.4);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AitANQAXiJBXhrQA6AJA9ArQB+CogCBlQAGAwg3A5QgzAQg+AVQhTABgwgmQhWg+Aah4g");
	this.shape_469.setTransform(22.5,117.6);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.lf(["rgba(105,151,151,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-25.2,-6.1,21.3).s().p("AhxDDQhWg+Aah4QAXiJBXhrQA6AJA9ArQB+CogCBlQAGAwg3A5IhxAlIgGAAQhPAAguglg");
	this.shape_470.setTransform(22.5,117.6);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisAEQAdiABfhuQA7AWA6AsQCCCkgTBsQgDAyg5A2Qg1AMg+APQhTgBgugqQhQhGAgh2g");
	this.shape_471.setTransform(23.7,119.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["rgba(105,136,136,0.314)","rgba(255,255,255,0.541)"],[0,1],-6,-25,-6,21.5).s().p("Ah8DAQhQhGAgh2QAdiABfhuQA7AWA6AsQCCCkgTBsQgDAyg5A2IhzAbQhTgBgugqg");
	this.shape_472.setTransform(23.7,119.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugDQAkh6BmhxQA/AjA0AvQCICcgkB2QgNA0g6AzQg5AIg7AKQhVgEgsgwQhJhMAkhyg");
	this.shape_473.setTransform(25,121.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["rgba(106,121,121,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.1,-24.9,-6.1,21.6).s().p("AiJC7QhJhMAkhyQAkh6BmhwQA/AiA0AvQCICcgkB2QgNA0g6AzIh0ASQhVgEgsgwg");
	this.shape_474.setTransform(25,121.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AivgLQAqhwBuh1IADgDQA/A0AuAwQCOCXg1B+QgXA1g7AwIh3AJQhVgIgqgzQhDhUAqhwg");
	this.shape_475.setTransform(26.4,123.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-6.2,-24.6,-6.2,22).s().p("AiWC5QhDhTAqhxQAqhwBuh0IADgDQA/AzAuAxQCOCWg1B+QgXA1g7AxIh3AIQhVgIgqgzg");
	this.shape_476.setTransform(26.4,123.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_458}]},20).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_462},{t:this.shape_461}]},1).to({state:[{t:this.shape_464},{t:this.shape_463}]},1).to({state:[{t:this.shape_466},{t:this.shape_465}]},1).to({state:[{t:this.shape_468},{t:this.shape_467}]},1).to({state:[{t:this.shape_470},{t:this.shape_469}]},1).to({state:[{t:this.shape_472},{t:this.shape_471}]},1).to({state:[{t:this.shape_474},{t:this.shape_473}]},1).to({state:[{t:this.shape_476},{t:this.shape_475}]},1).to({state:[]},1).wait(67));

	// 
	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("rgba(77,77,77,0.4)").s().p("ABjAfQhohQhkA6QAWgXAWgMQAXgLAYACQANACAKAFQAOAFAMAHQArAUAcAgg");
	this.shape_477.setTransform(0.5,78.7);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("rgba(77,77,77,0.4)").s().p("ABgAjQhjhbhhBCQAUgZAWgMQAVgMAZACQAMACALAFQANAFAMAHQAnATAaAlg");
	this.shape_478.setTransform(1.7,79.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("rgba(77,77,77,0.4)").s().p("ABdAoQhdhmhfBKQASgbAUgNQAVgNAZACQALABALAFQAOAGAMAHQAjAUAXAog");
	this.shape_479.setTransform(2.9,79.7);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("rgba(77,77,77,0.4)").s().p("AhZALQAQgcATgOQAUgNAZACQAKABAMAFQAMAFAMAIQAeATAXAtIAAACQhZhxhaBRg");
	this.shape_480.setTransform(4.1,80.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("rgba(77,77,77,0.4)").s().p("AhVALQAOgeATgOQASgOAZABQALABALAFQANAFAMAJQAaASAVAyIABAFQhTh9hYBZg");
	this.shape_481.setTransform(5.3,81);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("rgba(77,77,77,0.4)").s().p("AhRALQAMgfASgPQARgPAaABQAKABAMAFQAMAFAMAJQAVARAUA3IADAHQhNiIhWBhg");
	this.shape_482.setTransform(6.6,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_477}]},15).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[]},1).wait(77));

	// Layer 13
	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("rgba(77,77,77,0.4)").s().p("Ah0ArQAKgOAVgkQAZgfAqgDIAZgBQAwADAcAaQAKAKALAQIAMAYIgogeQgtgagpAAQgjAAgjAaQgVARgNATg");
	this.shape_483.setTransform(0.4,-24.5);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("rgba(77,77,77,0.4)").s().p("AhyApQAJgOAVgiQAZgfAqgCIAYAAQAwAEAbAZQALALALAPIALAWIgngdQgtgZgpgBQgiAAgjAZQgVAQgNASg");
	this.shape_484.setTransform(0.4,-17.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("rgba(77,77,77,0.4)").s().p("AhyAoIAfgvQAageApgCIAYABQAuAEAbAZQAMAJALARIALAVIgogdQgsgZgoAAQgigBgjAYQgUAPgOASg");
	this.shape_485.setTransform(0.4,-10.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("rgba(77,77,77,0.4)").s().p("ABLAKQgsgZgnAAQgigBgjAWQgUAPgOARIgCAAQALgOAUgfQAagdAogBIAYAAQAuAFAbAZQAMAJALASIAKASIgngcg");
	this.shape_486.setTransform(0.4,-4.1);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("rgba(77,77,77,0.4)").s().p("ABKAKQgrgYgmgBQgigBgjAWQgTANgPARIgCAAIAggsQAagcAngBIAXABQAtAGAbAYQANAKAMARIAIARIgngcg");
	this.shape_487.setTransform(0.4,2.8);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("rgba(77,77,77,0.4)").s().p("ABKAKQgqgXgngCQgigBgiAUQgTANgPARIgCAAIAggrQAagbAmAAIAYABQArAHAcAXQANALAMARIAHAOIgmgbg");
	this.shape_488.setTransform(0.4,9.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("rgba(77,77,77,0.4)").s().p("ABKALQgqgXgmgCQgigBghASQgUANgPAQIgCAAIAggqQAagaAmAAIAXACQArAIAbAXQANAKANASIAGAMIglgag");
	this.shape_489.setTransform(0.3,16.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgpgXglgCQgigBghARQgUAMgPAPIgCAAIAggoQAbgZAlABIAWACQAqAIAbAXQAOALANARIAFALIglgag");
	this.shape_490.setTransform(0.3,23.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgogXglgCQgigCggARQgUAKgQAPIgCABIAggnQAbgZAlACIAWADQApAIAbAXQAOALAOARIADAJIgkgZg");
	this.shape_491.setTransform(0.3,30.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgogWglgDQghgCggAQQgUAJgQAPIgCABIAggmQAcgYAkACIAVADQAoAKAbAWQAPAMAOAQIACAIQgRgOgSgLg");
	this.shape_492.setTransform(0.3,37.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("rgba(77,77,77,0.4)").s().p("ABJALQgogVgkgDQghgCggAPQgUAIgQAOIgCABQAOgSASgTQAcgXAjADIAVADQAoALAaAUQAQAOAPAQIABAGQgSgOgRgLg");
	this.shape_493.setTransform(0.3,44.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("rgba(77,77,77,0.4)").s().p("ABIALQgngVgkgDQgggCggAOQgUAHgRANIgCABQAPgSASgRQAcgWAjADIAUAEQAnALAbAUIAfAfIgBADQgRgNgRgLg");
	this.shape_494.setTransform(0.3,51);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("rgba(77,77,77,0.4)").s().p("ABHALQgngUgigDQghgDgfAOQgTAFgSANIgDABQAQgSASgPQAcgWAiAEIAUAEQAmAMAbATIAfAfIgBACIgigYg");
	this.shape_495.setTransform(0.3,57.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("rgba(77,77,77,0.4)").s().p("ABnAiIghgXQgmgUgigDQgggDggAMQgTAFgSANIgCABQAPgRATgPQAcgVAhAEIAUAFQAlAMAaATIAhAgg");
	this.shape_496.setTransform(0.4,64.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("rgba(77,77,77,0.4)").s().p("ABmAhQgQgMgRgKQglgUgigDQghgEgfAMQgSAEgSAMIgDABQAQgSASgNQAcgUAhAFIAUAFQAjANAbATIAiAfg");
	this.shape_497.setTransform(0.4,71.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("rgba(77,77,77,0.4)").s().p("ABkAgQgQgNgQgJQglgTghgEQgggEgfAKQgTAGgSAJIgDABQARgSARgLQAegTAfAFIATAGQAjAOAbASIAjAgg");
	this.shape_498.setTransform(0.5,78.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_483}]}).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[]},1).wait(82));

	// 
	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgugEQA9AqAtgUQAugTAZguIAIgRQAOgfAGgqIAEgiIAACkIgcBLQgRAlgaAYQgpAng/AEIgbAAQhbgEgVhKQgJgggCgfQgDgwAPgwIAHgdQAhAmAeAag");
	this.shape_499.setTransform(12.8,339.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("rgba(0,0,0,0.251)").s().p("AiXBeQgJgggCgfQgDgxAPgvIAHgcQAhAlAeAaIAiAbQA9ApAtgVQAugSAZguIAIgQQAOggAGgqIAEgiIAACjIgcBMQgRAkgaAYQgpAog/ADIgbABQhbgFgVhJg");
	this.shape_500.setTransform(12.8,339.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AikAVQgBgaAHgbQADgQAGgPQAUgLALALQALALAKAKQAKAIAJAIQASAMARANQAKAEAKAFQAVALARADQAbAEAVgLQAggPAWgZQAJgMAIgNQAEgIAEgJQAKgXAGgdQABgIABgIQABgBAAgCQACgOACgPQAAATgBASIAAAiQgBAugCAuQgNAfgNAhIgFAKQgHAPgJAMQgLAPgMAMQgDACgCADQgaAWghAKQgXAGgXAAQgNAAgNgBQgSgBgPgFQgOgFgMgGQglgUgMgsQgJghgCgfg");
	this.shape_501.setTransform(11.8,351.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("rgba(0,0,0,0.251)").s().p("AgtCmQgSgBgPgFQgOgFgMgGQglgUgMgsQgJgggCgfQgBgbAHgbQADgQAGgPQAUgLALALIAVAVIATAQIAjAZIAUAJQAVALARADQAbAEAVgLQAggPAWgZQAJgMAIgNIAIgQQAKgYAGgdIACgQIABgDIAEgcIgBAkIAAAiIgDBdIgaA+IgFALQgHAPgJAMQgLAPgMAMIgFAFQgaAWghAKQgXAGgXAAIgagBg");
	this.shape_502.setTransform(11.8,351.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AimALQAAgWAHgXQAEgNAGgNQAVgJAMAMQALAKAKAKQAKAIAKAHQARAMASAKQAKAGAKAEQAUAKATABQAaADAWgLQAfgOAWgbQAJgMAHgNQAEgIAEgJQALgXAFgdQACgHABgHQAAgBAAgBQACgMACgMQAAATgBASIgBAhQgDAvgDAtQgOAegOAgIgFAKQgIAPgJAMQgLAOgNALQgDADgCACQgbAVghAIQgVAGgZgBQgNgBgNgBQgRgDgPgFQgNgFgMgHQgjgWgMgsQgIgggCggg");
	this.shape_503.setTransform(10.9,364.3);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("rgba(0,0,0,0.251)").s().p("AgZCjIgagCQgSgDgPgFQgNgFgMgHQgjgWgMgsQgIgggCggQAAgWAIgXQADgNAHgNQAUgJANAMIAVAUIATAPIAjAWIAUAKQAUAKATABQAaADAVgLQAggOAWgbQAJgMAHgNIAIgRQAKgXAGgdIADgOIAAgCIAEgYIgBAlIgBAhQgCAvgEAtIgcA+IgFAKQgIAPgJAMQgLAOgNALIgFAFQgaAVgiAIQgUAFgVAAIgEAAg");
	this.shape_504.setTransform(10.9,364.3);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AioACQACgTAIgTQAEgLAGgLQAWgFAMALQALAKALAKQAKAIAKAGQASAMASAIQAKAGAKAEQAUAIATABQAaABAVgLQAfgPAWgbQAIgMAIgNQAEgIAEgJQAKgXAGgdQABgFABgGQABgBAAgBQABgJACgLQgBATgBASIgBAiQgEAugFArQgOAggQAfIgFAKQgIAOgKAMQgMANgNALQgDACgCACQgbAUgiAHQgVAEgYgBQgNgBgNgCQgRgEgOgHQgNgFgLgIQgigXgLgsQgIgggCgfg");
	this.shape_505.setTransform(9.9,376.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("rgba(0,0,0,0.251)").s().p("AggCfIgagDQgRgEgOgHQgNgFgLgIQgigXgLgsQgIgggCgfQACgTAIgTQAEgLAGgLQAWgFAMALIAWAUIAUAOIAkAUIAUAKQAUAIATABQAaABAVgLQAfgPAWgbIAQgZIAIgRQAKgXAGgdIACgLIABgCIADgUIgCAlIgBAiQgEAugFArQgOAggQAfIgFAKQgIAOgKAMQgMANgNALIgFAEQgbAUgiAHQgPADgRAAIgNAAg");
	this.shape_506.setTransform(9.9,376.8);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqgHQADgQAJgQQAFgIAHgJQAWgCAMALQAMAKALAJQAKAHAKAHQASALATAHQAKAFAKAEQAUAHATAAQAZAAAVgMQAfgPAWgcQAIgLAIgOQAEgIADgIQALgYAGgdQABgEABgEQAAgBAAAAQACgIABgIQgBATgBASIgCAiQgEAugIAqQgPAfgRAfIgFAKQgJANgKALQgMANgOAKQgCACgDACQgcATgiAGQgUADgYgCQgNgCgNgCQgRgFgOgIQgMgGgKgIQgggYgLgsQgIgggCgeg");
	this.shape_507.setTransform(8.9,389.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("rgba(0,0,0,0.251)").s().p("AgmCaIgagEQgRgFgOgIQgMgGgKgIQgggYgLgsQgIgggCgeQADgQAJgQIAMgRQAWgCAMALIAXATIAUAOQASALATAHIAUAJQAUAHATAAQAZAAAVgMQAfgPAWgcQAIgLAIgOIAHgQQALgYAGgdIACgIIAAgBIADgQIgCAlIgCAiQgEAugIAqQgPAfgRAfIgFAKQgJANgKALQgMANgOAKIgFAEQgcATgiAGQgLACgOAAIgTgBg");
	this.shape_508.setTransform(8.9,389.3);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AisgRQAEgNAKgLQAFgHAHgHQAYACAMAKQALAKAMAJQAKAHALAGQASAKAUAHQAKAEAKADQAUAHATgCQAZgBAVgMQAegQAWgcQAIgLAHgOQAEgIAEgIQALgYAGgdQABgCAAgEIABAAQABgGABgFQgBASgBASIgDAiQgFAugKAqQgPAfgSAdIgGAKQgJANgKALQgNAMgPAKQgCACgDACQgcARgiAFQgWACgXgDQgMgCgNgEQgQgFgOgJQgLgHgLgIQgegagLgrQgHghgCgdg");
	this.shape_509.setTransform(7.9,401.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("rgba(0,0,0,0.251)").s().p("AgtCVIgZgGQgRgFgNgJQgLgHgLgIQgegagKgrQgIghgBgdQADgNAKgLQAFgHAHgHQAYACAMAKIAXATQAKAHAKAGQATAKATAHIAVAHQATAHAUgCQAZgBAUgMQAfgQAVgcQAJgLAHgOIAIgQQAKgYAHgdIABgGIABAAIABgLIgBAkIgEAiQgEAugKAqQgQAfgSAdIgGAKQgIANgLALQgNAMgOAKIgFAEQgdARghAFIgSABQgNAAgOgCg");
	this.shape_510.setTransform(7.9,401.9);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiugcQAGgIAKgHQAGgFAHgFQAZAFAMAKQAMAKALAIQALAHAKAGQATAHAUAIQAKAEAKACQAUAGAUgDQAYgCAVgNQAegQAVgcQAJgMAHgNQAEgIAEgJQAKgXAGgdQABgCABgCQABgDABgDQgBATgCASIgEAhQgGAugLApQgQAfgTAdIgHAJQgJANgKALQgOALgPAJQgCACgDABQgdARggADQgYACgXgFQgMgDgMgEQgQgGgNgJQgLgIgKgJQgdgbgKgrQgHghgCgeg");
	this.shape_511.setTransform(6.9,414.4);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("rgba(0,0,0,0.251)").s().p("Ag0CQIgYgHQgQgGgNgJQgLgIgKgJQgdgbgKgrQgHghgCgeQAGgIAKgHIANgKQAZAFAMAKIAXASIAVANQATAHAUAIIAUAGQAUAGAUgDQAYgCAVgNQAegQAVgcQAJgMAHgNIAIgRQAKgXAGgdIACgEIACgGIgDAlIgEAhQgGAugLApQgQAfgTAdIgHAJIgTAYQgOALgPAJIgFADQgdARggADIgMAAQgSAAgRgDg");
	this.shape_512.setTransform(6.9,414.4);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiwgmQAHgEALgEQAGgCAIgDQAZAIANAKQAMAJAMAIQAKAHALAFQATAHAVAHQAKADAKACQAUAEAUgDQAYgEAUgMQAegSAVgcQAJgMAHgNQAEgIADgJQALgXAGgdQABAAAAgBIAAAAQABAAABgCQgCATgBASIgFAiQgHAugNAoQgRAegUAdIgHAJQgKAMgKALQgOAKgQAIQgCACgDACQgeAPggACQgXABgXgGQgNgDgLgFQgQgHgNgKQgKgJgKgJQgbgdgJgrQgHgegCggg");
	this.shape_513.setTransform(6,426.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("rgba(0,0,0,0.251)").s().p("Ag7CLIgXgIQgQgHgNgKIgUgSQgagdgKgrQgHgegCggQAHgEALgEIAOgFQAZAIANAKIAYARIAVAMQATAHAVAHIAUAFQAUAEATgDQAZgEAUgMQAegSAVgcQAIgMAIgNIAHgRQALgXAFgdIACgBIAAAAIACgCIgEAlIgEAiQgHAugNAoQgRAegUAdIgHAJIgUAXQgOAKgQAIIgFAEQgeAPggACIgHAAQgUAAgUgFg");
	this.shape_514.setTransform(6,426.9);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiygvQAJAAALAAQAHABAIgBQAaAKANALQAMAIAMAIQALAHALADQATAIAVAFQAKADAIACQAXADATgFQAZgFAUgLQAdgUAUgcQAJgMAHgNQAEgIAEgJQALgYAFgcQABABAAABQABAAAAAAQABACAAABQgCATgBASIgFAhQgJAugQAoQgRAegVAbIgHAJQgKAMgLALQgPAJgQAIQgCABgDACQgeAOghABQgYgBgWgGQgMgEgLgFQgQgIgMgMQgKgIgJgKQgZgfgJgqQgHgegCghg");
	this.shape_515.setTransform(5,439.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("rgba(0,0,0,0.251)").s().p("AhACIQgNgEgLgFQgQgIgMgMQgKgIgIgKQgagfgJgqQgHgegCghIAUAAIAPAAQAaAKANALIAYAQQALAHALADQATAIAVAFIASAFQAXADAUgFQAYgFAUgLQAdgUAUgcQAJgMAHgNIAIgRQAKgYAHgcIABACIAAAAIABADIgDAlIgGAhQgIAugQAoQgRAegVAbIgHAJQgKAMgLALQgPAJgPAIIgGADQgeAOghABQgYgBgVgGg");
	this.shape_516.setTransform(5,439.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aizg2QAJAEAMAEQAHADAJABQAbAOANAKQAMAIAMAHQALAFAMAEQATAIAWAFQAKACAIABQAXACATgGQAYgGAUgMQAdgUAUgcQAJgMAHgNQAEgJADgIQALgYAGgcQABACAAACQAAAAAAABQABAEgBADQgBATgCASIgGAhQgJAugSAnQgRAegXAbIgHAIQgLAMgLAKQgPAJgRAHQgCABgDACQgfANghgBQgXgBgWgIQgMgEgLgGQgQgJgMgMQgJgKgIgKQgXgggJgqQgHgegBghg");
	this.shape_517.setTransform(4,451.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("rgba(0,0,0,0.251)").s().p("AgaCPQgXgBgWgIQgMgEgLgGQgQgJgMgMIgRgUQgXgggJgqQgHgegBghIAVAIQAHADAJABQAbAOANAKIAYAPQALAFAMAEQATAIAWAFIASADQAXACATgGQAYgGAUgMQAdgUAUgcQAJgMAHgNIAHgRQALgYAGgcIABAEIAAABIAAAHQgBATgCASIgGAhQgJAugSAnQgRAegXAbIgHAIIgWAWQgPAJgRAHIgFADQgdAMgeAAIgFAAg");
	this.shape_518.setTransform(4,451.5);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai2g9QALAIANAIQAIAFAIADQAdARANAKQAMAIAMAFQAMAGALAEQAUAHAWAEQAKABAJABQAXABATgHQAXgHAUgNQAdgUAUgdQAIgMAHgNQAEgIAEgJQAKgYAGgbQABADAAADQAAABAAAAQABAHgBAFQgBATgDASIgGAhQgLAugTAmQgSAegYAaIgIAIQgLALgLALQgQAIgRAGQgCABgDABQggAMghgCQgYgCgVgIQgMgFgLgHQgPgJgLgOQgJgKgIgLQgVghgJgqQgGgegCghg");
	this.shape_519.setTransform(3,463.7);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("rgba(0,0,0,0.251)").s().p("AghCPQgYgCgVgIQgMgFgLgHQgPgJgLgOIgRgVQgVghgJgqQgGgegCghIAYAQQAIAFAIADQAdARANAKIAYANIAXAKQAUAHAWAEIATACQAXABATgHQAXgHAUgNQAdgUAUgdQAIgMAHgNIAIgRQAKgYAGgbIABAGIAAABIAAAMIgEAlIgGAhQgLAugTAmQgSAegYAaIgIAIIgWAWQgQAIgRAGIgFACQgbAKgcAAIgKAAg");
	this.shape_520.setTransform(3,463.7);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai4hFQAMAMAOAMQAIAHAJAFQAdAVANAJQANAGAMAHQAMAGAMADQAUAHAWACQAJACAKAAQAXAAATgIQAYgJATgNQAcgVAUgdQAJgMAGgNQAEgIAEgJQALgYAGgbQAAAEAAAEQAAABAAABQABAJgBAHQgCAUgDASIgHAhQgLAugVAlQgTAdgZAaIgIAIQgMALgLAKQgRAHgRAGQgDABgCABQgfAKgjgDQgYgDgVgJQgMgGgKgHQgPgLgLgOQgIgLgHgLQgUgjgIgoQgHgggBghg");
	this.shape_521.setTransform(2.1,475.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("rgba(0,0,0,0.251)").s().p("AgoCPQgYgDgVgJQgMgGgKgHQgPgLgLgOIgPgWQgUgjgIgoQgHgggBghIAaAYQAIAHAJAFIAqAeIAZANQAMAGAMADQAUAHAWACIATACQAXAAATgIQAYgJATgNQAcgVAUgdQAJgMAGgNIAIgRQALgYAGgbIAAAIIAAACQABAJgBAHQgCAUgDASIgHAhQgLAugVAlQgTAdgZAaIgIAIIgXAVIgiANIgFACQgZAIgZAAIgQgBg");
	this.shape_522.setTransform(2.1,475.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6hMQAOAQAOAQQAJAJAJAHQAeAYANAHQANAIANAGQAMAGAMADQAUAGAXACQAIAAALAAQAXgBAUgJQAWgKAUgOQAbgVAUgdQAJgMAGgNQAEgIAEgJQAKgYAHgcQAAAGAAAFQAAACAAABQAAALgBAKQgCATgDASIgIAhQgMAsgXAnQgUAcgZAZIgJAIQgMAKgMAKQgRAGgSAGQgCABgDAAQgfAKgjgFQgZgDgVgLQgLgGgKgIQgOgLgLgPQgHgMgIgMQgSgkgIgnQgFghgCghg");
	this.shape_523.setTransform(1.1,488.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("rgba(0,0,0,0.251)").s().p("AguCPQgZgDgVgLQgLgGgKgIQgOgLgLgPIgPgYQgSgkgIgnQgFghgCghIAcAgQAJAJAJAHIArAfIAaAOQAMAGAMADQAUAGAXACIATAAQAXgBAUgJQAWgKAUgOQAbgVAUgdQAJgMAGgNIAIgRQAKgYAHgcIAAALIAAADQAAALgBAKQgCATgDASIgIAhQgMAsgXAnQgUAcgZAZIgJAIIgYAUIgjAMIgFABQgVAHgXAAIgWgCg");
	this.shape_524.setTransform(1.1,488.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8hTQAOATAQAUQAIAMAKAJQAfAZANAJQAOAHANAGQALAFANAEQAVAFAXAAQAIAAALAAQAXgCAUgKQAXgLASgPQAcgVAUgeQAIgMAHgNQAEgIADgJQAKgYAHgcQAAAIAAAGQAAACAAABQAAANgCAMQgBATgEASIgIAiQgNArgaAnQgUAcgbAYIgJAIQgMAJgMAKQgSAFgTAFQgCABgDABQggAIgjgGQgZgFgUgLQgLgGgKgJQgOgMgKgRQgHgMgHgMQgQglgHgoQgGgggBghg");
	this.shape_525.setTransform(0.2,500.4);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("rgba(0,0,0,0.251)").s().p("Ag2CPQgZgFgTgLQgMgGgKgJQgOgMgKgRIgOgYQgQglgIgoQgFgggBghIAeAnQAIAMAKAJQAfAZAOAJIAaANQALAFANAEQAVAFAXAAIATAAQAYgCATgKQAXgLASgPQAcgVATgeIAPgZIAIgRQALgYAGgcIAAAOIAAADIgCAZQgBATgEASIgIAiQgNArgaAnQgUAcgbAYIgJAIIgYATIgkAKIgGACQgSAFgUAAQgPAAgOgDg");
	this.shape_526.setTransform(0.2,500.4);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+hbQAQAYAQAXQAJAOAKALQAgAcAOAJQANAHANAGQAMAFANADQAVAFAVgBQALAAALgBQAXgDAUgMQAWgMATgPQAbgWATgeQAIgMAHgNQAEgIADgJQALgYAGgbQAAAIAAAIQAAABAAACQAAAPgCAPQgCATgDASIgJAhQgPAsgbAlQgVAcgcAYIgJAHQgNAKgNAJQgSAFgSAEQgDAAgCABQghAHgkgHQgYgGgUgMQgMgHgJgJQgOgOgKgRQgGgMgGgNQgPgngHgnQgFghgBghg");
	this.shape_527.setTransform(-0.8,512.6);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("rgba(0,0,0,0.251)").s().p("Ag9CPQgYgGgUgMQgMgHgJgJQgOgOgKgRIgMgZQgPgngHgnQgFghgBghIAgAvQAJAOAKALQAgAcAOAJIAaANQAMAFANADQAVAFAVgBIAWgBQAXgDAUgMQAWgMATgPQAbgWATgeQAIgMAHgNIAHgRQALgYAGgbIAAAQIAAADIgCAeQgCATgDASIgJAhQgPAsgbAlQgVAcgcAYIgJAHIgaATIgkAJIgFABQgQADgRAAQgSAAgSgDg");
	this.shape_528.setTransform(-0.8,512.6);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AC5g0IgKAhQgbBNhEA2IgkAZIgmAHQgkAHgmgIQg8gQgcg2IgLgbQgYhGgChLIAiA4QAcAtAnAYIAbAMQApAPAxgIQAYgEATgMQA2gfAhgzQAagpANg0IgBASQAAAogIAkg");
	this.shape_529.setTransform(-1.7,524.9);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("rgba(0,0,0,0.251)").s().p("AhECPQg7gQgdg2IgLgbQgXhGgDhLIAjA4QAcAtAmAYIAbAMQApAPAxgIQAXgEAUgMQA2gfAhgzQAagpAMg0IAAASQAAAogJAkIgJAhQgbBNhEA2IgkAZIgmAHQgPADgRAAQgVAAgVgEg");
	this.shape_530.setTransform(-1.7,524.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_500},{t:this.shape_499}]},62).to({state:[{t:this.shape_502},{t:this.shape_501}]},1).to({state:[{t:this.shape_504},{t:this.shape_503}]},1).to({state:[{t:this.shape_506},{t:this.shape_505}]},1).to({state:[{t:this.shape_508},{t:this.shape_507}]},1).to({state:[{t:this.shape_510},{t:this.shape_509}]},1).to({state:[{t:this.shape_512},{t:this.shape_511}]},1).to({state:[{t:this.shape_514},{t:this.shape_513}]},1).to({state:[{t:this.shape_516},{t:this.shape_515}]},1).to({state:[{t:this.shape_518},{t:this.shape_517}]},1).to({state:[{t:this.shape_520},{t:this.shape_519}]},1).to({state:[{t:this.shape_522},{t:this.shape_521}]},1).to({state:[{t:this.shape_524},{t:this.shape_523}]},1).to({state:[{t:this.shape_526},{t:this.shape_525}]},1).to({state:[{t:this.shape_528},{t:this.shape_527}]},1).to({state:[{t:this.shape_530},{t:this.shape_529}]},1).to({state:[]},1).wait(20));

	// 
	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADHiHQAEATgCAUQgCAagMAdQgZA3giA2IgkAzQgwA3hJAFQg4AEgogeQgWgRgRgbQgxhMARgyQAQg0gKgXQAjAtAgAeIAZAUQBFA2A4gMQBkgXAXghIACgDQAVgiAJgfQAKghgLhDQANAVAFAXg");
	this.shape_531.setTransform(14.5,310.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("rgba(0,0,0,0.251)").s().p("Ah9CZQgWgRgRgbQgxhMARgyQAQg0gKgXQAjAtAgAeIAZAUQBFA2A4gMQBkgXAXghIACgDQAVgiAJgfQAKghgLhDQANAVAFAXQAEATgCAUQgCAagMAdQgZA3giA2IgkAzQgwA3hJAFIgNABQgwAAgjgbg");
	this.shape_532.setTransform(14.5,310.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+gJQANgxgHgZQAXATAJAGQAPARAPAOQAMALANALQAaATAZAMQAkASAfgFQAkgFAbgKQAqgQAQgVQAXgjAJgfQADgJABgLQAEgggFgtQACACABACQAIASADASQADASgBAUQgBAagKAcQgIAWgJAWQgNAagPAbQgEAGgDAGQgQAagSAYQgVAagcAPQgfARglAEQgOABgOgBQgdgCgYgMQgHgEgHgEQgXgPgSgZQgSgagJgaQgOgpAIgfg");
	this.shape_533.setTransform(14.2,316.4);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("rgba(0,0,0,0.251)").s().p("AgxCxQgdgCgYgMIgOgIQgXgPgSgZQgSgagJgaQgOgpAIgfQANgxgHgZQAXATAJAGIAeAfIAZAWQAaATAZAMQAkASAfgFQAkgFAbgKQAqgQAQgVQAXgjAJgfQADgJABgLQAEgggFgtIADAEQAIASADASQADASgBAUQgBAagKAcIgRAsQgNAagPAbIgHAMQgQAagSAYQgVAagcAPQgfARglAEIgOAAIgOAAg");
	this.shape_534.setTransform(14.2,316.4);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AAQAJgugDgbQATAEAIABQAPARAPAOQAMALALALQAaATAXAMQAjATAdgBQAkgBAagLQAngQARgVQAXggAKggQADgJABgLQAFgggDgrQACABABABQAGARACASQADASgBATQgBAagIAcQgGAWgGAWQgNAZgNAbQgDAGgEAGQgPAagQAYQgVAZgaAPQgeASgkAEQgOABgOAAQgcgCgYgJQgHgDgHgEQgZgNgRgXQgTgYgIgbQgOgnAGgfg");
	this.shape_535.setTransform(13.8,322.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("rgba(0,0,0,0.251)").s().p("AgoCvQgcgCgYgJIgOgHQgZgNgRgXQgTgYgIgbQgOgnAGgfQAJgugDgbIAbAFQAPARAPAOIAXAWQAaATAXAMQAjATAdgBQAkgBAagLQAngQARgVQAXggAKggIAEgUQAFgggDgrIADACQAGARACASQADASgBATQgBAagIAcIgMAsIgaA0IgHAMQgPAagQAYQgVAZgaAPQgeASgkAEIgVABIgHAAg");
	this.shape_536.setTransform(13.8,322.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixAGQAGgoABgeQAQgIAGgFQAPARAOANQALAMAMAKQAXAVAXAKQAhAUAcACQAiADAbgLQAkgPATgWQAWgeAKggQADgKACgKQAFggAAgoQABgBABAAQAEARACARQABASAAASQgBAbgFAbQgEAWgEAVQgMAagMAbQgDAFgDAGQgNAbgQAWQgUAZgZAPQgdASgjAFQgNACgOAAQgbgCgZgGQgHgCgHgDQgagMgSgVQgSgWgJgbQgMgmADgig");
	this.shape_537.setTransform(13.5,328);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("rgba(0,0,0,0.251)").s().p("AhTClQgHgCgHgEQgagKgSgWQgSgWgJgbQgMgmADgiQAGgoABgeIAWgMIAdAdIAXAWQAXAVAXAKQAhAVAcACQAiACAbgLQAkgPATgWQAWgeAKggIAFgUQAFggAAgoIACgCQAEARACASQABASAAASQgBAagFAcIgIAsIgYA0IgGALQgNAbgQAXQgUAYgZAPQgdASgjAGQgNACgOAAQgbgCgZgHg");
	this.shape_538.setTransform(13.5,328);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiqAQQACgmAFggQAMgWAFgJQAPAQANAOQAMALAKAKQAXAUAVAOQAgATAaAFQAiAHAagMQAhgPAUgWQAWgbALghQADgJACgKQAGghACglQABgCABgDQACARABARQABASgBARQAAAagDAcQgCAWgCAVQgKAZgLAbQgCAFgDAGQgNAbgPAWQgSAZgYAPQgcATgkAFQgLACgOABQgagCgZgEQgHgBgHgDQgbgJgSgUQgTgUgIgcQgMgkABgig");
	this.shape_539.setTransform(13.2,333.7);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("rgba(0,0,0,0.251)").s().p("AhJCnIgOgEQgbgJgSgUQgTgVgIgbQgMglABghQACglAFggIARggIAcAdIAWAWQAXAVAVANQAgATAaAFQAiAGAagLQAhgPAUgWQAWgbALghIAFgTQAGgiACglIACgDQACAQABARQABARgBASQAAAbgDAaIgEAsIgVA0IgFALQgNAbgPAWQgSAYgYAQQgcASgkAGQgLACgOABQgagCgZgEg");
	this.shape_540.setTransform(13.2,333.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AA8ASQAfgOAVgXQAbgeAMgvIAMhLIAACkIgTAzQgYBEguAgQglAZgxADIgygDQhHgLgShAQgKgjgBgiQgCgtAOgtIAHgcQAxA3AoAdQBDAwAvgVg");
	this.shape_541.setTransform(12.8,339.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("rgba(0,0,0,0.251)").s().p("Ag+CpQhHgLgShAQgKgjgBgiQgCgtAOgtIAHgcQAxA3AoAdQBDAwAvgVQAfgOAVgXQAbgeAMgvIAMhLIAACkIgTAzQgYBEguAgQglAZgxADg");
	this.shape_542.setTransform(12.8,339.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_532},{t:this.shape_531}]},57).to({state:[{t:this.shape_534},{t:this.shape_533}]},1).to({state:[{t:this.shape_536},{t:this.shape_535}]},1).to({state:[{t:this.shape_538},{t:this.shape_537}]},1).to({state:[{t:this.shape_540},{t:this.shape_539}]},1).to({state:[{t:this.shape_542},{t:this.shape_541}]},1).to({state:[]},1).wait(35));

	// 
	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADFhBQgJApgkBhQglBjhuAHQhtAHg1hMQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApg");
	this.shape_543.setTransform(-11.9,296.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("rgba(0,0,0,0.251)").s().p("AidBuQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApQgJApgkBhQglBjhuAHIgQAAQhhAAgxhFg");
	this.shape_544.setTransform(-11.9,296.6);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjGgSQANgsgBgeQBxCjBdgVQBkgXAXghQAXgjAKghQAMgsACg9QAXBDgVA7QgVA4grBVQgrBUhgAHQhjAHgzhNQgzhMAOgzg");
	this.shape_545.setTransform(1.3,303.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("rgba(0,0,0,0.251)").s().p("AihBtQgzhMAOgzQANgsgBgeQBxCjBdgVQBkgXAXghQAXgjAKghQAMgsACg9QAXBDgVA7QgVA4grBVQgrBUhgAHIgQABQhXAAgvhHg");
	this.shape_546.setTransform(1.3,303.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AgdCzQhXAHgwhNQgxhNARgxQAQg0gKgXQB9CeBcgVQBkgXAXghQAWgjAKghQAKghgLhDQAmA+ggBMQghBJgxBHQgyBGhUAGg");
	this.shape_547.setTransform(14.5,310.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("rgba(0,0,0,0.251)").s().p("AikBtQgxhNARgxQAQg0gKgXQB9CeBcgVQBkgXAXghQAWgjAKghQAKghgLhDQAmA+ggBMQghBJgxBHQgyBGhUAGIgOABQhNAAgshHg");
	this.shape_548.setTransform(14.5,310.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_544},{t:this.shape_543}]},55).to({state:[{t:this.shape_546},{t:this.shape_545}]},1).to({state:[{t:this.shape_548},{t:this.shape_547}]},1).to({state:[]},1).wait(40));

	// 
	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AC5hEQgDAggxBiQgyBkhqAfQhsAfgohYQgphZAQg7QAQg9AjghQAtCsBkgXQBigWAXghQAWgkAKghQAKghAnhWg");
	this.shape_549.setTransform(-9.6,292.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("rgba(0,0,0,0.251)").s().p("AirCIQgphZAQg7QAQg9AjghQAtCsBkgXQBigWAXghQAWgkAKghQAKghAnhWIgRCEQgDAggxBiQgyBkhqAfQgcAIgXAAQhDAAgehBg");
	this.shape_550.setTransform(-9.6,292.8);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjEgNQAPg5AfgiQA1CrBhgWQBkgXAXghQAXgjAKghQAKgkAjhSQgFBDgJA+QgEAigvBiQgwBjhqAcQhtAcgqhXQgqhXAPg6g");
	this.shape_551.setTransform(-9.9,293.3);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("rgba(0,0,0,0.251)").s().p("AipCEQgqhXAPg6QAPg5AfgiQA1CrBhgWQBkgXAXghQAXgjAKghQAKgkAjhSQgFBDgJA+QgEAigvBiQgwBjhqAcQgaAHgXAAQhGAAgghCg");
	this.shape_552.setTransform(-9.9,293.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjEgNQAOg2AbgiQA9CqBhgWQBkgWAXghQAWgkAKghQALgnAghOQgDBEgJA7QgFAjguBiQgtBjhrAYQhtAZgshVQgshVAPg5g");
	this.shape_553.setTransform(-10.3,293.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("rgba(0,0,0,0.251)").s().p("AinCBQgshVAPg5QAOg2AbgiQA9CqBhgWQBkgWAXghQAWgkAKghQALgnAghOQgDBEgJA7QgFAjguBiQgtBjhrAYQgYAGgVAAQhJAAgjhCg");
	this.shape_554.setTransform(-10.3,293.8);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjEgOQANgzAXgiQBFCqBhgWQBkgXAXghQAWgjAKghQAMgrAchJQgBBFgJA4QgFAkgsBhQgsBjhrAVQhtAVguhTQguhTAOg4g");
	this.shape_555.setTransform(-10.7,294.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("rgba(0,0,0,0.251)").s().p("AikB9QguhTAOg4QANgzAXgiQBFCqBhgWQBkgXAXghQAWgjAKghQAMgrAchJQgBBFgJA4QgFAkgsBhQgsBjhrAVQgWAFgUAAQhNAAgkhDg");
	this.shape_556.setTransform(-10.7,294.4);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjFgPQAMgvAUgjQBNCpBggWQBkgWAXghQAWgkAKghQANgtAZhEQABBFgJA0QgHAlgpBiQgqBjhsARQhtARgwhRQgwhSANg2g");
	this.shape_557.setTransform(-11,294.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("rgba(0,0,0,0.251)").s().p("AiiB5QgwhSANg2QAMgvAUgjQBNCpBggWQBkgWAXghQAWgkAKghQANgtAZhEQABBFgJA0QgHAlgpBiQgqBjhsARQgTADgRAAQhSAAgnhDg");
	this.shape_558.setTransform(-11,294.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjGgQQALgrARgkQBUCpBggWQBkgXAXghQAWgjAKghQAOgwAVhAQADBGgIAwQgIAngoBhQgoBjhsAOQhuAOgyhQQgxhQAMg1g");
	this.shape_559.setTransform(-11.3,295.5);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("rgba(0,0,0,0.251)").s().p("AigB1QgyhQANg1QALgrAQgkQBUCpBggWQBkgXAXghQAXgjAJghQAOgwAVhAQAEBGgJAwQgIAngoBhQgoBjhrAOQgQACgPAAQhXAAgqhEg");
	this.shape_560.setTransform(-11.3,295.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjGgRQAKgoANgkQBcCoBfgVQBkgXAXghQAXgjAKghQAOg0ARg7QAGBHgJAtQgIAogmBhQgmBihvALQhsAKgzhNQg0hPAMg0g");
	this.shape_561.setTransform(-11.7,296);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("rgba(0,0,0,0.251)").s().p("AieByQg0hPAMg0QAKgoANgkQBcCoBfgVQBkgXAXghQAXgjAKghIAfhvQAGBHgJAtQgIAogmBhQgmBihvALIgXABQhbAAgthEg");
	this.shape_562.setTransform(-11.7,296);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADFhBQgJApgkBhQglBjhuAHQhtAHg1hMQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApg");
	this.shape_563.setTransform(-11.9,296.6);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("rgba(0,0,0,0.251)").s().p("AidBuQg2hNAMgzIAShJQBkCoBfgWQBkgWAXghQAWgkAKghIAdhtQAIBIgJApQgJApgkBhQglBjhuAHIgQAAQhhAAgxhFg");
	this.shape_564.setTransform(-11.9,296.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_550},{t:this.shape_549}]},48).to({state:[{t:this.shape_552},{t:this.shape_551}]},1).to({state:[{t:this.shape_554},{t:this.shape_553}]},1).to({state:[{t:this.shape_556},{t:this.shape_555}]},1).to({state:[{t:this.shape_558},{t:this.shape_557}]},1).to({state:[{t:this.shape_560},{t:this.shape_559}]},1).to({state:[{t:this.shape_562},{t:this.shape_561}]},1).to({state:[{t:this.shape_564},{t:this.shape_563}]},1).to({state:[]},1).wait(42));

	// 
	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABuBgQg7BIhWgOIgNgCQhZgSgng4IgBgBQgpg8AghEIAeAnIAgAfQApAjA0ASQAwgKApgWQA2gdAkgyQASgaANgfIAEgJIASgyIgIArQgMA+gQAvQgRAugVAgg");
	this.shape_565.setTransform(-3.8,282.3);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCaIgNgCQhZgSgng4IgBgBQgpg8AghEIAeAnIAgAfQApAjA0ASQAwgKApgWQA2gdAkgyQASgaANgfIAEgJIASgyIgIArQgMA+gQAvQgRAugVAgIgRAVQgxA8hEAAQgNAAgPgCg");
	this.shape_566.setTransform(-3.8,282.3);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6gtQANAIAOAKQAPAJAPAIQAlAqAsAWQAxAFApgRQBEgfAfgrQACgDACgCQARgZAMgcQABgDABgEIAXg9IgCAYIAAACQgLA+gPAyQgOArgYApIgQAXQgBAAAAABQg4BLhXgEIgOgBQhdgJgng+QAAAAgBgBQAAAAAAgBQgphBAdhBg");
	this.shape_567.setTransform(-5.2,284.6);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("rgba(0,0,0,0.251)").s().p("AgbCfIgOgBQhdgJgng+IgBgBIAAgBQgphBAdhBIAbASIAeARQAlAqAsAWQAxAFApgRQBEgfAfgrIAEgFQARgZAMgcIACgHIAXg9IgCAYIAAACQgLA+gPAyQgOArgYApIgQAXIgBABQg2BHhQAAIgJAAg");
	this.shape_568.setTransform(-5.2,284.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8gpQAMgBANACQAPAAAPACQAhAyAoAZQAxARArgQQBLgdAegoQACgDACgDQARgbALgcQACgDABgDIAYhAIADAHIAAADQgLA+gNA2QgMAngaAxIgPAYQgBABAAAAQg2BQhZAFIgOAAQhgACgohEQAAgBgBAAQAAgBAAAAQgohHAZhAg");
	this.shape_569.setTransform(-6.3,287.1);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("rgba(0,0,0,0.251)").s().p("AisBgIgBgBIAAgBQgohHAZhAQAMgBANACQAPAAAPACQAhAyAoAZQAxARArgQQBLgdAegoIAEgGQARgbALgcIADgGIAYhAIADAHIAAADQgLA+gNA2QgMAngaAxIgPAYIgBABQg2BQhZAFIgOAAIgEABQhdAAgnhDg");
	this.shape_570.setTransform(-6.3,287.1);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+ghQAKgKANgGQAOgJAQgEQAdA7AkAbQAvAdAtgPQBVgbAaglQACgDACgDQATgdAKgdQABgDACgDIAZhBIAIgKIAAACQgKA/gLA6QgJAmgdA2IgPAZQgBABAAABQgzBThbAPIgOACQhkALgohJQAAgBgBgBQAAAAAAgBQgphNAXg+g");
	this.shape_571.setTransform(-7.4,289.1);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("rgba(0,0,0,0.251)").s().p("AirBtIgBgCIAAgBQgphNAXg+QAKgKANgGQAOgJAQgEQAdA7AkAbQAvAdAtgPQBVgbAaglIAEgGQATgdAKgdIADgGIAZhBIAIgKIAAACQgKA/gLA6QgJAmgdA2IgPAZIgBACQgzBThbAPIgOACIgZABQhQAAgjg/g");
	this.shape_572.setTransform(-7.4,289.1);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AjBgWQAJgUAMgOQAOgRARgLQAYBDAgAfQAtAoAxgNQBcgaAZgiQACgDACgDQATgfAJgdQACgDABgDIAohfIAAADQgJBAgKA9QgHAigfA+IgOAbQgBABAAABQgxBYhcAYIgPADQhnAVgphPQAAgBgBgBQAAAAAAgBQgohSATg9g");
	this.shape_573.setTransform(-8.5,290.9);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("rgba(0,0,0,0.251)").s().p("AirB8IgBgCIAAgBQgohSATg9QAJgUAMgOQAOgRARgLQAYBDAgAfQAtAoAxgNQBcgaAZgiIAEgGQATgfAJgdIADgGIAohfIAAADIgTB9QgHAigfA+IgOAbIgBACQgxBYhcAYIgPADQgWAFgTAAQhHAAggg/g");
	this.shape_574.setTransform(-8.5,290.9);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACTAgIgOAeQguBcheAiIgQAFQhrAfgphXIAAgBQgphZAQg7QAIgdAMgWQANgZASgSQATBJAcAkQAoA1A6gNQBigWAXghQAWgkAKghIAxh3IgRCEQgCAbgkBJg");
	this.shape_575.setTransform(-9.6,292.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("rgba(0,0,0,0.251)").s().p("AirCJIAAgBQgphZAQg7QAIgdAMgWQANgZASgSQATBJAcAkQAoA1A6gNQBigWAXghQAWgkAKghIAxh3IgRCEQgCAbgkBJIgOAeQguBcheAiIgQAFQgcAIgYAAQhCAAgehAg");
	this.shape_576.setTransform(-9.6,292.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_566},{t:this.shape_565}]},43).to({state:[{t:this.shape_568},{t:this.shape_567}]},1).to({state:[{t:this.shape_570},{t:this.shape_569}]},1).to({state:[{t:this.shape_572},{t:this.shape_571}]},1).to({state:[{t:this.shape_574},{t:this.shape_573}]},1).to({state:[{t:this.shape_576},{t:this.shape_575}]},1).to({state:[]},1).wait(49));

	// 
	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4BUQifC0iHiuQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0Beg");
	this.shape_577.setTransform(9.9,278.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("rgba(0,0,0,0.251)").s().p("AiuBaQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0BeIgKAOQhSBchJAAQhJAAhChWg");
	this.shape_578.setTransform(9.9,278.2);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AiogXQAFgBAHgDQAYgCAwgcQAZgWAYgaQAbAUAygBQAMAAAMgFQAPgEARgIQARAiAWAPQAgAaAAAHQghA0ghAgQgqAeggAGQhVAWg3gpQgwgmgJhBg");
	this.shape_579.setTransform(1.8,284.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("rgba(0,0,0,0.251)").s().p("AhvBQQgwgmgJhBIAMgEQAYgCAwgcQAZgWAYgaQAbAUAygBQAMAAAMgFQAPgEARgIQARAiAWAPQAgAaAAAHQghA0ghAgQgqAeggAGQgdAHgZAAQgyAAgkgag");
	this.shape_580.setTransform(1.8,284.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB/BLQhABfhigQQhjgQgqg8Qgqg9AghEIAeAnQAzA7BKAZQCcgeA6iTIASgyQgZCcgxBKg");
	this.shape_581.setTransform(-3.8,282.3);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCaQhjgQgqg8Qgqg9AghEIAeAnQAzA7BKAZQCcgeA6iTIASgyQgZCcgxBKQg3BRhPAAQgNAAgPgCg");
	this.shape_582.setTransform(-3.8,282.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_578},{t:this.shape_577}]},41).to({state:[{t:this.shape_580},{t:this.shape_579}]},1).to({state:[{t:this.shape_582},{t:this.shape_581}]},1).to({state:[]},1).wait(54));

	// 
	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADDhFQgNCMh6BOQh5BOhGg6QhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfg");
	this.shape_583.setTransform(13.8,186.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("rgba(0,0,0,0.251)").s().p("AiDCpQhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfQgNCMh6BOQhEAtg1AAQgoAAgegZg");
	this.shape_584.setTransform(13.8,186.8);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai8AoQAGhIA2iZQgDAfABAYQgEBvAtAVQASAIANAFQAdAMAKACQBsAcArgvQAoguARgaQABAZgFAXQgTA6grAwQgiAhgXAPQhzBOhIg1QhEg1ABhHg");
	this.shape_585.setTransform(13.1,200.3);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("rgba(0,0,0,0.251)").s().p("Ah5ClQhEg1ABhHIAAgBQAGhIA2iZQgDAfABAYQgEBvAtAVIAfANQAdAMAKACQBsAcArgvQAoguARgaQABAZgFAXQgTA6grAwQgiAhgXAPQhEAug1AAQglAAgdgVg");
	this.shape_586.setTransform(13.1,200.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai5AsQAChKAyiUQAAAVADAPQgIBnAtAeQAPAIANAFQAaAMALAEQBjAgAygrQApgpATgYQAGATgCAQQgUA4goAwQghAhgWAPQhuBOhIgxQhBgugHhGg");
	this.shape_587.setTransform(12.5,213.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("rgba(0,0,0,0.251)").s().p("AhwCgQhBgugHhGIgBAAQAChKAyiUQAAAVADAPQgIBnAtAeIAcANIAlAQQBjAgAygrQApgpATgYQAGATgCAQQgUA4goAwQghAhgWAPQhFAwgzAAQgiAAgcgTg");
	this.shape_588.setTransform(12.5,213.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai3AuQgChLAviOQABALAFAFQgKBfArAlQAOAJAMAIQAYALALAGQBaAjA4gmQAsgkAVgWQAKAMABAKQgVA2glAwQggAhgVAPQhoBNhJgrQg/gpgPhEg");
	this.shape_589.setTransform(12,227.3);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("rgba(0,0,0,0.251)").s().p("AhoCcQg/gpgPhEIgBgBQgChLAviOQABALAFAFQgKBfArAlIAaARIAjARQBaAjA4gmQAsgkAVgWQAKAMABAKQgVA2glAwQggAhgVAPQhEAyg0AAQgfAAgagQg");
	this.shape_590.setTransform(12,227.3);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai1A0QgHhNAsiIQAEAAAHgFQgOBYAqAsQAMAKAMAJQAVAOAMAFQBRAmA+ghQAugeAWgUQAPAGAFADQgXA0giAwQgeAggUAQQhjBMhKgmQg8gjgYhCg");
	this.shape_591.setTransform(11.5,240.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("rgba(0,0,0,0.251)").s().p("AhhCaQg8gjgYhCIAAgBQgHhNAsiIQAEAAAHgFQgOBYAqAsIAYATIAhATQBRAmA+ghQAugeAWgUQAPAGAFADQgXA0giAwQgeAggUAQQhDAzg1AAQgcAAgZgNg");
	this.shape_592.setTransform(11.5,240.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AizBBQgLhPAqiCQAFgKAJgPQgQBQAoAzQALALALAKQASAPAMAHQBJApBEgdQAwgYAYgSQAUgBAHgDQgXAyggAwQgdAggSAPQhdBNhLgiQg6gcgghBg");
	this.shape_593.setTransform(11,253.1);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("rgba(0,0,0,0.251)").s().p("AhYCfQg6gcgghBIgBgBQgLhPAqiCIAOgZQgQBQAoAzIAWAVIAeAWQBJApBEgdQAwgYAYgSQAUgBAHgDQgXAyggAwQgdAggSAPQhCA2g3AAQgZAAgWgLg");
	this.shape_594.setTransform(11,253.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AixBOQgPhQAmh9QAIgUAKgYQgTBIAnA5QAJAMALAMQAPAPAOAJQBBAtBJgZQAxgUAbgOQAXgIAMgKQgZAwgdAwQgcAggRAPQhYBMhLgcQg3gWgphAg");
	this.shape_595.setTransform(10.5,265.6);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("rgba(0,0,0,0.251)").s().p("AhQClQg3gWgphAIgBgBQgPhQAmh9IASgsQgTBIAnA5QAJAMALAMQAPAPAOAJQBBAtBJgZQAxgUAbgOQAXgIAMgKQgZAwgdAwQgcAggRAPQhBA3g4AAQgWAAgUgHg");
	this.shape_596.setTransform(10.5,265.6);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AB4BUQifC0iHiuQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0Beg");
	this.shape_597.setTransform(9.9,278.2);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("rgba(0,0,0,0.251)").s().p("AiuBaQgYhnA+iiQgaBOA7BNQBDBTBpgfQBUgZAdgfIg0BeIgKAOQhSBchJAAQhJAAhChWg");
	this.shape_598.setTransform(9.9,278.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_584},{t:this.shape_583}]},34).to({state:[{t:this.shape_586},{t:this.shape_585}]},1).to({state:[{t:this.shape_588},{t:this.shape_587}]},1).to({state:[{t:this.shape_590},{t:this.shape_589}]},1).to({state:[{t:this.shape_592},{t:this.shape_591}]},1).to({state:[{t:this.shape_594},{t:this.shape_593}]},1).to({state:[{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_598},{t:this.shape_597}]},1).to({state:[]},1).wait(56));

	// 
	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhcgUQA8AUAOABQBmgEA+g+IArgpQgNCMhTBeQhTBdhhhGQhkhGgBhNQgBhLAHhtQAeCLA8AVg");
	this.shape_599.setTransform(25.1,149.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("rgba(0,0,0,0.251)").s().p("AhXCXQhkhGgBhNQgBhLAHhtQAeCLA8AVQA8AUAOABQBmgEA+g+IArgpQgNCMhTBeQgvA1gzAAQgoAAgqgeg");
	this.shape_600.setTransform(25.1,149.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai9ANQAChKATh6QARCYA9AVQA8ATAOABQBpACA4g5QAZgcAUgYQgMCMhdBaQhbBahchDQhdhEAChLg");
	this.shape_601.setTransform(22.3,158.8);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("rgba(0,0,0,0.251)").s().p("AhiCcQhdhEAChLQAChKATh6QARCYA9AVQA8ATAOABQBpACA4g5IAtg0QgMCMhdBaQg2AzgzAAQgnAAgngcg");
	this.shape_602.setTransform(22.3,158.8);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai+AVQAEhJAgiHQAFClA8AVQA8ATAOABQBtAKAyg3QAdgkATgaQgNCMhnBWQhkBWhVhAQhVhBAEhKg");
	this.shape_603.setTransform(19.5,168.2);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("rgba(0,0,0,0.251)").s().p("AhtCgQhVhBAEhKQAEhJAgiHQAFClA8AVQA8ATAOABQBtAKAyg3QAdgkATgaQgNCMhnBWQg6AygzAAQgoAAgkgcg");
	this.shape_604.setTransform(19.5,168.2);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai/AdQAGhIAtiTQgICxA8ATQA8AVAOACQBxARAsg0QAggsASgcQgNCMhwBSQhvBShOg+QhNg+AHhJg");
	this.shape_605.setTransform(16.7,177.5);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("rgba(0,0,0,0.251)").s().p("Ah5CkQhNg+AHhJQAGhIAtiTQgICxA8ATQA8AVAOACQBxARAsg0QAggsASgcQgNCMhwBSQhAAvg0AAQgnAAgigbg");
	this.shape_606.setTransform(16.7,177.5);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ADDhFQgNCMh6BOQh5BOhGg6QhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfg");
	this.shape_607.setTransform(13.8,186.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("rgba(0,0,0,0.251)").s().p("AiDCpQhHg7AKhJQAJhGA5igQgUC+A8ATQA8AVAOABQB1AZAlg0QAkgxARgfQgNCMh6BOQhEAtg1AAQgoAAgegZg");
	this.shape_608.setTransform(13.8,186.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_600},{t:this.shape_599}]},30).to({state:[{t:this.shape_602},{t:this.shape_601}]},1).to({state:[{t:this.shape_604},{t:this.shape_603}]},1).to({state:[{t:this.shape_606},{t:this.shape_605}]},1).to({state:[{t:this.shape_608},{t:this.shape_607}]},1).to({state:[]},1).wait(63));

	// 
	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("rgba(0,0,0,0.251)").s().p("AgZCLQgggEgkgPQgpgtgZg0QgkhJgBhaQAKAYAQARQAqAxArAZQBUAvBTgoQAegPAfgbQAbgXAbghIgWBbQgJAZgKAWQg3B3hlAAQgMAAgNgCg");
	this.shape_609.setTransform(15.2,124.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("rgba(0,0,0,0.251)").s().p("AgNCIIgUgCQgXgDgZgKQgZgYgVgcQgOgUgLgWQgdgzgHg9QgDgZgBgaQAKATAPANQAUAUAXAOQARARASAMQA7ApA7gJQAXgDAVgJQAsgXATgPIATgQIARgQIAUgWIgFAjIgHAoIAAADQgIAZgJATQgvBrhVARQgRAEgRAAIgKgBg");
	this.shape_610.setTransform(15.8,127.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("rgba(0,0,0,0.251)").s().p("AgVCFQgXgCgZgJQgbgVgWgdQgPgTgMgVQggg0gHg8QgCgagBgaQAJANAMAJQATAOAUAIQAQASARAOQA4AvA6gHQAWgCAWgHQAtgUATgOIAUgOIASgQIAWgVIgCAcIgBAfIgBACQgGAagJAVQgsBphTAYQgVAGgVAAIgVAAg");
	this.shape_611.setTransform(16.4,130.5);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6iBQAIAJAMADQARAIARACQAPATAPAPQA1A2A4gFQAYAAAUgGQAvgRAUgMQALgHAKgHQAJgHAJgIQAMgJALgLQACALABAKIAEAWQAAABAAABQgHAZgIAWQgoBphSAeQgUAIgXACQgIABgLAAQgYAAgZgIQgbgUgYgbQgRgUgNgUQgjg0gGg8QgCgagBgag");
	this.shape_612.setTransform(17.4,133.6);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("rgba(0,0,0,0.251)").s().p("Ag9B6QgcgUgYgbQgQgUgNgUQgjg0gGg8QgCgagBgaQAIAJALADQARAIASACQAPATAPAPQA1A2A4gFQAXAAAVgGQAugRAVgMIAUgOIATgPIAXgUIADAVIAEAWIAAACQgHAZgIAWQgpBphRAeQgVAIgWACIgTABQgYAAgZgIg");
	this.shape_613.setTransform(17.4,133.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6h+QAHADAJgBQAPACAQgEQANAUAOAQQAxA7A5gBQAWABAVgEQAvgOAVgLQALgGALgHQAJgHAKgHQAMgJAMgLQAEAIADAGIAJAOIABABQgGAZgIAWQgmBqhPAlQgUAKgXADQgKABgIABQgYACgagHQgcgSgagbQgSgTgNgUQgng0gFg8QgCgaAAgag");
	this.shape_614.setTransform(18.5,136.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("rgba(0,0,0,0.251)").s().p("Ag3B6QgcgSgagbQgSgTgNgUQgng0gFg8QgCgaAAgaQAHADAJgBQAPACAQgEQANAUAOAQQAxA7A5gBQAWABAVgEQAvgOAVgLIAWgNIATgOIAYgUIAHAOIAJAOIABABQgGAZgIAWQgmBqhPAlQgUAKgXADIgSACIgIAAQgVAAgVgFg");
	this.shape_615.setTransform(18.5,136.8);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai6hxQAFgCAJgFQAMgFAOgKQAMAWANAQQAtBCA4ABQAXADAUgDQAxgKAVgKQALgGALgGQAKgHAKgGQANgJAMgKQAHAEAFACIAOAFQABAAAAAAQgFAagHAXQgjBphOAsQgUALgVAFQgKADgLABQgWADgagGQgdgPgcgbQgTgTgOgTQgqg1gEg7QgCgaAAgbg");
	this.shape_616.setTransform(19.6,138.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("rgba(0,0,0,0.251)").s().p("AgwCEQgdgPgcgbQgTgTgOgTQgqg1gEg7IgCg1QAFgCAJgFQAMgFAOgKQAMAWANAQQAtBCA4ABQAXADAUgDQAxgKAVgKIAWgMIAUgNIAZgTIAMAGIAOAFIABAAQgFAagHAXQgjBphOAsQgUALgVAFQgKADgLABIgPABQgQAAgRgEg");
	this.shape_617.setTransform(19.6,138.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hkQAFgHAHgKQAKgLALgQQALAXAMASQAqBHA3AFQAZAEASgBQAygHAVgKQAMgFAMgGQAKgGAKgGQAOgIAMgKQAJAAAJgBIASgEQABAAABAAQgFAZgHAYQggBphMAzQgTANgVAGQgKAEgLABQgWAFgagFQgfgNgegbQgTgSgPgTQgtg2gEg6QgBgagBgbg");
	this.shape_618.setTransform(20.7,141);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("rgba(0,0,0,0.251)").s().p("AgpCOQgfgNgegbQgTgSgPgTQgtg2gEg6IgBg1IAMgRQAJgLALgQQAMAXAMASQAqBHA2AFQAaAEARgBQAygHAVgKIAYgLIAUgMQAOgIAMgKQAKAAAHgBIATgEIABAAQgEAZgHAYQggBphMAzQgTANgVAGQgKAEgLABQgJADgMAAQgNAAgOgDg");
	this.shape_619.setTransform(20.7,141);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hXQAEgMAFgPQAIgQAJgXQAKAYALATQAmBNA1AIQAaAFAUABQAxgEAWgIQAMgFAMgFQALgGAKgGQAOgIANgJQAMgDAKgFIAYgMQABgBABgBQgEAagHAYQgdBqhJA5QgUAPgUAHQgKAFgKACQgXAHgbgFQgfgKgggbQgVgSgPgSQgxg3gDg5QgBgbAAgbg");
	this.shape_620.setTransform(21.8,143.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("rgba(0,0,0,0.251)").s().p("AgjCYQgfgKgggbQgVgSgPgSQgxg3gDg5IgBg2IAJgbIARgnQAKAYALATQAmBNA1AIQAaAFAUABQAxgEAWgIIAYgKIAVgMQAOgIANgJQAMgDAKgFIAYgMIACgCQgEAagHAYQgdBqhJA5QgUAPgUAHQgKAFgKACQgOAEgNAAQgLAAgMgCg");
	this.shape_621.setTransform(21.8,143.1);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7hKQACgRAFgUQAGgXAGgcQAJAZAJAUQAjBTA0ALQAbAHASACQAzgBAXgHQANgEAMgFQALgFALgGQAOgHANgKQAPgGAMgJIAdgVQABgBABAAQgEAZgFAYQgbBrhHA/QgTARgUAJQgKAFgKADQgYAJgagEQghgJgigaQgVgRgRgSQgzg3gCg5QgBgbAAgbg");
	this.shape_622.setTransform(22.9,145.2);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("rgba(0,0,0,0.251)").s().p("AgcCiQghgJgigaQgVgRgRgSQgzg3gCg5IgBg2IAHglIAMgzQAJAZAJAUQAjBTA0ALQAbAHASACQAzgBAXgHIAZgJIAWgLQAOgHANgKQAPgGAMgJIAdgVIACgBQgEAZgFAYQgbBrhHA/QgTARgUAJQgKAFgKADQgSAGgPAAIgRgBg");
	this.shape_623.setTransform(22.9,145.2);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ai7g+QABgVADgZQAEgdAEgiQAHAaAIAVQAgBYAzAOQAbAJASAEQA0ACAXgGQAOgDAMgFQAMgFALgFQAPgHAOgJQAQgJAOgNIAjgeQABgBABgBQgDAagFAYQgYBqhFBGQgSATgUALQgKAGgKAEQgaAJgYgDQgigGgkgaQgWgRgSgRQg2g3gCg5QAAgbAAgcg");
	this.shape_624.setTransform(24,147.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("rgba(0,0,0,0.251)").s().p("AgVCrQgigGgkgaQgWgRgSgRQg2g3gCg5IAAg3IAEguIAIg/QAHAaAIAVQAgBYAzAOQAbAJASAEQA0ACAXgGIAagIIAXgKQAPgHAOgJQAQgJAOgNIAjgeIACgCQgDAagFAYQgYBqhFBGQgSATgUALQgKAGgKAEQgTAHgTAAIgMgBg");
	this.shape_625.setTransform(24,147.4);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ACShBIArgpQgNCMhTBeQgbAfgeANQg5AahCgvQhkhGgBhNIAAg1QACg7AEhIQAeCLA8AVQA8AUAOABQAogBAkgLIAXgJQAlgRAcgcg");
	this.shape_626.setTransform(25.1,149.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("rgba(0,0,0,0.251)").s().p("AhXCXQhkhGgBhNIAAg1QACg7AEhIQAeCLA8AVQA8AUAOABQAogBAkgLIAXgJQAlgRAcgcIArgpQgNCMhTBeQgbAfgeANQgVAJgUAAQgoAAgqgeg");
	this.shape_627.setTransform(25.1,149.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_609}]},20).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_613},{t:this.shape_612}]},1).to({state:[{t:this.shape_615},{t:this.shape_614}]},1).to({state:[{t:this.shape_617},{t:this.shape_616}]},1).to({state:[{t:this.shape_619},{t:this.shape_618}]},1).to({state:[{t:this.shape_621},{t:this.shape_620}]},1).to({state:[{t:this.shape_623},{t:this.shape_622}]},1).to({state:[{t:this.shape_625},{t:this.shape_624}]},1).to({state:[{t:this.shape_627},{t:this.shape_626}]},1).to({state:[]},1).wait(67));

	//  0
	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("rgba(0,204,255,0)").s().p("AghDcQgngBgfgnQhMhcALh+QAOinB1gNQASgCATACQAtAfAhAfQCKCBhFByQgjA7hYA3QgcATgcAAIgBAAg");
	this.shape_628.setTransform(2.3,96.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.lf(["rgba(21,184,225,0.063)","rgba(51,214,255,0.11)"],[0,1],3.7,-21.1,3.7,25.5).s().p("AhJDAQhghHAFiFQAHitBkgcQARgGAUgBQApARAqAdQB/CQggBlQgIA4hbBDQgfAVgcAGIgDAAQgmAAgggdg");
	this.shape_629.setTransform(4.1,97.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.lf(["rgba(42,165,195,0.125)","rgba(102,224,255,0.216)"],[0,1],1.2,-22,1.2,24.6).s().p("AgxDNQh1gzAAiNQAAiyBTgqQAPgKASgFQAqAEAyAbQB0CfAGBYQARA0heBQQgeAXgcALIgOABQgiAAgegSg");
	this.shape_630.setTransform(6.5,98);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.lf(["rgba(64,145,166,0.188)","rgba(153,235,255,0.325)"],[0,1],-1.8,-22.8,-1.8,23.7).s().p("AgeDaQiKgegGiUQgHi4BCg4QANgPARgIQApgLA6AZQBqCuArBMQArAyhhBcQgdAYgcARQgRADgQAAQgZAAgYgJg");
	this.shape_631.setTransform(9.6,98.8);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.lf(["rgba(85,126,136,0.251)","rgba(204,245,255,0.431)"],[0,1],-5,-23.4,-5,23.2).s().p("AgODpQifgJgLiaQgOi/AxhGQALgTAQgLQAogZBFAXQBdC9BQA/QBFAuhjBpQgdAagcAWQggAHgdAAQgNAAgNgCg");
	this.shape_632.setTransform(12.8,99.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.lf(["rgba(106,106,106,0.314)","rgba(255,255,255,0.541)"],[0,1],-8.2,-24.1,-8.2,22.4).s().p("AjCBiQgVjFAhhVQAJgXAOgOQAngnBOAVQBTDMB1AyQBfArhnB1Ig4A4QgzANgrADIgWABQidAAgPiWg");
	this.shape_633.setTransform(16,100.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_628}]},15).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[]},1).wait(77));

	// Layer 11
	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("rgba(0,204,255,0)").s().p("AhpDXIgSgKQgTgLgMgUQg1hXAYhkQAXhdA6hNQAmgyBAgBIAIABQBbAOAsBTQAqBRAGBMQAFBOgVAqQgVAqghAVQgVANgqAJIhBAJIgOAAQgsAAgogUg");
	this.shape_634.setTransform(0.3,-6.4);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.lf(["rgba(7,207,255,0.02)","rgba(17,207,255,0.035)"],[0,1],-2.2,71.8,-2.2,118.4).s().p("AhpDVIgSgLQgSgLgLgTIgBgBQg0hWAXhkQAWheA5hKQAngyA/AAIABAAIAHABIAFABQBWARArBOIACAFQApBNAFBKIAAACQAFBLgWAqQgVApghAVIgBABQgVANgoAJIgGABIg7AJIgCAAIgLAAQgrAAgogVg");
	this.shape_635.setTransform(0.4,0.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.lf(["rgba(14,211,255,0.043)","rgba(34,211,255,0.071)"],[0,1],-2.4,65,-2.4,111.6).s().p("AhpDTIgRgLQgSgMgLgSIgBgBQgzhWAWhjQAVhfA5hIQAmgwA/gBIACAAIAGABIAFABQBVAUAqBMIACAEQArBNAFBIIAAACQAEBKgXAqQgVAoghAWIgBABQgVANgnAJIgGABQgeAGgcAEIgCAAIgKAAQgrAAgogWg");
	this.shape_636.setTransform(0.6,7.3);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.lf(["rgba(20,214,255,0.063)","rgba(51,214,255,0.11)"],[0,1],-2.5,58.2,-2.5,104.7).s().p("AhpDQIgRgLQgRgMgLgSIgBgBQgyhVAVhjQAUhgA4hGQAngvA+AAIADAAIAFABIAFABQBTAWArBJIACAFQArBLAFBIIAAACQAFBIgZArQgVAngiAWIgBABQgVANglAKIgGACQgeAGgbAEIgCAAIgKAAQgrAAgngYg");
	this.shape_637.setTransform(0.7,14.1);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.lf(["rgba(27,218,255,0.082)","rgba(68,218,255,0.145)"],[0,1],-2.6,51.3,-2.6,97.9).s().p("AhpDOIgQgMQgQgMgLgSIgBgBQgyhVAUhiIAAAAQAThhA4hEQAmgtA/AAIADAAIAEABIAFABQBTAXAqBIIACAEQAtBLAEBHIAAACQAEBGgaAsQgVAlghAXIgBABQgVANglALIgGACQgdAHgbAEIgCAAIgJAAQgrAAgngZg");
	this.shape_638.setTransform(0.8,21);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.lf(["rgba(34,221,255,0.106)","rgba(85,221,255,0.18)"],[0,1],-2.7,44.5,-2.7,91.1).s().p("AhoDMIgQgMQgQgNgLgSIAAgBQgyhTAThiQAShiA4hCQAmgsA/AAIACAAIAFABIAFABQBRAaAqBFIACAEQAuBKAEBGIAAACQAEBFgbAsQgVAlgiAXIgBABQgVANgkALIgFACQgeAJgaADIgCAAIgJAAQgqAAgmgag");
	this.shape_639.setTransform(0.9,27.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.lf(["rgba(41,224,255,0.125)","rgba(102,224,255,0.216)"],[0,1],-2.9,37.7,-2.9,84.2).s().p("AhoDJIgPgMQgQgNgLgSIAAgBQgxhTAShhQARhjA4g/QAmgrA+AAIACAAIAFABIAFABQBPAcAqBDIADAEQAvBJADBFIAAACQAEBDgdAtQgVAkghAXIgBABQgVAOgjALIgFACQgdAKgaADIgCAAIgJAAQgqAAglgcg");
	this.shape_640.setTransform(1.1,34.6);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.lf(["rgba(48,228,255,0.145)","rgba(119,228,255,0.251)"],[0,1],-3,30.8,-3,77.4).s().p("AhoDHIgPgNQgPgNgLgSIAAgBQgwhSARhhIAAAAQAQhjA3g+QAmgqA+ABIACAAIAFABIAFAAQBOAfAqBAIACAEQAwBJAEBEIAAACQADBBgeAuQgVAighAYIgBABQgWAOghAMIgFACQgdALgaADIgCAAIgIAAQgpAAglgdg");
	this.shape_641.setTransform(1.2,41.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.lf(["rgba(54,231,255,0.169)","rgba(136,231,255,0.29)"],[0,1],-3.1,24,-3.1,70.6).s().p("AhoDFIgOgNQgOgOgLgSIgBgBQguhRAPhgQAQhlA2g7QAmgpA+ABIACAAIAFABIAEABQBNAgAqA/IADAEQAxBHADBDIAAACQADBAgfAuQgVAigiAYIgBABQgVAOggANIgGACQgcALgZADIgCAAIgIAAQgqAAgkgeg");
	this.shape_642.setTransform(1.3,48.3);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.lf(["rgba(61,235,255,0.188)","rgba(153,235,255,0.325)"],[0,1],-3.3,17.2,-3.3,63.7).s().p("AhoDCIgNgNQgOgOgLgSIgBgBQgthQAOhgIAAAAQAPhlA2g6QAmgnA9ABIACAAIAFABIAEAAQBMAjAqA8IACAEQAyBHADBCIAAACQADA+ggAvQgVAggiAZIgBABQgWAOgeAOIgGACQgcAMgZADIgCAAIgHAAQgpAAgkggg");
	this.shape_643.setTransform(1.5,55.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.lf(["rgba(68,238,255,0.208)","rgba(170,238,255,0.361)"],[0,1],-3.4,10.3,-3.4,56.9).s().p("AhoDAIgNgOQgNgOgLgSIgBgBQgshPANhgIAAAAQAOhmA1g3QAmgmA9ABIACAAIAFABIAEAAQBLAlApA6IADAEQAzBGADBBIAAABQACA9giAwQgVAfghAZIgBABQgWAPgdAOIgGACQgcANgYADIgCAAIgHAAQgpAAgjghg");
	this.shape_644.setTransform(1.6,62);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.lf(["rgba(75,241,255,0.231)","rgba(187,241,255,0.396)"],[0,1],-3.5,3.5,-3.5,50.1).s().p("AhnC+IgNgOQgNgPgLgRIAAgBQgshPAMhfQANhnA1g1QAmglA9ABIACAAIAFABIAEAAQBJAoApA3IADAEQA0BFADBAIAAACQABA7giAwQgVAfghAYIgBABQgXAQgcAOIgFADQgcANgYADIgCAAIgHAAQgoAAgigig");
	this.shape_645.setTransform(1.7,68.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.lf(["rgba(82,245,255,0.251)","rgba(204,245,255,0.431)"],[0,1],-3.7,-3.3,-3.7,43.2).s().p("AhoC7IgLgOQgNgPgLgRIAAgBQgrhOALhfIAAAAQAMhoA1gzQAlgkA9ACIACAAIAGABIADAAQBIApApA2IACADQA2BFACA/IAAABQABA6gjAxQgVAdghAZIgBABQgXAQgbAPIgFADQgcAOgXADIgCAAIgGAAQgoAAgjgkg");
	this.shape_646.setTransform(1.9,75.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.lf(["rgba(88,248,255,0.271)","rgba(221,248,255,0.471)"],[0,1],-3.8,-10.2,-3.8,36.4).s().p("AhnC5IgLgPQgMgPgLgRIAAgBQgrhNALhfIAAAAQAKhpA1gxQAlgiA8ACIADAAIAGABIACAAQBHArApAzIADAEQA2BDACA/IAAABQABA4glAyQgVAcghAaIgBABQgXAPgaAQIgFADQgbAPgXADIgCAAIgGAAQgoAAghglg");
	this.shape_647.setTransform(2,82.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.lf(["rgba(95,252,255,0.294)","rgba(238,252,255,0.506)"],[0,1],-3.9,-17,-3.9,29.6).s().p("AhnC3IgLgPIgWghIAAgBQgqhMAJheIAAAAQAKhqA0gvQAmghA8ACIACAAIAGABIACAAQBGAuAoAxIADADQA4BDABA9IAAABQABA3gmAyQgVAbghAaIgBABIgwAgIgFAEQgaAQgXACIgCAAIgGAAQgnAAghgmg");
	this.shape_648.setTransform(2.1,89.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.lf(["rgba(102,255,255,0.314)","rgba(255,255,255,0.541)"],[0,1],-4.1,-23.8,-4.1,22.8).s().p("AhnC0IgggwQgphMAIheQAJhrA0gsQAmghA9ADIAIABQBHAxApAwQA5BDABA9QAAA1gnAzQgWAbghAaIg0AlQgaARgZACIgFAAQgnAAgggog");
	this.shape_649.setTransform(2.3,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_634}]}).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[]},1).wait(82));

	// 
	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("rgba(0,0,0,0.251)").s().p("AhuCQQg4gkgEhIIACgzQAFg8AXhRQAnEEBqguIAXgMQA4glBJhvIAOAWQguCAhSA/IgKAHQg2AngrAAQgZAAgVgNg");
	this.shape_650.setTransform(1.2,112.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("rgba(0,0,0,0.251)").s().p("AhzBtQgxgogDhFIAGgjQAPgkAdg8QA6DdBvhGIARgFQApgJAyhNIAIAWQg1B3hbAoIgKAEQgkASgfAAQgjAAgbgXg");
	this.shape_651.setTransform(3.2,115.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("rgba(0,0,0,0.251)").s().p("Ah3BHQgqgtgDhDIALgQQAYgNAjgnQBMC1B0hbIALADQAaARAcgrIACAVQg6BvhnAQIgHABQgQADgPAAQg0AAghgng");
	this.shape_652.setTransform(5.2,118.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("rgba(0,0,0,0.251)").s().p("AgPBeIgIgBQhDgMgkg5QgigugDhFQAHAEAKAAQAgALApgSQBdCNB7hyIAHAJQAIAvAGgKIgEAUQg8BghkAAIgPgBg");
	this.shape_653.setTransform(7.3,121.9);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("rgba(0,0,0,0.251)").s().p("AgxBsIgIgFQg7gjgehAQgbg0gChCQAJANAMAJQAqAiAuADQBwBlCBiJIABARQgHBKgRAXIgJAUQg2BIhTAAQgZAAgegHg");
	this.shape_654.setTransform(10.8,123.1);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("rgba(0,0,0,0.251)").s().p("AhdB4IgHgIQg0g8gYhFQgTg5gBhCQAKAYAQARQAzA6AzAZQCDA8CGigIgFAYQgWBlgoA6IgPAUQgvA2hEAAQgqAAgzgVg");
	this.shape_655.setTransform(15.2,124.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_650}]},15).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[]},1).wait(77));

	// Layer 10
	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCzQgWgFgWgJQgngRgQg3IgHgiQgLhFAJhHIANhkQgBA6AKAqIADAOQATBGBFAbIAQAIQAZAKA7AAQBPAAAogwQAMgMAJgTIASgiIAGgQIgIAgQgKAqgTAlIgNAZIgYAmQgYAhgcAUQg0Akg3AAQgSAAgSgDg");
	this.shape_656.setTransform(-0.3,12.1);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCuQgWgFgWgJQgkgPgPg0QgHgTgDgUQgLhBAJhBIAMhkQAAAzAKAkIADAMQATBJBBAZIAPAJQAZAMA4ACQBMADAqgvQANgNAJgTIATgjIAJgTIgHAfQgJApgSAjIgOAcQgOAWgPAUQgXAfgcAUQgzAjg1AAQgRAAgRgDg");
	this.shape_657.setTransform(-0.3,19.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCpQgVgFgVgJQgigOgOgwQgKgUgEgYQgJg8AHg9IANhjQAAAsAKAeIADALQASBIA+AbIAOAJQAYAOA1ADQBKAHAsguQANgOALgTIATgjIAMgXIgFAfQgKAngRAiIgPAeQgPAZgSAVQgXAegbATQgyAig0AAQgQAAgQgDg");
	this.shape_658.setTransform(-0.2,26.2);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCkQgUgFgVgJQgfgNgNgsQgOgVgEgcQgIg3AHg5QAFgvAHgzQAAAmALAXIADAJQARBIA6AdIAOAJQAXARAzAEQBHALAtguQAPgPAMgUIAUgiIAPgbIgEAeQgKAmgQAhIgQAgQgSAcgVAWQgWAdgaASQgxAhgyAAQgPAAgQgDg");
	this.shape_659.setTransform(-0.2,33.2);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCfQgTgFgUgIQgdgMgMgpQgSgWgDggQgIgyAGg0QAFgvAHgzQABAfALASIADAIQAQBHA3AgIANAIQAWASAwAGQBGAOAugtQAQgQANgUIAUgiIASgeIgCAdQgKAkgPAiIgSAgQgTAfgYAYQgWAbgZASQgwAfgvAAQgPAAgQgDg");
	this.shape_660.setTransform(-0.1,40.2);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("rgba(0,0,0,0.251)").s().p("AhMCaQgTgFgUgIQgagLgLglQgVgXgEgkQgHgtAGgvQAEgvAHgzQACAZALALIADAGQAQBHAzAiIAMAJQAWAUAvAHQBBASAwgtQAQgRAOgUIAVgiIAVgiIgBAcQgJAjgPAgIgTAjQgVAigaAZQgVAagZARQgtAegvAAQgPAAgOgDg");
	this.shape_661.setTransform(-0.1,47.3);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("rgba(0,0,0,0.251)").s().p("AhMCVQgTgFgTgIQgYgKgKghQgYgZgEgnQgGgpAFgqQADguAIgzQACASALAFIADAFQAQBHAvAiIALALQAVAVAtAJQA+AVAygsQARgSAPgUIAWgiIAYgmIAAAcQgJAhgOAfIgUAlQgWAlgdAaQgVAYgYARQgsAdguAAQgNAAgOgDg");
	this.shape_662.setTransform(0,54.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCQQgSgFgSgHQgWgJgJgeQgcgagDgrQgGgkAEgmQADgtAIgzQACALAMgBIADADQAPBHAsAkIAKALQAVAXApALQA8AYA0gsQASgSAQgVIAXgiIAagpIACAbQgJAggNAdIgVAoQgZAogfAbQgVAXgXAQQgrAcgsAAQgNAAgNgDg");
	this.shape_663.setTransform(0.2,61.4);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("rgba(0,0,0,0.251)").s().p("AhNCNQgSgFgSgHQgSgIgIgaQgggbgEgvQgFgfAFghQABgsAIg0QAEAEAMgHIACACQAPBGAoAmIAKALQATAZAnANQA6AcA1gtQATgSARgVIAXgiQAPgUAPgZIADAbQgIAegNAcIgWAqQgbArgiAdQgUAVgXAPQgpAagqAAQgMAAgNgCg");
	this.shape_664.setTransform(0.3,68.2);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCOQgRgEgRgHQgQgHgHgXQgjgcgEgyQgFgbAEgcQABgsAIg0QAEgCANgNIACAAQAOBGAlAnIAJAMQATAbAjAOQA4AfA3guQAUgRASgVIAYgiQAPgVARgbIAFAaQgIAcgMAbIgYAsQgcAuglAeQgUAUgWAOQgnAZgpAAQgMAAgMgCg");
	this.shape_665.setTransform(0.4,74.6);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCQQgRgEgQgHQgOgGgGgTQgmgegEg1QgEgYADgWQABgrAIg0QAEgJANgTIADgCQANBGAhApIAIAMQASAdAhAQQA1AjA5guQAVgSATgVIAZgiQARgXASgdIAGAZQgIAbgLAaIgZAuQgeAxgoAfQgTATgWANQgmAZgmAAQgMAAgLgDg");
	this.shape_666.setTransform(0.5,81);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("rgba(0,0,0,0.251)").s().p("AhOCTQgQgFgQgHQgLgEgFgPQgqgfgEg6QgDgTACgRQAAgqAJg0QAFgQANgaIACgDQANBGAdAqIAIANQARAfAeARQAzAnA6guQAWgSAUgWIAZgiQATgYAUggIAHAZQgIAagKAYIgaAwQggA1gqAgQgTARgVANQgmAXgkAAQgLAAgKgCg");
	this.shape_667.setTransform(0.6,87.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCVIgfgLQgIgEgEgMQgugggEg9QgCgOACgPQgBgnAJg0QAFgXANgfIADgFQAMBFAaAsIAHANQAQAhAcATQAyAqA6guIAsgoIAagiQAUgaAVghIAJAXQgIAZgKAWIgbAzQghA4gtAhQgTAQgUAMQgkAWgjAAQgKAAgKgCg");
	this.shape_668.setTransform(0.8,93.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("rgba(0,0,0,0.251)").s().p("AhPCXIgegLQgGgCgDgIQgxgigEhAQgCgKACgKQgBgmAIg1QAGgdAOgmIACgGQAMBFAWAtIAGANQAQAkAZAUQAwAuA7guIAugpIAbgiQAVgbAXgkIAKAXQgHAXgJAWIgdA1QgjA6gwAjQgSAOgUAMQgjAUggAAQgKAAgJgCg");
	this.shape_669.setTransform(0.9,99.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("rgba(0,0,0,0.251)").s().p("AhQCZIgcgKQgEgCgCgEQg1gjgEhEIAAgLQgBglAJg1QAGgkAOgsIACgHQALBEATAvIAFAOQAPAlAWAWQAuAxA9gtIAwgqIAbgiQAXgdAYgmIAMAXIgQApIgdA3QglA+gzAkQgSANgTALQgiATgeAAQgKAAgIgCg");
	this.shape_670.setTransform(1,106.3);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("rgba(0,0,0,0.251)").s().p("AhQCcIgbgLIgCgBQg5gkgEhIIAAgBQgCglAJg0QAHgrAOgyIADgJQAKBEAPAwIAFAOQAOAoATAXQArA1A/gtIAygtIAcggQAYgeAagoIANAWIgPAmIgeA6QgnBAg2AmIghAVQgjASgdAAQgIAAgIgBg");
	this.shape_671.setTransform(1.1,112.6);

	this.instance_1 = new lib.Sprite21();
	this.instance_1.setTransform(5.4,-88.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_656}]}).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).to({y:94.5},12).to({y:121.8},14).to({y:290},24).to({y:297},1).wait(21));

	// Layer 8
	this.instance_2 = new lib.Sprite21();
	this.instance_2.setTransform(5.4,297);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({scaleX:0.8,scaleY:0.8,y:298,alpha:0.672},0).to({scaleX:0.41,scaleY:0.41,y:300,alpha:0},2).to({_off:true},1).wait(40));

	// Layer 6
	this.instance_3 = new lib.Sprite21();
	this.instance_3.setTransform(-4,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({scaleX:0.76,scaleY:0.76,x:-6,y:272.5,alpha:0.672},0).to({scaleX:0.28,scaleY:0.28,x:-10,y:277.1,alpha:0},2).to({_off:true},1).wait(13).to({_off:false,scaleX:1,scaleY:1,x:-4,y:-58.9,alpha:1},0).to({y:180.9},15).to({y:186},4).to({y:256.1},5).to({y:270.1},1).wait(15));

	// Layer 4
	this.instance_4 = new lib.Sprite21();
	this.instance_4.setTransform(21,111);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({scaleX:0.88,scaleY:0.88,alpha:0.801},0).to({scaleX:0.41,scaleY:0.41,alpha:0},4).to({_off:true},1).wait(16).to({_off:false,scaleX:1,scaleY:1,y:-120.3,alpha:1},0).to({y:27.8},12).to({y:100},8).to({y:111},1).wait(40));

	//  (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqIINIAAwZIURAAIAAQZg");
	var mask_graphics_15 = new cjs.Graphics().p("AqIQ8MAAAgh3IURAAMAAAAh3g");
	var mask_graphics_20 = new cjs.Graphics().p("AqIQyMAAAghjIURAAMAAAAhjg");
	var mask_graphics_30 = new cjs.Graphics().p("AqISjMAAAglFIURAAMAAAAlFg");
	var mask_graphics_34 = new cjs.Graphics().p("AqIWcMAAAgs3IURAAMAAAAs3g");
	var mask_graphics_41 = new cjs.Graphics().p("AqIdhMAAAg7BIURAAMAAAA7Bg");
	var mask_graphics_45 = new cjs.Graphics().p("AqIeLMAAAg8VIURAAMAAAA8Vg");
	var mask_graphics_50 = new cjs.Graphics().p("AqIeVMAAAg8pIURAAMAAAA8pg");
	var mask_graphics_54 = new cjs.Graphics().p("AqIeIMAAAg8PIURAAMAAAA8Pg");
	var mask_graphics_56 = new cjs.Graphics().p("AqIfGMAAAg+LIURAAMAAAA+Lg");
	var mask_graphics_58 = new cjs.Graphics().p("AqIf6MAAAg/zIURAAMAAAA/zg");
	var mask_graphics_61 = new cjs.Graphics().p("EgKIAhDMAAAhCFIURAAMAAABCFg");
	var mask_graphics_77 = new cjs.Graphics().p("EgKIAwmMAAAhhLIURAAMAAABhLg");
	var mask_graphics_97 = new cjs.Graphics().p("EgKIAwmMAAAhhLIURAAMAAABhLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2,y:-67.5}).wait(15).to({graphics:mask_graphics_15,x:2,y:-11.6}).wait(5).to({graphics:mask_graphics_20,x:2,y:-12.6}).wait(10).to({graphics:mask_graphics_30,x:2,y:-1.3}).wait(4).to({graphics:mask_graphics_34,x:2,y:23.6}).wait(7).to({graphics:mask_graphics_41,x:2,y:68.8}).wait(4).to({graphics:mask_graphics_45,x:2,y:73.1}).wait(5).to({graphics:mask_graphics_50,x:2,y:74.1}).wait(4).to({graphics:mask_graphics_54,x:2,y:76.9}).wait(2).to({graphics:mask_graphics_56,x:2,y:83}).wait(2).to({graphics:mask_graphics_58,x:2,y:92.2}).wait(3).to({graphics:mask_graphics_61,x:2,y:99.5}).wait(16).to({graphics:mask_graphics_77,x:2,y:199}).wait(20).to({graphics:mask_graphics_97,x:2,y:199}).wait(1));

	// 
	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("rgba(255,255,255,0)").s().p("EgCOAvGQgGgYAAgfIABgcIAUlcIAUldQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAWhLIAHgZIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgQgTIgJgLIAAgJQAFgjgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg6sLIgBgcQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA9IqIABAUQgvHIgtDtQgkCOgqCNIgzCkIgOArIgIAYIAEAHIAAADQAAA/BSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_672.setTransform(7.1,209.6);
	this.shape_672._off = true;

	this.shape_672.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_672).wait(97).to({_off:false},0).wait(1));

	// Layer 2
	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("rgba(255,255,255,0.125)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeIAAgJQAFgjgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnIAEAHIAAADQAAA/BSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_673.setTransform(7.1,209.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EAAlgprQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnIAEAHIAAADQAAA/BSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeIAAgJQAFgjgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDg");
	this.shape_674.setTransform(7.1,209.6);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Aj2KXQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghg");
	this.shape_675.setTransform(7.1,209.6);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("rgba(255,255,255,0.118)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_676.setTransform(7.1,209.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("rgba(255,255,255,0.114)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_677.setTransform(7.1,209.6);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("rgba(255,255,255,0.106)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_678.setTransform(7.1,209.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("rgba(255,255,255,0.102)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_679.setTransform(7.1,209.6);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("rgba(255,255,255,0.094)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_680.setTransform(7.1,209.6);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("rgba(255,255,255,0.086)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_681.setTransform(7.1,209.6);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("rgba(255,255,255,0.082)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_682.setTransform(7.1,209.6);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("rgba(255,255,255,0.075)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_683.setTransform(7.1,209.6);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("rgba(255,255,255,0.071)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_684.setTransform(7.1,209.6);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("rgba(255,255,255,0.063)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_685.setTransform(7.1,209.6);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("rgba(255,255,255,0.055)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_686.setTransform(7.1,209.6);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("rgba(255,255,255,0.051)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_687.setTransform(7.1,209.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("rgba(255,255,255,0.043)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_688.setTransform(7.1,209.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("rgba(255,255,255,0.039)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_689.setTransform(7.1,209.6);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("rgba(255,255,255,0.031)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_690.setTransform(7.1,209.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("rgba(255,255,255,0.024)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_691.setTransform(7.1,209.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("rgba(255,255,255,0.02)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_692.setTransform(7.1,209.6);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("rgba(255,255,255,0.012)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_693.setTransform(7.1,209.6);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("rgba(255,255,255,0.008)").s().p("EgCOAvGQgGgYAAgfIAprVQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAdhkIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgZgeQAFgsgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg7snQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA+I+QgvHIgtDtQgkCOgqCNIhJDnQAEBJBSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_694.setTransform(7.1,209.6);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("EAAlgprQgRCkgTCTQhMGPBcF8QA5DqBvDUIA9IqIABAUQgvHIgtDtQgkCOgqCNIgzCkIgOArIgIAYIAEAHIAAADQAAA/BSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNQgGgYAAgfIABgcIAUlcIAUldQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAWhLIAHgZIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgQgTIgJgLIAAgJQAFgjgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg6sLIgBgcQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDg");
	this.shape_695.setTransform(7.1,209.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("rgba(255,255,255,0)").s().p("EgCOAvGQgGgYAAgfIABgcIAUlcIAUldQAAgZgZiQQgZiQAAgZQAAgZAUhfQAUhfAAgZQAAgTA0ixIAWhLIAHgZIABgtIAJAZQACgmAJglIAHgkIACgbQAEhQgfhHQgfhMg6g1QgagYgOghIhUjKQAshsA1hlIAbgqQBfh9AniXQB6k8hRlmIgQgTIgJgLIAAgJQAFgjgFgiIgHgjIADgvQAAhchJi5Qg0iBg+hsQgOimAJipIg6sLIgBgcQAAiBAvivQAsihA8h3QA+h7AoABQAvACAACnQgChFgiFDQgRCkgTCTQhMGPBcF8QA5DqBvDUIA9IqIABAUQgvHIgtDtQgkCOgqCNIgzCkIgOArIgIAYIAEAHIAAADQAAA/BSB2QA2BOAXAyQAiB/gGCFIgBAQIAQBzQgHBJgaBHQgXBAg4BkQg7BrgUAxQgiBaAABaQAABPAOBOIAbCOQAqDMAAEGQAAB1gJA3QgaCWhTAAQhIAAgUhNg");
	this.shape_696.setTransform(7.1,209.6);

	this.shape_673.mask = this.shape_674.mask = this.shape_675.mask = this.shape_676.mask = this.shape_677.mask = this.shape_678.mask = this.shape_679.mask = this.shape_680.mask = this.shape_681.mask = this.shape_682.mask = this.shape_683.mask = this.shape_684.mask = this.shape_685.mask = this.shape_686.mask = this.shape_687.mask = this.shape_688.mask = this.shape_689.mask = this.shape_690.mask = this.shape_691.mask = this.shape_692.mask = this.shape_693.mask = this.shape_694.mask = this.shape_695.mask = this.shape_696.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_673}]}).to({state:[{t:this.shape_673},{t:this.shape_674}]},77).to({state:[{t:this.shape_676},{t:this.shape_675}]},1).to({state:[{t:this.shape_677},{t:this.shape_675}]},1).to({state:[{t:this.shape_678},{t:this.shape_675}]},1).to({state:[{t:this.shape_679},{t:this.shape_675}]},1).to({state:[{t:this.shape_680},{t:this.shape_675}]},1).to({state:[{t:this.shape_681},{t:this.shape_675}]},1).to({state:[{t:this.shape_682},{t:this.shape_675}]},1).to({state:[{t:this.shape_683},{t:this.shape_675}]},1).to({state:[{t:this.shape_684},{t:this.shape_675}]},1).to({state:[{t:this.shape_685},{t:this.shape_675}]},1).to({state:[{t:this.shape_686},{t:this.shape_675}]},1).to({state:[{t:this.shape_687},{t:this.shape_675}]},1).to({state:[{t:this.shape_688},{t:this.shape_675}]},1).to({state:[{t:this.shape_689},{t:this.shape_675}]},1).to({state:[{t:this.shape_690},{t:this.shape_675}]},1).to({state:[{t:this.shape_691},{t:this.shape_675}]},1).to({state:[{t:this.shape_692},{t:this.shape_675}]},1).to({state:[{t:this.shape_693},{t:this.shape_675}]},1).to({state:[{t:this.shape_694},{t:this.shape_675}]},1).to({state:[{t:this.shape_696},{t:this.shape_695}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-99.5,51.3,410.7);


(lib.Sprite17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Shape2("single",0);
	this.instance.setTransform(-189,-311.3,0.743,0.742);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-309.6},0).wait(1).to({y:-307.9},0).wait(1).to({x:-188.9,y:-306.1},0).wait(1).to({y:-304.4},0).to({x:-188.8,y:-301},2).to({y:-299.2},1).wait(1).to({y:-297.5},0).wait(1).to({y:-295.8},0).wait(1).to({x:-188.7,y:-294.1},0).wait(1).to({y:-292.3},0).wait(1).to({y:-290.6},0).wait(1).to({x:-188.6,y:-288.9},0).wait(1).to({y:-287.2},0).wait(1).to({y:-285.4},0).wait(1).to({y:-283.7},0).to({x:-188.5,y:-280.3},2).to({y:-278.5},1).wait(1).to({x:-188.4,y:-276.8},0).wait(1).to({y:-275.1},0).wait(1).to({y:-273.4},0).wait(1).to({y:-271.6},0).wait(1).to({x:-188.3,y:-269.9},0).wait(1).to({y:-268.2},0).wait(1).to({y:-266.4},0).wait(1).to({x:-188.2,y:-264.7},0).wait(1).to({y:-263},0).to({x:-188.1,y:-259.5},2).to({y:-257.8},1).wait(1).to({y:-256.1},0).wait(1).to({y:-254.4},0).wait(1).to({x:-188,y:-252.6},0).wait(1).to({y:-250.9},0).wait(1).to({y:-249.2},0).wait(1).to({x:-187.9,y:-247.5},0).wait(1).to({y:-245.7},0).wait(1).to({y:-244},0).wait(1).to({y:-242.3},0).to({x:-187.8,y:-238.8},2).to({y:-237.1},1).wait(1).to({x:-187.7,y:-235.4},0).wait(1).to({y:-233.7},0).wait(1).to({y:-231.9},0).to({y:-230.9},2).to({x:-187.6,y:-230.4},1).wait(1).to({y:-229.9},0).to({y:-227.9},4).to({y:-227.3},1).wait(1).to({y:-226.8},0).to({y:-224.8},4).to({x:-187.5,y:-224.3},1).wait(1).to({y:-223.8},0).wait(1).to({y:-223.3},0).wait(1).to({y:-219.4},0).wait(1).to({x:-187.4,y:-215.5},0).wait(1).to({x:-187.3,y:-211.6},0).to({x:-187.2,y:-206},2).to({y:-204.3},1).wait(1).to({y:-202.5},0).wait(1).to({y:-200.8},0).wait(1).to({x:-187.1,y:-199.1},0).wait(1).to({y:-197.4},0).wait(1).to({y:-195.6},0).wait(1).to({x:-187,y:-193.9},0).wait(1).to({y:-192.2},0).wait(1).to({y:-190.5},0).wait(1).to({y:-188.7},0).to({x:-186.9,y:-185.3},2).to({y:-183.6},1).wait(1).to({x:-186.8,y:-181.8},0).wait(1).to({y:-180.1},0).wait(1).to({y:-178.4},0).wait(1).to({x:-186.7,y:-176.6},0).wait(1).to({y:-174.9},0).wait(1).to({y:-173.2},0).wait(1).to({y:-171.5},0).to({x:-186.6,y:-168},2).to({y:-166.3},1).wait(1).to({x:-186.5,y:-164.6},0).wait(1).to({y:-162.8},0).wait(1).to({y:-161.1},0).wait(1).to({y:-159.4},0).wait(1).to({x:-186.4,y:-157.7},0).wait(1).to({y:-155.9},0).wait(1).to({y:-154.2},0).wait(1).to({x:-186.3,y:-152.5},0).wait(1).to({y:-150.8},0).wait(1).to({y:-149},0).wait(1).to({y:-148.5},0).wait(1).to({y:-148},0).wait(1).to({x:-186.2,y:-147.5},0).to({y:-145},5).to({y:-144.4},1).wait(1).to({y:-143.9},0).to({y:-141.9},4).to({x:-186.1,y:-141.4},1).wait(1).to({y:-140.9},0).wait(1).to({y:-140.4},0).wait(1).to({y:-138.6},0).wait(1).to({y:-136.9},0).wait(1).to({x:-186,y:-135.2},0).wait(1).to({y:-133.5},0).wait(1).to({y:-131.7},0).wait(1).to({x:-185.9,y:-130},0).wait(1).to({y:-128.3},0).wait(1).to({y:-126.6},0).wait(1).to({y:-124.8},0).to({x:-185.8,y:-121.4},2).to({y:-119.7},1).wait(1).to({x:-185.7,y:-117.9},0).wait(1).to({y:-116.2},0).wait(1).to({y:-114.5},0).wait(1).to({x:-185.6,y:-112.8},0).wait(1).to({y:-111},0).wait(1).to({y:-109.3},0).wait(1).to({y:-107.6},0).to({x:-185.5,y:-104.1},2).to({y:-102.4},1).wait(1).to({x:-185.4,y:-100.7},0).wait(1).to({y:-99},0).wait(1).to({y:-97.2},0).wait(1).to({x:-185.3,y:-95.5},0).wait(1).to({y:-93.8},0).wait(1).to({y:-92.1},0).wait(1).to({y:-90.3},0).to({x:-185.2,y:-86.9},2).to({y:-85.2},1).wait(1).to({x:-185.1,y:-83.4},0).wait(1).to({y:-81.7},0).wait(1).to({y:-80},0).to({x:-184.7,y:-58.4},4).to({x:-184.6,y:-53},1).wait(1).to({x:-184.5,y:-47.6},0).to({x:-184.3,y:-36.8},2).to({y:-36},1).wait(1).to({y:-35.3},0).to({y:-32.9},3).to({x:-184.2,y:-32.1},1).wait(1).to({y:-31.3},0).to({y:-29.7},2).to({y:-29},1).wait(1).to({y:-28.2},0).wait(1).to({x:-184.1,y:-26.4},0).wait(1).to({y:-24.7},0).wait(1).to({y:-23},0).wait(1).to({y:-21.3},0).to({x:-184,y:-17.8},2).to({y:-16.1},1).wait(1).to({x:-183.9,y:-14.4},0).wait(1).to({y:-12.6},0).wait(1).to({y:-10.9},0).wait(1).to({x:-183.8,y:-9.2},0).wait(1).to({y:-7.5},0).wait(1).to({y:-5.7},0).wait(1).to({y:-4},0).to({x:-183.7,y:-0.6},2).to({y:1.2},1).wait(1).to({x:-183.6,y:2.9},0).wait(1).to({y:4.6},0).wait(1).to({y:6.3},0).wait(1).to({x:-183.5,y:8.1},0).wait(1).to({y:9.8},0).wait(1).to({y:11.5},0).wait(1).to({y:13.2},0).to({x:-183.4,y:16.7},2).to({y:18.4},1).wait(1).to({x:-183.3,y:20.1},0).wait(1).to({y:21.9},0).wait(1).to({y:23.6},0).wait(1).to({x:-183.2,y:25.3},0).wait(1).to({y:27},0).wait(1).to({y:28.8},0).wait(1).to({y:30.5},0).to({x:-183.1,y:33.9},2).to({y:35.7},1).wait(1).to({x:-183,y:37.4},0).wait(1).to({y:39.1},0).wait(1).to({y:40.9},0).wait(1).to({x:-182.9,y:42.6},0).wait(1).to({y:44.3},0).wait(1).to({y:46},0).wait(1).to({y:47.8},0).to({x:-182.8,y:51.2},2).to({y:52.9},1).wait(1).to({x:-182.7,y:54.7},0).wait(1).to({y:56.4},0).wait(1).to({y:58.1},0).wait(1).to({x:-182.6,y:59.8},0).wait(1).to({y:61.6},0).wait(1).to({y:63.3},0).wait(1).to({y:65},0).to({x:-182.5,y:68.5},2).to({y:70.2},1).wait(1).to({x:-182.4,y:71.9},0).wait(1).to({y:73.6},0).wait(1).to({y:75.4},0).wait(1).to({x:-182.3,y:77.1},0).wait(1).to({y:78.8},0).wait(1).to({y:80.5},0).wait(1).to({y:82.3},0).to({x:-182.2,y:85.7},2).to({y:87.4},1).wait(1).to({x:-182.1,y:89.2},0).wait(1).to({y:90.9},0).wait(1).to({y:92.6},0).wait(1).to({x:-182,y:94.3},0).wait(1).to({y:96.1},0).wait(1).to({y:97.8},0).wait(1).to({y:99.5},0).to({x:-181.9,y:103},2).to({y:104.7},1).wait(1).to({x:-181.8,y:106.4},0).wait(1).to({y:108.2},0).wait(1).to({y:109.9},0).wait(1).to({x:-181.7,y:114.3},0).wait(1).to({x:-181.6,y:118.8},0).wait(1).to({x:-181.5,y:123.2},0).wait(1).to({y:127.7},0).wait(1).to({x:-181.4,y:132.1},0).wait(1).to({x:-181.3,y:136.6},0).wait(1).to({x:-181.2,y:141},0).wait(1).to({y:145.5},0).wait(1).to({x:-181.1,y:149.9},0).wait(1).to({x:-181,y:154.4},0).wait(1).to({x:-180.9,y:158.8},0).wait(1).to({y:163.3},0).wait(1).to({x:-180.8,y:167.7},0).wait(1).to({x:-180.7,y:172.2},0).wait(1).to({x:-180.6,y:176.6},0).wait(1).to({y:181.1},0).wait(1).to({x:-180.5,y:185.5},0).wait(1).to({x:-180.4,y:190},0).wait(1).to({x:-180.3,y:194.4},0).wait(1).to({y:196.2},0).wait(1).to({y:197.9},0).wait(1).to({x:-180.2,y:199.6},0).wait(1).to({y:201.3},0).wait(1).to({y:203.1},0).wait(1).to({x:-180.1,y:204.8},0).wait(1).to({y:206.5},0).wait(1).to({y:208.2},0).wait(1).to({y:210},0).to({x:-180,y:213.4},2).to({y:215.1},1).wait(1).to({x:-179.9,y:216.9},0).wait(1).to({y:218.6},0).wait(1).to({y:220.3},0).wait(1).to({x:-179.8,y:222},0).wait(1).to({y:223.8},0).wait(1).to({y:225.5},0).wait(1).to({y:227.2},0).to({x:-179.7,y:230.7},2).to({y:232.4},1).wait(1).to({x:-179.6,y:234.1},0).wait(1).to({y:235.8},0).wait(1).to({y:237.6},0).wait(1).to({x:-179.5,y:239.3},0).wait(1).to({y:241},0).to({x:-179.4,y:244.5},2).to({y:246.2},1).wait(1).to({y:247.9},0).wait(1).to({y:249.6},0).wait(1).to({x:-179.3,y:251.4},0).wait(1).to({y:253.1},0).wait(1).to({y:254.8},0).wait(1).to({x:-179.2,y:256.5},0).wait(1).to({y:258.3},0).to({x:-179.1,y:261.7},2).to({y:263.4},1).wait(1).to({y:265.2},0).wait(1).to({y:266.9},0).wait(1).to({x:-179,y:268.6},0).wait(1));

	// 
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,9.7,0,100.2).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape.setTransform(-164,214.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(314).to({_off:false},0).wait(1));

	// 
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KiQAzqggzrDIDOAAIAoWDQgTh5g4ghQg2ghguAZQguAYgZBqg");
	this.shape_1.setTransform(-164,197.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_2.setTransform(-164,197.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgTh5g4ghQg2ghguAZQguAYgZBqQAzqggzrDg");
	this.shape_3.setTransform(-164,199.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-62.6,0,73.6).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_4.setTransform(-164,199.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-54.6,0,76.6).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_5.setTransform(-164,201.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-46.6,0,79.5).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_6.setTransform(-164,202.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-38.5,0,82.5).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_7.setTransform(-164,204.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-30.5,0,85.4).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_8.setTransform(-164,206.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-22.5,0,88.4).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_9.setTransform(-164,208);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-14.4,0,91.3).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_10.setTransform(-164,209.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-6.4,0,94.3).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_11.setTransform(-164,211.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,1.6,0,97.2).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_12.setTransform(-164,213.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,9.7,0,100.2).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_13.setTransform(-164,214.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{y:197.8}}]},304).to({state:[{t:this.shape_4},{t:this.shape_3,p:{y:199.5}}]},1).to({state:[{t:this.shape_5},{t:this.shape_3,p:{y:201.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_3,p:{y:202.9}}]},1).to({state:[{t:this.shape_7},{t:this.shape_3,p:{y:204.6}}]},1).to({state:[{t:this.shape_8},{t:this.shape_3,p:{y:206.3}}]},1).to({state:[{t:this.shape_9},{t:this.shape_3,p:{y:208}}]},1).to({state:[{t:this.shape_10},{t:this.shape_3,p:{y:209.7}}]},1).to({state:[{t:this.shape_11},{t:this.shape_3,p:{y:211.4}}]},1).to({state:[{t:this.shape_12},{t:this.shape_3,p:{y:213.1}}]},1).to({state:[{t:this.shape_13},{t:this.shape_1,p:{y:214.8}}]},1).wait(1));

	// 
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgZLBBBLCQgZhugogeQgpgfg0AIQg1AHgjB8QAhqqghq5g");
	this.shape_14.setTransform(-165,140.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7I2Qgpgfg0AIQg1AHgjB8QAhqqgiq5IDOAAQgYLBBBLCQgZhugogeg");
	this.shape_15.setTransform(-165,140.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgYLBBALCQgZhugpgfQgpgegzAIQg2AIgiB7QAiqpgjq6g");
	this.shape_16.setTransform(-165,142.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I1QgpgegzAIQg2AIgiB7QAiqpgiq6IDNAAQgXLBA/LCQgYhugpgfg");
	this.shape_17.setTransform(-165,142.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgWLBA+LCQgYhvgqgeQgqgfgyAJQg2AIgiB7QAiqpgjq6g");
	this.shape_18.setTransform(-165,143.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I1QgpgfgzAJQg1AIgjB7QAiqpgiq6IDNAAQgVLBA9LCQgXhvgqgeg");
	this.shape_19.setTransform(-165,143.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgULBA8LCQgXhvgrgfQgqgegyAJQg1AJgiB6QAjqpgkq6g");
	this.shape_20.setTransform(-164.9,145.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I0QgqgegzAJQg1AJgiB6QAjqpgkq6IDPAAQgVLBA8LCQgYhvgpgfg");
	this.shape_21.setTransform(-164.9,145.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgSLBA6LCQgXhvgrgfQgqgfgzAKQg0AKgiB5QAkqoglq7g");
	this.shape_22.setTransform(-164.9,147.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I0QgrgfgzAKQg0AKgiB5QAkqoglq7IDPAAQgTLBA6LCQgXhvgqgfg");
	this.shape_23.setTransform(-164.9,147.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgSLBA6LCQgYhvgrgfQgrgfgyAKQg1AKghB5QAkqoglq7g");
	this.shape_24.setTransform(-164.9,149);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5I0QgrgfgyAKQg1AKghB5QAkqoglq7IDOAAQgRLBA6LCQgYhvgrgfg");
	this.shape_25.setTransform(-164.9,149);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgRLBA5LCQgYhwgsgfQgqgfgzALQg0ALghB4QAkqoglq7g");
	this.shape_26.setTransform(-164.8,150.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IzQgsgfgyALQg0ALghB4QAkqogkq7IDOAAQgRLBA4LCQgXhwgrgfg");
	this.shape_27.setTransform(-164.8,150.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgPLBA3LCQgYhwgsgfQgrgfgyALQg0ALghB4QAlqngmq8g");
	this.shape_28.setTransform(-164.8,152.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IzQgsgfgyALQg0ALghB4QAlqnglq8IDOAAQgPLBA2LCQgXhwgrgfg");
	this.shape_29.setTransform(-164.8,152.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgOLBA2LCQgXhxgtgfQgsgfgyAMQgzAMghB3QAmqngmq8g");
	this.shape_30.setTransform(-164.8,154.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IyQgsgfgyAMQg0AMggB3QAlqngmq8IDOAAQgNLBA2LCQgYhxgsgfg");
	this.shape_31.setTransform(-164.8,154.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgMLBA0LCQgXhxgtgfQgsgfgyAMQgzAMghB3QAmqngmq8g");
	this.shape_32.setTransform(-164.8,156);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IyQgtgfgxAMQg0AMggB3QAnqngoq8IDOAAQgMLBA1LCQgYhxgsgfg");
	this.shape_33.setTransform(-164.8,156);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgLLBAzLCQgYhxgtgfQgtgggxANQgzANggB2QAmqmgnq9g");
	this.shape_34.setTransform(-164.7,157.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IyQgugggxANQgzANggB2QAnqmgnq9IDOAAQgMLBAzLCQgWhxgtgfg");
	this.shape_35.setTransform(-164.7,157.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgKLBAyLCQgXhxgtggQgtgfgyANQgzANgfB2QAnqmgoq9g");
	this.shape_36.setTransform(-164.7,159.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA3IxQgugfgxANQgyANggB2QAnqmgoq9IDOAAQgJLBAyLCQgYhxgtggg");
	this.shape_37.setTransform(-164.7,159.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgILBAwLCQgWhygugfQgugggxAOQgzAOgfB1QAoqlgpq+g");
	this.shape_38.setTransform(-164.7,161.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA3IxQgugggxAOQgyAOggB1QAoqlgpq+IDOAAQgHLBAwLCQgXhygugfg");
	this.shape_39.setTransform(-164.7,161.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgHLBAvLCQgXhyguggQgvgfgwAOQgzAOgfB1QAoqlgpq+g");
	this.shape_40.setTransform(-164.6,163);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA3IwQgvgfgwAOQgzAOgfB1QAoqlgoq+IDOAAQgILBAvLCQgWhyguggg");
	this.shape_41.setTransform(-164.6,163);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgGLBAuLCQgWhzgvgfQgvgggwAPQgzAPgfB0QApqlgqq+g");
	this.shape_42.setTransform(-164.6,164.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA3IwQgvgggwAPQgzAPgfB0QApqlgpq+IDOAAQgGLBAtLCQgVhzgvgfg");
	this.shape_43.setTransform(-164.6,164.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgELBAsLCQgXhzgvggQgwgfgwAPQgyAPgeB0QApqlgqq+g");
	this.shape_44.setTransform(-164.6,166.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA2IvQgwgfgwAPQgxAPgfB0QApqlgqq+IDOAAQgDLBAsLCQgXhzgvggg");
	this.shape_45.setTransform(-164.6,166.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgDLBArLCQgWh0gwgfQgwgggwAQQgyAQgeBzQAqqkgqq/g");
	this.shape_46.setTransform(-164.5,168.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA2IvQgxgggvAQQgyAQgeBzQAqqkgqq/IDNAAQgCLBAqLCQgWh0gvgfg");
	this.shape_47.setTransform(-164.5,168.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgCLBAqLCQgWhzgwggQgwgggwAQQgyARgeByQArqkgrq/g");
	this.shape_48.setTransform(-164.5,169.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA2IvQgxgggvAQQgyARgeByQArqkgrq/IDNAAQgBLBApLCQgVhzgwggg");
	this.shape_49.setTransform(-164.5,169.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgBLBApLCQgWh0gwggQgxgggwARQgyARgdByQArqjgsrAg");
	this.shape_50.setTransform(-164.5,171.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA1IuQgxgggvARQgyARgdByQArqjgsrAIDPAAQgBLBAoLCQgVh0gxggg");
	this.shape_51.setTransform(-164.5,171.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQACLBAmLCQgVh0gxggQgygggvARQgyASgcBxQArqjgsrAg");
	this.shape_52.setTransform(-164.4,173.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA1IuQgxgggwARQgxASgdBxQArqjgsrAIDOAAQACLBAnLCQgWh0gxggg");
	this.shape_53.setTransform(-164.4,173.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQADLBAlLCQgVh1gxggQgygggvASQgyASgcBxQAsqjgtrAg");
	this.shape_54.setTransform(-164.4,175.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA1ItQgygggvASQgxASgdBxQAsqjgtrAIDOAAQADLBAmLCQgVh1gyggg");
	this.shape_55.setTransform(-164.4,175.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQADLBAlLCQgVh1gyggQgzgggvASQgxATgcBwQAsqjgtrAg");
	this.shape_56.setTransform(-164.4,176.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA0ItQgygggvASQgxATgcBwQAsqjgsrAIDOAAQADLBAkLCQgUh1gzggg");
	this.shape_57.setTransform(-164.4,176.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAFLBAjLCQgVh2gyggQgzgggvATQgxATgcBwQAtqigurBg");
	this.shape_58.setTransform(-164.4,178.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA0IsQgzggguATQgxATgcBwQAtqigtrBIDOAAQAFLBAiLCQgUh2gzggg");
	this.shape_59.setTransform(-164.4,178.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAGLBAiLCQgVh2gzggQg0ggguATQgwAUgcBvQAtqigurBg");
	this.shape_60.setTransform(-164.3,180.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA0IsQg0gggtATQgxAUgcBvQAuqigvrBIDOAAQAHLBAiLCQgVh2gzggg");
	this.shape_61.setTransform(-164.3,180.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQAHLBAhLCQgVh2gzggQg0ghguAVQgxAUgbBuQAuqigurBg");
	this.shape_62.setTransform(-164.3,182.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAzIsQgzghgvAVQgwAUgbBuQAuqigurBIDOAAQAHLBAgLCQgUh2g0ggg");
	this.shape_63.setTransform(-164.3,182.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQAJLBAfLCQgVh2gzghQg0ggguAVQgxAUgbBuQAvqigvrBg");
	this.shape_64.setTransform(-164.3,183.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAzIrQgzgggvAVQgwAUgbBuQAvqigvrBIDOAAQAJLBAeLCQgUh2g0ghg");
	this.shape_65.setTransform(-164.3,183.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAKLBAeLCQgVh3g0ggQgzghgwAWQgvAUgbBuQAvqigwrBg");
	this.shape_66.setTransform(-164.2,185.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAzIrQgzghgvAWQgwAUgbBuQAvqigwrBIDOAAQALLBAeLCQgVh3g0ggg");
	this.shape_67.setTransform(-164.2,185.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQALLBAdLCQgUh3g1ghQgzgggwAWQgvAVgbBtQAwqigxrBg");
	this.shape_68.setTransform(-164.2,187.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAzIqQg0ggguAWQgwAVgbBtQAvqigwrBIDOAAQANLBAcLCQgVh3g0ghg");
	this.shape_69.setTransform(-164.2,187.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQANLBAbLCQgUh4g1ggQgzghgwAWQgvAWgaBtQAwqigxrBg");
	this.shape_70.setTransform(-164.2,189.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAyIqQgzghgwAWQgvAWgaBtQAwqigwrBIDOAAQAMLBAbLCQgTh4g2ggg");
	this.shape_71.setTransform(-164.2,189.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAOLBAaLCQgUh4g2ghQg0gggvAWQgvAXgaBsQAwqigxrBg");
	this.shape_72.setTransform(-164.1,190.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAyIpQg0gggvAWQgwAXgZBsQAwqigxrBIDOAAQAPLBAaLCQgVh4g1ghg");
	this.shape_73.setTransform(-164.1,190.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAQLBAYLCQgUh4g2ghQg1ghguAYQgvAXgaBrQAxqhgyrCg");
	this.shape_74.setTransform(-164.1,192.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAyIpQg0ghgwAYQguAXgaBrQAxqhgyrCIDOAAQARLBAYLCQgUh4g2ghg");
	this.shape_75.setTransform(-164.1,192.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAQLBAYLCQgUh4g2ghQg2ghguAYQgvAXgZBrQAxqhgyrCg");
	this.shape_76.setTransform(-164.1,194.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAxIpQg0ghgvAYQgvAXgZBrQAyqhgyrCIDNAAQASLBAWLCQgTh4g3ghg");
	this.shape_77.setTransform(-164.1,194.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQASLBAWLCQgTh5g3ghQg2ghgvAZQguAYgZBqQAyqhgzrCg");
	this.shape_78.setTransform(-164.1,196.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAxIoQg1ghguAZQgvAYgZBqQAyqhgyrCIDNAAQATLBAVLCQgTh5g3ghg");
	this.shape_79.setTransform(-164.1,196.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KiQAzqggzrDIDOAAIAoWDQgTh5g4ghQg2ghguAZQguAYgZBqg");
	this.shape_80.setTransform(-164,197.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AAxIoQg2ghguAZQgvAYgYBqQAzqgg0rDIDPAAIAnWDQgSh5g4ghg");
	this.shape_81.setTransform(-164,197.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14}]},271).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[]},1).wait(10));

	// 
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgdh2gngcQgngdg1ALQg3ALgfB5QAhqqghq5g");
	this.shape_82.setTransform(-166.5,55.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogdg1ALQg3ALgeB5QAiqqgiq5IDOAAIAnWDQgch2gngcg");
	this.shape_83.setTransform(-166.5,55.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQASLBAWLCQgch2gngcQgogdg1ALQg3ALgeB5QAhqqgiq5g");
	this.shape_84.setTransform(-166.4,60.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogdg1ALQg2ALgfB5QAhqqghq5IDOAAQARLBAWLCQgch2gngcg");
	this.shape_85.setTransform(-166.4,60.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAPLBAZLCQgdh1gmgdQgogcg1AKQg3AKgfB6QAhqqgiq5g");
	this.shape_86.setTransform(-166.4,64.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogcg0AKQg3AKgfB6QAhqqgiq5IDOAAQAQLBAZLCQgdh1gngdg");
	this.shape_87.setTransform(-166.4,64.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQANLBAbLCQgch1gngcQgogdg1AKQg3AKgfB6QAhqqghq5g");
	this.shape_88.setTransform(-166.3,69.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IxQgogdg1AKQg3AKgfB6QAhqqgiq5IDPAAQANLBAaLCQgch1gmgcg");
	this.shape_89.setTransform(-166.3,69.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQALLBAdLCQgch1gogcQgngdg0AKQg3AKggB6QAhqqgiq5g");
	this.shape_90.setTransform(-166.2,73.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IxQgngdg0AKQg3AKggB6QAiqqgjq5IDOAAQALLBAeLCQgch1gogcg");
	this.shape_91.setTransform(-166.2,73.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAILBAgLCQgch0gngdQgogdg1AKQg2AKggB6QAhqqgiq5g");
	this.shape_92.setTransform(-166.1,78.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IxQgngdg1AKQg3AKgfB6QAiqqgjq5IDOAAQAILBAhLCQgch0gogdg");
	this.shape_93.setTransform(-166.1,78.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQAGLBAiLCQgch0gngdQgogdg1AKQg2AKggB6QAhqqgiq5g");
	this.shape_94.setTransform(-166.1,82.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IxQgogdg1AKQg2AKggB6QAiqqgiq5IDOAAQAGLBAhLCQgbh0gngdg");
	this.shape_95.setTransform(-166.1,82.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQADLBAlLCQgchzgngdQgogdg0AJQg3AKggB6QAhqqgiq5g");
	this.shape_96.setTransform(-166,87);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IyQgogdg1AJQg2AKggB6QAhqqghq5IDOAAQADLBAkLCQgbhzgngdg");
	this.shape_97.setTransform(-166,87);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQABLBAnLCQgbhzgogdQgogdg0AJQg3AJggB7QAhqqgiq5g");
	this.shape_98.setTransform(-165.9,91.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IyQgogdg0AJQg3AJggB7QAhqqghq5IDNAAQACLBAmLCQgbhzgngdg");
	this.shape_99.setTransform(-165.9,91.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgCLBAqLCQgbhygogeQgogdg0AJQg2AJghB7QAhqqgiq5g");
	this.shape_100.setTransform(-165.8,95.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IyQgogdg1AJQg3AJggB7QAhqqgiq5IDPAAQgCLBApLCQgahygngeg");
	this.shape_101.setTransform(-165.8,95.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgELBAsLCQgbhygogdQgogdg0AJQg2AJghB6QAhqqgiq5g");
	this.shape_102.setTransform(-165.7,100.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IzQgogdg0AJQg2AJghB6QAiqqgiq5IDOAAQgELBArLCQgahygogdg");
	this.shape_103.setTransform(-165.7,100.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgFLBAtLCQgahxgogeQgogdg0AJQg2AJghB6QAhqqgiq5g");
	this.shape_104.setTransform(-165.7,104.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IzQgogdgzAJQg3AJghB6QAiqqgjq5IDOAAQgFLBAuLCQgbhxgogeg");
	this.shape_105.setTransform(-165.7,104.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgJLBAxLCQgbhxgogdQgogegzAJQg3AIghB7QAhqqgiq5g");
	this.shape_106.setTransform(-165.6,109.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5I0Qgogeg0AJQg2AIghB7QAhqqgiq5IDOAAQgHLBAwLCQgbhxgogdg");
	this.shape_107.setTransform(-165.6,109.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgLLBAzLCQgahwgogeQgogeg0AJQg3AIghB7QAhqqgiq5g");
	this.shape_108.setTransform(-165.5,113.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I0Qgogeg1AJQg2AIghB7QAhqqgiq5IDOAAQgKLBAzLCQgahwgogeg");
	this.shape_109.setTransform(-165.5,113.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgMLBA0LCQgZhwgogeQgpgegzAJQg2AIgiB7QAhqqgiq5g");
	this.shape_110.setTransform(-165.4,118.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I0Qgogeg0AJQg2AIgiB7QAhqqghq5IDNAAQgMLBA0LCQgZhwgogeg");
	this.shape_111.setTransform(-165.4,118.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgQLBA4LCQgahvgogeQgpgegzAIQg2AIgiB7QAhqqgiq5g");
	this.shape_112.setTransform(-165.3,122.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I1Qgogeg0AIQg2AIgiB7QAiqqgjq5IDOAAQgPLBA4LCQgahvgogeg");
	this.shape_113.setTransform(-165.3,122.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgSLBA6LCQgZhvgpgeQgogeg0AIQg1AIgjB7QAhqqghq5g");
	this.shape_114.setTransform(-165.3,127);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I1Qgogeg0AIQg1AIgjB7QAiqqgiq5IDOAAQgSLBA5LCQgZhvgogeg");
	this.shape_115.setTransform(-165.3,127);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAQgULBA8LCQgZhvgogeQgogeg0AIQg2AIgiB7QAhqqgiq5g");
	this.shape_116.setTransform(-165.2,131.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6I1Qgogeg0AIQg1AIgjB7QAiqqgiq5IDOAAQgVLBA8LCQgZhvgogeg");
	this.shape_117.setTransform(-165.2,131.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAQgWLBA+LCQgZhugogfQgpgeg0AIQg1AHgjB8QAhqqgiq5g");
	this.shape_118.setTransform(-165.1,135.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7I1Qgpgeg0AIQg1AHgjB8QAhqqgiq5IDOAAQgVLBA+LCQgZhugogfg");
	this.shape_119.setTransform(-165.1,135.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAQgZLBBBLCQgZhugogeQgpgfg0AIQg1AHgjB8QAhqqghq5g");
	this.shape_120.setTransform(-165,140.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7I2Qgpgfg0AIQg1AHgjB8QAhqqgiq5IDOAAQgYLBBBLCQgZhugogeg");
	this.shape_121.setTransform(-165,140.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_83},{t:this.shape_82}]},252).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[]},1).wait(43));

	// 
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgIhqgxgiQgygigzAIQg1AJgjCEIAA1qg");
	this.shape_122.setTransform(-168,-30.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2QgxgigzAIQg1AJgkCEIAA1qIDOAAIApWDQgIhqgygig");
	this.shape_123.setTransform(-168,-30.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhqgxgiQgygigyAIQg2AJgjCEQABqzgBq3g");
	this.shape_124.setTransform(-168,-28.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2Qgxgig0AIQg1AJgiCEIAA1qIDOAAIAnWDQgHhqgygig");
	this.shape_125.setTransform(-168,-28.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhqgxgiQgygigyAIQg2AJgjCEQACq0gCq2g");
	this.shape_126.setTransform(-168,-26.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2Qgxgig0AIQg1AJgiCEQABq0gBq2IDOAAIAnWDQgHhqgygig");
	this.shape_127.setTransform(-168,-26.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgIhqgxgiQgygigzAIQg1AJgjCEQACqzgCq3g");
	this.shape_128.setTransform(-167.9,-25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2QgygigyAIQg2AJgjCEQACqzgCq3IDOAAIApWDQgKhqgwgig");
	this.shape_129.setTransform(-167.9,-25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgIhrgxghQgygigzAIQg1AJgjCDQADqzgDq2g");
	this.shape_130.setTransform(-167.9,-23.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2QgygigyAIQg1AJgkCDQADqzgDq2IDOAAIApWDQgKhrgwghg");
	this.shape_131.setTransform(-167.9,-23.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhrgxghQgwgigzAIQg2AJgjCEQAEqzgEq3g");
	this.shape_132.setTransform(-167.9,-21.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2QgygigzAIQg1AJgiCEQADqzgDq3IDOAAIAnWDQgJhrgwghg");
	this.shape_133.setTransform(-167.9,-21.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhrgxghQgxgigzAJQg1AIgjCEQAEqzgEq3g");
	this.shape_134.setTransform(-167.8,-19.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBI2QgxgigzAJQg1AIgjCEQAFqzgFq3IDOAAIApWDQgLhrgwghg");
	this.shape_135.setTransform(-167.8,-19.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgLhsgwghQgxghgyAIQg2AJgjCDQAFqygFq3g");
	this.shape_136.setTransform(-167.8,-18.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBI1QgxghgzAIQg1AJgjCDQAGqygGq3IDOAAIApWDQgLhsgwghg");
	this.shape_137.setTransform(-167.8,-18.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgLhsgwghQgwghg0AJQg1AIgiCDQAFqygFq3g");
	this.shape_138.setTransform(-167.8,-16.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBI1QgxghgzAJQg1AIgiCDQAFqygFq3IDOAAIAnWDQgKhsgwghg");
	this.shape_139.setTransform(-167.8,-16.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgLhsgwghQgwgigzAJQg2AJgiCDQAGqygGq3g");
	this.shape_140.setTransform(-167.8,-14.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBI1QgxgigyAJQg2AJgiCDQAGqygGq3IDOAAIAnWDQgKhsgwghg");
	this.shape_141.setTransform(-167.8,-14.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgMhsgvghQgxghgzAJQg2AJgiCCQAIqygIq3g");
	this.shape_142.setTransform(-167.7,-13);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAI1Qgvghg0AJQg1AJgjCCQAIqygIq3IDOAAIApWDQgMhsgwghg");
	this.shape_143.setTransform(-167.7,-13);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgMhsgvghQgwghgzAJQg2AJgiCCQAIqygIq3g");
	this.shape_144.setTransform(-167.7,-11.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAI1Qgvghg0AJQg2AJghCCQAHqygHq3IDNAAIAoWDQgMhsgvghg");
	this.shape_145.setTransform(-167.7,-11.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgMhtgvggQgwghgzAJQg2AJgiCBQAJqxgJq3g");
	this.shape_146.setTransform(-167.7,-9.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAI1Qgvghg0AJQg2AJghCBQAIqxgIq3IDNAAIAoWDQgMhtgvggg");
	this.shape_147.setTransform(-167.7,-9.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOhtguggQgvghg0AJQg2AJgiCCQAJqygJq3g");
	this.shape_148.setTransform(-167.6,-7.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/I1Qgughg0AJQg1AJgjCCQAJqygJq3IDPAAIAnWDQgMhtgwggg");
	this.shape_149.setTransform(-167.6,-7.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOhtgughQgvghg0AKQg2AJghCBQAJqxgKq3g");
	this.shape_150.setTransform(-167.6,-6.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAI0QgwghgzAKQg2AJghCBQAJqxgKq3IDPAAIAnWDQgNhtgughg");
	this.shape_151.setTransform(-167.6,-6.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOhtgughQgwgggzAJQg2AJgiCBQAKqxgKq3g");
	this.shape_152.setTransform(-167.6,-4.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAI0QgwgggzAJQg1AJgjCBQALqxgLq3IDOAAIApWDQgPhtgtghg");
	this.shape_153.setTransform(-167.6,-4.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgPhuguggQguggg0AJQg2AJghCBQAKqxgKq3g");
	this.shape_154.setTransform(-167.5,-2.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/I0Qgvggg0AJQg1AJghCBQAKqxgKq3IDOAAIAnWDQgOhuguggg");
	this.shape_155.setTransform(-167.5,-2.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgPhuguggQgughg0AKQg2AJghCBQALqxgLq3g");
	this.shape_156.setTransform(-167.5,-0.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/I0QgvghgzAKQg2AJghCBQALqxgLq3IDOAAIAnWDQgOhuguggg");
	this.shape_157.setTransform(-167.5,-0.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgPhuguggQgvgggzAJQg2AJgiCBQANqxgNq3g");
	this.shape_158.setTransform(-167.5,0.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/I0QgvgggzAJQg2AJgiCBQANqxgNq3IDOAAIApWDQgQhugtggg");
	this.shape_159.setTransform(-167.5,0.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgQhvgtgfQgvghgzAKQg2AJghCAQANqwgOq3g");
	this.shape_160.setTransform(-167.5,2.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/I0QgvghgzAKQg2AJghCAQANqwgOq3IDOAAIApWDQgQhvgtgfg");
	this.shape_161.setTransform(-167.5,2.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgQhvgtgfQguggg0AJQg1AJgiCAQAOqwgOq3g");
	this.shape_162.setTransform(-167.4,4.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+I0Qguggg0AJQg1AJghCAQANqwgNq3IDOAAIAnWDQgPhvgugfg");
	this.shape_163.setTransform(-167.4,4.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgRhvgtgfQgtggg0AJQg2AKgiCAQAOqwgOq4g");
	this.shape_164.setTransform(-167.4,5.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+I0Qgtggg0AJQg2AKgiCAQAOqwgOq4IDOAAIApWDQgRhvgtgfg");
	this.shape_165.setTransform(-167.4,5.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgRhvgtggQgtggg0AKQg2AJghCAQAOqwgPq3g");
	this.shape_166.setTransform(-167.4,7.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IzQgtggg0AKQg2AJghCAQAOqwgPq3IDOAAIApWDQgRhvgtggg");
	this.shape_167.setTransform(-167.4,7.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgShvgtggQgtgfg0AJQg1AKgiB/QAQqvgQq4g");
	this.shape_168.setTransform(-167.3,9.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IzQgtgfg0AJQg2AKggB/QAPqvgPq4IDOAAIAnWDQgRhvgtggg");
	this.shape_169.setTransform(-167.3,9.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgShwgtgfQgtggg0AKQg1AJghCAQAQqwgRq3g");
	this.shape_170.setTransform(-167.3,11.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IzQgtggg0AKQg1AJghCAQAQqwgQq3IDOAAIAnWDQgRhwgtgfg");
	this.shape_171.setTransform(-167.3,11.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgShwgsgfQgtgfg0AJQg2AKghB/QARqvgRq4g");
	this.shape_172.setTransform(-167.3,12.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IzQgsgfg1AJQg2AKggB/QARqvgSq4IDOAAIApWDQgShwgtgfg");
	this.shape_173.setTransform(-167.3,12.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgThwgsgfQgtgfgzAJQg3AKghB/QASqvgSq4g");
	this.shape_174.setTransform(-167.2,14.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IzQgsgfg0AJQg3AKggB/QARqvgRq4IDNAAIAoWDQgShwgsgfg");
	this.shape_175.setTransform(-167.2,14.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgThxgsgeQgtgggzAKQg2AKghB+QASqugTq4g");
	this.shape_176.setTransform(-167.2,16.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IzQgsggg0AKQg2AKghB+QASqugSq4IDNAAIAoWDQgShxgsgeg");
	this.shape_177.setTransform(-167.2,16.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgThxgsgeQgsgfg0AJQg2AKghB+QATqugTq4g");
	this.shape_178.setTransform(-167.2,18);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IzQgrgfg1AJQg2AKghB+QAUqugUq4IDPAAIAnWDQgThxgsgeg");
	this.shape_179.setTransform(-167.2,18);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgThxgsgfQgsgfg0AKQg2AKggB+QATqugUq4g");
	this.shape_180.setTransform(-167.2,19.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgrgfg1AKQg2AKggB+QATqugUq4IDPAAIAnWDQgThxgsgfg");
	this.shape_181.setTransform(-167.2,19.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgUhxgsgfQgrgfg0AKQg3AKggB+QAUqugVq4g");
	this.shape_182.setTransform(-167.1,21.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgrgfg0AKQg3AKggB+QAUqugVq4IDOAAIApWDQgVhxgrgfg");
	this.shape_183.setTransform(-167.1,21.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgVhxgrgfQgsgeg0AKQg2AJghB+QAVqugVq4g");
	this.shape_184.setTransform(-167.1,23.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgsgeg0AKQg2AJggB+QAUqugUq4IDOAAIAnWDQgUhxgrgfg");
	this.shape_185.setTransform(-167.1,23.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgWhygqgeQgsgfg0AKQg2AKggB+QAVqugWq4g");
	this.shape_186.setTransform(-167.1,24.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgsgfg0AKQg2AKggB+QAVqugVq4IDOAAIAnWDQgUhygrgeg");
	this.shape_187.setTransform(-167.1,24.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgWhygqgeQgrgeg1AKQg2AJggB+QAWqugWq4g");
	this.shape_188.setTransform(-167,26.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgsgeg0AKQg2AJghB+QAXqugXq4IDOAAIApWDQgWhygqgeg");
	this.shape_189.setTransform(-167,26.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgWhygqgeQgrgfg0AKQg3AKggB9QAXqtgXq4g");
	this.shape_190.setTransform(-167,28.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IyQgsgfgzAKQg3AKggB9QAXqtgYq4IDOAAIApWDQgWhygqgeg");
	this.shape_191.setTransform(-167,28.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgXhzgqgdQgrgfg0ALQg2AKggB8QAXqtgYq4g");
	this.shape_192.setTransform(-167,30);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7IyQgrgfg0ALQg2AKggB8QAXqtgXq4IDOAAIAnWDQgVhzgrgdg");
	this.shape_193.setTransform(-167,30);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgXhzgqgdQgqgeg0AKQg3AKggB8QAZqsgZq5g");
	this.shape_194.setTransform(-166.9,31.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7IyQgrgeg0AKQg2AKghB8QAZqsgZq5IDOAAIApWDQgXhzgqgdg");
	this.shape_195.setTransform(-166.9,31.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgXhzgpgeQgrgeg0ALQg3AKgfB8QAZqtgaq4g");
	this.shape_196.setTransform(-166.9,33.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7IxQgrgeg0ALQg3AKgfB8QAZqtgaq4IDOAAIApWDQgYhzgpgeg");
	this.shape_197.setTransform(-166.9,33.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgYhzgpgeQgqgeg1ALQg2AKggB8QAZqsgaq5g");
	this.shape_198.setTransform(-166.9,35.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IxQgpgeg1ALQg2AKggB8QAZqsgZq5IDOAAIAnWDQgXhzgqgeg");
	this.shape_199.setTransform(-166.9,35.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgYh0gpgdQgqgeg1ALQg2AKggB8QAaqtgbq4g");
	this.shape_200.setTransform(-166.9,36.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IxQgpgeg1ALQg2AKggB8QAaqtgaq4IDOAAIAnWDQgXh0gqgdg");
	this.shape_201.setTransform(-166.9,36.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgZh0gpgdQgqgeg0ALQg3AKgfB8QAaqsgbq5g");
	this.shape_202.setTransform(-166.8,38.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IxQgqgeg0ALQg3AKgfB8QAaqsgbq5IDOAAIApWDQgZh0gpgdg");
	this.shape_203.setTransform(-166.8,38.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgZh0gpgdQgpgdg1AKQg3AKgfB8QAbqsgbq5g");
	this.shape_204.setTransform(-166.8,40.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IxQgogdg2AKQg2AKgfB8QAbqsgbq5IDNAAIAoWDQgYh0gqgdg");
	this.shape_205.setTransform(-166.8,40.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgZh0gpgdQgpgeg1ALQg3AKgfB7QAcqrgcq5g");
	this.shape_206.setTransform(-166.8,42.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IxQgpgeg1ALQg3AKgfB7QAcqrgcq5IDNAAIAoWDQgYh0gpgdg");
	this.shape_207.setTransform(-166.8,42.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgah0gogdQgqgeg1ALQg2AKgfB7QAcqrgdq5g");
	this.shape_208.setTransform(-166.7,43.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IxQgpgeg2ALQg2AKgfB7QAdqrgeq5IDPAAIAnWDQgZh0gogdg");
	this.shape_209.setTransform(-166.7,43.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgah1gogdQgqgdg0ALQg3AKgfB7QAdqrgeq5g");
	this.shape_210.setTransform(-166.7,45.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IwQgpgdg1ALQg3AKgfB7QAeqrgfq5IDPAAIAnWDQgZh1gogdg");
	this.shape_211.setTransform(-166.7,45.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgah1gogdQgpgdg1ALQg2AKgfB7QAeqrgfq5g");
	this.shape_212.setTransform(-166.7,47.2);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IwQgogdg1ALQg3AKgfB7QAeqrgfq5IDOAAIApWDQgbh1gogdg");
	this.shape_213.setTransform(-166.7,47.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgbh1gogdQgogdg1ALQg3ALgfB6QAfqrggq5g");
	this.shape_214.setTransform(-166.6,48.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IwQgogdg2ALQg3ALgeB6QAeqrgeq5IDOAAIAnWDQgah1gogdg");
	this.shape_215.setTransform(-166.6,48.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgbh2gogcQgogdg1ALQg3AKgfB7QAgqrghq5g");
	this.shape_216.setTransform(-166.6,50.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IwQgogdg2ALQg2AKgfB7QAfqrgfq5IDOAAIAnWDQgah2gogcg");
	this.shape_217.setTransform(-166.6,50.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgdh2gngcQgogdg1ALQg3ALgeB6QAgqrghq5g");
	this.shape_218.setTransform(-166.6,52.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogdg0ALQg3ALgfB6QAgqrghq5IDOAAIApWDQgch2gogcg");
	this.shape_219.setTransform(-166.6,52.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgdh2gngcQgogdg1ALQg2AKgfB6QAhqqgiq5g");
	this.shape_220.setTransform(-166.6,54.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogdg0ALQg3AKgfB6QAhqqgiq5IDOAAIApWDQgch2gogcg");
	this.shape_221.setTransform(-166.6,54.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgdh2gngcQgngdg1ALQg3ALgfB5QAhqqghq5g");
	this.shape_222.setTransform(-166.5,55.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA4IwQgogdg1ALQg3ALgeB5QAiqqgiq5IDOAAIAnWDQgch2gngcg");
	this.shape_223.setTransform(-166.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_123},{t:this.shape_122}]},202).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_213},{t:this.shape_212}]},1).to({state:[{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_219},{t:this.shape_218}]},1).to({state:[{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_223},{t:this.shape_222}]},1).to({state:[]},1).wait(62));

	//  0
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KpIAA1qIDOAAIAoWDQgNh7gxgeQgxgdg5ALQg6AKgUCIg");
	this.shape_224.setTransform(-168.8,-81.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IpQgxgdg5ALQg7AKgTCIIAA1qIDOAAIAnWDQgMh7gxgeg");
	this.shape_225.setTransform(-168.8,-81.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgNh7gxgdQgxgdg5AKQg6AKgVCIg");
	this.shape_226.setTransform(-168.7,-79.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IqQgxgdg5AKQg6AKgVCIIAA1qIDOAAIApWDQgNh7gxgdg");
	this.shape_227.setTransform(-168.7,-79.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgNh6gwgeQgygdg4AKQg7AKgVCIg");
	this.shape_228.setTransform(-168.7,-77.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IqQgxgdg4AKQg7AKgVCIIAA1qIDOAAIApWDQgMh6gygeg");
	this.shape_229.setTransform(-168.7,-77.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgMh5gxgeQgygeg3AKQg6AKgWCIg");
	this.shape_230.setTransform(-168.7,-76.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IrQgygeg3AKQg6AKgVCIIAA1qIDOAAIAnWDQgMh5gxgeg");
	this.shape_231.setTransform(-168.7,-76.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgMh5gxgeQgxgeg4AKQg6AKgWCIg");
	this.shape_232.setTransform(-168.7,-74.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/IrQgygeg3AKQg7AKgVCIIAA1qIDOAAIAnWDQgMh5gwgeg");
	this.shape_233.setTransform(-168.7,-74.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgMh4gxgfQgygdg3AKQg6AJgXCIg");
	this.shape_234.setTransform(-168.6,-72.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IrQgxgdg3AKQg6AJgXCIIAA1qIDOAAIApWDQgMh4gygfg");
	this.shape_235.setTransform(-168.6,-72.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgMh4gxgeQgxgeg3AKQg6AKgYCHg");
	this.shape_236.setTransform(-168.6,-71);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/IsQgxgeg4AKQg5AKgYCHIAA1qIDOAAIApWDQgMh4gxgeg");
	this.shape_237.setTransform(-168.6,-71);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgMh3gxgfQgygeg3AKQg5AKgYCHg");
	this.shape_238.setTransform(-168.6,-69.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/IsQgygeg2AKQg6AKgXCHIAA1qIDNAAIAoWDQgLh3gxgfg");
	this.shape_239.setTransform(-168.6,-69.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgMh3gxgeQgxgfg3AKQg6AKgYCHg");
	this.shape_240.setTransform(-168.6,-67.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/ItQgxgfg3AKQg5AKgYCHIAA1qIDNAAIAoWDQgKh3gygeg");
	this.shape_241.setTransform(-168.6,-67.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgLh2gygfQgxgeg3AJQg5AKgYCHg");
	this.shape_242.setTransform(-168.5,-65.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/ItQgygeg2AJQg5AKgZCHIAA1qIDPAAIAnWDQgLh2gxgfg");
	this.shape_243.setTransform(-168.5,-65.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgLh1gxgfQgygfg2AKQg5AJgZCHg");
	this.shape_244.setTransform(-168.5,-64.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/IuQgxgfg2AKQg6AJgZCHIAA1qIDPAAIAnWDQgLh1gxgfg");
	this.shape_245.setTransform(-168.5,-64.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgLh1gxgfQgygfg2AKQg5AJgaCHg");
	this.shape_246.setTransform(-168.5,-62.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAIuQgzgfg2AKQg4AJgaCHIAA1qIDOAAIApWDQgLh1gxgfg");
	this.shape_247.setTransform(-168.5,-62.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgLh0gxggQgygfg2AKQg5AJgaCHg");
	this.shape_248.setTransform(-168.5,-60.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAIuQgygfg2AKQg5AJgaCHIAA1qIDOAAIApWDQgLh0gxggg");
	this.shape_249.setTransform(-168.5,-60.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgKh0gygfQgxgfg2AJQg4AJgbCHg");
	this.shape_250.setTransform(-168.4,-59.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA/IvQgxgfg2AJQg4AJgaCHIAA1qIDOAAIAnWDQgKh0gygfg");
	this.shape_251.setTransform(-168.4,-59.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgKhzgxggQgxgfg3AJQg4AKgbCGg");
	this.shape_252.setTransform(-168.4,-57.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAIvQgygfg1AJQg4AKgbCGIAA1qIDOAAIAnWDQgKhzgxggg");
	this.shape_253.setTransform(-168.4,-57.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhygyggQgxggg2AKQg4AJgcCGg");
	this.shape_254.setTransform(-168.4,-55.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAIwQgyggg1AKQg4AJgcCGIAA1qIDOAAIApWDQgLhygxggg");
	this.shape_255.setTransform(-168.4,-55.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhygxggQgyggg2AKQg3AJgdCGg");
	this.shape_256.setTransform(-168.4,-54);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABAIwQgxggg2AKQg4AJgcCGIAA1qIDOAAIApWDQgKhygyggg");
	this.shape_257.setTransform(-168.4,-54);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhxgxggQgyghg1AKQg4AJgdCGg");
	this.shape_258.setTransform(-168.4,-52.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBIxQgyghg1AKQg4AJgdCGIAA1qIDOAAIApWDQgKhxgxggg");
	this.shape_259.setTransform(-168.4,-52.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgKhxgxggQgyggg1AJQg4AJgdCGg");
	this.shape_260.setTransform(-168.3,-50.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBIxQgyggg1AJQg4AJgcCGIAA1qIDOAAIAnWDQgJhxgxggg");
	this.shape_261.setTransform(-168.3,-50.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhwgyghQgyggg1AJQg3AJgeCGg");
	this.shape_262.setTransform(-168.3,-48.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBIxQgxggg2AJQg3AJgdCGIAA1qIDOAAIAnWDQgIhwgyghg");
	this.shape_263.setTransform(-168.3,-48.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgJhwgyggQgyghg0AJQg3AJgeCGg");
	this.shape_264.setTransform(-168.3,-47.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBIyQgyghg0AJQg4AJgeCGIAA1qIDOAAIApWDQgKhwgxggg");
	this.shape_265.setTransform(-168.3,-47.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgJhvgxghQgyghg1AKQg3AJgeCFg");
	this.shape_266.setTransform(-168.3,-45.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBIyQgxghg1AKQg3AJgfCFIAA1qIDOAAIApWDQgKhvgxghg");
	this.shape_267.setTransform(-168.3,-45.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhugyghQgyghg0AJQg3AJgfCFg");
	this.shape_268.setTransform(-168.2,-43.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCIzQgzghg0AJQg2AJgfCFIAA1qIDOAAIAnWDQgIhugxghg");
	this.shape_269.setTransform(-168.2,-43.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhugyghQgxghg1AJQg2AJggCFg");
	this.shape_270.setTransform(-168.2,-42.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCIzQgyghg1AJQg2AJgfCFIAA1qIDOAAIAnWDQgIhugxghg");
	this.shape_271.setTransform(-168.2,-42.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgIhtgyghQgygig0AJQg2AJggCFg");
	this.shape_272.setTransform(-168.2,-40.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABBI0Qgxgig0AJQg2AJghCFIAA1qIDOAAIApWDQgJhtgyghg");
	this.shape_273.setTransform(-168.2,-40.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgIhtgxghQgygig0AJQg2AJghCFg");
	this.shape_274.setTransform(-168.2,-38.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI0Qgygig0AJQg2AJghCFIAA1qIDOAAIApWDQgJhtgxghg");
	this.shape_275.setTransform(-168.2,-38.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhsgxghQgygigzAJQg2AIgiCFg");
	this.shape_276.setTransform(-168.1,-37);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI1QgygigzAJQg3AIggCFIAA1qIDNAAIAoWDQgIhsgxghg");
	this.shape_277.setTransform(-168.1,-37);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhsgwghQgygig0AJQg2AIgiCFg");
	this.shape_278.setTransform(-168.1,-35.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI1QgygigzAJQg2AIghCFIAA1qIDNAAIAoWDQgHhsgyghg");
	this.shape_279.setTransform(-168.1,-35.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgJhrgxgiQgygigzAJQg2AIgiCFg");
	this.shape_280.setTransform(-168.1,-33.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI1QgygigzAJQg1AIgjCFIAA1qIDPAAIAnWDQgIhrgxgig");
	this.shape_281.setTransform(-168.1,-33.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgIhqgygiQgygjgyAJQg2AJgjCEg");
	this.shape_282.setTransform(-168.1,-31.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABDI2QgzgjgzAJQg1AJgjCEIAA1qIDPAAIAnWDQgHhqgxgig");
	this.shape_283.setTransform(-168.1,-31.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgIhqgxgiQgygigzAIQg1AJgjCEIAA1qg");
	this.shape_284.setTransform(-168,-30.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("ABCI2QgxgigzAIQg1AJgkCEIAA1qIDOAAIApWDQgIhqgygig");
	this.shape_285.setTransform(-168,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_225},{t:this.shape_224}]},172).to({state:[{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_231},{t:this.shape_230}]},1).to({state:[{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_235},{t:this.shape_234}]},1).to({state:[{t:this.shape_237},{t:this.shape_236}]},1).to({state:[{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_241},{t:this.shape_240}]},1).to({state:[{t:this.shape_243},{t:this.shape_242}]},1).to({state:[{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_247},{t:this.shape_246}]},1).to({state:[{t:this.shape_249},{t:this.shape_248}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_253},{t:this.shape_252}]},1).to({state:[{t:this.shape_255},{t:this.shape_254}]},1).to({state:[{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_259},{t:this.shape_258}]},1).to({state:[{t:this.shape_261},{t:this.shape_260}]},1).to({state:[{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_265},{t:this.shape_264}]},1).to({state:[{t:this.shape_267},{t:this.shape_266}]},1).to({state:[{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_271},{t:this.shape_270}]},1).to({state:[{t:this.shape_273},{t:this.shape_272}]},1).to({state:[{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_277},{t:this.shape_276}]},1).to({state:[{t:this.shape_279},{t:this.shape_278}]},1).to({state:[{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_283},{t:this.shape_282}]},1).to({state:[{t:this.shape_285},{t:this.shape_284}]},1).to({state:[]},1).wait(112));

	//  0
	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7KpIAA1qIDPAAIAoWDQgOh+gxgdQgxgcg5ALQg8AKgSCJg");
	this.shape_286.setTransform(-168.9,-89.7);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9InQgygcg5ALQg7AKgRCJIAA1qIDOAAIAnWDQgNh+gxgdg");
	this.shape_287.setTransform(-168.9,-89.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh+gxgcQgxgcg5AKQg7ALgTCIg");
	this.shape_288.setTransform(-168.9,-88.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IoQgygcg4AKQg8ALgRCIIAA1qIDOAAIAnWDQgNh+gxgcg");
	this.shape_289.setTransform(-168.9,-88.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh+gwgcQgygdg5ALQg7AKgTCJg");
	this.shape_290.setTransform(-168.9,-88.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IoQgxgdg5ALQg8AKgRCJIAA1qIDOAAIAnWDQgMh+gygcg");
	this.shape_291.setTransform(-168.9,-88.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh9gxgdQgygcg4AKQg7ALgTCIg");
	this.shape_292.setTransform(-168.8,-87.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IoQgxgcg5AKQg8ALgSCIIAA1qIDOAAIApWDQgOh9gxgdg");
	this.shape_293.setTransform(-168.8,-87.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh9gxgdQgygcg4AKQg7AKgTCJg");
	this.shape_294.setTransform(-168.8,-86.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IoQgxgcg5AKQg7AKgTCJIAA1qIDOAAIApWDQgOh9gxgdg");
	this.shape_295.setTransform(-168.8,-86.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh9gxgdQgxgcg4AKQg8ALgTCIg");
	this.shape_296.setTransform(-168.8,-85.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IoQgygcg4AKQg8ALgTCIIAA1qIDOAAIApWDQgOh9gwgdg");
	this.shape_297.setTransform(-168.8,-85.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOh9gxgdQgxgcg4AKQg8AKgTCJg");
	this.shape_298.setTransform(-168.8,-85);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IoQgygcg4AKQg7AKgUCJIAA1qIDOAAIApWDQgOh9gwgdg");
	this.shape_299.setTransform(-168.8,-85);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgNh8gxgdQgygdg4AKQg8ALgTCIg");
	this.shape_300.setTransform(-168.8,-84.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IpQgxgdg5AKQg7ALgUCIIAA1qIDOAAIApWDQgNh8gxgdg");
	this.shape_301.setTransform(-168.8,-84.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgNh8gxgdQgygdg4AKQg7AKgUCJg");
	this.shape_302.setTransform(-168.8,-83.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IpQgxgdg5AKQg7AKgUCJIAA1qIDOAAIApWDQgNh8gxgdg");
	this.shape_303.setTransform(-168.8,-83.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgNh8gxgdQgygdg4ALQg7AKgTCIg");
	this.shape_304.setTransform(-168.8,-82.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9IpQgxgdg4ALQg7AKgTCIIAA1qIDOAAIAnWDQgNh8gxgdg");
	this.shape_305.setTransform(-168.8,-82.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgNh8gxgdQgxgdg5AKQg7AKgTCJg");
	this.shape_306.setTransform(-168.8,-81.9);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IpQgygdg4AKQg7AKgTCJIAA1qIDOAAIAnWDQgMh8gxgdg");
	this.shape_307.setTransform(-168.8,-81.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KpIAA1qIDOAAIAoWDQgNh7gxgeQgxgdg5ALQg6AKgUCIg");
	this.shape_308.setTransform(-168.8,-81.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA+IpQgxgdg5ALQg7AKgTCIIAA1qIDOAAIAnWDQgMh7gxgeg");
	this.shape_309.setTransform(-168.8,-81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_287},{t:this.shape_286}]},161).to({state:[{t:this.shape_289},{t:this.shape_288}]},1).to({state:[{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_295},{t:this.shape_294}]},1).to({state:[{t:this.shape_297},{t:this.shape_296}]},1).to({state:[{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_301},{t:this.shape_300}]},1).to({state:[{t:this.shape_303},{t:this.shape_302}]},1).to({state:[{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_307},{t:this.shape_306}]},1).to({state:[{t:this.shape_309},{t:this.shape_308}]},1).to({state:[]},1).wait(142));

	//  0
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KpIAA1qIDOAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMg");
	this.shape_310.setTransform(-169.5,-132.2);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgGCMIAA1qIDOAAIApWDQgRiNgxgYg");
	this.shape_311.setTransform(-169.5,-132.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgQiLgxgZQgygYg8AMQhAAMgHCLg");
	this.shape_312.setTransform(-169.4,-126.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IeQgxgYg9AMQg/AMgICLIAA1qIDPAAIAnWDQgQiLgxgZg");
	this.shape_313.setTransform(-169.4,-126.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgQiKgxgZQgxgZg9AMQg/AMgJCLg");
	this.shape_314.setTransform(-169.4,-121.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IfQgwgZg9AMQg/AMgJCLIAA1qIDOAAIApWDQgRiKgxgZg");
	this.shape_315.setTransform(-169.4,-121.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgQiIgxgZQgxgag8AMQg+ALgKCLg");
	this.shape_316.setTransform(-169.3,-116.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7IhQgygag7AMQg+ALgLCLIAA1qIDOAAIApWDQgQiIgxgZg");
	this.shape_317.setTransform(-169.3,-116.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgPiGgxgaQgxgag8AMQg9ALgMCKg");
	this.shape_318.setTransform(-169.2,-110.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA7IiQgxgag8AMQg9ALgMCKIAA1qIDOAAIApWDQgQiGgxgag");
	this.shape_319.setTransform(-169.2,-110.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgPiEgxgbQgygag6ALQg9ALgOCKg");
	this.shape_320.setTransform(-169.1,-105.6);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IjQgygag6ALQg9ALgNCKIAA1qIDOAAIAnWDQgOiEgxgbg");
	this.shape_321.setTransform(-169.1,-105.6);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgPiCgxgcQgxgbg6ALQg9ALgOCKg");
	this.shape_322.setTransform(-169,-100.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA8IkQgxgbg7ALQg8ALgOCKIAA1qIDNAAIAoWDQgOiCgxgcg");
	this.shape_323.setTransform(-169,-100.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgOiAgxgcQgygcg5ALQg9ALgQCJg");
	this.shape_324.setTransform(-169,-95);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9ImQgxgcg6ALQg8ALgRCJIAA1qIDPAAIAnWDQgNiAgxgcg");
	this.shape_325.setTransform(-169,-95);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7KpIAA1qIDPAAIAoWDQgOh+gxgdQgxgcg5ALQg8AKgSCJg");
	this.shape_326.setTransform(-168.9,-89.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA9InQgygcg5ALQg7AKgRCJIAA1qIDOAAIAnWDQgNh+gxgdg");
	this.shape_327.setTransform(-168.9,-89.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_311},{t:this.shape_310}]},153).to({state:[{t:this.shape_313},{t:this.shape_312}]},1).to({state:[{t:this.shape_315},{t:this.shape_314}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[]},1).wait(153));

	//  0
	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7KpIAA1qIDPAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgGCMg");
	this.shape_328.setTransform(-170.4,-192.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgxgYg9AMQhAAMgFCMIAA1qIDNAAIAoWDQgQiNgygYg");
	this.shape_329.setTransform(-170.4,-192.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgGCMg");
	this.shape_330.setTransform(-170.4,-190.4);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgSiNgxgYQgwgYg+AMQhAAMgGCMg");
	this.shape_331.setTransform(-170.3,-188.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgGCMIAA1qIDPAAIAnWDQgRiNgwgYg");
	this.shape_332.setTransform(-170.3,-188.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMg");
	this.shape_333.setTransform(-170.3,-185.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgwgYg+AMQhAAMgGCMIAA1qIDOAAIApWDQgSiNgxgYg");
	this.shape_334.setTransform(-170.3,-185.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgSiNgwgYQgxgYg+AMQhAAMgGCMg");
	this.shape_335.setTransform(-170.2,-181.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgFCMIAA1qIDOAAIAnWDQgRiNgwgYg");
	this.shape_336.setTransform(-170.2,-181.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgRiNgxgYQgxgYg9AMQhAAMgGCMg");
	this.shape_337.setTransform(-170.2,-178.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgxgYg+AMQhAAMgFCMIAA1qIDOAAIAnWDQgQiNgxgYg");
	this.shape_338.setTransform(-170.1,-175);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgwgYg+AMQhAAMgGCMIAA1qIDOAAIApWDQgRiNgygYg");
	this.shape_339.setTransform(-170.1,-171.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgxgYg9AMQhAAMgFCMIAA1qIDOAAIAnWDQgQiNgygYg");
	this.shape_340.setTransform(-170,-168.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgGCMIAA1qIDOAAIApWDQgSiNgwgYg");
	this.shape_341.setTransform(-170,-164.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgGCMIAA1qIDOAAIApWDQgRiNgxgYg");
	this.shape_342.setTransform(-169.5,-133.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6KpIAA1qIDOAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMg");
	this.shape_343.setTransform(-169.5,-132.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_329,p:{y:-192.1,x:-170.4}},{t:this.shape_328}]},118).to({state:[{t:this.shape_329,p:{y:-190.4,x:-170.4}},{t:this.shape_330,p:{x:-170.4,y:-190.4}}]},1).to({state:[{t:this.shape_332,p:{y:-188.7,x:-170.3}},{t:this.shape_331,p:{y:-188.7,x:-170.3}}]},1).to({state:[{t:this.shape_332,p:{y:-187,x:-170.3}},{t:this.shape_331,p:{y:-187,x:-170.3}}]},1).to({state:[{t:this.shape_334,p:{y:-185.3,x:-170.3}},{t:this.shape_333,p:{y:-185.3,x:-170.3}}]},1).to({state:[{t:this.shape_334,p:{y:-183.6,x:-170.3}},{t:this.shape_333,p:{y:-183.6,x:-170.3}}]},1).to({state:[{t:this.shape_336,p:{y:-181.8,x:-170.2}},{t:this.shape_335,p:{y:-181.8,x:-170.2}}]},1).to({state:[{t:this.shape_336,p:{y:-180.1,x:-170.2}},{t:this.shape_335,p:{y:-180.1,x:-170.2}}]},1).to({state:[{t:this.shape_334,p:{y:-178.4,x:-170.2}},{t:this.shape_337,p:{y:-178.4,x:-170.2}}]},1).to({state:[{t:this.shape_334,p:{y:-176.7,x:-170.2}},{t:this.shape_337,p:{y:-176.7,x:-170.2}}]},1).to({state:[{t:this.shape_338,p:{y:-175,x:-170.1}},{t:this.shape_330,p:{x:-170.1,y:-175}}]},1).to({state:[{t:this.shape_338,p:{y:-173.3,x:-170.1}},{t:this.shape_330,p:{x:-170.1,y:-173.3}}]},1).to({state:[{t:this.shape_339,p:{y:-171.6,x:-170.1}},{t:this.shape_331,p:{y:-171.6,x:-170.1}}]},1).to({state:[{t:this.shape_339,p:{y:-169.9,x:-170.1}},{t:this.shape_331,p:{y:-169.9,x:-170.1}}]},1).to({state:[{t:this.shape_340,p:{y:-168.1,x:-170}},{t:this.shape_333,p:{y:-168.1,x:-170}}]},1).to({state:[{t:this.shape_340,p:{y:-166.4,x:-170}},{t:this.shape_333,p:{y:-166.4,x:-170}}]},1).to({state:[{t:this.shape_341,p:{y:-164.7}},{t:this.shape_335,p:{y:-164.7,x:-170}}]},1).to({state:[{t:this.shape_341,p:{y:-163}},{t:this.shape_335,p:{y:-163,x:-170}}]},1).to({state:[{t:this.shape_329,p:{y:-161.3,x:-169.9}},{t:this.shape_337,p:{y:-161.3,x:-169.9}}]},1).to({state:[{t:this.shape_329,p:{y:-159.6,x:-169.9}},{t:this.shape_337,p:{y:-159.6,x:-169.9}}]},1).to({state:[{t:this.shape_332,p:{y:-157.9,x:-169.9}},{t:this.shape_330,p:{x:-169.9,y:-157.9}}]},1).to({state:[{t:this.shape_332,p:{y:-156.2,x:-169.9}},{t:this.shape_330,p:{x:-169.9,y:-156.2}}]},1).to({state:[{t:this.shape_334,p:{y:-154.4,x:-169.8}},{t:this.shape_331,p:{y:-154.4,x:-169.8}}]},1).to({state:[{t:this.shape_334,p:{y:-152.7,x:-169.8}},{t:this.shape_331,p:{y:-152.7,x:-169.8}}]},1).to({state:[{t:this.shape_336,p:{y:-151,x:-169.8}},{t:this.shape_333,p:{y:-151,x:-169.8}}]},1).to({state:[{t:this.shape_336,p:{y:-149.3,x:-169.8}},{t:this.shape_333,p:{y:-149.3,x:-169.8}}]},1).to({state:[{t:this.shape_334,p:{y:-147.6,x:-169.7}},{t:this.shape_335,p:{y:-147.6,x:-169.7}}]},1).to({state:[{t:this.shape_334,p:{y:-145.9,x:-169.7}},{t:this.shape_335,p:{y:-145.9,x:-169.7}}]},1).to({state:[{t:this.shape_338,p:{y:-144.2,x:-169.7}},{t:this.shape_337,p:{y:-144.2,x:-169.7}}]},1).to({state:[{t:this.shape_338,p:{y:-142.5,x:-169.7}},{t:this.shape_337,p:{y:-142.5,x:-169.7}}]},1).to({state:[{t:this.shape_339,p:{y:-140.7,x:-169.6}},{t:this.shape_330,p:{x:-169.6,y:-140.7}}]},1).to({state:[{t:this.shape_339,p:{y:-139,x:-169.6}},{t:this.shape_330,p:{x:-169.6,y:-139}}]},1).to({state:[{t:this.shape_340,p:{y:-137.3,x:-169.6}},{t:this.shape_331,p:{y:-137.3,x:-169.6}}]},1).to({state:[{t:this.shape_340,p:{y:-135.6,x:-169.6}},{t:this.shape_331,p:{y:-135.6,x:-169.6}}]},1).to({state:[{t:this.shape_342,p:{y:-133.9}},{t:this.shape_333,p:{y:-133.9,x:-169.5}}]},1).to({state:[{t:this.shape_342,p:{y:-132.2}},{t:this.shape_343}]},1).to({state:[]},1).wait(161));

	//  0
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMIAA1qg");
	this.shape_344.setTransform(-170.5,-200.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgwgYg+AMQhAAMgGCMIAA1qIDOAAIApWDQgRiNgygYg");
	this.shape_345.setTransform(-170.5,-200.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6rBIDOAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMg");
	this.shape_346.setTransform(-170.5,-200.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgSiNgwgYQgxgYg+AMQhAAMgGCMg");
	this.shape_347.setTransform(-170.5,-199.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgxgYg9AMQhAAMgFCMIAA1qIDOAAIAnWDQgQiNgygYg");
	this.shape_348.setTransform(-170.5,-199.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDOAAIAoWDQgRiNgxgYQgxgYg9AMQhAAMgGCMg");
	this.shape_349.setTransform(-170.4,-196.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA6IdQgygYg9AMQhAAMgGCMIAA1qIDOAAIApWDQgSiNgwgYg");
	this.shape_350.setTransform(-170.4,-196.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7rBIDPAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgGCMg");
	this.shape_351.setTransform(-170.4,-193.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgxgYg9AMQhAAMgFCMIAA1qIDNAAIAoWDQgQiNgygYg");
	this.shape_352.setTransform(-170.4,-193.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah7KpIAA1qIDPAAIAoWDQgRiNgxgYQgxgYg+AMQhAAMgGCMg");
	this.shape_353.setTransform(-170.4,-192.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_345,p:{y:-200.7}},{t:this.shape_344}]},101).to({state:[{t:this.shape_345,p:{y:-200.2}},{t:this.shape_346,p:{y:-200.2}}]},1).to({state:[{t:this.shape_345,p:{y:-199.7}},{t:this.shape_346,p:{y:-199.7}}]},1).to({state:[{t:this.shape_348,p:{y:-199.2}},{t:this.shape_347,p:{y:-199.2}}]},1).to({state:[{t:this.shape_348,p:{y:-198.7}},{t:this.shape_347,p:{y:-198.7}}]},1).to({state:[{t:this.shape_348,p:{y:-198.2}},{t:this.shape_347,p:{y:-198.2}}]},1).to({state:[{t:this.shape_348,p:{y:-197.7}},{t:this.shape_347,p:{y:-197.7}}]},1).to({state:[{t:this.shape_348,p:{y:-197.2}},{t:this.shape_347,p:{y:-197.2}}]},1).to({state:[{t:this.shape_348,p:{y:-196.7}},{t:this.shape_347,p:{y:-196.7}}]},1).to({state:[{t:this.shape_350,p:{y:-196.1}},{t:this.shape_349,p:{y:-196.1}}]},1).to({state:[{t:this.shape_350,p:{y:-195.6}},{t:this.shape_349,p:{y:-195.6}}]},1).to({state:[{t:this.shape_350,p:{y:-195.1}},{t:this.shape_349,p:{y:-195.1}}]},1).to({state:[{t:this.shape_350,p:{y:-194.6}},{t:this.shape_349,p:{y:-194.6}}]},1).to({state:[{t:this.shape_350,p:{y:-194.1}},{t:this.shape_349,p:{y:-194.1}}]},1).to({state:[{t:this.shape_350,p:{y:-193.6}},{t:this.shape_349,p:{y:-193.6}}]},1).to({state:[{t:this.shape_352,p:{y:-193.1}},{t:this.shape_351,p:{y:-193.1}}]},1).to({state:[{t:this.shape_352,p:{y:-192.6}},{t:this.shape_351,p:{y:-192.6}}]},1).to({state:[{t:this.shape_352,p:{y:-192.1}},{t:this.shape_353}]},1).to({state:[]},1).wait(196));

	//  0
	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABolrIAALXQgHg4gggVQgggVg0AAQg2AAgdBiIAArXg");
	this.shape_354.setTransform(-172.5,-233.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-36.4,0,36.4).s().p("ABBEfQghgVgzAAQg2AAgeBiIAArXIDOAAIAALXQgGg4gggVg");
	this.shape_355.setTransform(-172.5,-233.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnl1IDOAAIABLrQgGg7ghgUQghgWg0ABQg2ABgdBig");
	this.shape_356.setTransform(-172.5,-232.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-37.4,0,37.5).s().p("ABBEmQghgVg0ABQg2AAgdBjIAArqIDOAAIABLrQgGg7ghgVg");
	this.shape_357.setTransform(-172.5,-232.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahol/IDOAAIADL/QgIg9ghgVQghgVg0ABQg3AAgcBkg");
	this.shape_358.setTransform(-172.4,-232);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-38.4,0,38.5).s().p("ABAEuQghgVg0ABQg3AAgcBkIAAr9IDOAAIADL/QgIg9ghgVg");
	this.shape_359.setTransform(-172.4,-232);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhomJIDOAAIADMTQgHhAgigUQgigWg0ACQg3AAgbBmg");
	this.shape_360.setTransform(-172.4,-231);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-39.4,0,39.5).s().p("ABAE2QgigWg0ACQg3ABgbBlIAAsRIDOAAIADMTQgHhAgigUg");
	this.shape_361.setTransform(-172.4,-231);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpmTIDOAAIAFMnQgIhCgigWQgigVg1ACQg3ACgbBmg");
	this.shape_362.setTransform(-172.3,-230);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-40.5,0,40.4).s().p("ABAE9QgigWg1ACQg3ABgbBnIAAskIDOAAIAFMnQgIhCgigVg");
	this.shape_363.setTransform(-172.3,-230);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhpmdIDNAAIAGM7QgHhFgjgVQgjgVg1ACQg3ACgaBng");
	this.shape_364.setTransform(-172.2,-229);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-41.4,0,41.5).s().p("ABAFEQgjgVg1ACQg3ACgbBnIAAs3IDOAAIAGM7QgIhFgigVg");
	this.shape_365.setTransform(-172.2,-229);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhqmnIDOAAIAHNPQgJhHgjgVQgjgWg1ADQg4ACgZBpg");
	this.shape_366.setTransform(-172.2,-228.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-42.4,0,42.5).s().p("ABAFMQgkgWg1ADQg4ACgZBpIAAtLIDOAAIAHNPQgJhHgigVg");
	this.shape_367.setTransform(-172.2,-228.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhrmxIDOAAIAINjQgIhJgkgWQgkgWg1ADQg4ADgZBqg");
	this.shape_368.setTransform(-172.1,-227.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-43.4,0,43.5).s().p("AA/FTQgjgWg2ADQg4ADgZBqIAAteIDOAAIAINjQgIhJgkgWg");
	this.shape_369.setTransform(-172.1,-227.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahrm8IDOAAIAJN5QgJhNgkgVQgkgWg2ADQg4ADgYBsg");
	this.shape_370.setTransform(-172.1,-226.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-44.5,0,44.5).s().p("AA/FaQgkgVg2ADQg4ADgYBsIAAtzIDOAAIAJN4QgJhMgkgWg");
	this.shape_371.setTransform(-172.1,-226.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhsnFIDOAAIALOLQgJhOglgWQglgWg2AEQg5ADgXBtg");
	this.shape_372.setTransform(-172,-225.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-45.4,0,45.5).s().p("AA/FiQglgWg2AEQg5ADgXBtIAAuFIDOAAIALOLQgJhOglgWg");
	this.shape_373.setTransform(-172,-225.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtnQIDOAAIANOgQgKhRgmgWQglgWg2AEQg5AEgXBug");
	this.shape_374.setTransform(-171.9,-224.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-46.5,0,46.5).s().p("AA+FqQgkgXg3AFQg5ADgXBuIAAuYIDOAAIANOfQgLhRglgVg");
	this.shape_375.setTransform(-171.9,-224.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtnaIDOAAIANO0QgKhUgmgVQgmgWg2AEQg6AEgVBvg");
	this.shape_376.setTransform(-171.9,-223.1);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-47.5,0,47.5).s().p("AA+FxQgmgWg2AEQg5AEgWBvIAAurIDOAAIANOzQgKhTgmgWg");
	this.shape_377.setTransform(-171.9,-223.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhtnkIDNAAIAOPJQgKhXgmgWQgmgVg3AEQg6AEgUBxg");
	this.shape_378.setTransform(-171.8,-222.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-48.5,0,48.5).s().p("AA/F4QgngWg3AFQg5AEgWBxIAAvAIDOAAIAPPIQgLhVglgXg");
	this.shape_379.setTransform(-171.8,-222.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhunuIDOAAIAPPdQgKhZgngWQgngWg3AFQg6AFgUBxg");
	this.shape_380.setTransform(-171.8,-221.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-49.5,0,49.5).s().p("AA+GAQgngWg3AFQg6AFgUBxIAAvTIDOAAIAPPdQgKhZgngWg");
	this.shape_381.setTransform(-171.8,-221.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahvn4IDOAAIARPxQgLhcgngWQgngWg4AFQg6AFgUBzg");
	this.shape_382.setTransform(-171.7,-220.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-50.5,0,50.5).s().p("AA+GHQgngWg4AFQg6AFgUBzIAAvmIDOAAIARPxQgLhcgngWg");
	this.shape_383.setTransform(-171.7,-220.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhvoCIDOAAIARQFQgLhegngWQgogXg4AGQg6AGgTB0g");
	this.shape_384.setTransform(-171.7,-219.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-51.5,0,51.5).s().p("AA+GPQgogXg4AGQg6AFgTB1IAAv6IDOAAIARQFQgLhegngWg");
	this.shape_385.setTransform(-171.7,-219.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwoMIDOAAIATQZQgMhggogXQgogWg4AGQg7AGgSB1g");
	this.shape_386.setTransform(-171.6,-218.3);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-52.5,0,52.6).s().p("AA9GWQgogWg4AGQg7AGgSB1IAAwNIDOAAIATQZQgLhggpgXg");
	this.shape_387.setTransform(-171.6,-218.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhwoWIDOAAIAUQtQgMhigogXQgpgWg5AGQg7AGgRB3g");
	this.shape_388.setTransform(-171.5,-217.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-53.5,0,53.6).s().p("AA+GeQgpgXg5AHQg7AGgSB3IAAwhIDOAAIAVQtQgMhjgogWg");
	this.shape_389.setTransform(-171.5,-217.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhxogIDOAAIAVRBQgMhlgpgXQgpgWg5AHQg7AGgRB4g");
	this.shape_390.setTransform(-171.5,-216.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-54.5,0,54.6).s().p("AA9GlQgpgWg5AHQg7AGgRB4IAAw0IDOAAIAVRBQgMhlgpgXg");
	this.shape_391.setTransform(-171.5,-216.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhyoqIDOAAIAXRVQgNhogpgWQgqgXg5AIQg8AGgQB5g");
	this.shape_392.setTransform(-171.4,-215.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-55.5,0,55.6).s().p("AA9GtQgqgXg5AHQg8AHgQB5IAAxHIDOAAIAXRVQgNhngpgXg");
	this.shape_393.setTransform(-171.4,-215.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahyo0IDOAAIAXRpQgMhqgqgXQgrgXg5AIQg8AHgPB7g");
	this.shape_394.setTransform(-171.4,-214.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-56.5,0,56.6).s().p("AA9G0QgrgXg5AIQg8AHgPB7IAAxbIDOAAIAXRpQgMhqgqgXg");
	this.shape_395.setTransform(-171.4,-214.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahzo+IDOAAIAZR9QgNhtgrgXQgqgWg6AIQg8AHgPB8g");
	this.shape_396.setTransform(-171.3,-213.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-57.5,0,57.6).s().p("AA8G7QgqgWg6AIQg8AHgPB8IAAxuIDOAAIAZR9QgNhtgrgXg");
	this.shape_397.setTransform(-171.3,-213.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhzpJIDNAAIAaSTQgNhwgrgXQgrgXg6AJQg9AHgNB9g");
	this.shape_398.setTransform(-171.2,-212.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-58.6,0,58.6).s().p("AA8HDQgrgXg6AJQg8AHgPB9IAAyBIDOAAIAaSRQgNhvgrgXg");
	this.shape_399.setTransform(-171.2,-212.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah0pTIDOAAIAbSnQgOhygrgYQgsgXg6AKQg9AHgNB+g");
	this.shape_400.setTransform(-171.2,-211.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-59.6,0,59.6).s().p("AA8HLQgrgYg7AJQg8AJgOB+IAAyWIDOAAIAbSnQgOhygrgXg");
	this.shape_401.setTransform(-171.2,-211.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1pdIDOAAIAcS7QgNh1gsgXQgtgXg6AJQg9AIgNCAg");
	this.shape_402.setTransform(-171.1,-210.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-60.6,0,60.6).s().p("AA8HSQgtgXg6AJQg9AIgNCAIAAypIDOAAIAcS6QgNh0gsgXg");
	this.shape_403.setTransform(-171.1,-210.4);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah1pnIDOAAIAdTPQgOh3gtgYQgsgXg7AKQg9AIgMCBg");
	this.shape_404.setTransform(-171.1,-209.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-61.6,0,61.6).s().p("AA7HZQgsgXg7AKQg9AIgMCBIAAy8IDOAAIAdTPQgOh3gtgYg");
	this.shape_405.setTransform(-171.1,-209.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah2pxIDOAAIAfTjQgPh5gtgYQgtgXg7AKQg+AIgLCCg");
	this.shape_406.setTransform(-171,-208.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-62.6,0,62.6).s().p("AA7HhQgtgXg7AJQg+AJgLCDIAAzPIDOAAIAfTiQgPh5gtgYg");
	this.shape_407.setTransform(-171,-208.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3p7IDOAAIAhT3QgPh8gugYQgugXg7AKQg+AKgLCDg");
	this.shape_408.setTransform(-170.9,-207.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-63.6,0,63.6).s().p("AA7HoQgugXg7AKQg+AKgLCDIAAzjIDOAAIAhT3QgPh8gugYg");
	this.shape_409.setTransform(-170.9,-207.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3qFIDOAAIAhULQgPh/gugXQgvgYg7ALQg/AKgJCEg");
	this.shape_410.setTransform(-170.9,-206.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-64.6,0,64.6).s().p("AA7HwQgugYg8ALQg+AKgKCEIAAz2IDOAAIAhULQgPh/gugXg");
	this.shape_411.setTransform(-170.9,-206.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah3qPIDNAAIAiUfQgPiBgugYQgvgXg8ALQg/AKgICGg");
	this.shape_412.setTransform(-170.8,-205.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-65.6,0,65.7).s().p("AA6H3QgugXg8ALQg+AKgKCGIAA0KIDOAAIAiUfQgPiBgvgYg");
	this.shape_413.setTransform(-170.8,-205.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah4qZIDOAAIAjUzQgQiDgvgYQgvgYg8AMQg/AKgICHg");
	this.shape_414.setTransform(-170.8,-204.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-66.6,0,66.7).s().p("AA6H/QgvgYg8ALQg/ALgICHIAA0dIDOAAIAjUzQgQiEgvgXg");
	this.shape_415.setTransform(-170.8,-204.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5qjIDOAAIAlVHQgQiGgwgYQgvgXg9ALQg/ALgICIg");
	this.shape_416.setTransform(-170.7,-203.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-67.7,0,67.6).s().p("AA6IGQgvgYg9AMQg/ALgICIIAA0wIDOAAIAlVHQgQiGgwgYg");
	this.shape_417.setTransform(-170.7,-203.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah5qtIDOAAIAlVbQgQiIgwgYQgwgYg9AMQg/ALgHCKg");
	this.shape_418.setTransform(-170.7,-202.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-68.6,0,68.7).s().p("AA6IOQgwgYg9AMQg/ALgHCKIAA1EIDOAAIAlVbQgQiIgwgYg");
	this.shape_419.setTransform(-170.7,-202.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ah6q3IDOAAIAnVvQgRiLgxgYQgwgXg9AMQhAALgGCLg");
	this.shape_420.setTransform(-170.6,-201.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-69.7,0,69.6).s().p("AA6IVQgxgXg9ALQhAAMgGCLIAA1XIDOAAIAnVvQgRiLgwgYg");
	this.shape_421.setTransform(-170.6,-201.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABUrBIAoWDQgRiNgxgYQgxgYg+AMQhAAMgFCMIAA1qg");
	this.shape_422.setTransform(-170.5,-200.7);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-70.6,0,70.7).s().p("AA5IdQgwgYg+AMQhAAMgGCMIAA1qIDOAAIApWDQgRiNgygYg");
	this.shape_423.setTransform(-170.5,-200.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_355},{t:this.shape_354}]},67).to({state:[{t:this.shape_357},{t:this.shape_356}]},1).to({state:[{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_361},{t:this.shape_360}]},1).to({state:[{t:this.shape_363},{t:this.shape_362}]},1).to({state:[{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_367},{t:this.shape_366}]},1).to({state:[{t:this.shape_369},{t:this.shape_368}]},1).to({state:[{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_373},{t:this.shape_372}]},1).to({state:[{t:this.shape_375},{t:this.shape_374}]},1).to({state:[{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_379},{t:this.shape_378}]},1).to({state:[{t:this.shape_381},{t:this.shape_380}]},1).to({state:[{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_387},{t:this.shape_386}]},1).to({state:[{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_391},{t:this.shape_390}]},1).to({state:[{t:this.shape_393},{t:this.shape_392}]},1).to({state:[{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_397},{t:this.shape_396}]},1).to({state:[{t:this.shape_399},{t:this.shape_398}]},1).to({state:[{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_403},{t:this.shape_402}]},1).to({state:[{t:this.shape_405},{t:this.shape_404}]},1).to({state:[{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_409},{t:this.shape_408}]},1).to({state:[{t:this.shape_411},{t:this.shape_410}]},1).to({state:[{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_415},{t:this.shape_414}]},1).to({state:[{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_421},{t:this.shape_420}]},1).to({state:[{t:this.shape_423},{t:this.shape_422}]},1).to({state:[]},1).wait(213));

	//  0
	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABnhqIAAF4IgCACQgHgYgOgOIgCgBQgJgJgNgGQgPgIgSgDIgEgBIgeABQgcAEgUAiIgCADIgKgBIggh5IAAmNICfAAIAJAIg");
	this.shape_424.setTransform(-172.7,-242.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-27.3,0,28.2).s().p("ABPDpIAAgBQgKgIgNgGQgOgJgTgCIgEgBIgdABQgdAEgUAiIgCACIgKAAIgfh5IAAmNICeAAIAJAIIAnCdIAAF4IgDACQgHgZgPgOg");
	this.shape_425.setTransform(-172.7,-242.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkhICmAAIAMANIAdCsIAAGCIgCAIQgJgVgNgNQgEgEgBgBQgLgIgMgGQgUgHgSgDQgBAAgCAAQgCgBgCAAQgNABgOAEQgCABgCAAQgbAKgTAlIgBABIgIgEIgYiEg");
	this.shape_426.setTransform(-172.6,-240.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-29.1,0,30.7).s().p("ABQEAIgFgFQgLgIgNgGQgTgHgSgDIgDAAIgFgBQgMABgOAEIgEABQgbAKgTAlIgBABIgIgEIgYiEIAAmxICmAAIALANIAdCsIAAGCIgBAIQgJgVgNgNg");
	this.shape_427.setTransform(-172.6,-240.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnk3ICzAAIAIARIAUC9IAAGhIgDgDQgKgZgPgOQgEgEgCgBQgNgJgOgFQgWgFgTgDQgCAAAAAAQgCAAgCAAQgPABgPAIQgCABgCABQgZAOgSAqIgBAAIgFgHIgQiRg");
	this.shape_428.setTransform(-172.6,-238.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-31.3,0,32.9).s().p("ABlE0QgKgYgOgOIgHgFQgMgJgPgFQgWgGgSgCIgDgBIgDAAQgRACgOAIIgEACQgZAOgSAqIgBAAIgFgHIgPiRIAAnVICyAAIAIARIAUC8IAAGig");
	this.shape_429.setTransform(-172.6,-238.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnlRIDBAAIAEAWIAKDLIAAHCIgEgPQgKgegRgNQgFgEgCgBQgPgJgQgFQgYgEgSgDQgCAAgCAAQgCAAgDAAQgRADgOALQgCACgCABQgYAUgRAuIgCgNIgJidg");
	this.shape_430.setTransform(-172.6,-236.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-33.9,0,34.6).s().p("ABkFDQgKgegRgNIgGgFQgQgJgRgFIgpgHIgEAAIgFAAQgRADgOALIgEADQgYAUgQAuIgDgNIgIidIAAn4IDAAAIAEAWIAKDLIAAHCg");
	this.shape_431.setTransform(-172.6,-236.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmlrIDOAAIAALXIgFgaQgJghgVgPIgEgDQgRgLgWgFIgtgFIgEAAQgVACgRARQgYAYgRA3g");
	this.shape_432.setTransform(-172.5,-233.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-36.4,0,36.4).s().p("ABjFSQgJghgVgPIgEgDQgRgLgWgFIgtgFIgEAAQgVACgRARQgYAYgSA3IAArXIDOAAIAALXg");
	this.shape_433.setTransform(-172.5,-233.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_425},{t:this.shape_424}]},63).to({state:[{t:this.shape_427},{t:this.shape_426}]},1).to({state:[{t:this.shape_429},{t:this.shape_428}]},1).to({state:[{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_433},{t:this.shape_432}]},1).to({state:[]},1).wait(247));

	//  0
	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohnIAAFMQgGgTgKgNQgHgLgKgHIgDgCQgNgIgQgFIgegHQgcgEgWAaIgNARQgWg2gUgdIgGgJIAAlMICSAAIAAABg");
	this.shape_434.setTransform(-172.8,-246.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-23,0,22.9).s().p("ABYDEQgHgKgKgHIgDgCQgNgJgQgEIgfgHQgbgEgWAaIgMARQgYg2gTgeIgHgJIAAlLICTAAIAAABIA8B8IAAFMQgHgUgJgNg");
	this.shape_435.setTransform(-172.8,-246.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmjnICLAAIBDCAIAAFPQgBgCAAAAQAAgBAAAAQgGgTgJgLQgBgCgCgCQgGgHgJgGIAAgBIgBgBQgBAAgBgBQgMgIgPgEQgBAAgBgBQgKgCgKgCIgFgBQgDgBgDAAQgYgDgWAWQgBACgCACIgCACIgLANQgVgzgSgfQgBgBgBgCIgGgJg");
	this.shape_436.setTransform(-172.8,-246.4);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-23.2,0,23.2).s().p("ABmDmIAAgBQgFgTgJgLIgEgEQgFgIgJgGIAAAAIgBgBIgCgBQgNgIgOgEIgCgBIgVgFIgFAAIgFgBQgZgDgUAWIgFAEIgBACIgLAMQgVgzgTgeIgCgDIgGgJIAAlPICMAAIBDCAIAAFOIgCgBg");
	this.shape_437.setTransform(-172.8,-246.4);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmjpICMAAIBCCBIAAFSQgBgBAAgBQAAAAAAgBQgGgSgJgMQgCgBgBgCQgHgIgIgGIgBAAIgBgBQgBgBgBAAQgMgIgPgEQgBgBgBAAQgKgDgLgBIgFgBQgCgBgDAAQgZgCgUAXQgDABgCACIgBACIgLALQgUgzgTggQgBgCAAgBIgGgJg");
	this.shape_438.setTransform(-172.8,-246.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-23.4,0,23.6).s().p("ABmDoIAAgBQgFgRgJgMIgEgEQgGgIgIgGIgBAAIgBgBIgCgBQgNgIgPgFIgCAAIgUgEIgFgBIgFAAQgZgDgVAXIgEADIgBACIgLALQgUgzgTggIgCgDIgGgKIAAlRICNAAIBCCCIAAFRIgCgCg");
	this.shape_439.setTransform(-172.8,-246.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmjrICOAAIBACCIAAFVQgBgBAAAAQAAAAAAgBQgGgTgJgLQgCgCgCgCQgGgIgJgGIgBgBQgBAAgBgBQgNgIgPgEQgBgBgBAAQgLgCgKgCIgFAAQgDgBgDAAQgYgBgVAXQgDACgBABIgCABIgKAJQgUgzgSghQgBgBgBgBIgFgKg");
	this.shape_440.setTransform(-172.8,-245.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-23.7,0,23.9).s().p("ABmDrIAAgBQgFgTgJgLIgEgDQgHgJgIgGIgBgBIgDgBQgNgIgPgEIgCgBIgUgDIgGgBIgFgBQgZgCgUAYIgEADIgCACIgLAJQgTgzgTgiIgBgDIgGgJIAAlUICOAAIBBCCIAAFWIgCgCg");
	this.shape_441.setTransform(-172.8,-245.9);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmjuICPAAIA/CFIAAFYQgBgBAAAAQAAgBAAAAQgGgTgJgLQgCgCgCgCQgHgIgIgGQgBAAAAgBIgBAAQgBgBgBAAQgNgIgQgEQgBgBgBAAQgKgCgLgCIgFAAQgCAAgDgBQgZgBgUAYQgDACgCABIgMAIQgTgygSgjQAAgBgBgCIgFgKg");
	this.shape_442.setTransform(-172.8,-245.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-24,0,24.2).s().p("ABmDuIAAgBQgFgTgJgLIgEgEQgHgIgIgGIgBgBIgCAAIgCgBQgNgIgPgEIgCgBIgVgEIgFAAIgGgBQgYgBgVAYIgEADIgMAIQgTgygSgjIgCgDIgFgKIAAlXICQAAIA/CFIAAFYIgCgBg");
	this.shape_443.setTransform(-172.8,-245.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnjwICQAAIA+CHIABAEIAAFWQgBAAgBgBQAAAAAAgBQgGgSgKgMQgBgCgCgCQgHgIgIgGQgBAAgBgBIgBAAQAAgBgBAAQgOgIgPgEQgBAAgBgBQgMgCgKgBIgFAAQgCgBgEAAQgYAAgUAYQgDACgCABIgLAGQgTgzgSgjQgBgCAAgCIgFgKg");
	this.shape_444.setTransform(-172.7,-245.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-24.2,0,24.5).s().p("ABmDwIAAgBQgGgSgKgMIgDgEQgHgIgJgGIgBgBIAAAAIgCgBQgNgIgRgEIgCgBIgVgDIgFAAIgFgBQgZAAgVAYIgEADIgLAGQgUgzgQgjIgCgEIgFgKIAAlZICQAAIA9CHIABAEIAAFWIgBgBg");
	this.shape_445.setTransform(-172.7,-245.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnjzICSAAIA8CKIABAEIAAFZQgBAAgBgBQAAAAAAgBQgGgSgKgNQgBgBgCgCQgIgIgIgGQgBgBAAAAIgBgBQgBgBgBAAQgNgHgRgEQgBgBgBAAQgLgDgKAAIgFgBQgDAAgCAAQgZAAgUAaQgDABgCABIgDACIgJACQgSgzgRgkQgBgCgBgCIgEgLg");
	this.shape_446.setTransform(-172.7,-245.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-24.4,0,24.8).s().p("ABmDzIAAgBQgGgTgKgLIgDgFIgQgNIgBgBIgBgBIgCgBQgOgIgQgEIgCAAQgLgDgKAAIgGAAIgEAAQgZAAgVAZIgEACIgCACIgJACQgTgygRgmIgCgDIgEgKIAAldICRAAIA8CJIABAFIAAFZIgBgBg");
	this.shape_447.setTransform(-172.7,-245.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnj1ICTAAIA7CLIABAFIAAFbQgBAAgBAAQAAgBAAAAQgGgTgKgMQgBgCgCgCQgIgHgJgHQgBAAAAgBIgBAAQgBgBgBAAQgNgIgRgEQgBAAgBgBQgLgCgLAAIgFAAQgDAAAAAAQgbAAgUAaQgCABgDABIgCABIgJABQgSgzgRgmQAAgBgBgCIgEgLg");
	this.shape_448.setTransform(-172.7,-245);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-24.7,0,25.1).s().p("ABmD2IAAgBQgGgTgKgMIgDgEIgRgOIgBgBIgBAAIgCgBQgOgIgQgEIgCgBIgWgCIgFAAIgEAAQgaAAgUAaIgFACIgDABIgIABQgSgzgQgmIgCgDIgEgLIAAlfICTAAIA6CLIABAFIAAFbIgBAAg");
	this.shape_449.setTransform(-172.7,-245);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnj4ICUAAIA6COIABAEIAAFfQgBAAgBgBQAAAAAAgBQgGgSgKgMQgBgDgCgCQgIgHgJgHQgBAAAAgBIgBAAQgBgBgCAAQgNgIgSgEQAAAAgBAAQgLgCgMgBIgFAAQgBAAgCABQgbABgUAaQgCABgDABIgCABIgIgBQgSgzgQgnQgBgCAAgCIgEgLg");
	this.shape_450.setTransform(-172.7,-244.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-25,0,25.4).s().p("ABmD4IAAgBQgGgSgKgMIgDgFIgRgOIgBgBIgBAAIgDgBQgOgIgRgEIgBAAIgXgDIgEAAIgEABQgbABgUAaIgFACIgCABIgIgBQgSgzgQgnIgBgEIgEgLIAAliICUAAIA5COIABAEIAAFfIgBgBg");
	this.shape_451.setTransform(-172.7,-244.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnj6ICVAAIA5CPIABAFIAAFhQgBAAgBABQAAgBAAAAQgGgUgKgMQgCgCgCgCQgHgHgKgHQAAAAgBgBIgBAAQgCgBgBAAQgOgIgQgEQgBAAgBAAQgMgDgLABIgFAAQgBAAgDAAQgaACgTAbQgEABgCAAIgDABIgHgDQgSgzgQgoQAAgCAAgCIgEgLg");
	this.shape_452.setTransform(-172.7,-244.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-25.2,0,25.8).s().p("ABmD7QgGgUgKgMIgEgEQgHgHgKgHIgBgBIgBgBIgDAAQgOgJgQgDIgCAAQgLgDgMAAIgFAAIgEAAQgaACgTAcIgHABIgCABIgIgEQgQgygRgpIgBgDIgDgLIAAllICWAAIA3CPIABAEIAAFiIgBABIAAgBg");
	this.shape_453.setTransform(-172.7,-244.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnj9ICXAAIA3CSIABAEIAAFlQgBAAgBAAQAAAAAAgBQgGgTgLgMQgBgDgCgCQgIgHgJgHQgBAAgBgBIgBAAQgBgBgBAAQgPgIgRgEQgBAAgBAAQgLgCgLAAIgEAAQgDAAgCABQgbACgTAcQgDABgDAAIgCABIgIgFQgQgzgQgqQAAgCAAgBIgEgMg");
	this.shape_454.setTransform(-172.7,-244.3);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-25.4,0,26.1).s().p("ABmD9QgGgTgLgNIgDgEQgIgHgJgHIgCgBIgBgBIgCAAQgOgIgSgEIgCAAQgLgCgLAAIgEAAIgFAAQgaADgUAcIgGABIgCABIgIgGQgQgygQgqIgBgDIgDgMIAAloICXAAIA2CRIABAFIAAFlIgBAAIAAgBg");
	this.shape_455.setTransform(-172.7,-244.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnj/ICYAAIA2CTIABAEIAAFoQgBAAgBABQAAgBAAAAQgGgUgLgMQgBgCgDgCQgHgIgKgGQgBgBgBgBIgBAAQgBAAgBgBQgOgIgSgDQgBAAgBgBQgLgCgLABIgEAAQgDAAgDABQgaADgUAcQgCABgEAAIgCABIgHgIQgQgygPgrQAAgCgBgCIgDgLg");
	this.shape_456.setTransform(-172.7,-244);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-25.7,0,26.4).s().p("ABmEAQgGgUgLgMIgDgEQgJgIgJgHIgCgBIgBAAIgCgBQgPgIgRgDIgCgBQgLgCgLAAIgEABIgGABQgaACgTAdIgGABIgDAAIgHgHQgQgzgQgrIAAgDIgDgMIAAlqICYAAIA1CTIABAFIAAFnIgBABIAAgBg");
	this.shape_457.setTransform(-172.7,-244);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkCICZAAIA1CWIABAEIAAFqQgBABgBAAQAAAAAAgBQgGgTgLgNQgBgCgDgCQgIgHgJgHQgBgBgCAAIgBgBQAAAAgBgBQgPgHgTgEQAAAAgBAAQgLgDgMACIgEAAQgCAAgEABQgZADgUAeQgDAAgDAAIgDABIgGgKQgPgygQgtQAAgCAAgBIgDgMg");
	this.shape_458.setTransform(-172.7,-243.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-26,0,26.7).s().p("ABmECQgGgTgLgNIgDgEIgSgOIgDgBIgBgBIgCgBQgOgHgTgEIgCAAQgLgDgLACIgEAAIgGABQgZADgUAeIgGAAIgDABIgGgKQgQgygPgtIgBgDIgCgMIAAluICZAAIA0CWIABAEIAAFqIgBABIAAgBg");
	this.shape_459.setTransform(-172.7,-243.8);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkFICaAAIAyCYIACAFIAAFsQAAAAAAABQgBAAgBABQAAgBAAAAQgGgUgKgMQgCgDgDgCQgIgHgKgHQgBgBgBAAIAAgBQgCAAgBgBQgPgHgSgEQgBAAgBAAQgMgCgKABIgFABQgDAAgDABQgaAEgTAeQgDAAgDAAIgDAAIgGgLQgPgzgPgtQAAgCAAgCIgCgMg");
	this.shape_460.setTransform(-172.7,-243.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-26.2,0,27).s().p("ABlEFQgGgUgKgMIgFgFIgSgOIgBgBIgBgBIgCgBQgQgHgSgEIgCAAQgMgCgKABIgFABIgFABQgbAEgSAeIgHAAIgCAAIgHgLIgdhgIgBgEIgBgMIAAlxICZAAIAyCYIADAFIAAFsIAAABIgDABIAAgBg");
	this.shape_461.setTransform(-172.7,-243.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkHICbAAIAxCaIACAEIAAFwQgBABgBAAQAAAAAAgBQgGgTgKgNQgDgCgCgDQgJgHgJgHQgBAAgBgBIgCAAQgBgBgBAAQgPgIgTgDQgBAAgBAAQgLgDgKACIgFAAQgDABgDABQgaAEgTAfQgDAAgEAAIgCAAIgGgOQgPgygOgvQgBgCAAgCIgBgMg");
	this.shape_462.setTransform(-172.7,-243.3);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-26.5,0,27.3).s().p("ABlEHQgGgTgKgNIgFgFIgSgOIgCgBIgBAAIgDgBQgPgIgSgDIgDAAQgLgDgJACIgGAAIgGACQgaAEgTAfIgGAAIgDAAIgGgOIgdhhIAAgEIgBgMIAAlzICaAAIAxCaIADAEIAAFwIgDABIAAgBg");
	this.shape_463.setTransform(-172.7,-243.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkKICcAAIAwCcIABACIABADIAAFxQAAABAAAAQgBABgBABQAAgBAAAAQgGgUgKgMQgDgDgCgCQgJgHgKgHQgBgBgBgBIgBAAQgBgBgBAAQgQgIgTgDQgBAAAAAAQgNgCgJABIgGABQgDABgDAAQgaAGgTAfQgDAAgDAAIgDAAIgGgQQgOgygOgwQAAgCAAgCg");
	this.shape_464.setTransform(-172.7,-243.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-26.8,0,27.6).s().p("ABlEKQgGgUgKgMIgFgFIgTgOIgCgCIgBAAIgCgBQgPgIgTgDIgDAAQgMgCgJABIgGABIgGABQgZAGgUAfIgGAAIgDAAIgFgQIgchiIgBgEIAAmDICbAAIAwCcIACACIABADIAAFxIAAABIgDACIAAgBg");
	this.shape_465.setTransform(-172.7,-243.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnkNICeAAIAuCfIABACIABADIAAF1QgBABgBABQAAgBAAAAQgGgUgLgNQgCgCgCgDQgKgHgJgHQgBAAgCgBIgBAAQgBgBgBAAQgPgIgUgDQgBAAgBAAQgMgDgKADIgFAAQgDABgDABQgaAGgTAgQgDgBgEAAIgDAAIgFgSQgNgygOgxQAAgCAAgCg");
	this.shape_466.setTransform(-172.7,-242.8);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-27,0,27.9).s().p("ABlENQgGgVgLgMIgEgFIgTgOIgDgBIgBAAIgCgBQgQgIgTgEIgCAAQgMgCgJACIgGABIgGACQgaAFgTAhIgGgBIgEAAIgEgSIgchjIAAgFIAAmFICcAAIAvCdIACACIABAEIAAF0IgDADIAAgBg");
	this.shape_467.setTransform(-172.7,-242.8);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABnhqIAAF4IgCACIAAgBQgIgYgNgNIgUgOIgEgCQgQgJgVgDQgNgCgLACIgGABQgdAEgVAlIgKgBIggh5IAAmNICfAAIAJAIIAlCag");
	this.shape_468.setTransform(-172.7,-242.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-27.3,0,28.2).s().p("ABlEPQgHgYgPgOIgSgNIgFgCQgQgJgVgDQgNgCgLACIgFABQgeAEgVAkIgKAAIgfh5IAAmNICeAAIAJAIIAmCaIABADIAAF4IgDACg");
	this.shape_469.setTransform(-172.7,-242.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_435},{t:this.shape_434}]},46).to({state:[{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_439},{t:this.shape_438}]},1).to({state:[{t:this.shape_441},{t:this.shape_440}]},1).to({state:[{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_445},{t:this.shape_444}]},1).to({state:[{t:this.shape_447},{t:this.shape_446}]},1).to({state:[{t:this.shape_449},{t:this.shape_448}]},1).to({state:[{t:this.shape_451},{t:this.shape_450}]},1).to({state:[{t:this.shape_453},{t:this.shape_452}]},1).to({state:[{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_457},{t:this.shape_456}]},1).to({state:[{t:this.shape_459},{t:this.shape_458}]},1).to({state:[{t:this.shape_461},{t:this.shape_460}]},1).to({state:[{t:this.shape_463},{t:this.shape_462}]},1).to({state:[{t:this.shape_465},{t:this.shape_464}]},1).to({state:[{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_469},{t:this.shape_468}]},1).to({state:[]},1).wait(251));

	// Layer 1
	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmhnIDOAAIAADPIgJgJQgQgPgPgLQgRgNgRgHQgegNgZAGQgiAHgeAkIgNATg");
	this.shape_470.setTransform(-173,-258.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-10.4,0,10.4).s().p("ABfBfQgQgPgPgLQgRgNgRgHQgegNgaAGQghAHgeAkIgNATIAAjPIDOAAIAADPg");
	this.shape_471.setTransform(-173,-258.5);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmhwIBoAAIBcAKIAKDXQgIgGAAgBQgQgQgPgMQgSgNgSgHQgBAAgCgBQgbgLgaAIQgCAAgCABQgfADgcAdQAAABgBAAIgLAOg");
	this.shape_472.setTransform(-173,-257.6);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-11.4,0,11.4).s().p("ABgBqQgQgQgQgMQgRgNgSgHIgDgBQgbgLgaAIIgEABQgfADgcAdIgBABIgLAOIAAjWIBnAAIBdAKIAKDXIgIgHg");
	this.shape_473.setTransform(-173,-257.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahnh5IBsAAIBZATIAKDgQgIgFAAAAQgPgSgQgMQgSgNgTgHQgCAAgBgBQgdgLgZALQgDABgCABQgegDgbAYQgBABAAAAIgLAKg");
	this.shape_474.setTransform(-173,-256.8);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-12.3,0,12.4).s().p("ABgB1QgPgSgQgMQgSgNgTgHIgDgBQgcgLgbALIgDACQgfgDgbAYIgBABIgLAKIAAjdIBrAAIBaATIAJDgIgHgFg");
	this.shape_475.setTransform(-173,-256.8);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhniCIBwAAIBWAdIAJDoQgHgDgBAAQgOgUgRgMQgSgNgTgHQgDAAgBgBQgdgLgaAOQgCABgCABQgegIgbAUQgBAAAAAAIgKAGg");
	this.shape_476.setTransform(-173,-255.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-13.2,0,13.4).s().p("ABhCAQgPgUgRgMQgSgNgTgHIgEgBQgdgLgaAOIgEACQgegIgbAUIgBAAIgKAGIAAjkIBwAAIBWAdIAIDoIgGgDg");
	this.shape_477.setTransform(-173,-255.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhniLIByAAIBUAnIAIDwQgGgBAAAAQgOgVgRgMQgTgOgVgGQgBgBgDAAQgdgLgbARQgCABgBABQgegNgaAOQgBAAAAAAIgJADg");
	this.shape_478.setTransform(-172.9,-255.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-14,0,14.5).s().p("ABhCKQgOgUgRgNQgTgNgVgHIgDgBQgegKgbARIgDACQgegOgaAPIgBAAIgIADIAAjsIByAAIBTAnIAJDvIgHgBg");
	this.shape_479.setTransform(-172.9,-255.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhniUIB2AAIBRAwIAHD4QgFABAAAAQgOgXgSgMQgTgOgVgGQgDgBgBAAQgfgLgaAUQgCABgCABQgegSgZAJQgBAAAAAAIgIgBg");
	this.shape_480.setTransform(-172.9,-254.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-15,0,15.5).s().p("ABiCVQgOgXgRgMQgUgOgVgGIgEgBQgfgLgaAUIgEACQgegSgZAJIgBAAIgHgBIAAjyIB1AAIBRAwIAID4IgGABIAAAAg");
	this.shape_481.setTransform(-172.9,-254.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnieIB6AAIBOA5IAGEBQgEADAAAAQgOgYgSgNQgTgOgXgGQgCgBgCAAQgggKgaAWQgCABgCACQgdgYgZAEQAAAAgBAAIgHgFg");
	this.shape_482.setTransform(-172.9,-253.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-16,0,16.4).s().p("ABjCfQgNgYgTgNQgTgOgXgGIgEgBQgfgKgbAWIgDADQgdgYgZAEIgBAAIgHgFIAAj5IB5AAIBOA5IAHEBIgFADIAAAAg");
	this.shape_483.setTransform(-172.9,-253.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnioIB+AAIBMBDIAFEJQgEAFgBAAQgNgZgSgNQgUgPgXgFQgDgBgCAAQghgKgaAYQgCACgCABQgcgdgZAAQAAAAgBAAIgGgJg");
	this.shape_484.setTransform(-172.9,-252.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-17,0,17.3).s().p("ABjCpQgNgZgTgNQgUgPgWgFIgGgBQgfgKgbAYIgEADQgdgdgYAAIgBAAIgGgJIAAkBIB9AAIBNBDIAEEJIgEAFIAAAAg");
	this.shape_485.setTransform(-172.9,-252.3);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhniyICBAAIBKBNIAEERQgEAHAAAAQgMgbgUgNQgUgPgYgFQgCgBgDAAQghgKgbAbQgCACgBACQgdgjgXgFQgBAAgBAAIgFgNg");
	this.shape_486.setTransform(-172.9,-251.4);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-18,0,18.2).s().p("ABkCzQgNgbgTgNQgUgPgYgFIgGgBQgggKgbAbIgDAEQgcgjgZgFIAAAAIgGgNIAAkIICBAAIBJBNIAEERIgDAHIAAAAg");
	this.shape_487.setTransform(-172.9,-251.4);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ahni8ICFAAIBGBWIAEEaIgDAJQgMgdgUgNQgUgPgZgFQgEgBgCAAQgigKgbAeQgBACgCACQgcgogYgKQAAAAgBAAIgEgRg");
	this.shape_488.setTransform(-172.9,-250.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-19,0,19.2).s().p("ABFCTQgVgPgYgFIgGgBQgigKgbAfIgDADQgcgogXgKIgBAAIgFgQIAAkQICFAAIBGBXIADEZIgCAJQgNgcgTgOg");
	this.shape_489.setTransform(-172.9,-250.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnjGICIAAIBEBhIADEhIgDALQgLgegVgOQgUgPgbgFQgCAAgEgBQgigJgbAhQgCACgBACQgcgtgXgPQAAgBAAAAIgEgUg");
	this.shape_490.setTransform(-172.8,-249.5);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-19.9,0,20.2).s().p("ABFCbQgVgPgagFIgGgBQgigJgbAhIgDAEQgcgtgXgPIgBgBIgCgUIAAkXICHAAIBEBhIACEhIgBALQgNgegUgOg");
	this.shape_491.setTransform(-172.8,-249.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhnjQICMAAIBBBqIACEqQgCANAAAAQgMgfgUgPQgVgPgbgFQgDAAgEgBQgigIgcAjQgBACgBACQgcgygWgUQgBgBgBAAIgCgYg");
	this.shape_492.setTransform(-172.8,-248.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-20.9,0,21.1).s().p("ABmDRQgMgfgVgPQgUgPgbgFIgHgBQgjgIgbAjIgCAEQgcgygXgUIgBgBIgBgYIAAkeICLAAIBBBqIABEqIgBANIAAAAg");
	this.shape_493.setTransform(-172.8,-248.6);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("AhmjaICOAAIA/B0IABEzIgBAOQgLghgWgOQgVgQgcgEQgDgBgDgBQglgIgbAmQgBADgCACQgbg4gVgYQgBgBAAgBg");
	this.shape_494.setTransform(-172.8,-247.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-21.9,0,22).s().p("ABGCrQgVgPgcgFIgGgBQglgIgbAmIgDAFQgbg4gVgZIgBgBIgClBICPAAIA+B0IACEyIgCAPQgKghgWgPg");
	this.shape_495.setTransform(-172.8,-247.6);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("ABohnIAAFMQgLgigWgQQgYgRghgEQgngIgdAuQgag/gWgdIAAlMICSAAg");
	this.shape_496.setTransform(-172.8,-246.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.302)"],[0,1],0,-23,0,22.9).s().p("ABHCzQgYgRghgEQgngJgcAvQgbg/gXgeIAAlLICTAAIA8B9IAAFMQgLgigWgQg");
	this.shape_497.setTransform(-172.8,-246.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_471},{t:this.shape_470}]},33).to({state:[{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_475},{t:this.shape_474}]},1).to({state:[{t:this.shape_477},{t:this.shape_476}]},1).to({state:[{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_481},{t:this.shape_480}]},1).to({state:[{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_487},{t:this.shape_486}]},1).to({state:[{t:this.shape_489},{t:this.shape_488}]},1).to({state:[{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_495},{t:this.shape_494}]},1).to({state:[{t:this.shape_497},{t:this.shape_496}]},1).to({state:[]},1).wait(268));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-311.3,28.8,45.1);


(lib.eeSprite29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.eeeSprite28();
	this.instance.setTransform(50.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer 3
	this.instance_1 = new lib.eeeSprite26();
	this.instance_1.setTransform(55.6,1.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.81,skewY:168.4,x:55.7},0).wait(1).to({scaleX:0.67,skewY:159.2,y:1.6},0).wait(1).to({scaleX:0.56,skewY:152.7,x:55.8,y:1.5},0).wait(1).to({scaleX:0.5,skewY:148.7,y:1.6},0).wait(1).to({scaleX:0.48,skewY:147.4,y:1.5},0).wait(1).to({scaleX:0.66,skewY:158.7,x:55.6},0).wait(1).to({scaleX:0.8,skewY:167.9},0).wait(1).to({scaleX:0.92,skewY:175,y:1.4},0).wait(1).to({scaleX:1,skewY:180,y:1.5},0).wait(2));

	// Layer 1
	this.instance_2 = new lib.eeeSprite26();
	this.instance_2.setTransform(56.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.79,skewY:10.5,x:56.3,y:1.5},0).wait(1).to({scaleX:0.63,skewY:18.6,x:56.2,y:1.6},0).wait(1).to({scaleX:0.52,skewY:24.5,x:56.1,y:1.5},0).wait(1).to({scaleX:0.45,skewY:28.1,y:1.6},0).wait(1).to({scaleX:0.42,skewY:29.2,x:56,y:1.5},0).wait(1).to({scaleX:0.62,skewY:19.1,x:56.2},0).wait(1).to({scaleX:0.78,skewY:10.8,y:1.4},0).wait(1).to({scaleX:0.91,skewY:4.5,x:56.4},0).wait(1).to({scaleX:1,skewY:0,x:56.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.1,16.4,60,39);


(lib.eeeSprite30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.eeSprite29();
	this.instance.setTransform(-172.2,-262.2,0.998,0.997,39.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,rotation:37.1,x:-156.3,y:-282.9},14).to({rotation:34.6,x:-142.9,y:-301.7},13).to({rotation:31.8,x:-128.6,y:-323.5},14).to({rotation:29.3,x:-116.7,y:-343.4},14).to({rotation:26.8,x:-105.6,y:-363.9},13).to({rotation:25.3,x:-99.1,y:-376.9},10).to({rotation:22.8,x:-89.6,y:-398.2},10).to({rotation:21.3,x:-84.1,y:-411.7},9).to({rotation:20,x:-80.1,y:-422.6},7).to({rotation:18.8,x:-76.3,y:-433.8},8).to({rotation:17.5,x:-72.7,y:-444.9},9).to({scaleX:1,scaleY:1,rotation:16.5,x:-70.3,y:-453.2},6).to({alpha:0},9).wait(293));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.6,-233,70.9,68.1);


(lib.Spridwte29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.dw();
	this.instance.setTransform(50.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer 3
	this.instance_1 = new lib.Sprdwite26();
	this.instance_1.setTransform(55.6,1.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.81,skewY:168.4,x:55.7},0).wait(1).to({scaleX:0.67,skewY:159.2,y:1.6},0).wait(1).to({scaleX:0.56,skewY:152.7,x:55.8,y:1.5},0).wait(1).to({scaleX:0.5,skewY:148.7,y:1.6},0).wait(1).to({scaleX:0.48,skewY:147.4,y:1.5},0).wait(1).to({scaleX:0.66,skewY:158.7,x:55.6},0).wait(1).to({scaleX:0.8,skewY:167.9},0).wait(1).to({scaleX:0.92,skewY:175,y:1.4},0).wait(1).to({scaleX:1,skewY:180,y:1.5},0).wait(2));

	// Layer 1
	this.instance_2 = new lib.Sprdwite26();
	this.instance_2.setTransform(56.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.79,skewY:10.5,x:56.3,y:1.5},0).wait(1).to({scaleX:0.63,skewY:18.6,x:56.2,y:1.6},0).wait(1).to({scaleX:0.52,skewY:24.5,x:56.1,y:1.5},0).wait(1).to({scaleX:0.45,skewY:28.1,y:1.6},0).wait(1).to({scaleX:0.42,skewY:29.2,x:56,y:1.5},0).wait(1).to({scaleX:0.62,skewY:19.1,x:56.2},0).wait(1).to({scaleX:0.78,skewY:10.8,y:1.4},0).wait(1).to({scaleX:0.91,skewY:4.5,x:56.4},0).wait(1).to({scaleX:1,skewY:0,x:56.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.1,16.4,60,39);


(lib.Spridwtefe29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.dwfe();
	this.instance.setTransform(50.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer 3
	this.instance_1 = new lib.Sprdwitefes26();
	this.instance_1.setTransform(55.6,1.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.81,skewY:168.4,x:55.7},0).wait(1).to({scaleX:0.67,skewY:159.2,y:1.6},0).wait(1).to({scaleX:0.56,skewY:152.7,x:55.8,y:1.5},0).wait(1).to({scaleX:0.5,skewY:148.7,y:1.6},0).wait(1).to({scaleX:0.48,skewY:147.4,y:1.5},0).wait(1).to({scaleX:0.66,skewY:158.7,x:55.6},0).wait(1).to({scaleX:0.8,skewY:167.9},0).wait(1).to({scaleX:0.92,skewY:175,y:1.4},0).wait(1).to({scaleX:1,skewY:180,y:1.5},0).wait(2));

	// Layer 1
	this.instance_2 = new lib.Sprdwitefes26();
	this.instance_2.setTransform(56.5,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:0.79,skewY:10.5,x:56.3,y:1.5},0).wait(1).to({scaleX:0.63,skewY:18.6,x:56.2,y:1.6},0).wait(1).to({scaleX:0.52,skewY:24.5,x:56.1,y:1.5},0).wait(1).to({scaleX:0.45,skewY:28.1,y:1.6},0).wait(1).to({scaleX:0.42,skewY:29.2,x:56,y:1.5},0).wait(1).to({scaleX:0.62,skewY:19.1,x:56.2},0).wait(1).to({scaleX:0.78,skewY:10.8,y:1.4},0).wait(1).to({scaleX:0.91,skewY:4.5,x:56.4},0).wait(1).to({scaleX:1,skewY:0,x:56.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.1,16.4,60,39);


(lib.logotext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LGai("synched",0);
	this.instance.setTransform(243.4,23.4,1,1,0,0,0,70.3,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.9,0.7,212,42.1);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqNZGMAAAgyLIUbAAMAAAAyLg");
	mask.setTransform(7.5,146.5);

	// Слой 2
	this.instance = new lib.Sprite172();
	this.instance.setTransform(-9.6,78.2,0.334,0.38,0,0,180);
	this.instance.alpha = 0.891;

	this.instance_1 = new lib.Sprite99();
	this.instance_1.setTransform(34.1,100.4,0.396,0.396);

	this.instance_2 = new lib.Sprite17();
	this.instance_2.setTransform(46.8,218.4,0.46,0.46);
	this.instance_2.filters = [new cjs.ColorFilter(0.63, 0.63, 0.63, 1, 0, 94.35, 94.35, 0)];
	this.instance_2.cache(-191,-313,33,49);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_3 = new lib.bottle();
	this.instance_3.setTransform(-53,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-5.4,113.6,380.5);


(lib.bf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(0,-4);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween3("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},19).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:-4},20).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},20).to({_off:true,y:0},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-36,52,72);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Sprite172();
	this.instance.setTransform(29.2,131.6,0.443,0.503,0,0,180);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Sprite99();
	this.instance_1.setTransform(68.6,142.8,0.524,0.524);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Sprite17();
	this.instance_2.setTransform(114.9,299.1,0.609,0.609);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Sprite172();
	this.instance_3.setTransform(229.2,65.9,0.446,0.507,0,0,180);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Sprite99();
	this.instance_4.setTransform(275.9,79.2,0.497,0.497);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Sprite17();
	this.instance_5.setTransform(300.9,249.8,0.604,0.604);
	this.instance_5.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-45.7,309.7,484);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A/2eEMAAAg8HMA/tAAAMAAAA8Hg");
	var mask_graphics_194 = new cjs.Graphics().p("A/2e2MAAAg9rMA/tAAAMAAAA9rg");
	var mask_graphics_195 = new cjs.Graphics().p("A/2RRMAAAgihMA/tAAAMAAAAihg");
	var mask_graphics_428 = new cjs.Graphics().p("A/2RRMAAAgihMA/tAAAMAAAAihg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:151.6,y:267.7}).wait(194).to({graphics:mask_graphics_194,x:151.6,y:267.7}).wait(1).to({graphics:mask_graphics_195,x:151.6,y:267.7}).wait(233).to({graphics:mask_graphics_428,x:151.6,y:267.7}).wait(1));

	// Слой 1
	this.instance = new lib.Символ12();
	this.instance.setTransform(154.3,266.3,1,1,0,0,0,154.3,196.3);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(195).to({y:196.3},0).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,75.3,309.7,385);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logotext();
	this.instance.setTransform(110,21.5,1,1,0,0,0,0,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0.7,212,42.1);


(lib.Символ4копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ao5CmQgugwAAhbIAAjfIAHAAQAwAAAXAYQAWAXAAAyIAACBQAABiBTAAQBUAAAAhiIAAiBQAAgyAXgXQAWgYAxAAIAGAAIAADfQAAC6i4AAQhbAAgugvgAJrDPQgdAAg4gfQgqgXgIgDQgdgMgbAAIgBABIgDgBQgbAAgcAMIgxAaIgDACQgcAPgLAFQgVAJgRAAIggAAICgl1QANgcAfgCIAjAAQAfACANAcICgF1gAHpBJIg+inIhACnIAXgJQAVgGAUAAQAZAAAlAPgAB5DPQhQAAgkhAQgfg9gRg1IgBgDIgBgEQgCgJAEgFQACgEAagBIAagBQAhAAASgMQASgQAAgaIAAgBQAAgdgUgQQgTgQgjAAIhQAAIAADbQgBA5gaAYQgWATgwACIgNAAQAJglAAgwIAAjpQAAgrAagXQAWgTAiAAIBpAAQBVAAAqArQAkAjAAA6IAAABQAABShPAZQgQAFgVAEIAwBHQAxBFAWAKgAQGDOQghAAgWgNQgNgIgVgXIiYjPIAAChQgCAygYAVQgUARgqACIgLAAIAAk9QAAgrAbgXQAWgTAhAAIARAAICxDxIAAilQAFglAUgSQAUgSAogDIAYAAIgFAYQgEAdAAAdIAAFAgAuODOQAJgkAAgwIAAjjIgsAAQhTAAgNAJIgBAAIgBgGQAAheBbAAICyAAQBhAAAPgJIABAAIAAAGQAABehbAAIgxAAIAADNIgBADIAAACQAAA5gaAXQgWATgwACg");
	var mask_graphics_39 = new cjs.Graphics().p("Ao5CmQgugwAAhbIAAjfIAHAAQAwAAAXAYQAWAXAAAyIAACBQAABiBTAAQBUAAAAhiIAAiBQAAgyAXgXQAWgYAxAAIAGAAIAADfQAAC6i4AAQhbAAgugvgAJrDPQgdAAg4gfQgqgXgIgDQgdgMgbAAIgBABIgDgBQgbAAgcAMIgxAaIgDACQgcAPgLAFQgVAJgRAAIggAAICgl1QANgcAfgCIAjAAQAfACANAcICgF1gAHpBJIg+inIhACnIAXgJQAVgGAUAAQAZAAAlAPgAB5DPQhQAAgkhAQgfg9gRg1IgBgDIgBgEQgCgJAEgFQACgEAagBIAagBQAhAAASgMQASgQAAgaIAAgBQAAgdgUgQQgTgQgjAAIhQAAIAADbQgBA5gaAYQgWATgwACIgNAAQAJglAAgwIAAjpQAAgrAagXQAWgTAiAAIBpAAQBVAAAqArQAkAjAAA6IAAABQAABShPAZQgQAFgVAEIAwBHQAxBFAWAKgAQGDOQghAAgWgNQgNgIgVgXIiYjPIAAChQgCAygYAVQgUARgqACIgLAAIAAk9QAAgrAbgXQAWgTAhAAIARAAICxDxIAAilQAFglAUgSQAUgSAogDIAYAAIgFAYQgEAdAAAdIAAFAgAuODOQAJgkAAgwIAAjjIgsAAQhTAAgNAJIgBAAIgBgGQAAheBbAAICyAAQBhAAAPgJIABAAIAAAGQAABehbAAIgxAAIAADNIgBADIAAACQAAA5gaAXQgWATgwACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:107.5,y:21.4}).wait(39).to({graphics:mask_graphics_39,x:107.5,y:21.4}).wait(1));

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-77,26,1,1,0,0,0,86.4,100.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:311,y:21},39).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(110,21.5,1,1,0,0,0,110,21.5);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(1,-1,216,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0.7,212,42.1);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ao5CmQgugwAAhbIAAjfIAHAAQAwAAAXAYQAWAXAAAyIAACBQAABiBTAAQBUAAAAhiIAAiBQAAgyAXgXQAWgYAxAAIAGAAIAADfQAAC6i4AAQhbAAgugvgAJrDPQgdAAg4gfQgqgXgIgDQgdgMgbAAIgBABIgDgBQgbAAgcAMIgxAaIgDACQgcAPgLAFQgVAJgRAAIggAAICgl1QANgcAfgCIAjAAQAfACANAcICgF1gAHpBJIg+inIhACnIAXgJQAVgGAUAAQAZAAAlAPgAB5DPQhQAAgkhAQgfg9gRg1IgBgDIgBgEQgCgJAEgFQACgEAagBIAagBQAhAAASgMQASgQAAgaIAAgBQAAgdgUgQQgTgQgjAAIhQAAIAADbQgBA5gaAYQgWATgwACIgNAAQAJglAAgwIAAjpQAAgrAagXQAWgTAiAAIBpAAQBVAAAqArQAkAjAAA6IAAABQAABShPAZQgQAFgVAEIAwBHQAxBFAWAKgAQGDOQghAAgWgNQgNgIgVgXIiYjPIAAChQgCAygYAVQgUARgqACIgLAAIAAk9QAAgrAbgXQAWgTAhAAIARAAICxDxIAAilQAFglAUgSQAUgSAogDIAYAAIgFAYQgEAdAAAdIAAFAgAuODOQAJgkAAgwIAAjjIgsAAQhTAAgNAJIgBAAIgBgGQAAheBbAAICyAAQBhAAAPgJIABAAIAAAGQAABehbAAIgxAAIAADNIgBADIAAACQAAA5gaAXQgWATgwACg");
	var mask_graphics_39 = new cjs.Graphics().p("Ao5CmQgugwAAhbIAAjfIAHAAQAwAAAXAYQAWAXAAAyIAACBQAABiBTAAQBUAAAAhiIAAiBQAAgyAXgXQAWgYAxAAIAGAAIAADfQAAC6i4AAQhbAAgugvgAJrDPQgdAAg4gfQgqgXgIgDQgdgMgbAAIgBABIgDgBQgbAAgcAMIgxAaIgDACQgcAPgLAFQgVAJgRAAIggAAICgl1QANgcAfgCIAjAAQAfACANAcICgF1gAHpBJIg+inIhACnIAXgJQAVgGAUAAQAZAAAlAPgAB5DPQhQAAgkhAQgfg9gRg1IgBgDIgBgEQgCgJAEgFQACgEAagBIAagBQAhAAASgMQASgQAAgaIAAgBQAAgdgUgQQgTgQgjAAIhQAAIAADbQgBA5gaAYQgWATgwACIgNAAQAJglAAgwIAAjpQAAgrAagXQAWgTAiAAIBpAAQBVAAAqArQAkAjAAA6IAAABQAABShPAZQgQAFgVAEIAwBHQAxBFAWAKgAQGDOQghAAgWgNQgNgIgVgXIiYjPIAAChQgCAygYAVQgUARgqACIgLAAIAAk9QAAgrAbgXQAWgTAhAAIARAAICxDxIAAilQAFglAUgSQAUgSAogDIAYAAIgFAYQgEAdAAAdIAAFAgAuODOQAJgkAAgwIAAjjIgsAAQhTAAgNAJIgBAAIgBgGQAAheBbAAICyAAQBhAAAPgJIABAAIAAAGQAABehbAAIgxAAIAADNIgBADIAAACQAAA5gaAXQgWATgwACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:107.5,y:21.4}).wait(39).to({graphics:mask_graphics_39,x:107.5,y:21.4}).wait(1));

	// Слой 2
	this.instance = new lib.Символ6();
	this.instance.setTransform(-77,26,1,1,0,0,0,86.4,100.5);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:311,y:21},39).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ5();
	this.instance_1.setTransform(110,21.5,1,1,0,0,0,110,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,0.7,212,42.1);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(36,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,55);


(lib.Sprivvvte11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 37
	this.instance = new lib.Sprivvvte10();
	this.instance.setTransform(-63,0,1.75,1,0,90,72.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1722).wait(21));

	// Layer 25
	this.instance_1 = new lib.Sprivvvte10();
	this.instance_1.setTransform(113,0,2.011,1,0,-90,-56);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},1715).wait(14));

	// Layer 13
	this.instance_2 = new lib.Sprivvvte10();
	this.instance_2.setTransform(0,37,1.133,1,0,180,-151.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true},1707).wait(7));

	// Layer 1
	this.instance_3 = new lib.Sprivvvte10();
	this.instance_3.setTransform(0,23,1.031,1,0,0,-14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).wait(1699));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.8,-200,325,400);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ10();
	this.instance.setTransform(158.1,49.9,1,1,0,0,0,154.3,196.3);
	this.instance.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(418).to({alpha:0},10).wait(1));

	// Слой 15
	this.instance_1 = new lib.Sprivvvte11();
	this.instance_1.setTransform(117.6,88,1.514,1.505,55.4);
	this.instance_1.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(429));

	// Слой 11
	this.instance_2 = new lib.bf1();
	this.instance_2.setTransform(117,68,0.731,0.769,0,0,180);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(303).to({_off:false},0).to({alpha:1},8).wait(107).to({alpha:0},10).wait(1));

	// Слой 10
	this.instance_3 = new lib.Spridwtefe29();
	this.instance_3.setTransform(-49.2,219.1,0.997,0.997,45.9,0,0,56.1,35.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(234).to({_off:false},0).to({x:119.7,y:72.1},69).to({scaleX:0.84,scaleY:0.84,alpha:0},6).to({_off:true},1).wait(119));

	// Слой 9
	this.instance_4 = new lib.bf1();
	this.instance_4.setTransform(188,53);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(264).to({_off:false},0).to({scaleX:0.77,scaleY:0.77,y:50,alpha:1},7).wait(147).to({alpha:0},10).wait(1));

	// Слой 8
	this.instance_5 = new lib.Spridwte29();
	this.instance_5.setTransform(335.7,155,0.997,0.997,-59.1,0,0,56.1,35.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(208).to({_off:false},0).to({regY:35.5,rotation:-44.1,x:183.6,y:56},56).to({scaleX:0.82,scaleY:0.82,alpha:0},5).to({_off:true},1).wait(159));

	// Слой 7
	this.instance_6 = new lib.text();
	this.instance_6.setTransform(-89.6,233.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).to({x:165.3},6).to({x:150.3},2).wait(210).to({alpha:0},10).wait(1));

	// Слой 4
	this.instance_7 = new lib.Символ4();
	this.instance_7.setTransform(151.3,124.4,2.273,2.273,0,0,0,110,21.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Символ4копия();
	this.instance_8.setTransform(150,113.9,0.168,0.168,0,0,0,110,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},134).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},48).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_7}]},218).to({state:[{t:this.instance_7}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(134).to({_off:false},0).to({scaleX:0.94,scaleY:0.94,alpha:1},7).to({scaleX:1,scaleY:1},2).wait(48).to({scaleX:1.15,scaleY:1.15},2).to({_off:true,regY:21.4,scaleX:0.17,scaleY:0.17,x:150,y:113.9},7).wait(218).to({_off:false},0).to({alpha:0},10).wait(1));

	// Слой 3
	this.instance_9 = new lib.Символ3();
	this.instance_9.setTransform(151,64.4,0.306,1,0,0,0,36,27.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Символ3копия();
	this.instance_10.setTransform(149.7,104.4,0.194,0.194,0,0,0,36,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},128).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},52).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_9}]},221).to({state:[{t:this.instance_9}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(128).to({_off:false},0).to({scaleX:1,alpha:1},9).wait(52).to({scaleX:1.19,scaleY:1.19},2).to({_off:true,scaleX:0.19,scaleY:0.19,x:149.7,y:104.4},6).wait(221).to({_off:false},0).to({alpha:0},10).wait(1));

	// Слой 17
	this.instance_11 = new lib.Символ9();
	this.instance_11.setTransform(148.7,66.8,0.423,0.423,0,0,0,27.8,27.8);
	this.instance_11._off = true;
	this.instance_11.filters = [new cjs.BlurFilter(20, 20, 3)];
	this.instance_11.cache(-2,-2,60,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(122).to({_off:false},0).to({scaleX:2.86,scaleY:2.86,x:148.8,y:67},8).to({alpha:0},4).to({_off:true},1).wait(294));

	// Слой 5
	this.instance_12 = new lib.bottle_1();
	this.instance_12.setTransform(150,-153.1,1.51,1.51,0,0,0,0,187.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(183).to({_off:false},0).to({regY:187.5,scaleX:0.53,scaleY:0.53,y:144.8},11).to({scaleX:0.6,scaleY:0.6,y:133.8},4).wait(220).to({alpha:0},10).wait(1));

	// Слой 6
	this.instance_13 = new lib.waves_1();
	this.instance_13.setTransform(151.3,203);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(200).to({_off:false},0).wait(218).to({alpha:0},10).wait(1));

	// Слой 16
	this.instance_14 = new lib.eeeSprite30();
	this.instance_14.setTransform(144,316,1,1,-30,0,0,-152.2,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(429));

	// Слой 1
	this.instance_15 = new lib.Символ2();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(429));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.4,-238.3,554.9,746.6);


// stage content:



(lib.Turan_250x2502x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAnEgnDMAAABOHMhOHAAAMAAAhOHg");
	this.shape.setTransform(250,250);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ1();
	this.instance.setTransform(250.9,250.1,1.995,1.995,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.5,-224.6,1106.8,1489.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;