// pages/searchTel/searchTel.js
Page({

  getCurrentTime: function () {
    var date = new Date();
    var month = date.getMonth() + 1;
    var datetime = date.getFullYear()
      + ""// "年"
      + (month >= 10 ? month : "0" + month)
      + ""// "月"
      + (date.getDate() < 10 ? "0" + date.getDate() : date
        .getDate())
      + ""
      + (date.getHours() < 10 ? "0" + date.getHours() : date
        .getHours())
      + ""
      + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
        .getMinutes())
      + ""
      + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
        .getSeconds());
    return datetime;
  },
  /**
   * 页面的初始数据
   */
  data: {
    //showapi_appid
    appid: '164316',
    //showapi_sign
    sign: 'f93dafe007224455ad65510782e820fa',
    timeStamp: '',
    number: '',
    hide: true
  },
  
  input: function(e){
    this.setData({
      number: e.detail.value
    })
  },

  //查询号码
  searchNum: function(e){
    
    var that = this;
    //发起网络请求
    this.setData({
      timeStamp: this.getCurrentTime()
    });
    wx.request({
      //请求地址
      url: 'https://route.showapi.com/6-1?num=' + that.data.number + '&showapi_appid=' + that.data.appid + '&showapi_timestamp=' + that.timeStamp + '&showapi_sign=' + that.data.sign,
      success: function (res) {
        //获得结果数据
        var result = res.data.showapi_res_body;
        console.log(result);
        //判断手机号码是否合法
        if(result.ret_code == -2){
          that.setData({
            res_code: '对不起，您查询的号码有误！',
            hide: true
          })
        }else{
          that.setData({
            res_code: '结果如下：',
            prov: result.prov,
            city: result.city,
            operator: result.name,
            hide: false
          })
        }
        
      }
    });
  }, 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://localhost:8080/inspection/save',
    //   data:{
    //     "username": "lwei",
    //     "location": "中心机房小型机室",
    //     "checkTime": "2020-03-25 19:50:30"
    //   },
    //   header: {
    //     "content-type": "application/json"
    //   },
    //   success(res){
    //     console.log(res.data);
    //   },
    //   fail(res){
    //     console.log(res.data);
    //   }
    // });
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