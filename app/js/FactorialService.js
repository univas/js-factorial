var FactorialService = (function () {

    var results = [1, 1];

    function isNumberValid(number) {
        return (number !== undefined)
            && (number > -1)
            && (typeof(number) !== 'string');
    }
    
    function calculate(number) {
        while(number >= results.length) {
            results.push(results.length*calculate(results.length-1));
        }
        return results[number];
    }

    //public api
    return {
        "calculate": calculate
    }

})();