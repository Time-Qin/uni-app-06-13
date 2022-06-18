"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  name: "goods",
  props: ["goods"],
  data() {
    return {
      goodsDetail: [],
      itemList: [],
      contentDatas: []
    };
  },
  methods: {
    goDetail(id, twoid) {
      common_vendor.index.navigateTo({
        url: "/pages/index/good_details?id=" + id + "&twoId=" + twoid
      });
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  (_easycom_uni_icons2 + _easycom_car_view2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_car_view = () => "../car-view/car-view.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_car_view)();
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
        f: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        g: "f73ce21c-0-" + i0,
        h: common_vendor.sr("Car", "f73ce21c-1-" + i0, {
          "f": 1
        }),
        i: "f73ce21c-1-" + i0,
        j: item.title
      };
    }),
    b: common_vendor.p({
      type: "cart",
      size: "24"
    }),
    c: common_vendor.p({
      contentDatas: $data.contentDatas
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f73ce21c"], ["__file", "D:/2022_03file/hx/Project/Macke/components/goods/goods.vue"]]);
wx.createComponent(Component);
