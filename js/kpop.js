// 슬라이더
$(function(){
    var slider = $('.slide').bxSlider({
        mode: 'horizontal',
        pager: true,
        slideWidth: 1920,
        auto: true,
        pause: 3000, // 슬라이드 간의 대기 시간 (밀리초 단위)
        speed: 500, // 슬라이드 전환 속도 (밀리초 단위)
        stopAutoOnClick: true, // 버튼 클릭시 자동 슬라이더 정지
        onSlideAfter: function(){
            slider.startAuto(); // 슬라이드 변경 후 자동 재생 시작
        }
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
// GNB 메뉴
$(".global>h2>a, .gnb>li>a").on('click',function(e) {
    $(".toggle_m").slideToggle("fast");
    $(".gnb>li>dl").slideToggle("fast");
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
