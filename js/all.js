$(document).ready(function() {

    /* the button of scroll show and hide by scrollTop */
    $('.scroll-button').hide(300);
    $(window).scroll(function() {
        if ($(document).scrollTop() > '300') {
            $('.scroll-button').show(300);
        } else {
            $('.scroll-button').hide(300);
        }
    });

    /* scroll to top */
    $('.scroll-button a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 700);
    });

    /* section-move  is scroll move to target */
    $('.section-move').click(function(event) {
        event.preventDefault();
        var connect = $(this).attr('href');
        var position = $(connect).offset().top;
        $('body').animate({
            scrollTop: position}, 700);
    });


    /* click hamburger open-menu*/
    $('.fa-bars').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('open-menu');
    });

    /* prevent event of form button */
    $('#button-submit, #button-cancel').click(function(event) {
    	event.preventDefault();
    });
});
