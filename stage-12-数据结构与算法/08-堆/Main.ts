import {BinaryHeap} from './BinaryHeap'
import {Comparator} from '../04-树/Comparator'

class NumberCompator implements Comparator<number> {
    compare(e1: number, e2: number): number {
        return e1 - e2;
    }
}

class NumberCompator1 implements Comparator<number> {
    compare(e1: number, e2: number): number {
        return e2 - e1;
    }
}

function test1() {
    let heap = new BinaryHeap<number>(new NumberCompator());

    heap.add(68);
    heap.add(72);
    heap.add(43);
    heap.add(50);
    heap.add(38);
    heap.add(10);
    heap.add(90);
    heap.add(65);

    console.log(heap.size());
    console.log(heap.isEmpty());
    console.log(heap.get());
    console.log(heap);
    console.log(heap.remove());
    console.log(heap);

    console.log(heap.replace(70));
    console.log(heap);

    heap.clear();
    console.log(heap);
}

// 海量数据取最大数的问题
function test2() {
    // 找出最大的前k个数
    let k = 3;
    let data = [51, 30, 39, 92, 74, 25, 16, 93, 
            91, 19, 54, 47, 73, 62, 76, 63, 35, 18, 
            90, 6, 65, 49, 3, 26, 61, 21, 48];
    let heap = new BinaryHeap<number>(new NumberCompator1());
    for (let i = 0; i < data.length; i++) {
        if (heap.size() < k) { // 前k个数添加到小顶堆
            heap.add(data[i]); // logk
        } else if (data[i] > heap.get()) { // 如果是第k + 1个数，并且大于堆顶元素
            heap.replace(data[i]); // logk
        }
    }
    console.log(heap);
}
test2();