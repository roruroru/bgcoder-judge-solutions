const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// ----------------------

const generatePermutations = (n, index, used, currentPerm) => {
    if (index === n) {
        print(currentPerm.join(' '));
        // allPerm.push([...currentPerm]);
        return;
    }

    for (let i = 1; i <= n; i += 1) {
        if (used[i] === true) {
            continue;
        }

        currentPerm[index] = i;
        used[i] = true;
        generatePermutations(n, index + 1, used, currentPerm);
        used[i] = false;
    }
};

const n = +gets();
// const result = [];

generatePermutations(n, 0, {}, []);
// result.forEach((permutation) => print(permutation.join(' ')));