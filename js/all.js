$(document).ready(function() {

    /* the button of scroll show and hide by scrollTop */
    $('.scrollButton').hide(300);
    $(window).scroll(function() {
        if ($(document).scrollTop() > '300') {
            $('.scrollButton').show(300);
        } else {
            $('.scrollButton').hide(300);
        }
    });

    /* scroll to top */
    $('.scrollButton a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 700);
    });

    /* sectionMove  is scroll move to target */
    $('.sectionMove').click(function(event) {
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
