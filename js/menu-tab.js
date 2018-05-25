var tab = $('.tab');
var list = $('.notice, .pds')
var list_item = $('.notice-list li, .pds-list li');
var nav = $('.menu-item')

//메인메뉴 마우스 오버 
nav.hover(function(e){
  //var _index = $(this).index();
  e.preventDefault();
  $('.sub-menu').hide();
  $(this).children('.sub-menu').show();
});
// 포커싱
nav.focus(function(e){
  e.preventDefault();
  $('.sub-menu').hide();
  $(this).children('.sub-menu').show();
});
// 공지사항 및 자료실 목록에 아이콘 클래스 추가
list_item.attr('class', 'icon-dot-circled');


// 탭 클릭 이벤트 (is-act 추가 제거)
tab.click(function(e){
e.preventDefault();
// 기본 이벤트 취소.
list.removeClass('is-act');
$(this).parent().addClass('is-act');
});
// 이벤트 가리키는 것 this 클릭한 부모요소에게 is-act 추가해라.
// 키보드 이벤트 발생 선언.
tab.keyup(function(e){
  e.preventDefault();
  if(e.keyCode === 13){
    list.removeClass('is-act');
    $(this).parent().addClass('is-act');
  }else{
    // 거짓이 반환될 때
    return false;
  }
});

