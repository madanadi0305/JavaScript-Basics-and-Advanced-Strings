const incrementMessage=(string,number)=>{
var val;
var str2="";
var str1=[];
for(var i=0;i<string.length;i++)
{ val=string.charCodeAt(i)+number;
   str1.push(val);
}
str2=str2+String.fromCharCode.apply(null,str1);
return str2;
};
module.exports=incrementMessage;
