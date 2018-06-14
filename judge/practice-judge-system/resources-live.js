/* globals Map, Set */

const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '1',
    '5',
    '3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Graph {
    constructor() {
        this._nodes = new Map();
    }

    addEdge(from, to) {
        if (!this._nodes.has(from)) {
            this._nodes.set(from, []);
        }

        this._nodes.get(from).push(to);
    }

    getSortedGraph() {
        const path = [];

        while (true) {
            const best = this._getBest();
            path.push(best);
            this._remove(best);
        }
    }

    _getBest() {

    }
}
