class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Circular {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        // check if Node is Empty
        let current = this.head;

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return
        }


        while (current.next !== this.head) {
            current = current.next;
        }

        newNode.next = this.head;
        current.next = newNode
    }

    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;

        }

        newNode.next = this.head;
        current.next = newNode;

        return
    }

    tostring() {
        if (!this.head) {
            return
        }
        let current = this.head;
        let result = '';

        do {
            result += current.data + '--->'
            current = current.next
        } while (current !== this.head)
        return result;
    }

}

const lists = new Circular();
lists.append(10);
lists.append(20);
lists.append(30);
lists.prepend(50);

console.log(lists.tostring());