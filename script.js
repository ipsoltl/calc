var num1, num2, result;

function basicActions() {
    num1 = document.getElementById('num1').value;
    num1 = +num1;

    num2 = document.getElementById('num2').value;
    num2 = +num2;
};
function resultAnSwer() {
    document.getElementById('anSwer').innerHTML = result;  
};

function plus () {
    basicActions();
    result = num1 + num2;
    resultAnSwer();
};

function minus () {
    basicActions();
    result = num1 - num2;
    resultAnSwer();
};

function multiPly () {
    basicActions();
    result = num1 * num2;
    resultAnSwer();
};

function diviSion () {
    basicActions();
    result = num1 / num2;
    resultAnSwer();
};