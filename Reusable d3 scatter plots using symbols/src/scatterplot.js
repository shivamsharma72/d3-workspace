import {
  scaleLinear,
  extent,
  axisLeft,
  axisBottom,
  symbol,
  symbols,
  scaleOrdinal,
} from "d3"; // this is equal to const csv = d3.csv ;
// import { symbols } from "d3-shape";
export const scatterPlot = (selection) => {
  let width;
  let height;
  let data;
  let xValue;
  let yValue;
  let margin;
  let size;
  let symbolValue;

  const my = (selection) => {
    const x = scaleLinear()
      .domain(extent(data, xValue))
      //.domain([d3.min(data, xValue), d3.max(data, xValue)])
      .range([margin.left, width - margin.right]);

    const y = scaleLinear()
      .domain(extent(data, yValue))
      .range([height - margin.bottom, margin.top]);

    const symbolScale = scaleOrdinal()
      .domain(data.map(symbolValue))
      .range(symbols);

    //console.log("i am here ");
    console.log(symbolScale.domain());

    const symbolGenerator = symbol().size(size);

    const marks = data.map((d) => ({
      x: x(xValue(d)),
      y: y(yValue(d)),
      pathd: symbolGenerator.type(symbolScale(symbolValue(d)))(),
    }));
    //console.log(marks);
    //   console.log(y.range());
    //   console.log(data);

    selection
      .selectAll("path")
      .data(marks)
      .join("path")
      // .attr("cx", (d) => d.x)
      // .attr("cy", (d) => d.y)
      // .attr("r", 5)
      .attr("d", (d) => d.pathd)
      .attr("transform", (d) => `translate(${d.x},${d.y})`);

    selection
      .append("g")
      .attr(`transform`, `translate(${margin.left},0)`)
      .call(axisLeft(y));

    selection
      .append("g")
      .attr(`transform`, `translate(0,${height - margin.top})`)
      .call(axisBottom(x));
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
  my.size = function (_) {
    return arguments.length ? ((size = +_), my) : size;
  };
  my.margin = function (_) {
    return arguments.length ? ((margin = _), my) : margin;
  };
  my.symbolValue = function (_) {
    return arguments.length ? ((symbolValue = _), my) : symbolValue;
  };
  return my;
};
