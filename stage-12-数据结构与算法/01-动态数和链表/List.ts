interface List<E> {
    // 清除所有元素
    clear() : void;

    //元素的数量
    size() : number;

    //是否为空
    isEmpty() : boolean;

    //是否包含某个元素
    contains(element : E) : boolean;

    //添加元素到尾部
    addLast(element : E) : void;

    //获取index位置的元素
    get(index : number) : E;

    //设置index位置的元素
    set(index : number,element : E) : E;

    //在index位置插入一个元素
    add(index : number,element : E) : void;
    
    //删除index位置的元素
    remove(index : number) : E;

    //查看元素的索引
    indexOf(element : E) : number;

    //打印
    toString(): string;
}

export {List}