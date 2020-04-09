// pages/album/album.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverUtl: 'https://vilincloud.utools.club/',
    imageList: [],
    selectedIndex: [],
    selectMode: false,
    showButton: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    this.getImageList().then(function(list){
      that.setData({
        imageList: list
      })
    });
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

  upImage: function(){
    var that = this;

    wx.showLoading({
      title: '图片上传中',
      mask: true
    })

    wx.chooseImage({
      count: 9,
      success: function(res){
        for(var i = 0; i < res.tempFilePaths.length; i++){
          wx.uploadFile({
            url: that.data.serverUtl + 'upload/uploadImages',
            filePath: res.tempFilePaths[i],
            name: 'image',
            success: function(res){
              if(res.statusCode == 200){
                console.log('图片上传成功！');
                that.onLoad();
              }
            },
  
          })
        }
      },

      complete: function(res){
        wx.hideLoading({
          complete: (res) => {},
        })
      }
    })
  },

  getImageList: function(){
    var that = this;
    var tempImageList = [];

    var promise = new Promise(function(resolve){
      wx.request({
        url: that.data.serverUtl + 'upload/list',
        success: function(res){
          for(var i = 0; i < res.data.length; i++){
            tempImageList.push(that.data.serverUtl + "images/" + res.data[i]);
          }
          resolve(tempImageList);
        },
  
        fail: function(res){
          console.log(res);
        },
      });
    });
    
    return promise;
    
  },

  previewImage: function(e){
    var that = this;

    if(!this.data.selectMode){
      //获取图片的连接地址
      var imageUrl = e.target.dataset.src;
      //进入预览模式
      wx.previewImage({
        urls: that.data.imageList,
        current: imageUrl
      });
    }else{
      this.selectImage(e);
    }
    
  },

  selectImage: function(e){
    var index = e.target.dataset.index;

    var selectedIndex = this.data.selectedIndex;
  
    if(selectedIndex.indexOf(index) != -1){
      selectedIndex.splice(selectedIndex.indexOf(index), 1);
    }else{
      if(selectedIndex.length >= 9){
        wx.showToast({
          title: '警告:不得超过9张！',
          icon: 'none'
        })
        return;
      }

      selectedIndex.push(index);
    }

    this.setData({
      selectedIndex: selectedIndex,
      selectMode: true,
      showButton: true
    })
  },

  hideActions: function(){
    this.setData({
      selectedIndex: [],
      showButton: false,
      selectMode: false
    });
  },

  showActions: function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['删除','保存'],
      success: function(res){
        switch(res.tapIndex){
          case 0:
            that.deleteImage();
            break;
          case 1:
            that.saveImage();
            break;
        }
      }
    })
  },

  saveImage: function(){
    var that = this;
    var selectedIndex = this.data.selectedIndex;
    
    for(var i = 0; i < selectedIndex.length; i++){
      
      wx.downloadFile({
        url: that.data.imageList[selectedIndex[i]],
        success: function(res){
          console.log(res);
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath,
          })
        },

        fail: function(res){
          console.log(res);
        }
      })
    }
  },

  deleteImage: function(){
    var that = this;

    var selectedIndex = this.data.selectedIndex;
    var fileNames = [];
    for(var i = 0; i < selectedIndex.length; i++){
      var fileName = that.data.imageList[selectedIndex[i]].split('/');
      fileNames.push(fileName[fileName.length-1]);
      
    }
    console.log(fileNames);
    wx.request({
      url: that.data.serverUtl + '/upload/delete',
      method: 'GET',
      data:{
        files: fileNames
      },

      success: function(res){
        console.log(res);
      },

      fail: function(res){
        console.log(res);
      }
    })    

  }
})