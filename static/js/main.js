/**
 * Define the Grid object
 * @type {HT.Grid}
 */
var grid = null;

/**
 * Define the Actions Grid object
 * @type {HT.Grid}
 */
var gridActions = null;

/**
 * Initialize the project grids (canvas)
 */
function initGrids()
{
    initHex();

    // define field grid dimentions
    var w = $("#cBg").width(),
        h = $("#cBg").height();
    grid = new HT.Grid(w, h);

    // define field grid dimentions
    var w = $("#cAct").width(),
        h = $("#cAct").height();
    gridActions = new HT.Grid(w, h);
}

/**
 * Draw hexagons in canvas element
 * @param {string} canvasId ID of the canvas element
 */
function drawHexGrid(canvasId)
{
    // define grid dimentions
    var w = $("#"+canvasId).width(),
        h = $("#"+canvasId).height();

    // get canvas object
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext('2d');

    // draw hex grid
    ctx.clearRect(0, 0, w, h);
    for(var hex in grid.Hexes) {
        grid.Hexes[hex].draw(ctx);
    }
}

/**
 * Initialize hexagon parameters
 */
function initHex()
{
    var z = 50; // parseFloat(document.getElementById("sideLength").value);
    var r = 1.1547005383792515290182975610039; // parseFloat(document.getElementById("whRatio").value);

    //solve quadratic
    var r2 = Math.pow(r, 2);
    var a = (1 + r2)/r2;
    var b = z/r2;
    var c = ((1-4.0*r2)/(4.0*r2)) * (Math.pow(z, 2));

    var x = (-b + Math.sqrt(Math.pow(b,2)-(4.0*a*c)))/(2.0*a);

    var y = ((2.0 * x) + z)/(2.0 * r);

    var width = ((2.0*x)+z);
    var height = (2.0*y);

    HT.Hexagon.Static.WIDTH = width;
    HT.Hexagon.Static.HEIGHT = height;
    HT.Hexagon.Static.SIDE = z;
}

/////////////////////////////////////////

function findHexWithWidthAndHeight()
{
	var width = parseFloat(document.getElementById("hexWidth").value);
	var height = parseFloat(document.getElementById("hexHeight").value);


	var y = height/2.0;

	//solve quadratic
	var a = -3.0;
	var b = (-2.0 * width);
	var c = (Math.pow(width, 2)) + (Math.pow(height, 2));

	var z = (-b - Math.sqrt(Math.pow(b,2)-(4.0*a*c)))/(2.0*a);

	var x = (width - z)/2.0;

	var contentDiv = document.getElementById("hexStatus");

	contentDiv.innerHTML = "Values for Hex: <br /><b>Width:</b> " + width + "<br /><b>Height: </b>" + height +
		"<br /><b>Side Length, z:</b> " + z + "<br /><b>x:</b> " + x + "<br /><b>y:</b> " + y;

	HT.Hexagon.Static.WIDTH = width;
	HT.Hexagon.Static.HEIGHT = height;
	HT.Hexagon.Static.SIDE = z;
}

function getHexGridWH()
{
    findHexWithWidthAndHeight();
    drawHexGrid();
}

function changeOrientation()
{
    if(document.getElementById("hexOrientationNormal").checked) {
        HT.Hexagon.Static.ORIENTATION = HT.Hexagon.Orientation.Normal;
    } else {
        HT.Hexagon.Static.ORIENTATION = HT.Hexagon.Orientation.Rotated;
    }
    drawHexGrid();
}

function debugHexZR()
{
	initHex();
	addHexToCanvasAndDraw(20, 20);
}

function debugHexWH()
{
	findHexWithWidthAndHeight();
	addHexToCanvasAndDraw(20, 20);
}

function addHexToCanvasAndDraw(x, y)
{
	HT.Hexagon.Static.DRAWSTATS = true;
	var hex = new HT.Hexagon(null, x, y);

	var canvas = document.getElementById("hexCanvas");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 800, 600);
	hex.draw(ctx);
}