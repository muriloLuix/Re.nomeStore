$(document).ready(function () {
  $(".dropdown-toggle").click(function (e) {
    e.stopPropagation();
    $(this).children(".dropdown").toggleClass("open");
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".nav").length) {
      // Fecha o menu se estiver aberto
      $(".dropdown").removeClass("open");
    }
  });
});
