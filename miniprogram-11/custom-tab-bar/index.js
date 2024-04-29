const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0, // 激活的tab
    // tabber列表，与app.json一致
    color: "#666666",
    selectedColor: "#ff0000",
    backgroundColor: "#ffffff",
    // 注: list中的pagePath需要加'/'开头，否则在switchTab跳转url时会自带/src/pages开头导致路径错误
    list: [{
      "pagePath": "/pages/index/index",
      "icon": "/pages/image/index.png",
      "iconActive": "/pages/image/index-a.png",
      "text": "首页",
    }, {
      "pagePath": "/pages/gouwu",
      "icon": "/pages/image/good.png",
      "iconActive": "/pages/image/good-a.png",
      "text": "推荐"
    }, {
      "pagePath": "/pages/mine",
      "icon": "/pages/image/my.png",
      "iconActive": "/pages/image/my-a.png",
      "text": "我的"
    }],
    tabbarHeight: 0
  },

  lifetimes: {
    attached: function () {
      // 获取tab栏高度
      const query = wx.createSelectorQuery().in(this)
      query.select('#tabbar').boundingClientRect((res) => {
        console.log('tab栏dom', res.height);
        this.setData({
          tabbarHeight: res.height
        })
        // 将tab栏高度设置进全局数据
        app.globalData.tabbarHeight = res.height
      }).exec()

      /**
       * 将初始化tabbar栏方法存入全局
       * @param {*} that 传入当前tab页面的this实例
       * @param {*} index 传入当前tab页面的索引
       * 若无该方法，会导致点击tab时激活的tab顺序错乱!
       * 例如在home首页onShow的生命周期钩子中，getApp().globalData.initTabbar(this, 0)
       */
      app.globalData.initTabbar = (that, index) => {
        if (typeof that.getTabBar === 'function' && that.getTabBar()) {
          that.getTabBar().setData({
            selected: index
          })
          console.log(index)
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      // bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡
      const {
        index,
        url
      } = e.currentTarget.dataset
      if (this.data.selected !== index) {
        this.setData({
          selected: index
        })
        wx.switchTab({
          url: url,
        })
      }
    }
  }
})