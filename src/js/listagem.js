let btnLogout = document.getElementById('btnLogout');


function createRow(user) {
  let row = document.createElement("tr");
  for (prop in user) {
    if (prop !== "senha") {
      let cell = document.createElement("td");
      cell.innerHTML = user[prop];
      row.appendChild(cell);
    }
  }
  return row;
}

function fillTable(table) {
  let items = { ...localStorage };
  for (item in items) {
    let user = JSON.parse(localStorage.getItem(item));
    let row = createRow(user);
    table.appendChild(row);
  }
}

window.onload = () => {
  if (sessionStorage.getItem("codigoSessao") === null) {
    alert("É necessário fazer login para acessar essa página.");
    window.location.href = "../../index.html";
  } else {
    let mainTable = document.getElementById("listTable");
    fillTable(mainTable);
  }
  btnLogout.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = "../../index.html";
  });
};
