import {AbstractHeap} from './AbstractHeap'
import {Comparator} from '../04-树/Comparator'

class BinaryHeap<E> extends AbstractHeap<E>  {
    private elements : Array<E>;
    private static DEFAULT_CAPACITY = 10;

    constructor(compartor : Comparator<E>, elements? : Array<E>) {
        super(compartor);
        if (!elements || elements.length === 0) {
            this.elements = new Array<E>(BinaryHeap.DEFAULT_CAPACITY);
        } else {
            this.count = elements.length;
            let capacity = Math.max(elements.length,BinaryHeap.DEFAULT_CAPACITY);
            this.elements = new Array(capacity);
            for (let i = 0; i < elements.length; i++) {
                this.elements[i] = elements[i];
            }
        }
        this.heapify();
    }
    
    clear(): void { 
        for (let i = 0; i < this.count; i++) {
            this.elements[i] = null;
        }
        this.count = 0;
    }

    add(element: E): void {
        this.elementNotNullCheck(element);
        this.ensureCapacity(this.count + 1);
        this.elements[this.count++] = element;
        this.siftUp(this.count - 1);
    }

    get(): E {
       this.emptyCheck();
       return this.elements[0];
    }

    remove(): E {
        this.emptyCheck();
        let lastIndex = --this.count;
        let root = this.elements[0];
        this.elements[0] = this.elements[lastIndex];
        this.elements[lastIndex] = null;
        this.siftDown(0);
        return root;
    }

    replace(element: E): E {
        this.elementNotNullCheck(element);
        let root = null;
        if (this.count === 0) {
            this.elements[0] = element;
            this.count++;
        } else {
            root = this.elements[0];
            this.elements[0] = element;
            this.siftDown(0);
        }
        return root;
    }

    // Tag: 批量建堆
    private heapify() : void {
        //自上而下的上滤 (效率不如自下而上的下滤)   
        // for (let i = 0; i < this.count; i++) {
        //     this.siftUp(i);
        // }

        // 自下而上的下滤
        // 从非叶子节点开始一个一个往上走
        // 完全二叉树的性质,非叶子的节点的个数floor(n/2),因为程序默认就是向下取整,所以不用写floor,
        // -1 是因为数组是从0开始的
        for (let i = (this.count >> 1) - 1; i >= 0; i--) {
            this.siftDown(i);
        }
    }

    // Tag: 让index位置的元素上溢
    private siftUp(index : number) : void {
        let element = this.elements[index];
        while(index > 0) {
            let parentIndex = Math.floor((index - 1) / 2); //拿到父节点的index
        
            let parent = this.elements[parentIndex];
            if (this.compare(element,parent) <= 0) break ; //说明值比父节点小,不用做任何操作

            // 将父元素存储在index的位置上
            this.elements[index] = parent;

            //重新赋值index
            index = parentIndex;
        }
        this.elements[index] = element;
    }

    // Tag: 让index位置的元素下溢
    private siftDown(index : number) : void {
        let element = this.elements[index];
        let half = Math.floor(this.count / 2); //非叶子节点的个数
              
        // 第一个叶子节点的索引 == 非叶子节点的数量
        // index < 第一个叶子节点的索引
        // 必须保证index位置是非叶子节点
        while(index < half) {
            //index的节点有2中情况
            //1.只有左子节点
            //2.同时有左右子节点

            //默认左节点跟它进行比较
            let childIndex = (index * 2) + 1;
            let child = this.elements[childIndex];

            // 右子节点
            let rightIndex = childIndex + 1;

            // 选出左右节点哪个大
            if (rightIndex < this.count && this.compare(this.elements[rightIndex],child) > 0) {
                child = this.elements[childIndex = rightIndex];
            }

            if (this.compare(element,child) >= 0) break;

            // 将子节点存放到index位置
			this.elements[index] = child;
			// 重新设置index
			index = childIndex;
        }
        this.elements[index] = element;
    }

    private ensureCapacity(capacity : number) : void {
        let oldCapacity = this.elements.length;
        if (oldCapacity >= capacity) return;

        // 新容量为旧容量的1.5倍
        let newCapacity = oldCapacity + (oldCapacity >> 1);
        let newElements = new Array(newCapacity);
        for (let i = 0; i < this.count; i++) {
            newElements[i] = this.elements[i];
        }
        this.elements = newElements;
    }

    private emptyCheck() : void {
        if (this.count === 0) {
            throw new Error("Heap is empty");
        }
    }

    private elementNotNullCheck(element : E) : void {
        if (element === null) {
            throw new Error("element must not be null");
        }
    }
}

export {BinaryHeap}