const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '@*@*@*xxx',
    '1 -1 1 -1 2 1 1 1 1 1 1',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const positions = gets().split('');
const path = gets().split(' ').map(Number);
let currentPosition = 0;
let souls = 0;
let food = 0;
let jumps = 0;
let dreadLocks = 0;
let locked = false;

if (positions[currentPosition] === '@') {
    souls += 1;
    positions[currentPosition] = '0';
} else if (positions[currentPosition] === '*') {
    food += 1;
    positions[currentPosition] = '0';
} else if (positions[currentPosition] === 'x') {
    dreadLocks += 1;
    if (currentPosition % 2 === 1) {
        if (food > 0) {
            food -= 1;
        } else {
            locked = true;
            print(`You are deadlocked, you greedy kitty!`);
            print(`Jumps before deadlock: ${jumps}`);
        }
    } else {
        if (souls > 0) {
            souls -= 1;
        } else {
            locked = true;
            print(`You are deadlocked, you greedy kitty!`);
            print(`Jumps before deadlock: ${jumps}`);
        }
    }
} else {
    // nothing updated
}

for (const move of path) {
    currentPosition += move;
    jumps += 1;
    if (move > 0) {
        if (currentPosition >= positions.length) {
            currentPosition %= positions.length;
        }
    } else {
        if (currentPosition < 0) {
            currentPosition = positions.length - Math.abs(currentPosition) % positions.length;
        }
    }

    if (positions[currentPosition] === '@') {
        souls += 1;
        positions[currentPosition] = '0';
    } else if (positions[currentPosition] === '*') {
        food += 1;
        positions[currentPosition] = '0';
    } else if (positions[currentPosition] === 'x') {
        dreadLocks += 1;
        if (currentPosition % 2 === 1) {
            if (food > 0) {
                food -= 1;
            } else {
                locked = true;
                print(`You are deadlocked, you greedy kitty!`);
                print(`Jumps before deadlock: ${jumps}`);
            }
        } else {
            if (souls > 0) {
                souls -= 1;
            } else {
                locked = true;
                print(`You are deadlocked, you greedy kitty!`);
                print(`Jumps before deadlock: ${jumps}`);
            }
        }
    } else {
        // nothing updated
    }
}

if (locked === false) {
    print(`Coder souls collected: ${souls}`);
    print(`Food collected: ${food}`);
    print(`Deadlocks: ${dreadLocks}`);
}
