function capitaliseVowels(string){
var string1=string.split("");
var result=[];
for(var i=0;i<string1.length;i++){
 if(string1[i]==='a'||string1[i]==='e'||string1[i]==='i'||string1[i]==='o'||string1[i]==='u') {
result.push(string1[i].toUpperCase());
 }
 else{
     result.push(string1[i].toLowerCase());
 }  
}
var result_final=result.join("");
return result_final;
}
module.exports=capitaliseVowels;
