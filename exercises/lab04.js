let count = 0;
let buttonCreature = {
    name: "Needy Button",
    species: "rogue Artificial Intelligence system",
    favoriteFood: "clicks",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;
    let arrayPosition = count - 1;
    let currentMood = buttonCreature.moods[arrayPosition];
    let  = "<p>You clicked me " + count + " times.</p>";
    
    $("#output").html();
   
 
});