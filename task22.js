function findSubstring(string,substring){
var str2="";
var k,is_Found;  
var length=substring.length;
  if(substring===""||substring===null||string===""||substring===null){
  return false;
  }
  
  for(var i=0;i<string.length;i++){
    is_Found=0;
  k=string.slice(i,(length+i));
    if((k.toUpperCase()===substring.toUpperCase())|| (k.toLowerCase()===substring.toLowerCase()))
    {is_Found=1;
     break;
    }
    
  }
  if(is_Found===1){
  return true;
  
  }
  else {
  return false;
  }
}

module.exports=findSubstring;
