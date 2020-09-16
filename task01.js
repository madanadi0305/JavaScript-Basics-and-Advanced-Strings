const  checkStringLength=(inputString)=>{
var string1=inputString.split("");
var length;
if(string1===""){
  length=string1.length;  
}
else if(string1===" " ){
length=string1.length;
 
}
else{
    length=string1.length;
    return length;
}

};

module.exports=checkStringLength;
