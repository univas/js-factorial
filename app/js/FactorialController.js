'use strict';

var FactorialController = (function () {
    
    function init() {
        _setButton();
    }

    function _setButton() {
        var button = document.getElementById('btnCalculate');
        button.addEventListener('click', _eventClickHandler);
    }

    function _eventClickHandler(event) {
        var result = FactorialService.calculate(_getNumber());
        showResult(result);
    }

    function _getNumber() {
        var inputNumber = document.getElementById('number');
        var number = parseInt(inputNumber.value);
        return number;
    }

    function showResult(result) {
        var span = document.getElementById('result');
        span.innerHTML = result || 0;
    }

    //public api
    return {
        'init': init
    }

})();
