//封装请求
const $request = function (config = {}) {
  if (!config.url) {
    throw new Error('请输入url地址');
    return
  }
  //拼接baseURL
  if (config.url.search(/^http/) == -1) {
    config.url = $request.defaults.baseUrl + config.url;
  };
  return new Promise((resolve, reject) => {
    wx.request({
      ...config,
      success(res) {
        resolve(res)
      },
      // fail(err){
      //   reject(res)
      // }
      complete(res){
        reject(res)
        $request.errors.forEach(cb => {
          cb(res)
        })
      }
    })
  })
}
$request.defaults={
  baseURL:''
}
$request.errors=[];
$request.onError=function(cb){
  $request.errors.push(cb)
}
export default $request;