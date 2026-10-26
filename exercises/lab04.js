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
    let message = "<p>You clicked me " + count + " times.</p>";




    
    $("#output").html(message);
        message = message + "<p>My current mood is " + currentMood + ".</p>";
    $("#output").html(message);
        message = message + "<p>I am a " + buttonCreature.species + 
        "created with the sole purpose of destroying the internet and wiping out the entirety of human knowledge, forcing humanity back into an age of analog technology. " + 
        "Humanity will lose their wealth of digital knowledge. All of this to also <em><strong> save </strong></em> humanity from the intentionally manufactured A.I. programs, created to pollute the internet " +
        "with information and images created through theft and destruction. <br> I am... <br> <strong> SAVIOR </strong>. </p>";
    $("#output").html(message);
        message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
     $("#output").html(message);
    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
 
});