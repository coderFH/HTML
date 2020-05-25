import { UnionFind_QU_R } from './05-UnionFind_QU_R';

/**
 * Quick Union - 基于rank的优化 - 路径减半(Path Halving)
 */
class UnionFind_QU_R_PH extends UnionFind_QU_R {
    constructor(capacity : number) {
        super(capacity);
    }

    // 使路径上每隔一个节点就指向其祖父节点
    find(v : number) : number {
        this.rangeCheck(v);
        while(v != this.parents[v]) {
            this.parents[v] = this.parents[this.parents[v]];
            v = this.parents[v];
        }
        return v;
    } 
}

export {UnionFind_QU_R_PH}