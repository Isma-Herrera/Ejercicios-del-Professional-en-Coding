Algoritmo c�lculoPromedio
	Escribir 'Ingrese la primera calificaci�n'
	Leer calif_1
	Escribir 'Ingrese la segunda calificaci�n'
	Leer calif_2
	Escribir 'Ingrese la tercera calificaci�n'
	Leer calif_3
	sumaCalif<-calif_1 + calif_2 +calif_3
	promedio<-sumaCalif / 3
	Escribir 'Su promedio es de ' , promedio
	Si promedio >= 10.5 Entonces
		Escribir 'Felicidades, usted ha aprobado.'
	SiNo
		Escribir 'L�stima, fallaste. Vuelve a intentarlo en un a�o.'
	Fin Si
FinAlgoritmo
