interface ClockInterface {
    //描述一个属性
    currentTime : Date

    //描述一个方法
    setTime(d : Date) : void;
}


class Clock implements ClockInterface {
    currentTime : Date
    constructor(currentTime : Date) {
        this.currentTime = currentTime;
    }

    setTime(d : Date) : void {
        console.log(d);
    }
}

export{}