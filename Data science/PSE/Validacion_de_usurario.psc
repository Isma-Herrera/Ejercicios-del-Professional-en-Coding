Algoritmo Validacion_de_usurario
	usuario<-'Ariel'
	clave<-'123'
	Escribir 'Digite su usuario'
	Leer usuario_entrada 
	Escribir 'Escriba su contraseña'
	Leer clave_entrada
	Si clave == clave_entrada && usuario == usuario_entrada Entonces
		Escribir 'Le damos la bienvenida.'
		bandera<-1
	SiNo
		Escribir 'Alguno de los datos no es correcto.'
		bandera<-0
	FinSi
Hasta Que 
bandera<-0
FinAlgoritmo
