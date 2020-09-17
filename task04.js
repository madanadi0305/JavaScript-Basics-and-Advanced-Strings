const HiddenEmailId=(emailId)=>{

 var email_split=emailId.split("@");
 var email_sub_string1=email_split[0];
 var email_sub_string2=email_split[1];
 var sub_string1="";
 sub_string1=sub_string1+email_sub_string1.slice(0,4);
 for(var i=4;i<sub_string1.length;i++){
     sub_string1=sub_string1+".";

 }
sub_string1=sub_string1+"@"+email_sub_string2;
 return sub_string1;
};
module.exports=HiddenEmailId;
