// A speaks
let messageA= ["How are you?","Sorry to hear", "I love it"]
// B speaks
let messageB = ["Terrible","I can't stand this dancing.","Of course YOU do."]
let countA = 0
let countB = 0
// when A is clicked
$("#character-a").click(function(){
    if (countA == countB){
    $("#chat").append("<p> Jake: " + messageA[countA]+"</p>");
    countA = countA + 1;}
if (countB > 2) {$("#answers").css("display","flex");
}
})

$("#character-b").click(function(){
    if (countB < countA ) {
        $("#chat").append("<p> Finn: " + messageB[countB]+"</p>")
        countB = countB + 1;}
})

$("#answer-green").click(function(){
    $("body").css("background-color","green")
})
$("#answer-pink").click(function(){
    $("body").css("background-color","pink")
})