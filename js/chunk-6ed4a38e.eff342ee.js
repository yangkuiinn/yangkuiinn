(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ed4a38e"],{"0b2f":function(t,n,i){},"15c3":function(t,n,i){"use strict";i("d7bc")},"1c62":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"Home"},[i("van-search",{attrs:{shape:"round",placeholder:"请输入搜索关键词"},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}}),i("banner"),i("div",{staticClass:"grid"},[i("van-grid",{attrs:{border:!1,"column-num":4}},t._l(t.icon,(function(n,e){return i("van-grid-item",{key:e},[i("van-image",{attrs:{width:"30",height:"30",src:n.img}}),i("span",[t._v(t._s(n.text))])],1)})),1)],1),i("highquality"),i("newsong")],1)},s=[],a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"banner"},[i("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerlist,(function(t,n){return i("van-swipe-item",{key:n},[i("img",{attrs:{src:t.pic,alt:""}})])})),1)],1)},c=[],o=i("d399"),l={data:function(){return{bannerlist:[]}},mounted:function(){this.banner()},methods:{banner:function(){var t=this;o["a"].loading({message:"加载中...",forbidClick:!0,overlay:!0});var n={type:2};this.api.banner(n).then((function(n){200==n.data.code?t.bannerlist=n.data.banners:Object(o["a"])(n.data.msg)})).catch((function(t){Object(o["a"])(t)}))}}},r=l,g=(i("ba94"),i("2877")),A=Object(g["a"])(r,a,c,!1,null,"53f90646",null),u=A.exports,d=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"highquality"},[i("div",{staticClass:"song-list"},[i("div",{staticClass:"song-title"},[t._v("精品歌单")]),null!=t.highqualityList?i("div",{staticClass:"details"},t._l(t.highqualityList.slice(0,10),(function(n,e){return i("div",{key:e,staticClass:"remd_li",on:{click:function(i){return t.remddetail(n.name,n.id)}}},[i("div",{staticClass:"remd_img"},[i("img",{attrs:{src:n.coverImgUrl,alt:""}})]),i("div",{staticClass:"remd_text"},[t._v(t._s(n.name))])])})),0):t._e()])])},m=[],C={data:function(){return{highqualityList:[]}},mounted:function(){this.highquality()},methods:{highquality:function(){var t=this;this.api.highquality().then((function(n){200==n.data.code?(t.highqualityList=n.data.playlists,console.log(n)):Object(o["a"])(n.data.msg)})).catch((function(t){Object(o["a"])(t)}))}}},h=C,f=(i("7eb2"),Object(g["a"])(h,d,m,!1,null,"613a39c4",null)),p=f.exports,Q=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"newsong"},[i("div",{staticClass:"song-title"},[t._v("推荐新音乐")]),t._l(t.newsongList,(function(n,e){return i("van-cell",{key:e,attrs:{"is-link":""},scopedSlots:t._u([{key:"title",fn:function(){return[i("span",{staticClass:"custom-title"},[t._v(t._s(n.name))]),i("div",{staticClass:"Introduction"},[t._l(n.song.artists,(function(n,e){return i("span",{key:e},[t._v(t._s(n.name+"-"))])})),i("span",[t._v(t._s(n.song.album.name))])],2)]},proxy:!0},{key:"right-icon",fn:function(){return[i("van-icon",{staticClass:"play-circle-o",attrs:{name:"play-circle-o",size:"20"}})]},proxy:!0}],null,!0)})}))],2)},b=[],E={data:function(){return{newsongList:[]}},mounted:function(){this.newsong()},methods:{newsong:function(){var t=this;this.api.newsong().then((function(n){t.newsongList=n.data.result})).catch((function(t){console.log(t)}))}}},B=E,I=(i("15c3"),Object(g["a"])(B,Q,b,!1,null,"08c3fb02",null)),k=I.exports,y={components:{Banner:u,Highquality:p,Newsong:k},data:function(){return{value:"",icon:[{img:i("4b18"),text:"推荐歌曲"},{img:i("509d"),text:"推荐歌手"},{img:i("b1e2"),text:"推荐歌单"},{img:i("f639"),text:"推荐MV"}]}},mounted:function(){},methods:{}},w=y,x=(i("fc08"),Object(g["a"])(w,e,s,!1,null,"1cdcfca8",null));n["default"]=x.exports},"4b18":function(t,n,i){t.exports=i.p+"img/songs.c08b84d1.png"},"509d":function(t,n,i){t.exports=i.p+"img/singers.cef80d93.png"},7266:function(t,n,i){},"7b5e":function(t,n,i){},"7eb2":function(t,n,i){"use strict";i("7266")},b1e2:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAADoJJREFUeF7tnW2MHVUZx//P7N652/KiEGmA7t5d2rL37hYJAmmDEQRfIAQwopIYEyIY7QcIKSZiiF+AT4oYSEjQGDAg0RhIjIBgFBOpRiTgCxHY7mxbsb27AsIXjFLY2b1zzGyr3W7vy7ln5szMufPfhGzCPuc5z/k98+uZuS8zAv6QAAl0JCBkQwIk0JkABeHRQQJdCFAQHh4kQEF4DJCAGQHuIGbcOKokBChISRrNZZoRoCBm3DiqJAQoSEkazWWaEaAgZtw4qiQEKEhJGs1lmhGgIGbcOKokBChISRrNZZoRoCBm3DiqJAQoSEkazWWaEaAgZtw4qiQEKEhJGs1lmhGgIGbcOKokBChISRrNZZoRoCBm3DiqJAQoSEkazWWaEaAgZtw4qiQEKEhJGs1lmhGgIGbcOKokBChISRrNZZoRoCBm3DiqJAQoSEkazWWaEaAgZtw4qiQESinI7FjlOhG5DcBESfqcbJkKeyKR71XCxR+f+QbeSpbMrdGlE2R2YmRCoujvbrWpGNWKUjfW55e+W4xqsqmidILM1fzbFHB7NngHbBaldjXmly4ZsFV1XU75BBldt1F5rYUyNTmttUYKV0/Ph4+llc+FPKUTJG4Kr0H6PjTfEOChg15454f24+2+Rzs8oJSCONwvlp4xAQqSMXBO5xYBCuJWv1htxgQoSMbAOZ1bBCiIW/1itRkToCAZA+d0bhGgIG71i9VmTICCZAyc07lFgIK41S9WmzEBCpIxcE7nFgEK4la/WG3GBAZSkLnRyjZ4cnnGLEs9XQvyh4PLi8+e/xoODhKIgRMkGKs8A5GLB6lJrqxFAS8OS3TjmQeWn3Ol5l51DpQgs2PVS0XUr3otmn+3R0AB35xqht+wN0O2mQdMkJWv0j6YLULOtppA/LH4ejO8flCoDJQge7eg2gr9gN81z+/wFEQX1pvLv8+vgnRnHihBYjTxd869KIq/VntduqiYrSsBpXYppe6YWljeNUikBk6QQWoO15I/AQqSfw9YQYEJUJACN4el5U+AguTfA1ZQYAIUpMDNYWn5E6Ag+feAFRSYAAUpcHNYWv4EKEj+PWAFBSZAQQrcHJaWPwEKkn8PWEGBCVCQAjeHpeVPwFlB9tRGPtFCa5NAtgDYCqXW54+TFawhsNsTbw7Aq5PNxSddpOOkIHPjlfuUkhtcBF7WmgV4avn48DNbdyN0iYFzggQ1fx+AzS5BZq2HCCiF5WEvusilbxw6JQi/TjsYqh0XhevHFvCuC6txRpA9tepNEdS9LkBljb0IyAON5uJXekUV4e9OCLJ/fP1p76nl1zoAi7+D/pIA7xQBKGs4QkApbIeg7d1lPMHnJg+EPy06LycE2VOrXhlB/XwtTAFurzfDO4oOucz1dXlo6p2NZnhr0dk4IUgHyAdHZHjLxIGDrxcdctnrm6tVnlaQTx7NQf2m0Vz6eNHZOCFIUPOfAHDVapjxPZimmuG5RQfM+oCgVrkHkJvXsPh3oxmeWHQ+bgjS7mZwJXxmd9EPpk71dTrNajTDwh9/hS8wht725V0K4owvFMRyqyiIZcCW01MQy4ApiGXAltNTEMuAKYhlwJbTUxDLgCmIZcCW01MQy4ApiGXAltNTEMuAKYhlwJbTUxDLgCmIZcCW01MQy4ApiGXAltNTEMuAKYhlwJbTUxDLgCmIZcCW01MQy4ApiGXAltNTEMuAKYhlwJbTUxDLgCmIZcCW01MQy4ApiGXAltNTEMuAKYhlwJbTUxDLgCmIZcCW01MQy4ApiBng4AM4QUYqU5FgWkSm41u0ilKv1ueXbjLLaDaKgphx0x5FQbqjmhnFyf5wZbKlMC0RphVkWsUyCGrtRmZ9NxgKon2omwVSkEPc9m3GhlY4XG95UhdgWpRMx78VMNYPWQqiT4vfSddnlVnk3Oi6jWpoaRKR1D1BvRXvBlg5RdqYRhEURJ8iBdFnlXrk7MTIBFpqEoK6p6L4dyOCbBXgtNQnW5WQgujTpSD6rIwj941Wt4RDqA9FmIwEdUE0CcgUgFONkyYYSEH04VEQfVbakbO1yg5R3rZ4Z4hlUJAN2oMzCKQg+pApiD4rrciZico5Q5G8qBWcUxAF0QdPQfRZaUXOjg5fLJ73jFZwTkEURB88BdFnpRVJQY7FxPdBtA4d8yCX3gehIBTE/Eg3HElBDMF1GMZTLH2ePMXSZ6UVyR2EO4jWgZJmEHeQNGkC3EH0eXIH0WelFckdhDuI1oGSZhB3kDRpcgfphyZ3kH5oacTmuYMIMKOA3Yd/bwVwTbuSeYql0cjDIRREn5VWZBaCrBFh9xAws6UZBgJEq4sMan78aOz1awunIFqtXAmiIPqstCLTFGS1CFAIEKnAW7cUnLkPizrFtD01PdT0TB+fzTcKdbqVIGbQr0FiESIgUAqBJwigVNB6bynY+hb+kwBb+2c7UpC+kHIH6QtX72CNHeTx+LmknlKBDCEYxlJwxn683Ttz/xHcQfpn1uZ0NHkS2xkGZQdRUXTJ1MLyLtu8/pefgiQnzR0kOcOjMnTbQbJ+LjgFSd5cCpKcIQXpwZAX6SkfZGvTDcopFneQozubNQ+Tw5Q7iAm1LmN4inUsHO4gKR9k3EHSAcprkOQcuYMkZ8hrEF6DpHwU9ZmO1yB9Ajsczh3EjNvqUdxBkjPkDsIdJOWjqM903EH6BMYdxAxYm1HcQVJDeSgRX8Xiq1gpH1K903EH6c2oXQSvQcy48RokObeOGbiDcAexeHi1T80dxAw5dxAzbtxBknPjDtIHQ76T3gcsk1DuICbUgKDm/xnAuWtH8xuF+jz5KpY+K63IolyDzEwcd+pQtPR6u6IpiFYrV4IoiD4rrciiCLK7Vr3Zg7qHgmi1rWMQBUnG75jRRRDk8DNK4kcwvJ+CJGswBUnGr3CC7K350xHwaPwY6E5L4ymWftMpiD4rrcgsd5CXajipgsomgWwCEP93CYALAJzYrVgKotVKXoPoY9KPnBur3KBE7ms3Io1v0M2O+h+E4CqRlbsmnqNf2ZFICqJPjTuIPiutyLlx/ydK4fM2BJkdq14qUPdDUNMqpkMQBdGnR0H0WfWMnK1VzhPInzoFJtlBZsaGLxwS73c9i9AIoCAakA6HUBB9Vl0jZ0Zx8rD4DyjB1TYECcb8X0BweRrlUhB9ihREn1XbyL2n4pRWtfIpUbJDAdu6pTPdQfaMV6+IlHoyYan/H66Uun5qfumhtPL1ysOPmvQilPDvRfmoyb4x/6yW4LOHXjGSTQoqfuXodN3lmQoyW6vsEMj3defpHRd9pNFcfrZ3XDoRFCQdjh2z5C3I7PjwhxF5d4tge5KlmgrS6QAzrWVEhk+fOHCw7cdQTHN2G0dBbFBdlTNPQebG/auVwoMA3pd0mcaCjFW/qkTdnXT+w+N/1GiG16aUSysNBdHCZB6UpyBBzY9flTrPvPojI00F0bhjvGZ56s3Qk4+evT8MNAekEkZBUsHYOUlegqR87v9Ooxkeb4Jq5YUA33/TZOzRY2Rno7l4b/I8/WWgIP3x6js6L0GCmv9op+f89b0I4I+NZtj1Va5uOWfHq18Tpe4ymDceEiqoHVPNpR8ajk80jIIkwtd7cI6CzAMY7V1h7wgBHq43wy/2juy2k/o/gOBLfeZ4IVLRLdPzy6m8ydjn3CvhFMSEWh9jchRE9VFm19C03pwLatWdgNoJ4IwOE8ZPq9oDwa+lpZ6oLyy9kNYaTPNQEFNymuNyFCStC/Tn6s3wIgGWNZfcNWzfZmxYDv0LlKgNUHKKeOqfrUjtqfrLc1v+hhSuVdKo8kgOCpIuz2Oy5SbImNEpzTH1RyJXTh9YfMoypsKmpyCWW5OXIHO1yrUK8nCS5Xkit0weWPxOkhyuj6UgljuYlyDxsoKafyeArxsscQFKbmzMLz5hMHaghlAQy+3MU5BDklTvB9SXNZf5CgSPqxYemVoIX9YcM9BhFMRye/MWZEWS8ZGPQUU7FbBJoDYAsiH+36IwC0EAqKCl5C/T8+ErlnE4l56CWG5ZEQSxvMSBTk9BLLeXglgGbDk9BbEMmIJYBmw5PQWxDJiCWAZsOT0FsQyYglgGbDk9BbEMmIJYBmw5PQWxDJiCWAZsOT0FsQyYglgGbDk9BbEMmIJYBmw5PQWxDJiCWAZsOT0FsQyYglgGbDk9BbEMmIJYBmw5PQWxDJiCWAZsOT0FsQyYglgGbDk9BbEMmIJYBmw5PQWxDJiCWAZsOT0FsQyYglgGbDk9BbEMOBj3fwaFT6+ZJtGdCi2XzPSrCAQ1/9sAblkD5e1GMzyp6KCceIDO7lr1Zg/qnjUw31Ged9bU/vf2Fx1y2esLav4vAVx2FAfBY40DYcencRWFmRuCjA1f5In322OgKbVrxKt8IctnXRSlcS7U8fJYdfMw1F3S/rF0tzaaYXzHmEL/OCHIzCk4fmidH9+yf2MbmgcVMCdK/avQpMtYnMj5ANre0V4puWxqfvHpomNxQpAYYlDz43tTFf5fnKI3vAj1CfBIvRm2fVR2EepbXYMzgqxIMu7/FQpnFw0i6+mPgOmDhPqbJZ1opwSJlzxb858U4Ip0ls8smRJQaCqFK126oZ5zghw+3boGwLcOPW2WP44QcOKifC1LJwWJF7F3C05U4ci2SEXblWC7KHWCIwdKecoUeUEJnvdaQ8/XF979h4sLd1YQF2GzZvcIUBD3esaKMyRAQTKEzancI0BB3OsZK86QAAXJEDanco8ABXGvZ6w4QwIUJEPYnMo9AhTEvZ6x4gwJUJAMYXMq9whQEPd6xoozJEBBMoTNqdwjQEHc6xkrzpAABckQNqdyjwAFca9nrDhDAhQkQ9icyj0CFMS9nrHiDAlQkAxhcyr3CFAQ93rGijMkQEEyhM2p3CNAQdzrGSvOkAAFyRA2p3KPAAVxr2esOEMCFCRD2JzKPQIUxL2eseIMCVCQDGFzKvcI/BfEWQpB/Oo7FAAAAABJRU5ErkJggg=="},ba94:function(t,n,i){"use strict";i("0b2f")},d7bc:function(t,n,i){},f639:function(t,n,i){t.exports=i.p+"img/MV.e3a8cf9f.png"},fc08:function(t,n,i){"use strict";i("7b5e")}}]);
//# sourceMappingURL=chunk-6ed4a38e.eff342ee.js.map