function mostrarTexto() {
  var texto = document.getElementById("texto");
  if (texto.style.display === "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}