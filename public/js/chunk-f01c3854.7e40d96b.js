(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f01c3854"],{"0934":function(t,e,n){},7941:function(t,e,n){},"9f08":function(t,e,n){},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"wrapper"},[t.mounted?t.mounted&&t.books.length?n("div",{staticClass:"books"},[n("h1",[t._v("Total no. of Books: "+t._s(t.books.length))])]):n("div",{staticClass:"empty"},[n("h1",[t._v("empty abcd")]),n("router-link",{staticClass:"link",attrs:{to:"/create"}},[t._v("abcd")])],1):n("Loader")],1),n("table",{attrs:{id:"secondTable"}},[n("thead",[n("tr",t._l(t.columns,(function(e){return n("th",[t._v(t._s(e))])})),0)]),n("tbody",t._l(t.books,(function(t){return n("Book",{key:t._id,attrs:{book:t}})})),1)])])},r=[],s=(n("96cf"),n("1da1")),a=n("bc3a"),c=n.n(a),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v(t._s(t.book["_id"]))]),n("td",[t._v(t._s(t.book["title"]))]),n("td",[t._v(t._s(t.book["author"]))]),n("td",[t._v(t._s(t.book["summary"]))]),n("td",[n("button",{staticClass:"button-icon button-primary",on:{click:function(e){return t.$router.push("/"+t.book._id)}}},[n("i",{staticClass:"fas fa-edit"})])]),n("td",[n("button",{staticClass:"button-icon button-danger",on:{click:function(e){return t.deleteBook()}}},[n("i",{staticClass:"fas fa-trash-alt"})])])])},u=[],l={name:"Book",props:["book"],methods:{deleteBook:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$swal.fire({title:"Are you sure?",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Confirm",denyButtonText:"Cancel"}).then((function(e){e.isConfirmed&&c.a.delete("api/books/".concat(t.book._id)).then((function(e){t.$swal.fire("Entry succesfully deleted","","success").then((function(){t.$router.go()}))})).catch((function(t){return console.error(t)}))}));case 2:case"end":return e.stop()}}),e)})))()}}},d=l,f=(n("f86a"),n("2877")),b=Object(f["a"])(d,i,u,!1,null,"dea2ecac",null),m=b.exports,h=n("d437"),k={name:"Home",data:function(){return{books:[],mounted:!1,columns:["ISBN","Title","Author","Summary","",""]}},components:{Book:m,Loader:h["a"]},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("api/books/").then((function(e){t.books=e.data})).catch((function(t){return console.error(t)}));case 2:t.mounted=!0;case 3:case"end":return e.stop()}}),e)})))()}},_=k,v=(n("d875"),Object(f["a"])(_,o,r,!1,null,"13d04e3d",null));e["default"]=v.exports},d437:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lds-ring"},[n("div"),n("div"),n("div"),n("div")])}],s={name:"Loader"},a=s,c=(n("eb93"),n("2877")),i=Object(c["a"])(a,o,r,!1,null,"93294d00",null);e["a"]=i.exports},d875:function(t,e,n){"use strict";n("9f08")},eb93:function(t,e,n){"use strict";n("7941")},f86a:function(t,e,n){"use strict";n("0934")}}]);
//# sourceMappingURL=chunk-f01c3854.7e40d96b.js.map