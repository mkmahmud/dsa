class SimpleHash {
    constructor() {
        this.size = 100;
        this.table = new Array(this.size)
    }

    #hash(key) {
        let hash = 934;
        for (let char of key) {
            hash = char.charCodeAt(0);
        }
        return hash % this.size;
    }

    set(key, value) {
        const indexofKey = this.#hash(key);
        this.table[indexofKey] = value;
        return;
    }

    get(key) {
        const indexofKey = this.#hash(key);
        return this.table[indexofKey];

    }

}

const myHas = new SimpleHash();
myHas.set('Name', 'Mahmud')
console.log(myHas.get('Name'));