programa
{
	
	funcao inicio()
	{
		real freqrespiratoria
		escreva("Digite a sua frequência respiratória: ")
		leia(freqrespiratoria)
		real freqnormal = 12

se (freqrespiratoria < freqnormal) {
    escreva("bradipneia.")
} senao se (freqrespiratoria == freqnormal) {
    escreva("eupneia")
} senao {
    escreva("taquipneia")
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