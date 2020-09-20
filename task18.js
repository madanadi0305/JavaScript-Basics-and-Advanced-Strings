function checkLowerCase(string,index){
    var is_True;
for(var i=0;i<string.length;i++){
    is_True=0;
    if(i===index){
        if(string[i]===string[i].toLowerCase()){
            is_True=1;
            break;
        }
    }
}
if(is_True===1){
    return true;
}
else{
    return false;
}
}
module.exports=checkLowerCase;
