// pages/index/renteCall/renteCallHistory/renteCallHistory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    renteMoney:[
    {
      totalfee:1902,
      rentefee:1700,
      waterfee:123,
      eletrfee:34,
      propefee:100,
      otherfee:234,
      date:'2018-08-01'
    },
    {
      totalfee: 1902,
      rentefee: 1700,
      waterfee: 123,
      eletrfee: 34,
      propefee: 100,
      otherfee: 234,
      date: '2018-07-01'
    }
    ],
    routers: [
    {
      name: '',
      url: '../renteCall',
      icon: '/images/renteCall/returnCall.png'
    }]
  
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