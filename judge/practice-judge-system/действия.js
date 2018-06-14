const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '5 5',
    '0 3',
    '2 1',
    '1 4',
    '1 3',
    '4 3',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
const nodesEdges = Array.from({
    length: n,
}, () => {
    return {
        incomingEdges: 0,
        outgoingEdges: [],
        visited: false,
    };
});
// .fill({
//     incomingEdges: 0,
//     outgoingEdges: [],
// });

// console.log(nodesEdges);

for (let i = 0; i < m; i += 1) {
    const [from, to] = gets().split(' ').map(Number);
    // console.log(from, to);
    nodesEdges[from].outgoingEdges.push(to);
    nodesEdges[to].incomingEdges += 1;
}

// console.log(nodesEdges);

const result = [];
while (result.length < nodesEdges.length) {
    for (let i = 0; i < n; i += 1) {
        if (nodesEdges[i].incomingEdges === 0 && nodesEdges[i].visited === false) {
            result.push(i);
            nodesEdges[i].visited = true;
            const edgesToBeDeleted = nodesEdges[i].outgoingEdges;
            // console.log(edgesToBeDeleted);
            for (const edge of edgesToBeDeleted) {
                nodesEdges[edge].incomingEdges -= 1;
            }
            // for (let j = 0; j < edgesToBeDeleted.length; j += 1) {
            //     nodesEdges[edgesToBeDeleted][j].incomingEdges -= 1;
            // }
            break;
        }
    }
    // console.log(nodesEdges);
}
print(result.join('\n'));
// quit(0);