"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      contentText: {
        contentDefault: "\u67E5\u770B\u79EF\u5206"
      },
      buttonText: {
        contentDefault: "\u9886\u4EFB\u52A1"
      },
      scrollTop: 0,
      one: 1
    };
  },
  methods: {
    backTo() {
      common_vendor.index.navigateBack({});
    }
  },
  onPageScroll() {
    this.scrollTop = 200;
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_fav2 = common_vendor.resolveComponent("uni-fav");
  (_easycom_header_nav2 + _easycom_uni_icons2 + _easycom_uni_fav2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_fav = () => "../../uni_modules/uni-fav/components/uni-fav/uni-fav.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_icons + _easycom_uni_fav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: common_vendor.p({
      type: "contact-filled",
      size: "50"
    }),
    d: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.contentText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    e: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    f: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    g: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    h: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
      bgColor: "#f60",
      fgColor: "#fff"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-62fe9648"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/liuchenchen/qiaodao.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
