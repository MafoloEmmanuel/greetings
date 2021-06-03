function myStoreGreetedNames(greetedName){
    //put the objects in storage
    console.log(greetedName)

    var nameList = JSON.stringify(greetedName); 

    localStorage.setItem("greetPeople", JSON.stringify(greetedName));  
    console.log(nameList)

}
function getStoredNames(){
    //retrieve from storage
    var storeNames= localStorage.getItem("greetPeople");
 //   console.log(storeNames)
    return JSON.parse(storeNames);
}