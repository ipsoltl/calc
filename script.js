function plus () {
    var num1, num2, result;
    
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('anSwer').innerHTML = result;

};

function minus () {
    var num1, num2, result;
    
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('anSwer').innerHTML = result;

};

function multiPly () {
    var num1, num2, result;
    
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('anSwer').innerHTML = result;

};

function diviSion () {
    var num1, num2, result;
    
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById('anSwer').innerHTML = result;

};