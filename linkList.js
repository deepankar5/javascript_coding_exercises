class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkList{
    constructor(head = null){
        this.head = head;
    }

    addElementAtBegining(node){
        node.next = this.head;
        this.head = node;
    }

    traverseToEnd(){
        let node = this.head;
        while(node.next != null){
            node = node.next
        }
        return node
    }

    getNodeAtPosition(n){
        let node = this.head;
        for(let i = 1 ; i < n; i++){
            node = node.next;
        }
        return node
    }
    insertNodeAtPosition(Node, n){
        let prev_node = this.getNodeAtPosition(n-1);
        let next_node = this.getNodeAtPosition(n);
        prev_node.next = Node;
        Node.next = next_node;
    }
}

let node1 = new Node(1)
let node2 = new Node(2)
node1.next = node2
let node3 = new Node(3)
node2.next = node3
let node4 = new Node(4)
node3.next = node4

let node5 = new Node(5)

let List1 = new LinkList(node1) 
List1.insertNodeAtPosition(node5, 3)

List1.traverseToEnd()




