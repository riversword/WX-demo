var postsData = require("../../../data/posts-data.js");
Page({
  onLoad: function(option){
    var postId = option.id;
    console.log(postId);
    var postData = postsData.postList[postId];
    this.setData({ postData: postData });
    //this.data.postData = postData;
  }
})