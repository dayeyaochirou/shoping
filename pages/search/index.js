// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    history:[]
  },
  //搜索框输入值时触发函数
  setInput(v){
    let {value}=v.detail
    this.setData({
      inputValue:value
    })
    // console.log(this.data.inputValue)
  },
  //清除搜索
  clearInput(){
    this.setData({
      inputValue: ''
    })
  },
  //清除搜索记录
  clears(){
    wx.removeStorageSync('history');
    this.setData({
      history:[]
    })
  },
  //点击完成按钮时触发
  affirm(){
    //页面跳转的函数（导航到~）
    wx.navigateTo({
      url: '/pages/search_list/index?keyword='+this.data.inputValue,
    })
    const history = [...new Set([this.data.inputValue, ...this.data.history])]
    this.setData({
      history
    })
    wx.setStorageSync("history", history)
  },
  onLoad: function (options) {
    const history = wx.getStorageSync("history")||[];
    this.setData({
      history
    })
  },

})