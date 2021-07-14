<template>
  <li class="flex flex-col items-center">
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
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    return {
      toggleTodo: (index) => {
        console.log(`Toggling todo ${props.todo.text}`);
        store.dispatch("toggleTodo", index);
      },
      removeTodo: (index) => {
        console.log(`Removing todo ${props.todo.text}`);
        store.dispatch("removeTodo", index);
      },
    };
  },
});
</script>
