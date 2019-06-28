		var keyBoard = {
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40
		};

		console.log(keyBoard);

		document.addEventListener("keyup", dibujarTeclado);

		function dibujarTeclado(event){

			//En casos de que sea más fácil leer el código se debe elegir si se usa if o switch
			/*if(event.keyCode == keyBoard.UP){
				console.log("Stand up");
			}*/
					
			switch(event.keyCode){
				case keyBoard.DOWN:
					console.log("Down");
				break;
				default:
					console.log("Other key");
				break;
			}
		}

		var d = document.getELementById("area");
		var lienzo = d.getContext("2d");
		function drawLine(color, x_inicial, x_final, y_inicial, y_final){
			lienzo.beginPath();
			lienzo.strokeStyle = color;
			lienzo.moveTo(x_inicial, y_inicial);
			lienzo.lineTo(x_final, y_final);
			lienzo.stroke();
			lienzo.closePath();
		}
