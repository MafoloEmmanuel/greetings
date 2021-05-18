var theName = document.querySelector(".nameTextBox")
var theGreetBtn = document.querySelector(".greetNameBtn")
var myGreetings = document.querySelector('.myGreetings')
var theGreetMe = theGreetExercise();

function greetMe(){
    var nameText = theName.value;
    theGreetMe.greet(nameText);
    myGreetings.innerHTML = theGreetMe.greet(nameText)
}
theGreetBtn.addEventListener('click', greetMe)