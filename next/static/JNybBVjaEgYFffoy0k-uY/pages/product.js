(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5pKv":function(t,n){t.exports="\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"},"6BQ9":function(t,n,r){t.exports=r("uekQ")},"9Jkg":function(t,n,r){t.exports=r("oh+g")},CpBc:function(t,n,r){var e=r("Y7ZC"),o=r("EP9H");e(e.G+e.F*(parseFloat!=o),{parseFloat:o})},EP9H:function(t,n,r){var e=r("5T2Y").parseFloat,o=r("oc46").trim;t.exports=1/e(r("5pKv")+"-0")!==-1/0?function(t){var n=o(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},OKav:function(t,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"c",(function(){return l})),r.d(n,"b",(function(){return g}));var e=r("6BQ9"),o=r.n(e),c=r("9Jkg"),a=r.n(c),u=r("Wa2I"),i=r.n(u),s=function(t){var n=t.match(/[+-]?\d+(\.\d+)?/g)[0];return null!==n?i()(i()(n).toFixed(2)):""},d=function(t){var n=s(t.price),r={products:[],totalProductsCount:1,totalProductsPrice:n},e=p(t,n,1);return r.products.push(e),localStorage.setItem("woo-next-cart",a()(r)),r},p=function(t,n,r){return{productId:t.productId,image:t.image,name:t.name,price:n,qty:r,totalPrice:i()((n*r).toFixed(2))}},l=function(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=f(t.products,n,r,e),u=function(t,n){return t.totalPrice+=n.totalPrice,t.qty+=n.qty,t},s=c.reduce(u,{totalPrice:0,qty:0}),d={products:c,totalProductsCount:o()(s.qty),totalProductsPrice:i()(s.totalPrice)};return localStorage.setItem("woo-next-cart",a()(d)),d},f=function(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=v(t,n.productId);if(-1<c){var a=t,u=a[c];return u.qty=e?o()(e):o()(u.qty+r),u.totalPrice=i()((u.price*u.qty).toFixed(2)),a}var d=s(n.price),l=p(n,d,r);return t.push(l),t},v=function(t,n){var r=t.filter((function(t,r){if(n===t.productId)return t}));return t.indexOf(r[0])},g=function(t){var n=localStorage.getItem("woo-next-cart");if(1===(n=JSON.parse(n)).products.length)return localStorage.removeItem("woo-next-cart"),null;var r=v(n.products,t);if(-1<r){var e=n.products[r],o=e.qty,c=e.totalPrice,u=n;return u.products.splice(r,1),u.totalProductsCount=u.totalProductsCount-o,u.totalProductsPrice=u.totalProductsPrice-c,localStorage.setItem("woo-next-cart",a()(u)),u}return n}},Wa2I:function(t,n,r){t.exports=r("e+cT")},XWtR:function(t,n,r){var e=r("5T2Y").parseInt,o=r("oc46").trim,c=r("5pKv"),a=/^[-+]?0[xX]/;t.exports=8!==e(c+"08")||22!==e(c+"0x16")?function(t,n){var r=o(String(t),3);return e(r,n>>>0||(a.test(r)?16:10))}:e},dEVD:function(t,n,r){var e=r("Y7ZC"),o=r("XWtR");e(e.G+e.F*(parseInt!=o),{parseInt:o})},"e+cT":function(t,n,r){r("CpBc"),t.exports=r("WEpk").parseFloat},elvr:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return r("uhzS")}])},oc46:function(t,n,r){var e=r("Y7ZC"),o=r("Jes0"),c=r("KUxP"),a=r("5pKv"),u="["+a+"]",i=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),d=function(t,n,r){var o={},u=c((function(){return!!a[t]()||"\u200b\x85"!="\u200b\x85"[t]()})),i=o[t]=u?n(p):a[t];r&&(o[r]=i),e(e.P+e.F*u,"String",o)},p=d.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(i,"")),2&n&&(t=t.replace(s,"")),t};t.exports=d},"oh+g":function(t,n,r){var e=r("WEpk"),o=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},oqZR:function(t,n,r){"use strict";var e=r("q1tI"),o=r.n(e),c=r("szwz"),a=r("OKav"),u=r("YFqc"),i=r.n(u),s=o.a.createElement;n.a=function(t){var n=t.product,r=Object(e.useContext)(c.a),u=(r[0],r[1]),d=Object(e.useState)(!1),p=d[0],l=d[1];return s(o.a.Fragment,null,s("button",{onClick:function(){var t=localStorage.getItem("woo-next-cart");if(t){t=JSON.parse(t);var r=Object(a.c)(t,n,1);u(r)}else{var e=Object(a.a)(n);u(e)}l(!0)},className:"btn btn-secondary"},"Add to cart"),p?s(i.a,{href:"/cart"},s("button",{className:"woo-next-view-cart-btn btn btn-secondary"},"View Cart")):"")}},uekQ:function(t,n,r){r("dEVD"),t.exports=r("WEpk").parseInt},uhzS:function(t,n,r){"use strict";r.r(n);var e=r("eVuF"),o=r.n(e),c=r("ln6h"),a=r.n(c),u=r("rt45"),i=r("6BQ9"),s=r.n(i),d=r("q1tI"),p=r.n(d),l=r("5Yp1"),f=r("nOHt"),v=r("xEei"),g=r("lTCR"),m=r.n(g),x=r("oqZR"),P=p.a.createElement;function w(){var t=Object(u.a)([" query Product( $id: Int ! ) {\n\t\t\tproductBy( productId: $id ) {\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tproductId\n\t\t\t\t\t\t\taverageRating\n\t\t\t\t\t\t\tslug\n\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\timage {\n\t\t\t\t\t\t\t\turi\n\t\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t\t\tsrcSet\n\t\t\t\t\t\t\t\tsourceUrl\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t  ... on SimpleProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on VariableProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on ExternalProduct {\n\t\t\t\t\t        price\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t      ... on GroupProduct {\n\t\t\t\t\t        products {\n\t\t\t\t\t          nodes {\n\t\t\t\t\t            ... on SimpleProduct {\n\t\t\t\t\t              price\n\t\t\t\t\t            }\n\t\t\t\t\t          }\n\t\t\t\t\t        }\n\t\t\t\t\t        id\n\t\t\t\t\t      }\n\t\t\t\t\t    }\n\n\t\t\t\t\n\t\t\t\n\t }"]);return w=function(){return t},t}var y=Object(f.withRouter)((function(t){var n=t.product;return P(l.a,null,n?P("div",{className:"woo-next-single"},P("div",{className:"woo-next-single__product card bg-light mb-3 p-5"},P("div",{className:"card-header"},n.name),P("div",{className:"card-body"},P("h4",{className:"card-title"},n.name),P("img",{src:n.image.sourceUrl,alt:"Product Image",width:"200",srcSet:n.image.srcSet}),P("p",{className:"card-text"},n.description),P(x.a,{product:n})))):"")}));y.getInitialProps=function(t){var n,r,e,c;return a.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return console.warn(t),n=t.query.slug,r=n?s()(n.split("-").pop()):t.query.id,e=m()(w()),o.next=6,a.a.awrap(v.a.query({query:e,variables:{id:r}}));case 6:return c=o.sent,o.abrupt("return",{product:c.data.productBy});case 8:case"end":return o.stop()}}),null,null,null,o.a)},n.default=y}},[["elvr",1,2,0,3,5,4]]]);