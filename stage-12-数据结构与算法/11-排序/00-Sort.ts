abstract class Sort {
    array : Array<number>;
    sort(array : Array<number>) : void {
        if (array === null || array.length < 2) return;
        this.array = array;
        this.sortArray();
    }

    protected abstract sortArray() : void;

    /*
        返回值等于0，代表 array[i1] == array[i2]
	    返回值小于0，代表 array[i1] < array[i2]
	    返回值大于0，代表 array[i1] > array[i2]
    */
    protected cmp(i1 : number,i2 : number) : number {
        return this.array[i1] - this.array[i2];
    }

    protected swap(i1 : number,i2 : number) : void {
        let tmp = this.array[i1];
        this.array[i1] = this.array[i2];
        this.array[i2] = tmp;
    }
}

export {Sort}