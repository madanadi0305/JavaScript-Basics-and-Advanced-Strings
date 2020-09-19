function firstOccurenceOfSubString(string,substring){
  var string1=string.split(" ");
  var k,is_Found;
  var string2="";
  var string3="";
  for(var i=0;i<string1.length;i++){
    is_Found=false;
    k=string1[i];
    
    if(k===substring){
     
      is_Found=true;
     
      break;
    }
    
    
  }
  
  if(is_Found===true){
    string2=string1.join(" ");
   string3= string2.replace(substring,'');
   
    return string3;
  }
  else{
    return false;
  }
  
}
module.exports=firstOccurenceOfSubString;
