import { UnionFind_QF } from "./02-UnionFind_QF";
import { UnionFind_QU } from "./03-UnionFind_QU";
import { UnionFind_QU_S } from "./04-UnionFind_QU_S";
import { UnionFind_QU_R } from "./05-UnionFind_QU_R";
import { UnionFind_QU_R_PC } from "./06-UnionFind_QU_R_PC";
import { UnionFind_QU_R_PS } from "./07-UnionFind_QU_R_PS";
import { UnionFind_QU_R_PH } from "./08-UnionFind_QU_R_PH";


function test1() {
    let qf = new UnionFind_QF(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

function test2() {
    let qf = new UnionFind_QU(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

function test3() {
    let qf = new UnionFind_QU_S(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

function test4() {
    let qf = new UnionFind_QU_R(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

function test5() {
    let qf = new UnionFind_QU_R_PC(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

function test6() {
    let qf = new UnionFind_QU_R_PS(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf.find(0));
    console.log(qf);
}

function test7() {
    let qf = new UnionFind_QU_R_PH(12);
    console.log(qf);
    qf.union(0,1);
    qf.union(0,3);
    qf.union(0,4);
    qf.union(2,3);
    qf.union(2,5);

    qf.union(6,7);

    qf.union(8,10);
    qf.union(9,10);
    qf.union(9,11);

    console.log(qf);

    console.log(qf.isSame(0,5));
    console.log(qf.isSame(4,6));
    console.log(qf);

    qf.union(5,6);
    console.log(qf.isSame(4,6));

    console.log(qf);
}

test6()