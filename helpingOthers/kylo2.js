let MushroomCost = 15;
let count = 0
let worth = 1
let MagicalSlug = {
    worth: 1,
    species: "Magical Mollusk",
    moods: ["Gracious", "Appreciated", "glowing", "needy", "grateful","sleepy"] 
};

let arrayPosition = -1;
let MushroomMessage = "<p> Cost: " + MushroomCost + ". </p>"

$("#cost").html(MushroomMessage);
$("#slug-button").click(function(){
    
    count = count + worth;
    arrayPosition = arrayPosition + 1;
let CurrentMood = MagicalSlug.moods[arrayPosition];
let message = "<p> Cost: " + MushroomCost + ". </p>"
let MushroomMessage = "<p> Cost: " + MushroomCost + ". </p>"
    $("#output").html(message);
    console.log(count)
    console.log(arrayPosition)
    console.log(CurrentMood)
    console.log(MushroomCost)
if (arrayPosition == 5) {arrayPosition = 0}
$("#cost").html(MushroomMessage) 
})

$(".mushroom-button").click(function(){
    $("#cost").html(MushroomMessage)
    if (count >= MushroomCost);
   worth = worth + 1
    count = count - MushroomCost;
    MushroomCost = MushroomCost + 5;
    let MushroomMessage = "<p> Cost: " + MushroomCost + ". </p>"
    let CurrentMood = MagicalSlug.moods[arrayPosition];
    let message = "<p> You have " + count + "dollars and the slug is " + CurrentMood + ". </p>"
    $("#output").html(message)
    
        
    })
