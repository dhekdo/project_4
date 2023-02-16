// 책 썸네일 클릭 이벤트
$(".thum > img, .book_cover > .btn").click(function(){
    $(".thum2, .thum_back").show();
    $("header").hide();
});
$(".fa-xmark, .thum2").click(function(){
    $(".thum2, .thum_back").hide();
    $("header").show();
});

// 대표저서 구좌
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "논어", size: 6 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("img_cover");
    

    for( var i = 0; i < boxs.length; i++ ){ 
        $(".img_cover").eq(i).append("<a href=''>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".img_title").eq(i).append("<a href = 'sub.html'>" + msg.documents[i].title + "</a>");
    }
});

// 사이드 순위 구좌
for( var i = 1; i < 11; i++ ){
    document.getElementsByClassName("num")[i-1].innerHTML = i + "위";
}

$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "소설", size: 10 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("num_text");

    for( var i = 0; i < boxs.length; i++ ){ 
        $(".num_text").eq(i).append(msg.documents[i].title);
    }
});

// 텍스트파일 변환
$(function(){
    $.get("./txt/content1.txt", function(data){
        $(".content1").html(data);
    })
    $.get("./txt/content2.txt", function(data){
        $(".content2").html(data);
    })
    $.get("./txt/content3.txt", function(data){
        $(".content3").html(data);
    })
    $.get("./txt/content4.txt", function(data){
        $(".content4").html(data);
    })

});

// 펼쳐보기 버튼
$(".content_box").click(function(){
    $(this).children(".content_text").toggleClass("content_on").css({"height": "auto", "overflow":"visible"});
    $(this).toggleClass("content_out");

    if( $(this).children(".content_text").hasClass("content_on") == false ){
        $(this).children(".content_text").css({"height": "210px", "overflow":"hidden"});
    }

});