function initMap() {
  const saoPaulo = { lat: -23.55052, lng: -46.633308 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: saoPaulo,
  });

  new google.maps.Marker({
    position: saoPaulo,
    map: map,
  });
}

