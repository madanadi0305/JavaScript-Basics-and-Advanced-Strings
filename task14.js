function returnPartOfString(string,character,flag){
var string1=string.split("");
var result_string="";
var string2=string.split(character);
for(var i=0;i<string1.length;i++){
    if(string1[i]==character){
     if(flag===1){
         result_string=result_string+string2[0];
         break;
     }   
     else if(flag==2){
         result_string=result_string+string2[1];
         break;
     }
    }
    
}
    
return result_string;    
}
module.exports=returnPartOfString;
