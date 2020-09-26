function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");
//console.log(split_matrix);
if(string===""||string===null||rotation_matrix===""||rotation_matrix===null){
  return 'NO';
}
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
 
  var checkAnagram=isAnagram(string,charString);
  if(checkAnagram===true){
    return 'YES';
  } 
  else{
    return 'NO';
  }
}



function isAnagram(str11,str12){
var countA;
var is_Anagram;  
var countB=0;
var window_array=[];  
  if(str11.length<str12.length){
return false;

}
 for(var i=0;i<str12.length;i++){
 countB=countB+1;
 } 
  
for(var i=0;i<str11.length;i++){
countA=0;  
for(var j=i;j<(str11.length+i);j++){
window_array.push(str11[j]);
 countA=countA+1; 
}
if(countA===countB){
 // is_Anagram=1;
  return true;
}
  
}
return false;
}




module.exports=rotate;

