const Arr = [90, 32, 1, 50, 4, 6, 22, 12, 56, 100];
const arr2 = [1, 87, 2, 56, 44, 32]

function sortedArray(myArr) {
    let operationsCount = 0;
    for (let i = 0; i < myArr.length; i++) {
        for (let j = 0; j < myArr.length - 1; j++) { 
            if (myArr[j] > myArr[j + 1]) { 
                [myArr[j], myArr[j + 1]] = [myArr[j + 1], myArr[j]]
            }
        }
    } 
    return myArr;
}


// [90, 32, 1, 50];
// 32 ,1, 90, 50
// 32 ,1, 50, 90

// 32, 1, 50, 90
// 1, 32,  


function sortedArray1(arr) {
    for (let i = 0; i < arr.length - i; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            let temp = arr[j];
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }

    }

    return arr;
}



function sortedArray2(arr) {
    let operationsCount = 0;  // Initialize a counter for the number of operations

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            operationsCount++;  // Counting the comparison operation

            if (arr[j] > arr[j + 1]) {
                operationsCount++;  // Counting the swap operation (2 assignments in a swap)
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log(`Total operations: ${operationsCount}`);  // Output the total operations
    return arr;
}



console.log(sortedArray2(arr2));