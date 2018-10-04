(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Vue Storefront gets it's all data from "),a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-storefront-api"),a("OutboundLink")],1),t._v(" endpoints, operating on top of Elastic Search data store.")]),t._v(" "),a("p",[t._v("If You installed the project using "),a("code",[t._v("npm run installer")]),t._v(" command then, the database has been set up, data imported from demo-dump and everything should be just fine.\nAfter some more extensive data operations - like custom imports using "),a("a",{attrs:{href:"https://github.com/DivanteLtd/mage2vuestorefront",target:"_blank",rel:"noopener noreferrer"}},[t._v("mage2vuestorefront"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/DivanteLtd/magento1-vsbridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("magento1-vsbridge"),a("OutboundLink")],1),t._v(" there is a need to re-index the ElasticSearch and setup the proper metadata for fields.")]),t._v(" "),a("p",[t._v("The main reason You know You must reindex the database is kind of the following error You get from vue-storefront console:")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("This command will:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("This tool will drop your current index and create new, empty one with all the metafields set.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("If You like to extenend the ElasticSearch data structures or map some particular field types. For example after getting kind of this error:")]),t._v(" "),t._m(11),a("p",[t._v("Please do change the ES schema by modifying:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/config/elastic.schema.product.extension.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("config/elastic.schema.product.extension.json"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/config/elastic.schema.attribute.extension.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("config/elastic.schema.attribute.extension.json"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/DivanteLtd/vue-storefront-api/blob/master/config/elastic.schema.taxrate.extension.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("config/elastic.schema.taxrate.extension.json"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("The format is compliant with ES DSL for schema modifications: https://www.elastic.co/blog/found-elasticsearch-mapping-introduction")]),t._v(" "),t._m(12)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"database-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#database-tool","aria-hidden":"true"}},[this._v("#")]),this._v(" Database tool")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("Error"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"root_cause"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"illegal_argument_exception"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"Fielddata is disabled on text fields by default. Set fielddata=true on [created_at] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"search_phase_execution_exception"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"all shards failed"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"phase"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"query"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"grouped"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"failed_shards"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"shard"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"index"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"vue_storefront_catalog_1521776807"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"node"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"xIOeZW2lTwaprGXh6YLyCA"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token property"}},[t._v('"type"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"illegal_argument_exception"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token property"}},[t._v('"reason"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v('"Fielddata is disabled on text fields by default. Set fielddata=true on [created_at] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In this case there is a db tool inside your local "),e("code",[this._v("vue-storefront-api")]),this._v(" installation to the rescue.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"re-indexing-existing-database"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#re-indexing-existing-database","aria-hidden":"true"}},[this._v("#")]),this._v(" Re-indexing existing database")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Please go to "),e("code",[this._v("vue-storefront-api")]),this._v(" directory and run:\n"),e("code",[this._v("npm run db rebuild")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("reindex your currently set (in the "),a("code",[t._v("config/local.json")]),t._v(" config file) elastic search index to temp-one,")]),t._v(" "),a("li",[t._v("put the right elastic search mappings on top of the temp index,")]),t._v(" "),a("li",[t._v("drop the original index,")]),t._v(" "),a("li",[t._v("create the alias with original name to the temp one - so You can use original name without any reference chcanges.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can specify different (than this set in "),e("code",[this._v("config/local.json")]),this._v(") index name by running:\n"),e("code",[this._v("npm run db rebuild -- --indexName=custom_index_name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-the-new-index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-new-index","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating the new index")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you like to create new, empty index please run:\n"),e("code",[this._v("npm run db new")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can specify different (than this set in "),e("code",[this._v("config/local.json")]),this._v(") index name by running:\n"),e("code",[this._v("npm run db rebuild -- --indexName=custom_index_name")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"chaning-the-index-structure-adding-new-fields-chaning-the-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chaning-the-index-structure-adding-new-fields-chaning-the-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Chaning the index structure / adding new fields / chaning the types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('[{"type":"illegal_argument_exception","reason":"Fielddata is disabled on text fields by default. Set fielddata=true on [created_at] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."}]\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After the changes please do run the following indexing command:\n"),e("code",[this._v("npm run db rebuild")])])}],!1,null,null,null);s.options.__file="database-tool.md";e.default=s.exports}}]);