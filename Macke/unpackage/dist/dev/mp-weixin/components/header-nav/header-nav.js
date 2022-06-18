"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "header-nav",
  props: ["scrollTop", "one"],
  data() {
    return {
      statusBarHeight: 0,
      navBarHeight: 82,
      menuopacity: 0,
      headerStyle: {
        "--header-height": "0px",
        "--status-height": "0px"
      }
    };
  },
  created() {
    this.headerStyle["--status-height"] = common_vendor.index.getSystemInfoSync()["statusBarHeight"] * 2 + "rpx";
    this.headerStyle["--header-height"] = common_vendor.index.getSystemInfoSync()["statusBarHeight"] * 2 + this.navBarHeight + "rpx";
  },
  onPageScroll(Top) {
    const scrollTop = this.scrollTop;
    if (scrollTop >= 0) {
      if (scrollTop <= 20) {
        this.menuopacity = 0;
      } else if (20 < scrollTop && scrollTop <= 200) {
        this.menuopacity = scrollTop / 200;
      } else if (scrollTop > 200) {
        this.menuopacity = 1;
      }
    }
  }
};
if (!Array) {
  const _component_navbar = common_vendor.resolveComponent("navbar");
  _component_navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($data.headerStyle),
    b: $props.one || $data.menuopacity,
    c: common_vendor.s($data.headerStyle)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-53883038"], ["__file", "D:/2022_03file/hx/Project/Macke/components/header-nav/header-nav.vue"]]);
wx.createComponent(Component);
