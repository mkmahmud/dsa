const maxSize = 10;
const stack = new Array(maxSize)

let top = -1;

function push(value) {
    if (top >= maxSize - 1) {
        return "Stack Overflowed"
    }

    stack[++top] = value;
}

function pop(value) {
    if (top < 0) {
        return 'Stack Underflow'
    }
    stack[top--]
}

function peak() {
    if (top < 0) {
        return 'Stack Underflow'
    }

    return stack[top]
}

push(1);
push(2);
push(3); 
pop()

console.log(peak());
console.log(stack);