"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  name: "car-view",
  props: ["contentDatas", "getShopList"],
  data() {
    return {
      nowPrice: 0,
      changeIndex: 0,
      mynum: 1
    };
  },
  methods: {
    shopContent2() {
      this.$refs.popup3.open();
    },
    async addCarts() {
      this.contentDatas.id = parseInt(this.contentDatas.id) + this.changeIndex;
      let obj = {
        "cityId": "110",
        "goods": [{
          "id": `${this.contentDatas.id}`,
          "num": `${this.mynum}`,
          "blessing": ""
        }]
      };
      let result = await common_js_requestHttp.PostRequest("/api/cart/add", obj);
      console.log("3333333333", obj, this.contentDatas.list, result);
      let page = getCurrentPages();
      if (page[0].route === "pages/zhaojing/shopCar") {
        this.getShopList();
      }
      if (result.code === 0) {
        common_vendor.index.showModal({
          content: "\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F"
        });
        this.$refs.popup3.close();
      } else {
        common_vendor.index.showModal({
          content: `${this.contentDatas.name}\u5DF2\u4E0B\u67B6\u6216\u552E\u7F44\uFF0C\u65E0\u6CD5\u52A0\u5165\u8D2D\u7269\u8F66`
        });
        this.$refs.popup3.close();
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_number_box2 + _easycom_uni_popup2)();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_number_box + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.contentDatas.img,
    b: common_vendor.t($props.contentDatas.name),
    c: common_vendor.t($props.contentDatas.french),
    d: common_vendor.t($data.nowPrice || $props.contentDatas.price),
    e: common_vendor.t($props.contentDatas.saleTotal),
    f: common_vendor.f($props.contentDatas.list, (item, idx, i0) => {
      return {
        a: common_vendor.t(item.spec),
        b: common_vendor.t(item.weight),
        c: common_vendor.n({
          active: $data.changeIndex === idx
        }),
        d: item.id,
        e: common_vendor.o(($event) => ($data.changeIndex = idx, $data.nowPrice = item.price), item.id)
      };
    }),
    g: common_vendor.f($props.contentDatas.list, (item, idx, i0) => {
      return common_vendor.e({
        a: idx === $data.changeIndex
      }, idx === $data.changeIndex ? common_vendor.e({
        b: $props.contentDatas.tableware
      }, $props.contentDatas.tableware ? {
        c: common_vendor.t(item.tableware)
      } : {}, {
        d: $props.contentDatas.candle
      }, $props.contentDatas.candle ? {
        e: common_vendor.t(item.candle)
      } : {}, {
        f: $props.contentDatas.edible
      }, $props.contentDatas.edible ? {
        g: common_vendor.t(item.edible)
      } : {}, {
        h: $props.contentDatas.size
      }, $props.contentDatas.size ? {
        i: common_vendor.t(item.size)
      } : {}) : {}, {
        j: item.id
      });
    }),
    h: common_vendor.o(($event) => $data.mynum = $event),
    i: common_vendor.p({
      min: 0,
      max: 99,
      modelValue: $data.mynum
    }),
    j: common_vendor.o(($event) => $options.addCarts()),
    k: common_vendor.sr("popup3", "5e87b078-0"),
    l: common_vendor.p({
      type: "bottom"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e87b078"], ["__file", "D:/2022_03file/hx/Project/Macke/components/car-view/car-view.vue"]]);
wx.createComponent(Component);
