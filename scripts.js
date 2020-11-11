// request API for single day and store in global memory

// request API for four day and store in global memory



// URL for UV index for Lat and Long
var latitude = "";
var longitude = "";

// forloop for 4 day forecast cards
//  for(var i = 0; i < requestFuture.length; i++){
    
//  }

document.getElementById("Citystick").addEventListener('click', function(event){
    console.log("test")
    var requestToday = "http://api.openweathermap.org/data/2.5/weather?q=" + event.target.textContent + "&appid=ca363341750e1c79a85ffc9f4699b38a&units=imperial";
    // var requestFuture = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=ca363341750e1c79a85ffc9f4699b38a";

    // Grab info from object and store to variable, then append data.name


    event.preventDefault ()
 
    // input concatenation API

    fetch(requestToday)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var cityName = document.createElement('h1');
        var cityDate = document.createElement('h1');
        var cityTemp = document.createElement('h3');



        cityName.textContent = data.name
        cityDate.textContent = data.dt 
        //moment.js
        cityTemp.textContent = data.main.temp
        //convert to F

        var input = document.getElementById("input").value = "";
        console.log(input)
        
        document.getElementById("city").innerHTML = "";

        document.getElementById("city").appendChild(cityName)
        document.getElementById("city").appendChild(cityDate)
        document.getElementById("city").appendChild(cityTemp)
    
    }).catch(function(error){
        console.log(error)
    })
})
// append cards

// EVENT LISTENER
function daily(event) {
    var input = document.getElementById("input").value

    var requestToday = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=ca363341750e1c79a85ffc9f4699b38a&units=imperial";
    // var requestFuture = "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&appid=ca363341750e1c79a85ffc9f4699b38a";

    // Grab info from object and store to variable, then append data.name


    event.preventDefault ()
   var Citystick = document.createElement('button')
   Citystick.textContent = input
   Citystick.classList.add("btn")
    document.getElementById("Citystick").appendChild(Citystick)
    
    // input concatenation API

    fetch(requestToday)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        var cityName = document.createElement('h1');
        var cityDate = document.createElement('h1');
        var cityTemp = document.createElement('h3');



        cityName.textContent = data.name
        cityDate.textContent = data.dt 
        //moment.js
        cityTemp.textContent = data.main.temp
        //convert to F

        var input = document.getElementById("input").value = "";
        console.log(input)
        
        document.getElementById("city").innerHTML = "";

        document.getElementById("city").appendChild(cityName)
        document.getElementById("city").appendChild(cityDate)
        document.getElementById("city").appendChild(cityTemp)
    
    }).catch(function(error){
        console.log(error)
    })


     
    }
document.getElementById("btn").addEventListener("click", daily)


// append



// fetch request and forloop for 5 day forecast
// fetch(requestAPI)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         for (var i = 0; i < data.length; i++) {
//             var listItem = document.createElement("li");
//             listItem.textContent = data[i].html_url;
//             repoList.appendChild(listItem);
//         }

//     });



