// smooth scroll
$('a[href^="#"]').on('click', function(event) {
    var target = $.attr(this, 'href');

    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000, 'easeInOutSine');
});

// subnav links
var current = window.location.pathname;
current = current.substring(17, current.length);
console.log(current);
$('subnav li').each(function(i, e) {
    var url = $(e).children('a').attr('href');
    if (current === url) {
        $(e).addClass('active');
    }
});

