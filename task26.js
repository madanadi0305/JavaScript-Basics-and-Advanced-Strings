function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");
//console.log(split_matrix);
var n=string.length;
var charString;  
var string1=string;  
var rotated_string,min,TEMP,is_Anagram;
var FIRSTCHARSTRING="";  
  for(var i=0;i<split_matrix.length;i++){
  if(i%2===0){
  var mag=split_matrix[i+1];
  if(mag>=9 && mag<=0){break;}
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
  //console.log(string);
  //console.log(FIRSTCHARSTRING);
  charString=FIRSTCHARSTRING.split("");  
  for(var i=0;i<charString.length;i++){
    min=i;
   for(var j=i+1;j<charString.length;j++) 
   {if(charString[j]<charString[min]){
     min=j;
   }
   }
   if(min!=i){
    TEMP=charString[min]; 
    charString[min]=charString[i];
    charString[i]=TEMP;

   }
  }
  var charStr=charString.join("");
 //  charStr=charStr.join("");
  //console.log(charStr);
  for(var i=0;i<string1.length;i++){
    is_Anagram=0;
   if(string1.indexOf(charStr)!==-1){
   is_Anagram=1;

   }

  }
  if(is_Anagram===1){
   return "YES";

  }
  else{
  return "NO";

  }
}
module.exports=rotate;
//var a=rotate("abcde","L 3 R 2 R 4");
//console.log(a);
