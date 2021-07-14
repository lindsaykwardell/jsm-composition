import { ref, computed } from "vue";
import { useStore } from "vuex";

function useTodo() {
  const store = useStore();
  const newTodoText = ref('');
  const showCompleted = ref(false);

  const todos = computed(() =>
    store.getters.getTodos.filter(
      (todo) => showCompleted.value || !todo.completed
    )
  );
  const todoCount = computed(() => store.getters.getTodos.length);
  const completedTodoCount = computed(
    () => store.getters.getTodos.filter((todo) => todo.completed).length
  );

  function addTodoHandler() {
    if (!newTodoText.value.trim()) return;

    store.dispatch("addTodo", newTodoText.value);
    newTodoText.value = "";
  }

  function toggleTodo(index) {
    store.dispatch("toggleTodo", index);
  }

  function removeTodo(index) {
    store.dispatch("removeTodo", index);
  }

  return {
    newTodoText,
    showCompleted,
    todos,
    todoCount,
    completedTodoCount,
    addTodoHandler,
    toggleTodo,
    removeTodo
  }
}

export default useTodo;
