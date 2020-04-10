import {List} from "./List"

abstract class AbstractList<E> implements List<E> {
    static ELEMENT_NOT_FOUND : number = -1;

    // 元素的数量
    protected count : number = 0;

    size(): number {
        return this.count;
    }

    isEmpty(): boolean {
        return this.count == 0;
    }

    contains(element: E): boolean {
        return this.indexOf(element) != AbstractList.ELEMENT_NOT_FOUND;
    }

    addLast(element: E): void {
        this.add(this.count,element);
    }
    

    protected rangeCheck(index : number) : void {
        if (index < 0 || index >= this.count) {
            this.outOfBounds(index);
        }
    }

    protected rangeCheckForAdd(index : number) :void {
        if (index < 0 || index > this.count) {
            this.outOfBounds(index);
        }
    }

    protected outOfBounds(index : number) : void {
        throw new Error(`Index:${index},Size:${this.count}`);
    }

    protected isObjectValueEqual(a : Object, b : Object) : boolean {
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);
         if (aProps.length != bProps.length) {
              return false;
         }
         for (var i = 0; i < aProps.length; i++) {
            var propName = aProps[i]
            var propA = a[propName]
            var propB = b[propName]
            if ((typeof (propA) === 'object')) {
                if (this.isObjectValueEqual(propA, propB)) {
                    return true
                } else {
                    return false
                }
            } else if (propA !== propB) {
                return false
            } else {}
        }
       return true
    }

    abstract clear(): void;
    abstract add(index: number, element: E) : void;
    abstract get(index: number): E ;
    abstract set(index: number, element: E): E;
    abstract remove(index: number) : E;
    abstract indexOf(element: E): number;
    abstract toString(): string;
}

export {AbstractList}