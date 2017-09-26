// Given array of ints, find pairs that add to a given value
// Solution O(n) time, O(n) Space

function findPairs(array, target) {

    if (!array || !target) {
        return;
    }

    var hashTable = {};
    var output = {};

    for (var i = 0; i < array.length; i++) {
         
        if (!hashTable[array[i]]) {
            hashTable[target - array[i]] = array[i];
        } else {
            output[target - array[i]] = array[i];
        }

    }

    return output;
}

var array = [];
var target = Math.ceil(Math.random() * 100);

for (var i = 0; i < 100; i++) {
    array[i] = Math.ceil(Math.random() * 100);
}
console.log(array);
console.log("Target = " + target);
console.log(findPairs(array, target));