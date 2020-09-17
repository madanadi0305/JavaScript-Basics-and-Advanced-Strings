const HiddenEmailId=(emailId)=>{
var email_splitted=emailId.split("@");
var email_sub_string1=email_splitted[0];
var sub_string_sliced=email_sub_string1.slice(0,4);

return sub_string_sliced;
};
module.exports=HiddenEmailId;
