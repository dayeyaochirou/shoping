// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gather: {
      userName: '',
      telNumber: '',
      address: ''
    },
    goods: {},
    
  },
  addAddress() {
    wx.chooseAddress({
      success: (res) => {
        this.setData({
          gather: {
            userName: res.userName,
            telNumber: res.telNumber,
            address: res.provinceName + res.cityName + res.countyName + res.detailInfo
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onShow() {
    let goods = wx.getStorageSync('goods')
    this.setData({
      goods
    })
    console.log(this.data.goods)
  },

})