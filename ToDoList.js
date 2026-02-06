const taskinput = document.getElementById('taskinput');
const tasklist = document.getElementById('tasklist');

taskinput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (taskinput.value.trim() === '') {
        alert('Please Enter Task')
        return;

    }
    else {
        let li = document.createElement('li');
        li.innerHTML = taskinput.value;
        tasklist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskinput.value = "";
    saveData();
}
tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", tasklist.innerHTML);
}

function showTask() {
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();