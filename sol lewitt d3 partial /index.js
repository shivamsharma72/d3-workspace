const { select, range } = d3;

const width = window.innerWidth;
const height = window.innerHeight;

console.log("D3 loaded:", select !== undefined);

// Create basic SVG
const svg = select('body')
  .append('svg')
    .attr('width', width)
    .attr('height', height);

// Add a test circle
// svg.append('circle')
//   .attr('cx', 100)
//   .attr('cy', 100)
//   .attr('r', 50)
//   .attr('fill', 'red');

// // Append SVG to the body
// const svg = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'svg',
// );
// svg.setAttribute('width', width);
// svg.setAttribute('height', height);
// document.body.appendChild(svg);

// Option 1: Destructure from the global d3 object

console.log(document);

// Horizontal Stripes (Large Circle Mask)
//const n = 100;
// const marks = [];
// for (let i = 0; i < n; i++) {
//   marks.push({
//     y: i * 20,
//     width: width,
//     height: 10,
//     mask: 'url(#circle-mask)',
//   });
// }
// // console.log(marks);
// svg.selectAll('rect')
// .data(marks)
// .join('rect')
// .attr('y',(d)=> d.y)
// .attr('width',(d)=> d.width)
// .attr('height',(d)=> d.height)
// .attr('mask',(d)=> d.mask) ;

const n = 100;  // Make sure n is defined

svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
      .attr('y', (d) => d * 20)
      .attr('width', width)
      .attr('height', 10)
      .attr('mask', 'url(#circle-mask)')
      .attr('fill', 'black');  // Add fill to make rectangles visible

  

//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect',
//   );
//   rect.setAttribute('y', i * 19);
//   rect.setAttribute('width', width);
//   rect.setAttribute('height', 10);
//   rect.setAttribute('mask', 'url(#circle-mask)');
//   rect.setAttribute('fill', 'black');
//   svg.appendChild(rect);
// }

// // First Mask
// const mask1 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask',
// );
// mask1.setAttribute('id', 'circle-mask');
// svg.appendChild(mask1);

//in d3 we can do this like 
const mask = svg.append('mask').attr('id','circle-mask');

mask.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'black'); // Change to black for mask background

mask.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 200)
  .attr('fill', 'white'); // Add white circle to mask


svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#circle-mask2)')
    .attr('fill', 'black');  // Add fill to make rectangles visible
  const mask2 = svg.append('mask').attr('id','circle-mask2');

mask2.append('rect')
  .attr('width', width)
  .attr('height', height)
  .attr('fill', 'white'); // Change to black for mask background

mask2.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 200)
  .attr('fill', 'black'); // Add white circle to mask


// const mask1Rect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect',
// );
// mask1Rect.setAttribute('width', width);
// mask1Rect.setAttribute('height', height);
// mask1Rect.setAttribute('fill', 'black');
// mask1.appendChild(mask1Rect);

// const mask1Circle = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle',
// );
// mask1Circle.setAttribute('cx', width / 2);
// mask1Circle.setAttribute('cy', height / 2);
// mask1Circle.setAttribute('r', 400);
// mask1Circle.setAttribute('fill', 'white');
// mask1.appendChild(mask1Circle);

// // Second Mask
// const mask2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask',
// );
// mask2.setAttribute('id', 'circle-mask-2');
// svg.appendChild(mask2);

// const mask2Rect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect',
// );
// mask2Rect.setAttribute('width', width / 2);
// mask2Rect.setAttribute('height', height / 2);
// mask2Rect.setAttribute('fill', 'white');
// mask2.appendChild(mask2Rect);

// const mask2Rect2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect',
// );
// mask2Rect2.setAttribute('x', width / 2);
// mask2Rect2.setAttribute('y', height / 2);
// mask2Rect2.setAttribute('width', width / 2);
// mask2Rect2.setAttribute('height', height / 2);
// mask2Rect2.setAttribute('fill', 'white');
// mask2.appendChild(mask2Rect2);

// const mask2Circle = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle',
// );
// mask2Circle.setAttribute('cx', width / 2);
// mask2Circle.setAttribute('cy', height / 2);
// mask2Circle.setAttribute('r', 400);
// mask2Circle.setAttribute('fill', 'black');
// mask2.appendChild(mask2Circle);

// // How do you define x-y lines
// const mask3 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'mask',
// );
// mask3.setAttribute('id', 'circle-mask-3');
// svg.appendChild(mask3);

// const mask3Rect = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect',
// );
// mask3Rect.setAttribute('x', width / 2);
// mask3Rect.setAttribute('y', 0);
// mask3Rect.setAttribute('width', width / 2);
// mask3Rect.setAttribute('height', height / 2);
// mask3Rect.setAttribute('fill', 'white');
// mask3.appendChild(mask3Rect);

// const mask3Rect2 = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'rect',
// );
// mask3Rect2.setAttribute('x', 0);
// mask3Rect2.setAttribute('y', height / 2);
// mask3Rect2.setAttribute('width', width / 2);
// mask3Rect2.setAttribute('height', height / 2);
// mask3Rect2.setAttribute('fill', 'white');
// mask3.appendChild(mask3Rect2);

// const mask3Circle = document.createElementNS(
//   'http://www.w3.org/2000/svg',
//   'circle',
// );
// mask3Circle.setAttribute('cx', width / 2);
// mask3Circle.setAttribute('cy', height / 2);
// mask3Circle.setAttribute('r', 400);
// mask3Circle.setAttribute('fill', 'black');
// mask3.appendChild(mask3Circle);

// // Horizontal Stripes (Large Circle Mask)
// for (let i = 0; i < 100; i++) {
//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect',
//   );
//   rect.setAttribute('y', i * 19);
//   rect.setAttribute('width', width);
//   rect.setAttribute('height', 10);
//   rect.setAttribute('mask', 'url(#circle-mask)');
//   rect.setAttribute('fill', 'black');
//   svg.appendChild(rect);
// }

// // Vertical Stripes (Small Circle Mask)
// for (let i = 0; i < 120; i++) {
//   const rect = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'rect',
//   );
//   rect.setAttribute('x', i * 20);
//   rect.setAttribute('width', 10);
//   rect.setAttribute('height', height);
//   rect.setAttribute('mask', 'url(#circle-mask-2)');
//   rect.setAttribute('fill', 'black');
//   svg.appendChild(rect);
// }

// // Draw Diagonal Lines (Top-Right to Bottom-Left)
// for (let i = 0; i < width + height; i += 30) {
//   const line = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'line',
//   );
//   line.setAttribute('x1', i);
//   line.setAttribute('y1', 0);
//   line.setAttribute('x2', i - height);
//   line.setAttribute('y2', height);
//   line.setAttribute('stroke', 'black');
//   line.setAttribute('stroke-width', 10);
//   line.setAttribute('mask', 'url(#circle-mask-3)');
//   svg.appendChild(line);
// }

// for (let i = 0; i <= 1000; i += 10) {
//   const circle = document.createElementNS(
//     'http://www.w3.org/2000/svg',
//     'circle',
//   );
//   circle.setAttribute('cx', width / 2);
//   circle.setAttribute('cy', height / 2);
//   circle.setAttribute('r', i * 4); // Incrementing radius
//   circle.setAttribute('fill', 'none'); // Optional: no fill for visible circles
//   circle.setAttribute('stroke', 'black'); // Stroke color as a string
//   circle.setAttribute('stroke-width', 4); // Optional: Define stroke width
//   svg.appendChild(circle); // Fix spelling
// }

//console.log(document);
