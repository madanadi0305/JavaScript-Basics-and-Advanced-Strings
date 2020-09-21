function endsWithSubstring(string,substring){
var string1=string.split(" ");
  var str2=[];
  var is_Found;
  if(string===null||string===""||substring===null||substring===""){
  return false;
  }
  
  var n=string1.length;
for(var i=0;i<n;i++){
is_Found=0;
  if(i===n-1){
var k=string1[i];
var last_index=k.length-1;
  
for(var j=last_index;j>(last_index-substring.length);j--)  
str2.push(k[j]);

}

  var str3=str2.reverse().join("");

   if((str3.toUpperCase()===substring.toUpperCase())||(str3.toLowerCase()===substring.toLowerCase())){
   is_Found=1;
   break;
   }
  
} 
 if(is_Found===1){
 return true;
 } 
else{
return false;
}
  

}

module.exports=endsWithSubstring;


