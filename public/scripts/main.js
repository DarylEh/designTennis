'use strict';

// Open Hamburger Menu
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '50%';
    console.log('works');
}
// Closes Hamburger Menu
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = 0;
}
// Opens Settings Menu
function openSettingsMenu() {
    document.getElementById('side-settings').style.width = '50%';
    console.log('works');
}
// Closes Settings Menu
function closeSettingsMenu() {
    document.getElementById('side-settings').style.width = 0;
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        modal.style.display = "block";
    };
}
// Closes modal on the X
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};