import request from '../../utils/request.js';
//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad() {
    request({
      url: '/api/public/v1/home/swiperdata',
      method: 'get'
    }).then(res => {
      let {message}=res.data
      console.log(message)
      let arr=[]
      message.forEach(v=>{
        arr.push(v.image_src)
        this.setData({
           imgUrls:arr
        })
      })
    })
  },
  data: {
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function (e) {
  //   this.setData({
  //     autoplay: this.data.autoplay
  //   })
  // },
  // intervalChange: function (e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function (e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
})