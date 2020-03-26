// pages/today/today.js
const util = require('../../utils/util.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //app id
    appid: '164316',
    //sign
    sign: 'f93dafe007224455ad65510782e820fa',
    //时间戳
    timestamp: util.formatTime(new Date()),
    //获取当前月份+日期
    today: util.formatToday(new Date()),
    //today in history
    list: null,
    //change date
    changeDate: util.formatChangeDate(new Date())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onRequest();
  },

  onRequest: function(today){
    var that = this;

    var today = today || that.data.today

    wx.request({
      url: 'https://route.showapi.com/119-42?date=' + today + '&showapi_appid=' + that.data.appid + '&showapi_timestamp=' + that.data.timestamp + '&showapi_sign=' + that.data.sign,
      success: function (e) {
        var result = e.data.showapi_res_body;

        that.setData({
          list: result.list
        });
        console.log(e);
      }
    });
  },

  dateChange: function(e){
    var date = e.detail.value.split('-');
    this.onRequest(date[1] + date[2]);
    this.setData({
      changeDate: date[1] + '-' + date[2]
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