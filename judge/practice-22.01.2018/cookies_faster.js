class Node {
    constructor(value, previous) {
        this.value = value;
        this.previous = previous;
        this.next = null;

        if (previous) {
            previous.next = this;
        }
    }
}

const getDays = (cookies) => {
    let first = new Node(cookies[0], null);
    let previous = first;
    for (let i = 1; i < cookies.length; i++) {
        const newNode = new Node(cookies[i], previous);
        previous = newNode;
    }

    let result = 0;
    let nodesToRemove;
    do {
        nodesToRemove = [];
        let current = first;
        while (current.next) {
            if (current.value < current.next.value) {
                nodesToRemove.push(current.next);
            }

            current = current.next;
        }

        if (nodesToRemove.length > 0) {
            result++;
            nodesToRemove.forEach(node => {
                if (node.previous === null) {
                    first = node.next;
                }

                if (node.previous) {
                    node.previous.next = node.next;
                }

                if (node.next) {
                    node.next.previous = node.previous;
                }
            })
        }
    } while (nodesToRemove.length > 0)

    return result;
}

gets();
const cookies = gets().split(' ').map(Number);
const result = getDays(cookies);
print(result);