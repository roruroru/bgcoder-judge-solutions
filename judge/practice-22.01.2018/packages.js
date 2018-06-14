const getDependencies = (package, graph, visited, dependencies) => {
    visited.add(package);
    dependencies.push(package);

    const parents = graph.get(package);
    if (parents) {
        parents.forEach(parent => {
            if (!visited.has(parent)) {
                getDependencies(parent, graph, visited, dependencies);
            }
        });
    }
}

const m = +gets();
const graph = new Map();
for (let i = 0; i < m; i++) {
    const [child, parent] = gets().split(' ').map(Number);
    if (!graph.get(child)) {
        graph.set(child, []);
    }

    graph.get(child).push(parent);
}

const k = +gets();
for (let i = 0; i < k; i++) {
    const package = +gets();
    const visited = new Set();
    const dependencies = [];
    getDependencies(package, graph, visited, dependencies);
    print(dependencies.sort((a, b) => a - b).join(' '));
}