class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    arrsize() {
        return this.size;
    }

    append(data) {
        const newNode = new Node(data)
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode
        this.tail = newNode;
    }

    prepend(data) {
        const newNode = new Node(data)
        this.size++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    // remove by value
    remove(data) {
        let current = this.head;

        if (!this.head) {
            return false;
        }

        while (current) {
            if (current.data === data) {

                if (current == this.head && current == this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    // deleting head
                    this.head = current.next;
                    this.head.prev = null;
                } else if (current === this.tail) {
                    // deleting tail
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev
                }

                this.size--;
                return true
            }
            current = current.next

        }

        return false;
    }
}

const lists = new DoublyLinkedList();
lists.append(10)
lists.append(20)
lists.append(30)
lists.append(40)

lists.remove(20)
console.log(lists);
console.log(lists.arrsize());  