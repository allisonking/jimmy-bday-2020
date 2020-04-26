function Drawing(options) {
  const height = 600;
  const width = 1200;
  const svg = d3
    .select(options.container)
    .append("svg")
    .attr("height", height)
    .attr("width", width);

  // add the background image
  svg
    .append("defs")
    .append("pattern")
    .attr("id", "img")
    .append("image")
    .attr("xlink:href", "drawing.png");

  d3.json("data.json").then((data) => {
    console.log(data);
    // svg
    //   .append("rect")
    //   .attr("width", width)
    //   .attr("height", height)
    //   .style("fill", "red");
  });
}
