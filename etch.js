var gridpx = 960; // how many pixels 
var gridsize = 16;
var color = 'grey';
var paint = true;
document.getElementById("onOff").innerText = "ON";

document.getElementById("numBlocks").addEventListener("input", resetGrid);

displayGrid();
enablePaint();

function colorit(event){
    if(paint == true)
        event.target.style.backgroundColor = color;
}

function enablePaint(){
    paint = true;
    document.getElementById("onOff").innerText = "ON"; 
    document.getElementById("onOff").style.color = "green";
    document.getElementById("onOff").style.border = "green 2px solid";
}

function disablePaint(){
    paint = false;
    document.getElementById("onOff").style.border = "red 2px solid";
    document.getElementById("onOff").style.color = "red";
    document.getElementById("onOff").innerText = "OFF";
}

document.body.onkeyup = function(e){   
    if(e.keyCode == 13){
        //your code
        if(paint == true){
            disablePaint();
            
        }
        else{
            enablePaint();
        }
    }
}

function resetGrid(){
    gridsize = document.getElementById("numBlocks").value;
    displayGrid();

}
function setColor(picker) {
    color = '#' + picker.toString()
}

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
