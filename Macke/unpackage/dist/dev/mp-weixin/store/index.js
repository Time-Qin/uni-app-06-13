"use strict";
var common_vendor = require("../common/vendor.js");
var store = common_vendor.createStore({
  state: {
    carts: common_vendor.index.getStorageSync("carts") || [],
    history: common_vendor.index.getStorageSync("history") || [],
    goodsDatas: {},
    user: {}
  },
  mutations: {
    addCarts(state, payload) {
      let find = state.carts.find((item) => item.id === payload.id);
      if (find && find.price === payload.price) {
        find.buynum += payload.buynum;
      } else {
        state.carts.push(payload);
      }
      common_vendor.index.setStorageSync("carts", state.carts);
      console.log(state.carts);
    },
    updateCart(state, payload) {
      console.log(state.goodsDatas);
    },
    addHistory(state, payload) {
      state.history.push(payload.history);
      common_vendor.index.setStorageSync("history", state.history);
    },
    clearHistry(state) {
      state.history = [];
      common_vendor.index.setStorageSync("history", state.history);
    },
    addUser(state, payload) {
      state.user = payload;
      common_vendor.index.setStorageSync("user", state.user);
      console.log(state.user);
    }
  },
  getters: {}
});
exports.store = store;
