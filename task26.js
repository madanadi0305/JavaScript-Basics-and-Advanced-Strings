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
  if(mag>=9 || mag<0){break;}
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
 
  charString=FIRSTCHARSTRING;  
  var sorted_charString=sortString(charString);
  var sorted_string=sortString(string1);
  var checkAnagram=compare(sorted_string,sorted_charString);
  if(checkAnagram===true){
    return 'YES';
  } 
  else{
    return 'NO';
  }
}

function sortString(str1){
 var min,TEMP;
  var str=str1.split("");
for(var i=0;i<str.length;i++){
    min=i;
   for(var j=i+1;j<str.length;j++) 
   {
     if(str[j]<str[min])
        //.charCodeAt(j)<str.charCodeAt(min))
     {
     min=j;
     }
   }
   if(min!=i){
    TEMP=str[min]; 
    str[min]=str[i];
    str[i]=TEMP;

   }
  }
  var str2=str.join("");
  return str2;
}


function compare(str11,str12){
//var str13="";
var j=0;
var is_Anagram;  

  while(j<str11.length){

    is_Anagram=0;
    if((str11.toUpperCase()===str12.toUpperCase())&&(str11.toLowerCase()===str12.toLowerCase())){
    if(str11.indexOf(str12)!==-1){
    is_Anagram=1;
      break;
    }
    }
    j=j+1;
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
