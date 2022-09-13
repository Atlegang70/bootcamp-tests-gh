describe('Isweekday Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("true", isWeekday("Monday"));

    });
    it('This should PASS' , function(){
        assert.equal("true", isWeekday("Tuesday"));

    });

    it('This should PASS' , function(){
        assert.equal("true", isWeekday("Wensday"));

    });

});