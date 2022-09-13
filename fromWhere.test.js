describe('fromWhere Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("Bellville", fromWhere("CY"));

    });
    it('This should pass' , function(){
       
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

    it('This should pass' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');

    });

});