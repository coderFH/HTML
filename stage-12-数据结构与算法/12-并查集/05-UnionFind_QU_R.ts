import { UnionFind_QU } from './03-UnionFind_QU';

/**
 * Quick Union - 基于rank的优化 
 */
class UnionFind_QU_R extends UnionFind_QU {
    private ranks : Array<number>;

    constructor(capacity : number) {
        super(capacity);
        this.ranks = new Array<number>(capacity);
        for (let i = 0; i < this.ranks.length; i++) {
            this.ranks[i] = 1;            
        }
    }

    union(v1: number, v2: number): void {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        if (p1 === p2) return;

        if (this.ranks[p1] < this.ranks[p2]) {
            this.parents[p1] = p2;
        } else if(this.ranks[p1] > this.ranks[p2]) {
            this.parents[p2] = p1;
        } else {
            this.parents[p1] = p2;
            this.ranks[p2] += 1;
        }
    } 
}

export {UnionFind_QU_R}