programa
{
	
	funcao inicio()
	{
		real saldo = 20000
		real saque
escreva("digite o valor do saque: ")
leia(saque)

se (saque > saldo){
    escreva("saldo insuficiente")
    
}
senao{
    saldo = saldo - saque
    escreva("o seu saldo atual é: ",saldo)
    
}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 258; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */