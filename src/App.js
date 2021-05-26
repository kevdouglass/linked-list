import { useState } from 'react'
import Header from './components/Header'
import Nodes from './components/Nodes'
import LinkedList from './datastructures/LinkedList'
import Node from './datastructures/Node'
import AddNode from './components/AddNode'
// import Button from './components/Button'

let llist = new LinkedList();

function App() {
  const initialState = [ { id:null, node: new Node() }]
  // const [mNodes, setNodes] = useState([{data:null, next:null, id:null}])
const [mNodes, setNodes] = useState([ 
  { id:null, data:null },
])


// const datas = [{id: 0,data:54},
//               {id: 1,data:3},
//               {id: 2,data:22},]
// const [ids, setIDs] = useState()
  //const [ids, setIds] = u 
  // initialState.id

  const addNode = ({id, data}) => {
    // call this if user wishes to Add a Node to our LinkedList
    llist.push(new Node(data));
    console.log("llist:  ",llist);
    id = llist.getPosition();

    // console.log('Node-id: ', {nodeId, ...node});
    // const new_node = {nodeId, ...node }
    const new_node = {id, data }
    setNodes([...mNodes, new_node])

  }//addNode

  const insertAtFrontOfLinkedList = (node) => { 
    //call this if 'insertAtFront' button is clicked
    llist.insertAtFront(new Node(node.data))
    console.log("llist (After insert @ Front called):  ",llist)
    
  }//insertAtFrontOfLinkedList

  const insertAtPosition = (node, position) => {
    //called if 'insertAtPosition' is clicked
    llist.insertAt(node, position)
    console.log("llist (After insert at Position is called):  ",llist)
  }//insertAtPosition

  const removeNode = (node) => {
    // let key = 22;
    // let id,data = {...node}
    setNodes(mNodes.filter((id) =>
      // console.log("Node->id: ", node, "->", id),
      node.id === id ? {...node, data: !node.data}: node
      // console.log("node[id] ", ...node)
    ))
    // id = llist.getPosition();
    console.log("DEBUG: Attempting to remove node: ",node)
    // mNodes.map((data) =>
    //   node.data === data ? llist.removeElement(node, data) : node
    // )
   
  }//removeNode

  // onDelete={removeNode}

  return (
    <div className="container">
      <Header title='VizdomTree' />
      <AddNode onAdd={addNode} />
      <Nodes key={mNodes}
            nodes={mNodes}
            onAdd={addNode}
            onDelete={removeNode}
            />
    </div>
  );
}

export default App;
