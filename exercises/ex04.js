let count = 0;
let mood = "bored";
let colorCount = 0;
let buttonText = ""
let colors = ["Red", "Green", "Blue", "Pink", "Aqua", "Yellow", "Orange", "White"]
$("#needy-button").click( function() {
   count = count + 1;

   console.log(count);
   console.log(colors[count-1])
   buttonText = "I am "
   $("#needy-button").html("I have been clicked " + count + " times and " + buttonText + colors[colorCount]);

   $("body").css("background", colors[colorCount]);
colorCount = colorCount + 1
if ((count > 0) && (count <5)) {  $("#needy-button").after("<br>I feel happy");}
else if ((5 <= count) && (count <8)) { $("#needy-button").after( "<br>Keep Pushing");}
else if(count > 10) {
 $("#needy-button").after("<br>STOP CLICKING ME PLEASE"); }
    if (colorCount >= 8) 
{
   colorCount = 0
}
})

