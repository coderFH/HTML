interface Heap<E> {
    size() : number;	        // 元素的数量
    isEmpty() : boolean;        // 是否为空
    clear() : void;             // 清空
    add(element : E) : void;    // 添加元素
    get() : E;                  // 获得堆顶元素
    remove() : E;               // 删除堆顶元素
    replace(element : E) : E;   // 删除堆顶元素的同时插入一个新元素
}

export {Heap}