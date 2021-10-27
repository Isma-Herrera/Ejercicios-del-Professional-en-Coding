Algoritmo boletosCine
	Escribir 'Ingrese la cantidad con la que cuenta para ir al cine.'
	Leer cantidad
	Si cantidad % 15 <> 0 Entonces
		Escribir 'La cantidad tiene que ser un múltiplo de 15.'
	SiNo
		personas<-cantidad / 15
		
		Si personas < 1 Entonces
			Escribir 'No cuenta con dinero suficiente para adquirir boletos.'
		SiNo
			Escribir 'El total de personas que podrán ir al cine es de ' , personas , '.'
		Fin Si
	Fin Si
	
FinAlgoritmo
