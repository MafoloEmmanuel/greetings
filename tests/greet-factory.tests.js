describe("Greetings Exercise Tests", function(){
    it('Should check if English is selected', function(){
        let myGreet = GreetingEvent();
        myGreet.getNameAndLanguage();
        assert.equal(("Emmanuel","english"), "Hello, Emmanuel");
    })
})