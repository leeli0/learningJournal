// 1. To find all combinations of the set is equal to 
// find all combinations include each item of the set;
// For example set = [a, b, c], then all combinations include a,
// all combinations include b, and all combinations inlcude c together
// are all combinations of the set;

// 2. To find all combinations inlcude the current item is equal to
// find all the combinations of a new set that excludes the current item
// then concatenating them with the current item, and adding the current item itself;
// For example set = [a, b, c], then all combinations include a is
// [a] concatenating with all combinations ([b, c], [b], [c]) of set [b ,c]:
// [a, b, c], [a, b], [a, c] + [a].

// 3. Then to find all combinations of a set, iterating all items of the set,
// finding all combinations of the current item, converting the problem to find all
// combinations of a smaller set which excludes the current item;
// continuing until the set is empty it indicates all combinations for the current item have found,
// the next item can be processed.



function findCombinations(set, partialCombination) {
    for (let i = 0; i < set.length; i++) {
        const newPartialCombination = partialCombination.concat(set[i]);
        findCombinations(set.slice(i + 1), newPartialCombination);
        console.log(newPartialCombination);
    }
}

let set = [1, 2, 3, 4, 5, 6];
let partialCombination = [];
findCombinations(set, partialCombination);

