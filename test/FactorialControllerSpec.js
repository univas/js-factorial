'use strict';

describe('FactorialController.js', function () {

    beforeEach(function () {
        fixture.base = 'test/fixtures';
        fixture.load('factorial.html');
        spyOn(FactorialController, 'init').and.callThrough();
    });

    it('should be able to initialize', function () {
        //given
        FactorialController.init();

        //then
        expect(FactorialController.init).toHaveBeenCalled();
    });

    
    
    it('should calculate factorial from a given number', function() {
        //given
        FactorialController.init();

        //and
        document.getElementById('number').value = 5;

        //when
        document.getElementById('btnCalculate').click();

        //then
        expect(document.getElementById('result').innerHTML).toBe('120');
    });
        
});