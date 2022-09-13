describe('YearsAgo Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("22", yearsAgo("2000"));

    });
    it('This should PASS' , function(){
        assert.equal("23", yearsAgo("1999"));

    });

    it('This should PASS' , function(){
        assert.equal("2", yearsAgo("2020"));

    });

});