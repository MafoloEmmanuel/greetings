var theName = document.querySelector(".nameTextBox");
var theGreetBtn = document.querySelector(".greetNameBtn");
var myGreetings = document.querySelector('.myGreetings');
var greetRadios = document.querySelector('.languageRadioName');
var theLanguages = document.querySelector('.languages')
var theGreetMe = theGreetExercise();

function greetMe(){

    var nameText = theName.value;
 // var nameRadio = document.querySelector("input[name='languageRadio']:checked");
   // theGreetMe.greetingsLanguage(nameRadio);
    theGreetMe.greet(nameText);
    myGreetings.innerHTML = theGreetMe.greet(nameText);
// theLanguages.innerHTML = theGreetMe.greetingsLanguage(nameRadio);

}
theGreetBtn.addEventListener('click', greetMe)