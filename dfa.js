const isDigit = (x) => !isNaN(parseInt(x));
const isE = (x) => x === 'E' || x === 'e';
const isDot = (x) => x === '.';
const isPlusMinus = (x) => x === '+' || x === '-';
const A = (char) => isDigit(char) ? D : isDot(char) ? B : isPlusMinus(char) ? C : dead;
const B = (char) => isDigit(char) ? F : dead;
const C = (char) => isDigit(char) ? D : isDot(char) ? B : dead;
const D = (char) => isDigit(char) ? D : isDot(char) ? E : dead;
const E = (char) => isDigit(char) ? E : isE(char) ? G : dead;
const F = (char) => isDigit(char) ? F : isE(char) ? G : dead;
const G = (char) => isDigit(char) ? H : isPlusMinus(char) ? I : dead;
const H = (char) => isDigit(char) ? H : dead;
const I = (char) => isDigit(char) ? H : dead;
const dead = (char) => dead;
const accepts = new Set([D, E, F, H]);
const accepting = (x) => accepts.has(x);

function validate (string) {

    return accepting(string.trim().split("").reduce((acc, char) => acc(char), A));
}

function submit() {
    let node = document.querySelector("#results");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    document.querySelector("#input").value.split('\n').map((x) =>{
        console.log(x);
        let y = document.createElement("div");
        y.textContent = x + ": " + validate(x);
        console.log(y);
        node.appendChild(y);
    });

}
document.querySelector("#submit").addEventListener("click", (e)=> {
    e.preventDefault();
    submit();
});