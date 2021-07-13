<template>
  <form class="flex flex-col py-2" @submit.prevent="addTodoHandler">
    <label for="newTodo">Add a todo</label>
    <input id="newTodo" class="p-1 shadow" type="text" v-model="newTodoText" />
    <button
      type="submit"
      class="bg-green-400 border border-green-600 my-4 w-48 m-auto text-black hover:bg-green-300 hover:border-green-500 hover:shadow transition duration-50"
    >
      Add Todo
    </button>
  </form>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AddTodo",
  data() {
    return {
      newTodoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodoHandler() {
      if (!this.newTodoText.trim()) return;

      this.addTodo(this.newTodoText);
      this.newTodoText = "";
    },
  },
});
</script>
