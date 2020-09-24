function endsWithSubstring(string,substring){
var string1=string.split(" ");
  var str2=[];
  var is_Found;
  if(string===null||string===""||substring===null||substring===""){
  return false;
  }
  var n=string.length;
  var k=substring.length;
  for(var j=(n-1);j>=(n-k);j--){
  str2.push(string[j]);
  }
  var str3=str2.reverse().join("");
  //console.log(string);
  //console.log(str3);
if((str3.toLowerCase()===substring.toLowerCase())||(str3.toUpperCase()===substring.toUpperCase())){
return true;
}
  else{
  return false;
  }
}

//var a=endsWithSubstring("JS PHP PYTHON","PHP python");
//console.log(a);
module.exports=endsWithSubstring;
