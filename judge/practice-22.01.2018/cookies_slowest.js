gets();
const cookies = gets().split(' ').map(Number);

let result = 0;
let indexesToRemove;
do {
    indexesToRemove = [];
    for (let i = 0; i < cookies.length - 1; i++) {
        if (cookies[i + 1] > cookies[i]) {
            indexesToRemove.push(i + 1);
        }
    }

    if (indexesToRemove.length > 0) {
        result++;
        let counter = 0;
        indexesToRemove.forEach((indexToRemove) => {
            cookies.splice(indexToRemove - counter, 1);
            counter++;
        })
    }
} while (indexesToRemove.length > 0)

print(result);