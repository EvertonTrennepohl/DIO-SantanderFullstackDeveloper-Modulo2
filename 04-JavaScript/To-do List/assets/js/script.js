function addTask() {
  var task = document.getElementById("task").value;
  if (task.length < 1) {
    alert("Tarefa não informada!");
  } else {
    var checkbox = document.createElement("input");
    var text = document.createTextNode(task);
    var listItem = document.createElement("li");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    listItem.appendChild(text);
    document.getElementById("list").appendChild(listItem);
    document.getElementById("task").value = "";
    checkbox.onclick = function() {
        if(checkbox.checked) {
            listItem.className = "checked";
        } else {
            listItem.className = "";
        }
    };
  }
}
