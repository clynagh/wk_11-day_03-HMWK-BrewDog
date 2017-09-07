var app = function(){
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);

}

var makeRequest = function(url, callBack){
// create a new XMLHttpRequest object
var request = new XMLHttpRequest();
// set the type of request we want to make (HINT: GET)
request.open("GET", url);
// tell the request which function to run when it has completed
request.addEventListener("load", callBack);
// send the request
request.send();
}

var requestComplete = function(){
  if ( this.status !== 200 ) return;
  var jsonString = this.responseText;
  var beers = JSON.parse(jsonString);
  console.log(beers) // this is to show it is working
  populateDropDown(beers);
  populateImgList(beers);
  var select = document.getElementById('beer-list');
  select.addEventListener("change", function() {
    var selectedBeer = beers[this.value];
    
  // beerInfo(selectedBeer);
  })
  
  // hoverOverBeers(beers);
}

var populateImgList = function(beers) {
  var ul = document.querySelector("#beer-img");
  beers.forEach( function(beer){
    var img = document.createElement("img");
    img.src = beer.image_url
    ul.appendChild(img);
  })
}

var populateDropDown = function(beers) {
  var select = document.querySelector("#beer-list");
  beers.forEach( function(beer){
    var option = document.createElement("option");
    option.innerText = beer.name
    select.appendChild(option);
  })

  var selectedInfo = function(selectedBeer) {
    var url = "https://api.punkapi.com/v2/beers";
    return makeRequest(url, beerInfo);
    console.log("selected Beer", selectedBeer);
  }

  var beerInfo = function(selectedBeer) {
    var ul = document.querySelector('#beer-describe');
    var li = document.createElement('li');
    li.innerText = selectedBeer.description;
    ul.appendChild(li);
  }

  var userSelection = function() {
    selectedBeer = document.getElementById('beer-list');
  

    var select = document.querySelector('#beer-list');


  }

}

// var hoverOverBeers = function(){
//   var mouseOver = document.querySelector("#beer-img").addEventListener("mouseover", mouseOver);
//   var mouseOut = document.querySelector("#beer-img").addEventListener("mouseout", mouseOut);

//   function mouseOver() {
//     document.querySelector("#beer-img").style.display = "red";
//   }
//   function mouseOut() {
//     document.querySelector("#beer-img").style.color = "none";
//   }
// }


window.addEventListener('load', app);

