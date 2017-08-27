new Vue({
  el: '.todoapp',
  data () {
    return {
      newTodo: '',
      todos:[ {id: 0, title: 'New Todo', completed: 'false'}]

    }
  },
  methods: {
    addTodo() {
      this.todos.push({title: this.newTodo, completed: 'false', id: this.todos.length });
      this.newTodo = '';
    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  }
});
