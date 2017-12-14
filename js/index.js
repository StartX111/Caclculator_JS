var domCalcKey = document.getElementById('calculator');
domCalcKey.addEventListener('click',main);
var str = ''; //строка для занесения в dataArgument
var stateDot = false;

function main(event) {
    var symbolData = event.target.getAttribute('data-value'); // получаем символ
    var classSymbol = event.target.className; // получаем класс символа(если есть)

    if (classSymbol === 'cancel') {
        str = '';
    }
    if (classSymbol === 'number') {
        if (symbolData ==='.' && stateDot === false) {
            if (!isFinite(str.charAt(str.length-1))){
                str += '0';
            }
            str += '.';
            stateDot = true;
        }
        if (isFinite(symbolData)) {
            str +=symbolData;
        }
        if (symbolData === '=') { //если символ = запускаем вычисления
            calc();
        }
    }
    if (classSymbol === 'operator') {
        stateDot = false; //любой оператор признак что сбросить статус точки для другого числа
        if (isFinite(str.charAt(str.length-1))) {
            str += symbolData;
        } else {
            if ((isFinite(str.charAt(str.length-2))) && (str.charAt(str.length - 1) === '-') && (symbolData === '-')) {
                str += symbolData;
            } else if ((isFinite(str.charAt(str.length-2))) && (!isFinite(str.charAt(str.length-1)) && (str.charAt(str.length-1) !== symbolData))){
                str = str.slice(0, -1);
                str += symbolData;
            }
        }
    }
    document.getElementById('output').innerHTML = str; // выводим внужное поле
}

function calc() { //тут происходят вычисления
    // var result = 0;
    // var operand2 = 0;
    //
    // var counter = 1;
    // var startPosition = 0;
    // var operator;
    // while (isFinite(str.charAt(counter))) {
    //     counter++;
    // }
    // result = str.substr(startPosition,counter);
    // operator = ++counter;
    // startCounter = ++counter; // вычитали перво число и занесли его в result
    //
    // while(counter < str.length){
    //     while (isFinite(str.charAt(counter))) {
    //         counter++;
    //     }
    //     operand2 = str.substr(startCounter,counter);
    //     switch (operator){
    //         case '+':
    //             result = result + operand2;
    //             break;
    //         case '-':
    //             if (counter++ === '-'){
    //                 counter++;
    //             }
    //             result -= operand2;
    //             break;
    //         case '*':
    //             result *= operand2;
    //             break;
    //         case '/':
    //             result /= operand2;
    //             break;
    //         default: {
    //             operator = counter++;
    //         }
    //     }
    //     startCounter = counter;
    //
    // }
    // str = result;
    str = eval(str); //хак и магия в одну строку
}
