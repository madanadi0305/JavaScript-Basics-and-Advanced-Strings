const multiplyString=(string1,string2)=>{
var product_string="";

product_string=(parseInt(string1)*parseInt(string2)).toString(2);
return product_string;
};
module.exports=multiplyString;
