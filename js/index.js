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


