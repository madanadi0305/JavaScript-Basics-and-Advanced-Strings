function repeatString(string,number) {
    var repeat_string="";
   for(var i=0;i<number;i++){
       repeat_string=repeat_string+string;
   }
   return repeat_string;
}
module.exports=repeatString;
