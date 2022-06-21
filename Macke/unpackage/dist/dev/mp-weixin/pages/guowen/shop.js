"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      hotbreadlist: [],
      isShow: false,
      topItem: ""
    };
  },
  created() {
    this.shopp();
  },
  methods: {
    handleScroll(ev) {
      let { scrollTop } = ev.detail;
      this.isShow = scrollTop > 500;
      this.topItem = "";
    },
    handleBackTop() {
      this.topItem = "top";
    },
    goto(url) {
      common_vendor.index.navigateTo({
        url: "/pages/guowen/eat-bread-well"
      });
    },
    async shopp() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/load?cityId=110&bid=1&fid=0&page=1&count=20&search=&total=31");
      console.log(result);
      result.code == 0 ? this.hotbreadlist = result.data.data : "";
      console.log(result, this.hotbreadlist);
    }
  }
};
if (!Array) {
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  _easycom_uni_title2();
}
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
if (!Math) {
  _easycom_uni_title();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: "\u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F",
      align: "center"
    }),
    b: common_vendor.o(($event) => $options.goto("/pages/guowen/eat-bread-well")),
    c: common_vendor.p({
      title: "\u63A8\u8350\u5546\u54C1",
      align: "center"
    }),
    d: common_vendor.f($data.hotbreadlist, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.french),
        d: common_vendor.t(item.price),
        e: item.id
      };
    }),
    e: $data.isShow
  }, $data.isShow ? {
    f: common_vendor.o((...args) => $options.handleBackTop && $options.handleBackTop(...args))
  } : {}, {
    g: $data.topItem,
    h: common_vendor.o((...args) => $options.handleScroll && $options.handleScroll(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7d1b899d"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/guowen/shop.vue"]]);
wx.createPage(MiniProgramPage);
