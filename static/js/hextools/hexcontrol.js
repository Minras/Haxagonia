function drawHexGrid()
{
	var grid = new HT.Grid(800, 600);
	var canvas = document.getElementById("hexCanvas");
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 800, 600);
	for(var h in grid.Hexes)
	{
		grid.Hexes[h].draw(ctx);
	}
}

