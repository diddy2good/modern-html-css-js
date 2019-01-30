var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 42.361145, lng: -71.057083};
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}