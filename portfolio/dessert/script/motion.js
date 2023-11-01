$(document).ready(function(){
    $('#section .section .cont').mouseenter(function(){
        $(this).stop().animate({width:'500px'}).siblings().stop().animate({width:'200px'})
        $(this).find('img').stop().animate({opacity:'0.4'})
    })
    $('#section .section .cont').mouseleave(function(){
        $(this).find('img').stop().animate({opacity:'1'})
    })
})

$(document).ready(function(){
    $('.hamberger').click(function(){
        $(this).toggleClass('active');
        $('.modal').toggle();
        $('.sidemenu').toggleClass('active');
    });
    $('.sidemenu li').click(function(){
        $(this).find('.submenu_m').slideDown().parent().sliblings().find('.submenu').slideUp();
    });
})