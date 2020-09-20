function checkLastSubString(string,substring){
    var string1=string.split(" ");
    var is_Found;
   // if(substring=" "){
     // return false;
    //}
    for(var i=0;i<string1.length;i++){
      is_Found=0;
      if(i===(string1.length-1)){
        
        if(string1[i]===substring){
         is_Found=1; 
          //break;
        }
        else if(string1.indexOf(substring,string1.length-substring.length)!==-1){
        is_Found=2;
        }
      }
    }
   if(is_Found===1||is_Found===2){
     return true;
   } 
    else{
      return false;
    }
    
  }

  module.exports=checkLastSubString;
