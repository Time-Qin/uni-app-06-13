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
      }
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_fav2 = common_vendor.resolveComponent("uni-fav");
  (_easycom_uni_icons2 + _easycom_uni_fav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_fav = () => "../../uni_modules/uni-fav/components/uni-fav/uni-fav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_fav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "contact-filled",
      size: "50"
    }),
    b: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.contentText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    c: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
      bgColor: "#f60",
      fgColor: "#fff"
    }),
    d: common_vendor.p({
      star: false,
      circle: true,
      ["content-text"]: $data.buttonText,
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
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/ThinkPad/Desktop/mcake/uni-app-06-13/Macke/pages/liuchenchen/qiaodao.vue"]]);
wx.createPage(MiniProgramPage);
