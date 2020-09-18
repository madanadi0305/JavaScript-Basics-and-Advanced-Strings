const caseConversion=(string)=>{
    var ch;
    var result="";
  var  string1=string.split("");
    for(var i=0;i<string1.length;i++){
     ch=string1[i];
     if(ch===ch.toUpperCase()){
      result=result+ch.toLowerCase();
     }
     else if(ch===ch.toLowerCase){
         result=result+ch.toUpperCase();
     }

    }
    return result;
};
module.exports=caseConversion;
