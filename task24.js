function checkAllAlphabets(string){
    var is_Alphabet;
if(string===""|| string===null){
    return false;
}
var string1=string.split("");
for(var i=0;i<string1.length;i++)
{var elem=string1[i];
 if(elem>='A'&& elem<='Z'){
     is_Alphabet=1;
 }
 else if(elem>='a'&& elem<='z'){
     is_Alphabet=2;
 }

}
if(is_Alphabet===1||is_Alphabet===2){
    return true;
}
else{
    return false;
}
}
module.exports=checkAllAlphabets;
