function initMap() {
  const saoPaulo = { lat: -23.55052, lng: -46.633308 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: saoPaulo,
  });
  // feature 1: created and added google maps marker 
  const marker = new google.maps.Marker({
    position: saoPaulo,
    map: map,
    icon:{
      url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png", // turns marker green
  },
  });
  // feature 2: fun fact window 
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>SP, Brasil</h3><p> Population: 11.45 mil</p>",
  });
  marker.addListener("click",()=>{
    infoWindow.open(map,marker);
  }); 
}


