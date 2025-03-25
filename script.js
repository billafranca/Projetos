document.addEventListener("DOMContentLoaded", function() {
    const emailForm = document.getElementById("emailForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    emailForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

      
        if (validateUsername(username) && validatePassword(password)) {
            alert("Nome de usuário e senha válidos. Redirecionando...");
            window.location.href = "2pag.html"; 
        } else {
            alert("Por favor, insira um nome de usuário válido e uma senha com pelo menos 6 caracteres, incluindo letra maiúscula.");
        }
    });

    
    function validateUsername(username) {
        const usernameRegex = /^[a-zA-Z0-9]{3,}$/; 
        return usernameRegex.test(username);
    }

    // Validação da senha
    function validatePassword(password) {
        
        const passwordRegex = /^(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    }
});
