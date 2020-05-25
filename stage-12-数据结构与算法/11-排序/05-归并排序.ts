import { Sort } from "./00-Sort";

class MergeSort extends Sort {
    private leftArray : Array<number>;

    protected sortArray(): void {
        this.leftArray = new Array(this.array.length >> 1);
        this.sortMerge(0,this.array.length);
    }   

    /**
	 * 对 [begin, end) 范围的数据进行归并排序
	 */
    private sortMerge(begin : number, end : number) {
        if (end - begin < 2) return ; //数组一个元素,或没有

        let mid = (begin + end) >> 1;

        this.sortMerge(begin,mid);
        this.sortMerge(mid,end);
        this.merge(begin,mid,end);
    }

    /**
	 * 将 [begin, mid) 和 [mid, end) 范围的序列合并成一个有序序列
	 */
    private merge(begin : number,mid : number,end : number) {
        let li = 0,le = mid - begin;
        let ri = mid,re = end;
        let ai = begin;

        // 备份左边数组
        for (let i = li; i < le; i++) {
            this.leftArray[i] = this.array[begin + i];
        }

        // 如果左边还没有结束
        while(li < le) {
            if (ri < re && (this.array[ri] - this.leftArray[li]) < 0) {
				this.array[ai++] = this.array[ri++];
			} else {
				this.array[ai++] = this.leftArray[li++];
			}
        }
    }
}

export {MergeSort}

function test1() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new MergeSort();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

test1();