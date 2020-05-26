import * as requestManager from "./webLinearSystemSolverRequests.js"

document.querySelector('#generatorButton').addEventListener('click', viewRandomMatrix)
document.querySelector('#solveButton').addEventListener('click', viewSolvedMatrix)

function arrayToStr(array, b) {
    let str = '';
    let variable = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== ' ') {
            variable++;
            str += array[i].toString()
            str += "x";
            str += '_';
            str += variable;
            if (i !== array.length - 1) {
                str += '+'
            }
        }
    }
    str += '&='
    str += b;
    str += '\\'
    str += '\\'
    return str;
}

async function viewRandomMatrix() {
    let response = await requestManager.randomMatrixRequest();
    if (response.ok) {
        let json = await response.json();
        let symMatrix = json[0];
        let equation = '\\left\\{\\begin{array}{ll}';
        let vecB = json[1];
        vecB = vecB[0]
        let B;
        let s = vecB[0].length;
        for (let i = 0; i < vecB.length; i++) {
            if (vecB[i] === ' ') {
                vecB.splice(i, 1);
            }
        }

        for (let i = 0; i < symMatrix.length; i++) {
            equation += arrayToStr(symMatrix[i], vecB[i]);
        }
        console.log(equation)

        equation += "\\end{array} \\right.";


        let el = document.getElementById('img');
        el.src = "http://latex.codecogs.com/svg.latex?" + equation;


    } else {
        alert("HTTP server error: " + response.status);
    }
}

async function viewSolvedMatrix() {
    let response = await requestManager.solveMatrixRequest();
    if (response.ok) {
        let json = await response.json();
        let solution = json[0];
        let result = '\\left\\{\\begin{array}{ll}';
        for (let i = 0; i < solution.length; i++) {
            if (solution[i] === " ") {
                solution.splice(i, 1);
            }
        }
        result += generateB(solution)

        console.log(result)

        result += "\\end{array} \\right.";


        let el = document.getElementById('img-solution');
        el.src = "http://latex.codecogs.com/svg.latex?" + result;


    } else {
        alert("HTTP server error: " + response.status);
    }
}

function generateB(solution) {
    let str = '';
    let variable = 0;
    for (let i = 0; i < solution.length; i++) {
        variable++;

        str += "x";
        str += '_';
        str += variable;
        str += '&='
        str += solution[i].toString()
        str += '\\'
        str += '\\'
    }
    return str;
}