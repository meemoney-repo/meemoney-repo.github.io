(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(t,e,r){"use strict";r.r(e);r(18);var n=r(2),c={data:function(){return{articles:this.$store.state.articles,cat:this.$store.state.cat}},methods:{getArticle:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get(t.$axios.defaults.baseURL+"oapi/article_category?field_category_tid="+t.$nuxt._route.params.id);case 2:article=e.sent,t.articles=article;case 4:case"end":return e.stop()}}),e)})))()},getCatList:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get(t.$axios.defaults.baseURL+"oapi/category_list?tid_raw="+t.$nuxt._route.params.id);case 2:r=e.sent,t.cat=r[0];case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){0}},o=r(10),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"mbr-section content4 cid-rSl1l37Dtf",attrs:{id:"content4-2e"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"media-container-row"},[r("div",{staticClass:"title col-12 col-md-8"},[r("h2",{staticClass:"align-center pb-3 mbr-fonts-style display-2"},[t._v(t._s(t.cat.name))]),t._v(" "),r("h3",{staticClass:"mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5",domProps:{innerHTML:t._s(t.cat.term_description)}})])])])]),t._v(" "),r("section",{staticClass:"extFeatures cid-rSkKZefft0",attrs:{id:"extFeatures23-2a"}},[r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("div",{staticClass:"row row-content justify-content-center"},t._l(t.articles,(function(article){return r("div",{key:article.nid,staticClass:"card p-3 col-12 col-md-6 col-lg-4"},[r("div",{staticClass:"card-wrapper"},[r("div",{staticClass:"card-img"},[r("nuxt-link",{attrs:{to:"/article/"+article.nid}},[r("img",{attrs:{src:"https://drive.google.com/uc?export=view&id="+article.picture,title:"",alt:""}})])],1),t._v(" "),r("div",{staticClass:"card-box"},[r("h4",{staticClass:"card-title mbr-fonts-style mbr-bold display-5"},[r("nuxt-link",{attrs:{to:"/article/"+article.nid}},[t._v("\n                            "+t._s(article.title)+"\n                          ")])],1),t._v(" "),r("p",{staticClass:"mbr-text mbr-fonts-style card-text mbr-normal display-7",domProps:{innerHTML:t._s(article.body)}}),t._v(" "),r("div",{staticClass:"ico-line"},[r("div",{staticClass:"px-1 pb-3 pr-2 mbr-iconfont mbr-iconfont-social mbri-calendar",staticStyle:{color:"rgb(10, 28, 68)",fill:"rgb(10, 28, 68)"},attrs:{"media-simple":"true"}}),t._v(" "),r("h3",{staticClass:"rev mbr-fonts-style display-4"},[r("em",{domProps:{innerHTML:t._s(article.write_date)}})])])])])])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12"})])}],!1,null,null,null);e.default=component.exports}}]);