const findSubString=(string,substring)=>{
var is_Found;

var index=string.indexOf(substring);
while(true){
  is_Found=0;
if(index===-1){
is_Found=0;
//break;
}
else{
  is_Found=1;
}
break;
}
if(is_Found===1){
  return true;
}
else{
  return false;
}
};
module.exports=findSubString;
