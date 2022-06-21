"use strict";
var common_vendor = require("../../common/vendor.js");
var common_js_requestHttp = require("../../common/js/requestHttp.js");
const _sfc_main = {
  data() {
    return {
      one: 1,
      flag: false,
      scrollTop: 200,
      goods: [],
      pageIndex: 1,
      hasMore: true,
      contentDatas: [],
      goodDatas: [],
      goodcart: true,
      mynum: 1,
      update: false
    };
  },
  computed: {},
  created() {
    this.getShopList();
  },
  onShow() {
    this.getShopList();
  },
  methods: {
    goshopping() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    async getShopList() {
      let result1 = await common_js_requestHttp.GetRequest("/api/cart/load");
      result1.msg === "Success" ? this.goodDatas = result1.data : "";
      if (result1.data.goods.length != 0) {
        this.goodcart = false;
      } else {
        this.goodcart = true;
      }
      let result = await common_js_requestHttp.GetRequest(`/api/goods/load?cityId=110&bid=1&fid=0&page=${this.pageIndex}&count=20&search=&total=34`);
      if (result.data.data.length < 10) {
        this.hasMore = false;
      }
      result.code === 0 ? this.goods = [...this.goods, ...result.data.data] : "";
    },
    async getDatasCar(sku) {
      let result = await common_js_requestHttp.GetRequest(`/api/goods/detail?sku=${sku}&id=${sku}`);
      result.msg === "Success" ? this.contentDatas = result.data : "";
      this.$refs.Car[0].shopContent2();
    },
    async postDatasCar(obj) {
      let result = await common_js_requestHttp.PostRequest("/api/cart/update ", obj);
      result.msg === "Success" ? this.goodDatas = result.data : "";
      if (result.data.goods.length != 0) {
        this.goodcart = false;
      } else {
        this.goodcart = true;
      }
    },
    async postDatasCarDel(obj) {
      let result = await common_js_requestHttp.PostRequest("/api/cart/del ", obj);
      result.msg === "Success" ? this.goodDatas = result.data : "";
      if (result.data.goods.length != 0) {
        this.goodcart = false;
      } else {
        this.goodcart = true;
      }
    },
    goTop() {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        duration: 300
      });
    },
    plus(value, idx, buy, id) {
      let obj = {
        "cityId": 110,
        "goods": [{
          "key": idx,
          "id": id,
          "newId": id,
          "num": ++value,
          "buy": buy,
          "blessing": ""
        }]
      };
      this.postDatasCar(obj);
    },
    minus(value, idx, buy, id) {
      let obj = {
        "cityId": 110,
        "goods": [{
          "key": idx,
          "id": id,
          "newId": id,
          "num": --value,
          "buy": buy,
          "blessing": ""
        }]
      };
      this.postDatasCar(obj);
    },
    gosku(sku) {
      let sku1 = sku;
      common_vendor.index.navigateTo({
        url: `../index/good_details?sku=${sku1}`
      });
    },
    changeThis(goods, index, buy) {
      buy === 1 ? buy = 0 : buy = 1;
      let obj = {
        "cityId": 110,
        "goods": [{
          "key": index,
          "id": goods,
          "newId": goods,
          "num": this.mynum,
          "buy": buy,
          "blessing": ""
        }]
      };
      this.postDatasCar(obj);
    },
    Allchecked() {
      if (this.goodDatas.master.checkAll) {
        let list = this.newDatas(0);
        this.postDatasCar(list);
      } else {
        let list = this.newDatas(1);
        this.postDatasCar(list);
      }
    },
    delGoods() {
      let obj = {
        "cityId": 110,
        "goods": []
      };
      for (var i = 0, j = 0; i < this.goodDatas.goods.length; i++) {
        if (this.goodDatas.goods[i].buy === 1) {
          obj.goods[j++] = i;
        }
      }
      this.postDatasCarDel(obj);
    },
    newDatas(num) {
      let obj = {
        "cityId": 110,
        "goods": []
      };
      for (let i = 0; i < this.goodDatas.goods.length; i++) {
        obj.goods[i] = {};
        obj.goods[i].key = i;
        obj.goods[i].id = this.goodDatas.goods[i].id;
        obj.goods[i].newId = this.goodDatas.goods[i].id;
        obj.goods[i].num = this.goodDatas.goods[i].num;
        obj.goods[i].buy = num;
        obj.goods[i].blessing = "";
      }
      return obj;
    },
    goOrder() {
      common_vendor.index.navigateTo({
        url: "/pages/chenrenjun/placeorder/placeorder?cityId=10"
      });
    }
  },
  onPageScroll(scroll) {
    this.scrollTop = scroll.scrollTop;
    if (scroll.scrollTop > 400) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  onReachBottom() {
    if (this.hasMore) {
      this.pageIndex += 1;
      this.getShopList();
    }
  },
  onPullDownRefresh() {
    this.goods = [];
    this.pageIndex = 1;
    this.hasMore = true;
    this.getShopList().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  }
};
if (!Array) {
  const _easycom_header_nav2 = common_vendor.resolveComponent("header-nav");
  const _component_van_stepper = common_vendor.resolveComponent("van-stepper");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_car_view2 = common_vendor.resolveComponent("car-view");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_header_nav2 + _component_van_stepper + _easycom_uni_icons2 + _easycom_car_view2 + _easycom_uni_load_more2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_car_view = () => "../../components/car-view/car-view.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_header_nav + _easycom_uni_icons + _easycom_car_view + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    b: $data.goodcart === true
  }, $data.goodcart === true ? {
    c: common_vendor.o((...args) => $options.goshopping && $options.goshopping(...args))
  } : common_vendor.e({
    d: common_vendor.t($data.goodDatas.goods.length),
    e: $data.update === false
  }, $data.update === false ? {
    f: common_vendor.o(($event) => $data.update = true)
  } : {
    g: common_vendor.o(($event) => $data.update = false)
  }, {
    h: common_vendor.f($data.goodDatas.goods, (item, idx, i0) => {
      return {
        a: common_vendor.o(($event) => $options.changeThis(item.id, idx, item.buy)),
        b: item.buy === 1,
        c: item.img,
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.french),
        f: common_vendor.t(item.spec),
        g: common_vendor.t(item.weight),
        h: common_vendor.t(item.tableware),
        i: common_vendor.t(item.candle),
        j: common_vendor.t(item.price),
        k: common_vendor.o(($event) => $options.minus(item.num, idx, item.buy, item.id)),
        l: common_vendor.o(($event) => $options.plus(item.num, idx, item.buy, item.id)),
        m: "99da2408-1-" + i0,
        n: common_vendor.p({
          value: item.num
        }),
        o: item.id
      };
    })
  }), {
    i: common_vendor.f($data.goods, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.o(($event) => $options.gosku(item.id)),
        c: common_vendor.t(item.name),
        d: common_vendor.t(item.french),
        e: common_vendor.t(item.price),
        f: common_vendor.o(($event) => $options.getDatasCar(item.id)),
        g: "99da2408-2-" + i0,
        h: common_vendor.sr("Car", "99da2408-3-" + i0, {
          "f": 1
        }),
        i: "99da2408-3-" + i0,
        j: item.title
      };
    }),
    j: common_vendor.p({
      type: "cart",
      size: "30"
    }),
    k: common_vendor.p({
      contentDatas: $data.contentDatas,
      getShopList: $options.getShopList
    }),
    l: $data.hasMore
  }, $data.hasMore ? {
    m: common_vendor.p({
      status: "loading"
    })
  } : {}, {
    n: common_vendor.p({
      type: "arrow-up",
      size: "30"
    }),
    o: common_vendor.o((...args) => $options.goTop && $options.goTop(...args)),
    p: $data.flag === true ? "block" : "none",
    q: $data.goodcart === false
  }, $data.goodcart === false ? common_vendor.e({
    r: $data.goodDatas.master
  }, $data.goodDatas.master ? {
    s: $data.goodDatas.master.checkAll === true,
    t: common_vendor.o((...args) => $options.Allchecked && $options.Allchecked(...args))
  } : {}, {
    v: $data.update === false
  }, $data.update === false ? common_vendor.e({
    w: $data.goodDatas.master
  }, $data.goodDatas.master ? {
    x: common_vendor.t($data.goodDatas.master.total)
  } : {}, {
    y: $data.goodDatas.master
  }, $data.goodDatas.master ? {
    z: common_vendor.t($data.goodDatas.master.buy || 0),
    A: common_vendor.o((...args) => $options.goOrder && $options.goOrder(...args))
  } : {}) : {
    B: common_vendor.o((...args) => $options.delGoods && $options.delGoods(...args))
  }) : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99da2408"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/shopCar.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
