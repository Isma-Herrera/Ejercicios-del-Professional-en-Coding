Algoritmo cálculoPromedio
	Escribir 'Ingrese la primera calificación'
	Leer calif_1
	Escribir 'Ingrese la segunda calificación'
	Leer calif_2
	Escribir 'Ingrese la tercera calificación'
	Leer calif_3
	sumaCalif<-calif_1 + calif_2 +calif_3
	promedio<-sumaCalif / 3
	Escribir 'Su promedio es de ' , promedio
	Si promedio >= 10.5 Entonces
		Escribir 'Felicidades, usted ha aprobado.'
	SiNo
		Escribir 'Lástima, fallaste. Vuelve a intentarlo en un año.'
	Fin Si
FinAlgoritmo
