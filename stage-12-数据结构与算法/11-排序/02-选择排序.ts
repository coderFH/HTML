import { Sort } from "./00-Sort";

class SelectSort extends Sort {
    protected sortArray(): void {
        for (let end = this.array.length - 1; end > 0; end--) {
            let max = 0;
            for (let begin = 1; begin <= end; begin++) {
                if (this.cmp(max,begin) < 0) {
                    max = begin;
                } 
            }
            this.swap(max,end);
        }
    }
}

function test3() {
    let arr3 = [3,4,1,2,3,4,5,78,9,2,3,33,11,56,332,678,888,999];
    let s3 = new SelectSort();
    s3.sort(arr3);
    for (let i = 0; i < arr3.length; i++) {
        const element = arr3[i];
        console.log(element);
    }
}

test3()