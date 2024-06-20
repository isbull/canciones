$(function () {
  function cargarCanciones() {
    $.ajax({
      url: "/songs",
    })
      .done(function (songs) {
        const lista = $("/songs");
        lista.empty();
        songs.forEach(function (song) {
          const nuevoElemento = $(
            '<li class="cancion">' + song.nombre + "</li>"
          );
          nuevoElemento.appendTo(lista);
        });
      })
      .fail(function () {
        alert("No se pudo cargar las canciones");
      });
  }
  cargarCanciones();
});
