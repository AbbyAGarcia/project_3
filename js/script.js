function initMap() {
  const saoPaulo = { lat: -23.55052, lng: -46.633308 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: saoPaulo,
  });
  // created and added google maps marker 
  new google.maps.Marker({
    position: saoPaulo,
    map: map,
    icon:{
      url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png", // green marker
  },
  });
}


