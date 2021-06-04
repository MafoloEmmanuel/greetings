//get the reference to the textbox
var nameText = document.querySelector(".nameTextBox");
//get the reference to the greet button
var greetBtn = document.querySelector(".greetNameBtn");
//get the reference to the message to be displayed
var theGreetings = document.querySelector(".myGreetings");
//get reference to the counter
var myCount = document.querySelector('.counter');
//get reference to all the radio buttons
var myRadio = document.querySelector('.languageRadioName');
var nameWarning = document.querySelector('.nameWarning');
var languageWarning = document.querySelector('.languageWarning');
var reset = document.querySelector(".resetButton")
var names  = [];
//retrieve the stored values from the local storage
/*if (localStorage["greetPeople"]) {
    names = JSON.parse(localStorage.getItem("greetPeople"));
}
console.log(names);*/
var greet = (localStorage["greetPeople"])?GreetingEvent(JSON.parse(localStorage["greetPeople"])): GreetingEvent([]);
myCount.innerHTML = greet.getCounter();
function myGreetings() {
    var inputRadio = document.querySelector("input[name='languageRadio']:checked");
    var inputName = nameText.value;
    var regExp = /^[a-zA-Z]{3,15}$/gi;
    if (!inputRadio) {
        return languageWarning.innerHTML = "Please select a language!";
    } else if (!inputName) {
        languageWarning.innerHTML = "";

        return nameWarning.innerHTML = "Please enter a name!";
    } else if (!inputName.match(regExp)) {
        languageWarning.innerHTML = "";
        return nameWarning.innerHTML = "Name must not include numbers or special characters";
        
    }
    else {
        if (inputRadio) {
            nameWarning.innerHTML = "";
            languageWarning.innerHTML = "";

            theGreetings.innerHTML = greet.getNameAndLanguage(inputName, inputRadio.value);
            greet.setName(inputName);
            //store values in the local storage
            localStorage.setItem("greetPeople", JSON.stringify(greet.getName()));
            myCount.innerHTML = greet.getCounter();
            setTimeout(function(){
                theGreetings.innerHTML = "";
            }, 4000)

        }
    }


}
greetBtn.addEventListener('click', myGreetings);


reset.addEventListener('click', function(){
    localStorage.removeItem("greetPeople");
    myCount.innerHTML = greet.getCounter();
})