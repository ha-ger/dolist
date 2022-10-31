let addTask = document.querySelector(".add");
let input = document.getElementsByTagName("input")[0];
let tasks = document.querySelector(".tasks");
let span = document.getElementById("sp");
let arr;
let num;
let nowDate = new Date();
let date =
  nowDate.getDate() +
  " / " +
  (nowDate.getMonth() + 1) +
  " / " +
  nowDate.getFullYear();

span.innerHTML = `${date}`;

if (window.localStorage.input != null) {
  arr = JSON.parse(window.localStorage.input);
} else {
  arr = [];
}
addTask.onclick = function () {
  if (input.value !== "") {
    let obj = {
      input: input.value,
      mood: true,
    };

    arr.push(obj);
    window.localStorage.setItem("input", JSON.stringify(arr));
    show();
    input.value = "";
  }
};

function show() {
  let tasOn = "";
  for (i = 0; i < arr.length; i++) {
    tasOn += `
<div class="form">
    <input value= "${arr[i].input} "type="text" class="input on" />
    <input onclick="done(${i})" type="submit" class="done " value ="done"/>
    <input onclick="dele(${i})" type="submit" class="delete " value ="delete"/>    
</div>`;
  }
  tasks.innerHTML = tasOn;
}

show();

function dele(i) {
  arr.splice(i, 1);
  localStorage.input = JSON.stringify(arr);
  show();
}

function done(i) {
  document.querySelectorAll(".on")[i].classList.add("colo");
}
