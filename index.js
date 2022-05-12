let area = document.createElement("textarea");
document.body.append(area);
area.id = 'area';
let keyboard = document.createElement("div");
document.body.append(keyboard);
keyboard.id = 'keyboard';
keyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 32];

// function handle (event) {
//     console.log (event);  //выводим событие, чтобы посмотреть объект символа и из него вытащить данные
//     keyboard.push(event.charCode); //добавляем в массив данные
//     // console.log (event.code);  //keyA
//     // console.log(event.keyCode); //97
//     console.log(keyboard);
// }

//рисуем клавиатуру
function init() {
    let out = '';
    for (let i=0; i < keyboard.length; i++) {
        if (i == 13 || i == 26 || i == 38) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="k-key" data="' + keyboard[i] + '" >' +String.fromCharCode(keyboard[i])+ '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

init();

document.onkeypress = handle;

function handle(e) {
    // console.log (e.code);  //keyA
    // console.log(e.keyCode); //97
    document.querySelectorAll('#keyboard .k-key').forEach(function(el) {
    el.classList.remove('active');
    })
    document.querySelector('#keyboard .k-key[data="' + e.keyCode + '"]').classList.add('active');
    // area.value += e.target.innerText;
}
    document.querySelectorAll('#keyboard .k-key').forEach(function(el) {
    el.onclick = function (e) {
    document.querySelectorAll('#keyboard .k-key').forEach(function(el) {
               el.classList.remove('active');
            });
            let code = this.getAttribute('data');
            this.classList.add('active');

            console.log(code);
            area.value += e.target.innerText;
        }
    })
    