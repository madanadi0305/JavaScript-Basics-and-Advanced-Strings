const HiddenEmailId=(emailId)=>{
var email_splitted=emailId.split("@");
var email_sub_string1=email_splitted[0];
var email_sub_string2=email_splitted[1];
var sub_string_sliced=email_sub_string1.slice(0,4);
for(var i=4;i<email_sub_string1.length;i++){
    sub_string_sliced=sub_string_sliced+".";
}
sub_string_sliced=sub_string_sliced+"@"+email_sub_string2;
return sub_string_sliced;
};
module.exports=HiddenEmailId;
