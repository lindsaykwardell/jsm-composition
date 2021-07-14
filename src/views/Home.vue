<template>
  <div class="flex flex-col items-center py-4">
    <div class="w-full flex justify-end pr-6 underline">
      <button @click="logoutHandler">Logout</button>
    </div>
    <h2 class="text-3xl italic text-gray-500">TODOS</h2>
    <div class="py-2 text-sm text-gray-500">
      {{ completedTodoCount }} / {{ todoCount }} completed
    </div>
    <button
      @click="showCompleted = !showCompleted"
      class="px-3 py-1 bg-gray-300"
    >
      {{ showCompleted ? "Hide" : "Show" }} Completed
    </button>
    <!-- Add a todo -->
    <AddTodo />
    <div
      v-if="!todos.length"
      class="italic text-gray-500 flex items-center p-1"
    >
      No todos to show
    </div>
    <ul v-else>
      <Todo
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :index="index"
      />
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useTodo from "@/hooks/useTodo";
import Todo from "../components/Todo.vue";
import AddTodo from "../components/AddTodo.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const store = useStore();
    const { showCompleted, todos, todoCount, completedTodoCount } = useTodo();

    function logoutHandler() {
      store.dispatch("logout");
    }

    return {
      showCompleted,
      todos,
      todoCount,
      completedTodoCount,
      logoutHandler,
    };
  },
  components: {
    Todo,
    AddTodo,
  },
});
</script>
