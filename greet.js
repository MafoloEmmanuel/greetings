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
var warning = document.querySelector('.warningMessage');
var reset = document.querySelector(".resetButton")

/*if (localStorage["greetPeople"]) {
    names = JSON.parse(localStorage.getItem("greetPeople"));
}
*/

//retrieve the stored values from the local storage

if (localStorage["greetPeople"]) {
    greet = GreetingEvent(JSON.parse(localStorage["greetPeople"]))
} else {
    greet = GreetingEvent([])
}
myCount.innerHTML = greet.getCounter();
function myGreetings() {
    var inputRadio = document.querySelector("input[name='languageRadio']:checked");
    var inputName = nameText.value;
    var regExp = /^[a-zA-Z]{1,15}$/gi;
    if (!inputRadio) {
        warning.innerHTML = "Please select a language!";
        setTimeout(function () {
            warning.innerHTML = "";

        }, 4000);
    } else if (!inputName) {
        warning.innerHTML = "Please enter a name!";
        setTimeout(function () {
            warning.innerHTML = "";
        }, 4000);

    } else if (!inputName.match(regExp)) {

        warning.innerHTML = "Name must not include numbers or characters";
        setTimeout(function () {
            warning.innerHTML = "";
        }, 4000);
    } else {
        if (inputRadio) {

            theGreetings.innerHTML = greet.getNameAndLanguage(inputName, inputRadio.value);
            greet.setName(inputName);
            //store values in the local storage
            localStorage.setItem("greetPeople", JSON.stringify(greet.getName()));
            myCount.innerHTML = greet.getCounter();

            setTimeout(function () {
                theGreetings.innerHTML = "";

            }, 5000)

        }
    }
   // myRadio.checked = false;

    nameText.value="";

}

myCount.innerHTML = greet.getCounter();

greetBtn.addEventListener('click', myGreetings);


reset.addEventListener('click', function () {

    localStorage.removeItem("greetPeople");
    greet.reset();
    myCount.innerHTML = greet.getCounter();
    myRadio.checked = false;

   // nameText.value="";

    warning.innerHTML = "The counter has been reset to zero!";
    setTimeout(function () {
        warning.innerHTML = "";
    }, 3000);
})
