// pages/imageAPI/imageAPI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs: null,
    paths: null,
    compressPath: ''
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

  },

  selectImg: function(){
    var that = this;

    //从相册或拍照获取图片
    wx.chooseImage({
      //选择图片的张数
      count: 3,
      //指定原图，或者压缩图，默认不写则两者都支持
      sizeType: ['compressed'],
      //可以指定雷院时相册还是相机，默认不写，则两者都支持
      sourceType: ['album'],
      success: function(res) {
        console.log(res);

        that.setData({
          imgs: res.tempFilePaths
        });
      },
    })
  },

  operateImg: function(){
    wx.previewImage({
      urls: this.data.imgs,
    });
  },

  getImgInfo: function(){
    wx.getImageInfo({
      src: this.data.imgs[2],
      success :function(res){
        console.log(res);
      }
    })
  },

  loadImg: function(){
    var that = this;
    wx.chooseMessageFile({
      count: 3,
      type: 'image',
      success: function(res){
        console.log(res);
        that.setData({
          paths: res.tempFiles
        });
      }
    })
  },

  compressImg: function(){
    var that = this;
    console.log(that.data.paths[0])
    wx.compressImage({
      src: that.data.paths[0].path,
      quality: 10,
      success: function(res){
        var pic = "paths[0].path";
        console.log(res);
        that.setData({
          [pic]: res.tempFilePath
        });
        console.log(that.data.paths[0].path);
      }
    })
  },

  operateCompressImg: function(){
    console.log('压缩图片');
    console.log(this.data.paths[0].path);
    var that = this;
    wx.previewImage({
      urls: '['+that.data.paths[0].path+']',
    });
  },

  saveImg: function(){
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.paths[0].path,

      success: function(res){
        console.log(res);
      }
    })
  },

  uploadImg: function(){
    wx.chooseImage({
      count: 1,
      success: (res) => {
        var path = res.tempFilePaths[0];
        console.log(path);
        wx.uploadFile({
          filePath: path,
          name: 'file',
          url: 'https://vilincloud.utools.club/upload/uploadImage',

          success: function(res){
            console.log(res);
          },

          fail: function(res){
            console.log(res);
          }
        })
      },
    })
  },

  downloadImg: function(){

    wx.downloadFile({
      url: 'https://vilincloud.utools.club/images/s1.jpg',
      success: function(res){
        console.log(res);

        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
      }
    })
  }
  
})