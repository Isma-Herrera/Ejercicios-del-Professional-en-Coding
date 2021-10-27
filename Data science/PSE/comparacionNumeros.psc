Algoritmo comparacionNumeros
	Escribir 'Ingrese el primer valor a comparar'
	Leer primerNum
	Escribir 'Ingrese el segundo valor a comparar'
	Leer segundoNum
	
	Si primerNum = segundoNum Entonces
		Escribir 'Los valores son iguales.'
	SiNo
		Si primerNum > segundoNum Entonces
			Escribir 'El primero de los valores es mayor.'
		SiNo
			Escribir 'El segundo de los valores es mayor.'
		Fin Si
	Fin Si
FinAlgoritmo
