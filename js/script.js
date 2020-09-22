var rangeA = null;
var rangeB = null;
var rangeC = null;
var inputA = null;
var inputB = null;
var inputC = null;
var quadrado = null;

function start() {
    mapInputs();
    addEvents();
}

function mapInputs() {
    rangeA = document.querySelector('#rangeA');
    rangeB = document.querySelector('#rangeB');
    rangeC = document.querySelector('#rangeC');
    inputA = document.querySelector('#inputA');
    inputB = document.querySelector('#inputB');
    inputC = document.querySelector('#inputC');
    quadrado = document.querySelector('#quadrado')
}

function addEvents() {
    rangeA.addEventListener('input', handleInputAChange);
    rangeA.addEventListener('change', handleInputAChange);
    rangeB.addEventListener('input', handleInputBChange);
    rangeB.addEventListener('change', handleInputBChange);
    rangeC.addEventListener('input', handleInputCChange);
    rangeC.addEventListener('change', handleInputCChange);
}

function handleInputAChange(event) {
    inputA.value = event.target.value;
    calculateRGB();
}

function handleInputBChange(event) {
    inputB.value = event.target.value;
    calculateRGB();
}

function handleInputCChange(event) {
    inputC.value = event.target.value;
    calculateRGB();
}

function calculateRGB() {
    let numberA = parseInt(inputA.value, 10);
    let numberB = parseInt(inputB.value, 10);
    let numberC = parseInt(inputC.value, 10);

    quadrado.style.backgroundColor = "rgb(" + numberA + "," + numberB + "," + numberC + ")"
}

start();