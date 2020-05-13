import { Sort } from "./00-Sort";

class InsertionSort1 extends Sort {
    protected sortArray(): void {
        for (let begin = 1; begin < this.array.length; begin++) {
            let cur = begin;
            while(cur > 0 && this.cmp(cur,cur-1) < 0) {
                this.swap(cur,cur-1);
                cur--;
            }
        }
    }
}

// 优化: 交换一次,不用每次都交换,但比较的次数没有减少
class InsertionSort2 extends Sort {
    protected sortArray(): void {
        for (let begin = 1; begin < this.array.length; begin++) {
            let cur = begin;
            let v = this.array[cur];
            while(cur > 0 && v - this.array[cur-1] < 0) {
                this.array[cur] = this.array[cur-1];
                cur--;
            }
            this.array[cur] = v;
        }
    }
}

// 优化: 使用二分查找,减少比较的次数
class InsertionSort3 extends Sort {
    protected sortArray(): void {
        for (let begin = 1; begin < this.array.length; begin++) {
            this.insert(begin,this.search(begin));
        }
    }

    // 将source位置的元素插入到dest位置
    private insert(source : number, dest : number) : void {
        let v = this.array[source];
        for (let i = source; i > dest; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[dest] = v;

    }

    /*
        利用二分搜索找到 index 位置元素的待插入位置
	    已经排好序数组的区间范围是 [0, index)
    */
    private search(index : number) : number {
        let begin = 0;
        let end = index;
        while(begin < end) {
            let mid = (begin + end) >> 1;
            if (this.array[index] - this.array[mid] < 0) {
                end = mid;
            } else {
                begin = mid + 1;
            }
        }
        return begin;
    }
}

function test1() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new InsertionSort1();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

function test2() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new InsertionSort2();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

function test3() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new InsertionSort2();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

test3();