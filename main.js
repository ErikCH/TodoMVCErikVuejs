const STORAGE_KEY = 'todo-storage';
new Vue({
  el: '.todoapp',
  data () {
    return {
      newTodo: '',
      todos:[],
      editedTodo:null

    }
  },
  created () {
      this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  methods: {
    addTodo() {
      this.todos.push({title: this.newTodo, completed: 'false', id: this.todos.length });
      this.newTodo = '';
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));

    },
    removeTodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
    editTodo(todo) {
      this.editedTodo = todo;

    },
    doneEdit(todo) {
      if (!this.editedTodo) {
          return
      }
      this.editedTodo = null;
      todo.title = todo.title.trim();
      if (!todo.title) {
        this.removeTodo(todo);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    }
  }
});
