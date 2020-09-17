function capitaliseFirstLetter(string){
    split_string=string.split(" ");
    var k;
    var result_string="";
    for(var i=0;i<split_string.length;i++){
        k=split_string[i];
        for(var j=0;j<k.length;j++){
            if(j===0){
            result_string=result_string+k[j].toUpperCase();
            }
            else{
                result_string=result_string+k[j];
            }
        }
 if(i<split_string.length){
     result_string=result_string+" ";  
 }
      
    }
    return result_string;
}

module.exports=capitaliseFirstLetter;
