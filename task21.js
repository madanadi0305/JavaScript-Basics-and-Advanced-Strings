const converttoLowerCase=(string)=>{
var str="";
for(var i=0;i<string.length;i++){
    if(string[i]===string[i].toUpperCase()){
   str=str+string[i].toLowerCase();

    }
    else{
        str=str+string[i];
    }
}
return str;
};
module.exports=converttoLowerCase;
