// .click(...) runs this function when the Add button is clicked.
$("#add-button").click(function () {
    // .val() reads the field; .trim() removes spaces at either end.
    let label = $("#item-label").val().trim();
    let objectColor = $("object-color").val();
    let objectShape = $("object-shape").val();
    let objectLabel = $("object-label").val();

    if (label == "") {
        $("#message").text("Say creature name");
    }
    else {
        // HTML inside $(...) creates a new element, not yet on the page.
        let item = $("<li></li>");
        // .text(...) sets its label literally, including < and >.
        item.text(label);
        // .append(...) adds it after the existing list items.
     $("#items").css("background-color", objectColor)
        $("#items").append(item);
        // CSS PROPERTIES YAYYYY
 
        // Clear the field and return focus for the next item.
        $("#item-label").val("");
        $("#item-label").focus();
        $("#message").text("");
    }
});