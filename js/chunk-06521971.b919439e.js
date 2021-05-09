(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06521971"],{8336:function(s,e,t){"use strict";var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("Card",{staticClass:"clearfix",attrs:{"dis-hover":"",padding:0}},[t("Table",{staticClass:"data-table",attrs:{size:s.size,"show-header":s.showHeader,"no-data-text":s.noDataText,columns:s.filteredColumns,data:s.submissions,loading:s.loading},on:{"on-selection-change":s.onSelectionChange,"on-sort-change":s.onSort,"on-cell-click":s.onCellClick},scopedSlots:s._u([{key:"id",fn:function(e){var i=e.row;return[t("router-link",{attrs:{to:{name:s.contestId?"contest-submission-detail":"submission-detail",params:{submissionId:i.submissionId}}}},[s._v(s._s(i.submissionId))])]}},{key:"title",fn:function(e){var i=e.row;return[t("Tooltip",{attrs:{content:i.problemTitle,theme:"light",transfer:""}},[t("router-link",{attrs:{to:{name:s.contestId?"contest-problem":"problem-detail",params:{problemCode:i.problemCode}}}},[s._v(s._s(s._f("problemCodeEncode")(i.problemCode)))])],1)]}},{key:"judge-result",fn:function(s){var e=s.row;return[t("JudgeResult",{attrs:{result:e.judgeResult,total:e.checkpointNum,current:e.$judgedNum}})]}},{key:"score",fn:function(e){var i=e.row;return[t("span",[s._v(s._s(null===i.judgeScore?"":i.judgeScore))])]}},{key:"time",fn:function(e){var i=e.row;return[t("span",{staticClass:"time"},[s._v(s._s(i.usedTime||0))])]}},{key:"mem",fn:function(e){var i=e.row;return[t("span",{staticClass:"mem"},[s._v(s._s(i.usedMemory||0))])]}},{key:"submit-time",fn:function(e){var i=e.row;return[t("Tooltip",{attrs:{content:s._f("timeformat")(i.gmtCreate,"yyyy-MM-DD HH:mm:ss"),transfer:""}},[t("span",[s._v(s._s(s._f("fromnow")(i.gmtCreate)))])])]}}])}),t("div",[s._t("default")],2)],1)},n=[],o=(t("99af"),t("4de4"),t("4160"),t("caad"),t("b64b"),t("d3b7"),t("25f0"),t("2532"),t("159b"),t("5530")),r=t("8035"),a=t("e325"),c=t("c9d9"),l=t("bedf"),u=t("7c15"),d=t("4360"),m=t("2f62"),f=t("c1df"),b=t.n(f),p={name:"SubmissionList",components:{JudgeResult:r["a"]},mixins:[a["b"]],props:{selection:{type:Boolean,default:!1},size:{type:String,default:"default"},showHeader:{type:Boolean,default:!0},doRejudge:{type:Boolean,default:!1},noDataText:{type:String,default:""},bannedKey:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[{title:"#",key:"submissionId",width:165,slot:"id",props:{vOnce:!0}},{title:"Username",key:"username",width:200,props:{vOnce:!0}},{title:"Problem",key:"problemCode",slot:"title",align:"center"},{title:"Judge Result",key:"judgeResult",slot:"judge-result",width:200,align:"center"},{title:"Score",key:"judgeScore",maxWidth:100,slot:"score",align:"center"},{title:"Time",key:"usedTime",slot:"time",sortable:!0,align:"right"},{title:"Memory",key:"usedMemory",slot:"mem",sortable:!0,align:"right"},{title:"Template",key:"judgeTemplateTitle",props:{vOnce:!0},align:"center"},{title:"Submit Time",key:"gmtCreate",sortable:!0,slot:"submit-time",align:"center"}]}}},filters:{timeformat:function(s,e){return"string"===typeof s&&(s=parseInt(s)),b()(new Date(s)).format(e)},fromnow:function(s){return"string"===typeof s&&(s=parseInt(s)),b()(new Date(s)).fromNow()},problemCodeEncode:function(s){return d["a"].state.contest.contest.contestId?Object(l["b"])(s):s}},data:function(){return{filteredColumns:[],submissions:[],loading:!1,listenedSubmissions:{}}},computed:Object(o["a"])(Object(o["a"])({},Object(m["d"])("contest",["contest"])),Object(m["c"])("contest",["contestId"])),methods:{onSort:function(s){this.$emit("on-sort",s)},onCellClick:function(s,e,t,i){this.$emit("on-cell-click",s,e,t,i)},onSelectionChange:function(s){this.$emit("on-selection-change",s)},wsSuccess:function(s){"string"===typeof s&&(s=JSON.parse(s));for(var e=0;e<s.length;++e){if(!Array.isArray(s[e])){this.fillCheckpointResults(s);break}this.fillCheckpointResults(s[e])}},fillCheckpointResults:function(s){var e=this.listenedSubmissions[s[0]];void 0!==e&&(s[1]<c["g"].PD?s[1]===c["g"].END?(this.submissions[e].judgeResult=s[2],this.submissions[e].judgeScore=s[3],this.submissions[e].usedTime=s[4].toString(),this.submissions[e].usedMemory=s[5].toString(),0===--this.listenedSubmissions.$length&&this.websock.close()):this.submissions[e].judgeResult=s[1]:this.submissions[e].$judgedNum++)},querySubmissionList:function(s){var e=this;return new Promise((function(t,i){e.loading=!0,u["a"].getSubmissionList(Object(o["a"])(Object(o["a"])({},s),{},{contestId:e.contestId})).then((function(s){if(t(s),e.submissions=s.rows,e.contestId){var i=e.contest.features[e.contestStatus===c["c"].RUNNING?"contestRunning":"contestEnd"],n=i.displayCheckpointResult;if(!n)return}var o=0;e.listenedSubmissions={},s.rows.forEach((function(s,t){s.judgeResult<=c["g"].PD&&(e.$set(s,"$judgedNum",0),e.listenedSubmissions[s.submissionId]=t,o++)})),0!==o&&(e.initWebSocket("/submission",Object.keys(e.listenedSubmissions),e.wsSuccess),e.$set(e.listenedSubmissions,"$length",o))})).catch(i).finally((function(){e.loading=!1}))}))}},created:function(){var s=this;this.filteredColumns=this.columns.filter((function(e){return!s.bannedKey.includes(e.key)})),this.selection&&(this.filteredColumns=[{type:"selection",width:55}].concat(this.filteredColumns))}},h=p,g=(t("ffd1"),t("2877")),S=Object(g["a"])(h,i,n,!1,null,"4f10e386",null);e["a"]=S.exports},a38b:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container"},[t("table",{staticClass:"scoreboard"},[t("colgroup",[t("col",{attrs:{id:"scorerank"}}),s.showFlags?t("col",{attrs:{id:"scoreflags"}}):t("col"),t("col",{attrs:{id:"scoreusername"}})]),s._m(0),t("colgroup",[s.showSubmissions?s._l(s.problems,(function(s){return t("col",{key:s.problemCode,staticClass:"scoreprob"})})):s._e()],2),t("thead",[t("tr",{staticClass:"scoreheader"},[t("th",{staticStyle:{padding:"0 10px"},attrs:{title:"rank",scope:"col"}},[s._v("RANK")]),t("th",{staticStyle:{padding:"0 10px"},attrs:{title:"username",colspan:"2",scope:"col"}},[s._v("PARTICIPANT")]),t("th",{staticStyle:{padding:"0 10px"},attrs:{title:"# solved / penalty or score",colspan:"2",scope:"col"}},[s._v("SCORE")]),s._l(s.problems,(function(e){return t("th",{key:e.problemCode,attrs:{title:"problem "+e.problemTitle,scope:"col"}},[t("router-link",{staticClass:"alike",attrs:{to:{name:"contest-problem",params:{problemCode:e.problemCode}}}},[t("strong",[s._v(s._s(s._f("contestProblemId")(e.problemCode)))]),e.problemColor?t("div",{staticClass:"circle",style:"background: "+e.problemColor+"; margin-left: 5px"}):s._e()]),t("div",{staticClass:"problempoints"},[s._v(s._s(e.acceptNum||"-")+" / "+s._s(e.submitNum||"-"))])],1)}))],2)]),t("tbody",[s._l(s.likedScores,(function(e,i){return t("tr",{key:-e.user.userId,class:{sortorderswitch:0===i,scoreliked:s.likedScoresMap[e.user.userId],scorethisisme:e.user.userId===s.profile.userId},style:i===s.likedScores.length-1?"border-bottom: thick solid black;":"",attrs:{id:"user:"+e.user.userId}},[t("td",{staticClass:"scorepl"},[s.displayRank?t("span",[s._v(s._s(-1===e.rank?"*":e.rank))]):t("span",[s._v("?")])]),t("td",{staticClass:"scoreaf",staticStyle:{background:"#ffffff"}},[s.likedScoresMap[e.user.userId]?t("Icon",{staticClass:"heart fas",attrs:{type:"md-heart"},on:{click:function(t){return s.setUserLiked(e.user.userId,!1)}}}):t("Icon",{staticClass:"heart",attrs:{type:"md-heart-outline"},on:{click:function(t){return s.setUserLiked(e.user.userId,!0)}}})],1),t("td",{staticClass:"scoretn",staticStyle:{background:"#ffffff"},attrs:{title:e.user.username}},[t("span",{class:["forceWidth",{"unofficial-username":!e.official}]},[s._v(s._s(e.user.username))]),e.user.nickname?t("span",{staticClass:"forceWidth univ"},[s._v(s._s(e.user.nickname))]):s._e()]),t("td",{staticClass:"scorenc"},[s._v(s._s(e.solved))]),s.contestMode===s.CONTEST_MODE.ACM?t("td",{staticClass:"scorett"},[s._v(s._s(s._f("time2minutes")(e.score)))]):t("td",{staticClass:"scorett"},[s._v(s._s(e.score))]),s._l(e.problemResults,(function(i){return t("td",{key:i.problemCode,staticClass:"score_cell"},[s.contestMode===s.CONTEST_MODE.ACM?t("a",[i.numSubmissions+i.numSubmissionsPending>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(s._f("time2minutes")(i.time))+" "),t("span",[s._v(s._s(i.numSubmissions+i.numSubmissionsPending===1?"1 try":i.numSubmissions+i.numSubmissionsPending+" tries"))])]):s._e()]):s.contestMode===s.CONTEST_MODE.OI?t("a",[i.numSubmissions>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(i.score)+" ")]):s._e()]):s.contestMode===s.CONTEST_MODE.IOI?t("a",[i.numSubmissions>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(i.score)+" "),t("span",[s._v(s._s(s._f("time2minutes")(i.time)))])]):s._e()]):s._e()])}))],2)})),s._l(s.scores,(function(e,i){return t("tr",{key:e.user.userId,class:{sortorderswitch:0===i,scorethisisme:e.user.userId===s.profile.userId,scoreliked:s.likedScoresMap[e.user.userId]},attrs:{id:"user:"+e.user.userId}},[t("td",{staticClass:"scorepl"},[s.displayRank?t("span",[s._v(s._s(-1===e.rank?"*":e.rank))]):t("span",[s._v("?")])]),t("td",{staticClass:"scoreaf",staticStyle:{background:"#ffffff"}},[s.likedScoresMap[e.user.userId]?t("Icon",{staticClass:"heart fas",attrs:{type:"md-heart"},on:{click:function(t){return s.setUserLiked(e.user.userId,!1)}}}):t("Icon",{staticClass:"heart",attrs:{type:"md-heart-outline"},on:{click:function(t){return s.setUserLiked(e.user.userId,!0)}}})],1),t("td",{staticClass:"scoretn",staticStyle:{background:"#ffffff"},attrs:{title:e.user.username}},[t("span",{class:["forceWidth",{"unofficial-username":!e.official}]},[s._v(s._s(e.user.username))]),e.user.nickname?t("span",{staticClass:"forceWidth univ"},[s._v(s._s(e.user.nickname))]):s._e()]),t("td",{staticClass:"scorenc"},[s._v(s._s(e.solved))]),s.contestMode===s.CONTEST_MODE.ACM?t("td",{staticClass:"scorett"},[s._v(s._s(s._f("time2minutes")(e.score)))]):t("td",{staticClass:"scorett"},[s._v(s._s(e.score))]),s._l(e.problemResults,(function(i){return t("td",{key:i.problemCode,staticClass:"score_cell"},[s.contestMode===s.CONTEST_MODE.ACM?t("a",[i.numSubmissions+i.numSubmissionsPending>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(s._f("time2minutes")(i.time))+" "),t("span",[s._v(s._s(i.numSubmissions+i.numSubmissionsPending===1?"1 try":i.numSubmissions+i.numSubmissionsPending+" tries"))])]):s._e()]):s.contestMode===s.CONTEST_MODE.OI?t("a",[i.numSubmissions>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(i.score)+" ")]):s._e()]):s.contestMode===s.CONTEST_MODE.IOI?t("a",[i.numSubmissions>0?t("div",{class:i.css,on:{click:function(t){return s.showAllSubmissions(e.user.username,i.problemCode)}}},[s._v(" "+s._s(i.score)+" "),i.time<12e4?t("span",[s._v(s._s(s._f("time2minutes")(i.time))+" min")]):t("span",[s._v(s._s(s._f("time2minutes")(i.time))+" mins")])]):s._e()]):s._e()])}))],2)}))],2)]),t("Modal",{attrs:{width:"60%","footer-hide":"",closable:!1,scrollable:""},model:{value:s.modelSubmissions,callback:function(e){s.modelSubmissions=e},expression:"modelSubmissions"}},[t("SubmissionList",{ref:"SubmissionList",attrs:{size:"small",bannedKey:["problemCode","username","problemTitle"]},on:{"on-sort":s.onSort,"on-cell-click":s.onSubmissionListCellClick}},[[t("div",{staticClass:"float-right footer-pages"},[t("Page",{attrs:{size:"small","show-elevator":"","show-sizer":"",total:s.total,current:s.pageNow,"page-size":s.pageSize,"page-size-opts":s.pageSizeOpts},on:{"update:current":function(e){s.pageNow=e},"on-change":s.onPageChange,"on-page-size-change":s.onPageSizeChange}})],1)]],2)],1),t("Modal",{attrs:{width:"80%","footer-hide":"",closable:!1},model:{value:s.modelSubmissionDetail,callback:function(e){s.modelSubmissionDetail=e},expression:"modelSubmissionDetail"}},[t("SubmissionDetailView",{ref:"SubmissionDetailView"})],1)],1)},n=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("colgroup",[t("col",{attrs:{id:"scoresolv"}}),t("col",{attrs:{id:"scoretotal"}})])}],o=(t("d3b7"),t("25f0"),t("5530")),r=t("8336"),a=t("3452"),c=t("bedf"),l=t("c9d9"),u=t("2f62"),d={name:"ContestRankView",components:{SubmissionList:r["a"],SubmissionDetailView:a["default"]},data:function(){return{modelSubmissions:!1,modelSubmissionDetail:!1,showSubmissions:!0,showFlags:!1,displayRank:!0,showOnesAllSubmission:{username:"",problemCode:""},total:0,pageNow:1,pageSize:15,pageSizeOpts:[15,30,50],ascending:"",sortBy:""}},filters:{contestProblemId:function(s){return Object(c["b"])(s)},time2minutes:function(s){return 0===s?"\b":parseInt(s/6e4).toString()}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(u["c"])("user",["isAdmin"])),Object(u["d"])("contest",["contest","problems","likedScoresMap"])),Object(u["c"])("contest",["contestId","contestMode","contestStatus","scores","likedScores","problems"])),Object(u["c"])("user",["profile"])),{},{CONTEST_MODE:function(){return l["a"]}}),methods:{onPageChange:function(s){this.pageNow=s},onPageSizeChange:function(s){this.pageSize=s},onSort:function(s){var e=s.key,t=s.order;"normal"===t?(this.sortBy="",this.ascending=!1):(this.sortBy=e,this.ascending="asc"===t)},setUserLiked:function(s,e){this.$store.commit("contest/setScoreLiked",{userId:s,status:e})},showAllSubmissions:function(s,e){var t=this,i=this.contest.features[this.contestStatus===l["c"].RUNNING?"contestRunning":"contestEnd"],n=i.displayPeerSubmission;(n||this.isAdmin||s===this.profile.username)&&this.$refs.SubmissionList.querySubmissionList({username:s,problemCode:e,pageSize:this.pageSize,pageNow:this.pageNow,sortBy:this.sortBy,ascending:this.ascending}).then((function(s){t.total=parseInt(s.totalPage)*t.pageSize,t.modelSubmissions=!0})).catch((function(s){t.$Message.error(s.message)}))},onSubmissionListCellClick:function(s,e){switch(e.key){case"submissionId":case"judgeResult":(s.username===this.username||this.isAdmin||s.isPublic)&&(this.$refs.SubmissionDetailView.query(s.submissionId),this.modelSubmissionDetail=!0);break}}}},m=d,f=t("2877"),b=Object(f["a"])(m,i,n,!1,null,"4464be0a",null);e["default"]=b.exports},db19:function(s,e,t){},ffd1:function(s,e,t){"use strict";var i=t("db19"),n=t.n(i);n.a}}]);
//# sourceMappingURL=chunk-06521971.b919439e.js.map