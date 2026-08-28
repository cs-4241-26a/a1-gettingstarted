document.addEventListener("DOMContentLoaded", () => {
    var element = document.getElementById("ball");
    document.addEventListener("mousemove", (event) => {  
    let rect = element.getBoundingClientRect();

    // console.log((event.clientX - rect["x"] - (rect["width"] / 2)), -(event.clientY - rect["y"] - (rect["height"] / 2)));
    
    // arctan -x offset
    let offset = 0;
    if ((event.clientX - rect["x"] - (rect["width"] / 2)) < 0) {
        offset = 180;
    }

    // arctan based on offset of cursor and current ball pos
    // converted to degrees
    element.style.rotate = offset + 
    (360 / 6.28318) * 
    Math.atan((event.clientY - rect["y"] - (rect["height"] / 2)) / 
    (event.clientX - rect["x"] - (rect["width"] / 2))) + 
    "deg"
    });
});



