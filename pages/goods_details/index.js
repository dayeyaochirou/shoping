
// pages/goods_details/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:{},
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    request({
      url: "/goods/detail?goods_id="+options.goods_id,
    }).then(res=>{
      // console.log(res)
      let {message}=res.data
      this.setData({
        message
      })
      // console.log(this.data.message)
    })
  },
  handleContact(e){
    // console.log(e)
  },
  //添加购物车的事件
  addCar(){
    // 获取商品列表的对象
    const goods = wx.getStorageSync("goods") || {};
    const {message}=this.data
    // console.log(message)
    //先将对象的键和值保存到原对象中
    goods[message.goods_id] = message;
    // 替换掉之前的对象
    wx.setStorageSync("goods", goods)
    // wx.setStorage({
    //   key: "message.goods_id",
    //   data: message
    // })
  }
})