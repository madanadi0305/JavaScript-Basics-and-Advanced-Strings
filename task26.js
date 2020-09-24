function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");
//console.log(split_matrix);
var n=string.length;
var string1=string;  
var rotated_string,min,TEMP,is_Anagram;
var FIRSTCHARSTRING="";  
  for(var i=0;i<split_matrix.length;i++){
  if(i%2===0){
  var mag=split_matrix[i+1];
  if(split_matrix[i]==="L"){
  rotated_string=string.slice(mag)+string.slice(0,mag);
  }
    else if(split_matrix[i]==='R'){
    rotated_string=string.slice(n-mag)+string.slice(0,n-mag);
    
    }
    FIRSTCHARSTRING=FIRSTCHARSTRING+rotated_string[0];  
  }
  
string=rotated_string;
    
  }
  for(var i=0;i<FIRSTCHARSTRING.length;i++){
    min=i;
   for(var j=i+1;j<FIRSTCHARSTRING.length;j++) 
   {if(FIRSTCHARSTRING[j]<FIRSTCHARSTRING[min]){
     min=j;
   }
   }
   if(min!=i){
    TEMP=FIRSTCHARSTRING[min]; 
    FIRSTCHARSTRING[min]=FIRSTCHARSTRING[i];
    FIRSTCHARSTRING[i]=TEMP;

   }
  }

  for(var i=0;i<string1.length;i++){
    is_Anagram=0;
   if(string1.indexOf(FIRSTCHARSTRING)!==-1){
   is_Anagram=1;

   }

  }
  if(is_Anagram===1){
   return true;

  }
  else{
  return false;

  }
}
module.exports=rotate;
//var a=rotate("abcde","L 3 R 2 R 4");
//console.log(a);
