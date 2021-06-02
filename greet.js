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


var greet = greetingEvent();
var myCounter = 0;

if(localStorage.getItem("nameList")){
    myCounter = Number(localStorage["nameList"]);
    nameList = JSON.parse(localStorage["nameList"].length);

    myCount.innerHTML = nameList;
}
function myGreetings() {                                 
    var inputRadio = document.querySelector("input[name='languageRadio']:checked");
    var inputName = nameText.value;
    var regExp =/^[a-zA-Z]{3,15}$/gi;
    var myCounter = 0;



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

            var nameList ;
            myCounter++;
          
            localStorage.setItem("name", nameList)         
            localStorage.setItem("name", JSON.stringify(nameList)); 
          //  nameList = JSON.parse(localStorage["nameList"]);
            myCounter = localStorage["nameList"];
            // myCount.innerHTML = nameList;
       
        }
    }

}
greetBtn.addEventListener('click', myGreetings);
