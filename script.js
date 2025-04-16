
document.querySelector('.config').addEventListener('click', function(){
    alert('Configuração');
});
document.querySelector('.atalho').addEventListener('click', function(){
    alert('Atalho');
});
document.querySelector('.perfil').addEventListener('click', function(){
    alert('Conta');
});

// verificar se o usuário está logado
function usuarioEstaLogado() {
    return localStorage.getItem("usuarioLogado") === "true"; 
}

// Função para redirecionar ou exibir alerta
function verificarLoginAntesDeIr(redirectPage) {
    if (usuarioEstaLogado()) {
        window.location.href = redirectPage; // Se estiver logado, vai para a página
    } else {
        alert("Você precisa estar logado para acessar esta página!");
    }
}

// Adicionando eventos nos botões
document.getElementById('vermelho').addEventListener('click', function() {
    verificarLoginAntesDeIr("vermelho.html");
});

document.getElementById('branco').addEventListener('click', function() {
    verificarLoginAntesDeIr("branco.html");
});

document.getElementById('preto').addEventListener('click', function() {
    verificarLoginAntesDeIr("preto.html");
});

document.getElementById('azul').addEventListener('click', function() {
    verificarLoginAntesDeIr("azul.html");
});
// Verifica se o usuário está logado
if (!localStorage.getItem("usuarioLogado")) {
    alert("Você precisa estar logado!");
    window.location.href = "login.html"; // Redireciona para login se não estiver logado
}
