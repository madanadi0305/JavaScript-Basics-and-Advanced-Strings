const findSubString=(string,substring)=>{
var is_Found;
if(substring===" " || substring==="")
  {
    return false;
  }
  else{
  for(var i=0;i<string.length;i++){
    is_Found=false;
    if(string.indexOf(substring)!==-1){
      is_Found=true;
      break;
    }
  }
  }
  if(is_Found===true){
    return true;
  }
  else{
    return false;
  }
  



};
module.exports=findSubString;
