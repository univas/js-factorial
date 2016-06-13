var FactorialService = (function () {

    var _results = [1, 1];

    function _isNumberValid(number) {
        return (number !== undefined)
            && (number > -1)
            && (typeof(number) !== 'string');
    }
    
    function calculate(number) {
        if(!_isNumberValid(number)) return null;
        while(number >= _results.length) {
            _results.push(_results.length * calculate(_results.length - 1));
        }
        return _results[number];
    }

    //public api
    return {
        "calculate": calculate
    }

})();
