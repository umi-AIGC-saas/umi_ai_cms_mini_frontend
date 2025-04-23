(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["childPage/draw/draw"],{

/***/ 1014:
/*!***********************************************************************!*\
  !*** F:/G/company/umi-git/main.js?{"page":"childPage%2Fdraw%2Fdraw"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _draw = _interopRequireDefault(__webpack_require__(/*! ./childPage/draw/draw.vue */ 1015));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_draw.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 1015:
/*!****************************************************!*\
  !*** F:/G/company/umi-git/childPage/draw/draw.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw.vue?vue&type=template&id=5ff8404d&scoped=true& */ 1016);
/* harmony import */ var _draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.vue?vue&type=script&lang=js& */ 1018);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw.vue?vue&type=style&index=0&id=5ff8404d&scoped=true&lang=less& */ 1020);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ff8404d",
  null,
  false,
  _draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "childPage/draw/draw.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1016:
/*!***********************************************************************************************!*\
  !*** F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=template&id=5ff8404d&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./draw.vue?vue&type=template&id=5ff8404d&scoped=true& */ 1017);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_template_id_5ff8404d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1017:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=template&id=5ff8404d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabs: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 1956))
    },
    uIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-icon/u-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-icon/u-icon.vue */ 1802))
    },
    uLoadingIcon: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-loading-icon/u-loading-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-loading-icon/u-loading-icon")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-loading-icon/u-loading-icon.vue */ 1988))
    },
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 1856))
    },
    "u-Textarea": function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u--textarea/u--textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u--textarea/u--textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u--textarea/u--textarea.vue */ 1906))
    },
    uRow: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-row/u-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-row/u-row")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-row/u-row.vue */ 1882))
    },
    uCol: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-col/u-col */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-col/u-col")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-col/u-col.vue */ 1890))
    },
    uTextarea: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-textarea/u-textarea */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-textarea/u-textarea")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-textarea/u-textarea.vue */ 1819))
    },
    uPicker: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-picker/u-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-picker/u-picker")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-picker/u-picker.vue */ 1980))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    color: "#1F64FF",
    "font-size": "26rpx",
  }
  var a1 = {
    "font-size": "26rpx",
  }
  var a2 =
    _vm.wx_msgLoad && _vm.chat_type == 13 && !_vm.askShow && _vm.isuser
      ? {
          color: "#1F64FF",
          height: "28px",
          width: "40%",
          "font-size": "14px",
        }
      : null
  var a3 =
    !_vm.wx_msgLoad &&
    _vm.chat_type == 13 &&
    !_vm.askShow &&
    !_vm.isuser &&
    _vm.draw_tip == true
      ? {
          "border-radius": "8px",
          "margin-top": "10px",
          width: "100%",
        }
      : null
  var a4 =
    _vm.hs_msgLoad && _vm.chat_type == 14 && !_vm.askShow && _vm.isuser
      ? {
          color: "#1F64FF",
          height: "28px",
          width: "40%",
          "font-size": "14px",
        }
      : null
  var a5 =
    !_vm.hs_msgLoad &&
    _vm.chat_type == 14 &&
    !_vm.askShow &&
    !_vm.isuser &&
    _vm.draw_tip == true
      ? {
          "border-radius": "8px",
          "margin-top": "10px",
          width: "100%",
        }
      : null
  var a6 =
    _vm.bd_msgLoad && _vm.chat_type == 3 && !_vm.askShow && _vm.isuser
      ? {
          color: "#1F64FF",
          height: "28px",
          width: "40%",
          "font-size": "14px",
        }
      : null
  var a7 =
    !_vm.bd_msgLoad &&
    _vm.chat_type == 3 &&
    !_vm.askShow &&
    !_vm.isuser &&
    _vm.draw_tip == true
      ? {
          "border-radius": "8px",
          "margin-top": "10px",
          width: "100%",
        }
      : null
  var l0 =
    _vm.query_type == 1
      ? _vm.__map(_vm.modelList, function (val, index) {
          var $orig = _vm.__get_orig(val)
          var m0 = _vm.getImgUrl(val.pic_url)
          return {
            $orig: $orig,
            m0: m0,
          }
        })
      : null
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.samplerShow = true
    }
    _vm.e1 = function ($event) {
      _vm.msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e2 = function ($event) {
      _vm.msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e3 = function ($event) {
      _vm.bd_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e4 = function ($event) {
      _vm.bd_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e5 = function ($event) {
      _vm.hs_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e6 = function ($event) {
      _vm.hs_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e7 = function ($event) {
      _vm.wx_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e8 = function ($event) {
      _vm.wx_msgLoad == false ? _vm.sendMsg() : _vm.sendMsg2()
    }
    _vm.e9 = function ($event) {
      _vm.samplerShow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        a6: a6,
        a7: a7,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1018:
/*!*****************************************************************************!*\
  !*** F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./draw.vue?vue&type=script&lang=js& */ 1019);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1019:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chat = __webpack_require__(/*! @/apis/chat.js */ 165);
var _user = __webpack_require__(/*! @/apis/user.js */ 172);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Title = function Title() {
  __webpack_require__.e(/*! require.ensure | childPage/components/title */ "childPage/components/title").then((function () {
    return resolve(__webpack_require__(/*! @/childPage/components/title.vue */ 2003));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    Title: Title
  },
  data: function data() {
    return {
      // pic_url:global.baseImg+'/案例图/b9f9ac52-7183-4870-aaf0-602f652057a1.jpg',
      // pic_desc:'一个美丽的女孩在草地上漫步',
      pic_url: '',
      pic_desc: '',
      ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
      list: [{
        name: '通义万相'
      }, {
        name: '百度绘画'
      }, {
        name: '火山引擎'
      }],
      msg: "",
      keyboardHeight: 0,
      supplyValue: '',
      reply: '',
      isTime: false,
      isfinish: false,
      isDetail: false,
      isPosition: false,
      screenHeight: 0,
      msgListHeight: 0,
      keyHeight: 0,
      barHeight: 0,
      copyHeight: 0,
      draw_tip: false,
      type_tip: false,
      timer: 0,
      t_time: 0,
      bd_desc: '',
      msgLoad: false,
      chatList: [],
      bd_timer: 0,
      bd_t_time: 0,
      draw_time: 0,
      dell_desc: '',
      bd_msgLoad: false,
      baiduList: [],
      isBd: true,
      bdTypeList: [{
        name: "探索无限",
        pic_url: "xcx/com/message_center/%E6%8E%A2%E7%B4%A2%E6%97%A0%E9%99%90.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg1.png',
        value: '探索无限'
      }, {
        name: "古风",
        pic_url: "xcx/com/message_center/%E5%8F%A4%E9%A3%8E.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg2.png',
        value: '古风'
      }, {
        name: "二次元",
        pic_url: "xcx/com/message_center/%E4%BA%8C%E6%AC%A1%E5%85%83.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg3.png',
        value: '二次元'
      }, {
        name: "浮世绘",
        pic_url: "xcx/com/message_center/%E6%B5%AE%E4%B8%96%E7%BB%98.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg4.png',
        value: '浮世绘'
      }, {
        name: "low poly",
        pic_url: "xcx/com/message_center/low%20polw.png",
        bgcImg: '/xcx/com/message_center/bdBgcImg5.png',
        alue: 'low poly'
      }, {
        name: "未来主义",
        pic_url: "xcx/com/message_center/%E6%9C%AA%E6%9D%A5%E4%B8%BB%E4%B9%89.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg6.png',
        value: '未来主义'
      }, {
        name: "概念艺术",
        pic_url: "xcx/com/message_center/%E6%A6%82%E5%BF%B5%E8%89%BA%E6%9C%AF.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg7.png',
        value: '概念艺术'
      }, {
        name: "像素风格",
        pic_url: "xcx/com/message_center/%E5%83%8F%E7%B4%A0%E9%A3%8E%E6%A0%BC.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg8.png',
        value: '像素风格'
      }, {
        name: "赛博朋克",
        pic_url: "xcx/com/message_center/%E8%B5%9B%E5%8D%9A%E6%9C%8B%E5%85%8B.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg9.png',
        value: '赛博朋克'
      }, {
        name: "洛丽塔风格",
        pic_url: "xcx/com/message_center/%E6%B4%9B%E4%B8%BD%E5%A1%94.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg10.png',
        value: '洛丽塔风格'
      }, {
        name: "巴洛克风格",
        pic_url: "xcx/com/message_center/%E5%B7%B4%E6%B4%9B%E5%85%8B.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg11.png',
        value: '巴洛克风格'
      }, {
        name: "超现实主义",
        pic_url: "xcx/com/message_center/%E8%B6%85%E7%8E%B0%E5%AE%9E%E4%B8%BB%E4%B9%89.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg12.png',
        value: '超现实主义'
      }, {
        name: "水彩画",
        pic_url: "xcx/com/message_center/%E6%B0%B4%E5%BD%A9%E7%94%BB.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg13.png',
        value: '水彩画'
      }, {
        name: "蒸汽波艺术",
        pic_url: "xcx/com/message_center/%E8%92%B8%E6%B1%BD%E6%B3%A2%E8%89%BA%E6%9C%AF.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg14.png',
        value: '蒸汽波艺术'
      }, {
        name: "油画",
        pic_url: "xcx/com/message_center/%E6%B2%B9%E7%94%BB.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg15.png',
        value: '油画'
      }, {
        name: "卡通画",
        pic_url: "xcx/com/message_center/%E5%8D%A1%E9%80%9A%E7%94%BB.png",
        bgcImg: '/xcx/com/message_center/bdbgcImg16.png',
        value: '卡通画'
      }],
      wx_timer: 0,
      wx_t_time: 0,
      wx_desc: '',
      wx_msgLoad: false,
      wxList: [],
      isWx: true,
      wxTypeList: [{
        name: "默认",
        pic_url: "xcx/com/message_center/tong.png",
        value: '<auto>',
        bgcImg: '/xcx/com/message_center/bgcImg1.png'
      }, {
        name: "扁平插画",
        pic_url: "xcx/com/message_center/%E6%89%81%E5%B9%B3%E6%8F%92%E7%94%BB.png",
        value: '<flat illustration>',
        bgcImg: '/xcx/com/message_center/bgcImg2.png'
      }, {
        name: "中国画",
        pic_url: "xcx/com/message_center/%E4%B8%AD%E5%9B%BD%E7%94%BB.png",
        value: '<chinese painting>',
        bgcImg: '/xcx/com/message_center/bgcImg3.png'
      }, {
        name: "素描",
        pic_url: "xcx/com/message_center/%E7%B4%A0%E6%8F%8F.png",
        value: '<sketch>',
        bgcImg: '/xcx/com/message_center/bgcImg4.png'
      }, {
        name: "水彩",
        pic_url: "xcx/com/message_center/%E6%B0%B4%E5%BD%A9.png",
        value: '<watercolor>',
        bgcImg: '/xcx/com/message_center/bgcImg5.png'
      }, {
        name: "油画",
        pic_url: "xcx/com/message_center/%E6%B2%B9%E7%94%BB.png",
        value: '<oil painting>',
        bgcImg: '/xcx/com/message_center/bgcImg6.png'
      }, {
        name: "动画",
        pic_url: "xcx/com/message_center/%E5%8A%A8%E7%94%BB.png",
        value: '<anime>',
        bgcImg: '/xcx/com/message_center/bgcImg7.png'
      }, {
        name: "3D卡通",
        pic_url: "xcx/com/message_center/3D%E5%8D%A1%E9%80%9A.png",
        value: '<3d cartoon>',
        bgcImg: '/xcx/com/message_center/bgcImg8.png'
      }
      // {
      // 	name: "人像写真",
      // 	pic_url: "xcx/com/message_center/%E4%BA%BA%E5%83%8F%E5%86%99%E7%9C%9F.png",
      // 	value: '<portrait>',
      // 	bgcImg:'/xcx/com/message_center/bgcImg9.png'
      // },
      // {
      // 	name: "摄影",
      // 	pic_url: "xcx/com/message_center/%E6%91%84%E5%BD%B1.png",
      // 	value: '<photography>',
      // 	bgcImg:'/xcx/com/message_center/bgcImg10.png'
      // }
      ],

      hs_timer: 0,
      hs_t_time: 0,
      hs_desc: '',
      hs_msgLoad: false,
      hsList: [],
      isHs: true,
      hsTypeList: [{
        name: "立体风",
        pic_url: "xcx/com/message_center/%E7%AB%8B%E4%BD%93%E9%A3%8E.png",
        bgcImg: '/xcx/com/message_center/hsbgcImg1.png',
        value: 'cubism'
      }, {
        name: "现代风",
        pic_url: "xcx/com/message_center/%E7%8E%B0%E4%BB%A3%E9%A3%8E.png",
        bgcImg: '/xcx/com/message_center/hsbgcImg2.png',
        value: 'contemporary'
      }, {
        name: "卡通风",
        pic_url: "xcx/com/message_center/3D%E5%8D%A1%E9%80%9A.png",
        bgcImg: '/xcx/com/message_center/hsbgcImg3.png',
        value: 'cartoon'
      }, {
        name: "铅笔画风",
        pic_url: "xcx/com/message_center/%E9%93%85%E7%AC%94%E7%94%BB%E9%A3%8E.png",
        bgcImg: '/xcx/com/message_center/hsbgcImg4.png',
        value: 'pencil'
      }],
      sd_timer: 0,
      sd_t_time: 0,
      sd_desc: '',
      sd_draw_time: 0,
      sd_msgLoad: false,
      modelShow: false,
      modelList: [],
      modelValue: '',
      modelIndex: '',
      StableDiffusionList: [],
      sd_wait: 0,
      sd_complete: '',
      // 反向提示词
      sd_show: false,
      samplerShow: false,
      sdText: '',
      sdHideText: '',
      imgList: [],
      //用于图生图
      sd_type: 1,
      //用于选择画图类型
      sd_photo_type: 1,
      queryIndex: 0,
      //用于选中风格
      isSd: true,
      //防点击
      samplerList: [[{
        label: 'Euler a',
        id: 1
      }, {
        label: 'Euler',
        id: 2
      }, {
        label: 'LMS',
        id: 3
      }, {
        label: 'LMS Karras',
        id: 4
      }, {
        label: 'DDIM',
        id: 5
      }, {
        label: 'Heun',
        id: 6
      }, {
        label: 'DPM fast',
        id: 7
      }, {
        label: 'DPM adaptive',
        id: 8
      }, {
        label: 'DPM2',
        id: 9
      }, {
        label: 'DPM2 aDPM2 Karras',
        id: 10
      }, {
        label: 'DPM2 a Karras',
        id: 11
      }, {
        label: 'DPM++ 2S a',
        id: 12
      }, {
        label: 'DPM++ 2M',
        id: 13
      }, {
        label: 'DPM++ SDE',
        id: 14
      }, {
        label: 'DPM++ 2S a Karras',
        id: 15
      }, {
        label: 'DPM++ 2M Karras',
        id: 16
      }, {
        label: 'DPM++ SDE Karras',
        id: 17
      }, {
        label: 'DPM++ 2M SDE Karras',
        id: 18
      }]],
      samplerValue: 'Euler a',
      active: 0,
      chat_type: 9,
      chatType: 'Stable Diffusion',
      isuser: true,
      avatar: '',
      userInfo: "",
      dallshow: false,
      selectDone: 0,
      size: '',
      sizeIndex: 0,
      query_type: 1,
      noticeList: [],
      dallList: [{
        id: '256x256',
        size: '256x256',
        type: 'zheng'
      }, {
        id: '512x512',
        size: '512x512',
        type: 'zheng'
      }, {
        id: '1024x1024',
        size: '1024x1024',
        type: 'zheng'
      }],
      sdList: [{
        id: '512*512',
        size: '512*512',
        type: 'zheng'
      }, {
        id: '512*768',
        size: '512*768',
        type: 'gao'
      }, {
        id: '768*512',
        size: '768*512',
        type: 'chang'
      }],
      bdList: [{
        id: '1024*1024',
        size: '1024*1024',
        type: 'zheng'
      }, {
        id: '1024*1536',
        size: '1024*1536',
        type: 'gao'
      }, {
        id: '1536*1024',
        size: '1536*1024',
        type: 'chang'
      }],
      tyList: [{
        id: '1024*1024',
        size: '1024*1024',
        type: 'zheng'
      }, {
        id: '1280*720',
        size: '1280*720',
        type: 'chang'
      }, {
        id: '720*1280',
        size: '720*1280',
        type: 'gao'
      }],
      show: false,
      isBtn: false,
      topHeight: 0,
      askShow: true,
      billList: '',
      sdImg: global.baseImg + '/xcx/ca67317a-cbc1-4890-a3ce-c1b472785b0a.jpg',
      bdImg: global.baseImg + '/xcx/15087c8c-2bf9-47dd-9180-c808e9581b9d.jpg',
      mjImg: global.baseImg + '/xcx/8ab69c49-a00f-4b2b-8a92-b1424b61329b.jpg',
      dellImg: global.baseImg + '/xcx/ea8ddcf6-06aa-4938-96f6-3dac84dd21e6.jpg',
      waitImg: global.baseImg + '/xcx/c4a8054e-50bd-4790-a3cb-ec585412daa7.jpg',
      pic_tem: ''
    };
  },
  onShow: function onShow() {
    // this.userInfo = JSON.parse(uni.getStorageSync('userInfo'));
    this.isuser = true; // 清空所有登录或升级会员提示
    this.msg = '';
    this.isPosition = false, this.keyHeight = 0;
    // console.log(this.keyHeight,78888)
    // uni.showTabBar({
    // 	// animation: true
    // })

    uni.setStorageSync('session_code2', '');
    uni.setStorageSync('chat_group_code2', '');
    uni.setStorageSync('session_code3', '');
    uni.setStorageSync('chat_group_code3', '');
    uni.setStorageSync('session_code6', '');
    uni.setStorageSync('chat_group_code6', '');
    uni.setStorageSync('session_code9', '');
    uni.setStorageSync('chat_group_code9', '');
    var index = uni.getStorageSync('active');
    // console.log(index,333)
    if (index == 3) {
      this.active = 1;
      this.chat_type = 3;
      this.chatType = '百度';
      this.msg = uni.getStorageSync('drawInfo');
      this.modelList = this.bdTypeList;
      this.modelValue = this.bdTypeList[0].name;
      this.modelIndex = this.bdTypeList[0].value;
      this.sd_type = 1;
    } else if (index == 14) {
      this.active = 2;
      this.chat_type = 14;
      this.chatType = '火山引擎';
      this.msg = uni.getStorageSync('drawInfo');
      this.modelList = this.hsTypeList;
      this.modelValue = this.hsTypeList[0].name;
      this.modelIndex = this.hsTypeList[0].value;
      this.sd_type = 1;
    } else if (index == 13 || index == '') {
      this.active = 0;
      this.chat_type = 13;
      this.chatType = '通义万相';
      this.msg = uni.getStorageSync('drawInfo');
      this.modelList = this.wxTypeList;
      this.modelValue = this.wxTypeList[0].name;
      this.modelIndex = this.wxTypeList[0].value;
      this.sd_type = 1;
    }
    if (this.chat_type == 3) {
      if (this.baiduList.length == 0) {
        this.askShow = true;
      } else {
        this.askShow = false;
      }
      this.size = '1024*1024';
    } else if (this.chat_type == 13) {
      if (this.wxList.length == 0) {
        this.askShow = true;
      } else {
        this.askShow = false;
      }
      this.size = '1024*1024';
    } else if (this.chat_type == 14) {
      if (this.hsList.length == 0) {
        this.askShow = true;
      } else {
        this.askShow = false;
      }
      this.size = '';
    }
    if (uni.getStorageSync('history_code') != '') {
      this.historySession(uni.getStorageSync('history_code'));
      this.askShow = false;
    }
    this.getDrawRecommend(); // 获取问题集

    this.userInfo = JSON.parse(uni.getStorageSync('userInfo'));
    var avatarUrl = global.baseImg + '/' + uni.getStorageSync("avatarUrl");
    this.avatar = avatarUrl;
    var that = this;
    uni.createSelectorQuery().select(".head_cont").boundingClientRect(function (res) {
      //定位到你要的class的位置

      // console.log(res.height,410)
      // that.topHeight = parseInt(res.height) + 20;
      that.topHeight = parseInt(res.height);
      that.msgListHeight = that.screenHeight - uni.upx2px(100) - res.height;
      // 获取公告
      // if(uni.getStorageSync('noticeInfo') != '') {
      // 	that.noticeList = uni.getStorageSync('noticeInfo')
      // 	that.topHeight = that.topHeight + 40;
      // }
    }).exec();
  },
  onLoad: function onLoad(option) {
    var _this = this;
    var safeH = this.isPhoneX() ? 34 : 0;
    // 获取tabbar高度,单位px
    uni.getSystemInfo({
      success: function success(res) {
        var bottom = res.screenHeight - res.windowHeight - res.statusBarHeight;
        _this.barHeight = bottom / 2;
        // console.log(this.barHeight, 25)
      }
    });

    // 获取屏幕高度
    uni.getSystemInfo({
      success: function success(res) {
        _this.screenHeight = res.windowHeight;
        // 100为底部输入栏高度，单位rpx，需要先转成px
        // this.msgListHeight = this.screenHeight - uni.upx2px(100)
        // console.log(this.msgListHeight,777);
      }
    });
  },
  onHide: function onHide() {},
  methods: {
    // 获取问题集
    getDrawRecommend: function getDrawRecommend() {
      var _this2 = this;
      (0, _user.getDrawRecommend)().then(function (res) {
        if (res.code == 20000) {
          _this2.billList = res.data[Math.floor(Math.random() * 23)];
          _this2.pic_desc = _this2.billList.pic_desc;
          _this2.pic_url = _this2.billList.pic_url;
          if (_this2.msg != '') {
            _this2.toAsk();
          }
        } else {
          _this2.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this2.$api.msg('获取失败！');
      });
    },
    historySession: function historySession(session) {
      var _this3 = this;
      var data = JSON.parse(session);
      if (data.type == 3) {
        this.active = 1;
        this.chat_type = 3;
        this.baiduList = [];
      } else if (data.type == 13) {
        this.active = 0;
        this.chat_type = 13;
        this.wxList = [];
      } else if (data.type == 14) {
        this.active = 2;
        this.chat_type = 14;
        this.hsList = [];
      }
      this.askShow = false;
      this.$forceUpdate();
      if (data.type < 13 && data.type != 3) {
        (0, _chat.chat_session)(data.code).then(function (res) {
          if (res.code == 20000) {
            var arr = res.data;
            arr.forEach(function (item, index) {
              _this3.chat_type = item.chat_type;
              if (index == arr.length - 2) {
                _this3.msg = item.content;
                if (item.images == null) {
                  item.images = [];
                }
                _this3.sd_type = 1;
                if (data.type == 3) {
                  _this3.modelList = _this3.bdTypeList;
                  _this3.modelList.forEach(function (res, tip) {
                    // 选中相应风格
                    if (res.value == item.style) {
                      _this3.queryIndex = tip;
                    }
                  });
                }
              }
              if (index == arr.length - 1) {
                var url = {
                  url: global.baseImg + '/' + item.content
                };
                var img_urls = [];
                img_urls.push(url);
                var _data = {
                  image_urls: img_urls,
                  session_code: item.session_code,
                  chat_group_code: item.chat_group_code,
                  is_like: item.is_likes
                };
              }
            });
            // this.askShow = false;
            // this.toBottom();

            uni.setStorageSync('history_code', '');
          } else {
            _this3.$api.msg(res.msg);
          }
        }).catch(function (err) {
          _this3.$api.msg('获取会话失败！');
        });
      } else {
        (0, _user.getImgDetail)(data.code).then(function (res) {
          console.log(res, 8852);
          if (res.code == 20000) {
            var arr = res.data;
            arr.forEach(function (item, index) {
              _this3.chat_type = item.chat_type;
              if (index == arr.length - 2) {
                _this3.msg = item.prompt;
                if (item.images == null) {
                  item.images = [];
                }
                _this3.sd_type = 1;
                if (data.type == 13) {
                  _this3.modelList = _this3.wxTypeList;
                } else if (data.type == 14) {
                  _this3.modelList = _this3.hsTypeList;
                } else if (data.type == 3) {
                  _this3.modelList = _this3.bdTypeList;
                }
                _this3.modelList.forEach(function (res, tip) {
                  // 选中相应风格
                  if (res.value == item.style) {
                    _this3.queryIndex = tip;
                  }
                });
              }
              if (index == arr.length - 1) {
                var url = {
                  url: global.baseImg + '/' + item.result_image
                };
                var img_urls = [];
                img_urls.push(url);
                var _data2 = {
                  image_urls: img_urls,
                  session_code: item.image_code,
                  is_like: item.is_likes
                };
                if (_this3.chat_type == 13) {
                  _this3.wxList = [];
                  _this3.wxList.push(_data2);
                  _this3.modelList = _this3.wxTypeList;
                  _this3.modelValue = _this3.wxTypeList[0].name;
                  _this3.modelIndex = _this3.wxTypeList[0].value;
                  _this3.query_type = 1;
                }
                if (_this3.chat_type == 14) {
                  _this3.hsList = [];
                  _this3.hsList.push(_data2);
                  _this3.modelList = _this3.hsTypeList;
                  _this3.modelValue = _this3.hsTypeList[0].name;
                  _this3.modelIndex = _this3.hsTypeList[0].value;
                  _this3.query_type = 1;
                }
                if (_this3.chat_type == 3) {
                  _this3.baiduList = [];
                  _this3.baiduList.push(_data2);
                  _this3.modelList = _this3.bdTypeList;
                  _this3.modelValue = _this3.bdTypeList[0].name;
                  _this3.modelIndex = _this3.bdTypeList[0].value;
                  _this3.query_type = 1;
                }
              }
            });
            // this.askShow = false;
            // this.toBottom();

            uni.setStorageSync('history_code', '');
          } else {
            _this3.$api.msg(res.msg);
          }
        }).catch(function (err) {
          _this3.$api.msg('获取会话失败！');
        });
      }
    },
    copyFun: function copyFun(val) {
      uni.setClipboardData({
        data: val,
        //要被复制的内容
        success: function success() {
          //复制成功的回调函数
          uni.showToast({
            //提示
            title: '复制成功'
          });
        }
      });
    },
    isPhoneX: function isPhoneX() {
      var res = uni.getSystemInfoSync();
      var iphonex = false;
      var models = ['iphonex', 'iphonexr', 'iphonexsmax', 'iphone11', 'iphone11pro', 'iphone11promax'];
      var model = res.model.replace(/\s/g, "").toLowerCase();
      if (models.includes(model)) {
        iphonex = true;
      }
      return iphonex;
    },
    keyboardheight: function keyboardheight(e) {
      // console.log(e, '键盘高度变化33');
      if (e.detail.height == 0) {
        this.keyHeight = 0;
        // console.log(e);
        uni.showTabBar({
          // animation: true
        });
        // 定位到聊天最底部
        this.toBottom();
        this.isBtn = false;
      } else {
        this.isBtn = true;
      }
    },
    // 选择版本
    version: function version(val) {
      this.getDrawRecommend();
      this.isuser = true;
      if (val.name == '百度绘画') {
        this.active = 1;
        this.chat_type = 3;
        this.chatType = '百度';
        this.size = '1024*1024';
        this.sizeIndex = 0;
        this.sd_type = 1;
        this.query_type = 1;
        this.modelList = this.bdTypeList;
        this.modelValue = this.bdTypeList[0].name;
        this.modelIndex = this.bdTypeList[0].value;
        if (this.baiduList.length == 0) {
          this.askShow = true;
        } else {
          this.askShow = false;
        }
        if (this.bd_timer > 0) {
          if (this.baiduList[this.baiduList.length - 1].time == undefined) {
            this.bd_msgLoad = true;
          } else {
            this.bd_msgLoad = false;
          }
        } else {
          this.bd_msgLoad = false;
        }
      } else if (val.name == '通义万相') {
        this.active = 0;
        this.chat_type = 13;
        this.chatType = '通义万相';
        this.size = '1024*1024';
        this.sizeIndex = 0;
        this.query_type = 1;
        this.modelList = this.wxTypeList;
        this.modelValue = this.wxTypeList[0].name;
        this.modelIndex = this.wxTypeList[0].value;
        if (this.wxList.length == 0) {
          this.askShow = true;
        } else {
          this.askShow = false;
        }
        // console.log(this.mj_timer,9995)
        if (this.wx_timer > 0) {
          if (this.wxList[this.wxList.length - 1].time == undefined) {
            this.wx_msgLoad = true;
          } else {
            this.wx_msgLoad = false;
          }
        } else {
          this.wx_msgLoad = false;
        }
      } else if (val.name == '火山引擎') {
        this.active = 2;
        this.chat_type = 14;
        this.chatType = '火山引擎';
        this.size = '';
        this.sizeIndex = 0;
        this.query_type = 1;
        this.modelList = this.hsTypeList;
        this.modelValue = this.hsTypeList[0].name;
        this.modelIndex = this.hsTypeList[0].value;
        if (this.hsList.length == 0) {
          this.askShow = true;
        } else {
          this.askShow = false;
        }
        // console.log(this.mj_timer,9995)
        if (this.hs_timer > 0) {
          if (this.hsList[this.hsList.length - 1].time == undefined) {
            this.hs_msgLoad = true;
          } else {
            this.hs_msgLoad = false;
          }
        } else {
          this.hs_msgLoad = false;
        }
      }
    },
    savePhoto: function savePhoto(url) {
      uni.showLoading({
        title: '下载中'
      });
      console.log(url, '我是下载URL');
      var that = this;
      uni.downloadFile({
        url: url,
        //下载地址接口，注意：这里的图片的下载链接可直接在浏览器打开下载的
        success: function success(data) {
          if (data.statusCode === 200) {
            uni.saveImageToPhotosAlbum({
              filePath: data.tempFilePath,
              success: function success() {
                //提示保存成功
                console.log('成功了');
                uni.hideLoading();
                setTimeout(function () {
                  uni.showToast({
                    title: '保存成功',
                    duration: 2000
                  });
                }, 500);
              },
              fail: function fail(res) {
                //失败关闭提示信息！！！
                uni.hideLoading();
                setTimeout(function () {
                  uni.showToast({
                    icon: 'none',
                    title: '下载失败',
                    duration: 2000
                  });
                }, 500);
                console.log("下载失败", res);
              },
              complete: function complete(res) {
                //隐藏提示
                uni.hideLoading();
                // uni.showToast({
                // 	icon: 'none',
                // 	title: '下载失败',
                // 	duration: 2000
                // })
              }
            });
          }
        },

        fail: function fail(err) {
          console.log(err, 'err');
          uni.showToast({
            icon: 'none',
            mask: true,
            title: '失败请重新下载'
          });
        }
      });
    },
    focusTexts: function focusTexts(event) {
      var _this4 = this;
      if (this.isBtn) {
        uni.hideTabBar({
          // animation: true
        });
        this.isPosition = true;
        this.keyHeight = event.detail.height;
        console.log(event.detail.height, 'event.detail.height');
        var messageH = uni.createSelectorQuery().select(".textadd");
        this.$nextTick(function () {
          messageH.boundingClientRect(function (data) {
            // this.keyboardHeight = this.keyHeight - this.barHeight; //减去底部导航的高度
            _this4.keyboardHeight = _this4.keyHeight;
            _this4.msgListHeight = _this4.screenHeight - _this4.keyboardHeight - uni.upx2px(110);
            // this.msgListHeight = this.screenHeight - this.keyboardHeight
          }).exec();
        });
        this.toBottom();
      } else {
        this.isPosition = false;
        this.keyHeight = 0;
      }
    },
    getValue: function getValue() {
      this.isPosition = false;
      this.keyboardHeight = 0;
      this.keyHeight = 0;
      // uni.hideKeyboard();
      uni.showTabBar({
        // animation: true
      });
      // console.log(this.chat_type,5621)
    },
    toBottom: function toBottom() {
      console.log('出发了');
      var that = this;
      this.$nextTick(function () {
        setTimeout(function () {
          uni.createSelectorQuery().select(".textadd").boundingClientRect(function (res) {
            //定位到你要的class的位置
            // console.log(res,330);
            console.log(res.height, 410);
            uni.pageScrollTo({
              scrollTop: res.height,
              duration: 0
            });
          }).exec();
        }, 0);
      });
    },
    sendMsg: function sendMsg() {
      var this_ = this;
      this.isPosition = false;
      this.draw_tip = false;

      // 消息为空不做任何操作
      if (this.msg.trim() == "") {
        this.$api.msg('请输入您要发送的内容');
        return;
      }
      this.askShow = false; // 关闭应用助理提示热词
      this.isuser = true;
      this.submit();
    },
    submit: function submit() {
      uni.setStorageSync('drawInfo', '');
      if (this.chat_type == 3) {
        if (!this.isBd) {
          return;
        }
        this.isBd = false;
        this.baiduList = [];
        // 清除消息
        this.bd_msgLoad = true;
        this.baiduDraw();
      } else if (this.chat_type == 13) {
        if (!this.isWx) {
          return;
        }
        this.isWx = false;
        this.wxList = [];

        // 清除消息
        this.wx_msgLoad = true;
        this.wxDraw();
      } else if (this.chat_type == 14) {
        if (!this.isHs) {
          return;
        }
        this.isHs = false;
        this.hsList = [];

        // 清除消息
        this.hs_msgLoad = true;
        this.hsDraw();
      }
    },
    // 百度绘画
    baiduDraw: function baiduDraw() {
      var _this5 = this;
      var data = {
        "chat_type": '3',
        "action_type": 3,
        "prompt": this.msg,
        "n": 1,
        "size": this.size,
        "style": this.modelIndex,
        "model": 'txt2img'
      };
      this.isTime = true; // 思考中
      this.bd_timer = 0;
      this.bd_t_time = setInterval(function () {
        _this5.bd_timer += 1;
      }, 1000);
      this.msg = ''; // 清空发送栏内容
      this.query_type = 1;
      (0, _user.asyncImg)(data).then(function (res) {
        var that = _this5;
        console.log(res, 489);
        if (res.code == 20000) {
          var datas = {
            "task_id": res.data.task_id
          };
          var request_count = 0;
          that.draw_time = setInterval(function () {
            if (request_count < 51) {
              // 最多轮询50次
              (0, _user.getTextImg)(datas).then(function (val) {
                // console.log(resposne);
                if (val.code == 20000) {
                  request_count += 1;
                  if (val.data != null) {
                    if (val.data[0].status != 1) {
                      that.isuser = true;
                      var img_urls = [];
                      var url_val = {
                        url: global.baseImg + '/' + val.data[0].result_image
                      };
                      img_urls.push(url_val);
                      // console.log(val.data[0].content, 885)
                      var obj = {
                        "create_time": val.data[0].create_time,
                        "finish_reason": "stop",
                        "session_code": val.data[0].session_code,
                        "chat_group_code": val.data[0].chat_group_code,
                        "size": val.data[0].size,
                        "role": "assistant",
                        "image_urls": img_urls,
                        "time": that.bd_timer,
                        "is_like": 0
                      };
                      var img_arr = [];
                      img_arr.push(obj);
                      if (that.baiduList.length == 0) {
                        that.baiduList = img_arr;
                      }
                      // that.baiduList.push(obj);
                      that.bd_msgLoad = false;
                      that.isTime = false;
                      that.isBd = true;
                      clearInterval(that.bd_t_time);
                      clearInterval(that.draw_time);
                      // 定位到聊天最底部
                      // that.toBottom();

                      uni.setStorageSync('session_code3', val.data[0].session_code);
                      uni.setStorageSync('chat_group_code3', val.data[0].chat_group_code);
                      // let save_val = {
                      // 	"type_name": "百度绘画",
                      // 	"type_code": "image",
                      // 	"title": data.content,
                      // 	"eid": val.data[0].image_code,
                      // 	"image_url": val.data[0].result_image
                      // }

                      // that.saveFootprint(save_val)
                    } else {
                      that.bd_msgLoad = false;
                      that.isTime = false;
                      clearInterval(that.bd_t_time);
                      clearInterval(that.draw_time);
                      that.$api.msg('生成图片失败，稍后重试');
                      that.askShow = true;
                      that.isBd = true;
                    }
                  }
                } else {
                  that.bd_msgLoad = false;
                  that.isTime = false;
                  clearInterval(that.bd_t_time);
                  clearInterval(that.draw_time);
                  that.$api.msg(res.msg);
                  that.askShow = true;
                  that.isBd = true;
                }
              });
            } else {
              that.bd_msgLoad = false;
              that.isTime = false;
              clearInterval(that.bd_t_time);
              clearInterval(that.draw_time);
              that.$api.msg('请求超时，稍后继续');
              that.askShow = true;
              that.isBd = true;
            }
          }, 2000);
        } else if (res.code < 49999) {
          that.isuser = false;
          that.bd_msgLoad = false;
          that.isBd = true;
          // that.isTime = false;
          clearInterval(that.bd_t_time);
          clearInterval(that.draw_time);
          // that.$api.msg(res.msg)
          that.bd_desc = res.msg;
          if (res.code == 40022) {
            that.draw_tip = true;
          } else {
            that.draw_tip = false;
          }
        } else {
          that.bd_msgLoad = false;
          that.isTime = false;
          clearInterval(that.bd_t_time);
          clearInterval(that.draw_time);
          that.$api.msg(res.msg);
          that.askShow = true;
          that.isBd = true;
        }
      }).catch(function (err) {
        that.bd_msgLoad = false;
        that.isTime = false;
        clearInterval(that.bd_t_time);
        clearInterval(that.draw_time);
        that.$api.msg('绘图失败');
        that.askShow = true;
        that.isBd = true;
      });
    },
    // 万相绘画
    wxDraw: function wxDraw() {
      var data = {
        "chat_type": '13',
        "action_type": 3,
        "prompt": this.msg,
        "size": this.size,
        "n": 1,
        "style": this.modelIndex
      };
      var that = this;
      that.wx_timer = 0;
      that.wx_t_time = setInterval(function () {
        that.wx_timer += 1;
      }, 1000);
      that.msg = ''; // 清空发送栏内容
      that.query_type = 1;
      // uni.showLoading({
      // 	title: '生成中...'
      // })
      (0, _user.createImg)(data).then(function (res) {
        if (res.code == 20000) {
          var img_urls = [];
          var url_val = {
            url: global.baseImg + '/' + res.data.results[0].result_image
          };
          img_urls.push(url_val);
          var obj = {
            "finish_reason": "stop",
            "size": res.data.results[0].size,
            "role": "assistant",
            "image_urls": img_urls,
            "time": that.wx_timer,
            "is_like": 0,
            "msg_code": res.data.results[0].msg_code,
            "image_code": res.data.image_code
          };
          var img_arr = [];
          img_arr.push(obj);

          // that.StableDiffusionList.push(obj);
          if (that.wxList.length == 0) {
            that.wxList = img_arr;
          }

          // 定位到聊天最底部
          // that.toBottom();
          that.isuser = true;
          that.wx_msgLoad = false;
          clearInterval(that.wx_t_time);
          // let save_val = {
          // 	"type_name": "Midjourney",
          // 	"type_code": "image",
          // 	"title": data.content,
          // 	"eid": val.data[0].session_code,
          // 	"image_url": val.data[0].content
          // }

          // that.saveFootprint(save_val)
        } else if (res.code < 49999) {
          that.isuser = false;
          that.wx_msgLoad = false;
          that.isWx = true;
          // that.isTime = false;
          clearInterval(that.wx_t_time);
          // that.$api.msg(res.msg)
          that.wx_desc = res.msg;
          if (res.code == 40022) {
            that.draw_tip = true;
          } else {
            that.draw_tip = false;
          }
          uni.hideLoading();
        } else {
          that.wx_msgLoad = false;
          // that.isTime = false;
          clearInterval(that.wx_t_time);
          that.$api.msg(res.msg);
          that.askShow = true;
          that.isWx = true;
        }
      }).catch(function (err) {
        that.wx_msgLoad = false;
        // that.isTime = false;
        clearInterval(that.wx_t_time);
        that.$api.msg('绘图失败');
        that.askShow = true;
        that.isWx = true;
        uni.hideLoading();
      });
    },
    // 火山引擎
    hsDraw: function hsDraw() {
      var data = {
        "chat_type": '14',
        "action_type": 3,
        "prompt": this.msg,
        "size": '',
        "n": 1,
        "style": this.modelIndex
      };
      var that = this;
      that.hs_timer = 0;
      that.hs_t_time = setInterval(function () {
        that.hs_timer += 1;
      }, 1000);
      that.msg = ''; // 清空发送栏内容
      that.query_type = 1;
      (0, _user.createImg)(data).then(function (res) {
        if (res.code == 20000) {
          var img_urls = [];
          var url_val = {
            url: global.baseImg + '/' + res.data.results[0].result_image
          };
          img_urls.push(url_val);
          var obj = {
            "finish_reason": "stop",
            "size": res.data.results[0].size,
            "role": "assistant",
            "image_urls": img_urls,
            "time": that.hs_timer,
            "is_like": 0,
            "msg_code": res.data.results[0].msg_code,
            "image_code": res.data.image_code
          };
          var img_arr = [];
          img_arr.push(obj);

          // that.StableDiffusionList.push(obj);
          if (that.hsList.length == 0) {
            that.hsList = img_arr;
          }

          // 定位到聊天最底部
          // that.toBottom();
          that.isuser = true;
          that.hs_msgLoad = false;
          clearInterval(that.hs_t_time);
          // let save_val = {
          // 	"type_name": "Midjourney",
          // 	"type_code": "image",
          // 	"title": data.content,
          // 	"eid": val.data[0].session_code,
          // 	"image_url": val.data[0].content
          // }

          // that.saveFootprint(save_val)

          that.isHs = true;
        } else if (res.code < 49999) {
          that.isuser = false;
          that.hs_msgLoad = false;
          that.isHs = true;
          // that.isTime = false;
          clearInterval(that.hs_t_time);
          // that.$api.msg(res.msg)
          that.hs_desc = res.msg;
          if (res.code == 40022) {
            that.draw_tip = true;
          } else {
            that.draw_tip = false;
          }
        } else {
          that.hs_msgLoad = false;
          // that.isTime = false;
          clearInterval(that.hs_t_time);
          that.$api.msg(res.msg);
          that.askShow = true;
          that.isHs = true;
        }
      }).catch(function (err) {
        that.hs_msgLoad = false;
        // that.isTime = false;
        clearInterval(that.hs_t_time);
        that.$api.msg('绘图失败');
        that.askShow = true;
        that.isHs = true;
      });
    },
    // sd绘画
    sdDraw: function sdDraw() {
      var data = {
        "chat_type": '9',
        "action_type": '3',
        "content": this.sdText,
        "content_zh": this.msg,
        "negative_prompt": this.sdHideText,
        "negative_prompt_zh": this.sd_complete,
        "sd_model_checkpoint": this.modelIndex,
        "sampler_index": this.samplerValue,
        "size": this.size,
        "session_code": ''
      };
      if (this.imgList.length > 0) {
        if (this.sd_type == 2) {
          data.action_type = '5', data.images = this.imgList;
        } else {
          data.action_type = '3';
          data.images = [];
          this.imgList = [];
        }
      }
      var that = this;
      that.sd_timer = 0;
      that.sd_t_time = setInterval(function () {
        that.sd_timer += 1;
      }, 1000);
      that.msg = ''; // 清空发送栏内容
      that.sd_complete = '';
      that.sdHideText = '';
      that.query_type = 1;
      // that.imgList = [];
      (0, _chat.sdDraw)(data).then(function (res) {
        // console.log(res, 489)
        if (res.code == 20000) {
          var datas = {
            "tag": res.data.tag
          };
          var request_count = 0;
          that.sd_draw_time = setInterval(function () {
            if (request_count < 101) {
              // 最多轮询100次
              (0, _chat.getSdDraw)(datas).then(function (val) {
                // console.log(resposne);
                if (val.code == 20000) {
                  request_count += 1;
                  if (val.data != null) {
                    that.isSd = true;
                    if (val.data[0].is_mod == 1) {
                      that.$api.msg('您的输入涉及不良内容，请勿发布违规信息，请注意文明用语。');
                    }
                    if (val.data[0].status == 0) {
                      var img_urls = [];
                      var url_val = {
                        url: global.baseImg + '/' + val.data[0].content
                      };
                      img_urls.push(url_val);
                      // console.log(img_urls,886)
                      // console.log(val.data[0].content, 885)
                      var obj = {
                        "create_time": val.data[0].create_time,
                        "finish_reason": "stop",
                        "session_code": val.data[0].session_code,
                        "chat_group_code": val.data[0].chat_group_code,
                        "size": val.data[0].size,
                        "role": "assistant",
                        "image_urls": img_urls,
                        "time": that.sd_timer,
                        "is_mod": val.data[0].is_mod,
                        "is_like": 0
                      };
                      var img_arr = [];
                      img_arr.push(obj);

                      // that.StableDiffusionList.push(obj);
                      if (that.StableDiffusionList.length == 0) {
                        that.StableDiffusionList = img_arr;
                      }

                      // 定位到聊天最底部
                      // that.toBottom();
                      that.isuser = true;
                      that.sd_msgLoad = false;
                      clearInterval(that.sd_t_time);
                      clearInterval(that.sd_draw_time);
                      uni.setStorageSync('session_code9', val.data[0].session_code);
                      uni.setStorageSync('chat_group_code9', val.data[0].chat_group_code);
                      var save_val = {
                        "type_name": "Stable Diffusion",
                        "type_code": "image",
                        "title": data.content_zh,
                        "eid": val.data[0].session_code,
                        "image_url": val.data[0].content
                      };
                      that.saveFootprint(save_val);
                    } else if (val.data[0].status == 1) {
                      that.sd_msgLoad = false;
                      clearInterval(that.sd_t_time);
                      clearInterval(that.sd_draw_time);
                      that.$api.msg('生成失败，本次不消耗绘画次数');
                      that.askShow = true;
                      that.isSd = true;
                    }
                  }
                } else {
                  that.sd_msgLoad = false;
                  // that.isTime = false;
                  clearInterval(that.sd_t_time);
                  clearInterval(that.sd_draw_time);
                  that.$api.msg(res.msg);
                  that.askShow = true;
                  that.isSd = true;
                }
              });
            } else {
              that.sd_msgLoad = false;
              // that.isTime = false;
              clearInterval(that.sd_t_time);
              clearInterval(that.sd_draw_time);
              that.$api.msg('等待时间过长，请稍后前往历史记录查看');
              that.askShow = true;
              that.isSd = true;
            }
          }, 2000);
        } else if (res.code < 49999) {
          that.isuser = false;
          that.sd_msgLoad = false;
          that.isSd = true;
          // that.isTime = false;
          clearInterval(that.sd_t_time);
          clearInterval(that.sd_draw_time);
          // that.$api.msg(res.msg)
          that.sd_desc = res.msg;
          if (res.code == 40022) {
            that.draw_tip = true;
          } else {
            that.draw_tip = false;
          }
        } else {
          that.sd_msgLoad = false;
          // that.isTime = false;
          clearInterval(that.sd_t_time);
          clearInterval(that.sd_draw_time);
          that.$api.msg(res.msg);
          that.askShow = true;
          that.isSd = true;
        }
      }).catch(function (err) {
        that.sd_msgLoad = false;
        // that.isTime = false;
        clearInterval(that.sd_t_time);
        clearInterval(that.sd_draw_time);
        that.$api.msg('绘图失败');
        that.askShow = true;
        that.isSd = true;
      });
    },
    sendMsg2: function sendMsg2() {
      this.$api.msg('当前问题还没回答完毕，请稍后再提问！');
    },
    hideKey: function hideKey() {
      uni.hideKeyboard();
    },
    goMember: function goMember() {
      var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
      if (userInfo.role == 'guess') {
        uni.navigateTo({
          url: '/pages/login/login'
        });
      } else {
        uni.navigateTo({
          url: '/pages/user/vip/vip'
        });
      }
    },
    goToLogin: function goToLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      });
    },
    dallClose: function dallClose() {
      this.dallshow = false;
    },
    dallOpen: function dallOpen() {
      this.dallshow = true;
    },
    selectSize: function selectSize(size, index) {
      this.size = size;
      this.selectDone = index;
    },
    selectTip: function selectTip(val) {
      this.type_tip = val;
    },
    toHistory: function toHistory() {
      uni.navigateTo({
        url: '/pages/user/history/history?active=1'
      });
    },
    // 开启新会话
    addDraw1: function addDraw1() {
      uni.setStorageSync('session_code3', '');
      uni.setStorageSync('chat_group_code3', '');
      this.baiduList = [];
      this.askShow = true;
      this.msg = '';
    },
    addDraw2: function addDraw2() {
      uni.setStorageSync('session_code6', '');
      uni.setStorageSync('chat_group_code6', '');
      this.wxList = [];
      this.askShow = true;
      this.msg = '';
    },
    addDraw3: function addDraw3() {
      this.hsList = [];
      this.askShow = true;
      this.msg = '';
    },
    // 前往提问
    toAsk: function toAsk() {
      // this.pic_url=global.baseImg+this.pic_tem
      this.msg = this.pic_desc;
    },
    //采样选择器
    samplerSubmit: function samplerSubmit(e) {
      this.samplerValue = e.value[0].label;
      this.samplerShow = false;
    },
    //模型选择
    modelSubmit: function modelSubmit(e) {
      this.modelIndex = e.value[0].value;
      this.modelValue = e.value[0].name;
      this.modelShow = false;
    },
    // sd反向提示词
    showFun: function showFun() {
      this.sd_show = false;
      this.getHideText();
    },
    // 发送图片预览
    openImg: function openImg(url) {
      var img_url = global.baseImg + '/' + url;
      uni.previewImage({
        urls: [img_url],
        current: 0
      });
    },
    // 图片预览
    checkImg: function checkImg(index, tip) {
      var url = '';
      if (this.chat_type == 3) {
        url = this.baiduList[index].image_urls;
        uni.setStorageSync('active', 1);
      } else if (this.chat_type == 13) {
        url = this.wxList[index].image_urls;
        uni.setStorageSync('active', 0);
      }
      var img_url = url[tip].url;
      // console.log(img_url,332)
      uni.previewImage({
        urls: [img_url],
        current: 0
      });
    },
    // 上传图片
    takePhoto: function takePhoto() {
      uni.setStorageSync('active', this.active);
      uni.navigateTo({
        url: '/childPage/chat/camera?chatValue=' + this.msg + '&source=2'
      });
    },
    getImgUrl: function getImgUrl(url) {
      return global.baseImg + '/' + url;
    },
    //sd选择类型
    selectType: function selectType(val) {
      this.sd_type = val;
      if (this.StableDiffusionList.length == 0 && !this.sd_msgLoad) {
        this.askShow = true;
      } else {
        this.askShow = false;
        this.sd_photo_type = 2;
      }
      if (this.StableDiffusionList.length > 0 && this.imgList.length > 0) {
        this.askShow = true;
      }
      if (this.StableDiffusionList.length > 0 && this.imgList.length == 0) {
        this.askShow = false;
        this.sd_photo_type = 2;
      }
      if (val == 2) {
        this.sd_photo_type = 1;
      }
    },
    photoType: function photoType(val) {
      this.sd_photo_type = val;
      if (this.StableDiffusionList.length > 0) {
        this.askShow = false;
      }
    },
    //选择参数
    queryType: function queryType(val) {
      this.query_type = val;
    },
    // 查看提示
    checkTip: function checkTip() {
      var content = '选择效果: 将生成和效果封面类似的风格或主题图片';
      uni.showModal({
        content: content,
        confirmText: "知道了",
        showCancel: false
      });
    },
    checkSelect: function checkSelect() {
      var content = '采样器就是一种图像自动化工具,可以对用户生成的图片进行相似风格处理优化';
      uni.showModal({
        content: content,
        confirmText: "知道了",
        showCancel: false
      });
    },
    //sd选择参数
    selctQuery: function selctQuery(index) {
      this.modelIndex = this.modelList[index].value;
      this.modelValue = this.modelList[index].name;
      this.queryIndex = index;
      this.pic_tem = this.modelList[index].bgcImg;
      console.log(this.pic_tem);
    },
    selctSize: function selctSize(size, index) {
      this.size = size;
      this.sizeIndex = index;
    },
    // 点赞点踩
    likeType: function likeType(val, index) {
      // console.log(val,'islike');
      // console.log(index,'chattype');
      // console.log(this.baiduList,7778)
      var data = {
        is_likes: val
      };
      if (index == 3) {
        data.session_code = this.baiduList[0].session_code;
        data.chat_group_code = this.baiduList[0].chat_group_code;
        this.baiduList[0].is_like = val;
      } else if (index == 13) {
        data.msg_code = this.wxList[0].msg_code;
        this.wxList[0].is_like = val;
      } else if (index == 14) {
        data.msg_code = this.hsList[0].msg_code;
        this.hsList[0].is_like = val;
      }
      if (index < 13) {
        (0, _chat.chat_likes)(data).then(function (res) {
          // uni.showToast({ //提示
          // 	title: '评价成功'
          // })
        });
      } else {
        (0, _user.likeList)(data).then(function (res) {
          // uni.showToast({ //提示
          // 	title: '评价成功'
          // })
        });
      }
    },
    // 保存到最近打开
    saveFootprint: function saveFootprint(data) {
      var _this6 = this;
      (0, _user.saveFootprint)(data).then(function (res) {
        if (res.code == 20000) {} else {
          _this6.$api.msg(res.msg);
        }
      }).catch(function (err) {
        _this6.$api.msg('保存失败！');
      });
    },
    toIdea: function toIdea() {
      uni.navigateTo({
        url: '/childPage/answer/answer'
      });
    },
    stopStart: function stopStart() {
      this.askShow = true;
      //bd
      clearInterval(this.bd_t_time);
      clearInterval(this.draw_time);
      this.bd_msgLoad = false;
      this.isBd = true;

      //sd
      clearInterval(this.sd_t_time);
      clearInterval(this.sd_draw_time);
      this.sd_msgLoad = false;
      this.isSd = true;

      //ty
      clearInterval(this.wx_t_time);
      // clearInterval(this.sd_draw_time)
      this.wx_msgLoad = false;
      this.isWx = true;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1020:
/*!**************************************************************************************************************!*\
  !*** F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=style&index=0&id=5ff8404d&scoped=true&lang=less& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./draw.vue?vue&type=style&index=0&id=5ff8404d&scoped=true&lang=less& */ 1021);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_draw_vue_vue_type_style_index_0_id_5ff8404d_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1021:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/childPage/draw/draw.vue?vue&type=style&index=0&id=5ff8404d&scoped=true&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 167:
/*!**************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c&scoped=true& */ 168);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 173);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b237504c",
  null,
  false,
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 168:
/*!*********************************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c&scoped=true& */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 169:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 1856))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var a0 = {
    height: "48px",
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 170:
/*!***************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 171);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _chat = __webpack_require__(/*! ../../apis/chat.js */ 165);
var _user = __webpack_require__(/*! @/apis/user.js */ 172);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      ideaImg: global.baseImg + '/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png',
      selectCheck: 0,
      getPhoneNumber: '',
      loginImg: global.baseImg + '/xcx/com/message_center/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%96%B0logo2.png'
    };
  },
  onShow: function onShow() {
    if (uni.getStorageSync('userInfo') == null || uni.getStorageSync('userInfo') == '') {
      console.log(999);
      this.guessLogin();
    }
  },
  methods: {
    phoneLogin: function phoneLogin() {
      // console.log('手机登录');
      uni.navigateTo({
        url: '/pages/login/phoneLogin'
      });
    },
    getphonenumber: function getphonenumber(e) {
      console.log(e.detail, '获取手机号码');
      var that = this;
      if (e.detail.errMsg == 'getPhoneNumber:ok') {
        var userInfo = JSON.parse(uni.getStorageSync('userInfo'));
        (0, _chat.wx_xcx_mobile)({
          code: e.detail.code,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        }).then(function (res) {
          // console.log(res.data.phone_info.purePhoneNumber,'purePhoneNumber');
          var query = uni.getStorageSync('loginCode');
          uni.login({
            provider: 'weixin',
            success: function success(loginRes) {
              // let code = loginRes.code;
              // that.wxLogin(code);
              var val = {
                'code': loginRes.code,
                'user_code': userInfo.user_code,
                'mobile': res.data.phone_info.purePhoneNumber
              };
              if (query) {
                if (query.role == 'user') {
                  val.parent_user_code = query.parent_user_code;
                }
              }
              uni.showLoading({
                title: '登录中...'
              });
              (0, _chat.wxLogin)(val).then(function (res) {
                if (res.code == 20000) {
                  uni.setStorageSync("userInfo", JSON.stringify(res.data));
                  uni.setStorageSync('memberInfo', JSON.stringify(res.data));
                  uni.setStorageSync('loginCode', '');
                  if (res.data.is_tutor == 1) {
                    //是否已经绑定导师 1是0否
                    uni.navigateBack({
                      // 返回上一页
                      delta: 1
                    });
                    uni.hideLoading();
                  } else {
                    that.creatMe(res.data.user_id, res.data.nick_name, res.data.avatar_url);
                  }
                  // uni.getUserInfo({
                  // 	provider: "weixin",
                  // 	success: res => {
                  // 		const userWeiXinAccInfo = res.userInfo;
                  // 		console.log(res);
                  // 	},
                  // 	fail: err => {
                  // 		console.log("获取用户信息失败");
                  // 	}
                  // })
                } else {
                  uni.hideLoading();
                  that.$api.msg(res.msg);
                }
              }).catch(function (err) {
                uni.hideLoading();
                that.$api.msg('登录失败');
              });
            }
          });
        });
      }
    },
    toLogin: function toLogin() {
      if (this.selectCheck == 1) {
        var that = this;
      } else {
        this.$api.msg('请先阅读后并同意用户协议和隐私政策');
      }
    },
    creatMe: function creatMe(user_id, name, imgUrl) {
      var _this = this;
      var data = {
        'user_id': user_id,
        'photo': imgUrl,
        'name': name,
        'greeting': '我是您的孪生数字人，遇事不决的时候，您可以问我，我会给您回答，供您参考，现在开始问我吧！'
      };
      (0, _user.creatMe)(data).then(function (res) {
        if (res.code == 20000) {
          _this.batchTutor(user_id, res.data.me_id);
        } else {
          _this.$api.msg(res.msg);
          uni.hideLoading();
        }
      }).catch(function (err) {
        _this.$api.msg('创建失败');
        uni.hideLoading();
      });
    },
    //批量绑定导师
    batchTutor: function batchTutor(user_id, me_id) {
      var _this2 = this;
      (0, _user.batchTutor)({
        user_id: user_id,
        me_id: me_id
      }).then(function (res) {
        if (res.code == 20000) {
          uni.hideLoading();
          uni.navigateBack({
            // 返回上一页
            delta: 1
          });
        } else {
          uni.hideLoading();
          _this2.$api.msg(res.msg);
        }
      });
    },
    radioChange: function radioChange(evt) {
      this.selectCheck = evt.detail.value[0];
      // console.log(evt);
      this.selectCheck == 1 ? this.getPhoneNumber = 'getPhoneNumber' : this.getPhoneNumber = '1';
    },
    // 游客登录
    guessLogin: function guessLogin() {
      var headers = {
        'content-type': 'application/x-www-form-urlencoded',
        'source': 'xcx'
      };
      var val = {
        time: new Date().getTime()
      };
      uni.request({
        url: global.loginUrl + '/api/user/create_temp_user',
        data: val,
        header: headers,
        method: 'POST',
        success: function success(res) {
          if (res.data.code == 20000) {
            uni.setStorageSync("userInfo", JSON.stringify(res.data.data));
            uni.setStorageSync("avatarUrl", res.data.data.avatar_url);
          } else {
            console.log('登录失败');
          }
        }
      });
    },
    checkAgree: function checkAgree() {
      uni.navigateTo({
        url: '/pages/agree/agree?agree_type=4'
      });
    },
    checkSecret: function checkSecret() {
      uni.navigateTo({
        url: '/pages/agree/agree?agree_type=1'
      });
    },
    toIdea: function toIdea() {
      uni.navigateTo({
        url: '/childPage/answer/answer'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 173:
/*!************************************************************************************************************!*\
  !*** F:/G/company/umi-git/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Ksoftware/HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 174);
/* harmony import */ var _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Ksoftware_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 174:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/G/company/umi-git/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[1014,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/childPage/draw/draw.js.map