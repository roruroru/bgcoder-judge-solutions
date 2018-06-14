const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    // '3',
    // '4 2',
    // '3 1',
    // '5 7',
    // '6',
    // '1',
    // '2',
    // '3',
    // '4',
    // '5',
    // '7',
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

// -----------------------------------------

/* globals Set Map */

const m = +gets();
const map = new Map();

for (let i = 0; i < m; i += 1) {
    const dependency = gets().split(' ').map(Number);
    if (map.has(dependency[0])) {
        const value = map.get(dependency[0]);
        value.add(dependency[1]);
        map.delete(dependency[0]);
        map.set(dependency[0], value);
    } else {
        const value = new Set();
        value.add(dependency[1]);
        map.set(dependency[0], value);
    }
}

// console.log(map);

const k = +gets();

for (let i = 0; i < k; i += 1) {
    const packageToBeInstalled = +gets();
    // console.log(packageToBeInstalled);
    if (!map.has(packageToBeInstalled)) {
        print(packageToBeInstalled);
    } else {
        const result = new Set();
        result.add(packageToBeInstalled);
        for (const setItem of map.get(packageToBeInstalled)) {
            result.add(setItem);
            if (map.has(setItem)) {
                for (const itemOfSetItem of map.get(setItem)) {
                    result.add(itemOfSetItem);
                    if (map.has(itemOfSetItem)) {
                        for (const i1 of map.get(itemOfSetItem)) {
                            result.add(i1);
                            if (map.has(i1)) {
                                for (const i2 of i1) {
                                    result.add(i2);
                                }
                            }
                        }
                    }
                }
            }
        }
        print(Array.from(result).sort((x, y) => x - y).join(' '));
    }
}

// quit(0);
