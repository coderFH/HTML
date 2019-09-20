exports.users = [];

exports.isReg = (userObj,usersArr) => {
    for(let i=0; i<usersArr.length; i++){
        // 1. 取出单个对象
        let sUser = usersArr[i];
        // 2. 判断
        if(sUser.userName === userObj.userName){
            return sUser;
        }
    }
};