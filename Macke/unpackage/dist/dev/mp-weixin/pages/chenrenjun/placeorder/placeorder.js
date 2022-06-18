"use strict";
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      orders: {}
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    async getOrder() {
      let result = await common_js_requestHttp.GetRequestToken("/api/checkout/load");
      console.log(result);
      result.code == 0 ? this.orders = result.data : "";
      console.log(this.orders);
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  (_easycom_uni_notice_bar2 + _easycom_uni_list_item2)();
}
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "\u6E29\u99A8\u63D0\u793A:\u7531\u4E8E\u75AB\u60C5\u56E2\u8D2D\u4E3A\u7279\u6B8A\u65F6\u671F,\u86CB\u7CD5\u4FDD\u6E29\u5305\u5747\u514D\u8D39\u8D60\u9001,\u73B0\u6062\u590D\u5E38\u89C4\u914D\u9001,\u5982\u6709\u9700\u6C42\u5219\u9700\u4ED8\u8D39\u8D2D\u4E70,\u671B\u7406\u89E3"
    }),
    b: common_vendor.f($data.orders.send_type, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    }),
    c: common_vendor.o(($event) => _ctx.onClick($event, 1)),
    d: common_vendor.p({
      link: "reLaunch",
      to: "/pages/vue/index/index"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ea3ec8f"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/chenrenjun/placeorder/placeorder.vue"]]);
wx.createPage(MiniProgramPage);
