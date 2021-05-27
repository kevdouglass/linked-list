import * as d3 from 'd3'

// let divs = d3.select('div').append('p').text(mNodes.map((node) => node.data))
  // d3.selectAll('p').style('color', 'blue')
  // console.log("Divs:  ",divs)
  // let nodes = [88,100,56,128,190,37,120, 160]
  // console.log("mNodes, ", mNodes)
  // mNodes.map(node => nodes.append(node.data))

  // d3.select('body').selectAll('p') //select all 'p' tags (may not be created yet)
  //                 .data(nodes) //sit in waiting state
  //                 .enter()    //once there is data go ahead and create <p> tags 
  //                 .append('p')
  //                 .text('D3 is awesome!!')

  // d3.select('body').selectAll('p')
  //                   .data(nodes)
  //                   .enter() //enter when ready
  //                   .append('p')
  //                   .text(function(d) {return d;})


  // Axis-methods
// d3.axisBottom()
// d3.axisTop()
// d3.axisLeft()
// d3.axisRight()

export default function createBarChart(dataSet) {
  let svgWidth = 500, svgHeight=300, barPadding=5;
  let barWidth= (svgWidth / dataSet.length); // evenly space the barset

  let svg = d3.select('svg')
              .attr("width", svgWidth)
              .attr("height", svgHeight);

  //scale the SVG to fit screen properly for the given dataset
  let yScale = d3.scaleLinear()
              .domain([0, d3.max(dataSet)]) //get the min and max for our domain
              .range([0, svgHeight]);       //set the range to height of our svgContainer

  // // create (x,y)-Axis
  // let x_axis = d3.axisBottom()
  //               .scale(yScale);
  // let y_axis = d3.axisLeft()
  //               .scale(yScale);
  
  // svg.append('g')
  //   .attr("transform", "translate(50, 18)")
  //   .call(y_axis)
  //   let xAxisTranslate = svgHeight - 20;
  // svg.append('g').attr("transform", "translate(50, " + xAxisTranslate + ")").call(x_axis)

  let barChart = svg.selectAll('rect')
                    .data(dataSet).enter()
                    .append('rect')
                    .attr('y', function(d) {
                      // return (svgHeight-d);
                      return svgHeight - yScale(d);
                    })
                    .attr('height', function(d) {
                      // return d;
                      return yScale(d);
                    })
                    .attr('width', barWidth-barPadding)
                    .attr("transform", function(d,i) {
                      let translate = [barWidth*i, 0]
                      return "translate("+ translate+")"
                    })


  let text = svg.selectAll('text')
                    .data(dataSet).enter() // waits for dataSet to be parsed if no <text/? are created yet
                    .append('text')
                    .text(function(d) {
                      return d;
                    })
                    // .text(d => d)
                    .attr("y", function(d, i) {
                      return svgHeight-d-2;
                    })
                    .attr("x", function(d,i){
                      return barWidth*i;
                    })
                    .attr('fill', "#A64C38");
  // console.log("mySvg  " + svg)
  // console.log("mybarChart  " + barChart)


}
  