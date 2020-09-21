function incrementMessage(string,number){
var str2=[];
 for(var i=0;i<string.length;i++){
//var k=string[i];]
var ascii_code=string.charCodeAt(i)+number;
if((ascii_code>=97 && ascii_code<=122)||(ascii_code<=90 && ascii_code>=65)){
str2.push(String.fromCharCode(ascii_code));
}  
   else if(string[i]===" "){
   str2.push(" ");
   }
 else{continue;}  
}
return str2.join("");
}
module.exports=incrementMessage;
