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
    // document.getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event" : "command", "func" : "playVideo", "args" : ""}', '*');
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
    data : { query : "잠", size: 7 },
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
    data : { query : "로맨스", size: 7 },
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

// 오디오북 클릭시 메뉴 전환
// document.getElementsByClassName("head_wrap")[0].children().onclick = function(){
//     this.classList.toggle("audio_on");
// }
$(".head_wrap li").click(
    function(){
        $(this).addClass("audio_on");
        $(this).siblings().removeClass("audio_on");
    }
);

$(".head_wrap li").click(function(){
    var headIndex = $(this).index();

    $(".audiomillie > div").eq(headIndex).show().siblings().hide();
});

// 노란 영상 구좌 영상 클릭시 화면 재생
document.getElementsByClassName("view_thumbnail")[0].onclick = function(){
    this.style.display = "none";
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


