// pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    avatarUrl: "/pages/image/portrait.png",
    nickName: "yourname",
    weather: "获取天气"
  },
  bindGetUserInfo : function(e){
    var nickname = e.detail.userInfo.nickName;
    var avatar = e.detail.userInfo.avatarUrl;
    this.setData({
      nickName: nickname,
      avatarUrl: avatar,
      show: false
    })
  },
  switchChange : function(e){
    // 判断点击时是否为true
    if (e.detail.value){
      var url = "https://eolink.o.apispace.com/456456/weather/v001/now?lonlat=" + 104.9 + "," + 35.56;
  
    wx.request({
      url: url,
      method: "GET",
      header: {
        "X-APISpace-Token": "5lbhy665f87dwkgmsqcknrxicrxetgf8", // 替换为空字符串的部分应填写APISpace API Key
        "Authorization-Type": "apikey"
      },
      success: (res) => {
            const xianq=res.data
            console.log(xianq)
            var weather = xianq.result.realtime.text;
            var tmp = xianq.result.realtime.feels_like;
            var wind_dir = xianq.result.realtime.wind_class+xianq.result.realtime.wind_dir;
            this.setData({
              weather: "甘肃省榆中县" + " "+ weather + " " + tmp + "(体感)度" + "   " +  wind_dir
            })
          },
      fail: function () {
        // 网络请求失败
        wx.showToast({
          title: '网络请求失败，请稍后重试',
          icon: 'none',
          duration: 2000
        });
      }
    });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success : (res)=>{
              var nickname = res.userInfo.nickName;
              var avatar = res.userInfo.avatarUrl;
              this.setData({
                nickname : nickname,
                avatarUrl: avatar,
                show : false
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    getApp().globalData.initTabbar(this, 2)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})