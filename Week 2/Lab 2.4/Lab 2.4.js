function init() {
    d3.csv("Task_2.4_data.csv").then(function(data) {

        console.log(data);
        wombatSightings = data;

        barChart(wombatSightings);

    });

    var w = 500;
	var h = 120;
	var padding = 1;

	var svg = d3.select("#chart")
		.append("svg")
		.attr("width", w)
		.attr("height", h);

    function barChart(wombatSightings) {
        svg.selectAll("rect")
            .data(wombatSightings)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / wombatSightings.length);
            })
            .attr("y", function (d) {
                return h - d.wombats * 4;
            })
            .attr("width", w / wombatSightings.length - padding)
            .attr("height", function (d) {
                return d.wombats * 4;
            })
            .attr("fill", function (d) {
                return "rgb(0, " + (d.wombats * 6) + " , " + (d.wombats * 30) + ")";
            })

        svg.selectAll("text")
            .data(wombatSightings)
            .enter()
            .append("text")
            .text(function (d) {
                return d.wombats;
            })
            .attr("x", function (d, i) {
                return i * (w / wombatSightings.length) + (w / wombatSightings.length - padding) / 2;
            })
            .attr("y", function (d) {
                if (d.wombats * 4 < 20) {       // If the bar is short, adjust the text position to be above the bar
                    return h - d.wombats * 4 - 5;
                }
                return h - d.wombats * 4 + 15;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", function (d) {
                if (d.wombats * 4 < 20) {
                    return "black";
                }
                return "white";
            })
            .attr("text-anchor", "middle");
        }
    }
    window.onload = init;