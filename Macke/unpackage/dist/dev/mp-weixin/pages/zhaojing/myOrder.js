"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      one: 1,
      orderList: [{
        id: 1829986124192875e4,
        store: "\u590F\u65E5\u6D41\u661F\u9650\u5B9A\u8D29\u5356",
        deal: "\u4EA4\u6613\u6210\u529F",
        goodsList: [
          {
            goodsUrl: "//img13.360buyimg.com/n7/jfs/t1/103005/7/17719/314825/5e8c19faEb7eed50d/5b81ae4b2f7f3bb7.jpg",
            title: "\u3010\u51AC\u65E5\u9650\u5B9A\u3011\u73B0\u8D27 \u539F\u521Bjk\u5236\u670D\u59732020\u51AC\u88C5\u65B0\u6B3E\u5C0F\u6E05\u65B0\u5BBD\u677E\u8F6F\u7CEF\u6BDB\u8863\u5916\u5957\u5973\u5F00\u886B\u77ED\u6B3E\u767E\u642D\u65E5\u7CFB\u751C\u7F8E\u98CE",
            type: "\u7070\u8272;M",
            deliveryTime: "\u4ED8\u6B3E\u540E30\u5929\u5185\u53D1\u8D27",
            price: "348.58",
            number: 2
          },
          {
            goodsUrl: "//img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg",
            title: "\u3010\u8461\u8404\u85E4\u3011\u73B0\u8D27 \u5C0F\u6E05\u65B0\u5B66\u9662\u98CE\u5236\u670D\u683C\u88D9\u767E\u8936\u88D9\u5973\u77ED\u6B3E\u767E\u642D\u65E5\u7CFB\u751C\u7F8E\u98CE\u539F\u521Bjk\u5236\u670D\u59732020\u65B0\u6B3E",
            type: "45cm;S",
            deliveryTime: "\u4ED8\u6B3E\u540E30\u5929\u5185\u53D1\u8D27",
            price: "135.00",
            number: 1
          }
        ]
      }],
      list: [
        {
          name: "\u5168\u90E8"
        },
        {
          name: "\u5F85\u4ED8\u6B3E"
        },
        {
          name: "\u5F85\u786E\u8BA4"
        },
        {
          name: "\u5F85\u53D1\u8D27"
        },
        {
          name: "\u5F85\u6536\u8D27"
        },
        {
          name: "\u5DF2\u5B8C\u6210"
        },
        {
          name: "\u5F85\u8BC4\u4EF7"
        },
        {
          name: "\u5DF2\u9000\u8D27"
        },
        {
          name: "\u5DF2\u53D6\u6D88"
        }
      ],
      current: 0,
      swiperCurrent: 0,
      tabsHeight: 0,
      dx: 0,
      loadStatus: ["loadmore", "loadmore", "loadmore", "loadmore"]
    };
  },
  onLoad() {
    this.orderList = [];
  },
  computed: {
    priceInt() {
      return (val) => {
        if (val !== parseInt(val))
          return val.split(".")[0];
        else
          return val;
      };
    }
  },
  methods: {
    reachBottom() {
    },
    getOrderList(idx) {
    },
    totalPrice(item) {
      let price = 0;
      item.map((val) => {
        price += parseFloat(val.price);
      });
      return price.toFixed(2);
    },
    totalNum(item) {
      let num = 0;
      item.map((val) => {
        num += val.number;
      });
      return num;
    },
    change(index) {
      this.swiperCurrent = index;
      this.getOrderList(index);
    },
    transition({
      detail: {
        dx
      }
    }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({
      detail: {
        current
      }
    }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
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
  const _easycom_u_tabs_swiper2 = common_vendor.resolveComponent("u-tabs-swiper");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_loadmore2 = common_vendor.resolveComponent("u-loadmore");
  (_easycom_header_nav2 + _easycom_u_tabs_swiper2 + _easycom_u_icon2 + _easycom_u_loadmore2)();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
const _easycom_u_tabs_swiper = () => "../../uni_modules/vk-uview-ui/components/u-tabs-swiper/u-tabs-swiper.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_loadmore = () => "../../uni_modules/vk-uview-ui/components/u-loadmore/u-loadmore.js";
if (!Math) {
  (_easycom_header_nav + _easycom_u_tabs_swiper + _easycom_u_icon + _easycom_u_loadmore)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: common_vendor.sr("tabs", "e3668000-1"),
    d: common_vendor.o($options.change),
    e: common_vendor.p({
      activeColor: "#78b4e3",
      list: $data.list,
      current: $data.current,
      ["is-scroll"]: false,
      swiperWidth: "750"
    }),
    f: common_vendor.f($data.list, (item, index, i0) => {
      return common_vendor.e($data.orderList.length > 0 ? {
        a: common_vendor.f($data.orderList, (res, index2, i1) => {
          return {
            a: common_vendor.t(res.id),
            b: "e3668000-2-" + i0 + "-" + i1,
            c: common_vendor.t(res.deal),
            d: common_vendor.f(res.goodsList, (item2, index3, i2) => {
              return {
                a: item2.goodsUrl,
                b: common_vendor.t(item2.title),
                c: common_vendor.t(item2.type),
                d: common_vendor.t(item2.deliveryTime),
                e: common_vendor.t($options.priceInt(item2.price)),
                f: common_vendor.t(item2.number),
                g: index3
              };
            }),
            e: common_vendor.t($options.totalNum(res.goodsList)),
            f: common_vendor.t($options.priceInt($options.totalPrice(res.goodsList))),
            g: res.id
          };
        }),
        b: common_vendor.p({
          name: "arrow-right",
          color: "#cbcbcb",
          size: 26
        }),
        c: "e3668000-3-" + i0,
        d: common_vendor.p({
          status: $data.loadStatus[0],
          bgColor: "#f2f2f2"
        })
      } : {}, {
        e: index
      });
    }),
    g: $data.orderList.length > 0,
    h: common_vendor.o((...args) => $options.reachBottom && $options.reachBottom(...args)),
    i: $data.swiperCurrent,
    j: common_vendor.o((...args) => $options.transition && $options.transition(...args)),
    k: common_vendor.o((...args) => $options.animationfinish && $options.animationfinish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e3668000"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/zhaojing/myOrder.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
