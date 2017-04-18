class CuboRubik4
{
	constructor()
	{
		this.numeroNodos = 4;

		this.nodo = new Array(2);

		for (var i = 0; i < 2; i++) {
			this.nodo[i] = new Array(2);
			for (var j = 0; j < 2; j++) {
				this.nodo[i][j] = new Array(2);
			}
		}
	}
}

class CuboRubik6Caras
{
	constructor()
	{
		this.numeroCaras = 6;

		this.cara	= new Array(6);

		for (var i = 0; i < this.numeroCaras; i++) 
		{
			this.cara[i] = new Array(3);
			for (var j = 0; j < 3; j++) 
			{
				this.cara[i][j] = new Array(3);
			}
		}

		for (var j = 0; j < 3; j++) 
		{
			for(var h = 0; h < 3; h++) 
			{
				this.cara[0][j][h] = "white";
				this.cara[1][j][h] = "blue";
				this.cara[2][j][h] = "red";
				this.cara[3][j][h] = "yellow";
				this.cara[4][j][h] = "green";
				this.cara[5][j][h] = "orange";
			}
		}
	}

	mostarCubo()
	{
		var dimensiones = 30;

		this.dibujarCara(0, 100, 100, dimensiones);
		this.dibujarCara(1, 100,  10, dimensiones);
		this.dibujarCara(2, 190, 100, dimensiones);
		this.dibujarCara(3,  10, 100, dimensiones);
		this.dibujarCara(4, 100, 190, dimensiones);
		this.dibujarCara(5, 100, 280, dimensiones);	
		this.dibujarMargenes();	
				
	}

	dibujarCara(nCara, x0, y0, dimensiones)
	{	
		var x1   = x0;
		var y1   = y0;
		var x2 	 = x1 + dimensiones;
		var y2   = y1;

		for (var j = 0; j < 3; j++) 
		{
			for (var h = 0; h < 3; h++) 
			{
				for (var contadorLinea = 0; contadorLinea < 30; contadorLinea++) 
				{
					this.dibujarLinea(this.cara[nCara][j][h], x1, y1 + contadorLinea, x2, y2 + contadorLinea);
				}
				//Dibujamos el contornodel cuadrado
				this.dibujarLinea("black", x1, 			 y1, 			   				 	 x2,			   y2);
				this.dibujarLinea("black", x2, 			 y2, 			   	   x1 + dimensiones, y1 + dimensiones);
				this.dibujarLinea("black", x1 + dimensiones, y1 + dimensiones, x2 - dimensiones, y2 + dimensiones);
				this.dibujarLinea("black", x2 - dimensiones, y2 + dimensiones, 				 x1,			   y1);

				x1 = x1; 
				y1 = y1 + dimensiones; 
				x2 = x2; 
				y2 = y2 + dimensiones;		
			}
			x1 = x1 + dimensiones;
			y1 = y0;
			x2 = x2 + dimensiones;
			y2 = y0;	
		}
	}

	dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
	{
		var d = document.getElementById("area_dibujo");
		var lienzo = d.getContext("2d");

		lienzo.beginPath();
		lienzo.lineWidth = 3;
		lienzo.strokeStyle = color;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}

	dibujarMargenes()
	{
		var m = document.getElementById("area_dibujo");
		var colorcito = "black"

		this.dibujarLinea(colorcito,1,1,1,m.height);
		this.dibujarLinea(colorcito,m.width,1,m.width,m.height);
		this.dibujarLinea(colorcito,1,1,m.width,1);
		this.dibujarLinea(colorcito,1,m.height,m.width,m.height);
	}

	moverFilaArriba(nFila)
	{
		var j = nFila;
		var aux;

		for (var h = 0; h < 3; h++) 
		{
			aux 				= this.cara[1][j][h];
			this.cara[1][j][h] 	= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[4][j][h];
			this.cara[4][j][h] 	= this.cara[5][j][h]; 
			this.cara[5][j][h] 	= aux;							
		}

		if(j == 2)
		{
			this.rotarCara(2,"right");
		} 
		else if(j == 0)
		{
			this.rotarCara(3,"left");
		}
	}

	moverFilaAbajo(nFila)
	{
		var j = nFila;
		var aux;

		for (var h = 0; h < 3; h++) 
		{
			aux 				= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[4][j][h];
			this.cara[4][j][h] 	= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[1][j][h]; 
			this.cara[1][j][h] 	= aux;							
		}

		if(j == 2)
		{
			this.rotarCara(2,"left");
		} 
		else if(j == 0)
		{
			this.rotarCara(3,"right");
		}
	}


	rotarCentroDerecha()
	{
		var h = 0;
		var h1 = 2;
		var j2 = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				 = this.cara[4][j][h];
			this.cara[4][j][h] 	 = this.cara[2][h][j2];
			this.cara[2][h][j2]  = this.cara[1][j2][h1];
			this.cara[1][j2][h1] = this.cara[3][h1][j]; 
			this.cara[3][h1][j]  = aux;	

			j2 = j2 - 1;						
		}

