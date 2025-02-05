//  import { select } from 'd3' ;
import { vizdata } from "./vizdata.js";
import { makedata } from "./makedata.js";

const width = innerWidth;
const height = innerHeight;
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// console.log();

let t = 0;
setInterval(() => {
  const n = 10 + Math.sin(t) * 27;
  const data = makedata(n, t);
  //   vizdata(svg, data);

  // Dynamically change background color based on the data

  // Set the background color using the average RGB values
  //   d3.select("body").style(
  //     "background-color",
  //     `rgb(${Math.floor(128 + 127 * Math.cos(0.125 * 0.05 + t))}, ${Math.floor(
  //       128 + 127 * Math.sin(0.099 * 0.05 + t)
  //     )}, ${Math.floor(128 + 127 * Math.sin(0.0012 * 0.1 + t))})`
  //   );

  svg.call(vizdata, data);

  t = t + 0.1;
}, 100);
