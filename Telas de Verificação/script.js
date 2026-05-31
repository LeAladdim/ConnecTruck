// Aguarda o HTML carregar completamente na página
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona os elementos específicos desta tela
    const btnAdvance = document.querySelector('.btn-advance');
    const inputUser = document.querySelector('input[placeholder="Nome de Usuário"]');
    const inputPass = document.querySelector('input[placeholder="Senha"]');
    
    const statusTitle = document.querySelector('.wait-box h3');
    const statusText = document.querySelector('.wait-box p');

    // 1. SIMULAÇÃO DE ANÁLISE (Muda o status após 3 segundos na tela)
    setTimeout(() => {
        if (statusTitle && statusText) {
            statusTitle.textContent = "Verificação Concluída!";
            statusTitle.style.color = "#008cc1"; // Aplica a cor azul oficial do ícone
            statusText.textContent = "Seus dados, documentos e selfie foram validados com êxito no sistema ConnectTruck. Defina suas credenciais de acesso abaixo.";
        }
    }, 3000);

    // 2. VALIDAÇÃO DO FORMULÁRIO DE CREDENCIAIS
    if (btnAdvance) {
        btnAdvance.addEventListener('click', () => {
            // Pega os valores digitados eliminando espaços extras
            const usuario = inputUser ? inputUser.value.trim() : "";
            const senha = inputPass ? inputPass.value.trim() : "";

            // Verifica se algum campo ficou vazio
            if (usuario === "" || senha === "") {
                alert("Por favor, preencha o Nome de Usuário e a Senha para prosseguir!");
                return;
            }

            // Exemplo de validação de tamanho de senha (opcional, boa prática)
            if (senha.length < 6) {
                alert("A senha deve conter pelo menos 6 caracteres!");
                return;
            }

            // Fluxo de sucesso
            alert("Cadastro finalizado com sucesso! Bem-vindo à ConnectTruck.");
            
            // Caso queira redirecionar o usuário para o login ou dashboard após o clique:
            // window.location.href = "login.html";
        });
    }
});
