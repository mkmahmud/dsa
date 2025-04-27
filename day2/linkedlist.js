// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }


// }


// const head = new Node(10);
// const node2 = new Node(20);
// head.next = node2;
// const node3 = new Node(30);
// node2.next = node3;
// const node4 = new Node(40);
// node3.next = node4;

// // console.log(JSON.stringify(node1, null, 2)); // Print the linked list structure

// let current = head; // head points to the first node

// while(current){
//     console.log(current.data); // Print the value of the current node
//     console.log(current.next); // Print the next node
//     current = current.next; // Move to the next node
// }


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }


}

// class SinglyLinkedList {
//     constructor(data) {
//         this.head = data;
//     }
//     // Append
//     append(data) {
//         const newNode = new Node(data);

//         // Check if the list is empty
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         // Traverse to the end of the list
//         let current = this.head;

//         while (current.next) {
//             current = current.next;
//         }

//         // Append the new node at the end
//         current.next = newNode;
//     }

//     // Prepend 
//     // * Time O1 space O1

//     prepend(data) {
//         const newNode = new Node(data)

//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }

//         newNode.next = this.head;
//         this.head = newNode;


//     }

//     // ToString
//     tostring() {
//         let current = this.head;
//         let result = '';
//         while (current) {
//             const arrow = current.next ? '->' : '';
//             result += current.data + arrow;
//             current = current.next;
//         } 
//         return result;
//     }
// }

// const list = new SinglyLinkedList();
// list.prepend(20);
// list.prepend(30);
// list.append(40);
// list.append(50);
// list.prepend(60);
// list.append(70);

// console.log(list.tostring());


class SinglyLinkedList1 {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        const newNode = new Node(data);
        this.size++;

        if(!this.head){
            this.head = newNode;
            return;
        }   

        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(data){
        const newNode = new  Node(data);
        this.size++;
        if(!this.head){
            this.head = newNode;
            return;

        }

        newNode.next = this.head;
        this.head = newNode;

    }

    // To string 
    toString(){
        let current = this.head;
        let result = '';

        while(current){
            const arrow = current.next ? '->' : '';

            result +=  current.data + arrow;    
            current = current.next;
        }

        return result;
    }

    // Insert at index
    insert(index,value){
        const newNode = new Node(value);
        this.size++;

        let current = this.head;
        let previous = null;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;
        
    }
}


const list1 = new SinglyLinkedList1();
list1.prepend(20);  
list1.prepend(30);
list1.prepend(40);
list1.append(50);
list1.prepend(70);
list1.append(60);
list1.insert(2, 100);

console.log(list1.toString());