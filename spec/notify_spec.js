describe('Should notification() test', function() {

    it('call the function getNumber()', function() {
        var user = new Verify('0815523468', "registed");

        spyOn(user, "getNumber");

        user.notification();

        expect(user.getNumber).toHaveBeenCalled();
    })

    it('call the function getText()', function() {
        var user = new Verify('0815523468', "registed");

        spyOn(user, "getText");

        user.notification();

        expect(user.getText).toHaveBeenCalled();
        
    })
})