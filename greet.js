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
greet.greetings(inputRadio, inputName);
  theGreetings.innerHTML = greet.greetings(inputRadio, inputName);
  myCount.innerHTML = greet.nameCounter();

}
greetBtn.addEventListener('click', myGreetings);
