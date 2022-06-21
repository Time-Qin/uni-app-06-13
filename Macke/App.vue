<script>
export default {
  onLaunch: function () {
    console.warn(
      "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"
    );
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>
<style lang="less">
/*每个页面公共css */
// @import "/wxcomponents/vant/dist/common/index.wxss";
// @import "@/uni_modules/uni-scss/index.scss";
// @import "@/uni_modules/vk-uview-ui/index.scss";
/* #ifndef APP-NVUE */
@import "@/static/customicons.css";
@import '/wxcomponents/vant/dist/common/index.wxss';

// 设置整个项目的背景色
page {
  background-color: #f5f5f5;

}


/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}

@font-face {
  font-family: "iconfont";
  /* Project id 3457046 */
  src: url("@/static/iconfont.woff2") format("woff2"),
    url("@/static/iconfont.woff") format("woff"),
    url("@/static/iconfont.ttf") format("truetype");
}

// 兰敏的字体图标
@font-face {
  font-family: "iconfont1";
  /* Project id 3464542 */
  /* Color fonts */
  src: url("@/static/lanmin_icons/iconfont.woff2") format("woff2"),
    url("@/static/lanmin_icons/iconfont.woff") format("woff"),
    url("@/static/lanmin_icons/iconfont.ttf") format("truetype");
}

.iconfont1 {
  font-family: "iconfont1" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-gengduomore12:before {
  content: "\e60a";
}


.icon-fanhui-1:before {
  content: "\e660";
}

.icon-lajixiang:before {
  content: "\e666";
}

.icon-fenxiang:before {
  content: "\e60d";
}

.icon-bangbangtang:before {
  content: "\e656";
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dangqian:before {
  content: "\e64a";
}

.icon-xiangxia1:before {
  content: "\e771";
}

.icon-xiangzuo1:before {
  content: "\e779";
}

.icon-bangbangtang:before {
  content: "\e656";
}

.icon-fenxiang1:before {
  content: "\e6d7";
}

.icon-tupian3:before {
  content: "\e674";
}

.icon-31wode:before {
  content: "\e604";
}

.icon-fankui:before {
  content: "\e738";
}

.icon-shouye:before {
  content: "\e751";
}

.icon-fenxiang:before {
  content: "\eb24";
}

.icon-canju1:before {
  content: "\e6c3";
}

.icon-canju2:before {
  content: "\e60e";
}

.icon-shijian:before {
  content: "\e64d";
}

.icon-yunshupeisong:before {
  content: "\e652";
}

.icon-duigouzhong:before {
  content: "\e8bf";
}

.icon-shang:before {
  content: "\e62e";
}

.icon-dangao:before {
  content: "\e60d";
}

.icon-lazhu:before {
  content: "\e62a";
}

.icon-line:before {
  content: "\e653";
}

.icon-daocha:before {
  content: "\e60b";
}

.icon-meishi-bangbangtang:before {
  content: "\e606";
}

.icon-gouwuche:before {
  content: "\e70b";
}

.icon-daifukuan:before {
  content: "\e601";
}

.icon-31daifahuo:before {
  content: "\e602";
}

.icon-31daipingjia:before {
  content: "\e603";
}

.icon-zhiyuandizhi1:before {
  content: "\e60c";
}

.icon-daishouhuofuben:before {
  content: "\e6b1";
}

.icon-qiandao:before {
  content: "\e60f";
}

.icon-kefu:before {
  content: "\e60a";
}

.icon-jingxuan:before {
  content: "\e62b";
}

.icon-shouhou:before {
  content: "\e63c";
}

.icon-jinianrix:before {
  content: "\e6be";
}

.icon-31shezhi:before {
  content: "\e600";
}

.icon-shouhuodizhi:before {
  content: "\e64e";
}

.icon-sousuoxiao:before {
  content: "\e8d6";
}

</style>
