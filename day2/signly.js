class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;


        current.prev = newNode; // Set the previous pointer of the new node
        newNode.next = current; // Set the next pointer of the new node

    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        // Traverse to the end of the list
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current; // Set the previous pointer of the new node
    }




    // Reverse

    reverse() {
        let current = this.head;
        let prev = null

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next; 
        }
        this.head = prev;

        return this.head;
    }

    tostring() {
        let current = this.head;
        let result = '';
        while (current) {
            const arrow = current.next ? '->' : '';
            result += current.data + arrow;
            current = current.next;
        }
        return result;
    }


}


const lists = new SinglyLinkedList();
lists.prepend(0);
lists.append(1);
lists.append(2);
lists.append(3);
lists.append(4);
lists.append(5);
lists.append(6);

 