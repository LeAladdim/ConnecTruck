// Selecionando os elementos do formulário e status
const btnAdvance = document.getElementById('btn-advance');
const inputUser = document.getElementById('username');
const inputPass = document.getElementById('password');
const statusTitle = document.getElementById('status-title');
const statusText = document.getElementById('status-text');

// 1. Simulação de Análise (Muda o texto após 3 segundos)
setTimeout(() => {
    if (statusTitle && statusText) {
        statusTitle.textContent = "Verificação Concluída!";
        statusTitle.style.color = "#129a98"; // Cor de sucesso (verde/teal)
        statusText.textContent = "Seus dados e fotos foram validados com êxito. Agora defina suas credenciais abaixo.";
    }
}, 3000);

// 2. Evento de clique para validar o formulário
if (btnAdvance) {
    btnAdvance.addEventListener('click', function() {
        const usuario = inputUser ? inputUser.value.trim() : "";
        const senha = inputPass ? inputPass.value.trim() : "";

        // Validação simples de campos vazios
        if (usuario === "" || senha === "") {
            alert("Por favor, preencha o Nome de Usuário e a Senha para prosseguir!");
        } else {
            alert("Cadastro finalizado com sucesso! Bem-vindo à ConnectTruck.");
            // Aqui você redirecionaria para a Dashboard ou Login:
            // window.location.href = "dashboard.html";
        }
    });
}
