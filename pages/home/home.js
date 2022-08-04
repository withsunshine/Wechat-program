// pages/home/home.js
Page({

        /**
         * 页面的初始数据
         */
        data: {
                // 数据绑定
                // 自定义静态数据
                imgs:[
                        "/images/banner01.jpg",
                        "/images/banner02.jpg",
                        "/images/banner03.jpg",
                        "/images/banner04.jpg",
                        "/images/banner01.jpg",
                ],
                iconArray:[
                        {
                                url:"/images/icon-qiandao.png",
                                text:"签到"
                        },
                        {
                                url:"/images/icon-fujin.png",
                                text:"附近"
                        },
                        {
                                url:"/images/icon-zhanhui.png",
                                text:"展会"
                        },
                        {
                                url:"/images/icon-fuli.png",
                                text:"福利"
                        },
                        {
                                url:"/images/icon-muma.png",
                                text:"玩乐"
                        },
                        {
                                url:"/images/icon-tiyu.png",
                                text:"体育"
                        },
                        {
                                url:"/images/icon-xingxing.png",
                                text:"周边"
                        },
                        {
                                url:"/images/icon-qinzi.png",
                                text:"亲子"
                        },
                ],
                goodsList:[
                        {
                                id:1,
                                goodsImage:"/images/lists01.webp",
                                goodsName:"2021春季新款智能眼部按摩仪",
                                goodsAddress:"广州",
                                goodsPrice:"199"
                        },
                        {
                                id:2,
                                goodsImage:"/images/lists02.webp",
                                goodsName:"专为肩颈设计 对位到穴 深入按摩",
                                goodsAddress:"广州",
                                goodsPrice:"200"
                        },
                        {
                                id:3,
                                goodsImage:"/images/lists03.webp",
                                goodsName:"P6遥控款升级第六代热销专业款",
                                goodsAddress:"广州",
                                goodsPrice:"299"
                        },
                        {
                                id:4,
                                goodsImage:"/images/lists04.webp",
                                goodsName:"旁氏米粹润泽洁面泡泡",
                                goodsAddress:"广州",
                                goodsPrice:"100"
                        },
                        {
                                id:5,
                                goodsImage:"/images/lists05.webp",
                                goodsName:"2021款按摩仪红光热敷脉冲热灸",
                                goodsAddress:"广州",
                                goodsPrice:"199"
                        },
                        {
                                id:6,
                                goodsImage:"/images/lists06.webp",
                                goodsName:"2021款新型日本进口按摩椅",
                                goodsAddress:"广州",
                                goodsPrice:"399"
                        },
                ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {

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