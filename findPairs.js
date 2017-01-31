// Given array of ints, find pairs that add to a given value
// Solution O(n) time, O(n) Space
var array = [3, 4, 7, 1, 5];
var target = 11;

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

findPairs(array, target);

/*
    {
        5: 3,
        4: 4,
        1: 7
    
    }
    
    
    {
        7: 1,
        5: 3
    }
*/