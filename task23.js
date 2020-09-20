const incrementMessage=(string,number)=>{
var val;
var elem;
var str1=[];
var str2=[];
for(var i=0;i<string.length;i++){
/*if(string[i]===" "){
  //continue;
  str1.push(" ");
}*/
//else{
str1.push(string.charCodeAt(i)+number);
//}
}

for(var i=0;i<str1.length;i++){
  elem=String.fromCharCode(str1[i]);
  str2.push(elem);
}
return str2.join("");
};
module.exports=incrementMessage;
