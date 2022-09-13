





var btn_add = document.getElementById('btn_add');



btn_add.onclick = function() {
    var value = document.getElementById('input').value;
    var h2 = document.createElement('h2');
    var icon = document.createElement('i');
    var div = document.createElement('div');
    div.setAttribute('class','box')
    icon.setAttribute('class','fa-solid fa-trash')
    h2.innerHTML= value
    var todo = document.getElementById('todos');
    div.appendChild(h2)
    div.appendChild(icon)
    todo.appendChild(div)

    icon.addEventListener("click",(e) => {
        var parent = e.target.parentElement; 
        parent.remove();
    })
}


