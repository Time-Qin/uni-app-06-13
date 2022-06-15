"use strict";
var common_vendor = require("../common/vendor.js");
var store = common_vendor.createStore({
  state: {
    carts: common_vendor.index.getStorageSync("carts") || []
  },
  mutations: {
    addCarts(state, payload) {
      let find = state.carts.find((item) => item.id === payload.id);
      if (find) {
        find.buynum += payload.buynum;
      } else {
        state.carts.push(payload);
      }
      common_vendor.index.setStorageSync("carts", state.carts);
      console.log(state.carts);
    }
  },
  getters: {}
});
exports.store = store;
