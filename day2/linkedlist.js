class linkedList {

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    
    add(value) {
        const newNode = { value, next: null };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

    }
}

const ll = new linkedList();
ll.add(1);


console.log(
    [10, 20, 30, 40, 50]);
 