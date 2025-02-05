const { select, range } = d3;

const width = window.innerWidth;
const height = window.innerHeight;

console.log("D3 loaded:", select !== undefined);

const svg = select('body')
  .append('svg')
    .attr('width', width)
    .attr('height', height);


console.log(document);



const n = 100; 

svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
      .attr('y', (d) => d * 20)
      .attr('width', width)
      .attr('height', 10)
      .attr('mask', 'url(#circle-mask)')
      .attr('fill', 'black'); 

  

const mask = svg.append('mask').attr('id','circle-mask');

mask.append('rect')
        .attr('x',0)
        .attr('y',0)
      .attr('width', width)
      .attr('height', height)
      .attr('fill', 'black'); 

mask.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 200)
  .attr('fill', 'white');


svg.append('g')
  .selectAll('rect')
  .data(range(n))
  .join('rect')
    .attr('x', (d) => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#circle-mask2)')
    .attr('fill', 'black');  
    
  const mask2 = svg.append('mask').attr('id','circle-mask2');

mask2.append('rect')
  
  .attr('width', width/2)
  .attr('height', height/2)
  .attr('fill', 'white'); 

  mask2.append('rect')
  .attr('x', width/2)
  .attr('y', height/2)
  .attr('width', width/2)
  .attr('height', height/2)
  .attr('fill', 'white'); 

mask2.append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 200)
  .attr('fill', 'black'); 

  svg.append('g')
  .selectAll('line')
  .data(range(n))
  .join('line')
  .attr('x1', (d) => d*30 -height)
  .attr('y1', 0)
  .attr('x2', (d) => d * 30 )
  .attr('y2', height)
  .attr('stroke', 'black')
  .attr('stroke-width', 10)
  .attr('mask', 'url(#circle-mask3)');

  const mask3= svg.append('mask').attr('id','circle-mask3') ;

  mask3.append('rect')
  .attr('x', width/2)
  .attr('y', 0)
  .attr('width', width/2)
  .attr('height', height/2)
  .attr('fill', 'white'); 
  
  mask3.append('rect')
  .attr('x', 0)
  .attr('y', height/2)
  .attr('width', width/2)
  .attr('height', height/2)
  .attr('fill', 'white'); 

  mask3.append('circle')
  .attr('cx',width/2).attr('cy',height/2).attr('r',200).attr('fill','black');

  svg.append('circle')
  .attr('cx',width/2).attr('cy',height/2).attr('r',25).attr('fill','black');

