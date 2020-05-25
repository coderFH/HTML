import { Sort } from "./00-Sort";

class ShellSort extends Sort {
    protected sortArray(): void {
        this.sortWithBeginAndEnd(0,this.array.length);
    }

    private sortWithBeginAndEnd(begin : number,end : number) {
        if (end - begin < 2) return;
        // 确定轴点位置
        let mid = this.pivotIndex(begin,end);
        // 对子序列进行快速排序
        this.sortWithBeginAndEnd(begin,mid);
        this.sortWithBeginAndEnd(mid+1,end);
    }

    /**
	 * 构造出 [begin, end) 范围的轴点元素
	 * @return 轴点元素的最终位置
	 */
    private pivotIndex(begin : number,end : number) : number {
        let randomNumber =  begin + Math.round(Math.random() * (end - begin));

        console.log(randomNumber);
        

        // 随便选择一个元素跟begin位置进行交换
        this.swap(begin,randomNumber);

        // 备份begin位置的元素
        let pivot = this.array[begin];

        // end指向最后一个元素
        end--;

        while(begin < end) {
            while(begin < end) {
                if (this.cmp(pivot,end) < 0) { // 右边元素 > 轴点元素
                    end--;
                } else { // 右边元素 <= 轴点元素
                    this.array[begin++] = this.array[end];
                    break;
                }
            }
            while(begin < end) {
                if (this.cmp(pivot,begin) > 0) { // 左边元素< 轴点元素
                    begin++
                } else { // 左边元素>=轴点元素
                    this.array[end--] = this.array[begin];
                    break;
                }
            }
        }

        // 将轴点元素放入最终的位置
        this.array[begin] = pivot;

        // 返回轴点元素的位置
        return begin;
    }
}

export {ShellSort}

function test1() {
    let arr1 = [7, 3, 5, 8, 6, 7, 4, 5];
    let s1 = new ShellSort();
    s1.sort(arr1);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        console.log(element);
    }
}

test1();