import Tnode from './ANode.js';
/**
 * This Creates a 'Node'-React-component
 *  */
const Nodes = ({nodes, onAdd, onDelete}) => {

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