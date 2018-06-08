import Vue from 'vue'
Vue.config.productionTip = false;
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app = new Vue({
    delimiters:["{", "}"],
    el: '#app',
    data:{
        msg:'Hello!',
        groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]

    },
    methods:{
        reverseMessage: function () {
            this.msg = this.msg.split('').reverse().join('')
        }
    },

});