		this.rotarCara(0, "right");
	}

	rotarMedioDerecha()
	{
		var j  = 1;
		var j2 = 2;
		var aux;

		for (var h = 0; h < 3; h++) 
		{
			aux 			    = this.cara[1][j2][j];
			this.cara[1][j2][j] = this.cara[3][j][h];
			this.cara[3][j][h]  = this.cara[4][h][j] 
			this.cara[4][h][j]  = this.cara[2][j][j2];
			this.cara[2][j][j2] = aux;

			j2 = j2 - 1;
		}
	}

	rotarExteriorDerecha()
	{
		
	}

	rotarCentroIzquierda()
	{
		var h = 0;
		var h1 = 2;
		var j2 = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				 = this.cara[2][h][j2];
			this.cara[2][h][j2]  = this.cara[4][j][h];
			this.cara[4][j][h]   = this.cara[3][h1][j];
			this.cara[3][h1][j]  = this.cara[1][j2][h1]; 
			this.cara[1][j2][h1] = aux;	

			j2 = j2 - 1;						
		}

		this.rotarCara(0, "left");
	}

	rotarMedioIzquierda()
	{
		var j  = 1;
		var j2 = 2;
		var aux;

		for (var h = 0; h < 3; h++) 
		{
			aux 			    = this.cara[2][j][j2];
			this.cara[2][j][j2] = this.cara[4][h][j];
			this.cara[4][h][j]  = this.cara[3][j][h];
			this.cara[3][j][h]  = this.cara[1][j2][j];
			this.cara[1][j2][j] = aux;

			j2 = j2 - 1;
		}
	}


//---------------------------------VOY POR AQUÍ TENGO QUE HACER
	rotarExteriorIzquierda()
	{

	}



	moverFilaDerecha()
	{
		var h = 1;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[3][j][h];
			this.cara[3][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[2][j][h]; 
			this.cara[2][j][h] 	= aux;							
		}
	}

	moverFilaIzquierda()
	{
		var h = 1;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[2][j][h];
			this.cara[2][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[3][j][h]; 
			this.cara[3][j][h] 	= aux;							
		}
	}

	moverFilaDerecha9()
	{
		var h = 0;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[3][j][h];
			this.cara[3][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[2][j][h]; 
			this.cara[2][j][h] 	= aux;							
		}
	}

	moverFilaIzquierda7()
	{
		var h = 0;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[2][j][h];
			this.cara[2][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[3][j][h]; 
			this.cara[3][j][h] 	= aux;							
		}
	}

	moverFilaDerecha3()
	{
		var h = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[3][j][h];
			this.cara[3][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[2][j][h]; 
			this.cara[2][j][h] 	= aux;							
		}
	}

	moverFilaIzquierda1()
	{
		var h = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				= this.cara[0][j][h];
			this.cara[0][j][h] 	= this.cara[2][j][h];
			this.cara[2][j][h] 	= this.cara[5][j][h];
			this.cara[5][j][h] 	= this.cara[3][j][h]; 
			this.cara[3][j][h] 	= aux;							
		}
	}

	rotarCara(numCara, opcion)
	{
		var h = 0;
		var h1 = 2;
		var j2 = 2;
		var aux;

		if(opcion == "left")
		{
				aux 				 		= this.cara[numCara][2][0];
				this.cara[numCara][2][0] 	= this.cara[numCara][2][2];
				this.cara[numCara][2][2] 	= this.cara[numCara][0][2];
				this.cara[numCara][0][2]	= this.cara[numCara][0][0]; 
				this.cara[numCara][0][0]	= aux;
				aux 				 		= this.cara[numCara][1][0];
				this.cara[numCara][1][0] 	= this.cara[numCara][2][1];
				this.cara[numCara][2][1] 	= this.cara[numCara][1][2];
				this.cara[numCara][1][2]	= this.cara[numCara][0][1]; 
				this.cara[numCara][0][1]	= aux;
		}
		else if(opcion == "right")
		{
				aux 				 		= this.cara[numCara][2][0];
				this.cara[numCara][2][0] 	= this.cara[numCara][0][0];
				this.cara[numCara][0][0]   	= this.cara[numCara][0][2];
				this.cara[numCara][0][2]  	= this.cara[numCara][2][2]; 
				this.cara[numCara][2][2] 	= aux;
				aux 				 		= this.cara[numCara][1][0];
				this.cara[numCara][1][0] 	= this.cara[numCara][0][1];
				this.cara[numCara][0][1]   	= this.cara[numCara][1][2];
				this.cara[numCara][1][2]  	= this.cara[numCara][2][1]; 
				this.cara[numCara][2][1] 	= aux;
		}
	}

	verificarCubo()
	{
		for (var i = 0; i < 6; i++) 
		{
			for (var j = 0; j < 3; j++) 
			{
				for (var h = 0; h < 3; h++) 
				{
					console.log(this.cara[i][j][h]);
				}
			}
		}

	}
}

