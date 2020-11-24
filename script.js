mapboxgl.accessToken = 'pk.eyJ1Ijoic2FoaWxzMDkxIiwiYSI6ImNraHBjemYyejBhNmwzMG56bWoxdW5zY2cifQ.sxBIzQCaFWqq4UkUUnDPxQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
} )

function successLocation(position){
console.log(position);
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24,53.48])

}
function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14,
        style: 'mapbox://styles/mapbox/satellite-v9'
      });
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav);
      const directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken 
      });
      map.addControl(directions, "top-left")
}


