///Print odd numbers in an array 
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


///Convert all the strings to title caps in a string array 

var x = ["one","two","three","four","five"];

//anonymous
var capstr = function(str)
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
capstr(x);

//iife

(function(str)
{ for (i=0;i<str.length;i++)
{
    
    var a = str[i];
    var b = a.slice(0,1);
    var c = a.slice(1,str.length);
    var d = b.toUpperCase();
   var f = (d+c);
   console.log(f);
}
})(x);

///Sum of all numbers in an array 

//anonymous fn
var num = [1,2,3,4,5,6,7];


var sum = 0;
var son = function(x){
    for(i=0;i<=x.length;i++)
{
    sum = sum + i;
    
}
console.log(sum);
}
son(num);
 

//iife

(function(x){
    for(i=0;i<=x.length;i++)
{
    sum = sum + i;
    
}
console.log(sum);
})(num);


/// Return all the prime numbers in an array


var a = [1,2,3,4,5,6,7,8,9,11,12,13,15,17,19]

//anonymous fn

var primenos = function(arr){
var flag = false; 
  for (var i = 0; i<arr.length; i++)
  {
      var items = arr[i];
      for (var j = 2; j<=items-1 ;j++)
      {
        if (items%j === 0){
            flag = true;
            break;
        }else{
            flag = false;
        }
      }
      if(flag===false && items !=1 )
      {
          console.log(arr[i]);
      }
      
      
  }}
  
  primenos(a);
  
//iife


(function(arr){
var flag = false; 
  for (var i = 0; i<arr.length; i++)
  {
      var items = arr[i];
      for (var j = 2; j<=items-1 ;j++)
      {
        if (items%j === 0){
            flag = true;
            break;
        }else{
            flag = false;
        }
      }
      if(flag===false && items !=1 )
      {
          console.log(arr[i]);
      }
      
      
  }})(a);
  

  ///Return all the palindromes in an array 


  var a = ["racecar","none","anna","ans","rotor","amma"];
//anonymous fn

var palindrome = function(arr){
    for (i=0;i<arr.length;i++)
{
    var str=arr[i];
    var rev= str.split("").reverse().join("");
    if (str==rev)
    {
        console.log(str);
    }
}
}

palindrome(a);


//iife

(function(arr){
    for (i=0;i<arr.length;i++)
{
    var str=arr[i];
    var rev= str.split("").reverse().join("");
    if (str==rev)
    {
        console.log(str);
    }
}
})(a);


///Return median of two sorted arrays of same size 

var x = [4, 5, 5, 7, 7];
var y = [8, 8, 8, 8, 9];

//anonymous function


var median = function(arr1,arr2){
var arr = arr1.concat(arr2);

arr.sort(function(a, b){return a-b;});

var midarr = arr.length/2;
var midarr2 = midarr - 1;
var med = (arr[midarr]+arr[midarr2])/2;

console.log(med);
}

median(x,y);

//iife

(function(arr1,arr2){
var arr = arr1.concat(arr2);

arr.sort(function(a, b){return a-b;});

var midarr = arr.length/2;
var midarr2 = midarr - 1;
var med = (arr[midarr]+arr[midarr2])/2;

console.log(med);
})(x,y);    
    
///Remove duplicates from an array

var a = [1,2,3,4,5,1,3,5,1,6,7,8,2,3,9,10,4,5];
//anonymous function 

var duplicates = function(arr){
var temp = [];        
var obj = {};                
for (var i = 0; i<arr.length; i++) 
{            
    obj[arr[i]] = 0;        
}  
    for (i in obj)
{            
    temp.push(i);        
}            
console.log(temp);
}

duplicates(a);


//iife

(function(arr){
var temp = [];        
var obj = {};                
for (var i = 0; i<arr.length; i++) 
{            
    obj[arr[i]] = 0;        
}  
    for (i in obj)
{            
    temp.push(i);        
}            
console.log(temp);
})(a);

///Rotate an array by k times and return the rotated array

var a=[1,2,3,4,5];
var b=[6,7,8,9,10];

//anonymous fn

var rotate = function(arr, k){
    for(i=1;i<=k;i++)
    {
        var x = arr.shift();
        arr.push(x);
    }
    console.log(arr);
    }
rotate(a,4);

//iife

(function(arr, k){
    for(i=1;i<=k;i++)
    {
        var x = arr.shift();
        arr.push(x);
    }
    console.log(arr);
    })(b,3);   
    