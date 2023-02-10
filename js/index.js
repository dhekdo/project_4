// 메인 슬라이더 텍스트 애니메이션
window.onload = function(){
    var mainTitle = document.getElementById("title1");
    var subTitle = document.getElementById("title2");

    mainTitle.setAttribute("style", "transform: translateY(-100px); transition : all 1.5s; opacity : 1");
    setTimeout(function(){
        subTitle.setAttribute("style", "transform: translateY(-50px); transition : all 1s; opacity : 1");
    },500);
}


// 썸네일 클릭시 영상 재생
document.getElementsByClassName("video_click")[0].onclick = function(){
    this.style.display = "none";
    $(".video_img iframe").attr("src", "https://www.youtube.com/embed/u1OVbU4EdwI?playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.millie.co.kr&amp;widgetid=1&autoplay=1&mute=1");
}

// 베스트 셀러 구좌 책 정보 불러오기
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "소설", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap1");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover1").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title1").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person1").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con1").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 한달
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "여행", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap2");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover2").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title2").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person2").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con2").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 오디오북
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "에세이", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap3");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover3").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title3").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person3").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con3").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 로맨스
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "사랑", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap4");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover4").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title4").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person4").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con4").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});


// 선택 구좌
$(".pick_all > div").eq(0).siblings().hide();

$(".pick_btn ul li").click(
    function(){
        var pickIndex = $(this).index();

        $(this).addClass("pick_on").siblings().removeClass("pick_on");
        $(".pick_all > div").eq(pickIndex).show().siblings().hide();
    }
);

// 주식
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "주식", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap_pick1");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover_pick1").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title_pick1").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person_pick1").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con_pick1").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 영어
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "영어", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap_pick2");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover_pick2").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title_pick2").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person_pick2").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con_pick2").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 고전
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "고전", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap_pick3");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover_pick3").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title_pick3").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person_pick3").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con_pick3").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 인테리어
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "인테리어", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap_pick4");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover_pick4").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title_pick4").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person_pick4").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con_pick4").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});

// 다이어트
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "다이어트", size: 7 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("cover_wrap_pick5");

    for( var i = 0; i < boxs.length; i++ ){
        
        $(".cover_pick5").eq(i).append("<a href='#'>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".book_title_pick5").eq(i).append("<a href = 'sub_book13.html'>" + msg.documents[i].title + "</a>");
        $(".person_pick5").eq(i).append("<a href = ''>" + msg.documents[i].authors + "</a>");
        $(".con_pick5").eq(i).append("<a href = ''>" + msg.documents[i].contents.substring(0, 30) + "</a>")
    }
});


// 오디오북 클릭시 메뉴 전환
// document.getElementsByClassName("head_wrap")[0].children().onclick = function(){
//     this.classList.toggle("audio_on");
// }
$(".head_wrap li").click(
    function(){
        $(this).addClass("audio_on").siblings().removeClass("audio_on");
    }
);

$(".millie_text2 ul li, .audio_text2 ul li").click(
    function(){
        $(this).addClass("audiomillie_on").siblings().removeClass("audiomillie_on");
    }
);

$(".head_wrap li").click(function(){
    var headIndex = $(this).index();

    $(".audiomillie > div").eq(headIndex).show().siblings().hide();
});



// 노란 영상 구좌 영상 클릭시 화면 재생
document.getElementsByClassName("view_thumbnail")[0].onclick = function(){
    this.style.display = "none";
    $(".view_img iframe").attr("src", "https://www.youtube.com/embed/c-XG8k_w1LM?playsinline=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.millie.co.kr&amp;widgetid=3&autoplay=1&mute=1");

}

// 큐앤에이 구좌
$(".qna_box").click(function(){
    $(this).children(".qna_sub").slideToggle(100,function(){
        $(this).toggleClass("qna_on");
    });
    
    // 화살표
    if( $(".qna_sub").hasClass("qna_on") == true ){
        $(this).find("img").attr("src","img/down.ad6759519210e8ae0cf9c13157ede6b7.png");
    }else{
        $(this).find("img").attr("src","img/up.a3240ab0ff41a500d14dcd11eef4de8e.png");
    } 
});


