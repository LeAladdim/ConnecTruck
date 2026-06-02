document.addEventListener("DOMContentLoaded", () => {
    
    const btnAdvance = document.querySelector('.btn-advance');
    const inputUser = document.querySelector('input[placeholder="Nome de Usuário"]');
    const inputPass = document.querySelector('input[placeholder="Senha"]');
    
    const statusTitle = document.querySelector('.wait-box h3');
    const statusText = document.querySelector('.wait-box p');

    setTimeout(() => {
        if (statusTitle && statusText) {
            statusTitle.textContent = "Verificação Concluída!";
            statusTitle.style.color = "#008cc1"; // Aplica a cor azul oficial do ícone
            statusText.textContent = "Seus dados, documentos e selfie foram validados com êxito no sistema ConnectTruck. Defina suas credenciais de acesso abaixo.";
        }
    }, 3000);

    if (btnAdvance) {
        btnAdvance.addEventListener('click', () => {
            const usuario = inputUser ? inputUser.value.trim() : "";
            const senha = inputPass ? inputPass.value.trim() : "";

            if (usuario === "" || senha === "") {
                alert("Por favor, preencha o Nome de Usuário e a Senha para prosseguir!");
                return;
            }

            if (senha.length < 6) {
                alert("A senha deve conter pelo menos 6 caracteres!");
                return;
            }

            alert("Cadastro finalizado com sucesso! Bem-vindo à ConnectTruck.");
            
            window.location.href = "../../Dashboard/index.html";
        });
    }
});
