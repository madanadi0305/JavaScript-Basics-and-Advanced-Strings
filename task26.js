const isAnagram=(A,B)=>{
  var arr1=[],arr2=[];
  arr1=A.split("");
  arr2=B.split("");
  var k=0;
  for(var i=0;i<=arr1.length-arr2.length;i++)
  {
    for(var j=0;j<arr2.length;j++)
    {
      if(B.indexOf(arr1[i+j])!=-1)
      k=k+1;
    }
    if(k==arr2.length)
    return true;
    k=0;
  }
  return false
}
const task26 = (str1,str2)=>{
  var arr1=[],arr2=[],firstChar="",q=0,ind=0;
  arr1=str1.split("");
  arr2=str2.split(" ");
  var res1,res2;
  res1="YES";
  res2="NO"
  while(q<arr2.length)
  {
    var dir=arr2[q];
    var s=arr2[q+1]
    s=parseInt(s,10);
    if(dir=='L')
    ind=(ind+s)%arr1.length;
    else
    ind=(ind-s)%arr1.length;
    q=q+2;
    if(ind<0)
    ind=arr1.length+ind
    firstChar=firstChar+arr1[ind];
  }
  if (isAnagram(str1,firstChar))
  return res1
  else
  return res2
}
module.exports=task26
