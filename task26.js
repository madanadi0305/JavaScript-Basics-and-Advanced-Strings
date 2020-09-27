function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");

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


function isAnagram(str1,str2){
//str1.split("").sort();
//str2.split("").sort();
 var window_array=[];
  if(str1.length<str2.length)
 {return false;
 
 } 
 var count_substring=getCharCount(str2);
 for(var i=0;i<(str1.length-str2.length+1);i++){
 
   window_array.push(str1[str2.length+i]);
  var window_count=getCharCount(window_array);
  if(areCountsEqual(count_substring,window_count)){
  return true;
  }
 } 
 return false; 
}

function getCharCount(str){
var counts={};
  for(var i=0;i<str.length;i++){
  var k=str[i];
  if(!counts[k]){
  counts[k]=1;
  }
    else{
   counts[k]+=1; 
    }
}
return counts;  
}

function areCountsEqual(countA,countB){
for(var i=0;i<countA.length;i++){
var k=countA[i];
  if(!countB[k]||(countA[k]!==countB[k])){
  return false;
  }
}
return true;
}
module.exports=rotate;
//var a=rotate("abcde","L 3 R 2 R 4");
//console.log(a);
