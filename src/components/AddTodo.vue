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
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AddTodo",
  setup() {
    const store = useStore();
    const newTodoText = ref('');

    function addTodoHandler() {
      if (!newTodoText.value.trim()) return;

      store.dispatch("addTodo", newTodoText.value);
      newTodoText.value = "";
    }

    return {
      newTodoText,
      addTodoHandler
    }
  }
});
</script>
