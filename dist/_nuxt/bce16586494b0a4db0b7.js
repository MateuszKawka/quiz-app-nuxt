(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,n){var s=n(210);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(9).default)("14bf642d",s,!0,{})},198:function(t,e,n){var s=n(212);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(9).default)("46ee6872",s,!0,{})},199:function(t,e,n){var s=n(214);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(9).default)("722259f4",s,!0,{})},200:function(t,e,n){var s=n(216);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n(9).default)("acb8dc48",s,!0,{})},209:function(t,e,n){"use strict";var s=n(197);n.n(s).a},210:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.answer[data-v-0b159536]{background:none;border-color:#e4fde1;color:#e4fde1;font-weight:600;margin-top:1rem;white-space:normal\n}\n.button--good[data-v-0b159536]{background:#e4fde1;color:#629460\n}\n.button--bad[data-v-0b159536]{background:#c03221;border-color:#c03221\n}\n.game-card[data-v-0b159536]{background:none;border:none;height:100%\n}\n.card-body[data-v-0b159536]{display:flex;flex-wrap:wrap;padding:1rem 0\n}\n.card-title[data-v-0b159536]{color:#e4fde1;font-size:1.2rem;font-weight:600\n}",""])},211:function(t,e,n){"use strict";var s=n(198);n.n(s).a},212:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.heart[data-v-5e206592]{width:1.75rem;height:1.75rem\n}\n.hearts[data-v-5e206592]{margin-top:20%\n}",""])},213:function(t,e,n){"use strict";var s=n(199);n.n(s).a},214:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.score-container[data-v-560b02fe]{width:100%;margin-top:20%\n}\n.score[data-v-560b02fe]{font-weight:700;text-align:right\n}",""])},215:function(t,e,n){"use strict";var s=n(200);n.n(s).a},216:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,"\n.game-container[data-v-e5ac79ae]{padding-top:10%\n}",""])},221:function(t,e,n){"use strict";n.r(e);n(28);var s={data:function(){return{transition:"question-left-to-right"}},components:{SettingsIcon:n(101).a},computed:{question:function(){return this.$store.state.question},answers:function(){return this.$store.state.answers},questionTitle:function(){return"".concat(this.question.category," - ").concat(this.question.difficulty)},questionReady:function(){return this.$store.state.questionReady},hearts:function(){return this.$store.state.hearts}},methods:{getQuestion:function(){this.$store.dispatch("setQuestion")},checkAnswer:function(t){var e=this;this.triggerDisableButtons(!0);var n=this.question.correct_answer,s=t.currentTarget;s.textContent===n?this.goodAnswer(s):this.badAnswer(s),setTimeout(function(){e.hearts,e.getQuestion()},1500),this.detectEndGame()},goodAnswer:function(t){t.classList.add("button--good"),"hard"===this.$store.getters.getHardmode?this.$store.commit("ADD_HARD_POINTS"):this.$store.commit("ADD_POINTS")},badAnswer:function(t){this.showCorrectAnswer(),t.classList.add("button--bad"),this.$store.commit("REMOVE_HEART")},detectEndGame:function(){},triggerDisableButtons:function(t){document.querySelectorAll(".answer").forEach(function(e){e.disabled=t})},showCorrectAnswer:function(){}},mounted:function(){}},o=(n(209),n(5)),r=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide-right-to-left",mode:"in-out"}},[t.questionReady?n("b-card",{key:"game",staticClass:"game-card",attrs:{title:t.questionTitle,variant:"transparent","align-self":"center"}},[n("h2",{staticClass:"card-text text-center h5 text-white",domProps:{innerHTML:t._s(t.question.question)}}),t._v(" "),n("b-button-group",{staticClass:"btn-block",attrs:{vertical:"",size:"lg"}},[n("b-container",[n("b-row",{staticClass:"align-items-center min-100"},[n("b-col",t._l(t.answers,function(e,s){return n("b-button",{key:s,staticClass:"btn-block answer",domProps:{innerHTML:t._s(e)},on:{click:t.checkAnswer}})}))],1)],1)],1)],1):t._e()],1)],1)},[],!1,null,"0b159536",null);r.options.__file="Game.vue";var a=r.exports,i={name:"Hearts",computed:{hearts:function(){return this.$store.state.hearts}},watch:{hearts:function(t){0===t&&(this.$store.commit("SET_END_TIME"),this.detectEndGame())}},methods:{detectEndGame:function(){console.log("GAME OVER"),this.$router.push("/ending")}}},c=(n(211),Object(o.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hearts"},[e("transition-group",{attrs:{name:"slide-left-to-right"}},this._l(this.hearts,function(t,n){return e("img",{key:n,staticClass:"heart",attrs:{src:"/heart.svg"}})}))],1)},[],!1,null,"5e206592",null));c.options.__file="Hearts.vue";var u=c.exports,l={name:"Score",computed:{score:function(){return this.$store.state.points}}},d=(n(213),Object(o.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"score-container"},[e("p",{staticClass:"text-light h3 score"},[this._v(this._s(this.score)+" ")])])},[],!1,null,"560b02fe",null));d.options.__file="Score.vue";var h={name:"GamePage",components:{Game:a,Hearts:u,Score:d.exports},mounted:function(){this.$store.commit("SET_START_TIME")}},f=(n(215),Object(o.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{staticClass:"min-100 game-container",attrs:{fluid:""}},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("Hearts")],1),this._v(" "),e("b-col",{attrs:{cols:"6"}},[e("Score")],1)],1),this._v(" "),e("b-row",[e("b-col",[e("Game")],1)],1)],1)},[],!1,null,"e5ac79ae",null));f.options.__file="index.vue";e.default=f.exports}}]);