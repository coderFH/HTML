abstract class UnionFind {
    protected parents : Array<number>;

    constructor(capacity : number) {
        if (capacity < 0) {
            throw Error("capacity must be >= 1");
        }

        this.parents = new Array<number>(capacity);
        for (let i = 0; i < this.parents.length; i++) {
            this.parents[i] = i;
        }
    }

    // 查找v所属的集合(根节点)
    abstract find(v : number) : number;

    // 合并v1,v2所在的集合
    abstract union(v1 : number,v2 : number) : void;

    // 检查v1,v2是否属于同一个集合
    isSame(v1 : number , v2 : number) : boolean {
        return this.find(v1) === this.find(v2);
    }

    protected rangeCheck(v : number) : void {
        if(v < 0 || v >= this.parents.length) {
            throw new Error("v is out of bounds");
        }
    }
}

export {UnionFind}