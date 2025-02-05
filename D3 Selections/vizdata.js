export const vizdata = (svg, data) => {
  //   const circles = svg.selectAll("circle").data(data);
  //   const circlesEnter = circles.enter().append("circle").attr("r", 20);
  //   circles
  //     .merge(circlesEnter)
  //     .attr("cx", (d) => d.x)
  //     .attr("cy", (d) => d.y);
  //   circles.exit().remove();

  const LineGenerator = d3
    .line()
    .x((d) => d.x)
    .y((d) => d.y);

  const LineGenerator1 = d3
    .line()
    .x((d) => d.x)
    .y((d) => d.y2);

  const circles = svg
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", 20)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y)
    // .attr("fill", (d) => `rgb(${d.red}, ${d.green}, ${d.blue})`);
    .attr("fill", "#ff0000");

  const circles2 = svg
    .append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("r", 20)
    .attr("cx", (d) => d.x)
    .attr("cy", (d) => d.y2)
    // .attr("fill", (d) => `rgb(${d.red}, ${d.green}, ${d.blue})`);
    .attr("fill", "blue");
  const bases = svg
    .selectAll(".base")
    .data(data)
    .join("line")
    .attr("class", "base")
    .attr("x1", (d) => d.x)
    .attr("y1", (d) => d.y)
    .attr("x2", (d) => d.x)
    .attr("y2", (d) => d.y2)
    .attr("stroke", "green")
    .attr("stroke-width", 2);

  svg
    .selectAll("path")
    .data([1])
    .join("path")
    .attr("d", LineGenerator(data))
    .attr("fill", "none")
    .attr("stroke", "black");

  svg
    .append("g")
    .selectAll("path")
    .data([1])
    .join("path")
    .attr("d", LineGenerator1(data))
    .attr("fill", "none")
    .attr("stroke", "black");

  //   svg
  //     .append("path") // We need only one path for the whole dataset
  //     .datum(data) // Binds the full array as one unit
  //     .attr("d", LineGenerator)
  //     .attr("fill", "none")
  //     .attr("stroke", "black");
};
