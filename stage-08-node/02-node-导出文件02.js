exports.sum = (...numbers)=>{
    let result = 0;
    numbers.forEach((number)=>{
        result += number;
    });
    return result;
};

exports.avg = (...numbers)=>{
    let result = 0;
    numbers.forEach((number)=>{
        result += number;
    });
    return result / numbers.length;
};