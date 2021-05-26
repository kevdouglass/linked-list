import PropTypes from 'prop-types'


/**
 * This creates a Single-Node, React-component and renders an SVG inside of a Div
 */

const Tnode = ({node}) => {
    
    if(node.id !== null){
        console.log("created react-node: ", node)
    
        return (
            <div className='node'>
                 <svg className='svg-node' height="25" width="50">
                    <text x="0" y="15" fill="red">{node.data}</text>
                </svg>
            </div>
            
        )
    } else {
        return(
            <></>
        )
    }
 
}

export default Tnode;