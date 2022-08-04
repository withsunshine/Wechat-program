// pages/about/about.js
var app=getApp();
Page({
  // 跳转页面
  // 保留当前页面，点击页面左上角箭头，返回上一个页面
  mycar: function() {
    wx.navigateTo({
      url: '/pages/car/car',
    })
  },
  info: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  order: function(e) {
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  address: function() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  contact: function (e) {
    // 调用拨打电话API
    wx.makePhoneCall({
      phoneNumber: '10086-11'   // 该电话号码为模拟数据
    })
  }
})