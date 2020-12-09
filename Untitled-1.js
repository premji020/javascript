///////////////////prob1/////////////////////////
var arr = [1,2,3,4,5,6,7,8,9,11,12,14,15,16,17];
var arr2 = [3,35,46,24,64,4,656,353,64,46,43,46,54,65,46]

//anonymous function
var oddnos = function(a)
{
for(i=0;i<a.length;i++)
{
    if (a[i]%2 !== 0)
    {
console.log(a[i]);
}
}
}
oddnos(arr);

//iife

(function(a)
{
for(i=0;i<a.length;i++)
{
    if (a[i]%2 !== 0)
    {
console.log(a[i]);
}
}
})(arr2);


//////////////////////prob2//////////////////////////

var str = ["one","two","three","four","five"];


var capstr = function(x)
{ for (i=0;i<str.length;i++)
{
    
    var a = str[i];
    var b = a.slice(0,1);
    var c = a.slice(1,str.length);
    var d = b.toUpperCase();
   var f = (d+c);
   console.log(f);
}
};
capstr(str);


(function(x)
{ for (i=0;i<str.length;i++)
{
    
    var a = str[i];
    var b = a.slice(0,1);
    var c = a.slice(1,str.length);
    var d = b.toUpperCase();
   var f = (d+c);
   console.log(f);
}
})(str);

/////////////////////////////prob3////////////////////////////////


var num = [1,2,3,4,5,6,7];


var sum = 0;
var son = function(x){
    for(i=0;i<=num.length;i++)
{
    sum = sum + i;
    
}
console.log(sum);
}
son(num);


(function(x){
    for(i=0;i<=num.length;i++)
{
    sum = sum + i;
    
}
console.log(sum);
})(num);


////////////////////////////////prob4////////////////////////////////





    
    
    
    
    
    