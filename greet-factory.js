function GreetingEvent(greetedList) {
    var greetedNames =greetedList || [];
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
        if (!greetedNames.includes(userName)) {
           // greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            console.log(greetedNames)
            greetedNames.push(userName) ;
        }
    }
    function getName(){
       // console.log(greetedNames)
        return greetedNames;
    }
    function getCounter() {
        console.log(greetedNames);

        return greetedNames.length //get the keys from our object to return the names of people from the list
    }
    
    return {
        getNameAndLanguage,
        setName,
        getCounter,
        getName
    }
    
}

