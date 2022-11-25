
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

    //탭 UI
    //버튼 스타일 클릭하면 버튼도 스타일바뀌게

    //공지사항 클릭
    $('.btn-group a.btn-notice').on('click', function(){
        $('#notice-box').addClass('show');
        //한쪽이 보이면 다른한쪽은 안보여야하니까
        $('#gallery-box').removeClass('show');
    })
    
    //갤러리 클릭
    $('.btn-group a.btn-gallery').on('click', function(){
        $('#gallery-box').addClass('show');
        $('#notice-box').removeClass('show');
    })


    //공지사항 첫줄 클릭시 popup창 보이기
    $('#main-contents .notice #notice-box a').on('click', function(){
        $('#main-contents .popup').addClass('show');
    })
    $('#main-contents .popup .popup-box .popup-close').on('click', function(){
        $('#main-contents .popup').removeClass('show');
    })
});