 function checkOccurence(string,substring){
   var count=0;
   var is_Found;
   var index=string.indexOf(substring);
    if(substring===""){
         //is_Found=0;
      return false;
       }
   while(true){
     is_Found=0;
     if(index!==-1){
       is_Found=1;
     //count=count+1;
       //index=string.indexOf(substring,index+1);
     }
     
       break;
     
     
     
   }
   if(is_Found===1){
     return true;
   }
 else{
   return false;
 }
 }
 module.exports=checkOccurence;
