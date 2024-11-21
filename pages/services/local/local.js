Page({
  data: {
    services: [
      {
        title: '家政服务'
      },
      {
        title: '维修服务'
      },
      {
        title: '配送服务'
      }
    ]
  },
  onLoad() {
    
  },

  onServiceTap(e) {
    const index = e.currentTarget.dataset.index;
    const service = this.data.services[index];
    // 这里可以处理服务项目的点击事件
    wx.showToast({
      title: `选择了${service.title}`,
      icon: 'none'
    });
  }
}) 