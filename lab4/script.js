// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskText = taskInput.value;
    
//     if (taskText !== "") {
//       const taskList = document.getElementById("taskList");
//       const taskElement = document.createElement("li");
//       taskElement.innerText = taskText;
  
//       // taskElement.onclick = function() { //this указывает на объект, который выполняет текущий кусок JavaScript-кода
//       //   this.classList.toggle("done");
//       // };
  
//       taskList.appendChild(taskElement);
//       taskInput.value = "";
//     }
//   }

function zero_first_format(value) {
  if (value < 10) {
      value = '0' + value;
  }
  return value;
}

/* функция получения текущей даты и времени */
function date_time() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();

  return day + "." + month + "." + year;
}