(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29a0df3a"],{"0b5f":function(t,a,e){},"13a4":function(t,a,e){"use strict";var r=e("0b5f"),s=e.n(r);s.a},a962:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("mt-header",{attrs:{title:"查询预约信息",color:"rgb(0,204,153)"}},[e("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[e("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),e("mt-field",{staticClass:"idcardBox",attrs:{label:"身份证号",placeholder:"请输入身份证号码"},model:{value:t.idcard,callback:function(a){t.idcard=a},expression:"idcard"}}),e("div",{staticClass:"appoint",on:{click:t.query}},[t._v("查询")])],1)},s=[],i={data:function(){return{idcard:""}},methods:{query:function(){sessionStorage.setItem("IDCard",this.idcard),this.$router.push({path:"/resultlist"})}}},c=i,n=(e("13a4"),e("2877")),o=Object(n["a"])(c,r,s,!1,null,"da1a7c50",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-29a0df3a.f2ba804e.js.map