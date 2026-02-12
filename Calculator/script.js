let calc = "";
let dark = false;
const display = document.querySelector('#disp');

function solve(e){
    // if(e.type === 'keydown' && e.key === 'Enter'){
    //     e.preventDefault();
    // }
    // display.value = "";
    if (e.type === 'click' && e.detail === 0) return;
    if(e.type === "click"){
        if(e.target.textContent === 'X'){
            calc = calc.slice(0, -1);
        } else if(e.target.textContent === '='){
            evaluate();
            // console.log(e.type, e.key);
        } else{
            calc += e.target.textContent;
        }
    } else if(e.type === "keydown"){
        if((e.key === '=' || e.key === 'Enter') && (/^[0-9+\-*/.() ]+$/.test(normalize(calc)))){
            // e.preventDefault();
            evaluate();
            // console.log(e.type, e.key);
        } else if((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/'].includes(e.key)){
            calc += e.key;
        } else if(e.key === 'Backspace'){
            calc = calc.slice(0, -1);
        }
    }
    display.value = calc;
}


function normalize(expr) {
    return expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/');
}


function evaluate() {
    if (!/^[0-9+\-*/.() ]+$/.test(normalize(calc))) return;
    if (/[+\-*/.]$/.test(calc)) return;

    try {
        calc = eval(normalize(calc)).toString();
    } catch {
        calc = `Error`;
    }
}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', solve);
});

document.addEventListener('keydown', solve);
// document.querySelector('.equals').addEventListener('click', solve);


document.querySelector('.clear').addEventListener('click', () => {
    calc = "";
    display.value = calc;
});

document.querySelector('.theme-toggle').addEventListener('click', () => {
    const text = document.querySelector('.text_theme');
    const icon = document.querySelector('.icon');
    if(!dark){
        document.body.style.backgroundColor = "#303234";
        text.textContent = "Light Mode";
        text.style.color = "white";
        icon.textContent = "☀️";
        dark = true;
    } else{
        document.body.style.backgroundColor = "white";
        
        icon.textContent = "🌙";
        text.textContent = "Dark Mode";
        text.style.color = "#303234";
        dark = false;
    }
})


