function incrementMessage(string,number){
var array=[];
var dup=number;
  for(var i=0;i<string.length;i++){
var elem=string.charCodeAt(i)+number;
 if(elem<=122 && elem>=97){
 array[i]=String.fromCharCode(elem);
 
 } 
   else if(elem<=90 && elem>=65){
   array[i]=String.fromCharCode(elem);
   
   }

   else if((elem>122)){
    //dup=dup-122;
    //dup=dup%26+number;
    //dup=dup+96;
    array[i]="a"; 
    }

}
console.log(array);
for(var j=0;j<array.length;j++){
if(array[j]===undefined|| array[j]===" "|| array[j]===null){
array[j]=" ";
}
  
}
 return array.join(""); 
}
module.exports=incrementMessage;
