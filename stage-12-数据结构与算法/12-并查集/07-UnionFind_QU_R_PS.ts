import { UnionFind_QU_R } from './05-UnionFind_QU_R';

/**
 * Quick Union - 基于rank的优化 - 路径分裂(Path Spliting)
 */
class UnionFind_QU_R_PS extends UnionFind_QU_R {
    constructor(capacity : number) {
        super(capacity);
    }

    // 使路径上的每个节点都指向其祖父节点
    find(v : number) : number {
        this.rangeCheck(v);
        while(v != this.parents[v]) {
            let p = this.parents[v];
            this.parents[v] = this.parents[this.parents[v]];
            v = p;
        }
        return v;
    }  
}

export {UnionFind_QU_R_PS}