import { useState } from 'react'
import Header from './components/Header'
import Nodes from './components/Nodes'
import LinkedList from './datastructures/LinkedList'
import Node from './datastructures/Node'
import AddNode from './components/AddNode'
// import Button from './components/Button'

let llist = new LinkedList();

function App() {
  const initialState = [{ id:null, node: new Node() }]
  // const [mNodes, setNodes] = useState([{data:null, next:null, id:null}])
const [mNodes, setNodes] = useState(initialState)


  const addNode = (node) => {
    // call this if user wishes to Add a Node to our LinkedList
    llist.push(new Node(node.data));
    console.log("llist:  ",llist);
    // console.log("removed-Node:  ",llist.pop())
    const new_node = { ...node }
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
    llist.removeElement(node);
    console.log("llist (After REMOVE-node called):  ",llist)
  }//removeNode



  return (
    <div className="container">
      <Header title='VizdomTree' />
      <AddNode onAdd={addNode} />
      <Nodes key={mNodes}
            nodes={mNodes}
            onAdd={addNode}
            />
    </div>
  );
}

export default App;
