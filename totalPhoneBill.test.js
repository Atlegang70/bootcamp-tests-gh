describe('totalPhoneBill Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("R4.05", totalPhoneBill("sms, sms, call"));

    });
    it('This should PASS' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    });
    it('This should PASS' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });
});