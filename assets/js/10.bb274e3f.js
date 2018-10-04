(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(e,t,o){"use strict";o.r(t);var i=o(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),o("p",[e._v("One of the options is to do kind of a fork - or just to get the whole repo to your Git service. Then if you like to do some VS updates, you will probably need to just pull the changes from our origins. Another option will be available as soon as we manage to separate the core as a npm module")]),e._v(" "),e._m(2),e._v(" "),o("p",[e._v("Below you can find the Vue Storefront project structure with explanations and corresponding docs. This is a good place to start with the project.")]),e._v(" "),o("ul",[o("li",[e._m(3),e._v(" "),o("ul",[e._m(4),e._v(" "),o("li",[o("code",[e._v("local.json")]),e._v(" (optional) - your custom Vue Storefront config. You can find a detailed description of all config file properties in the "),o("router-link",{attrs:{to:"./configuration.html"}},[e._v("Vue Storefront configuration chapter")]),e._v(".")],1)])]),e._v(" "),e._m(5),e._v(" "),o("li",[e._m(6),e._v(" "),e._m(7),e._v(" "),o("ul",[e._m(8),e._v(" "),o("li",[o("code",[e._v("build")]),e._v(" - It contains "),o("code",[e._v("config.json")]),e._v(" generated from files in "),o("code",[e._v("/config")]),e._v(" folder and webpack build. It's made from vue-cli webpack template. You can extend core webpack build in "),o("code",[e._v("{themeroot}/webpack.config.js")]),e._v(" (related: "),o("router-link",{attrs:{to:"./../core-themes/webpack.html"}},[e._v("Working with Webpack")]),e._v(").")],1),e._v(" "),o("li",[o("code",[e._v("components")]),e._v(" Vue Storefront core components (related: "),o("router-link",{attrs:{to:"./../core-themes/core-components.html"}},[e._v("Working with core components")]),e._v(")")],1),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),o("li",[o("code",[e._v("pages")]),e._v(" - Vue Storefront core pages (related: "),o("router-link",{attrs:{to:"./../core-themes/core-components.html"}},[e._v("Working with core components")]),e._v(")")],1),e._v(" "),o("li",[o("code",[e._v("plugins")]),e._v(" - Core plugins (related: "),o("router-link",{attrs:{to:"./../core-themes/plugins.html"}},[e._v("Working with plugins")]),e._v(")")],1),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),o("li",[o("code",[e._v("store")]),e._v(" - Core Vuex stores (related: "),o("router-link",{attrs:{to:"./../data/vuex.html"}},[e._v("Working with Vuex")]),e._v(", "),o("router-link",{attrs:{to:"./../core-themes/data.html"}},[e._v("Working with data")]),e._v(")")],1)])]),e._v(" "),o("li",[e._m(18),e._v(" "),o("ul",[o("li",[o("code",[e._v("extensions")]),e._v(" - Custom extensions made for Vue Storefront like integration with MailChimp or support for Google Analytics) (see: "),o("router-link",{attrs:{to:"./../core-themes/extensions.html"}},[e._v("Working with extensions")]),e._v(")")],1),e._v(" "),o("li",[o("code",[e._v("themes")]),e._v(" - Vue Storefront core themes. You can change the active theme in "),o("code",[e._v("config/")]),e._v(" folder. (see: "),o("router-link",{attrs:{to:"./../core-themes/themes.html"}},[e._v("Working with themes")]),e._v(").")],1)])])])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"project-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#project-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Project structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"using-git-for-custom-development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-git-for-custom-development","aria-hidden":"true"}},[this._v("#")]),this._v(" Using git for custom development")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"structure-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Structure details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("config")]),this._v(" - Config files for vue storefront. They're used to define backend addresses, current theme etc.")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[o("code",[e._v("default.json")]),e._v(" - Default config template which should never be changed. If you want to make some changes in config create "),o("code",[e._v("local.json")]),e._v(" file in the same folder, copy the content and make changes here. Default "),o("code",[e._v("config.json")]),e._v(" will be overwritten by "),o("code",[e._v("local.json")]),e._v(" for your setup.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[t("code",[this._v("docs")]),this._v(" - Project documentation")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("core")]),this._v(" - Vue Storefront core")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("Don't modify "),t("code",[this._v("core")]),this._v(" directory on your project if you want to receive core updates")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("assets")]),this._v(" - Global assets used in project like logo, app icons, placeholders and "),t("code",[this._v("manifest.json")]),this._v(", eventually will be removed and moved to themes. You can place your theme-specific assets in "),t("code",[this._v("{themeroot}/assets")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("filters")]),this._v(" - Global Vue filters for the project. You can add your own filters in "),t("code",[this._v("{themeroot}/filters")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("helpers")]),this._v(" - Global methods for the project.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("lib")]),this._v(" - Core libraries allowing functionalities like theme support, extensions or filters")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("mixins")]),this._v(" - Global mixins for the project. You can add your own mixins in "),t("code",[this._v("{themeroot}/mixins")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("models")]),this._v(" - Data models for things like orders or notifications, eventually will be moved to documentation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("resource")]),this._v(" - Data mocks used to develop new features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("router")]),this._v(" - Core Vue Router setup. The definition of routes happens in "),t("code",[this._v("{themeroot}/index.js")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("scripts")]),this._v(" - Core scripts like app installer, extension installer etc.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("code",[this._v("service-worker")]),this._v(" - Core service worker. It's merged with "),t("code",[this._v("sw-precache")]),this._v(" data from "),t("code",[this._v("build")]),this._v(" and "),t("code",[this._v("{theme}/service-worker-ext.js")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("src")]),this._v(" - Main project folder containing Vue Storefront core and themes. This is your app playground so you can modify this folder.")])}],!1,null,null,null);r.options.__file="project-structure.md";t.default=r.exports}}]);