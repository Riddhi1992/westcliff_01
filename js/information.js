var photos = []; // Declare an empty array to store image element
var fileNames = []; // Declare an empty element to store image file names
var imageList = []; // Declare an empty array to store html list that contain an image
var image; // Declare an empty variable to store the assembled image list codes
// var openList = "<li id='photo'>"; // Declare available to contain open list tag
var openList = []; // Declare available to contain open list tag
var closeList = "</li>"; // Declare a variable to contain close list tag
var openCaptionTag = "<h3 class='caption'>";
var captionTexts = [
    "Boating at Banff",
    "Snowy Mountain",
    "Scenic view at Banff",
    "Gondola at Banff",
    "Bears",
    "Wildlife at Banff",
    "Lake view of Banff",
    "Camping under the Stars",
    "Ferry ride to the city",
    "Canada Train Tour",
];
var closeCaptionTag = "</h3>";

var openDescTag1 = "<p class='description' onClick = 'displayBox(";
var openDescTag2 = ")'>";
var descTexts = [
    "Boating is the leisurely activity of travelling by boat on the water.",
    "Snowy Mountain line with full of snow",
    "Scenic valley view at Banff",
    "Gondola at Banff to reach to other point",
    "Bears - perfect place to see wild life",
    "Wildlife at Banff - perfect place to see wild life",
    "Lake view of Banff",
    "Camping under the Stars",
    "Ferry ride to the city",
    "Canada Train Tour",
];
var closeDescTag = "</p>";
var description;

// Information box
var headingTag = captionTexts;

var infoTag = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus a tempora, modi, iste id eligendi ex praesentium odit dolor quae reprehenderit molestiae, assumenda voluptatum earum sapiente at impedit illo neque.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iste aspernatur omnis necessitatibus veniam modi.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iste aspernatur.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit iste aspernatur omnis.", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto quos et est obcaecati consequuntur totam rerum repellat quam vero fugiat, iure quis dolor asperiores eum!", "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, recusandae!", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ipsam magni beatae?", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt in dolorum beatae asperiores.", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, necessitatibus ab tempore cum dolore temporibus possimus?"];


var clickClose = "Click This to Close";

// var openA = "<a href"



// Create a loop to create 6 images starting with index of 0
for (var i = 0; i < 10; i++) {
    fileNames.push("banff_" + (i + 1)); // Create image file name and store in the array
    photos.push("<a href='#/' class='lightbox-toggle'>" + "<img src='images/" + fileNames[i] + ".jpg'>" + "</a>"); // Assemble file name into image element and store in an array
    openList.push("<li class='photo" + (i + 1) + "'>");
    image =
        openList[i] +
        photos[i] +
        openDescTag1 + i +
        openDescTag2 + 
        descTexts[i] + 
        closeDescTag +
        openCaptionTag +
        captionTexts[i] +
        closeCaptionTag +
        closeList; // Assemble image element from array with list elements and store in a variable
        imageList.push(image); // Store (push) the assemble list codes into an array
}
// Display all six image codes stored in the array
document.getElementById("album").innerHTML = imageList;

function displayBox(num) {
    document.getElementById("infoBox").style.visibility = "visible";
    document.getElementById("titleOfBox").innerHTML = captionTexts[num];
    document.getElementById("info").innerHTML = infoTag[num];
    document.getElementById("closeLink").innerHTML = clickClose;
}

document.getElementById("closeLink").addEventListener("click", closeBox);

function closeBox() {
    document.getElementById("infoBox").style.visibility = "hidden";
} 
