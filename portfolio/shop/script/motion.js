$(document).ready(function(){
	$('.today > a').click(function(){
		$('html, body').animate({scrollTop:'0'},1000)
		return false
	});
})

$(document).ready(function () {
	var todayTop = parseInt($('.today').css('top'))
	var sec1Top = $('#sec1_pop').offset().top; //1041

	$(window).scroll(function () {
		var htmlScT = $('html, body').scrollTop()

		if (htmlScT > sec1Top) {
			$('.today').stop().animate({
				top: htmlScT + todayTop / 3
			})
		} else {
			$('.today').stop().animate({
				top: todayTop
			})
		}

	})
})


$(window).scroll(function () {
	var htmlScroll = $('html,body').scrollTop();
	if (htmlScroll > 0) {
		$('header').addClass('action')
	} else {
		$('header').removeClass('action')
	}
})


$(document).ready(function(){
	//var shopInfo01 = $('#shop_info01').offset().top;
//	var shopInfo02 = $('#shop_info02').offset().top;
//	var shopInfo03 = $('#shop_info03').offset().top;
//	var shopInfo04 = $('#shop_info04').offset().top;
//	var shopInfo05 = $('#shop_info05').offset().top;
//	var shopInfo06 = $('#shop_info06').offset().top;
//	var headerHeight = $('#header').height();
	

	//순서 선택
	/*$('.info_nation li:nth-child(1)')
	$('.info_nation li:first-child')
	$('.info_nation li:first')
	$('.info_nation li:eq(0)')
	$('.info_nation li').eq(0)
	*/

	//$('.info_nation li:nth-child(1)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo01-headerHeight-129})
		//return false
	//});
	//$('.info_nation li:nth-child(2)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo02-headerHeight-129})
		//return false
	//});
	//$('.info_nation li:nth-child(3)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo03-headerHeight-129})
		//return false
	//});
	//$('.info_nation li:nth-child(4)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo04-headerHeight-129})
		//return false
	//});
	//$('.info_nation li:nth-child(5)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo05-headerHeight-129})
		//return false
	//});
	//$('.info_nation li:nth-child(6)').click(function(){
		//$('html,body').animate({scrollTop:shopInfo06-headerHeight-129})
		//return false
	//});
//})

$('.info_nation li a').click(function(){
	var goInfo = $($(this).attr('href')).offset().top;
	$('html, body').animate({scrollTop:goInfo})
	});
	$('.prod_img li').click(function(){
		$('.imgzone img').attr('src',$(this).find('img').attr('src')).attr('alt',$(this).find('img').attr('alt'))
		$(this).css({border:'1px solid red'}).siblings().css({border:0})
	});
})






$(document).ready(function(){
	var won = parseInt($('.total_price').text());
	$('.total_price').text(addComma(won));

	$('.up').click(function(){
		var option2Val = $('#option2').val();

		option2Val++;
		$('#option2').val(option2Val);
		$('.ea strong').text(option2Val);
		$('.total_price').text(addComma(option2Val * won ));
	});

	$('.down').click(function(){
	var option2Val = $('#option2').val();
	
		option2Val--;

		if(option2Val <= 0){
			alert('최소 주문수량은 1개입니다')
			option2Val = 1;
		}

		$('#option2').val(option2Val);
		$('.ea strong').text(option2Val);
		$('.total_price').text(addComma(option2Val * won));
	});

	$('#option2').change(function(){
		var option2Val = $(this).val();
		$('.ea strong').text(option2Val);
		$('.total_price').text(option2Val * won );
	});

	function addComma(num) {
		var regexp = /\B(?=(\d{3})+(?!\d))/g;
		return num.toString().replace(regexp, ',');
	  }
})

function check(){
	if(Option1.val ==""){
		alert('색상을 선택해주세요')
	}
}