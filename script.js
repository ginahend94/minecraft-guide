function changeBackground(bg) {
    document.body.style = 'background:#' + bg;
}

var tab = document.getElementById('navbar-links');

function menu(button) {
    if (tab.style.height == '0px') {
        tab.style.height = '360px';
        button.innerHTML = '&times;';
        button.style.fontSize = '4.4em';
        button.style.top = '-12px';
        button.style.left = '3px';
    }
    else {
        tab.style.height = '0px';
        button.innerHTML = '&#9776;';
        button.style.fontSize = '2.4em';
        button.style.top = '5px';
        button.style.left = '5px';
    }
}

// Luís Ramalho on stackoverflow
document.addEventListener("click", (e) => {
    var button = document.getElementById('menu-button');
    if (tab.contains(e.target)) {

    } else {
        if (e.target == button) {

        }
        else {
            tab.style.height = '0px';
            button.innerHTML = '&#9776;';
            button.style.fontSize = '2.4em';
            button.style.top = '5px';
            button.style.left = '5px';
        }
    }
});