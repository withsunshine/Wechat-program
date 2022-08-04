// pages/order/order.js
Page({
    data: {
        no: null, // 城市
        expressInfo: null, // 查询到的订单物流
    },
    search: function () {
        wx.showLoading({
            title: '加载中',
        })
        var key = '920bbd2fe9dea489205dd26448c709cd'
        wx.request({
            url: 'http://apis.juhe.cn/simpleWeather/query?city=' + this.data.no + '&key=' + key,
            method: 'GET',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: res => {
                wx.hideLoading()
                console.log(res.data);
                if (res.data.error_code == 0) {
                    this.setData({
                        expressInfo: res.data.result.future
                    })
                } else {
                    this.setData({
                        expressInfo: null
                    })
                    wx.showToast({
                        title: res.data.reason,
                        icon: 'error'
                    })
                }
            },
        })
    },
    // 获取城市的值
    noInput: function (e) {
        this.setData({
            no: e.detail.value
        })
    }
})