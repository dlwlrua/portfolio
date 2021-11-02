$(document).ready(function(){
    let num=0;
    $('.tablet_btn').click(function(){
        if(num==0){
            $('.tablet img').addClass('active');
            $('.tablet_on').addClass('active');
            $('body').addClass('active');
            num=1;
            $('.loading').delay(3000).fadeOut();
        }else{
            $('.tablet img').removeClass('active');
            $('.tablet_on').removeClass('active');
            num=0;
            $('.loading').show(1500);
            $('body').removeClass('active');
            $('.popup div').removeClass('active');
        }
    });
    
    

    // 썸네일 클릭시 팝업

    $('.t1').click(function(){
        $('.p1').addClass('active');
        $('.close').addClass('active');
    });
    $('.t2').click(function(){
        $('.p2').addClass('active');
        $('.close').addClass('active');
    });
    $('.t3').click(function(){
        $('.p3').addClass('active');
        $('.close').addClass('active');
    });
    $('.t4').click(function(){
        $('.p4').addClass('active');
        $('.close').addClass('active');
    });
    $('.t5').click(function(){
        $('.p5').addClass('active');
        $('.close').addClass('active');
    });

    // 팝업 닫기
    $('.close').click(function(){
        $(this).siblings('div').removeClass('active');
        $('.close').removeClass('active');
    });

});