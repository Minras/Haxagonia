/**
 * Hexagon Tools
 * Inspired by Matt Palmerlee HT lib
 */
var HT = HT || {};

/**
 * A Point is simply x and y coordinates
 * @constructor
 */
HT.Point = function(x, y) {
	this.x = x;
	this.y = y;
};

HT.Defaults = {
    HEXAGON_WIDTH: 91.14378277661477,
    HEXAGON_HEIGHT: 91.14378277661477,
    HEXAGON_SIDE: 50.0
};

/**
 * Hexagon object
 * A Hexagon is a 6 sided polygon, our hexes don't have to be symmetrical, i.e. ratio of width to height could be 4 to 3
 * @constructor
 * @todo Move points calculation to a separate method
 * @todo Attributes description
 */
HT.Hexagon = function(id, x, y) {
	this.points = [];//Polygon Base
	var x1 = null,
        y1 = null,
        config = HT.Hexagon.Config;

	if(config.ORIENTATION == HT.Hexagon.Orientation.NORMAL) {
		x1 = (HT.Hexagon.Config.WIDTH - config.SIDE)/2;
		y1 = (config.HEIGHT / 2);
		this.Points.push(new HT.Point(x1 + x, y));
		this.Points.push(new HT.Point(x1 + config.SIDE + x, y));
		this.Points.push(new HT.Point(config.WIDTH + x, y1 + y));
		this.Points.push(new HT.Point(x1 + config.SIDE + x, config.HEIGHT + y));
		this.Points.push(new HT.Point(x1 + x, config.HEIGHT + y));
		this.Points.push(new HT.Point(x, y1 + y));
	} else {
		x1 = (config.WIDTH / 2);
		y1 = (config.HEIGHT - config.SIDE)/2;
		this.Points.push(new HT.Point(x1 + x, y));
		this.Points.push(new HT.Point(config.WIDTH + x, y1 + y));
		this.Points.push(new HT.Point(config.WIDTH + x, y1 + config.SIDE + y));
		this.Points.push(new HT.Point(x1 + x, config.HEIGHT + y));
		this.Points.push(new HT.Point(x, y1 + config.SIDE + y));
		this.Points.push(new HT.Point(x, y1 + y));
	}

	this.id = id;

	this.x = x;
	this.y = y;
	this.x1 = x1;
	this.y1 = y1;

	this.topLeftPoint = new HT.Point(this.x, this.y);
	this.bottomRightPoint = new HT.Point(this.x + config.WIDTH, this.y + config.HEIGHT);
	this.midPoint = new HT.Point(this.x + (config.WIDTH / 2), this.y + (config.HEIGHT / 2));

	this.p1 = new HT.Point(x + x1, y + y1);

	this.selected = false;
};

HT.Hexagon.Orientation = {
	NORMAL: 0,
	ROTATED: 1
};

//hexagons will have 25 unit sides for now
HT.Hexagon.Config = {
    HEIGHT: HT.Defaults.HEXAGON_WIDTH,
    WIDTH: HT.Defaults.HEXAGON_HEIGHT,
    SIDE: HT.Defaults.HEXAGON_SIDE,
    ORIENTATION: HT.Hexagon.Orientation.NORMAL,
    DRAWSTATS: false
};