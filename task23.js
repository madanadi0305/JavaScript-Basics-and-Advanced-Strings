function incrementMessage(string,number){
var str2=[];
var dup=number;
 for(var i=0;i<string.length;i++){
//var k=string[i];]
var ascii_code=string.charCodeAt(i)+number;
var char_code=string.charCodeAt(i);
if((ascii_code>=97 && ascii_code<=122)||(ascii_code<=90 && ascii_code>=65)){
str2.push(String.fromCharCode(ascii_code));
}  
   else if(string[i]===" "){
   str2.push(" ");
   }
 else if(ascii_code>=122){
  dup=dup-(122-char_code);
  dup=dup%26;
   str2.push(String.fromCharCode(dup+96));
 }
 
}
return str2.join("");
}
module.exports=incrementMessage;
