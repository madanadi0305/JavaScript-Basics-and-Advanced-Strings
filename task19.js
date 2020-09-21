function checkCaseOfAlphabet(string,index){
var str=string.split("");
var is_UpperCase;
for(var i=0;i<str.length;i++){
if(i===index){
if(str[i]===str[i].toUpperCase())
{is_UpperCase=1;
  break;
}
}

}
if(is_UpperCase===1){
    return true;
}
else{
return false;

}
}
module.exports=checkCaseOfAlphabet;
