import axios from 'axios'

export default function ajax(url = '',params = {},type = "GET") {
  let promise;
  //1.返回promise对象
  return new Promise((resolve,reject) => {
    //1.1 判断请求的方式
    if ('GET' === type) {
      //1.2 拼接字符串
      let paramStr = '';
      //Object.keys(params): 去除对象中的所有key 返回一个数组
      Object.keys(params).forEach(key=>{
        paramStr += key + '=' + params[key] + '&'
      });
      //1.3 过滤最后的&
      if (paramStr !== '') {
        //从0位置开始截取
        paramStr = paramStr.substr(0,paramStr.lastIndexOf("&"));
      }
      //1.4 拼接完整路径
      url += '?' + paramStr;

      //1.5 发起get请求
      promise = axios.get(url);

    } else if ('POST' === type) {
      promise = axios.post(url,params);
    }

    //1.7 返回结果
    promise.then((response)=>{
      console.log(response.data);
      resolve(response.data);
    }).catch(error=>{
      reject(error);
    })
  });
}
