Algoritmo tablaDeMult
	Escribir 'Ingrese un n�mero entero entre 1 y 12.'
	Leer dato
	
	Si (dato < 1) || (dato > 12) Entonces
		Escribir 'Tiene que ingresar un n�mero entero entre 1 y 12.'
	SiNo
		Para contador<-1 Hasta 12 Con Paso 1 Hacer
			Escribir contador , 'x' , dato '=' , contador*dato
		Fin Para
	Fin Si
	
FinAlgoritmo
