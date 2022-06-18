"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      datalist: [],
      mcakeScene: {},
      flag: true,
      activeKey: 0,
      hasMore: true,
      page: 1,
      fid: 0,
      one: 1,
      scrollTop: 0,
      contentDatas: []
    };
  },
  created() {
    this.initMcake();
    this.getMcakes();
  },
  methods: {
    async initMcake() {
      let result = await common_js_requestHttp.GetRequest("/api/goods/category");
      result.code === 0 ? this.mcakeScene = result.data[0].scene : "";
      this.mcakeScene.unshift({
        "bid": "1",
        "tgid": "3",
        "tid": "0",
        "tname": "\u5168\u90E8"
      });
      this.getMcakes();
    },
    async getMcakes(fid) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?bid=1&tid=0&fid=${this.fid}&page=${this.page}&count=10`);
      if (result.data.data.length < 10) {
        this.hasMore = false;
      }
      result.code == 0 ? this.datalist = [...this.datalist, ...result.data.data] : "";
    },
    async getMcakeGroup(fid) {
      this.activeKey = fid;
      this.fid = fid;
      this.hasMore = true;
      this.page = 1;
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?bid=1&tid=0&fid=${fid}&page=${this.page}&count=10`);
      result.code === 0 ? this.datalist = result.data.data : "";
    },
    goDetail(id) {
      common_vendor.index.navigateTo({
        url: `/pages/index/good_details?id=${id}`
      });
    },
    backTo() {
      common_vendor.index.navigateBack({});
    },
    onPageScroll(Top) {
      this.scrollTop = 200;
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    }
  },
  onReachBottom() {
    if (this.hasMore) {
      this.page++;
      this.getMcakes();
    }
  },
  onPullDownRefresh() {
    this.datalist = [];
    this.page = 1;
    this.hasMore = true;
    this.getMcakes().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _component_header_nav = common_vendor.resolveComponent("header-nav");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_component_header_nav + _easycom_uni_list_item2 + _easycom_car_view2 + _easycom_uni_load_more2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_car_view + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: $data.flag
  }, $data.flag ? {
    d: common_vendor.f($data.mcakeScene, (item, index, i0) => {
      return {
        a: common_vendor.t(item.tname),
        b: common_vendor.n({
          active: $data.activeKey == item.tid
        }),
        c: item.tname,
        d: common_vendor.o(($event) => $options.getMcakeGroup(item.tid), item.tname)
      };
    })
  } : {}, {
    e: common_vendor.f($data.datalist, (item, k0, i0) => {
      return common_vendor.e({
        a: item
      }, item ? {
        b: item.img,
        c: common_vendor.o(($event) => $options.goDetail(item.id)),
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.french),
        f: common_vendor.t(item.price),
        g: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        h: "730ad8d2-1-" + i0,
        i: common_vendor.sr("Car", "730ad8d2-2-" + i0, {
          "f": 1
        }),
        j: "730ad8d2-2-" + i0,
        k: common_vendor.p({
          contentDatas: $data.contentDatas
        })
      } : {}, {
        l: item.id
      });
    }),
    f: $data.hasMore
  }, $data.hasMore ? {
    g: common_vendor.p({
      status: "loading"
    })
  } : {
    h: common_vendor.p({
      status: "noMore"
    })
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-730ad8d2"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/chenrenjun/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
