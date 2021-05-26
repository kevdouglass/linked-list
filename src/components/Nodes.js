import Tnode from './ANode.js';
/**
 * This Creates a 'Node'-React-component
 *  */
const Nodes = ({nodes, onAdd}) => {

    return (
        <div className='linked_list'>
           {nodes.length > 0 ?
           nodes.map((node) => (
                <Tnode  key={node.id} 
                        node={node}  
                        onAdd={onAdd}
                /> 
            )) : 'no nodes'}
        </div>
    );
}

export default Nodes