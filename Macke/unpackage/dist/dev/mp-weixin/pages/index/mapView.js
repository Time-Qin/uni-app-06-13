"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      scrollTop: 0,
      one: 1,
      id: 0,
      title: "map",
      covers: [{
        latitude: 39.909,
        longitude: 116.39742,
        iconPath: "/static/icons/location.png"
      }, {
        latitude: 39.9,
        longitude: 116.39,
        iconPath: "/static/icons/location.png"
      }],
      polygon: [{
        points: [
          {
            "longitude": "120.4540790",
            "latitude": "31.5927130"
          },
          {
            "longitude": "120.3891136",
            "latitude": "31.6212522"
          },
          {
            "longitude": "120.3126498",
            "latitude": "31.6842039"
          },
          {
            "longitude": "120.2655067",
            "latitude": "31.6064917"
          },
          {
            "longitude": "120.2068654",
            "latitude": "31.5405324"
          },
          {
            "longitude": "120.3086254",
            "latitude": "31.5331460"
          },
          {
            "longitude": "120.3528939",
            "latitude": "31.4700912"
          },
          {
            "longitude": "120.3971624",
            "latitude": "31.5641650"
          }
        ],
        strokeWidth: 2,
        strokeColor: "#2cd2ff60",
        fillColor: "#35a8ff80"
      }]
    };
  },
  methods: {
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
  _easycom_header_nav2();
}
const _easycom_header_nav = () => "../../components/header-nav/header-nav.js";
if (!Math) {
  _easycom_header_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.backTo && $options.backTo(...args)),
    b: common_vendor.p({
      scrollTop: $data.scrollTop,
      one: $data.one
    }),
    c: $data.covers,
    d: $data.polygon
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-768ec43b"], ["__file", "D:/2022_03file/hx/Project/Macke/pages/index/mapView.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
