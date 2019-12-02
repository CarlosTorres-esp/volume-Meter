// Start the controller from the lateral menu
function openNav() {
  document.getElementById("slideBar").style.width = "250px";
}

function closeNav() {
  document.getElementById("slideBar").style.width = "0";
}
// End the controller from the lateral menu


swal({
title: `¡Bienvenido!`,
text: `Por favor antes comenzar te pedimos utilizar como navegador predeterminado Firefox para evitar problemas con las coockies e historial de cache.`,
icon: "info",
});
