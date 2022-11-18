

var audio1 = new Audio("correct.mp3");
var audio2 = new Audio("wrong.mp3");

$(".btn").click(function () {
    let index = Math.floor(Math.random() * 2);
    const array = ["head", "tail"];

    var computerGenerated = array[index];
    $("img").attr("src", computerGenerated + ".png");
    var userChoice = $(this).attr("id");
    if (userChoice === computerGenerated) {
        audio1.play();
    }
    else {
        audio2.play();
    }
    setTimeout(function(){
        document.location.reload();
    },1000)  

})