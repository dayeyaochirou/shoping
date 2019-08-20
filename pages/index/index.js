import request from '../../utils/request.js';
//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad() {
    request({
      url: '/home/swiperdata',
      method: 'get'
    }).then(res => {
      let {
        message
      } = res.data
      // console.log(message)
      let arr = []
      message.forEach(v => {
        arr.push(v.image_src)
        this.setData({
          imgUrls: arr
        })
      })
    }),
      request({
        url: '/home/catitems',
        method: 'get'
      }).then(res => {
        // console.log(res)
        let {
          message
        } = res.data;
        this.setData({
          nav: message
        })
      }),
      request({
      url: '/home/floordata',
        method: 'get'
      }).then(res => {
        let {
          message
        } = res.data;
        // console.log(message)
        this.setData({
          floor: message
        })
        // console.log(this.data.floor)
      })
  },
  data: {
    imgUrls: [],
    nav: [],
    floor:[]
  }
})