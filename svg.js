

//creating SVG 
var svg = d3.select("body").append("svg");
svg.attr("width", 500);
svg.attr("height", 500);
svg.attr("style", "border: 1px solid");



var add_line = function(color, x1, y1, x2, y2){
svg.append("line").style("stroke", color).attr("x1", x1).attr("x2", x2).attr("y1", y1).attr("y2", y2);
};


//x-axis
add_line("black", 30, 470, 470, 470);
//y-axis
add_line("black", 30, 470, 30, 30);

var data = {
    title: "Kitten Weight (oz) vs Kitten Age (days)",
    data_source: "https://best1x.com/kitten-cat-growth-chart/",
    y: [2.5, 3, 4.5, 6, 7.5, 8, 16, 24, 29, 35, 37, 65, 70],
    x: [1, 5, 10, 14, 21, 28, 42, 56, 40, 84, 51, 112, 168],
    description: "This scatter plot displays the correlation between kitten age and normal kitten weight. We used the lower bound in a range of normal cat weights for each age."
};


//Passing the data.x array as the second argument of apply() results in the function being called with all values in the array as parameters.
//console.log(Math.max.apply(null, data.x));

//440 because graph axes will take up 30
var scale = function(arr){
    var ret =  Math.max.apply(null, arr) / 440;
    return ret;
};

console.log("x scale");
console.log(scale(data.x));
console.log("y scale");
console.log(scale(data.y));

var add_text = function(x, y, text){
    svg.append("text").attr("x", x).attr("y", y).text(text).attr("font-size", "5px");
};

var font_text = function(x,y,text,font_size){
    svg.append("text").attr("x", x).attr("y", y).text(text).attr("font-size", font_size);
}

var add_points = function(xcor,ycor){
    for(var i = 0; i < xcor.length; i++){
	add_text(25 + xcor[i] + 6.8 * xcor[i], 470 + ycor[i] - 7 * ycor[i], "@");
    };
};

var make_scales = function(scaleX, scaleY){
    console.log("scale X");
    console.log(scaleX);
    console.log("scale Y");
    console.log(scaleY);
    console.log("running make_scales...");
    var iterateY = parseInt(500/scaleY);
    for (var y = 0; y < 440; y+= 20){
	add_line("black", 30, 500 - y - 30, 20, 500 - y - 30);
	add_text(10, 500-y-30, (parseInt(y*scaleY)).toString());
    }
    for (var x = 0; x < 440; x+= 20 ){
	add_line("black", 30 + (x), 470, 30 + (x), 480);
	add_text(30+x, 490, (parseInt(x*scaleX)).toString());
    }
};

var generate_scales = function(){
    console.log("running generate_scales...");
    make_scales(scale(data.x), scale(data.y));
    font_text(50,25, data.title, "20px");
    font_text(250, 499, "Weight", "10px");
    font_text(1, 243, "Age", "10px");
    add_points(data.x, data.y);
}

var button = document.getElementById("boop");
button.addEventListener("click", function(){generate_scales();});

