$(document).ready(function () {
    $('.dropdown-toggle').click(function () {
        $(this).next('.dropdown').toggleClass('open');
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.nav').length) {
            // Fecha o menu se estiver aberto
            $('.dropdown').removeClass('open');
        }
    });
});