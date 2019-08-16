//封装一个request请求
const request = function (config = {}) {
  if(!config.url){
    throw new Error('请输入url地址');
    return 
  }
  //拼接baseURL
  if (config.url.search(/^http/)==-1){
    config.url = request.defaults.baseUrl + config.url;
  };
  // console.log(config)
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      success(res) {
        resolve(res)
      },
      // fail(err) {
      //   reject(err);
      // }
      //可以通过complete将所有的res都放到err的数组中
      complete(res){
        reject(res)
        request.errors.forEach(cb=>{
          cb(res)
        })
      }
    })
  })
}
request.defaults={
  //定义baseurl
 baseUrl :''
}
//定义存放错误函数的数组
request.errors=[];
//接收错误的触发函数
request.onError=function(callback){
  request.errors.push(callback)
}

export default request;
