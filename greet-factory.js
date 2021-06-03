function greetingEvent(greetedList=[]) {
    var greetedNames =greetedList;
    var greetingsCounter = 0;
    if(greetedNames !== null){
        greetedNames = greetedList;;
    } else{
        greetedNames = [];
    }
    
    function getNameAndLanguage(name, myLanguage) {
        if (myLanguage === "english") {
            return "Hello, " + name;
        } else if (myLanguage === "sepedi") {
            return "Dumela, " + name;
        } else if (myLanguage === "zulu") {
            return "Sawubona, " + name;
        }
    }
    function setName(userName) {
        if (greetedNames[userName] === undefined) {
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            greetedNames[userName] = 0;
        }
    }
    function getName(){
        return greetedNames;
    }
    function getCounter() {
        console.log(Object.keys(greetedNames));

        return Object.keys(greetedNames).length //get the keys from our object to return the names of people from the list
    }
    
    return {
        getNameAndLanguage,
        setName,
        getCounter,
        getName
       // counterStorage
    }
    
}

