const db = wx.cloud.database();
const app = getApp()
let username=''
let password=''
Page({
  data: {
    username: '',
    password: '',
    clientHeight:''
  },
  onLoad(){
    var that=this
    wx.getSystemInfo({ 
      success: function (res) { 
        console.log(res.windowHeight)
          that.setData({ 
              clientHeight:res.windowHeight
        }); 
      } 
    }) 
  },
  //获取输入款内容
  content(e){
    username=e.detail.value
  },
  password(e){
    password=e.detail.value
  },
  //登录事件
  goadmin(){
    let flag = false 
    if(username=='')
    {
      wx.showToast({
        icon:'none',
        title: '账号不能为空',
      })
    }else if(password==''){
      wx.showToast({
        icon:'none',
        title: '密码不能为空',
      })
    }else{
      db.collection('users')
      .get({
        success:(res)=>{
          console.log(res.data)
          let admin=res.data
          for (let i = 0; i < admin.length; i++) {  //遍历数据库对象集合
            if (username === admin[i].username) { //账户已存在
              flag=true;
              if (password !== admin[i].password) {  //判断密码正确与否
                wx.showToast({  //显示密码错误信息
                  title: '密码错误！！',
                  icon: 'error',
                  duration: 2500
                });
               break;
              } else {
                flag=true;
                wx.setStorageSync('admin', password)
                wx.showToast({
                  title: '登陆成功！！',
                  icon: 'success',
                  duration: 2000, 
                  success: function () {
                    setTimeout(function () {
                      //专门用于跳转到 tabBar 页面，会先关闭当前所有非 tabBar 页面
                      wx.switchTab({
                        url: '/pages/index/index'
                      });
                    }, 2100); // 延迟时间，单位为毫秒，与提示框显示时间相同
                  }
                })
                break;
              }
            }
          };
          if(flag==false)//遍历完数据后发现没有该账户
          {
            wx.showToast({
              title: '该用户不存在',
              icon: 'error',
              duration: 2500
            })
          }
        }
      })
    }
  },
})