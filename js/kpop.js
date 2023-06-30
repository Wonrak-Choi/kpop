// 슬라이더
$(function(){
    $('.slide').bxSlider({
        mode: 'horizontal',
        pager: true,
        slideWidth: 1920,
        auto: true,
        autoHover: true, // 호버시 정지
        pause: 3000, // 슬라이드 간의 대기 시간 (밀리초 단위)
        speed: 700 // 슬라이드 전환 속도 (밀리초 단위)
    });
});
// a태그 # 이벤트 제거
$('a[href="#"]').on('click',function(e){
    console.log(e);
    e.preventDefault();
});
// aside버튼효과
$(".xIcon").on('click',function(e) {
    $("aside").slideUp("fast");
});

// 탭메뉴
// 탭관련 스크립트
$('.tab_btn li').click(function(){
    // 각각의 탭 index값 리턴 매서드
    // 이벤트 탭을 클릭했을때 index 번호를 콘솔창에 출력
    // 캡처 넘버링
    const idx = $(this).index();
    console.log(idx);
    // 탭 영역에 각각 on 클래스 적용
    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');

    // 해당탭 내용만 보이도록 코딩
    $('.list').hide();
    $('.list').eq(idx).stop().show();
});

// GNB 메뉴 호버효과
$('.gnb').hover(function(){
    // mouseenter()시 이벤트 리스너
    $(this).children().children().next("dl").css({
        display:"block",backgroundColor: "#fff",top:"50px",zIndex:"10000"
    });
},function(){
    // mouseleave()시 이벤트 리스너
    $(this).children().children().next("dl").slideUp(200);
});
$('.gnb').hover(function(){
    // mouseenter()시 이벤트 리스너
    $('.back').css({
        display:"block",backgroundColor: "none",zIndex:"9999",width:"100%",hight:"500px"
    });
},function(){
    // mouseleave()시 이벤트 리스너
    $('.back').slideUp(200);
});