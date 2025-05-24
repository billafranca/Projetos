const termos = [
    "A revolução dos bichos", "1984", "A planta de ferro", 
    "George Orwell", "Um pouco mais de ar, Por favor.", 
    "Na pior em Paris e Londres"
  ];
  
  const input = document.getElementById('pesquisar');
  const sugestoes = document.getElementById('sugestoes');
  
  input.addEventListener('input', () => {
    const valor = input.value.toLowerCase();
    sugestoes.innerHTML = ''; 
  
    if (valor.length === 0) return;
  
    const filtrados = termos.filter(t => t.toLowerCase().includes(valor));
    filtrados.forEach(t => {
      const item = document.createElement('div');
      item.textContent = t;
      item.classList.add('autocomplete-item');
      item.addEventListener('click', () => {
        input.value = t;
        sugestoes.innerHTML = ''; 
      });
      sugestoes.appendChild(item);
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#pesquisar')) {
      sugestoes.innerHTML = '';
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("lupaPesquisa");
    const input = document.getElementById("pesquisar");
  
    botao.addEventListener("click", function() {
      const pesq = input.value.trim();
  
      if (pesq === "") {
        alert("Campo de busca vazio.");
      } else if(pesq === "1984"){
          window.location.href = "wikis/1984/1984.html"
      } else if(pesq === "A planta de ferro"){
        window.location.href = "wikis/plantaFerro/plantaferro.html"
     } else if(pesq === "Na pior em Paris e Londres"){
      window.location.href = "wikis/parisLondres/pariselondres.html"
      } else if(pesq === "A revolução dos bichos"){
    window.location.href = "wikis/revolucaoBichos/bichos.html"
    }else if (pesq === "Um pouco mais de ar, Por favor.")
          window.location.href = "wikis/arPorFavor/arporfavor.html"
      
    });
  });

  document.getElementById('autoria').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' 
    });
  });