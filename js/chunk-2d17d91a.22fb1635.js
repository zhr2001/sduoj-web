(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d17d91a"],{"0b55":function(t,e,s){"use strict";var i=s("69bc"),n=s.n(i);n.a},"0c79":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("strong",[t._v(t._s(t.oj))]),t._v("-"+t._s(t.code)+" ")])},n=[],o=(s("ac1f"),s("1276"),{name:"ProblemCode",props:{problemCode:{type:String,default:"-"}},computed:{oj:function(){return this.problemCode.split("-")[0]},code:function(){return this.problemCode.split("-")[1]}}}),r=o,u=s("2877"),a=Object(u["a"])(r,i,n,!1,null,"5306d58a",null);e["a"]=a.exports},1276:function(t,e,s){"use strict";var i=s("d784"),n=s("44e7"),o=s("825a"),r=s("1d80"),u=s("4840"),a=s("8aa5"),l=s("50c4"),c=s("14c3"),d=s("9263"),m=s("d039"),b=[].push,f=Math.min,p=4294967295,h=!m((function(){return!RegExp(p,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(r(this)),o=void 0===s?p:s>>>0;if(0===o)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,o);var u,a,l,c=[],m=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,h=new RegExp(t.source,m+"g");while(u=d.call(h,i)){if(a=h.lastIndex,a>f&&(c.push(i.slice(f,u.index)),u.length>1&&u.index<i.length&&b.apply(c,u.slice(1)),l=u[0].length,f=a,c.length>=o))break;h.lastIndex===u.index&&h.lastIndex++}return f===i.length?!l&&h.test("")||c.push(""):c.push(i.slice(f)),c.length>o?c.slice(0,o):c}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var n=r(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n,s):i.call(String(n),e,s)},function(t,n){var r=s(i,t,this,n,i!==e);if(r.done)return r.value;var d=o(t),m=String(this),b=u(d,RegExp),g=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(h?"y":"g"),C=new b(h?d:"^(?:"+d.source+")",v),y=void 0===n?p:n>>>0;if(0===y)return[];if(0===m.length)return null===c(C,m)?[m]:[];var j=0,S=0,R=[];while(S<m.length){C.lastIndex=h?S:0;var I,x=c(C,h?m:m.slice(S));if(null===x||(I=f(l(C.lastIndex+(h?0:S)),m.length))===j)S=a(m,S,g);else{if(R.push(m.slice(j,S)),R.length===y)return R;for(var _=1;_<=x.length-1;_++)if(R.push(x[_]),R.length===y)return R;S=j=I}}return R.push(m.slice(j)),R}]}),!h)},2909:function(t,e,s){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,i=new Array(e);s<e;s++)i[s]=t[s];return i}function n(t){if(Array.isArray(t))return i(t)}s.d(e,"a",(function(){return a}));s("a4d3"),s("e01a"),s("d28b"),s("a630"),s("d3b7"),s("3ca3"),s("ddb0");function o(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}s("fb6a"),s("b0c0"),s("25f0");function r(t,e){if(t){if("string"===typeof t)return i(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?i(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t){return n(t)||o(t)||r(t)||u()}},3452:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.spinShow?s("Spin",{attrs:{size:"large",fix:""}}):t._e(),s("Row",[s("Col",{attrs:{span:"17"}},[s("div",{staticStyle:{"margin-right":"20px"}},[s("Card",{staticClass:"box",attrs:{"dis-hover":"",padding:0}},[s("JudgeResult",{staticClass:"title",attrs:{slot:"title",result:t.submission.judgeResult,total:t.submission.checkpointNum,current:t.judgedCheckpointNum},slot:"title"}),t.showCheckpointResults?s("Table",{staticClass:"data-table",attrs:{"disabled-hover":"","no-data-text":"",size:"small",columns:t.columns,data:t.submission.checkpointResults},scopedSlots:t._u([{key:"judge-result",fn:function(t){var e=t.row;return[s("JudgeResult",{attrs:{result:e.judgeResult}})]}},{key:"time",fn:function(e){var i=e.row;return[s("span",{staticClass:"time"},[t._v(t._s(i.usedTime))])]}},{key:"mem",fn:function(e){var i=e.row;return[s("span",{staticClass:"mem"},[t._v(t._s(i.usedMemory))])]}}],null,!1,1916629984)}):t._e()],1),t.showJudgeLog?s("Card",{staticClass:"box",attrs:{title:"Judge Log","dis-hover":""}},[s("div",{staticClass:"judge-log"},[t._v(t._s(t.submission.judgeLog))])]):t._e(),t.showCode?s("Card",{staticClass:"box",attrs:{title:"Your Code",icon:"md-code","dis-hover":"",padding:0}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("span",[t._v("Your Code")]),s("Tooltip",{attrs:{content:"copy",placement:"right"}},[s("Icon",{staticClass:"hover",attrs:{type:"md-copy"},on:{click:function(e){return t.copyToClipboard(t.submission.code)}}})],1)],1),s("p",{staticStyle:{color:"#bbb"},attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.submission.codeLength||0)+" B")]),s("div",{directives:[{name:"highlight-linenumber",rawName:"v-highlight-linenumber",value:t.submission.code,expression:"submission.code"}]},[s("pre",[s("code")])])]):t._e()],1)]),s("Col",{attrs:{span:"7"}},[s("Card",{attrs:{title:"Submission",icon:"ios-options","dis-hover":"",padding:0}},[s("CellGroup",{on:{"on-click":t.onCellClick}},[s("div",{staticStyle:{"margin-top":"24px"}},[t.submission.username===t.username?s("Cell",{attrs:{title:"Public"}},[s("i-switch",{attrs:{slot:"extra","true-color":"#19be6b"},slot:"extra",model:{value:t.submission.isPublic,callback:function(e){t.$set(t.submission,"isPublic",e)},expression:"submission.isPublic"}})],1):t._e(),t.canDoRejudge?s("Cell",{attrs:{name:"rejudge",disabled:t.submission.judgeResult<0}},[s("strong",[t._v("Rejudge")]),s("Icon",{attrs:{slot:"icon",type:"md-refresh",color:"#2d8cf0"},slot:"icon"})],1):t._e(),t.canDoInvalidate?s("Cell",{attrs:{name:"invalidate",disabled:t.submission.judgeResult<0}},[s("strong",[t._v("Invalidate")]),s("Icon",{attrs:{slot:"icon",type:"md-close-circle",color:"#d9534f"},slot:"icon"})],1):t._e(),s("Divider",{attrs:{size:"small"}}),t.contestId?[s("Cell",{attrs:{title:"Contest",extra:t.$store.state.contest.contest.contestTitle,to:{name:"contest-overview",params:{contestId:t.contestId}}}}),s("Cell",{attrs:{title:"Problem Code",extra:t._f("contestProblemId")(t.submission.problemCode),to:{name:"contest-problem",params:{problemCode:t.submission.problemCode}}}})]:[s("Cell",{attrs:{title:"Problem Code",to:{name:"problem-detail",params:{problemCode:t.submission.problemCode}}}},[s("ProblemCode",{attrs:{slot:"extra",problemCode:t.submission.problemCode},slot:"extra"})],1)],s("Cell",{attrs:{title:"Problem Title",extra:t.submission.problemTitle}})],2),s("Divider",{attrs:{size:"small"}}),s("div",{staticStyle:{"margin-bottom":"24px"}},[s("Cell",{attrs:{title:"Submission ID",extra:t.submission.submissionId}}),s("Cell",{attrs:{title:"Create Time"}},[s("Time",{attrs:{slot:"extra",time:t._f("parseInt")(t.submission.gmtCreate),type:"datetime"},slot:"extra"})],1),s("Cell",{attrs:{title:"Judge Time"}},[s("Time",{attrs:{slot:"extra",time:t._f("parseInt")(t.submission.gmtModified),type:"datetime"},slot:"extra"})],1),s("Cell",{attrs:{title:"Username",extra:t.submission.username}}),s("Cell",{attrs:{title:"Judge Result"}},[s("JudgeResult",{attrs:{slot:"extra",result:t.submission.judgeResult},slot:"extra"})],1),t.submission.judgeScore?s("Cell",{attrs:{title:"Score"}},[s("span",{attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.submission.judgeScore||0))])]):t._e(),s("Cell",{attrs:{title:"Judge Template",extra:t.submission.judgeTemplateTitle}}),s("Cell",{attrs:{title:"Total Time"}},[s("span",{staticClass:"time",attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.submission.usedTime||0))])]),s("Cell",{attrs:{title:"Total Memory"}},[s("span",{staticClass:"mem",attrs:{slot:"extra"},slot:"extra"},[t._v(t._s(t.submission.usedMemory||0))])])],1)],1)],1)],1)],1)],1)},n=[],o=(s("99af"),s("4de4"),s("4160"),s("a434"),s("d3b7"),s("25f0"),s("159b"),s("2909")),r=s("5530"),u=s("0c79"),a=s("8035"),l=s("e325"),c=s("2f62"),d=s("7c15"),m=s("bedf"),b=s("c9d9"),f={components:{JudgeResult:a["a"],ProblemCode:u["a"]},mixins:[l["b"]],inject:["reload"],data:function(){return{submission:{checkpointResults:[]},columns:[{title:"#",key:"id"},{title:"Result",minWidth:50,slot:"judge-result"},{title:"Score",key:"judgeScore"},{title:"Time",slot:"time"},{title:"Memory",slot:"mem"}],spinShow:!1}},filters:{parseInt:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){return parseInt(t)})),contestProblemId:function(t){return Object(m["a"])(t)}},methods:{copyToClipboard:function(t){var e=this;this.$copyText(t).then((function(t){return e.$Message.success("已复制到剪切板")}))},gotoProblem:function(t){this.$router.push({name:"problem-detail",params:{problemCode:t}})},wsSuccess:function(t){"string"===typeof t&&(t=JSON.parse(t));for(var e=0;e<t.length;++e){if(!Array.isArray(t[e])){this.fillCheckpointResults(t);break}this.fillCheckpointResults(t[e])}},fillCheckpointResults:function(t){var e=this;if(t[1]<b["e"].PD)switch(t[1]){case b["e"].CP:this.$set(this.submission,"judgeResult",b["e"].CP);break;case b["e"].JG:this.submission.checkpointResults.forEach((function(t){e.$set(t,"judgeResult",b["e"].JG)})),this.$set(this.submission,"judgeResult",b["e"].JG);break;case b["e"].END:this.websock.close(),this.submission=Object(r["a"])(Object(r["a"])({},this.submission),{},{judgeResult:t[2],judgeScore:t[3],usedTime:t[4].toString(),usedMemory:t[5].toString()}),this.getSubmissionDetail(this.submission.submissionId);break}else this.submission.checkpointResults.splice(t[1],1,{id:t[1]+1,judgeResult:t[2],judgeScore:t[3],usedTime:t[4].toString(),usedMemory:t[5].toString()})},getSubmissionDetail:function(t){var e=this;d["a"].getSubmissionDetail({submissionId:t}).then((function(t){if(e.submission=Object(r["a"])({},t),e.submission.checkpointResults=[],e.showCode){if(e.contestId){var s=e.contest.features[e.contestStatus===b["c"].RUNNING?"contestRunning":"contestEnd"],i=s.displayCheckpointResult;if(!i)return}if(t.judgeResult<=0){for(var n=0;n<t.checkpointNum;++n)e.submission.checkpointResults.push({id:n+1,judgeResult:t.judgeResult,judgeScore:0,usedTime:0,usedMemory:0});e.initWebSocket("/submission",[e.submission.submissionId],e.wsSuccess)}else t.checkpointResults.forEach((function(s,i){e.fillCheckpointResults([t.submissionId,i].concat(Object(o["a"])(s)))}))}})).finally((function(){e.spinShow=!1}))},onCellClick:function(t){var e=this;this.submission.judgeResult<0||("rejudge"===t?d["a"].rejudge([this.submission.submissionId]).then((function(t){e.getSubmissionDetail(e.submission.submissionId)})):"invalidate"===t&&d["a"].invalidate({submissionId:this.submission.submissionId,contestId:this.contestId}).then((function(t){e.getSubmissionDetail(e.submission.submissionId)})))},query:function(t){t&&(this.spinShow=!0,this.getSubmissionDetail(t))}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(c["c"])("user",["username","isAdmin","isLogin"])),Object(c["c"])("contest",["contestId"])),Object(c["d"])("contest",["contest"])),{},{showCode:function(){return!!this.submission.code},showJudgeLog:function(){return!!this.submission.judgeLog},showCheckpointResults:function(){return 0!==this.submission.checkpointResults.length&&(this.submission.judgeResult!==b["e"].CAN&&(this.submission.judgeResult>0?!(this.submission.judgeResult===b["e"].CE||this.submission.judgeResult===b["e"].SE):this.submission.judgeResult===b["e"].JG))},canDoRejudge:function(){return this.isAdmin||this.contestId&&this.isLogin&&this.username===this.contest.username},canDoInvalidate:function(){return this.isAdmin||this.contestId&&this.isLogin&&this.username===this.contest.username},judgedCheckpointNum:function(){return this.submission.checkpointResults.filter((function(t){return t.judgeResult>b["e"].PD})).length}}),mounted:function(){this.query(this.$route.params.submissionId)},watch:{$route:function(){this.query(this.$route.params.submissionId)}}},p=f,h=(s("f622"),s("0b55"),s("2877")),g=Object(h["a"])(p,i,n,!1,null,"656d7b48",null);e["default"]=g.exports},"46e9":function(t,e,s){},5602:function(t,e,s){"use strict";var i=s("b18f"),n=s.n(i);n.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),n=s("5899"),o="["+n+"]",r=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),a=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(u,"")),s}};t.exports={start:a(1),end:a(2),trim:a(3)}},"69bc":function(t,e,s){},7156:function(t,e,s){var i=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var o,r;return n&&"function"==typeof(o=e.constructor)&&o!==s&&i(r=o.prototype)&&r!==s.prototype&&n(t,r),t}},8035:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return null!==t.result?s("div",{staticClass:"judge-result"},[s("Icon",{attrs:{type:t.judgeResult.icon,color:t.judgeResult.color}}),s("span",{class:t.judgeResult.css+" hover"},[t._v(t._s(t.abbr?t.judgeResult.abbr:t.judgeResult.name))]),t.result===t.JUDGE_RESULT_TYPE.JG&&t.total>0?[s("span",{class:t.judgeResult.css+" hover"},[t._v(t._s(" ("+t.current+"/"+t.total+")"))])]:t._e()],2):t._e()},n=[],o=(s("a9e3"),s("c9d9")),r={props:{result:{type:Number,default:null},abbr:{type:Boolean,default:!1},total:{type:Number,default:0},current:{type:Number,default:0}},computed:{judgeResult:function(){return o["d"][this.result]},JUDGE_RESULT_TYPE:function(){return o["e"]}}},u=r,a=(s("5602"),s("2877")),l=Object(a["a"])(u,i,n,!1,null,"237b6ed6",null);e["a"]=l.exports},a630:function(t,e,s){var i=s("23e7"),n=s("4df4"),o=s("1c7e"),r=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:n})},a9e3:function(t,e,s){"use strict";var i=s("83ab"),n=s("da84"),o=s("94ca"),r=s("6eeb"),u=s("5135"),a=s("c6b6"),l=s("7156"),c=s("c04e"),d=s("d039"),m=s("7c73"),b=s("241c").f,f=s("06cf").f,p=s("9bf2").f,h=s("58a8").trim,g="Number",v=n[g],C=v.prototype,y=a(m(C))==g,j=function(t){var e,s,i,n,o,r,u,a,l=c(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+l}for(o=l.slice(2),r=o.length,u=0;u<r;u++)if(a=o.charCodeAt(u),a<48||a>n)return NaN;return parseInt(o,i)}return+l};if(o(g,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var S,R=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof R&&(y?d((function(){C.valueOf.call(s)})):a(s)!=g)?l(new v(j(e)),s,R):j(e)},I=i?b(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)u(v,S=I[x])&&!u(R,S)&&p(R,S,f(v,S));R.prototype=C,C.constructor=R,r(n,g,R)}},b0c0:function(t,e,s){var i=s("83ab"),n=s("9bf2").f,o=Function.prototype,r=o.toString,u=/^\s*function ([^ (]*)/,a="name";i&&!(a in o)&&n(o,a,{configurable:!0,get:function(){try{return r.call(this).match(u)[1]}catch(t){return""}}})},b18f:function(t,e,s){},d28b:function(t,e,s){var i=s("746f");i("iterator")},e01a:function(t,e,s){"use strict";var i=s("23e7"),n=s("83ab"),o=s("da84"),r=s("5135"),u=s("861d"),a=s("9bf2").f,l=s("e893"),c=o.Symbol;if(n&&"function"==typeof c&&(!("description"in c.prototype)||void 0!==c().description)){var d={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new c(t):void 0===t?c():c(t);return""===t&&(d[e]=!0),e};l(m,c);var b=m.prototype=c.prototype;b.constructor=m;var f=b.toString,p="Symbol(test)"==String(c("test")),h=/^Symbol\((.*)\)[^)]+$/;a(b,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=f.call(t);if(r(d,t))return"";var s=p?e.slice(7,-1):e.replace(h,"$1");return""===s?void 0:s}}),i({global:!0,forced:!0},{Symbol:m})}},f622:function(t,e,s){"use strict";var i=s("46e9"),n=s.n(i);n.a},fb6a:function(t,e,s){"use strict";var i=s("23e7"),n=s("861d"),o=s("e8b5"),r=s("23cb"),u=s("50c4"),a=s("fc6a"),l=s("8418"),c=s("b622"),d=s("1dde"),m=s("ae40"),b=d("slice"),f=m("slice",{ACCESSORS:!0,0:0,1:2}),p=c("species"),h=[].slice,g=Math.max;i({target:"Array",proto:!0,forced:!b||!f},{slice:function(t,e){var s,i,c,d=a(this),m=u(d.length),b=r(t,m),f=r(void 0===e?m:e,m);if(o(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!o(s.prototype)?n(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return h.call(d,b,f);for(i=new(void 0===s?Array:s)(g(f-b,0)),c=0;b<f;b++,c++)b in d&&l(i,c,d[b]);return i.length=c,i}})}}]);
//# sourceMappingURL=chunk-2d17d91a.22fb1635.js.map