$(function(){
    $("h1").click(function() {
        alert("This is a header.");
        alert("second popup.");
    });
    
    $("p").click(function() {
        alert("This is a paragraph.");
    });
    
    $("img").click(function() {
        alert("This is an image.");
    });
});