import { useEffect, useState } from 'react'
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

/**
 *  D3 circle+text code
 * let data = [1,2,3,4,5];
      let svg= d3.select("svg").attr("height", "400").attr("width", "500").style("background","red");
      
      let g_circ = svg.selectAll("g").data(data).enter().append("g").append("circle").attr("r", "21").attr("cx", (d) => d*89).attr("cy", "100").style("color", "red").text((d)=>d); //("color", "blue");
      //let circ 
      //let g_text = svg.selectAll('g').append("text").data(data)
      let g_text = svg.selectAll('g').data(data).append('text').text((d) => d).attr("x", (d) => d*89).attr("y", "100").attr("font",24).style("fill","white");
 * 
 *  */
  const addNode = ({id, data}) => {
    // call this if user wishes to Add a Node to our LinkedList
    llist.push(new Node(data));
    
    id = llist.getId();
    // llist.pushDiv(new Node(data));
    console.log(llist)
    const new_node = {id, data };
    setNodes([...mNodes, new_node]);
  };//addNode

  const removeNode = (node) => {

    llist.removeElement(node, node.data);

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
