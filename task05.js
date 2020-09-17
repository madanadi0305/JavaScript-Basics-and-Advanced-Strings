const returnFirstLetters=(string)=>{
var inputString=string;
splitted_string=inputString.split(" ");
var first_alphabet_array=[];
var substring="";
for(var i=0;i<splitted_string.length;i++){
substring=splitted_string[i];
for(var j=0;j<substring.length;j++){
    if(j===0){
    first_alphabet_array.push(substring[j]);
    break;
    }
}

}
return first_alphabet_array;
};
module.exports=returnFirstLetters;
