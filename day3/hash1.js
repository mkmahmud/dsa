class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.head = newNode
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
        return;

    }

    find(key) {
        if (!this.head) return null;

        let current = this.head;

        while (current) {
            if (current.key == key) {
                return current.value
            }
            current = current.next
        }
    }

    remove(key) {
        if (!this.head) return null;

        if (this.head.key == key) {
            this.head = null;
        }
        let current = this.head;
        let prev = null
        while (current && current.key == key) {
            prev = current
            current = current.next;
        }

        if (current) {
            prev.next = current.next
        }

        return null;
    }

    *entries() {
        let current = this.head;
        while (current) {
            yield [current.key, current.value];
            current = current.next
        }
    }

}

class HashTable {

    #keys;

    constructor(size = 3) {
        this.table = new Array(size)
        this.size = size;
        this.count = 0;
        this.#keys = new Set()
    }


    set(key, value) {
        if (this.count / this.size >= 0.5) {
            this.#resize(this.size * 2);
        }
        const index = this.#hash(key);

        if (!this.table[index]) {
            this.table[index] = new LinkedList()
        }

        const bucket = this.table[index];
        const existing = bucket.find(key);

        if (!existing) {
            this.count++;
            this.#keys.add(key, value)
        }

        bucket.insert(key, value);
        return;
    }


    #hash(key) {
        let hash = 5432;

        for (let char of key) {
            hash = (hash * 33) ^ char.charCodeAt(0);
        }

        return Math.abs(hash) % this.size;
    }

    #resize(newsize) {
        const oldTable = this.table;
        this.size = newsize;
        this.table = new Array(newsize)
        this.count = 0;

        for (let bucket of oldTable) {
            if (bucket) {
                for (let [key, value] of bucket.entries()) {
                    this.set(key, value)
                }
            }
        }
    }
}

const myHasTable = new HashTable(2);

myHasTable.set('name', 'Mahmud');
myHasTable.set('age', '20');
myHasTable.set('city', 'BD');
myHasTable.set('sta', 'Bar');
myHasTable.set('Edu', 'Nothing');

console.log(myHasTable.table);