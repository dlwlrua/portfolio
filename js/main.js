$(function () {
    let num=0;
    $('.left_txt a:first-child').click(function(){
        if(num==0){
            $('.tablet img').addClass('active');
            $('.tablet_on').addClass('active');
            $('body').addClass('active');
            num=1;
            $('.loading').delay(3000).fadeOut();
            $('.left_txt a:first-child').addClass('active');
        }else{
            $('.tablet img').removeClass('active');
            $('.tablet_on').removeClass('active');
            num=0;
            $('.loading').show(1500);
            $('body').removeClass('active');
            $('.popup div').removeClass('active');
            $('.left_txt a:first-child').removeClass('active');
            $('.call_in .indicator').css('display','none');
            $('.call_in').removeClass('active');
            $('.tablet > img').removeClass('rotate');
            $('.slide_wrap').removeClass('rotate');
            $('.popup2 p1').removeClass('active');
            $('.bx-wrapper').removeClass('active');
            $('.popup2 .popup_in_wrap div').css('transform','translate(0)');
            $('.popup2 a:nth-child(2)').addClass('active');
            $('.popup2 a:nth-child(3)').removeClass('active');
            
        }
    });
    let num2=0;
    $('.tablet_rotate').click(function(){
        if(num2==0){
            $('.left_txt a:last-child').addClass('active');
            num2=1;
        }else{
            $('.left_txt a:last-child').removeClass('active');
            num2=0;
        }
    });
    

    // 썸네일 클릭시 팝업
    // slide1 팝업
    $('.slide1 .t1').click(function(){
        $('.popup1 .p1').addClass('active');
        $('.popup1 .close').addClass('active');
    });
    $('.slide1 .t2').click(function(){
        $('.popup1 .p2').addClass('active');
        $('.popup1 .close').addClass('active');
        setTimeout(function(){
            $('.skill .html5').addClass('active');
            $('.skill .css3').addClass('active');
            $('.skill .jquery').addClass('active');
            $('.skill .javascript').addClass('active');
            $('.skill .photoshop').addClass('active');
            $('.skill .illustrator').addClass('active');
            $('.skill span').addClass('active');
        },1000);
    });

    // slide2 팝업
    $('.slide2 .t1').click(function(){
        setTimeout(function(){
            $('.popup2 .p1').addClass('active');
            $('.popup2 .close').addClass('active');
        },400);
    });
    $('.slide2 .t2').click(function(){
        setTimeout(function(){
            $('.popup2 .p2').addClass('active');
            $('.popup2 .close').addClass('active');
        },400);
    });
    $('.slide2 .t3').click(function(){
        setTimeout(function(){
            $('.popup2 .p3').addClass('active');
            $('.popup2 .close').addClass('active');
        },400);
    });
    $('.slide2 .t4').click(function(){
        setTimeout(function(){
            $('.popup2 .p4').addClass('active');
            $('.popup2 .close').addClass('active');
        },400);
    });

    // slide3 팝업
    $('.slide3 .t1').click(function(){
        $('.popup3 .p1').addClass('active');
        $('.popup3 .close').addClass('active');
        setTimeout(function(){
            $('.popup3 .popup_in .popup_in_txt').addClass('active');
        },1000);
    });
    $('.slide3 .t2').click(function(){
        $('.popup3 .p2').addClass('active');
        $('.popup3 .close').addClass('active');
        setTimeout(function(){
            $('.popup3 .popup_in .popup_in_txt').addClass('active');
        },1000);
    });
    $('.slide3 .t3').click(function(){
        $('.popup3 .p3').addClass('active');
        $('.popup3 .close').addClass('active');
        setTimeout(function(){
            $('.popup3 .popup_in .popup_in_txt').addClass('active');
        },1000);
    });
    $('.slide3 .t4').click(function(){
        $('.popup3 .p4').addClass('active');
        $('.popup3 .close').addClass('active');
        setTimeout(function(){
            $('.popup3 .popup_in .popup_in_txt').addClass('active');
        },1000);
    });
    $('.slide3 .t5').click(function(){
        $('.popup3 .p5').addClass('active');
        $('.popup3 .close').addClass('active');
        setTimeout(function(){
            $('.popup3 .popup_in .popup_in_txt').addClass('active');
        },1000);
    });

    // 팝업1 닫기
    $('.popup1 .close').click(function(){
        $(this).parent('div').removeClass('active');
        $('.close').removeClass('active');
        $('.skill .html5').removeClass('active');
        $('.skill .css3').removeClass('active');
        $('.skill .jquery').removeClass('active');
        $('.skill .javascript').removeClass('active');
        $('.skill .photoshop').removeClass('active');
        $('.skill .illustrator').removeClass('active');
        $('.skill span').removeClass('active');
    });

    // 팝업2 닫기
    $('.popup2 .close').click(function(){
        $(this).parent('div').removeClass('active');
        $('.close').removeClass('active');
        $('.popup2 p1').removeClass('active');
        $('.popup2 .popup_in_wrap div').css('transform','translate(0)');
        $('.popup2 a:nth-child(3)').addClass('active');
        $('.popup2 a:nth-child(4)').removeClass('active');
        setTimeout(function(){
            $('.tablet > img').removeClass('rotate');
            $('.slide_wrap').removeClass('rotate');
        },400);
    });

    
    // 팝업3 닫기
    $('.popup3 .close').click(function(){
        $(this).parent('div').removeClass('active');
        $('.close').removeClass('active');
        $('.popup3 .popup_in .popup_in_txt').removeClass('active');
    });

    // 스킬바 설명
    $('.html5').mouseover(function(){
        $('.desc-html5').css('display','block');
    $('.html5').mouseout(function(){
        $('.desc-html5').css('display','none');
        });
    });
    $('.css3').mouseover(function(){
        $('.desc-css3').css('display','block');
    $('.css3').mouseout(function(){
        $('.desc-css3').css('display','none');
        });
    });
    $('.jquery').mouseover(function(){
        $('.desc-jquery').css('display','block');
    $('.jquery').mouseout(function(){
        $('.desc-jquery').css('display','none');
        });
    });
    $('.javascript').mouseover(function(){
        $('.desc-javascript').css('display','block');
    $('.javascript').mouseout(function(){
        $('.desc-javascript').css('display','none');
        });
    });
    $('.photoshop').mouseover(function(){
        $('.desc-photoshop').css('display','block');
    $('.photoshop').mouseout(function(){
        $('.desc-photoshop').css('display','none');
        });
    });
    $('.illustrator').mouseover(function(){
        $('.desc-illustrator').css('display','block');
    $('.illustrator').mouseout(function(){
        $('.desc-illustrator').css('display','none');
        });
    });


    // 전화번호
    $('.sns .sns_in .call').click(function(){
        $('.call_in').addClass('active');
        $('.call_in .call_in_call').show();
        $('.call_in_icon ul li .c1').addClass('active');
        $('.call_in .call_in_icon ul li:first-child').addClass('active');
    });

    $('.call_in .call_in_icon ul li').click(function(){
        $(this).addClass('active');
        $(this).children().addClass('active');
        $(this).siblings('li').removeClass('active');
        $(this).siblings('li').children().removeClass('active');

        $(document).mouseup(function (e){
            let other = $('.call_in .call_in_icon ul li');
            let other2 = $('.call_in .call_in_icon ul li a');
            let other3 = $('.call_in .indicator');
            if( other.has(e.target).length === 0)
            { other.removeClass('active');}
            if( other2.has(e.target).length === 0)
            { other2.removeClass('active');}
            if( other3.has(e.target).length === 0)
            { other3.css('display','none');}
        });
    });
    
    $('.call_in_icon ul li .c1').click(function(){
        $('.call_in .call_in_call').css('display','block');
        $('.call_in .call_in_mail').css('display','none');
        $('.call_in .call_in_address').css('display','none');
        $('.call_in .call_in_facebook').css('display','none');
        $('.call_in .call_in_instagram').css('display','none');
    });
    $('.call_in_icon ul li .c2').click(function(){
        $('.call_in .call_in_call').css('display','none');
        $('.call_in .call_in_mail').css('display','block');
        $('.call_in .call_in_address').css('display','none');
        $('.call_in .call_in_facebook').css('display','none');
        $('.call_in .call_in_instagram').css('display','none');
    });
    $('.call_in_icon ul li .c3').click(function(){
        $('.call_in .call_in_call').css('display','none');
        $('.call_in .call_in_mail').css('display','none');
        $('.call_in .call_in_address').css('display','block');
        $('.call_in .call_in_facebook').css('display','none');
        $('.call_in .call_in_instagram').css('display','none');
    });
    $('.call_in_icon ul li .c4').click(function(){
        $('.call_in .call_in_call').css('display','none');
        $('.call_in .call_in_mail').css('display','none');
        $('.call_in .call_in_address').css('display','none');
        $('.call_in .call_in_facebook').css('display','block');
        $('.call_in .call_in_instagram').css('display','none');
    });
    $('.call_in_icon ul li .c5').click(function(){
        $('.call_in .call_in_call').css('display','none');
        $('.call_in .call_in_mail').css('display','none');
        $('.call_in .call_in_address').css('display','none');
        $('.call_in .call_in_facebook').css('display','none');
        $('.call_in .call_in_instagram').css('display','block');
    });
    $('.call_in_icon ul li .c6').click(function(){
        $('.call_in .call_in_call').css('display','none');
        $('.call_in .call_in_mail').css('display','none');
        $('.call_in .call_in_address').css('display','none');
        $('.call_in .call_in_facebook').css('display','none');
        $('.call_in .call_in_instagram').css('display','none');
    });

    $('.call_in .call_in_close').click(function(){
        $('.call_in .indicator').css('display','none');
        $('.call_in').removeClass('active');

    });



    // 회전이미지 클릭시 패드이미지 회전
    $('.slide2 ul li').click(function(){
        $('.slide_wrap').addClass('rotate');
        $('.tablet > img').addClass('rotate');
    });


    // slide2 팝업 슬라이드 버튼
    $('.popup2 a:nth-child(3)').addClass('active');
    $('.popup2_btn1').click(function(){
        $('.popup2 .popup_in_wrap div').css('transform','translate(0)');
        $('.popup2 .popup_in a:nth-child(3)').addClass('active');
        $('.popup2 .popup_in a:nth-child(4)').removeClass('active');
    });
    $('.popup2_btn2').click(function(){
        $('.popup2 .popup_in_wrap div').css('transform','translate(-37.6vw)');
        $('.popup2 .popup_in a:nth-child(4)').addClass('active');
        $('.popup2 .popup_in a:nth-child(3)').removeClass('active');
    });
});

if($(window).width() <= 480){
    
}