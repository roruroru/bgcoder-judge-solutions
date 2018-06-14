function permut(array) {
    if (array.length < 2) console.log(array); // This is our break condition

    let permutations = []; // This array will hold our permutations

    for (let i = 0; i < array.length; i += 1) {
        let char = array[i];

        // Cause we don't want any duplicates:
        if (array.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        let remainingarray = array.slice(0, i) + array.slice(i + 1, array.length); //Note: you can concat arrays via '+' in JS

        for (let subPermutation of remainingarray) {
            permutations.push(char + subPermutation);
        }
    }
  console.log(permutations);
}

permut([1,2,3]);