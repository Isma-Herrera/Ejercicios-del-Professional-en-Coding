Algoritmo calculadoraBasica
	Escribir 'Ingrese el primero de los valores: '
	Leer primerValor
	Escribir 'Ingrese el segundo de los valores: '
	Leer segundoValor
	Escribir '¿Qué operación desea realizar: suma, resta, multiplicación o división?'
	Leer operacion
	Si operacion = 'suma' Entonces
		resultado<-primerValor + segundoValor
		Escribir 'El resultado es de'
		Escribir resultado
	FinSi
	Si operacion = 'resta' Entonces
		resultado<-primerValor - segundoValor
		Escribir 'El resultado es de'
		Escribir resultado
	FinSi
	Si operacion = 'multiplicacion' Entonces
		resultado<-primerValor * segundoValor
		Escribir 'El resultado es de'
		Escribir resultado
	FinSi
	Si operacion = 'division' Entonces
		resultado<-primerValor / segundoValor
		Escribir 'El resultado es de'
		Escribir resultado
	FinSi
FinAlgoritmo
