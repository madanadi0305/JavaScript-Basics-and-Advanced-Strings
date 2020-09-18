function partialString(string,index,special_character){
    var result="";
    
    var string1=string.split("");
    for(var i=0;i<string1.length;i++){
        if(i<index){
            result=result+string1[i];
        }
        if(i===index){
            break;
        }
        
    }
    result=result+special_character;
    return result;
}
module.exports=partialString;
