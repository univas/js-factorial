var FactorialService = (function () {

    function isNumberValid(number) {
        return (number !== undefined)
            && (number > -1)
            && (typeof(number) !== 'string');
    }
    
    function calculate(number) {
        if(!isNumberValid(number)) return null;
        var result = 1;
        if(number === 0 || number === 1) return result;

        for (var i = 2; i <= number; i++) {
            result = result * i;
        }
        return result;
    }

    //public api
    return {
        "calculate": calculate
    }

})();