import { UnionFind_QU_R } from './05-UnionFind_QU_R';

/**
 * Quick Union - 基于rank的优化 - 路径压缩(Path Compression)
 */
class UnionFind_QU_R_PC extends UnionFind_QU_R {
    constructor(capacity : number) {
        super(capacity);
    }

    // 在find时,使路径上的所有节点都指向根节点,从而降低树的高度
    find(v : number) : number {
        this.rangeCheck(v);
        while(v != this.parents[v]) {
           this.parents[v] = this.find(this.parents[v]);
        }
        return this.parents[v];
    } 
}

export {UnionFind_QU_R_PC}