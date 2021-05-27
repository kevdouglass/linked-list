import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
// import d3, { svg } from 'd3'
import { useRef } from 'react'

/**
 * This creates a Single-Node, React-component and renders an SVG inside of a Div
 */

const Tnode = ({node, onDelete}) => {
    // const Tnode = ({node}) => {
    // let divNode = document.createElement('div');
    // let width = 960,
    //     height = 500;
    // let mySvg = d3.select(divNode).append('svg').attr("width", width).attr("height",height);
    // let defs = svg.append("defs");
    // defs.append("clipPath").attr("id", "circle1").append("circle").attr("cx", 350).attr("cx",350)
    // let svgRef = useRef();
    // console.log("SvgRef  " , svgRef)
    // console.log("onDelete ", node, "  in NodesCOmpnent: ", onDelete)


    if(node.id !== null){
        // console.log("created react-node: ", node)
    
        return (
            <div className='node' onClick={() => onDelete(node)}>
            {/* // <div className='node' onClick={() => console.log(onDelete(node))}> */}
                 <svg  className='svg-node' height="100%" width="100%">
                     <g>
                     {/* <rect  x="0" y="0" width="100" height="100" fill="red" > </rect> */}
                     <circle r='50' cx='50' cy='50'></circle>
                        <text x="40" y="55" fill="white">{node.data}</text>
                     
                        {/* <text x="0" y="15" z="100" fill="red">{node.data}</text> */}
                    
                    </g>
                </svg>
                {/* <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(node.id)} /> */}
            </div>
            
        )
    } else {
        return(
            <></>
        )
    }
 
}

export default Tnode;