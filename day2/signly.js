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
        this.size = 0;
    }

    prepend(data) {
        const newNode = new Node(data);
        this.size++;
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
        this.size++;

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

    delete() {
        const current = this.head;
        this.head = current.next;
        this.size--;

    }

    deleteLastNode() {
        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next
        }

        prev.next = null;
        this.size--;
        return;
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

    // Search ELement
    search(data) {
        let current = this.head;

        while (current.next) {
            if (data === current.data) {
                return true
            }


            current = current.next
        }

        return false;
    }

    findMiddleElement() {

        // const middle = Math.round( this.size/2)
        // let count = 0;
        // let current = this.head;

        // while(count < middle-1){
        //     current = current.next;
        //     count++;
        // } 

        // return  current.data;

        const middle = this.size === 0 ? this.size / 2 : Math.floor(this.size / 2);
        let count = 0;
        let current = this.head;
        while (current != null & count < middle) {
            count++;
            current = current.next;
        }

        return current ? current.data : null;

    }

    // Delete by value
    deleteByValue(data){
        let current = this.head;
        let prev = null; 
        let next  = null;

        while(current.next){
             if(current.data == data){
                prev = current.prev;
                next = current.next;
                 
            }

            current = current.next;

        }
        current.next= next;
        return;
        
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

lists.append(10);
lists.append(20);
lists.append(30);
lists.append(40); 

// console.log(lists.search(4));
// console.log(lists.findMiddleElement());
lists.deleteByValue(30)
console.log(lists.tostring()); 

