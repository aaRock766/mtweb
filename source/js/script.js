//<![CDATA[ 
$(function() {
    // Only enable if the document has a long scroll bar
    // Note the window height + offset
    if (($(window).height() + 100) < $(document).height()) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {
                top: 100
            }
        });
    }
}); //]]>  

$('.navbar-nav a').click(function() {
    // $(".navbar-toggle").click() //bootstrap 3.x by Richard
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
    }, 400);
    $('#navbar > ul > li').removeClass('open');//把打開的選單關起來
    return false;
});
