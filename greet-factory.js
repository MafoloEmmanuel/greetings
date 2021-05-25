function greetingEvent(){
   var count=0

   function greetings(name, myLanguage){
    if(myLanguage=== "english"){
        return 'Hello, '+ name;
    } else if(myLanguage==='sepedi'){
        return 'Dumelo, '+ name;
    } else if(myLanguage==='zulu'){
        return 'Sawubona, '+ name;
    }
   }
    function nameCounter(){
        if(greetings()){
            return count;
        }
    }
    return {
        greetings,
        nameCounter
    }
      
}