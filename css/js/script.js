document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || telefone === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    const cadastro = {
        nome: nome,
        email: email,
        telefone: telefone,
        data: new Date().toLocaleString("pt-BR")
    };

    let listaCadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    listaCadastros.push(cadastro);
    localStorage.setItem("cadastros", JSON.stringify(listaCadastros));

    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    document.getElementById("formCadastro").reset();
});


