$(document).ready(function(){
    var className;
    var divIndex;

    $('.secbox2 .secimg .port_wrap > div').click(function(){
        var classN = $(this).attr('class')   //클릭한 대상(div)에 적용되있는 class 이름 추출
        className = classN.replace(/[^0-9]/g,'');   //class 이름에서 문자빼고 숫자만 추출 
        divIndex = $(this).index();   //클릭한 대상(div)의 순서(0부터시작)

        $('.port_box').fadeIn(200);
        $(this).find('div.comment').fadeIn(200);
        $(this).animate({left:'0'});    
        $(this).addClass('action');
        $(this).css({animation:'tt',left: '0px', top: '100px', opacity: '1'});
    })
    $('.port_box').click(function(){
        $(this).fadeOut('slow');
        $('div.comment').fadeOut(200);
        $('.secbox2 .secimg .port_wrap > div').eq(divIndex).css({animation:'port'+className+'.3s forwards'}).removeClass('action');
    })
})

$(document).ready(function(){

        $('.hbox .icon  li a > img').mouseover(function(){
            $('.hbox .icon li span').css({opacity:'1'})
        })
        $('.hbox .icon li a > img').mouseleave(function(){
            $('.hbox .icon li span').css({opacity:'0'})
        })

        $('a#profile').click(function(){
            var profilet = $('#section .secbox').offset();
            $('html').animate({scrollTop :profilet.top},400)
        })

        $('a#webdesign').click(function(){
            var webdesign = $('#section2 .secbox2').offset();
            $('html').animate({scrollTop :webdesign.top},400)
        })

        $('a#mobiledesign').click(function(){
            var mobiledesign = $('#section3 .mobile').offset();
            $('html').animate({scrollTop :mobiledesign.top},400)
        })


        $('a#responsivedesign').click(function(){
            var responsivedesign = $('#section4 .res').offset();
            $('html').animate({scrollTop :responsivedesign.top},400)
        })

        $('a#website').click(function(){
            var website = $('#section5 .web').offset();
            $('html').animate({scrollTop :website.top},400)
        })


        $('a#banner').click(function(){
            var banner = $('#section6 .banner').offset();
            $('html').animate({scrollTop :banner.top},400)
        })

})

$(document).ready(function(){
    var secT2 = $('.secbox2').offset().top;
    var secT5 = $('#section5').offset().top;
    var rbox = $('.rbox2').offset().top;
    var rboxTop = parseInt($('.rbox2').css('top'))
    
    $(window).scroll(function(){
    var scrT = $(window).scrollTop();
        if (scrT > secT2-$(window).height()/4){
            $('.secbox2').addClass('action')
        }
        
        if (scrT > secT5-$(window).height()/5){
            $('.notebook2').addClass('action')
        }
        if (scrT > scrT-rbox) {
            $('.rbox2').css({top:rboxTop - (scrT-rbox)})
        }
        
    })
})



$(window).scroll(function(){
    if($(this).scrollTop()>=400){
        $('.gotop').fadeIn()
    } else {
        $('.gotop').fadeOut()
    }
    
    $('.gotop').click(function(){
        $('html,body').stop().animate({scrollTop:'0'},1000)/*부드럽게, animate사용시 꼬부랑괄호 써야함/ 숫자는 위치를 나타냄 ,1000는 올라가는 속도(1초=1000)*/
    });
    
})