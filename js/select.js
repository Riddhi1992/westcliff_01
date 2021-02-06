var selectedOption = document.getElementById("selection");
var summerSelected = document.getElementById("summerActivities");
var winterSelected = document.getElementById("winterActivities");

function selectOption() {
    summerSelected.style.display = selectedOption.value == "S" ? "block" : "none";
    winterSelected.style.display = selectedOption.value == "W" ? "block" : "none";
}