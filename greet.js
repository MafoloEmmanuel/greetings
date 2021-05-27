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

var greet = greetingEvent();
function myGreetings(){
var inputRadio = document.querySelector("input[name='languageRadio']:checked");
var inputName = nameText.value;
if(inputRadio){
theGreetings.innerHTML= greet.getNameAndLanguage(inputName, inputRadio.value);
greet.setName(inputName);
myCount.innerHTML = greet.getCounter();
}

}
greetBtn.addEventListener('click', myGreetings);
