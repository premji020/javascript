// create a request variable. req variable issue the http req.
//by creating an instance of xml http req

var request = new XMLHttpRequest();


//open connection
request.open('GET','https://restcountries.eu/rest/v2/all',true)


//send req

request.send();

// load response when it is ready 

request.onload = function(){
    var data = JSON.parse(this.response)
    console.log(data);
 // printing all flag values   
    for(var i=0;i<250;i++)
    {
console.log(data[i]["flag"]);
    }

// printing countries in asia

var asiacount = data.filter(element=>
    element.region==='Asia');
console.log(asiacount);

// population less than 2 lakhs

var lesspopulation = data.filter(element=>
    element.population < 200000);
console.log(lesspopulation);

//Print the following details name, capital, flag using forEach function 

function countrydetails(items){
    console.log("Country:",items.name)
    console.log("Capital:",items.capital)
    console.log("Flag:",items.flag)
    console.log("Is it in Asia?:",items.region === "Asia")
    
}
data.forEach(countrydetails)

//Print total population using reduce function

var totpop = data.reduce(function(result,item){
    return result+item.population;
},0)
console.log("Total poulation is:",totpop);


//print countries with us dollar as currency
//console.log(element.currencies.code);

var usdcurrency = data.filter((element)=>{
    let flag = false
    element.currencies.forEach(item => {
        if (item.code === "USD")
        flag = true;
    });
    if (flag == true)
    return true;
    
    else

    return false;

});
    console.log("Countries with USD currency are:",usdcurrency)





}
