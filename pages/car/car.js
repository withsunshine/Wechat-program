// pages/car/car.js
Page({
        /**
         * 页面的初始数据
         */
        data: {
                goodsList:[
                        {
                                id:1,
                                goodsImage:"/images/lists01.webp",
                                goodsName:"2021春季新款智能眼部按摩仪",
                                goodsAddress:"广州",
                                goodsPrice:"200",
                                num:1,
                        },
                        {
                                id:2,
                                goodsImage:"/images/lists02.webp",
                                goodsName:"专为肩颈设计 对位到穴 深入按摩",
                                goodsAddress:"广州",
                                goodsPrice:"200",
                                num:1,
                        },
                        {
                                id:3,
                                goodsImage:"/images/lists03.webp",
                                goodsName:"P6遥控款升级第六代热销专业款",
                                goodsAddress:"广州",
                                goodsPrice:"200",
                                num:1
                        },
                ],
                // 8.添加总价格
                totalData:0
        },
        // 2.数量加一
        add(option){
                console.log(option.target.dataset.index);
                var index = option.target.dataset.index;
                var num = this.data.goodsList[index].num;//获取数量
                var key = "goodsList["+index+"].num";
                this.setData({
                        [key]:num + 1
                })
                // 计算总价格方法
                this.getTotal();
        },

        // 4.数量减一
        sub(option){
                var index = option.target.dataset.index;
                var num = this.data.goodsList[index].num;//获取数量
                var key = "goodsList["+index+"].num";
                num = num <= 1? 1:num-1;
                this.setData({
                        [key]:num
                })
                // 计算总价格方法
                this.getTotal();

        },
        // 6.删除数据
        del(option){
                console.log(option.currentTarget.dataset.index)
                var index = option.currentTarget.dataset.index;
                this.data.goodsList.splice(index,1);//删除静态数据
                this.setData({
                        goodsList:this.data.goodsList //更新最新数据
                })
                // 计算总价格方法
                this.getTotal();
        },
        // 7.计算总价格
        getTotal(){
                var goodsList = this.data.goodsList;

                // 计算总价格
                let data = goodsList.reduce((total,item)=>{
                        return total + item.num * item.goodsPrice;
                },0)
                // 更新总价格
                this.setData({
                        totalData:data
                })

        },
        /**
         * 生命周期函数--监听页面加载  -- 函数自定被调用
         */
        onLoad: function (options) {
                console.log("函数自定被调用onLoad");
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
                console.log("函数自定被调用onShow");
                console.log(this);
                // 10.计算总价格方法
                this.getTotal();
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