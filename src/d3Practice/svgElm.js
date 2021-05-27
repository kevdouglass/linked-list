import * as d3 from 'd3'
import './svg.css'

export default function createSvgContainer(){

    let svgWidth = 600 , svgHeight = 500;
    //(1) create the SVG

    let svg = d3.select('svg').attr('width', svgWidth)
                                .attr('height', svgHeight)
                                .attr('class', 'svg-container') //.attr('fill', '#777');

    let line = svg.append('line')
    .attr("x1", 100).attr("y1",50)
    .attr("x2", 500).attr("y2", 50)
    .attr("stroke", "red");


    let rect = svg.append('rect')
    .attr('x', 100).attr('y', 100)
    .attr('width', 200).attr('height', 100)
    .attr('fill', "#9895FF")


    let circle = svg.append('circle')
    .attr('r', 80)
    .attr('cx', 200 ).attr('cy', 300)
    .attr('fill', '#7CE8D5').attr('stroke', 'red');
}