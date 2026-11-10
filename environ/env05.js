let water = "Beautiful";
let people = 5;
let bananas = 5;
let information = {
    population: "five",
    dish: "Banana Sundae",
    attraction: "Sirena Beach"
    
}
let Scene = 0

//////////////////////////
$("#people").click(function (){
let message = "There are " + "<strong>"+ people + "</strong>" + " people living on Island Delfino.";
$("#answer").html(message);

})

$("#bananas").click(function(){
    let message = "Sorry! We are out of bananas. Please come back <strong> tomorrow.</strong>"
    $("#answer").html(message);
})

$("#info").click(function(){
    let message = "The population is: " + "<br>"
     + "<strong>" + information.population + "</strong>" + "<br>" + "The national dish is the: " + "<br>"
    + "<strong>" +  information.dish + "</strong>" + "<br>" 
    + "Best attraction is: " + "<br>" + "<strong>" + information.attraction + "</strong>"; 
    $("#answer").html(message);
})

$("#empty").click(function(){
  let message = " ";
  $("#answer").html(message);  
})
//////////////////////////////////
$("#bomb").hover(function(){
    $("#bombText").stop(true, true).slideDown(300);},
      function () {
    $("#bombText").stop(true, true).slideUp(300);
      })

$("#Scene").click(function(){
    Scene = 1
if (Scene = 1) {


    $("body").css("background", "red")
    $("#empty").html("Save Everyone")
    $("#party").css("display","none")
    $("#Scene").css("display", "none")
    $("#bad").css("display","block")
    $("img").css("display","none")
    $("#people").click(function (){
    
let message = "Everyone is <strong> dead. </strong>";
$("#answer").html(message)


})

$("#bananas").click(function(){
    let message = "There are <strong> no more bananas. </strong>"
    $("#answer").html(message);
})

$("#info").click(function(){
    let message = "<strong>It's gone. There is no more Island Delfino</strong> There is nothing for me to tell you about..."; 
    $("#answer").html(message);
})

$("#empty").click(function(){
    $("body").css("background","")
    $("#party").css("visibility", "visible")
    $("#party").css("display", "block")
    $("#Scene").css("display","block" )
    $("#bad").css("display", "none"
    )
    $("img").css("display","block")
})

}})
