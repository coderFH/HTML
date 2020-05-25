import {UnionFind} from './01-UnionFind'

/**
 * Quick Union
 */
class UnionFind_QU extends UnionFind {
    constructor(capacity : number) {
        super(capacity);
    }

    find(v: number): number {
        this.rangeCheck(v);
        while(v != this.parents[v]){
            v = this.parents[v];
        } 
        return v; 
    }

    // 将v1的根节点嫁接到v2的根节点上
    union(v1: number, v2: number): void {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        if (p1 === p2) return;
        this.parents[p1] = p2;
    } 
}

export {UnionFind_QU}

