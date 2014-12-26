/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// =======================
// Body wobbly animations
// =======================
var $body = $('body'),
    $projects = $('.pt'),
    body = document.body,
    html = document.documentElement,
    anim_repeat = true,
    abs_height = Math.max( html.clientHeight, html.scrollHeight, html.offsetHeight );

// Body ones    
$(window).load(function() {
    $body.toggleClass('on off');
    $('#trigger').click(function() {
        $body.toggleClass('on off');
        setTimeout(function() {
            $body.toggleClass('on off');
        }, 2000)
    });
});

// On projects
$( window ).scroll(function() {
    var mid = abs_height / 2;
    if(anim_repeat) {
        if($body.scrollTop() > abs_height / 4) {
            $projects.toggleClass('on off');
            anim_repeat = !anim_repeat;
        }
    }
});

// Hide navbar atuomatically on scroll
$("nav.navbar-fixed-top").autoHidingNavbar();
