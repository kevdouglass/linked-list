import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

/**
 * This creates a Single-Node, React-component and renders an SVG inside of a Div
 */

const Tnode = ({node, onDelete}) => {
    
    if(node.id !== null){
        console.log("created react-node: ", node)
    
        return (
            <div className='node' onClick={() => onDelete(node.id)}>
                 <svg className='svg-node' height="25" width="50">
                     
                    <text x="0" y="15" fill="red">{node.data}
                    </text>
                   
                </svg>
                <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(node.id)} />
            </div>
            
        )
    } else {
        return(
            <></>
        )
    }
 
}

export default Tnode;