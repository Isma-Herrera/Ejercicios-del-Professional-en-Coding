Algoritmo calculadoraBásica
	Escribir 'Ingrese la primera cantidad.'
	Leer primeraCant
	Escribir 'Ingrese la segunda cantidad.'
	Leer segundaCant
	Escribir 'Ingrese un operador: +, -, *, /'
	Leer operador
	
	Segun operador Hacer
		'+':
			suma<-primeraCant + segundaCant
			Escribir 'El resultado de la operación es ' , suma , '.'
		'-':
			resta<-primeraCant - segundaCant
			Escribir 'El resultado de la operación es ' , resta , '.'
		'*':
			multiplicación<-primeraCant * segundaCant
			Escribir 'El resultado de la operación es ' , multiplicación , '.'
		'/': 
			division<-primeraCant / segundaCant
			Escribir 'El resultado de la operación es ' , division , '.'
		De Otro Modo:
			Escribir 'No ingresó ningún operador válido.'
	Fin Segun
FinAlgoritmo
