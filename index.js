import JsonParticipants from "./participants.json" assert { type: "json" };

let headers = ["Nimi", "Sali", "Ikä"];

let myTable = document.querySelector("#table");

let table = document.createElement("table");
let headerRow = document.createElement("tr");

headers.forEach((headerText) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});

table.appendChild(headerRow);

JsonParticipants.participants.forEach((part) => {
  let row = document.createElement("tr");

  Object.values(part).forEach((text) => {
    let cell = document.createElement("td");
    let textNode = document.createTextNode(text);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });

  table.appendChild(row);
});

myTable.appendChild(table);
