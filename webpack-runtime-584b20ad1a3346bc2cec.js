!function(){"use strict";var e,n,t,o={},c={};function s(e){var n=c[e];if(void 0!==n)return n.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,s),t.loaded=!0,t.exports}s.m=o,s.amdO={},e=[],s.O=function(n,t,o,c){if(!t){var a=1/0;for(i=0;i<e.length;i++){t=e[i][0],o=e[i][1],c=e[i][2];for(var d=!0,r=0;r<t.length;r++)(!1&c||a>=c)&&Object.keys(s.O).every((function(e){return s.O[e](t[r])}))?t.splice(r--,1):(d=!1,c<a&&(a=c));if(d){e.splice(i--,1);var p=o();void 0!==p&&(n=p)}}return n}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,o,c]},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,{a:n}),n},s.d=function(e,n){for(var t in n)s.o(n,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce((function(n,t){return s.f[t](e,n),n}),[]))},s.u=function(e){return({355:"component---src-pages-app-development-examples-md",461:"e82996df",610:"component---src-pages-starter-kit-webhooks-md",717:"component---src-pages-app-development-best-practices-logging-troubleshooting-md",908:"component---src-pages-admin-ui-sdk-extension-points-order-view-button-md",1012:"component---src-pages-starter-kit-send-data-md",1058:"component---src-pages-admin-ui-sdk-index-md",1084:"component---src-pages-webhooks-xml-schema-md",1106:"component---src-pages-admin-ui-sdk-extension-points-menu-md",1192:"component---src-pages-events-conditional-events-md",1242:"component---src-pages-events-commands-md",1315:"component---src-pages-admin-ui-sdk-app-registration-md",2210:"component---src-pages-app-development-use-cases-index-md",2313:"component---src-pages-webhooks-index-md",2413:"component---src-pages-webhooks-commands-md",2469:"component---src-pages-events-project-setup-md",2503:"component---src-pages-starter-kit-shipments-md",2536:"component---src-pages-starter-kit-customers-md",2549:"component---src-pages-starter-kit-structure-md",2577:"component---src-pages-events-troubleshooting-md",2788:"component---src-pages-app-development-amazon-sales-channel-release-notes-md",3017:"component---src-pages-webhooks-hooks-md",3058:"component---src-pages-starter-kit-index-md",3125:"component---node-modules-adobe-gatsby-theme-aio-src-pages-404-md",3210:"component---src-pages-starter-kit-orders-md",3361:"component---src-pages-admin-ui-sdk-extension-points-page-md",3376:"component---src-pages-starter-kit-developer-tools-md",3892:"component---src-pages-admin-ui-sdk-extension-points-order-grid-columns-md",3913:"component---src-pages-webhooks-testing-md",4218:"component---src-pages-starter-kit-create-integration-md",4226:"component---src-pages-webhooks-admin-configuration-md",4343:"component---src-pages-app-development-learning-path-md",4424:"component---src-pages-webhooks-responses-md",4500:"component---src-pages-admin-ui-sdk-troubleshooting-md",4582:"component---src-pages-admin-ui-sdk-publish-md",4598:"component---src-pages-app-development-amazon-sales-channel-prerequisites-md",4678:"component---src-pages-app-development-best-practices-credentials-md",4851:"component---src-pages-starter-kit-launch-md",4852:"component---src-pages-starter-kit-events-md",4880:"component---src-pages-admin-ui-sdk-extension-points-product-index-md",4983:"component---src-pages-webhooks-use-cases-md",5356:"e97051c3",5553:"component---src-pages-admin-ui-sdk-configuration-md",5952:"component---src-pages-starter-kit-products-md",6077:"component---src-pages-app-development-use-cases-curbside-md",6124:"component---src-pages-admin-ui-sdk-extension-points-order-mass-action-md",6199:"component---src-pages-events-convert-field-values-md",6309:"component---src-pages-admin-ui-sdk-extension-points-product-mass-action-md",6649:"component---src-pages-webhooks-installation-md",6802:"component---src-pages-events-release-notes-md",6859:"component---src-pages-admin-ui-sdk-extension-points-order-index-md",6950:"component---src-pages-starter-kit-stock-md",6979:"component---src-pages-events-custom-event-fields-md",7239:"component---src-pages-starter-kit-receive-data-md",7248:"component---src-pages-starter-kit-best-practices-md",7380:"component---src-pages-admin-ui-sdk-installation-md",7415:"component---src-pages-admin-ui-sdk-extension-points-index-md",7444:"component---src-pages-events-module-development-md",7490:"component---src-pages-starter-kit-create-data-flow-md",7552:"component---src-pages-events-installation-md",7658:"component---src-pages-app-development-best-practices-database-storage-md",7698:"component---src-pages-events-configure-commerce-md",7723:"component---src-pages-starter-kit-use-cases-md",8035:"component---src-pages-index-md",8227:"component---src-pages-webhooks-conditional-webhooks-md",8342:"component---src-pages-webhooks-release-notes-md",8379:"component---src-pages-admin-ui-sdk-extension-points-product-grid-columns-md",8480:"component---src-pages-app-development-amazon-sales-channel-installation-md",9293:"component---src-pages-admin-ui-sdk-release-notes-md",9413:"component---src-pages-app-development-best-practices-index-md",9424:"component---src-pages-app-development-amazon-sales-channel-index-md",9526:"component---src-pages-starter-kit-contact-us-md",9660:"component---src-pages-app-development-index-md",9891:"component---src-pages-events-index-md"}[e]||e)+"-"+{355:"3d5aa2df6e06cf1a6ac2",461:"7f433cb7e5d525a097fe",610:"143c3c8e52f2bdd4505a",717:"639ce0695cdfd29710b4",908:"302dddda02803ef44e34",1012:"880a18c66c6fda640d83",1058:"b835cafd0a1542dbe4c2",1084:"9396e02403854468db98",1106:"670e0eb913cc31822672",1192:"6eecbeb2cd462c265d3d",1242:"430bb2e2db7feb4f19ff",1315:"be77dc85d88738af52e3",2210:"80301cc1e7a4829e265d",2313:"33b7681d8c2ef6227018",2413:"f9549a037f59509a283d",2469:"38c16d80485851db66a2",2503:"cf8b218a1201e4aed45e",2536:"9f34f4b1cf2717ef7ee9",2549:"b85b5cd36b55cf896282",2577:"6efe1b8eb4de716fa1c8",2788:"76dbd8b3b36d6fd3a574",3017:"f76a14a26855d7fa70b5",3058:"cdc49708778cd6bdf332",3125:"466b59687dad4dfec4de",3210:"aadd2c99c33e197a1f8d",3361:"eaa6b614f7a41f09a1b5",3376:"d70ccaa1cf9338b1563d",3892:"b08e75b4b9c6095a74fb",3913:"2dcd2fc2c0a88cc69538",3985:"8fa89f7bd7db7c0dd9a8",4218:"3d26f02b7eb976dad818",4226:"43b3d1c9996364ef2d13",4343:"3c16477db379f8b498bd",4424:"0b2acfbcd345395e5686",4500:"6f743513cbdad2a22d33",4574:"adee38eee75d573a0f2b",4582:"fc0849354651e3eb6535",4598:"a43cc1f8280b18cc4976",4678:"1a1cb7d5acc44ebf03b2",4794:"52c7ce29c2e7e5a23ef0",4851:"cd84d659484653cff306",4852:"d0cd20325c5d3f277aae",4880:"5814f6aee16b80e1cd67",4983:"8cdac944c060f9148a1d",5356:"cf6061a8e7b4aa8f9e8f",5553:"9971d78087c06474ff63",5952:"03d2954bfd4248fb3970",6077:"15cf8c2df5cd597f2044",6124:"acbf99f913dcd958ad64",6199:"f2ea30079983b1466ba4",6309:"88b2e8bd29e66cebfe75",6649:"be01d2308340e8732313",6802:"fb4465f99653a647cf50",6859:"75ff1cc7ee0263a66164",6950:"82b0ce4260f3a3c93b30",6979:"a540fe2023fa86ec0ee4",7239:"45514331b427b3d2d85b",7248:"5cd13522e60abef069e4",7380:"9c8a633ed1e9a4da0e59",7415:"89c5a4ee5637675c6a87",7444:"c3283124bcb4cb8d1fbf",7490:"bc66888fca7b0bf540f1",7552:"ff3b37f3511b11e1dfb5",7658:"9f3431fe317290e54c6e",7698:"d221ff1dcf234efadc0f",7723:"d057605d21651656b016",8035:"5f357888c7795ca671a8",8227:"764291d6c5a525a07d1d",8342:"3270bf1a52d5929b05b6",8379:"aa56b029a9deb09e145c",8480:"086e60675a13aa9b7b20",9293:"4937765806eb84a3c27f",9413:"ce4cc95a4cb64b421464",9424:"55a0d146d50f354d15b0",9526:"9f0651d34cde574a5749",9660:"8320b588dee640da37e1",9891:"1a801a175cb53fef86ae"}[e]+".js"},s.miniCssF=function(e){return"styles.9ee63b2b3bde69c38c97.css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},t="commerce-extensibility:",s.l=function(e,o,c,a){if(n[e])n[e].push(o);else{var d,r;if(void 0!==c)for(var p=document.getElementsByTagName("script"),i=0;i<p.length;i++){var m=p[i];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==t+c){d=m;break}}d||(r=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.setAttribute("data-webpack",t+c),d.src=e),n[e]=[o];var f=function(t,o){d.onerror=d.onload=null,clearTimeout(b);var c=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),c&&c.forEach((function(e){return e(o)})),t)return t(o)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),r&&document.head.appendChild(d)}},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.p="/commerce-extensibility/",function(){var e={6658:0,532:0};s.f.j=function(n,t){var o=s.o(e,n)?e[n]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(532|6658)$/.test(n))e[n]=0;else{var c=new Promise((function(t,c){o=e[n]=[t,c]}));t.push(o[2]=c);var a=s.p+s.u(n),d=new Error;s.l(a,(function(t){if(s.o(e,n)&&(0!==(o=e[n])&&(e[n]=void 0),o)){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+n+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,o[1](d)}}),"chunk-"+n,n)}},s.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,c,a=t[0],d=t[1],r=t[2],p=0;if(a.some((function(n){return 0!==e[n]}))){for(o in d)s.o(d,o)&&(s.m[o]=d[o]);if(r)var i=r(s)}for(n&&n(t);p<a.length;p++)c=a[p],s.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return s.O(i)},t=self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),s.nc=void 0}();
//# sourceMappingURL=webpack-runtime-584b20ad1a3346bc2cec.js.map