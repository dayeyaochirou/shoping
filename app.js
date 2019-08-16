import request from './utils/request.js'
//app.js
App({
  onLaunch() {
    request.defaults.baseUrl ='https://api.zbztb.cn';
    // 定义错误
    request.onError(res=>{
      if (res.statusCode == 400 || res.statusCode == 401){
        //调用微信弹窗
        wx.showModal({
          title: '提示',
          content: '请求错误'
        })
      }
    })
  }

})