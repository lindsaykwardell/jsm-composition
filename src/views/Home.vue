<template>
  <div class="flex flex-col items-center py-4">
    <div class="w-full flex justify-end pr-6 underline">
      <button @click="logoutHandler">Logout</button>
    </div>
    <h2 class="text-3xl italic text-gray-500">TODOS</h2>
    <div class="py-2 text-sm text-gray-500">{{ completedTodoCount }} / {{ todoCount }} completed</div>
    <button
      @click="showCompleted = !showCompleted"
      class="px-3 py-1 bg-gray-300"
    >
      {{ showCompleted ? "Hide" : "Show" }} Completed
    </button>
    <!-- Add a todo -->
    <form class="flex flex-col py-2" @submit.prevent="addTodoHandler">
      <label for="newTodo">Add a todo</label>
      <input
        id="newTodo"
        class="p-1 shadow"
        type="text"
        v-model="newTodoText"
      />
      <button
        type="submit"
        class="bg-green-400 border border-green-600 my-4 w-48 m-auto text-black hover:bg-green-300 hover:border-green-500 hover:shadow transition duration-50"
      >
        Add Todo
      </button>
    </form>
    <div
      v-if="!todos.length"
      class="italic text-gray-500 flex items-center p-1"
    >
      No todos to show
    </div>
    <ul v-else>
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="flex flex-col items-center"
      >
        <div class="flex items-center w-64 py-1 ">
          <input
            class="mr-2"
            type="checkbox"
            :checked="todo.completed"
            @click="toggleTodo(index)"
          />
          <span class="flex-grow text-sm text-gray-800">{{ todo.text }}</span>
          <button
            class="bg-red-100 rounded-full w-6 h-6 flex justify-center items-center text-sm hover:bg-red-200"
            @click="removeTodo(index)"
          >
            <i> X </i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Home",
  data() {
    return {
      newTodoText: "",
      showCompleted: false,
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
    todos() {
      return this.getTodos.filter(
        (todo) => this.showCompleted || !todo.completed
      );
    },
    todoCount() {
      return this.getTodos.length;
    },
    completedTodoCount() {
      return this.getTodos.filter(
        (todo) => todo.completed
      ).length;
    }
  },
  methods: {
    ...mapActions(["addTodo", "removeTodo", "toggleTodo", "logout"]),
    addTodoHandler() {
      if (!this.newTodoText.trim().length) return;

      this.addTodo(this.newTodoText);
      this.newTodoText = "";
    },
    logoutHandler() {
      this.logout();
    },
  },
});
</script>
