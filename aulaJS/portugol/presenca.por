programa
{
	
	funcao inicio()
	{
		real presenca
		escreva("digite a sua presenca: ")
		leia(presenca)
real aulassemestre 
escreva("digite o numero de aulas do semestre: ")
leia(aulassemestre)

se (presenca <75){
	escreva("reprovado pelo limite de faltas")
}senao se (presenca <=80){
	escreva("prova de compensação")
}senao{
	escreva("aprovado")
}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 213; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */