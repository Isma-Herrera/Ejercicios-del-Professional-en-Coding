Algoritmo comparacionEdades
	Escribir 'Ingrese la edad de la primera persona: '
	Leer primeraEdad
	Escribir 'Ingrese la edad de la segunda persona: '
	Leer segundaEdad
	
	Si primeraEdad = segundaEdad Entonces
		Escribir 'No hay diferencia entre las edades.'
	SiNo
		Si primeraEdad > segundaEdad Entonces
			diferencia<-primeraEdad - segundaEdad
			Escribir 'La diferencia es de'
			Escribir diferencia
		SiNo
			diferencia<-segundaEdad - primeraEdad
			Escribir 'La diferencia es de'
			Escribir diferencia
		FinSi
	Fin Si
FinAlgoritmo
