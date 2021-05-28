import { useState } from 'react'
import Header from './components/Header'
import Nodes from './components/Nodes'
// import Tnode from './components/ANode'
import LinkedList from './datastructures/LinkedList'
import Node from './datastructures/Node'
import AddNode from './components/AddNode'
// import * as d3 from 'd3'
// import createBarChart from './d3Practice/barchart'
// import createSvgContainer from './d3Practice/svgElm'
// import Button from './components/Button'

let llist = new LinkedList();

function App() {
  // const initialState = [ { id:null, node: new Node() }]
  // const [mNodes, setNodes] = useState([{data:null, next:null, id:null}])
  const [mNodes, setNodes] = useState([ 
    { id:null, data:null },
  ]);

  // let nodes = [88,100,56,128,190,37,120, 160]
  // let nodes = [4,1,8,2,7,3];
  

  const addNode = ({id, data}) => {
    // call this if user wishes to Add a Node to our LinkedList
    llist.push(new Node(data));
    id = llist.getId();

    const new_node = {id, data };
    setNodes([...mNodes, new_node]);
    // console.log("Adding? ",llist)
  };//addNode

  const removeNode = (node) => {
    console.log("Remove-Node: ", node);
    console.log("can-I (REMOVE) ",llist);
    llist.removeElement(node, node.data);
    // llist.removeFrom(node.id)

    setNodes(mNodes.filter((curNode) =>
        curNode.id !== node.id 
    ));
    
  };//removeNode

  // onDelete={removeNode}

  return (
    <div className="container">
      {/* <body ></body> */}
      {/* <svg></svg> */}
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
