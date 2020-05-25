import { UnionFind_QU } from './03-UnionFind_QU';

/**
 * Quick Union - 基于size的优化 
 */
class UnionFind_QU_S extends UnionFind_QU {
    private sizes : Array<number>;

    constructor(capacity : number) {
        super(capacity);
        this.sizes = new Array<number>(capacity);
        for (let i = 0; i < this.sizes.length; i++) {
            this.sizes[i] = 1;            
        }
    }
    
    union(v1: number, v2: number): void {
        let p1 = this.find(v1);
        let p2 = this.find(v2);
        if (p1 === p2) return;
        if (this.sizes[p1] < this.sizes[p2]) {
            this.parents[p1] = p2;
            this.sizes[p2] += this.sizes[p1];
        } else {
            this.parents[p2] = p1;
            this.sizes[p1] += this.sizes[p2];
        }
    } 
}

export {UnionFind_QU_S}