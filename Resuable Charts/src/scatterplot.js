import { scaleLinear, extent, axisLeft, axisBottom } from "d3"; // this is equal to const csv = d3.csv ;

export const scatterPlot = (selection) => {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let margin;
  let radius;

  const my = (selection) => {
    const x = scaleLinear()
      .domain(extent(data, xValue))
      //.domain([d3.min(data, xValue), d3.max(data, xValue)])
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain(extent(data, yValue))
      .range([height - margin.bottom, margin.top]);

    const xExtent = extent(data, xValue);
    const yExtent = extent(data, yValue);

    // Normalization function (scales values to 0-255)for rgb
    const normalize = (val, min, max) => ((val - min) / (max - min)) * 255;

    const marks = data.map((d) => {
      const normX = normalize(xValue(d), xExtent[0], xExtent[1]);
      const normY = normalize(yValue(d), yExtent[0], yExtent[1]);

      return {
        x: x(xValue(d)),
        y: y(yValue(d)),
        normX,
        normY,
        title: `(${xValue(d)},${yValue(d)})`,
      };
    });
    console.log(marks);
    //   console.log(y.range());
    //   console.log(data);

    selection
      .selectAll("circle")
      .data(marks)
      .join("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 5)
      .append("title")
      .text((d) => d.title);

    selection
      .append("g")
      .attr(`transform`, `translate(${margin.left},0)`)
      .call(axisLeft(y));

    selection
      .append("g")
      .attr(`transform`, `translate(0,${height - margin.top})`)
      .call(axisBottom(x));

    // const bases = selection
    //   .selectAll(".base")
    //   .data(marks)
    //   .join("line")
    //   .attr("class", "base")
    //   .attr("x1", (d) => d.x)
    //   .attr("y1", height - margin.top)
    //   .attr("x2", (d) => d.x)
    //   .attr("y2", (d) => d.y)
    //   .attr("stroke", (d) => `rgb(${d.normX}, ${d.normY}, 10)`)
    //   .attr("stroke-width", 2);

    // selection
    //   .selectAll(".base2")
    //   .data(marks)
    //   .join("line")
    //   .attr("class", "base2")
    //   .attr("x1", margin.left)
    //   .attr("y1", (d) => d.y)
    //   .attr("x2", (d) => d.x)
    //   .attr("y2", (d) => d.y)
    //   .attr("stroke", (d) => `rgb(${d.normX}, ${d.normY}, 200)`) // Normalized stroke color
    //   .attr("stroke-width", 2);
  };

  // ((width = +_), my) this is  returning my  , this is a way in which JS can be used
  // Let's say we had (x=5 ,foo) this will return foo it will executre both the things but return the last thing execuuted

  my.width = function (_) {
    return arguments.length ? ((width = +_), my) : width;
  };
  my.height = function (_) {
    return arguments.length ? ((height = +_), my) : height;
  };

  my.data = function (_) {
    return arguments.length ? ((data = _), my) : data;
  };
  my.xValue = function (_) {
    return arguments.length ? ((xValue = _), my) : xValue;
  };
  my.yValue = function (_) {
    return arguments.length ? ((yValue = _), my) : yValue;
  };
  my.radius = function (_) {
    return arguments.length ? ((radius = +_), my) : radius;
  };
  my.margin = function (_) {
    return arguments.length ? ((margin = _), my) : margin;
  };
  return my;
};
