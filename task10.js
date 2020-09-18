function insertStringAtIndex(string,substring,index){
var result="  ";
var string2="";
var n=string.length;
var string1=string.split("");
if(index===0){
    result=result+substring+" "+string;
    
}
else if(index===n-1){
    result=result+string+" "+substring;
}
else{
    string2=string.slice(index,n);
    result=result+string.slice(0,index)+substring+" "+string2;

    
}

    
return result;    

}
module.exports=insertStringAtIndex;
