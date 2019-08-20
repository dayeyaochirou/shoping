import request from '../../utils/request.js'
// pages/search_list/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
   current:0,
   keyword: "",
   goodsList:[],
   pagenum: 1,
   pagesize: 10,
   //是否有更多
   hasMore: true
  },
  addClass(e){
    let { index } = e.currentTarget.dataset
    // console.log(index)
    this.setData({
      current: index
    })
  },
  getData(){
    let { keyword, pagenum, pagesize } = this.data;
    request({
      url: '/goods/search',
      data: {
        query: keyword,
        pagenum,
        pagesize
      }
    }).then(res => {
      // console.log(res);
      let { goods } = res.data.message;
      // 是否满足pagesize条数。不满足说明是最后一页
      if (goods.length < this.data.pagesize) {
        this.setData({
          hasMore: false
        })
      }
      this.setData({
        goodsList: [...this.data.goodsList, ...goods]
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      keyword:options.keyword
    })
    this.getData()
  },
  onReachBottom() {
    if (!this.data.hasMore) {
      return;
    }
    // 页数加1
    this.setData({
      pagenum: this.data.pagenum + 1
    });

    // 请求列表数据
    this.getData();
  }
})