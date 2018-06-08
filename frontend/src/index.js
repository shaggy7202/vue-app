import Vue from 'vue'
Vue.config.productionTip = false;


new Vue({
    delimiters:["{", "}"],
    el: '#app',
    data:{
        msg:'Hello!'
    },

});
