import { Sort } from "./00-Sort";

class HeapSort extends Sort {
    private heapSize = 0;

    protected sortArray(): void {
        //原地建堆
        this.heapSize = this.array.length;

        for (let i = Math.floor(this.heapSize / 2) - 1; i >= 0; i--) {
            this.siftDown(i);
        }

        while(this.heapSize > 1) {
            //交换堆顶元素和尾部元素
            this.swap(0,--this.heapSize);

            // 对0位置进行siftDown(恢复堆的性质)
            this.siftDown(0);
        }
    }

    private siftDown(index : number) : void {
        let element = this.array[index];
        let half = Math.floor(this.heapSize / 2); 
    
        while(index < half) {
            //默认左节点跟它进行比较
            let childIndex = (index * 2) + 1;
            let child = this.array[childIndex];

            // 右子节点
            let rightIndex = childIndex + 1;

            // 选出左右节点哪个大
            if (rightIndex < this.heapSize && 
                (this.array[rightIndex] - child) > 0) {
                child = this.array[childIndex = rightIndex];
            }

            if (element - child >= 0) break;

            // 将子节点存放到index位置
			this.array[index] = child;
			// 重新设置index
			index = childIndex;
        }
        this.array[index] = element;
    }

}

function test1() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new HeapSort();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

test1();