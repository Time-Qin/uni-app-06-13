"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  name: "goods",
  props: ["goods"],
  data() {
    return {
      goodsDetail: [],
      list: [],
      itemList: {}
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
      this.list = this.goodsDetail.list;
      this.itemList = this.list[0];
      this.$refs.popup1.change("bottom");
    },
    changItem(idx) {
      this.itemList = this.list[idx];
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
      return common_vendor.e({
        a: item
      }, item ? {
        b: item.img,
        c: common_vendor.o(($event) => $options.goDetail(item.id, item.twoId))
      } : {}, {
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.french),
        f: common_vendor.t(item.price),
        g: common_vendor.o(($event) => $options.addItem(item)),
        h: "f73ce21c-0-" + i0,
        i: item.title
      });
    }),
    b: common_vendor.p({
      type: "cart",
      size: "24"
    }),
    c: common_vendor.sr("popup1", "f73ce21c-1"),
    d: common_vendor.o($options.changItem),
    e: common_vendor.p({
      goodsDetail: $data.goodsDetail,
      list: $data.list,
      itemList: $data.itemList
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f73ce21c"], ["__file", "D:/2022_03file/hx/Project/Macke/components/goods/goods.vue"]]);
wx.createComponent(Component);
