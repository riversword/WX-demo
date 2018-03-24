//这里的引入文件只能用相对路径
var postData = require("../../data/posts-data.js");
Page({
  data: {

  },
  onLoad: function (options) {  
    this.setData({ post_key: postData.postList });
    // this.data.post_key = postData.postList; 不行
  },
  onPosttap: function(event){
    //console.log("onPosttap");
    //console.log(event);
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  }

})