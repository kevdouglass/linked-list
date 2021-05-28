import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import * as d3 from 'd3'
import { useRef, useEffect } from 'react'

/**
 * This creates a Single-Node, React-component and renders an SVG inside of a Div
 */

const Tnode = ({node, onDelete}) => {
    
    // const ref = useRef()

    // useEffect( () => {
    //     draw();
    // })

    // const draw = () => {
    //     d3.select('div').append('p').text('Hello WOrld')
    // }
    // d3.select('.node').selectAll('svg').datum(node).append('svg')

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