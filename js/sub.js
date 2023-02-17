// 책 썸네일 클릭 이벤트
$(".thum > img, .book_cover > .btn").click(function(){
    $(".thum2, .thum_back").show();
    $("header").hide();
});
$(".fa-xmark, .thum2").click(function(){
    $(".thum2, .thum_back").hide();
    $("header").show();
});

// 펼쳐보기 버튼
$(".content_box").click(function(){
    $(this).children(".content_text").toggleClass("content_on").css({"height": "auto", "overflow":"visible"});
    $(this).toggleClass("content_out");

    if( $(this).children(".content_text").hasClass("content_on") == false ){
        $(this).children(".content_text").css({"height": "210px", "overflow":"hidden"});
    }

});

// 상단 책정보
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "논어", size: 15 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("foot_price");
    

    for( var i = 0; i < boxs.length; i++ ){ 
        $(".foot_price").eq(i).append("<span>" + msg.documents[i].price + "원" + "</span>");
        $(".foot_sale_price").eq(i).append("<span>" + msg.documents[i].sale_price + "원" + "</span>");
    }  
});

$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "인생을위한고전", size: 1 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("book_api");
    

    for( var i = 0; i < boxs.length; i++ ){ 
        $(".book_api > .authors").eq(i).prepend("<span>" + msg.documents[i].authors + "</span>");
        $(".book_api > .translators").eq(i).prepend("<span>" + msg.documents[i].translators + "</span>");
        $(".book_api > .publisher").eq(i).prepend("<span>" + msg.documents[i].publisher + "</span>");

    }  
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

// 같은 출판사 책 정보 불러오기
$.ajax({
    method : "GET",
    url : "https://dapi.kakao.com/v3/search/book?target=title",
    data : { query : "논어", size: 15 },
    headers : { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
})

.done(function(msg){
    var boxs = document.getElementsByClassName("more_cover");
    

    for( var i = 0; i < boxs.length; i++ ){ 
        $(".more_cover").eq(i).append("<a href=''>" + "<img src = '" + msg.documents[i].thumbnail + "'/>" + "</a>");
        $(".more_title").eq(i).append("<a href = ''>" + msg.documents[i].title + "</a>");
        $(".more_price").eq(i).append("<a href = ''>" + msg.documents[i].price + "원" + "</a>");
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
    $.get("./txt/more_img.txt", function(data){
        $(".more_img").html(data);
    })
});

