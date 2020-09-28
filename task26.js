function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");

if(string===""||string===null||rotation_matrix===""||rotation_matrix===null){
  return 'NO';
}
var n=string.length;
var charString;  
var string1=string;  
for(var i=0;i<split_matrix.length;i++){
  if(i%2!==0){
var mag=split_matrix[i];
if(mag>=9 || mag<0){return "NO";break;}
  }
}
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
 
  charString=FIRSTCHARSTRING;  
 
  var checkAnagram=anagram(string,charString);
  if(checkAnagram===true){
    return 'YES';
  } 
  else{
    return 'NO';
  }
}


function anagram(str1,str2){
var slide_array=[];
//var counts;  
if(str1.length<str2.length){
return false;
}
else if(str1===""||str1===null||str2===""||str2===null){
return false;

}
console.log(str1);
console.log(str2);
var counts_str2=getStringCharCount(str2);
console.log(counts_str2);  
for(var i=0;i<(str1.length-str2.length+1);i++){
var j=i;
while(j<i+str2.length){  
 // var k=str1[j];
 
  slide_array.push(str1[j]);
 
  j=j+1;
  //console.log(slide_array_count);
}
 var slide_array_count=getStringCharCount(slide_array); 
//console.log(slide_array_count);
  if(areCountsEqual(counts_str2,slide_array_count)){
   console.log(slide_array_count); 
   return true;
  }
  
}
return false;  
// console.log(slide_array_count); 
}


//console.log(a);
function getStringCharCount(str){
var counts={};
  for(var i=0;i<str.length;i++){
var k=str[i];
  if(!counts[k]){
   counts[k]=1;
  }
  else{
    counts[k]=counts[k]+1;
  }
}
return counts;
}


function areCountsEqual(count1,count2){
for(var i=0;i<count1.length;i++){  
  var k=count1[i];
  if((!count2[k])||(count1[k]!==count2[k])){
  //console.log(count1[k]);  
  return false;
  }
}
return true;
}


/*if(anagram("test","r")){
console.log('YES');
}
else{
console.log('NO');

}*/
module.exports=rotate;
//var a=rotate("abcde","L 3 R 2 R 4");
//console.log(a);
