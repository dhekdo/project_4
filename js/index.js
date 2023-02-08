// 메인 슬라이더 텍스트 애니메이션
window.onload = function(){
    var mainTitle = document.getElementById("title1");
    var subTitle = document.getElementById("title2");

    mainTitle.setAttribute("style", "transform: translateY(-100px); transition : all 1.5s; opacity : 1");
    setTimeout(function(){
        subTitle.setAttribute("style", "transform: translateY(-50px); transition : all 1s; opacity : 1");
    },500);
}

