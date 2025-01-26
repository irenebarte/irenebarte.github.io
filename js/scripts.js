// scripts.js

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  } else {
    alert("La geolocalización no es soportada por este navegador.");
  }
}

function showLocation(position) {
  const latitud = position.coords.latitude;
  const longitud = position.coords.longitude;
  document.getElementById("locationResult").innerHTML =
    `Tu ubicación: <br>Latitud: ${latitud}<br>Longitud: ${longitud}`;
  
  // Aquí puedes llamar a una API externa para buscar eventos cercanos
  buscarEventos(latitud, longitud);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("El usuario denegó el permiso de geolocalización.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("La ubicación no está disponible.");
      break;
    case error.TIMEOUT:
      alert("El tiempo para obtener la ubicación se agotó.");
      break;
    default:
      alert("Ocurrió un error desconocido.");
  }
}

function buscarEventos(lat, lng) {
  console.log(`Buscando eventos cerca de: Latitud ${lat}, Longitud ${lng}`);
  // Aquí podrías usar una API como Ticketmaster o Eventbrite
}
