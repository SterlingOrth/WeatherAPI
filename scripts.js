// request API for single day and store in global memory
var requestToday = api.openweathermap.org/data/2.5/weather?q=Denver&appid=ca363341750e1c79a85ffc9f4699b38a;

// request API for four day and store in global memory
var requestFuture = pro.openweathermap.org/data/2.5/forecast/hourly?q=Denver&appid=ca363341750e1c79a85ffc9f4699b38a;

// URL for UV index for Lat and Long
var latitude = "";
var longitude = "";

// forloop for 4 day forecast cards
 for(var i = 0; i < requestFuture.length; i++){
    
 }


// on click to store data in local storage
document.getElementById("bth").addEventListener("click", requestToday)



// fetch request 
fetch(requestAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; i < data.length; i++) {
            var listItem = document.createElement("li");
            listItem.textContent = data[i].html_url;
            repoList.appendChild(listItem);
        }
    });