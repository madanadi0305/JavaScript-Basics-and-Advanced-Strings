const  checkStringLength=(inputString)=>{
var string1=inputString.split("");
var length;
if(string1===""||string1===" " ){
 return 'zero';
}
else{
    length=string1.length;
    return length;
}

};

module.exports=checkStringLength;
