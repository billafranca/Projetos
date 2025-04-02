programa
{
	
	funcao inicio()
{
  real diaNascimento
  escreva("Digite o dia do seu nascimento: ")
  leia(diaNascimento)

  real anoNascimento
  escreva("Digite o ano do seu nascimento: ")
  leia(anoNascimento)

  real anoAtual
  escreva("Digite o ano atual: ")
  leia(anoAtual)

  inteiro idade = anoAtual - anoNascimento

  se (diaNascimento > 31){ 
    escreva("Erro: dia inválido!")
  }senao se(anoNascimento > anoAtual){ 
      escreva("Erro: ano de nascimento inválido!")
  }senao{
      escreva("Sua idade é: ", idade)
  }
}

	}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 539; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */