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
				this.cara[3][j][h] = "orange";
				this.cara[4][j][h] = "green";
				this.cara[5][j][h] = "yellow";
			}
		}
	}

	buscarCentroEnCubo(color1){

		for (var i = 0; i < this.numeroCaras; i++) 
		{
			if(this.cara[i][1][1] == color1)
			{
				return i;
			}
		}

		return -1;
	}

	buscarAristaEnCubo(color1, color2)
	{
		// cara 0
		if(this.cara[0][0][1] == color1 && this.cara[3][2][1] == color2)
		{
			return [0, 0, 1];
		}

		if(this.cara[0][1][0] == color1 && this.cara[1][1][2] == color2)
		{
			return [0, 1, 0];
		}

		if(this.cara[0][2][1] == color1 && this.cara[2][0][1] == color2)
		{
			return [0, 2 , 1];
		}
		
		if(this.cara[0][1][2] == color1 && this.cara[4][1][0] == color2)
		{
			return [0, 1, 2];
		}

		// cara 1
		if(this.cara[1][0][1] == color1 && this.cara[3][1][0] == color2)
		{
			return [1, 0, 1];
		}

		if(this.cara[1][1][0] == color1 && this.cara[5][1][2] == color2)
		{
			return [1, 1, 0];
		}

		if(this.cara[1][2][1] == color1 && this.cara[2][1][0] == color2)
		{
			return [1, 2 , 1];
		}
		
		if(this.cara[1][1][2] == color1 && this.cara[0][1][0] == color2)
		{
			return [1, 1, 2];
		}

		//cara 2
		if(this.cara[2][0][1] == color1 && this.cara[0][2][1] == color2)
		{
			return [2, 0, 1];
		}

		if(this.cara[2][1][0] == color1 && this.cara[1][2][1] == color2)
		{
			return [2, 1, 0];
		}

		if(this.cara[2][2][1] == color1 && this.cara[5][2][1] == color2)
		{
			return [2, 2, 1];
		}
		
		if(this.cara[2][1][2] == color1 && this.cara[4][2][1] == color2)
		{
			return [2, 1, 2];
		}

		//cara 3
		if(this.cara[3][0][1] == color1 && this.cara[5][0][1] == color2)
		{
			return [3, 0, 1];
		}

		if(this.cara[3][1][0] == color1 && this.cara[1][0][1] == color2)
		{
			return [3, 1, 0];
		}

		if(this.cara[3][2][1] == color1 && this.cara[0][0][1] == color2)
		{
			return [3, 2, 1];
		}
		
		if(this.cara[3][1][2] == color1 && this.cara[4][0][1] == color2)
		{
			return [3, 1, 2];
		}

		//cara 4
		if(this.cara[4][0][1] == color1 && this.cara[3][1][2] == color2)
		{
			return [4, 0, 1];
		}

		if(this.cara[4][1][0] == color1 && this.cara[0][1][2] == color2)
		{
			return [4, 1, 0];
		}

		if(this.cara[4][2][1] == color1 && this.cara[2][1][2] == color2)
		{
			return [4, 2, 1];
		}
		
		if(this.cara[4][1][2] == color1 && this.cara[5][1][0] == color2)
		{
			return [4, 1, 2];
		}

		//cara 5
		if(this.cara[5][0][1] == color1 && this.cara[3][0][1] == color2)
		{
			return [5, 0, 1];
		}

		if(this.cara[5][1][0] == color1 && this.cara[4][1][2] == color2)
		{
			return [5, 1, 0];
		}

		if(this.cara[5][2][1] == color1 && this.cara[2][2][1] == color2)
		{
			return [5, 2, 1];
		}
		
		if(this.cara[5][1][2] == color1 && this.cara[1][1][0] == color2)
		{
			return [5, 1, 2];
		}
		
		return -1;
	}

	buscarVerticeCubo(color1, color2, color3){

	}

	mostrarCubo()
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

	dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, grosor)
	{
		var d = document.getElementById("area_dibujo");
		var lienzo = d.getContext("2d");

		lienzo.beginPath();
		lienzo.lineWidth = grosor;
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
//------------------------------- EJE X -----------------------------
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
//------------------------------- EJE Y -----------------------------
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
		var h = 2;
		var h1 = 0;
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

		this.rotarCara(5, "left");
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

	rotarExteriorIzquierda()
	{
		var h = 2;
		var h1 = 0;
		var j2 = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				 = this.cara[1][j2][h1];
			this.cara[1][j2][h1] = this.cara[2][h][j2];
			this.cara[2][h][j2]  = this.cara[4][j][h];
			this.cara[4][j][h] 	 = this.cara[3][h1][j]; 
			this.cara[3][h1][j]  = aux;	

			j2 = j2 - 1;						
		}

		this.rotarCara(5, "right");
	}
//------------------------------- EJE Z -----------------------------
	moverAlasDerecha(nFila)
	{
		var h = nFila;
		var h2 = 2 - h;
		var j2 = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				 = this.cara[0][j][h];
			this.cara[0][j][h] 	 = this.cara[3][j][h];
			this.cara[3][j][h] 	 = this.cara[5][j2][h2];
			this.cara[5][j2][h2] = this.cara[2][j][h]; 
			this.cara[2][j][h] 	 = aux;

			j2 = j2 - 1;							
		}

		if(nFila == 0)
		{
			this.rotarCara(1, "left");
		}
		else if (nFila == 2)
		{
			this.rotarCara(4, "right");
		}
	}

	moverAlasIzquierda(nFila)
	{
		var h = nFila;
		var h2 = 2 - h;
		var j2 = 2;
		var aux;

		for (var j = 0; j < 3; j++) 
		{
			aux 				 = this.cara[0][j][h];
			this.cara[0][j][h] 	 = this.cara[2][j][h];
			this.cara[2][j][h] 	 = this.cara[5][j2][h2];
			this.cara[5][j2][h2] = this.cara[3][j][h]; 
			this.cara[3][j][h] 	 = aux;

			j2 = j2 -1;							
		}

		if(nFila == 0)
		{
			this.rotarCara(1, "right");
		}
		else if (nFila == 2)
		{
			this.rotarCara(4, "left");
		}
	}

