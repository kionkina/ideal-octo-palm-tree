

//creating SVG 
var svg = d3.select("body").append("svg");
svg.attr("width", 500);
svg.attr("height", 500);
svg.attr("style", "border: 1px solid");

var data = {
    title: "Kitten Weight (oz) vs Kitten Age (days)",
    data_source: "https://best1x.com/kitten-cat-growth-chart/",
    y: [2.5, 3, 4.5, 6, 7.5, 8, 16, 24, 29, 35, 37, 65, 70],
    x: [1, 5, 10, 14, 21, 28, 42, 56, 40, 84, 51, 112, 168],
    description: "This scatter plot displays the correlation between kitten age and normal kitten weight. We used the lower bound in a range of normal cat weights for each age."
};


//Passing the data.x array as the second argument of apply() results in the function being called with all values in the array as parameters.
//console.log(Math.max.apply(null, data.x));

var scale = function(arr){
    var ret =  parseInt( 500 / (Math.max.apply(null, arr) - Math.min.apply(null, arr)));
    return ret;
};

console.log("x scale");
console.log(scale(data.x));
console.log("y scale");
console.log(scale(data.y));

