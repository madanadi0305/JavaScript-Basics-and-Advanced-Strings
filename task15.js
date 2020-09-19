function firstOccurenceOfSubString(string,substring){
  var string1=string.split(" ");
  var k,is_Found,position;
  var string2="";
 // var position;
  for(var i=0;i<string1.length;i++){
    is_Found=false;
    k=string1[i];
    
    if(k===substring){
     
      is_Found=true;
      position=i;     
      break;
    }
    
    
  }
  
  if(is_Found===true){
    string1.splice(position,1);
     string2=string1.join(" ");
   
    return string2;
  }
  else{
    return false;
  }
  
}
module.exports=firstOccurenceOfSubString;
