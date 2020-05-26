import * as requestManager from "./webLinearSystemSolverRequests.js"

document.querySelector('#generatorButton').addEventListener('click', viewRandomMatrix)

function arrayToStr(array) {
    let str = '';
    let variable = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== ' ') {
            variable++;
            str += array[i].toString()
            str += "x";
            str += '_';
            str += variable;
            str += '+'
        }
    }
    str += '\\'
    return str;
}

async function viewRandomMatrix() {
    let response = await requestManager.randomMatrixRequest();
    if (response.ok) {
        let json = await response.json();
        let symMatrix = json[0];
        let equation = '\\left\{\\begin{array}{ll}';
        for (let i = 0; i < symMatrix.length; i++) {
            equation += arrayToStr(symMatrix[i]);
        }
        console.log(equation)
        let vecB = json[1];
        for (let j = 0; j < json.length; j++) {


        }
        equation += "\\end{array}\\right.";
        let p = document.createElement("mrow");
        let div = document.getElementById("equation");
        p.innerHTML = '$$\\begin{array}{cc} a & b \\\\ c & d \\end{array}$$';
        let child = div.appendChild(p);



    } else {
        alert("HTTP server error: " + response.status);
    }
}