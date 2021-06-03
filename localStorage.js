function myStoreGreetedNames(greetedName){
    
    var nameList = JSON.stringify(greetedName); 
    localStorage.setItem("greetPeople", nameList);  
//console.log(greetedName)
}
function getStoredNames(){
    var storeNames= localStorage.getItem("greetPeople");
 //   console.log(storeNames)
    return JSON.parse(storeNames);
}