const STORAGE_KEY = 'todo-storage';
new Vue({
  el: '.todoapp',
  data () {
    return {
      newTodo: '',
      todos:[],
      editedTodo:null,
      visibility: 'all'

    }
  },
  created () {
      this.todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  computed: {
    filteredTodos() {
        //all
        //completed
        //active
        if(this.visibility === 'all') {
          return this.todos;
        }
        else if ( this.visibility === 'active') {
            return this.todos.filter(function(todo) {
                return !todo.completed;
            });
        }
        else {
          //completed
          return this.todos.filter(function(todo) {
              return todo.completed;
          })

        }
    }

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
