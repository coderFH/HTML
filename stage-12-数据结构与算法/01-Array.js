class ArrayList {
    constructor(capaticy) {
        const DEFAULT_CAPACITY = 10;
        this.size = 0;
        capaticy = (capaticy < DEFAULT_CAPACITY) ? DEFAULT_CAPACITY : capaticy;
        this.element = new Array(capaticy);
    }

    /*
    * 清除所有元素
    * */
    clear() {
        for (let i = 0;i < this.element.length; i++) {
           this.element[i] = null;
        }
        this.size = 0;
    }

    /*
    * 元素的数量
    * */
    arraySize() {
        return this.size;
    }

    /*
    * 是否为空
    * */
    isEmpty() {
        return this.size !== 0;
    }

    /*
    * 是否包含某个元素
    * */
    contains(element) {
        for (let i = 0; i < this.size; i++) {
            if (this.element[i] === element) {
                return true;
            }
        }
        return false;
    }

    /*
    * 添加元素到尾部
    * */
    push(element) {
        this.add(this.size,element);
    }

    /*
    * 获取index位置的元素
    * */
    get(index) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index);
        }
        return this.element[index];
    }

    /*
    * 设置index位置的元素
    * */
    set(index,element) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index);
        }
        this.element[index] = element;
    }

    /*
    * 在index位置插入一个元素
    * */
    add(index,element) {
        if (index < 0 || index > this.size) {
            this.outOfBounds(index);
        }
        for (let i = this.size; i > index; i--) {
            this.element[i] = this.element[i-1];
        }
        this.element[index] = element;
        this.size += 1;
    }

    outOfBounds(index) {
        throw 'index:' + index + ',Size:' + this.size;
    }

    /*
    * 删除index位置的元素
    * */
    remove(index) {
        if (index < 0 || index >= this.size) {
            this.outOfBounds(index);
        }
        for (let i = index;i < this.size;i++) {
            this.element[i] = this.element[i+1];
        }
        this.size -= 1;
    }

    /*
    * 查看元素的索引
    * */
    indexoOf(element) {
        for (let i = 0;i < this.size; i++) {
            if (element === this.element[i]) {
                return i;
            }
        }
        return  -1;
    }

    /*
    * 保证要有capacity的容量
    * */
    ensureCapacity(capacity) {

    }

    /*
    * 打印方法
    * */
    toString() {
        debugger
        let resultString = "size= " + this.size + ',[';
        for (let i = 0; i < this.size; i++) {
            if (i !== 0) {
                resultString =  resultString + ',';
            }
            resultString = resultString + this.element[i];
        }
        resultString = resultString + ']';
        return resultString;
    }
}

try {
    const array = new ArrayList(20);
    array.push("a");
    array.push("b");
    array.push("c");
    array.add(1,20);
    // array.add(5,20);
    console.log(array.toString());
    console.log(array.arraySize());
    console.log('isEmpty',array.isEmpty());
    console.log('contains 10',array.contains(10));
    console.log('contains 50',array.contains(50));
    console.log(array.get(0));
    console.log(array.get(3));
    // console.log(array.get(10));
    array.set(0,1);
    array.remove(0);
    console.log(array.toString());
    console.log(array.indexoOf(20));

    // array.clear();
    // console.log(array.toString());
    // console.log(array.arraySize());
    // console.log(array.isEmpty());
} catch (e) {
    console.log(e);
}
