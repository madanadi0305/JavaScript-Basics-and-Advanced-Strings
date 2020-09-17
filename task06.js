const capitaliseFirstLetter=(string1)=>{
var string1_split=string1.split(" ");
var sub_string1=string1_split[0];
var sub_string="";
for(var i=0;i<sub_string1.length;i++){
    if(i==0){
    sub_string=sub_string+sub_string1[i].toUpperCase();
    }
 else{
     sub_string=sub_string+sub_string1[i];
 }   
}
for(var i=1;i<string1_split.length;i++){
    sub_string=sub_string+" "+string1_split[i];
}

return sub_string
};
module.exports=capitaliseFirstLetter;
