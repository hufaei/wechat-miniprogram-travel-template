// pages/gouwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ingan:false,
    banner: [ // 轮播图图片链接数组
      '/pages/image/baitashan.jpg',
      '/pages/image/qingcheng.jpg',
      '/pages/image/ganbo.jpg',
      '/pages/image/huanghe.jpg'
    ],
    icons:[
      {name:'酒店',imgurl:'/pages/image/hotel.png',bindtap:'/pages/jiudian'},
      {name:'美食',imgurl:'/pages/image/food.png',bindtap:'/pages/meishi'},
      {name:'景点',imgurl:'/pages/image/prospect.png',bindtap:'/pages/zhoubian'},
      {name:'周边',imgurl:'/pages/image/near.png',bindtap:'/pages/fuj'},
    ],
    content:[{url:'/pages/image/gan.jpg'},
      
    ]
  },
  zhenfenl(e){
    // console.log(e.currentTarget.dataset.src)
    wx.navigateTo({
      url: e.currentTarget.dataset.src,
    })
  },
  changeingan(){
    this.setData({
      ingan:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },


  onShow() {
    getApp().globalData.initTabbar(this, 0);
    
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    getApp().globalData.shouldRefreshTab = true;
  },



  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})