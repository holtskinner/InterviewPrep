// Function that checks if string1 contains all characters of string2
// If string2 is subset of string1
// O(n) time, O(n) space
function isSubset(string1, string2) {

    // Error check for null & empty string
    if (!string1 || !string2) {
        return false;
    }

    // Construct an unordered Set (HashSet) of potential subset
    var set = new Set(string2);

    // For each item in the potential superset,
    // if the current char is in the set, remove it
    for (var i = 0; i < string1.length && set.size > 0; i++) {
        if (set.has(string1[i])) {
            set.delete(string1[i]);
        }
    }

    // If the set is ever empty, all of the characters in string2 must be in string1
    return set.size == 0;

}

var solution = isSubset("carpet", "car");

console.log(solution);