$(document).ready(function () {
    $(".veen .rgstr-btn button").click(function () {
        $('.veen .wrapper').addClass('move');
        $('.body').css('background', '#F8A928');
        $(".veen .login-btn button").removeClass('active');
        $(this).addClass('active');

    });
    $(".veen .login-btn button").click(function () {
        $('.veen .wrapper').removeClass('move');
        $('.body').css('background', '#141615');
        $(".veen .rgstr-btn button").removeClass('active');
        $(this).addClass('active');
    });
});

const body = document.getElementById('body').addEventListener('click', () =>{
    const body = document.getElementById('body');
    const bodyStyle = window.getComputedStyle(body); // Aqui pega o estilo que está no body
    if (bodyStyle.backgroundColor === 'rgb(248, 169, 40)'){ // Verifica a cor de fundo
        document.title = " | Realize seu login!";
    } else {
        document.title = " | Realize seu registro!";
    }
});