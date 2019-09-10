import axios from 'axios'

export function axRequest1(config,success,failure){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL : 'http://192/168.0.1',
    timeout : 5000
  });

  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err=>{
      failure(err);
    })
}

//改进
export function axRequest2(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL : 'http://192/168.0.1',
    timeout : 5000
  });

  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err=>{
      failure(err);
    })
}

//改进
export function axRequest3(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL : 'http://192/168.0.1',
    timeout : 5000
  });

  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err=>{
      failure(err);
    })
}

//最终版
export function axRequest4(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL : 'http://192/168.0.1',
    timeout : 5000
  });

  //发送真正的网络请求
  instance(config)
    .then(res => {
      success(res);
    })
    .catch(err=>{
      failure(err);
    })
}
