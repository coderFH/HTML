class FHStack<E> {
    private list : Array<E>;

    constructor() {
        this.list = new Array<E>();
    }

    size() : number {
        return this.list.length;
    }

    isEmpty() : boolean {
        return this.list.length === 0;
    }

    push(element : E) : void {
        this.list.push(element);
    }

    pop() : E {
        return this.list.pop();
    }

    top() : E {
        return this.list[this.list.length -1];
    }

    clear() : void {
        this.list.length = 0;
    }
}

let stack = new FHStack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.top());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack);
stack.clear();
console.log(stack.isEmpty());
console.log(stack);

export {FHStack}