function checkLastSubString(string,substring){
    var string1=string.split(" ");
    var is_Found;
    for(var i=0;i<string1.length;i++){
      is_Found=0;
      if(i===(string1.length-1)){
        if(string1[i]===substring){
         is_Found=1; 
          break;
        }
        
      }
    }
   if(is_Found===1){
     return true;
   } 
    else{
      return false;
    }
    
  }

  module.exports=checkLastSubString;
