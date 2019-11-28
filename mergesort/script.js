function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2) {
    // check first value of each array take and smaller, move to next
    var pos1 = 0;
    var pos2 = 0;
    var newArr = [];
    while (pos1 < arr1.length && pos2 < arr2.length) {
        if (arr2[pos2] < arr1[pos1]) {
            newArr.push(arr2[pos2])
            pos2++
        } else {
            newArr.push(arr1[pos1])
            pos1++
        }
    }
    while (pos1 < arr1.length) {
        newArr.push(arr1[pos1])
        pos1++
    }
    while (pos2 < arr2.length) {
        newArr.push(arr2[pos2])
        pos2++
    }
    return newArr;
}

console.log(merge([4, 6], [5, 9]));
document.write("<div><p>Merge Sorting: " + "</p>");
document.write("<p>Output: " + mergeSort([42, 24, 55, 96, 432, 45, 55, 33, 22, 11, 55, 66]) + "</p></div>");
