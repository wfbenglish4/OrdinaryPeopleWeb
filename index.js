/// <reference path="jquery-2.2.3.js" />
/// <reference path="jquery-ui-1.11.3.js" />
$(document).ready(function () {
    $('.active-slide #menu').accordion({
        collapsible: true
    });
    $('.active-slide #menu').accordion("option", "active", false);
    $('.arrow-next').click(function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length ===0) {
            nextSlide = $('.first');
            nextDot = $('.first-dot');
        }

        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        nextSlide.fadeIn(600);
        nextSlide.addClass('active-slide');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        $('.active-slide #menu').accordion({
            collapsible: true
        });
        $('.active-slide #menu').accordion("option", "active", false);
    });


    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }

        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        prevSlide.fadeIn(600);
        prevSlide.addClass('active-slide');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
        $('.active-slide #menu').accordion({
            collapsible: true
        });
        $('.active-slide #menu').accordion("option", "active", false);
    });
})