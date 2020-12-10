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

 ///by lat long

    var request2 = new XMLHttpRequest();

    request2.open('GET','http://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=f1ecd46af7be4d4cbd7f81712fc1327c',true)

    request2.send();

    request2.onload = function(){
        var data2 = JSON.parse(this.response)
        console.log(data2);
        console.log("The current temperature in India is :",data2.main.temp);
        console.log("The weather forecast in India is:",data2.weather[0].description);

    }
///by city

var request3 = new XMLHttpRequest();

    request3.open('GET','http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=f1ecd46af7be4d4cbd7f81712fc1327c',true)

    request3.send();

    request3.onload = function(){
        var data3 = JSON.parse(this.response)
        console.log(data3);
        console.log("The current temperature in Moscow is :",data3.main.temp);
        console.log("The weather forecast in Moscow is:",data3.weather[0].description);
    }
    
}