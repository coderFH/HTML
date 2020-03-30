class Set {
    //使用一个对象来保存集合元素
    constructor() {
        this.items = {}
    }

    Has(value) {
        return this.items.hasOwnProperty(value);
    }

    // 向集合中添加元素
    Add(value) {
        //1.判断集合中是否已经包含了该元素
        if (this.Has(value)) return false;

        //2. 将元素添加到集合中
        this.items[value] = value;
        return true;
    }

    // 从集合中删除某个元素
    Remove(value) {
        // 1.判断集合中是否包含该元素
        if (!this.Has(value)) return false;

        // 2.包含该元素, 那么将元素删除
        delete this.items[value];
        return true
    }

    Clear() {
        this.items = {};
    }

    Size() {
        return Object.keys(this.items).length;
        /*
            考虑兼容性问题, 使用下面的代码
            var count = 0
            for (var value in this.items) {
                if (this.items.hasOwnProperty(value)) {
                    count++
                }
            }
            return count
            */
    }

    Values() {
        return Object.keys(this.items);
        /*
           考虑兼容性问题, 使用下面的代码
           var keys = []
           for (var value in this.items) {
               keys.push(value)
           }
           return keys
           */
    }

    // ========================= 其他高级操作 ====================
    //并集
    Union(otherSet) {
        //this:集合对象A
        //otherSet:集合对象B
        //1.创建新的集合
        let unionSet = new Set();

        //2.将A集合中所有的元素添加到新集合中
        let values = this.Values();
        for (let i = 0; i< values.length;i++) {
            unionSet.Add(values[i]);
        }

        //3.取出B集合中的元素,判断是否需要加入到新的集合
        values = otherSet.Values();
        for (let i = 0; i < values.length;i++) {
            unionSet.Add(values[i]);
        }
        return unionSet;
    }

    // 交集
    Intersection(otherSet) {
        //this:集合对象A
        //otherSet:集合对象B
        //1.创建新的集合
        let intersectionSet = new Set();

        //2.从A中取出一个个元素,判断是否同时存在于集合B中
        let values = this.Values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (otherSet.Has(item)) {
                intersectionSet.Add(item);
            }
        }
        return intersectionSet;
    }

    //差集
    Difference(otherSet) {
        //this:集合对象A
        //otherSet:集合对象B
        //1.创建新的集合
        let differenceSet = new Set();

        //2.从A中取出一个个元素,判断是否同时存在于集合B中,不存在b中,添加到新集合中
        let values = this.Values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.Has(item)) {
                differenceSet.Add(item);
            }
        }
        return differenceSet;
    }

    //子集
    Subset(otherSet) {
        //this:集合对象A
        //otherSet:集合对象B

        let values = this.Values();
        for (let i = 0; i < values.length; i++) {
            let item = values[i];
            if (!otherSet.Has(item)) {
                return false
            }
        }
        return true;
    }
}

//测试和使用集合类
let set = new Set();

//添加元素
set.Add(1);
console.log(set.Values());
set.Add(1);
console.log(set.Values());

set.Add(100);
set.Add(200);
console.log(set.Values());

//判断是否包含元素
console.log(set.Has(100));

//删除元素
set.Remove(100);
console.log(set.Values());

//获取集合的大小
console.log(set.Size());
set.Clear();
console.log(set.Size());

//1.创建两个集合,并且添加元素
let setA = new Set();
setA.Add('abc');
setA.Add('cba');
setA.Add('nba');
let setB = new Set();
setB.Add('aaa');
setB.Add('nba');
setB.Add('cba');

//2.求两个集合的并集
let unionSet = setA.Union(setB);
console.log(unionSet.Values());

//求交集
let intersectionSet = setA.Intersection(setB);
console.log(intersectionSet.Values());

//求差集
let differenceSet = setA.Difference(setB);
console.log(differenceSet.Values());

//判断子集
console.log(setA.Subset(setB));
