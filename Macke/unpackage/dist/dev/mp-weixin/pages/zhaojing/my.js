"use strict";
var common_js_requestHttp = require("../../common/js/requestHttp.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      goodlist: [],
      scrollTop: 0
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      let result = await common_js_requestHttp.GetRequest("/api/page/load?cityId=110&route=pages%2Fuser%2Findex");
      this.goodlist = result.data.list[1].data.content.list;
      console.log(this.goodlist);
    }
  },
  onPageScroll(Top) {
    this.scrollTop = Top.scrollTop;
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_header_nav2 + _easycom_uni_icons2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      scrollTop: $data.scrollTop
    }),
    b: common_vendor.f($data.goodlist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: "5e8d191e-1-" + i0,
        f: item.title
      };
    }),
    c: common_vendor.p({
      type: "cart",
      size: "30"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e8d191e"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/my.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
