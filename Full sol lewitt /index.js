const { select, range, symbols, symbol } = d3;

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

console.log(document);

const n = 100;
// horizontal line s
svg
  .append("g")
  .selectAll("rect")
  .data(range(n))
  .join("rect")
  .attr("y", (d) => d * 20)
  .attr("width", width)
  .attr("height", 10)
  .attr("mask", "url(#mask-1)")
  .attr("fill", "black");

//vertical lines
svg
  .append("g")
  .selectAll("rect")
  .data(range(n))
  .join("rect")
  .attr("x", (d) => d * 20)
  .attr("width", 10)
  .attr("height", height)
  .attr("mask", "url(#mask-2)")
  .attr("fill", "black");

const renderMask = (selection, id, inverted) => {
  const mask = selection.append("mask").attr("id", id);

  mask
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height)
    .attr("fill", inverted ? "white" : "black");

  // const g = mask.append('g')
  //   .attr('transform',`translate(${width/2},${height/2})`)
  mask
    .selectAll("g")
    .data(range(symbols.length))
    .join((enter) =>
      enter
        .append("g")
        .attr("transform", (d) => `translate(${d * 200 + 100}, ${height / 2})`)
        .append("path")
        .attr("d", (d) => symbol(symbols[d], 20000)())
        .attr("fill", inverted ? "black" : "white")
    );
};

//  renderMask('mask-1',false);
//  renderMask('mask-2',true);
svg.call(renderMask, "mask-1", false);
svg.call(renderMask, "mask-2", true);
