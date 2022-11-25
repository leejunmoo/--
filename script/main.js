
$(function(){


    $('nav .depth1 > li').hover(
        function(){
            //mouseover
            /* $(this).children().addClass('show');  이거는 한개씩*/
            $('nav .depth2').addClass('show'); // 얘는 메뉴 전체드롭다운
        },
        function(){
            //mouseout
            /* $(this).children().removeClass('show'); */
            $('nav .depth2').removeClass('show');
        }
    );

    // 이미지 슬라이더
    let img_num = 0; // 이미지 번호
    let img_height = 300;


    setInterval(function(){
            img_num++;
            //마지막 이미지를 처음으로
            if(img_num  > 2) {
                img_num = 0;
            }
            $('.slider > .sliders').css({
            transform: `translateY(${-img_num * img_height}px)`

            
        })

    },3000);

});