var teclas = {
	UP: 	38,
	DOWN: 	40,
	LEFT: 	37,
	RIGHT: 	39,
	D: 		68, 
	I: 		73,
	UNO:    97,
	DOS: 	98,
	TRES:   99,
	CUATRO: 100,
	CINCO:  101,
	SEIS: 	102,
	SIETE:  103, 
	OCHO: 	104,
	NUEVE:  105
};

var cubo1 = new CuboRubik6Caras();
cubo1.mostarCubo();

var eje_x 	= document.getElementById("eje_x");
var eje_y 	= document.getElementById("eje_y");
var eje_z 	= document.getElementById("eje_z");
var nivel_1 = document.getElementById("nivel_1");
var nivel_2 = document.getElementById("nivel_2");
var nivel_3 = document.getElementById("nivel_3");
var boton 	= document.getElementById("botonRotarAr");
var boton2 	= document.getElementById("botonRotarAb");



document.addEventListener("keyup",dibujarTeclado);
boton.addEventListener("click", moverCuboArriba);
boton2.addEventListener("click", moverCuboAbajo);

function moverCuboArriba()
{
//	console.log(eje_x.value,eje_y.value,eje_z.value,nivel_1.value);	
	if (eje_x.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.moverFilaArriba(0);
		}
		else if(nivel_2.value == "true")
		{
			cubo1.moverFilaArriba(1);
		}
		else if(nivel_3.value == "true")
		{
			cubo1.moverFilaArriba(2);
		}
	}
	else if (eje_y.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.rotarCentroDerecha();
		}
		else if(nivel_2.value == "true")
		{
			cubo1.rotarMedioDerecha();
		}
		else if(nivel_3.value == "true")
		{
			
		}
	}
	else if (eje_z.value == "true")
	{
		if (nivel_1.value == "true")
		{

		}
		else if(nivel_2.value == "true")
		{

		}
		else if(nivel_3.value == "true")
		{
			
		}
	}

	cubo1.mostarCubo();
}

function moverCuboAbajo()
{
	if (eje_x.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.moverFilaAbajo(0);
		}
		else if(nivel_2.value == "true")
		{
			cubo1.moverFilaAbajo(1);
		}
		else if(nivel_3.value == "true")
		{
			cubo1.moverFilaAbajo(2);
		}
	}
	else if (eje_y.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.rotarCentroIzquierda();
		}
		else if(nivel_2.value == "true")
		{
			cubo1.rotarMedioIzquierda();
		}
		else if(nivel_3.value == "true")
		{
			
		}
	}
	else if (eje_z.value == "true")
	{
		if (nivel_1.value == "true")
		{
			
		}
		else if(nivel_2.value == "true")
		{

		}
		else if(nivel_3.value == "true")
		{
			
		}
	}

	cubo1.mostarCubo();
}

function dibujarTeclado(evento)
{	
	switch(evento.keyCode)
	{
		case teclas.UP:
			cubo1.moverFilaArriba();			
		break;
		case teclas.DOWN:
			cubo1.moverFilaAbajo();		
		break;
		case teclas.UP:
			cubo1.moverFilaArribaIzquirda();			
		break;
		case teclas.DOWN:
			cubo1.moverFilaArribaDerecha();		
		break;
		case teclas.RIGHT:
			cubo1.rotarFilaDerecha(1);
		break;
		case teclas.LEFT:
			cubo1.rotarFilaIzquierda(1);	
		break;
		case teclas.SEIS:
			cubo1.moverFilaDerecha(1);	
		break;
		case teclas.CUATRO:
			cubo1.moverFilaIzquierda(1);	
		break;
		case teclas.D:
			cubo1.rotarCentroDerecha();
		break;
		case teclas.I:
			cubo1.rotarCentroIzquierda();
		break;
		case teclas.NUEVE:
			cubo1.moverFilaDerecha9();
		break;
		case teclas.SIETE:
			cubo1.moverFilaIzquierda7();
		break;
		case teclas.TRES:
			cubo1.moverFilaDerecha3();
		break;
		case teclas.UNO:
			cubo1.moverFilaIzquierda1();
		break;
		default:
			console.log(evento.keyCode);
		break;
	}
	
	cubo1.mostarCubo();
}

function check(identificador)
{
	switch(identificador)
	{
		case "eje_x":
			eje_x.value = true;
			eje_y.value = false;
			eje_z.value = false;
		break;
		case "eje_y":
			eje_y.value = true;
			eje_x.value = false;
			eje_z.value = false;
		break;
		case "eje_z":
			eje_z.value = true;
			eje_y.value = false;
			eje_x.value = false;
		break;
	}

	switch(identificador)
	{
		case "nivel_1":
			nivel_1.value = true;
			nivel_2.value = false;
			nivel_3.value = false;
		break;
		case "nivel_2":
			nivel_1.value = false;
			nivel_2.value = true;
			nivel_3.value = false;
		break;
		case "nivel_3":
			nivel_1.value = false;
			nivel_2.value = false;
			nivel_3.value = true;
		break;
	}
}	










