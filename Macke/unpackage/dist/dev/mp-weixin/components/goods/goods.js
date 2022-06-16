"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  name: "goods",
  props: ["goods"],
  data() {
    return {
      goodsDetail: [],
      itemList: []
    };
  },
  methods: {
    goDetail(id, twoid) {
      common_vendor.index.navigateTo({
        url: "/pages/lanmin_detail/lanmin_detail?id=" + id + "&twoId=" + twoid
      });
    },
    async addItem(item) {
      let result = await common_js_requestHttp.GetRequest("/api/goods/detail?id=" + item.id);
      result.code === 0 ? this.goodsDetail = result.data : "";
      this.itemList = this.goodsDetail.list[0];
      this.$refs.popup1.change();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_carts2 = common_vendor.resolveComponent("carts");
  (_easycom_uni_icons2 + _easycom_carts2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_carts = () => "../carts/carts.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_carts)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.goods, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.goDetail(item.id, item.twoId)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.addItem(item)),
        g: "f73ce21c-0-" + i0,
        h: item.title
      };
    }),
    b: common_vendor.p({
      type: "cart",
      size: "24"
    }),
    c: common_vendor.sr("popup1", "f73ce21c-1"),
    d: common_vendor.p({
      goodsDetail: $data.goodsDetail,
      list: $data.itemList
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f73ce21c"], ["__file", "C:/Users/98443/\u5170\u654F\u5B66\u4E60/MCAKE/Macke/components/goods/goods.vue"]]);
wx.createComponent(Component);
