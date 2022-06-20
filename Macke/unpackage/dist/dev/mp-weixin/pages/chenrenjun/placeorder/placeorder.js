"use strict";
var common_vendor = require("../../../common/vendor.js");
var common_js_requestHttp = require("../../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      orders: {},
      goods: {},
      master: {},
      member: {},
      checked: false,
      scrollTop: 0,
      one: 1
    };
  },
  onLoad(options) {
    console.log(options);
    this.getOrder(options);
  },
  methods: {
    async getOrder(city) {
      let result = await common_js_requestHttp.PostRequest("/api/checkout/init", { cityId: 110 });
      console.log(result);
      result.code == 0 ? this.orders = result.data : "";
      this.goods = this.orders.goods;
      this.master = this.orders.master;
      console.log(this.master);
      this.member = this.orders.member;
      console.log(this.member);
    },
    onChecked() {
      this.checked = !this.checked;
    },
    toggle() {
      this.$refs.popup.open();
    },
    toTips() {
      this.$refs.popup1.open();
    },
    toPoints() {
      this.$refs.popup2.open();
    },
    close() {
      this.$refs.popup.close();
      this.$refs.popup1.close();
      this.$refs.popup2.close();
    },
    onClick(e, value) {
    },
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
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_header_nav2 + _easycom_uni_notice_bar2 + _easycom_uni_list_item2 + _easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_header_nav = () => "../../../components/header-nav/header-nav.js";
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_notice_bar + _easycom_uni_list_item + _easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: common_vendor.p({
      text: "\u6E29\u99A8\u63D0\u793A:\u7531\u4E8E\u75AB\u60C5\u56E2\u8D2D\u4E3A\u7279\u6B8A\u65F6\u671F,\u86CB\u7CD5\u4FDD\u6E29\u5305\u5747\u514D\u8D39\u8D60\u9001,\u73B0\u6062\u590D\u5E38\u89C4\u914D\u9001,\u5982\u6709\u9700\u6C42\u5219\u9700\u4ED8\u8D39\u8D2D\u4E70,\u671B\u7406\u89E3"
    }),
    d: common_vendor.f($data.orders.send_type, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    }),
    e: common_vendor.o(($event) => $options.onClick($event, 1)),
    f: common_vendor.p({
      link: "reLaunch",
      to: "/pages/vue/index/index"
    }),
    g: common_vendor.f($data.goods, (item, k0, i0) => {
      return common_vendor.e({
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.spec),
        d: common_vendor.t(item.weight),
        e: item.tableware
      }, item.tableware ? {
        f: common_vendor.t(item.tableware),
        g: common_vendor.o((...args) => $options.toggle && $options.toggle(...args))
      } : {}, {
        h: item.candle
      }, item.candle ? {
        i: common_vendor.t(item.candle),
        j: common_vendor.o((...args) => $options.toggle && $options.toggle(...args))
      } : {}, {
        k: common_vendor.t(item.price),
        l: common_vendor.t(item.num),
        m: "1ea3ec8f-3-" + i0,
        n: "1ea3ec8f-4-" + i0,
        o: item.id
      });
    }),
    h: common_vendor.o(($event) => $options.onClick($event, 1)),
    i: common_vendor.p({
      to: "/pages/vue/index/index"
    }),
    j: common_vendor.t($data.master.goodsAmount),
    k: common_vendor.t($data.master.postAmount),
    l: $data.member.card === 0
  }, $data.member.card === 0 ? {} : {
    m: common_vendor.t($data.member.card)
  }, {
    n: $data.member.coupon === 0
  }, $data.member.coupon === 0 ? {} : {
    o: common_vendor.t($data.member.coupon)
  }, {
    p: common_vendor.t($data.member.balance),
    q: common_vendor.o($options.toTips),
    r: common_vendor.p({
      type: "info",
      size: "20"
    }),
    s: $data.member.balance === 0
  }, $data.member.balance === 0 ? {} : {
    t: common_vendor.t($data.member.balance)
  }, {
    v: common_vendor.t($data.member.points),
    w: common_vendor.o($options.toPoints),
    x: common_vendor.p({
      type: "info",
      size: "20"
    }),
    y: $data.checked === true
  }, $data.checked === true ? {
    z: common_vendor.t($data.member.pointsAmount)
  } : {}, {
    A: common_vendor.o((...args) => $options.onChecked && $options.onChecked(...args)),
    B: $data.checked,
    C: $data.checked === true
  }, $data.checked === true ? {
    D: common_vendor.t($data.master.receivableAmount)
  } : {
    E: common_vendor.t($data.master.goodsAmount)
  }, {
    F: common_vendor.o(($event) => $options.onClick($event, 1)),
    G: common_vendor.p({
      link: "reLaunch",
      to: "/pages/chenrenjun/invoicing/invoicing"
    }),
    H: common_vendor.o(($event) => $options.onClick($event, 1)),
    I: common_vendor.p({
      link: "reLaunch"
    }),
    J: $data.checked === true
  }, $data.checked === true ? {
    K: common_vendor.t($data.master.receivableAmount)
  } : {
    L: common_vendor.t($data.master.goodsAmount)
  }, {
    M: common_vendor.o((...args) => $options.close && $options.close(...args)),
    N: common_vendor.sr("popup", "1ea3ec8f-9"),
    O: common_vendor.p({
      ["background-color"]: "#fff"
    }),
    P: common_vendor.o((...args) => $options.close && $options.close(...args)),
    Q: common_vendor.sr("popup1", "1ea3ec8f-10"),
    R: common_vendor.p({
      ["background-color"]: "#fff"
    }),
    S: common_vendor.o((...args) => $options.close && $options.close(...args)),
    T: common_vendor.sr("popup2", "1ea3ec8f-11"),
    U: common_vendor.p({
      ["background-color"]: "#fff"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1ea3ec8f"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/chenrenjun/placeorder/placeorder.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
