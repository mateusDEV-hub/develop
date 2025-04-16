let authenticated = false;
const storageKey = "sportsTableDataPreto"; // Identificador único para a tabela azul

function authenticateUser() {
    const password = prompt("Digite a senha para editar:");
    if (password === "1234") {
        authenticated = true;
        document.getElementById("editor").classList.remove("hidden");
        document.querySelectorAll(".delete-btn").forEach(el => el.classList.remove("hidden"));
        alert("Autenticação bem-sucedida! Agora você pode editar a tabela azul.");
    } else {
        alert("Senha incorreta!");
    }
}

function addRow() {
    if (!authenticated) {
        alert("Apenas o usuário autenticado pode adicionar linhas.");
        return;
    }
    const sport = document.getElementById("sport").value;
    const score = document.getElementById("score").value;
    if (sport && score) {
        const table = document.getElementById("sportsTable").getElementsByTagName("tbody")[0];
        const row = table.insertRow();
        row.innerHTML = `<td>${sport}</td><td>${score}</td><td class="delete-btn"><button onclick="deleteRow(this)">Excluir</button></td>`;
        saveTable();
    } else {
        alert("Preencha ambos os campos para adicionar uma linha.");
    }
}

function deleteRow(button) {
    if (!authenticated) {
        alert("Apenas o usuário autenticado pode excluir linhas.");
        return;
    }
    const row = button.parentElement.parentElement;
    row.remove();
    saveTable();
}

function saveTable() {
    const rows = document.querySelectorAll("#sportsTable tbody tr");
    const data = [];
    rows.forEach(row => {
        const cells = row.getElementsByTagName("td");
        data.push({ sport: cells[0].innerText, score: cells[1].innerText });
    });
    localStorage.setItem(storageKey, JSON.stringify(data)); // Salva com o identificador único
}

function loadTable() {
    const data = JSON.parse(localStorage.getItem(storageKey)) || []; // Carrega com o identificador único
    const table = document.getElementById("sportsTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";
    data.forEach(rowData => {
        const row = table.insertRow();
        row.innerHTML = `<td>${rowData.sport}</td><td>${rowData.score}</td><td class="delete-btn ${authenticated ? '' : 'hidden'}"><button onclick="deleteRow(this)">Excluir</button></td>`;
    });
}

// Carrega a tabela quando a página é aberta
document.addEventListener("DOMContentLoaded", loadTable);