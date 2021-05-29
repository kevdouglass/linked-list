import Node  from './Node.js';

/** Linked List iplementation
 * 
 * Methods
 * --------
 * add(Node)
 * insertAt(element,position)
 * removeFrom(position)
 * removeElement(elmnt)
 * 
 * Helper-Methods
 * --------
 * isEmpty()
 * getSize()
 * printList()
 * getPosition
 * 
 * note: 3-ways to 'insert' (1) at the front of the linked-list [new node is always added before the head of the given linked-list; newly added node becomes the NEW head of linklist]
 *                          (2) After a given Node
 *                          (3) At the end of a Linked List
 */


export default class linkedList {
    constructor(){
        this.head = null;
        this.id = -1;
        this.size = 0;
        this.div = null;
        //console.log("Created A Linked List!");
    }
    createDiv(node){
        let adiv = document.createElement('div')
        adiv.style.width = '100px';
        adiv.style.height = '100px';
        adiv.style.background = 'steelblue';
        adiv.style.color = 'white';
        adiv.textContent = node.data;
        document.body.appendChild(adiv)

        // return adiv;
    }
    createSVG(node){
        // let svg = document.createElement('svg').append('circle')
        svg.style.height='210';
        svg.style.width = '500';
        
        let svgLine = document.createElement('line')
        

        let circ = document.createElement('circle')
        // circ.style.
        svg.appendChild(svgLine);
        // svg.style.width = '100px';
        // svg.style.height = '100px';
        // svg.style.background = 'steelblue';
        // svg.style.color = 'white';
        let line = document.createTextNode(node.data);
        svg.appendChild(line)
        // svg.textContent = node.data;
        document.body.appendChild(svg)

        // return adiv;
    }

    push(node){
        // this is insert-at-end of linked-list
        let root = this.head;
        let divRoot = this.head;
        this.id++;
        if(root === null && divRoot === null){ // (1) check if list is empty
            this.head = node;
            this.div = this.createSVG(node); //createSVG  createDiv
            // this.divs = document.createElement('div').className('linkedListNode').innerHtml(node)
            return;
        }
        else {
            // let current; 
            let current = this.head; // to store current
            let currentDiv = this.head;

            while (current.next && currentDiv.next){
                current = current.next;
                currentDiv = currentDiv.next;
            }//while
            //add the node
            // currentDiv = document.createElement('div').className('linkedListNode').innerHtml(node)
            current.next = node;
            currentDiv.next = this.createSVG(node);
        }
        this.size++;
    }//push

    insertAtFront(node, data){
        /**
         * params:
         *      node: Node
         *      data: integer
         */
        let temp = this.head;
        this.head = node;
        node.next = temp;
    }//insertAtFront

    insertAt(element,position){
        console.log('insert elemnt: ', element, ' @ linked_list.position[', position , ']')

    }


    pop(){
        let currentNode = this.head;

        if(this.isEmpty()){ // the list is empty
            return;
        }
        // if()
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    }//pop



    removeFrom(position){
        console.log('Remove from: [', position, ']')

    }

    removeElement(node, key){
        // console.log('remove elmnt: ', node, ' -Key: ', key);
        let temp = this.head;
        let prev = null;

        // if the head holds the key that we want to= delete
        if(temp != null && (temp.data == key)){
            this.head = temp.next;
            this.size--;
            // delete temp;
            return;
        }//if
        else {    
            // else,
                // Search for the key to be deleted by
                // keeping track of the 'previous' node 
            while(temp != null && (temp.data != key)){
                prev = temp;
                temp = temp.next;
            }//while

            if(temp == null){ // the node was not in the linked_list
                return;
            }

            // Re-Link Nodes
            prev.next = temp.next;
            // delete temp;    // deallocate temp-Node

        }
    }

    getId(){
        if(this.id === -1){
            return -1;
        }
        else{
            return this.id;
        }
    }//get the position of node in the linked-list

    isEmpty() {
        if(this.size === 0){
            return true;
        }
        return false;
    }//isEmpty

    // makeSvg(){
    //     let node = this.head;
    //     while(node !== null){
    //         console.log("makSVG:   ",node.data)
    //         // let body = document.body;
    //         // let elmnt = document.createElement('svg');
    //         // document.body.appendChild(elmnt);
    //         node = node.next;
    //     }
    // }//makeList
    // pushDiv(node){
    //     // this is insert-at-end of linked-list
    //     let root = this.head;
    //     // let divRoot = this.head;
    //     // this.id++;
    //     if(root === null){ // (1) check if list is empty
    //         // this.div = node;
    //         this.div = document.createElement('div')
    //         this.div.style.width = '100px';
    //         this.div.style.height = '100px';
    //         this.div.style.background = 'steelblue';
    //         this.div.style.color = 'white';
    //         this.div.textContent = node.data;
    //         // .className('linkedListNode').innerHtml(node)
    //         return;
    //     }
    //     else {
    //         // let current; 
    //         let current = this.head; // to store current
    //         // let currentDiv = this.head;

    //         while (current.next){
    //             current = current.next;
    //             // currentDiv = currentDiv.next;
    //         }//while
    //         //add the node
    //         // currentDiv = document.createElement('div').className('linkedListNode').innerHtml(node)
    //         current.next = document.createElement('div')
    //         this.div.style.width = '100px';
    //         this.div.style.height = '100px';
    //         this.div.style.background = 'steelblue';
    //         this.div.style.color = 'white';
    //         this.div.textContent = node.data;
    //     }
    //     this.size++;
    // }//push

    // makeDiv(id, data){
    //     let div = this.head;
    //     while(div !== null){
    //         console.log('make Div: ', div.data)
    //         let elem = document.createElement('div')
    //         elem.style.width = '100px';
    //         elem.style.height = '100px';
    //         elem.style.background = 'red';
    //         elem.style.color ='white';
    //         elem.textContent = data;
    //         document.body.appendChild(elem);
    //         div = div.next;
    //     }
    // }

    // makeList(){
    //     let node = this.head;
    //     let nodes = [];
    //     while(node !== null){
    //         nodes.push(node);
    //         node = node.next;
    //     }
    //     return nodes;  
    // }//makeList

    printList(){
        console.log('printing linked_list', this);
        let node =  this.head;
        while(node !== null){
            console.log(node.data);

            node = node.next;
        }//while
    }//printList
}

