"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "header-title",
  props: ["backgdata"],
  data() {
    return {
      backgroundCr: "transparent",
      backgroundCr1: "#888",
      toOpacity: "1",
      clors: "white",
      imgurl: "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
      topdata: [
        {
          name: "\u9996\u9875",
          icon: "iconfont icon-shouye"
        },
        {
          name: "\u6211\u7684",
          icon: "iconfont icon-31wode"
        },
        {
          name: "\u8D2D\u7269\u8F66",
          icon: "iconfont icon-gouwuche"
        },
        {
          name: "\u5BA2\u670D\u5C0F\u871C",
          icon: "iconfont icon-kefu"
        },
        {
          name: "\u6211\u8981\u53CD\u9988",
          icon: "iconfont icon-fankui"
        },
        {
          name: "\u5206\u4EAB",
          icon: "iconfont icon-fenxiang"
        }
      ]
    };
  },
  created() {
  },
  methods: {
    backTo() {
      common_vendor.index.navigateBack({});
    },
    shareImg() {
    },
    openPopup() {
      this.$refs.popup.open();
    },
    shareOpen() {
      this.$refs.popup.close();
      this.$refs.popup2.open();
    },
    gopage(name) {
      switch (name) {
        case "\u9996\u9875":
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          return;
        case "\u6211\u7684":
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          return;
        case "\u8D2D\u7269\u8F66":
          common_vendor.index.switchTab({
            url: "/pages/index/index"
          });
          return;
        case "\u5BA2\u670D\u5C0F\u871C":
          common_vendor.index.makePhoneCall({
            phoneNumber: "4006678678"
          });
          return;
        case "\u6211\u8981\u53CD\u9988":
          common_vendor.index.navigateTo({
            url: "../../pages/zhaojing/question"
          });
          return;
        case "\u5206\u4EAB":
          this.shareOpen();
          return;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.backgdata.backgroundCr1,
    b: $props.backgdata.clors,
    c: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    d: $props.backgdata.clors,
    e: $props.backgdata.clors,
    f: $props.backgdata.clors,
    g: common_vendor.o((...args) => $options.openPopup && $options.openPopup(...args)),
    h: $props.backgdata.backgroundCr1,
    i: common_vendor.f($data.topdata, (item, k0, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.name),
        c: item.name,
        d: common_vendor.o(($event) => $options.gopage(item.name), item.name)
      };
    }),
    j: common_vendor.sr("popup", "16389484-0"),
    k: common_vendor.p({
      type: "top"
    }),
    l: $props.backgdata.backgroundCr,
    m: $props.backgdata.toOpacity,
    n: $props.backgdata.clors,
    o: common_vendor.o((...args) => $options.shareImg && $options.shareImg(...args)),
    p: common_vendor.sr("popup2", "16389484-1"),
    q: common_vendor.p({
      type: "bottom"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-16389484"], ["__file", "D:/2022_03file/hx/Project/Macke/components/header-title/header-title.vue"]]);
wx.createComponent(Component);
