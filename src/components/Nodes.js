import Tnode from './ANode.js';
import * as d3 from 'd3'
import { useRef, useEffect } from 'react'
// import useEffect from 'react'
/**
 * This Creates a 'Node'-React-component
 *  */
const Nodes = ({nodes, onAdd, onDelete}) => {
    
    //     let d3Container = useRef(null);
    // console.log("SvgRef  " , d3Container)

    /* The useEffect Hook is for running side effects outside of React,
       for instance inserting elements into the DOM using D3 */
                // Bind D3 data
                // Enter new D3 elements
                // Update existing D3 elements
                // Remove old D3 elements
        /*
            useEffect has a dependency array (below). It's a list of dependency
            variables for this useEffect block. The block will run after mount
            and whenever any of these variables change. We still have to check
            if the variables are valid, but we do not have to compare old props
            to next props to decide whether to rerender.
        */


    return (
        <div className='linked_list'>
           {nodes.length > 0 ?
 
           nodes.map((node) => (
                <Tnode  key={node.id} 
                        node={node}  
                        onAdd={onAdd}
                        onDelete={onDelete}
                /> 
            )) : 'no nodes'}
        </div>
    );
}

export default Nodes