class RubikPiece()
{

	constructor(color1, color2, color3, color4, color5, color6)
	{
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.color4 = color4;
		this.color5 = color5;
		this.color6 = color6;
		this.colateralPiece = [];
	}
	
	add(e)
	{
		this.colateralPiece.push(e);
	}

	remove(e)
	{
		this.colateralPiece.remove(e);
	}

	getColateralPiece()
	{
		return this.colateralPiece;
	}

	toString()
	{
		return(`color1: ${this.color1} color2: ${this.color2} color3: ${this.color3}`);
	}
}


var colors = ["white", "blue", "orange", "red", "green", "yellow"];

var pieza = [];


