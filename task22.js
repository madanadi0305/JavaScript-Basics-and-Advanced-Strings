const findSubString=(string,substring)=>{
//var is_Found;
var index=string.indexOf(string);
if(index!==-1){
  return true;
}
if(substring===" "){return false;}
else{
  return false;
}

};
module.exports=findSubString;
