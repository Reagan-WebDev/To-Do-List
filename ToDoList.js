const taskinput = document.getElementById('taskinput');
const tasklist = document.getElementById('tasklist');

function addTask() {
    if (taskinput.value.trim() === '') {
        alert('Please Enter Task')
        return;

    }
    else {
        let li = document.createElement('li');
        li.innerHTNL = taskinput.value;
        tasklist.appendChild(li);
        taskinput.value = '';
    }
}