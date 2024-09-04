// Formal Proof
// Initialization: The initial range [start, end] encompasses the entire array.

// Maintenance: Each iteration updates the range to reflect the presence of the 
// target if it is included. The updated range consistently contains the target 
// if the target is present in the array.

// Termination: The algorithm terminates with start > end. If the target is present
// in the range [start, end], it would have been found and returned. If not present, -1 is returned.

// These ideas are from loop invariant.
function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // Find the middle index
        let mid = Math.floor((start + end) / 2);

        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid;  // Target found, return index
        }

        // If target is smaller, search the left half
        if (arr[mid] > target) {
            end = mid - 1;
        }
        // If target is larger, search the right half
        else {
            start = mid + 1;
        }
    }

    // If the target is not found
    return -1;
}

// Example usage
let sortedArray = [40];
let target = 40;
let result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}

