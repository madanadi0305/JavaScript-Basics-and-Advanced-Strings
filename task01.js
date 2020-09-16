const  checkStringLength=(inputString)=>{
var string1=inputString.split("");
var length;
var string_zero='zero';
if(string1===""){
  return string_zero;  
}
else if(string1===" " ){
//length=string1.length;
 return string_zero;
}
else{
    length=string1.length;
return length;    
}

};

module.exports=checkStringLength;
