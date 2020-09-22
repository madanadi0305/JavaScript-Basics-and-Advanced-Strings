function checkAlphabet(string){
var dup;
var count=0;  
var array=[];
for(var i=0;i<string.length;i++){
if(string[i]<='Z' && string[i]>='A'){
dup=string.charCodeAt(i)-65;
array[dup]=dup;
}
else if(string[i]<='z' && string[i]>='a'){
dup=string.charCodeAt(i)-97;
 array[dup]=dup; 
}
  

}
  
console.log(array);
console.log(array.length); 
var is_AllAlphabet;  
for(var i=0;i<=array.length;i++){
 is_AllAlphabet=1; 
if(array[i]<=25 && array[i]>=0){
  //is_AllAlphabet=0;
 // break;
count=count+1;  
//return false;
}
  
  
}
  if(count===26)
  {return true;}
  else{
  return false;
  }
  }
module.exports=checkAlphabet;

