let count = 0;
let buttonText = ""
let colors = ["Red", "Green", "Blue", "Pink", "Black", "Yellow", "Orange", "White"]
$("#needy-button").click( function() {
   count = count + 1;

   console.log(count);
   console.log(colors[count-1])
   buttonText = "I am "
   $("#needy-button").html(buttonText + colors[count-1]);
   $("body").css("background", colors[count-1]);

});

