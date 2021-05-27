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
        //console.log("Created A Linked List!");
    }

    push(node){
        // this is insert-at-end of linked-list
        let root = this.head;
        this.id++;
        if(root === null){ // (1) check if list is empty
            this.head = node;
            return;
        }
        else {
            // let current; 
            let current = this.head; // to store current

            while (current.next){
                current = current.next;
            }//while
            //add the node
            current.next = node;
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
        console.log('remove elmnt: ', node, ' -Key: ', key);
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

