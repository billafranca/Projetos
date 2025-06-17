const palavras = ["javascript", "programacao", "assembly", "desenvolvimento", "massachusetts", "desafio", "computador", "tecnologia", "internet"];
        const palavra = palavras[Math.floor(Math.random() * palavras.length)];
        let letrasTentadas = [];
        let tentativas = 6;

        const palavraDiv = document.getElementById('palavra');
        const tentativasSpan = document.getElementById('tentativas');
        const mensagem = document.getElementById('mensagem');
        const input = document.getElementById('letra');

        function exibirPalavra() {
            let exibicao = "";
            for (let letra of palavra) {
                exibicao += letrasTentadas.includes(letra) ? letra + " " : "_ ";
            }
            palavraDiv.textContent = exibicao.trim();
        }

        function tentar() {
            const letra = input.value.toLowerCase();
            input.value = "";
            input.focus();

            if (letra.length !== 1 || letrasTentadas.includes(letra)) {
                mensagem.textContent = "Letra inválida ou já usada.";
                return;
            }

            letrasTentadas.push(letra);

            if (!palavra.includes(letra)) {
                tentativas--;
                mensagem.textContent = `Letra errada!`;
            } else {
                mensagem.textContent = "";
            }

            tentativasSpan.textContent = tentativas;
            exibirPalavra();

            if (tentativas === 0) {
                mensagem.textContent = `Fim de jogo! A palavra era: ${palavra}`;
                input.disabled = true;
            } else if (palavra.split('').every(l => letrasTentadas.includes(l))) {
                mensagem.textContent = "Parabéns! Você adivinhou a palavra!";
                input.disabled = true;
            }
        }

    function reiniciar() {
        letrasTentadas = [];
        tentativas = 6;
        palavra = palavras[Math.floor(Math.random() * palavras.length)];
        mensagem.textContent = "";
        tentativasSpan.textContent = tentativas;
        exibirPalavra();
        input.disabled = false;
        input.focus();
    }

    function mostrarDica() {
        
        mensagem.textContent = "Dica: A palavra é um termo de tecnologia.";
    }

    function mostrarPalavra() {
        palavraDiv.textContent = `A palavra era: ${palavra}`;
    }

    function limpar() {
        input.value = "";
        input.focus();
    }
        

        
        exibirPalavra();