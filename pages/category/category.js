// pages/category/category.js
Page({
        /**
         * 页面的初始数据
         */
        data: {
                num: 0, //下标
                categoryItem: [
                        '签到',
                        '附近',
                        '展会',
                        '福利',
                        '玩乐',
                        '体育',
                        '周边',
                        '亲子',
                ],
                //图片跟商品名字
                content: [
                        //Tab1
                        [
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists04.webp",
                                        name: "商品4"
                                },
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                        ],
                        //Tab2
                        [
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists04.webp",
                                        name: "商品4"
                                },
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                        ],
                        //Tab3
                        [
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists04.webp",
                                        name: "商品4"
                                },
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                        ],
                        //Tab4
                        [
                                {
                                        img: "/images/lists04.webp",
                                        name: "商品4"
                                },
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                        ],
                        //Tab5
                        [
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                        ],
                        //Tab6
                        [
                                {
                                        img: "/images/lists06.webp",
                                        name: "商品6"
                                },
                                {
                                        img: "/images/lists01.webp",
                                        name: "商品1"
                                },
                                {
                                        img: "/images/lists02.webp",
                                        name: "商品2"
                                },
                                {
                                        img: "/images/lists03.webp",
                                        name: "商品3"
                                },
                                {
                                        img: "/images/lists05.webp",
                                        name: "商品5"
                                },
                        ],
                ]
        },
        // 自定义事件方法
        setNum(option) {
                console.log("控制台输出触发效果")
                console.log(option.target.dataset.index);
                // this.setData() 
                //用来修改data中数据，同时同步数据到页面
                this.setData({
                        num: option.target.dataset.index
                })
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