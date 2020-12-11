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
    let lat = data[104].latlng[0];
    let lon = data[104].latlng[1];
    let city = data[185].capital;
 ///by lat long

    var request2 = new XMLHttpRequest();

    request2.open('GET','http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon + '&appid=f1ecd46af7be4d4cbd7f81712fc1327c',true)

    request2.send();

    request2.onload = function(){
        var data2 = JSON.parse(this.response)
        console.log(data2);
        console.log("The current temperature is :",data2.main.temp);
        console.log("The weather forecast is:",data2.weather[0].description);

    }
///by city

var request3 = new XMLHttpRequest();

    request3.open('GET','http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f1ecd46af7be4d4cbd7f81712fc1327c',true)

    request3.send();

    request3.onload = function(){
        var data3 = JSON.parse(this.response)
        console.log(data3);
        console.log("The current temperature is :",data3.main.temp);
        console.log("The weather forecast is:",data3.weather[0].description);
    }
    
}