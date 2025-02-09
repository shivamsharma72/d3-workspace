import { csv, select } from "d3"; // this is equal to const csv = d3.csv ;
import { scatterPlot } from "./scatterplot";
// above is the ES6 structure
//   console.log(d3);

const csvurl = [
  "https://gist.githubusercontent.com",
  "/curran",
  "/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534",
  "/iris.csv",
].join("");

const parseRow = (d) => {
  d.sepal_length = +d.sepal_length;
  d.sepal_width = +d.sepal_width;
  d.petal_length = +d.petal_length;
  d.petal_width = +d.petal_width;
  return d;
};

const width = innerWidth;
const height = innerHeight;
const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

const main = async () => {
  const data = await csv(csvurl, parseRow);
  svg.call(
    scatterPlot()
      .width(width)
      .height(height)
      .margin({
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      }) // Move margin before data
      .symbolValue((d) => d.species)
      .data(data)
      .xValue((d) => d.petal_length)
      .yValue((d) => d.sepal_length)
      .radius(5)
  );
};

main();
