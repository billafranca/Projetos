window.onload = function() {
    const button = document.getElementById('button');
    let textoTraduzido = "";
  
    if (button) {
      button.addEventListener('click', () => {
        const textoPt = "Este é um exemplo de texto em português.";
        textoTraduzido = traduzirTexto(textoPt);
        document.getElementById('traducao-ingles').textContent = textoTraduzido;
      });
    } else {
      console.log('O botão não existe!');
    }
  
    function traduzirTexto(texto) {
      const tradução = "I am currently a student of Systems Development at ETEC-Uirapuru, where I am immersed in learning technologies that shape the future of programming and data analysis. My passion for software development drives me to seek innovative and relevant solutions that enhance user experience and the world of technology.  With a focus on languages such as Java, JavaScript, and Python, as well as skills in front-end development with HTML and CSS, I am constantly challenging myself to expand my knowledge and apply what I learn in practical projects. I hope to contribute and collaborate meaningfully in collective projects. I have a solid background in teamwork and am confident that I can bring new ideas and strategies to software development, always aiming to provide the best user experience. I intend to expand my knowledge in UI/UX to enhance the interface and performance of software, ensuring that users have the best possible experience when interacting with the website/application and viewing it in the best way.";
      return tradução;
    }
  

    document.getElementById('traducao-ingles').textContent = "";
  };