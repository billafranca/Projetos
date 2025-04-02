programa
{
	
	funcao inicio()
	{
		real freqnormal = 60
		real freqcardiaca 
	escreva("digite a sua frequencia cardiaca: ")
	leia(freqcardiaca)

se (freqcardiaca < 60) {
    escreva("braquicardia")
    
} senao se (freqcardiaca >= 60 e freqcardiaca <= 100) {
    escreva("Nomocardia")
    
} senao {
    escreva("taquicardia")
}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 331; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */