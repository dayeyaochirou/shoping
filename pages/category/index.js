import request from '../../utils/request.js';
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrays:[],
    current:0
  },
  clickList(e){
    // console.log(e);
    let {index}=e.currentTarget.dataset
    // console.log(index)
    this.setData({
      current:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    request({
      url:'/categories'
    }).then(res=>{
      // console.log(res)
      let {message}=res.data
      this.setData({
        arrays: message
      })
      // console.log(this.data.arrays)
    })
   
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})