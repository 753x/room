/* 메뉴 슬라이드 토글 */
$(function(){
	$('.hamburger').on('click', function(){
		$('nav').slideToggle();
		$(this).toggleClass('is-active');
	});
});

/* 메뉴 슬라이드 토글 끝 */


/* 사진 마우스 오버시 예약하기 버튼과 간단한 설명 */

$(function(){
	$('.theme-main img').on('mouseenter', function(){
		$(this).siblings('.info').fadeIn();
	});
	$('.theme-main .img-wrapper').on('mouseleave', function(){
		$(this).find('.info').fadeOut();
	});
});
	

	