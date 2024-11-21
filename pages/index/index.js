Page({
  data: {
    motto: '欢迎来到我的小程序',
    userInfo: {},
    hasUserInfo: false
  },
  onLoad() {
    // 页面加载时执行
  },
  navigateTo(e) {
    const page = e.currentTarget.dataset.page;
    const routes = {
      localService: '/pages/services/local/local',
      trademark: '/pages/services/trademark/trademark',
      finance: '/pages/services/finance/finance',
      legal: '/pages/services/legal/legal',
      drivingSchool: '/pages/services/driving/driving',
      agency: '/pages/services/agency/agency',
      proxy: '/pages/services/proxy/proxy'
    };
    
    wx.navigateTo({
      url: routes[page]
    });
  }
}) 