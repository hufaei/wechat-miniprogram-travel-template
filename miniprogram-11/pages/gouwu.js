// pages/gouwu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodlist:[
    {name:'白塔山',url:'/pages/image/baita.jpg',redi:'./recommend'},
    {name:'丹霞地区',url:'/pages/image/danxia.jpg',redi:'./recommend1'},
    {name:'老街',url:'/pages/image/laojie.jpg',redi:'./recommend2'}],

  },
// 点击事件
  wotiao(e) {
    console.log(e.currentTarget.dataset.src)
    wx.navigateTo({
      url: e.currentTarget.dataset.src,
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    getApp().globalData.initTabbar(this, 1)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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