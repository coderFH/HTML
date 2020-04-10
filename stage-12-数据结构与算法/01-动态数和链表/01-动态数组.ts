import {AbstractList} from "./AbstractList"

class ArrayList<E> extends AbstractList<E> {
    private elements : Array<E>;
    private static DEFAULT_CAPACITY = 10;

    constructor(capaticy : number) {
        super();
        capaticy = (capaticy < ArrayList.DEFAULT_CAPACITY) ? ArrayList.DEFAULT_CAPACITY : capaticy;
        this.elements = new Array<E>(capaticy);
    }

    //增
    add(index: number, element: E): void {
        this.rangeCheckForAdd(index);

        this.ensureCapacity(this.count+1);

        for(let i = this.count; i > index; i--) {
            this.elements[i] = this.elements[i - 1];
        }
        this.elements[index] = element;
        this.count += 1;
    }
    
    //删
    clear(): void {
        for(let i = 0; i < this.count; i++) {
            this.elements[i] = null;
        }
        this.count = 0;
    }

    remove(index: number): E {
        this.rangeCheck(index);
        let element = this.elements[index];
        for(let i = index + 1; i < this.count; i++) {
           this.elements[i-1] = this.elements[i];
        }
        this.elements[--this.count] = null;
        this.trim();
        return element;
    }

    //改
    set(index: number, element: E): E {
        this.rangeCheck(index);
        let oldElement = this.elements[index];
        this.elements[index] = element;
        return oldElement;
    }

    //查
    get(index: number): E {
        this.rangeCheck(index);
        return this.elements[index];
    }
    
    indexOf(element: E): number {
        if (element instanceof Object) {
            for(let i = 0; i < this.count;i++) {
                if (this.isObjectValueEqual(element,this.elements[i])) return i;
            }
        } else {
            for(let i = 0; i < this.count;i++) {
                if (element === this.elements[i]) return i;
            }
        }
        return AbstractList.ELEMENT_NOT_FOUND;
    }

    //打印方法
    toString() : string {
        let resultString = "size= " + this.count + ',[';
        for (let i = 0; i < this.count; i++) {
            if (i !== 0) {
                resultString =  resultString + ',';
            }
            resultString = resultString + this.elements[i];
        }
        resultString = resultString + ']';
        return resultString;
    }

    //扩容
    private ensureCapacity(capaticy : number) : void {
        let oldCapacity = this.elements.length;
        if(oldCapacity >= capaticy) return;

        //新容量为旧容量的1.5倍
        let newCapacity = oldCapacity + (oldCapacity >> 1);

        let newElements = new Array<E>(newCapacity);

        for (let i = 0; i < this.count; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
        console.log(`${oldCapacity}扩容为${newCapacity}`);
    }

    //缩容
    private trim() : void {
        let oldCapacity = this.elements.length;
        let newCapacity = oldCapacity >> 1; //缩小一半
        if (this.count > newCapacity || newCapacity <= ArrayList.DEFAULT_CAPACITY) {
            return;
        }
        let newElements = new Array<E>(newCapacity);
        for (let i = 0; i < this.count; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
        console.log(`${oldCapacity}缩容为${newCapacity}`);
    }
}

export {ArrayList}