// --------------------------------------------------------------
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

	removerCubo(iteraciones)
	{
		var max = 8;
		var min = 0;
		var x;

		for (var i = 0; i < iteraciones; i++) 
		{
			x = Math.round(Math.random() * (max - min)) + min;
			switch(x)
			{
				case 0:
					this.moverFilaArriba(0);
				break;
				case 1:
					this.moverFilaArriba(1);
				break;
				case 2:
					this.moverFilaArriba(2);
				break;
				case 3:
					this.rotarCentroDerecha();
				break;
				case 4:
					this.rotarMedioDerecha();
				break;
				case 5:
					this.rotarExteriorDerecha();
				break;
				case 6:
					this.moverAlasDerecha(0);
				break;
				case 7:
					this.moverAlasDerecha(1);
				break;
				case 8:
					this.moverAlasDerecha(2);
				break;
			}	
		}
	}

	resuelto()
	{	
		// Cubo entero resuelto
		for (var i = 0; i < 6; i++) 
		{
			for (var j = 0; j < 3; j++) 
			{
				for (var h = 0; h < 3; h++) 
				{
					if (this.cara[i][0][0] != this.cara[i][j][h])
					{	
					 	return false;
					}
				}
			}
		}

		return true;
	}

	resolverCubo()
	{
		var intentos = 0;
		
		if (this.resuelto())
		{
			alert("Ya esta resuelto ¬¬");
		}
		else
		{
		//	alert("¡Voy a resolver el cubo!");
			
			while(!this.resuelto() && intentos < 100)
			{
				intentos += 1;

				if(intentos % 3 == 0)
				{
					this.removerCubo();
				}

				console.log(`intento nº ${intentos}`)

				// Paso 1 cruz superior
				this.paso1();

				// Paso 2 Esquinas Blancas
				this.paso2();		
			
				// Paso 3 completar fila central
				this.paso3();

				// Paso 4 completar cruz amarilla
				this.paso4();

				// Paso 5 extender la cruz 
				this.paso5();

				// Paso 6 orientar los últimos vertices
				this.paso6();

				// Paso 7 resolver cubo

			}
			
		}

		this.mostrarCubo();
		this.mostrarCubo();
	}

	paso1()
	{
		if(this.cara[0][1][1] == "white")
		{
			this.montarcruzBlanca();
		}
		else
		{
			this.centrarCaraBlanca();
			this.montarcruzBlanca();
		}
	}

	centrarCaraBlanca()
	{
		var i;

		for (i = 1; this.cara[i][1][1] != "white"; i++) {
		}
		console.log(`El centro blanco esta en la cara ${i}, voy a posicionarla en el centro`);
		switch(i)
		{
			case 1:
				this.moverFilaAbajo(1);
			break;
			case 2:
				this.moverAlasIzquierda(1);
			break;
			case 3:
				this.moverAlasDerecha(1);
			break;
			case 4:
				this.moverFilaArriba(1);
			break;
			case 5:
				this.moverFilaArriba(1);
				this.moverFilaArriba(1);
			break;
		}
	}

	montarcruzBlanca()
	{
		//cruz inversa
		var enQueCara, aristaX, aristaY;
		var encontreAristaBlanca = false;

		for (var i = 0; i < 4; i++) 
		{
			if(this.cara[5][0][1] == "white")
			{	
				this.rotarExteriorDerecha();
			}
			if(!this.cruzCompleta(5,"white"))
			{
				this.moverFilaAbajo(0);
			}
		}

		this.rotarExteriorDerecha();

		for (var i = 0; i < 4; i++) 
		{
			if(this.cara[5][1][2] == "white")
			{	
				this.rotarExteriorDerecha();
			}
			if(!this.cruzCompleta(5,"white"))
			{
				this.moverAlasDerecha(0);
			}
		}

		this.rotarExteriorDerecha();

		for (var i = 0; i < 4; i++) 
		{
			if(this.cara[5][2][1] == "white")
			{	
				this.rotarExteriorDerecha();
			}
			if(!this.cruzCompleta(5,"white"))
			{
				this.moverFilaArriba(2);	
			}
		}

		this.rotarExteriorDerecha();

		for (var i = 0; i < 4; i++) 
		{
			if(this.cara[5][1][0] == "white")
			{	
				this.rotarExteriorDerecha();
			}
			if(!this.cruzCompleta(5,"white"))
			{
				this.moverAlasDerecha(2);	
			}
		}

		this.rotarExteriorDerecha();

		if(this.cara[5][0][1] == "white")
		{	
			this.rotarExteriorDerecha();
		}
		if(!this.cruzCompleta(5,"white"))
		{
			this.moverFilaAbajo(0);
		}

		this.rotarExteriorDerecha();

		if(this.cara[5][1][2] == "white")
		{	
			this.rotarExteriorDerecha();
		}
		if(!this.cruzCompleta(5,"white"))
		{
			this.moverAlasDerecha(0);
		}

		this.rotarExteriorDerecha();

		if(this.cara[5][2][1] == "white")
		{	
			this.rotarExteriorDerecha();
		}
		if(!this.cruzCompleta(5,"white"))
		{
			this.moverFilaArriba(2);	
		}

		this.rotarExteriorDerecha();

		if(this.cara[5][1][0] == "white")
		{	
			this.rotarExteriorDerecha();
		}
		if(!this.cruzCompleta(5,"white"))
		{
			this.moverAlasDerecha(2);
		}

		if(this.cruzCompleta(5,"white"))
		{	
			this.AliniarCeldasCentrales();

			console.log("¡Cruz completada!");	
		}
		else
		{
			this.montarcruzBlanca();
		}
	}

	cruzCompleta(cara, color)
	{
		if(this.cara[cara][1][0] != color)
		{ 
			return false;
		}
		else
		{	
			if(this.cara[cara][2][1] != color)
			{ 
					return false;
			}
			else
			{
				if(this.cara[cara][1][2] != color)
				{ 
						return false;
				}
				else
				{	
					if(this.cara[cara][0][1] != color)
					{ 
							return false;
					}
					else
					{
						return true
					}
				}
			}
		}
	}

	AliniarCeldasCentrales()
	{
		if(this.cara[2][1][1] == "blue")
		{ 
			this.rotarMedioIzquierda();
		}
		else
		{	
			if(this.cara[3][1][1] == "blue")
			{ 
					
				this.rotarMedioDerecha();
			}
			else
			{
				if(this.cara[4][1][1] == "blue")
				{ 
							
					this.rotarMedioIzquierda();
					this.rotarMedioIzquierda();
				}
			}
		}

		// Crear cruz blanca
		if(this.cara[2][2][1] == "blue")
		{ 
			this.rotarExteriorIzquierda();
		}
		else
		{	
			if(this.cara[3][0][1] == "blue")
			{ 
				this.rotarExteriorDerecha();
			}
			else
			{
				if(this.cara[4][1][2] == "blue")
				{ 
					this.rotarExteriorIzquierda();
					this.rotarExteriorIzquierda();
				}
			}
		}

		this.moverAlasIzquierda(0);
		this.moverAlasIzquierda(0);


		if(this.cara[4][1][2] == "red" && this.cara[5][1][0] == "white")
		{ 
			this.rotarExteriorIzquierda();
		}
		else
		{	
			if(this.cara[1][1][0] == "red" && this.cara[5][1][2] == "white")
			{ 
				this.rotarExteriorDerecha();
			}
			else
			{
				if(this.cara[3][0][1] == "red" && this.cara[5][0][1] == "white")
				{ 
					this.rotarExteriorIzquierda();
					this.rotarExteriorIzquierda();
				}	
			}
		}

		this.moverFilaArriba(2);
		this.moverFilaArriba(2);

		if(this.cara[3][0][1] == "green" && this.cara[5][0][1] == "white")
		{ 
			this.rotarExteriorIzquierda();
		}
		else
		{	
			if(this.cara[2][2][1] == "green" && this.cara[5][2][1] == "white")
			{ 
				this.rotarExteriorDerecha();
			}
			else
			{
				if(this.cara[1][1][0] == "green" && this.cara[5][1][2] == "white")
				{ 
					this.rotarExteriorIzquierda();
					this.rotarExteriorIzquierda();
				}
			}
		}

		this.moverAlasIzquierda(2);
		this.moverAlasIzquierda(2);


		if(this.cara[1][1][0] == "orange" && this.cara[5][1][2] == "white")
		{ 
			this.rotarExteriorIzquierda();
		}
		else
		{	
			if(this.cara[4][1][2] == "orange" && this.cara[5][1][0] == "white")
			{ 
				this.rotarExteriorDerecha();
			}
			else
			{
				if(this.cara[2][2][1] == "orange" && this.cara[5][2][1] == "white")
				{ 
					this.rotarExteriorIzquierda();
					this.rotarExteriorIzquierda();
				}	
			}
		}

		this.moverFilaArriba(0);
		this.moverFilaArriba(0);

	}

	paso2()
	{
		var fusibleBucle = 0;

			fusibleBucle = fusibleBucle + 1;

			for (var i = 0;!this.primeraEsquinaOK() && fusibleBucle < 10000; i++) 
			{
				

				if(i == 5)
				{
					this.rotarExteriorDerecha();
					this.sexyMoveCubo(0);
					this.sexyMoveCubo(1);
					this.sexyMoveCubo(2);
					
					if(fusibleBucle%20 == 0)
					{
						for (var j = 0;!this.primeraEsquinaOK() && j < 6; j++) 
						{
							this.sexyMoveCubo((Math.random() * 2).toFixed(0));
						}
					}

					i = 0;

				} 
				else 
				{
					this.sexyMoveCubo(0);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.segundaEsquinaOK() && fusibleBucle < 20000; i++) 
			{
				if(i == 5)
				{
					this.rotarExteriorDerecha();
					this.sexyMoveCubo(1);
					this.sexyMoveCubo(2);

					if(fusibleBucle%20 == 0)
					{
						for (var j = 0;!this.segundaEsquinaOK() && j < 6; j++) 
						{
							this.sexyMoveCubo((Math.random() * 2).toFixed(0));
						}
					}

					i = 0;
				} 
				else
				{
					this.sexyMoveCubo(1);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.terceraEsquinaOK() && fusibleBucle < 30000; i++) 
			{
				if(i == 5)
				{
					this.rotarExteriorDerecha();
					this.sexyMoveCubo(2);
					i = 0;
				} 
				else
				{
					this.sexyMoveCubo(2);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.cuartaEsquinaOK() && fusibleBucle < 40000; i++) 
			{
				this.sexyMoveCubo(3);
				fusibleBucle = fusibleBucle + 1;
			}
	//	}		
			console.log("Paso 2 ", fusibleBucle);
			fusibleBucle = 0;
	}

	primeraEsquinaOK(){
		return (this.cara[0][0][0] == "white" && this.cara[1][0][2] == "blue" && this.cara[3][2][0] == "orange");
	}

	segundaEsquinaOK(){
		return (this.cara[0][2][0] == "white" && this.cara[1][2][2] == "blue" && this.cara[2][0][0] == "red");
	}

	terceraEsquinaOK(){
		return (this.cara[0][2][2] == "white" && this.cara[4][2][0] == "green" && this.cara[2][0][2] == "red");
	}

	cuartaEsquinaOK(){
		return (this.cara[0][0][2] == "white" && this.cara[4][0][0] == "green" && this.cara[3][2][2] == "orange");
	}

	sexyMoveCubo(esquina)
	{
		if (esquina == 0)
		{
			this.moverFilaArriba(0);
			this.rotarExteriorDerecha();
			this.moverFilaAbajo(0);
			this.rotarExteriorIzquierda();
		}
		else if(esquina == 1)
		{
			this.moverFilaArriba(2);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
		}
		else if(esquina == 2)
		{
			this.moverFilaAbajo(2);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(2);
			this.rotarExteriorDerecha();
		}
		else if(esquina == 3)
		{
			this.moverFilaAbajo(0);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(0);
			this.rotarExteriorIzquierda();
		}
	}

	paso3()
	{

		var fusibleBucle = 0;

		fusibleBucle = fusibleBucle + 1;

			for (var i = 0;!this.aristaAzulOk() && fusibleBucle < 20000; i++) 
			{
				if(i == 3)
				{
					this.rotarExteriorDerecha();

					for (var j = 0;!this.aristaAzulOk() && j < 4; j++) 
					{
						this.moverArista(j);
					}

					if(fusibleBucle%20 == 0)
					{
						for (var j = 0;!this.aristaAzulOk() && j < 4; j++) 
						{
							this.moverArista((Math.random() * 3).toFixed(0));
						}
					}

					i = 0;
				} 
				else 
				{
					this.moverArista(0);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.aristaNaranjaOk() && fusibleBucle < 40000; i++) 
			{
				if(i == 3)
				{
					this.rotarExteriorDerecha();

					for (var j = 1;!this.aristaNaranjaOk() && j < 4; j++) 
					{
						this.moverArista(j);
					}

					if(fusibleBucle%20 == 0)
					{
						for (var j = 0;!this.aristaAzulOk() && j < 4; j++) 
						{
							this.moverArista((Math.random() * (3-1) + 1).toFixed(0));
						}
					}

					i = 0;
				} 
				else
				{
					this.moverArista(1);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.aristaVerdeOk() && fusibleBucle < 60000; i++) 
			{
				if(i == 3)
				{
					this.rotarExteriorDerecha();

					for (var j = 2;!this.aristaVerdeOk() && j < 4; j++) 
					{
						this.moverArista(j);
					}

					if(fusibleBucle%20 == 0)
					{
						for (var j = 0;!this.aristaAzulOk() && j < 4; j++) 
						{
							this.moverArista((Math.random() * (3-2) + 2).toFixed(0));
						}
					}

					i = 0;
				} 
				else
				{
					this.moverArista(2);
				}

				fusibleBucle = fusibleBucle + 1;
			}

			for (var i = 0;!this.aristaRojaOk() && fusibleBucle < 70000; i++) 
			{	
				
					this.moverArista(3);
				
				fusibleBucle = fusibleBucle + 1;
			}
	//	}		
			console.log("Paso 3 ", fusibleBucle);
			fusibleBucle = 0;
	}

	aristaAzulOk()
	{

		if(this.cara[2][1][0] != "red" || this.cara[1][2][1] != "blue")
		{
			return false;
		}

		return true;
	}

	aristaNaranjaOk()
	{

		if(this.cara[1][0][1] != "blue" || this.cara[3][1][0] != "orange")
		{
			return false;
		}

		return true;
	}

	aristaRojaOk()
	{

		if(this.cara[4][2][1] != "green" || this.cara[2][1][2] != "red" )
		{
			return false;
		}

		return true;
	}

	aristaVerdeOk()
	{

		if(this.cara[3][1][2] != "orange" || this.cara[4][0][1] != "green")
		{
			return false;
		}

		return true;
	}

	moverArista(posicion)
	{
		if(posicion == 0)
		{
			this.moverAlasDerecha(0);
			this.rotarExteriorIzquierda();
			this.moverAlasIzquierda(0);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(2);
			this.rotarExteriorDerecha();
			this.moverFilaAbajo(2);
		}
		else if(posicion == 1)
		{
			this.moverFilaArriba(0);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(0);
			this.rotarExteriorIzquierda();
			this.moverAlasIzquierda(0);
			this.rotarExteriorDerecha();
			this.moverAlasDerecha(0);	
		}
		else if(posicion == 2)
		{
			this.moverAlasIzquierda(2);
			this.rotarExteriorIzquierda();
			this.moverAlasDerecha(2);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(0);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(0);
		}
		else if(posicion == 3)
		{
			this.moverFilaAbajo(2);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(2);
			this.rotarExteriorIzquierda();
			this.moverAlasDerecha(2);
			this.rotarExteriorDerecha();
			this.moverAlasIzquierda(2);
		}
	}

	paso4()
	{
		var fusible;

		if(this.cara[5][1][0] == "yellow" && this.cara[5][1][2] == "yellow")
		{	
			this.moverFilaArriba(0);
			this.moverAlasIzquierda(2);
			this.rotarExteriorDerecha();
			this.moverAlasDerecha(2);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(0);

			if(!this.cruzCompleta(5, "yellow"))
			{
				fusible = 0;

				while((this.cara[5][0][1] != "yellow" || this.cara[5][1][0] != "yellow") && fusible < 10)
				{
					this.rotarExteriorIzquierda();
					fusible += 1;
				}

				this.moverFilaAbajo(2);
				this.rotarExteriorDerecha();
				this.moverAlasDerecha(0);
				this.rotarExteriorIzquierda();
				this.moverAlasIzquierda(0);
				this.moverFilaArriba(2);
			}

			console.log("linea1");
		} 
		else if(this.cara[5][0][1] == "yellow" && this.cara[5][2][1] == "yellow")
		{
			this.moverAlasIzquierda(2);
			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(2);
			this.rotarExteriorIzquierda()
			this.moverAlasDerecha(2);
			console.log("linea2");
		}
		else if(this.cara[5][0][1] == "yellow" || this.cara[5][1][0] == "yellow" || this.cara[5][1][2] == "yellow" || this.cara[5][2][1] == "yellow")
		{
			fusible = 0;

			while((this.cara[5][0][1] != "yellow" || this.cara[5][1][0] != "yellow") && fusible < 10)
			{
				this.rotarExteriorIzquierda();
				fusible += 1;
			}

			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
			this.moverAlasDerecha(0);
			this.rotarExteriorIzquierda();
			this.moverAlasIzquierda(0);
			this.moverFilaArriba(2);
			console.log("linea3");
		} 
		else
		{
			this.moverFilaArriba(0);
			this.moverAlasIzquierda(2);
			this.rotarExteriorDerecha();
			this.moverAlasDerecha(2);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(0);

			this.rotarExteriorIzquierda();
			this.rotarExteriorIzquierda();

			fusible = 0;

			while((this.cara[5][0][1] != "yellow" || this.cara[5][1][0] != "yellow") && fusible < 10)
			{
				this.rotarExteriorIzquierda();
				fusible += 1;
			}

			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
			this.moverAlasDerecha(0);
			this.rotarExteriorIzquierda();
			this.moverAlasIzquierda(0);
			this.moverFilaArriba(2);

			console.log("ultima opción");
		}
	}

	paso5()
	{
		this.aliniarCaraVerde();

		if(this.cara[2][2][1] == "orange")
		{
			this.rotarExteriorIzquierda();
			this.extenderCapa();
			this.rotarExteriorIzquierda();
			this.rotarExteriorIzquierda();
		}
		else if(this.cara[1][1][0] == "orange")
		{
			this.rotarExteriorDerecha();
			this.extenderCapa();
			this.rotarExteriorIzquierda();
		}

		if(this.cara[1][1][0] == "red")
		{
			this.extenderCapa();
		}	
	}

	aliniarCaraVerde()
	{
		var i;

		i = this.buscarAristaEnCubo("green", "yellow")[0];

		switch(i)
		{
			case 2:
				this.rotarExteriorDerecha();
			break;
			case 3:
				this.rotarExteriorIzquierda();
			break;
			case 1:
				this.rotarExteriorDerecha();
				this.rotarExteriorDerecha();
			break;
		}
	}

	extenderCapa()
	{
		this.moverFilaArriba(0);
		this.rotarExteriorDerecha();
		this.moverFilaAbajo(0);
		this.rotarExteriorDerecha();
		this.moverFilaArriba(0);
		this.rotarExteriorIzquierda();
		this.rotarExteriorIzquierda();
		this.moverFilaAbajo(0);
		this.rotarExteriorDerecha();
	}

	paso6()
	{
		var fusible = 0;

		while(!this.verticeVerdeNaranjaOk() && fusible < 100)
		{
			this.paso6caso1(1);

			if(fusible == 2)
			{
				this.paso6caso1(0);
			}

			fusible += 1;
		}

		while(!this.verticeRojoVerdeOk() && fusible < 100)
		{
			this.paso6caso1(0);

			fusible += 1;
		}

		console.log("Paso 6: ", fusible);
	}

	verticeVerdeNaranjaOk()
	{
		if(this.cara[5][0][0] == "green" || this.cara[4][0][2] == "green" || this.cara[3][0][2] == "green")
		{
			if(this.cara[5][0][0] == "orange" || this.cara[4][0][2] == "orange" || this.cara[3][0][2] == "orange")
			{
				return true;
			}
		}

		return false;
	}
	
	verticeRojoVerdeOk()
	{
		if(this.cara[5][2][0] == "red" || this.cara[4][2][2] == "red" || this.cara[2][2][2] == "red")
		{
			if(this.cara[5][2][0] == "green" || this.cara[4][2][2] == "green" || this.cara[2][2][2] == "green")
			{
				return true;
			}
		}

		return false;
	}

	verticeNaranjaAzulOk()
	{
		if(this.cara[5][0][2] == "orange" || this.cara[1][0][0] == "orange" || this.cara[3][0][0] == "orange")
		{
			if(this.cara[5][0][2] == "blue" || this.cara[1][0][0] == "blue" || this.cara[3][0][0] == "blue")
			{
				return true;
			}
		}

		return false;
	}

	verticeAzulRojoOk()
	{
		if(this.cara[5][2][2] == "blue" || this.cara[1][2][0] == "blue" || this.cara[2][2][0] == "blue")
		{
			if(this.cara[5][2][2] == "red" || this.cara[1][2][0] == "red" || this.cara[2][2][0] == "red")
			{
				return true;
			}
		}

		return false;
	}

	paso6caso1(opcion)
	{
		if(opcion == 0)
		{
			this.moverFilaAbajo(2);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(0);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(2);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(0);
			this.rotarExteriorDerecha();
		}
		else if(opcion == 1)
		{
			this.moverFilaArriba(0);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(2);
			this.rotarExteriorDerecha();
			this.moverFilaAbajo(0);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
		}

	}

	paso6caso2(opcion)
	{
		if(opcion == 0)
		{
			this.moverFilaAbajo(0);
			this.rotarExteriorDerecha();
			this.moverFilaAbajo(2);
			this.rotarExteriorIzquierda();
			this.moverFilaArriba(0);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(2);
			this.rotarExteriorIzquierda();
		}
		else if(opcion == 1)
		{
			this.moverFilaArriba(2);
			this.rotarExteriorDerecha();
			this.moverFilaArriba(0);
			this.rotarExteriorIzquierda();
			this.moverFilaAbajo(2);
			this.rotarExteriorDerecha();
			this.moverFilaAbajo(0);
			this.rotarExteriorIzquierda();
		}
	}

	paso7()
	{
		var fusible = 0;

		while (!this.caraAmarillaCompleta() && fusible < 100) 
		{
			if(this.cara[5][0][0] == "yellow")
			{
				this.movimientoPaso7();
			}
			else
			{
				var fusible2 = 0;

				while(this.cara[5][0][0] == "yellow" && !this.caraAmarillaCompleta() && fusible2 < 6)
					{
						this.rotarExteriorIzquierda();

						fusible2 += 1;
					}
			}

			fusible += 1;
		}

		this.aliniarCaraVerde();

		console.log("Paso 7: ", fusible);
	}

	caraAmarillaCompleta()
	{
			for (var j = 0; j < 3; j++) 
			{
				for (var h = 0; h < 3; h++) 
				{
					if (this.cara[5][0][0] != this.cara[5][j][h])
					{	
					 	return false;
					}
				}
			}
			
			return true;
	}

	movimientoPaso7()
	{
		this.moverFilaArriba(0);
		this.rotarCentroDerecha();
		this.moverFilaAbajo(0);
		this.rotarCentroIzquierda();
		this.moverFilaArriba(0);
		this.rotarCentroDerecha();
		this.moverFilaAbajo(0);
		this.rotarCentroIzquierda();
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
cubo1.mostrarCubo();

var eje_x 	= document.getElementById("eje_x");
var eje_y 	= document.getElementById("eje_y");
var eje_z 	= document.getElementById("eje_z");
var nivel_1 = document.getElementById("nivel_1");
var nivel_2 = document.getElementById("nivel_2");
var nivel_3 = document.getElementById("nivel_3");
var boton 	= document.getElementById("botonRotarAr");
var boton2 	= document.getElementById("botonRotarAb");
var boton3 	= document.getElementById("botonResolver");
var boton4 	= document.getElementById("botonRemover");
var botonSexyMove = document.getElementById("sexyMove");

boton.addEventListener("click", moverCuboArriba);
boton2.addEventListener("click", moverCuboAbajo);
boton3.addEventListener("click", resolverPuzle);
boton4.addEventListener("click", removerPuzle);
botonSexyMove.addEventListener("click", sexyMove)

function sexyMove()
{
	if(eje_x.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.moverFilaArriba(2);
			cubo1.rotarExteriorIzquierda();
			cubo1.moverFilaAbajo(2);
			cubo1.rotarExteriorDerecha();
		}
		else if(nivel_2.value == "true")
		{
			cubo1.moverAlasDerecha(2);
			cubo1.rotarExteriorIzquierda();
			cubo1.moverAlasIzquierda(2);
			cubo1.rotarExteriorDerecha();
		}
		else if(nivel_3.value == "true")
		{
			cubo1.moverFilaAbajo(0);
			cubo1.rotarExteriorIzquierda(2);
			cubo1.moverFilaArriba(0);
			cubo1.rotarExteriorDerecha(2);
		}
	}
	else
	{
		if(eje_y.value == "true")
		{
			cubo1.moverAlasIzquierda(0);
			cubo1.rotarExteriorIzquierda();
			cubo1.moverAlasDerecha(0);
			cubo1.rotarExteriorDerecha();
		}
		else if (eje_z.value == "true") 
		{
			if (nivel_1.value == "true")
			{
				cubo1.moverAlasDerecha(0);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverAlasIzquierda(0);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverFilaArriba(2);
				cubo1.rotarExteriorDerecha();
				cubo1.moverFilaAbajo(2);
			}
			else if(nivel_2.value == "true")
			{
				cubo1.moverFilaArriba(0);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverFilaAbajo(0);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverAlasIzquierda(0);
				cubo1.rotarExteriorDerecha();
				cubo1.moverAlasDerecha(0);	
			}
			else if(nivel_3.value == "true")
			{
				cubo1.moverAlasIzquierda(2);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverAlasDerecha(2);
				cubo1.rotarExteriorIzquierda();
				cubo1.moverFilaAbajo(0);
				cubo1.rotarExteriorDerecha();
				cubo1.moverFilaArriba(0);
			}
		}
	}

	cubo1.mostrarCubo();
	cubo1.mostrarCubo();
	cubo1.mostrarCubo();
}

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
			cubo1.rotarExteriorDerecha();
		}
	}
	else if (eje_z.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.moverAlasDerecha(0);
		}
		else if(nivel_2.value == "true")
		{
			cubo1.moverAlasDerecha(1);
		}
		else if(nivel_3.value == "true")
		{
			cubo1.moverAlasDerecha(2);
		}
	}

	cubo1.mostrarCubo();
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
			cubo1.rotarExteriorIzquierda();
		}
	}
	else if (eje_z.value == "true")
	{
		if (nivel_1.value == "true")
		{
			cubo1.moverAlasIzquierda(0);
		}
		else if(nivel_2.value == "true")
		{
			cubo1.moverAlasIzquierda(1);
		}
		else if(nivel_3.value == "true")
		{
			cubo1.moverAlasIzquierda(2);
		}
	}

	cubo1.mostrarCubo();
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

function removerPuzle(){

	cubo1.removerCubo(100);
	cubo1.mostrarCubo();
}

function resolverPuzle()
{
	cubo1.resolverCubo();
}
