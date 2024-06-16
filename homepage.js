console.log('Welcome to the Studio')
// Shout out to Austin F. His code on codepen.io is the basis of my portal drag logic
// Check out the code here: https://codepen.io/citylims/pen/ogEoXe

$(function() {
    $(".portal-1").draggable({ containment: "window", scroll: false });
    $(".portal-2").draggable({ containment: "window", scroll: false });
    $(".portal-3").draggable({ containment: "window", scroll: false });
});