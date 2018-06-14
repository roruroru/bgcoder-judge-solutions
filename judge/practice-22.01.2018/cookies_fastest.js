class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addLast(value) {
        const node = {
            value,
            next: null,
            prev: null,
        };

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = this.tail.next;
        }

        this.count += 1;

        return this;
    }

    addFirst(value) {
        const node = {
            value,
            next: null,
            prev: null,
        };

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = this.head.prev;
        }

        this.count += 1;

        return this;
    }

    removeFirst() {
        if (this.head === null) {
            return null;
        }
        this.count -= 1;

        const value = this.head.value;
        this.head = this.head.next;

        if (this.head === null) {
            this.head = null;
            this.tail = null;
            return value;
        }

        this.head.prev = null;

        return value;
    }

    removeLast() {
        if (this.tail === null) {
            return null;
        }

        this.count -= 1;

        const value = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail === null) {
            this.head = null;
            this.tail = null;
            return value;
        }

        this.tail.next = null;
        return value;
    }

    appendList(list) {
        if (this.tail) {
            this.tail.next = list.head;            
        } else {
            this.head = list.head;
        }

        this.tail = list.tail;
        this.count += list.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}

const getDays = cookies => {
    const list = new LinkedList();
    list.addLast(cookies[0]);
    let arrayOfLinkedLists = [list];
    for (let i = 1; i < cookies.length; i++) {
        if (cookies[i - 1] >= cookies[i]) {
            arrayOfLinkedLists[arrayOfLinkedLists.length - 1].addLast(cookies[i]);
        } else {
            const newList = new LinkedList();
            newList.addLast(cookies[i]);
            arrayOfLinkedLists.push(newList);
        }
    }

    let result = 0;
    while (arrayOfLinkedLists.length > 1) {
        result++;
        const newArray = [arrayOfLinkedLists[0]];
        for (let i = 1; i < arrayOfLinkedLists.length; i++) {
            const linkedList = arrayOfLinkedLists[i];
            linkedList.removeFirst();
        }

        for (let i = 1; i < arrayOfLinkedLists.length; i++) {
            const left = newArray[newArray.length - 1];
            const right = arrayOfLinkedLists[i];
            
            if (!left.isEmpty() && !right.isEmpty()) {
                if (left.tail.value >= right.head.value) {
                    left.appendList(right);
                } else {
                    newArray.push(right);
                }
            }
        }

        arrayOfLinkedLists = newArray;
    }

    return result;
}

gets();
const cookies = gets().split(' ').map(Number);
print(getDays(cookies));