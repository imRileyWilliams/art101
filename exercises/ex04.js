let count = 0;
let colorCount = 0;
let buttonText = ""
let colors = ["Red", "Green", "Blue", "Pink", "Black", "Yellow", "Orange", "White"]
$("#needy-button").click( function() {
   count = count + 1;

   console.log(count);
   console.log(colors[count-1])
   buttonText = "I am "
   $("#needy-button").html("I have been clicked " + count + " times and " + buttonText + colors[colorCount]);

   $("body").css("background", colors[colorCount]);
colorCount = colorCount + 1
   if (colorCount >= 8) 
{
   colorCount = 0
}
if (count < 5)
   $("#needy-button").after(
"I feel happy"
   )
else (count > 5 < 10)
$("#needy-button").after("Keep pushing") 
else(count > 10)
(
   $("#needy-button")
)
});

