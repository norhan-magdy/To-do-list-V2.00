let div = document.querySelector("div");
let input = document.createElement("input");
input.setAttribute("type", "text");
let inputBtn = document.createElement("input");
inputBtn.setAttribute("type", "button");
inputBtn.setAttribute("value", "+");
inputBtn.setAttribute("onClick", "addToList()");

div.appendChild(input);
div.appendChild(inputBtn);

let table = document.createElement("table");
div.appendChild(table);
let tHead = document.createElement("thead");
table.appendChild(tHead);
tHead.innerHTML = "<th>Id</th><th>Task Name</th><th>Actions</th>";
let tbody = document.createElement("tbody");
table.appendChild(tbody);

let count = 1;
function addToList() {
  if (!input.value) {
    alert("please add value");
  } else {
    var row = document.createElement("tr");
    row.setAttribute("id", count);
    const tData = document.createElement("td");
    tbody.appendChild(row);
    tData.innerHTML = count;
    row.appendChild(tData);

    const taskName = document.createElement("td");
    taskName.setAttribute("class", "task-name");

    taskName.innerHTML = input.value;
    row.appendChild(taskName);
    const container = `<td>
      <button class="${count}" onClick="editTask(${count})" type="button"><i class="fa-regular fa-pen-to-square fa-beat"></i></button>
      <button class="${count}" onClick="deleteTask(${count})" type="button"><i class="fa-solid fa-trash fa-fade"></i></button>
                         </td>`;

    row.innerHTML += container;
    count++;
    input.value = "";
  }
}

function editTask(taskNumber) {
  const element = document.getElementById(taskNumber).children[1];
  const del = document.getElementById(taskNumber).children[2].children[1];
  del.setAttribute("disabled", true);

  input.value = element.innerText;
  inputBtn.setAttribute("value", "Update");
  inputBtn.setAttribute("onClick", `update(${taskNumber})`);
}

function deleteTask(taskNumber) {
  const element = document.getElementById(taskNumber);
  element.remove();
}
function update(taskNumber) {
  if (!input.value) {
    alert("task name must take a value");
  } else {
    const element = document.getElementById(taskNumber).children[1];
    element.innerText = input.value;
    input.value = "";
    document.getElementById(
      taskNumber
    ).children[2].children[1].disabled = false;
    inputBtn.setAttribute("value", "+");
    inputBtn.setAttribute("onClick", "addToList()");
  }
}

tbody.addEventListener("click", function (e) {
  let element = e.target;
  if (
    element.hasAttribute("class") &&
    element.getAttribute("class").includes("task-name")
  ) {
    element.classList.toggle("done");
  }
});
