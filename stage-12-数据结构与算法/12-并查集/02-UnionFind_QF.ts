import {UnionFind} from './01-UnionFind'

/**
 * Quick Find
 */
class UnionFind_QF extends UnionFind {
    constructor(capacity : number) {
        super(capacity);
    }

    find(v: number): number {
        this.rangeCheck(v);
        return this.parents[v];
    }

    union(v1: number, v2: number): void {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        if (p1 === p2) return;
        for (let i = 0; i < this.parents.length; i++) {
            if (this.parents[i] === p1) {
                this.parents[i] = p2;
            }
        }
    } 
}

export {UnionFind_QF}


