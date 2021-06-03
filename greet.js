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

var storedGreet = getStoredNames();
var greet = greetingEvent(storedGreet);
//var myCounter = 0;
myCount.innerHTML = greet.getCounter();

/*
if(localStorage.getItem("name")){
    myCounter = Number(localStorage["name"]);
    nameList = JSON.parse(localStorage["name"].length);

    myCount.innerHTML = nameList;
}*/
//console.log(storedGreet)
function myGreetings() {                                 
    var inputRadio = document.querySelector("input[name='languageRadio']:checked");
    var inputName = nameText.value;
    var regExp =/^[a-zA-Z]{3,15}$/gi;
    if (!inputRadio) {
        return languageWarning.innerHTML = "Please select a language!";
    } else if (!inputName) {
        languageWarning.innerHTML = "";

        return nameWarning.innerHTML = "Please enter a name!";
    } else if(!inputName.match(regExp)){
        return nameWarning.innerHTML = "Name must not include numbers or special";
    }
    else {
        if (inputRadio) {
            nameWarning.innerHTML = "";
            languageWarning.innerHTML = "";

            theGreetings.innerHTML = greet.getNameAndLanguage(inputName, inputRadio.value);
            greet.setName(inputName);
            myCount.innerHTML = greet.getCounter();

            myStoreGreetedNames(greet.getName()) || [];
            getStoredNames();
        }
    }

}
greetBtn.addEventListener('click', myGreetings);
