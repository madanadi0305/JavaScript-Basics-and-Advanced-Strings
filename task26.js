function rotate(string,rotation_matrix){
var split_matrix=rotation_matrix.split(" ");
//console.log(split_matrix);
var n=string.length;  
var rotated_string;
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
  return FIRSTCHARSTRING;
}
module.exports=rotate;
//var a=rotate("abcde","L 3 R 2 R 4");
//console.log(a);
