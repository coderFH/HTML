class Asserts {
    static test(value : boolean) : void {
        try {
            if(!value) throw new Error("测试未通过");
        } catch (e) {
            console.log(e);
        }
    }
}

export {Asserts}