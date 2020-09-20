function findAll(string,substring){
   var count=0;
   var index=string.indexOf(substring);
   while(true){
     if(index!==-1){
     count=count+1;
       index=string.indexOf(substring,index+1);
     }
     else{
       break;
     }
     
     
   }
  return count; 
 }
 module.exports=findAll;  
