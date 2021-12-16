$(function(){
    // btnmenu 버튼을 클릭시 실행되는 모션
    $('#btnmenu').click(function(){
        $(this).fadeOut();
        $('section').addClass('on');
        $('nav').addClass('on');
    });

    //nav li 메뉴를 클릭시 실행되는 모션
    $('nav ul li').click(function(){
        $('#btnmenu').fadeIn();
        $('section').removeClass('on');
        $('nav').removeClass('on');

        var i=$(this).index();
        $('section div').removeClass('on');
        $('section div').eq(i).addClass('on');
    });
});