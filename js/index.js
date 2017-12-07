// принцип работы
// - ловим значения, и записываем в строку.
// - если всетретили равно, парсим строку
var domCalc = document.querySelector('div.keys');
domCalc.addEventListener('click',getNumber);

var str = '';

function getNumber(event) {
    var evtar = event.target.getAttribute('data-value');
    if (0<=evtar<=9){
        // alert(evtar);
        str += evtar;
        var out = document.getElementById('input');
        out.innerHTML = str;
    }else if (event.target.className){
        alert(event.target.className);
    }
}

function calc() {

}