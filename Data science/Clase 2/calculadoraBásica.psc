Algoritmo calculadoraB�sica
	Escribir 'Ingrese la primera cantidad.'
	Leer primeraCant
	Escribir 'Ingrese la segunda cantidad.'
	Leer segundaCant
	Escribir 'Ingrese un operador: +, -, *, /'
	Leer operador
	
	Segun operador Hacer
		'+':
			suma<-primeraCant + segundaCant
			Escribir 'El resultado de la operaci�n es ' , suma , '.'
		'-':
			resta<-primeraCant - segundaCant
			Escribir 'El resultado de la operaci�n es ' , resta , '.'
		'*':
			multiplicaci�n<-primeraCant * segundaCant
			Escribir 'El resultado de la operaci�n es ' , multiplicaci�n , '.'
		'/': 
			division<-primeraCant / segundaCant
			Escribir 'El resultado de la operaci�n es ' , division , '.'
		De Otro Modo:
			Escribir 'No ingres� ning�n operador v�lido.'
	Fin Segun
FinAlgoritmo
