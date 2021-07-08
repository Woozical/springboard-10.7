// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
// -> A Set object with the following entries: 1, 2, 3, 4

// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
// -> The string 'ref'

// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// -> A map with two key value pairs, [1,2,3] : true and [1,2,3] : false
// Each key is mapped to a different reference

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => !(arr.length === new Set(arr).size)

// vowelCount
// Write a function called vowelCount which accepts a string and returns a
// map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = str => {
    const vMap = new Map(
        [
            ['a', 0],
            ['e', 0],
            ['i', 0],
            ['o', 0],
            ['u', 0]
        ]
    )

    for (let char of str){
        if (vMap.has(char)){
            vMap.set(char, vMap.get(char) + 1);
        }
    }

    return vMap;
}

// With no entries for vowels that don't appear
const vowelCountNoZero = str => {
    const vMap = new Map()
    const vowels = new Set('aeiou');

    for (let char of str){
        if (!vowels.has(char)){
            continue;
        } else {
            if (vMap.has(char)){
                vMap.set(char, vMap.get(char) + 1);
            } else {
                vMap.set(char, 1);
            }
        }
    }

    return vMap;
}