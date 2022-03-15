
class NodeLL {
    data: any;
    next: NodeLL | null;
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: NodeLL | null;
    constructor() {
        this.head = null;
    }
    addNode(data: any) {
        let node: NodeLL = new NodeLL(data);
        let current: NodeLL | null = null;

        if (this.head === null)
            this.head = node;
        else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    displayLL() {
        let current: NodeLL | null = this.head;
        if (current) {
            let vals: string = 'List: ';
            while (current !== null) {
                vals += current.data.toString();
                if (current.next !== null)
                    vals += ', ';
                current = current.next;
            }
            return (vals);
        } else {
            return ('List Empty!');
        }
    }
}

function compareLL(A: LinkedList, B: LinkedList) {
    let currentA: NodeLL | null = A.head;
    let currentB: NodeLL | null = B.head;
    let result: string = '';
    while (currentA !== null && currentB !== null) {
        if (currentA.data === currentB.data) {
            result = currentA.data.toString();
            break;
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }
    if (result !== '')
        console.log('Intersection at Node: ' + result);
    else console.log('No Intersecting Node!');
}

function main() {
    const LinkedA: LinkedList = new LinkedList();
    LinkedA.addNode('Yo');
    LinkedA.addNode(5);
    LinkedA.addNode(6);
    LinkedA.addNode(1);
    LinkedA.addNode(10);
    const LinkedB: LinkedList = new LinkedList();
    LinkedB.addNode(5);
    LinkedB.addNode('Yo');
    LinkedB.addNode(6);
    LinkedB.addNode(1);


    console.log('Linked List A contains:\n\t' + LinkedA.displayLL());
    console.log('\n');
    console.log('Linked List B contains:\n\t' + LinkedB.displayLL());
    console.log('\n');
    compareLL(LinkedA, LinkedB);
}
main();