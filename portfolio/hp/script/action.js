$(document).ready(function(){
    $('#header .head_box .gnb').mouseenter(function(){
        $('.allmenu_box, .submenu').stop().slideDown(500)
    })
    $('#header .head_box .gnb').mouseleave(function(){
        $('.allmenu_box, .submenu').stop().slideUp()
    })

    $('.tab_box h2').click(function(){
        $(this).parent().css({zIndex:'2'}).siblings().css({zIndex:'1'})
        $(this).addClass('active').parent().siblings().children('h2').removeClass('active')
        return false
    })
})






$( function() {

    $( "#datepicker" ).datepicker();

  } );

