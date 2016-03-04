// 1

var btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
    if (btn.innerHTML === 'Hide Now') {
        document.querySelector('.nav-menu').style.visibility = 'hidden';
        btn.innerHTML = 'Show Now';
    } 
    else if (btn.innerHTML === 'Show Now') {
        document.querySelector('.nav-menu').style.visibility = 'visible';
        btn.innerHTML = 'Hide Now';
    }
});

// 2

var input = document.querySelector('.inputQ2');
var unl = document.querySelector('.guest-list');

document.querySelector('.inputQ2').addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        unl.innerHTML += '<li>' + input.value + '</li>';
        input.value = '';
    }
});

// 3

var input3 = document.querySelector('#add-guest-bonus input');
var ul = document.querySelector('#add-guest-bonus .guest-list');

ul.style.textAlign = 'left';

ul.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    };
});

document.querySelector('#add-guest-bonus input').addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        ul.innerHTML += '<li>' + input3.value + '<button>X</button></li>';
        input3.value = '';
    }
});


// ul.addEventListener('click', function (e) {
//     console.log(e.target.matches('button'));
// });

