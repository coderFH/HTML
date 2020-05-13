import {Sort} from './00-Sort'

//1.最原始的冒泡排序方式
class BubbleSort1 extends Sort {
    protected sortArray(): void {
       for (let end = this.array.length - 1; end > 0; end--) {
            for (let begin = 1; begin <= end; begin++) {
                if(this.cmp(begin,begin-1) < 0) {
                    this.swap(begin,begin-1);
                }
            }
        }
    }
}   

//2.冒泡排序的优化,增加一个boolean类型,发现已经是有序的后,就结束遍历
class BubbleSort2 extends Sort {
    protected sortArray(): void {
        for (let end = this.array.length - 1; end > 0; end--) {
            let sorted = true;
             for (let begin = 1; begin <= end; begin++) {
                 if(this.cmp(begin,begin-1) < 0) {
                     this.swap(begin,begin-1);
                     sorted = false;
                 }
             }
             if (sorted) break;
         }
     }
}

//3.冒泡排序的优化,如果序列尾部已经局部有序,可以记录最后1次交换的位置,减少比较次数
class BubbleSort3 extends Sort {
    protected sortArray(): void {
        for (let end = this.array.length - 1; end > 0; end--) {
            let sortedIndex = 1;
            for (let begin = 1; begin <= end; begin++) {
                if(this.cmp(begin,begin-1) < 0) {
                    this.swap(begin,begin-1);
                    sortedIndex = begin;
                }
            }
            end = sortedIndex;
         }
     }
}

function test1() {
    let arr1 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s1 = new BubbleSort1();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

function test2() {
    let arr2 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,22];
    let s2 = new BubbleSort2();
    s2.sort(arr2);
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        console.log(element);
    }
}

function test3() {
    let arr3 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,888,999];
    let s3 = new BubbleSort2();
    s3.sort(arr3);
    for (let i = 0; i < arr3.length; i++) {
        const element = arr3[i];
        console.log(element);
    }
}

test3()



