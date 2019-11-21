var gridpx = 960; // how many pixels 
var gridsize = 16;


displayGrid();

function colorit(event){
    event.target.style.backgroundColor = "grey";
}

rb = document.getElementById("restart");
rb.addEventListener("click", function(){
    console.log("Clicked");
    gridsize = prompt("How many squares across?");
    displayGrid();
});

function displayGrid(){
    document.getElementById("grid").innerHTML = "";

    for(var i = 0; i < gridsize * gridsize; i++){
        var div = document.createElement("div");
        div.style.height = (gridpx / gridsize) + "px";
        div.style.width = (gridpx / gridsize) + "px";
        div.style.backgroundColor = "white";
        div.style.border = "solid black 1px";
        div.style.boxSizing = "border-box";
    
        div.addEventListener("mouseover", colorit);
        document.getElementById("grid").appendChild(div);
    }
}
