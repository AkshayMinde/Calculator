let screen = document.getElementById('screen');
console.log(screen);

let btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(ele => {
    ele.addEventListener('click', (e) => {
        btnText = e.target.innerText;
        if (btnText == "x") {
            btnText = "*";

        }
        screen.value += btnText;
    })
});

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function root() {
    screen.value = Math.sqrt(screen.value, 2);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    
    let num = screen.value;
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * i; 
    }

    
    screen.value = f;
}

function del(){
    screen.value = screen.value.substr(0, screen.value.length - 1); /*returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.*/
}

