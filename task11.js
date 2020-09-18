const numberToEnglishForm=(number)=>{
var append_string="";
var remainder=0;
var final_string="";
remainder=parseInt(number%10);
if(remainder===1){
    append_string="st";
    final_string=number+append_string;
}
else if(remainder===2){
    append_string="nd";
    final_string=number+append_string;
}
else if(remainder===3){
    append_string="rd";
    final_string=number+append_string;
}
else{
    append_string="th";
    final_string=number+append_string;
}
return final_string;
};
module.exports=numberToEnglishForm;
