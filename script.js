mapboxgl.accessToken =
  "pk.eyJ1IjoiZXphbGIiLCJhIjoiY2toc3EyM2N3MHY2aTJycGJxbDRjcDVmOSJ9.sQkAap5XDBgtpMF5rR-c1A"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([72.50953, 23.00944])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

function myFunction() {
   var element = document.getElementById("map");
   element.classList.toggle("dark-mode");
}
