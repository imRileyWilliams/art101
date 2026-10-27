let water = "Beautiful";
let people = 5;
let bananas = 5;
let information = {
    population: "five",
    dish: "Banana Sundae",
    attraction: "Sirena Beach"
    
}

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